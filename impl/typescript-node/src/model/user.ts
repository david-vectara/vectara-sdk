/**
 * Vectara REST API v2
 * Vectara provides an end-to-end platform for creating GenAI products using  a simple to use API.  You can [sign up for an account](https://console.vectara.com/signup) and  then view several [API Recipes](https://docs.vectara.com/docs/api-recipes) with example queries  and parameter values.  The Vectara API Playground lets you experiment with REST endpoints from  your browser. Select an endpoint to view its definition, including the  required or optional headers, body, responses, and sample commands. On the  right side of each endpoint page, like [Get Corpus](/docs/rest-api/get-corpus), you manually  enter your API Key or OAuth Bearer Token, `customer_id`, and then any  required body parameters like the `corpusID` before sending the API  request.  :::note  Vectara supports two primary methods of authentication: API keys and OAuth  2.0, which are applicable to all endpoints. Query API Keys are used for  read-only querying operations, while Index API Keys provide read and write  access. The OAuth 2.0 operations authenticate with a Bearer Token via the  OAuth 2.0 client credentials grant. Review the [**OAuth 2.0 section**](https://docs.vectara.com/docs/learn/authentication/oauth-2) about  how to generate the token. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: feedback@vectara.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ApiPolicy } from './apiPolicy';
import { ApiRole } from './apiRole';

export class User {
    /**
    * The Vectara ID for the user.
    */
    'id'?: string;
    /**
    * The email address for the user.
    */
    'email'?: string;
    /**
    * The username for the user.
    */
    'username'?: string;
    /**
    * Indicates whether the user is enabled or disabled.
    */
    'enabled'?: boolean;
    /**
    * The description for the user.
    */
    'description'?: string;
    /**
    * When the user was created.
    */
    'createdAt'?: Date;
    /**
    * When a user property was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The role names of the user.
    */
    'apiRoles'?: Array<ApiRole>;
    'apiPolicy'?: ApiPolicy;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "apiRoles",
            "baseName": "api_roles",
            "type": "Array<ApiRole>"
        },
        {
            "name": "apiPolicy",
            "baseName": "api_policy",
            "type": "ApiPolicy"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

