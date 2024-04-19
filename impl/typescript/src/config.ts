import yaml from 'js-yaml';
import fs from 'fs';
import os from 'os';


class Auth {

    apiKey?: string;
    oauth2AppId?: string;
    oauth2AppSecret?: string;

    constructor(apiKey:string)
    constructor(oauth2AppId:string,oauth2AppSecret:string)
    constructor(apiKey?:string,oauth2AppId?:string,oauth2AppSecret?:string) {
        this.apiKey = apiKey;
        this.oauth2AppId = oauth2AppId;
        this.oauth2AppSecret = oauth2AppSecret;
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

    profile: string


    constructor(profile?: string) {
        if (profile != null) {
            this.profile = profile
        } else {
            this.profile = 'default'
        }
    }

    load() {
// Get document, or throw exception on error
        const homedir = os.homedir();

        // TODO Use specified location
        // TODO Use env variables if specified
        // TODO Check if implicit file exists

        try {
            const doc = yaml.load(fs.readFileSync(homedir + '/.vec_auth.yaml', 'utf8'));
            console.log(doc);

            // @ts-ignore
            let profile = doc[this.profile];

            let auth_yaml = profile["auth"];
            let apiKey = auth_yaml["api_key"]
            let appClientId = auth_yaml["app_client_id"]
            let appClientSecret = auth_yaml["app_client_secret"]
            let authUrl = auth_yaml["auth_url"]

            console.info("Loaded Configuration")

        } catch (e) {
            console.log(e);
        }
    }

}

export { Config, ConfigLoader }
