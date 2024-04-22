import {Config, ConfigLoader} from './config';
import { OAuth2Client, OAuth2Token } from "@badgateway/oauth2-client";

class AuthenticationUtil {

    mode?: string;
    customerId: string;
    apiKey?: string;
    oauth2AppId?: string;
    oauth2AppSecret?: string;
    oauth2authUrl?:string;
    oauth2token?:any;
    token?:OAuth2Token;

    constructor(config: Config) {
        this.customerId = config.customerId;

        let auth = config.auth;

        if (auth.apiKey != null) {
            console.info("Creating with API Key for customer [" + this.customerId + "]");
            this.mode = "API Key"
            this.apiKey = auth.apiKey;
        }
        if (auth.oauth2AppId != null || auth.oauth2AppSecret != null) {
            if (this.mode != null) {
                throw new Error("Configuration error - mode has already been specified with [" + this.mode + "], " +
                    "so OAuth2 configuration unnecessary");
            }

            if (auth.oauth2AppId == null || auth.oauth2AppSecret == null) {
                throw new Error("Configuration error - if using OAuth2, you must specify both the oauth2AppId and " +
                    "oauth2AppSecret")
            }

            console.info("Creating with OAuth2 for [" + this.customerId + "]");
            this.mode = "OAuth2";
            this.oauth2AppId = auth.oauth2AppId;
            this.oauth2AppSecret = auth.oauth2AppSecret;

            if (auth.authUrl == null) {
                this.oauth2authUrl = "https://vectara-prod-" + this.customerId + ".auth.us-west-2.amazoncognito.com/oauth2/token"
            } else {
                this.oauth2authUrl = auth.authUrl
            }

        }

        if (this.mode == null) {
            throw new Error("You must either specify authentication configuration for an API Key or OAuth2")
        }

    }

    async initialize(): Promise<boolean> {
        if (this.mode == "OAuth2") {
            return this.authenticateOAuth2();
        } else {
            return new Promise((resolve, reject) => {
               console.info("No need to authenticate with API_KEY");
               resolve(true);
            });
        }
    }

    async authenticateOAuth2(): Promise<boolean> {
        const client = new OAuth2Client({
            server: this.oauth2authUrl,
            clientId: (this.oauth2AppId as string),
            clientSecret: (this.oauth2AppSecret as string)
        });

        let promise = client.clientCredentials();

        return promise.then((value: OAuth2Token) => {
            this.token = value;
            console.log(this.token.accessToken)
            return true;
        }).catch((error) => {
            console.log("Unable to authenticate: " + error.message)
            return false
        })

    }

    // TODO Add check for token expiry!!
    getHttpHeaders(): Map<string,string> {
        const result = new Map<string,string>

        if (this.mode == "OAuth2") {
            result.set("Customer-Id", this.customerId);

            // const accessToken = (this.token as AccessToken);
            // if (accessToken.expired()) {
            //     console.error("We're expired!!");
            // } else {
            //     console.info("We're not expired");
            // }


            const accessTokenText = (this.token as OAuth2Token).accessToken;

            result.set("Authorization", "Bearer " + accessTokenText);
        } else if (this.mode == "API Key") {
            result.set("customer-id", this.customerId);
            result.set("x-api-key", (this.apiKey as string));
        } else {
            throw new Error("Unexpected value for mode [" + this.mode + "]");
        }
        return result;
    }



}

export {AuthenticationUtil};