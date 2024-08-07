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

/**
* Reranker that is specific to the customer.
*/
export class CustomerSpecificReranker {
    /**
    * When type is is `customer_reranker`, you can specify the `reranker_id` of a reranker.  The retrieval engine will then rerank results using that reranker. 
    */
    'type'?: string = 'customer_reranker';
    /**
    * The ID of the reranker. Current reranker that may be used by Scale customers is rnk_272725719. Do not specify the MMR reranker ID here, and instead use the MMR reranker object type. 
    */
    'rerankerId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "rerankerId",
            "baseName": "reranker_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CustomerSpecificReranker.attributeTypeMap;
    }
}

