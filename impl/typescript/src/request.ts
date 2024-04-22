import { AxiosResponse } from 'axios';
import axios from 'axios';
import { AuthenticationUtil } from './auth'
import { LooseObject } from './domain';
import {OAuth2Token} from "@badgateway/oauth2-client";

class Response {
    httpStatus?: number;
    httpMessage?: string;
    success?: boolean;
    response?: any;

    constructor(httpStatus?: number, httpMessage?: string, success?: boolean, response?: any) {
        this.httpStatus = httpStatus;
        this.httpMessage = httpMessage;
        this.success = success;
        this.response = response;

    }
}

class RequestUtil {

    authenticationUtil : AuthenticationUtil

    constructor(authenticationUtil : AuthenticationUtil) {
        this.authenticationUtil = authenticationUtil;
    }

    // TODO Review work on vectara-skunk-client signature
    // TODO Add test
    request(operation: string, payload: any) : Promise<Response> {
        // Build our url with the API and operation combination
        const url = "https://api.vectara.io/v1/" + operation;

        const headers: LooseObject = {'Content-Type': 'application/json', 'Accept': 'application/json'};

        // Set Authentication Headers
        const authHeaders = this.authenticationUtil.getHttpHeaders()
        authHeaders.forEach((value: string, key: string) => {
            headers[key] = value
        })

        let config = {
            headers: headers
        }

        return axios.post(url, payload, config).then((response) => {
            console.log("Response was [" + response.status + "]");

            const success = (response.status === 200);

            return new Response(response.status, response.statusText, success, response.data);

        }).catch((error) => {
            console.error("Error making request for operation [" + operation + "]: " + error.message)
            throw error


        })

        // return promise.then((value: OAuth2Token) => {
        //     this.token = value;
        //     console.log(this.token.accessToken)
        //     return true;
        // }).catch((error) => {
        //     console.log("Unable to authenticate: " + error.message)
        //     return false
        // })


    }

}

export { RequestUtil, Response }