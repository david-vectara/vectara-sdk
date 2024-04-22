import yaml from 'js-yaml';
import fs from 'fs';
import os from 'os';


class Auth {

    apiKey?: string;
    oauth2AppId?: string;
    oauth2AppSecret?: string;
    authUrl?: string;

    constructor(apiKey?:string)
    constructor(oauth2AppId?:string,oauth2AppSecret?:string, authUrl?:string)
    constructor(apiKey?:string,oauth2AppId?:string,oauth2AppSecret?:string, authUrl?:string)
    constructor(apiKey?:string,oauth2AppId?:string,oauth2AppSecret?:string, authUrl?:string) {
        this.apiKey = apiKey;
        this.oauth2AppId = oauth2AppId;
        this.oauth2AppSecret = oauth2AppSecret;
        this.authUrl = authUrl;
    }

}

class Config {

    customerId: string;
    auth: Auth;

    constructor(customerId:string,auth:Auth) {
        this.customerId = customerId;
        this.auth = auth;
    }
}

class ConfigLoader {

    static DEFAULT_CONFIG = os.homedir() + '/.vec_auth.yaml';
    static DEFAULT_PROFILE = "default";

    constructor() {

    }


    load(configFilePath:string,profileName:string) {
        // Get document, or throw exception on error
        const homedir = os.homedir();

        // TODO Use specified location
        // TODO Use env variables if specified
        // TODO Check if implicit file exists

        try {

            const doc = yaml.load(fs.readFileSync(configFilePath, 'utf8'));

            // @ts-ignore
            let profile = doc[profileName];
            let customerId = profile["customer_id"]

            let authYaml = profile["auth"];
            let apiKey = authYaml["api_key"]
            let appClientId = authYaml["app_client_id"]
            let appClientSecret = authYaml["app_client_secret"]
            let authUrl = authYaml["auth_url"]

            let auth = new Auth(apiKey, appClientId, appClientSecret, authUrl);

            let config = new Config(customerId, auth);

            console.info("Loaded Configuration")
            return config;

        } catch (error : any) {
            if (error instanceof Error) {
                console.error("Unable to load configuration due to : " + error.message);
            }
            throw error;
        }
    }

}

export { Config, ConfigLoader }
