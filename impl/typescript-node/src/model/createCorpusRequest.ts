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
import { CorpusCustomDimension } from './corpusCustomDimension';
import { FilterAttribute } from './filterAttribute';

export class CreateCorpusRequest {
    /**
    * A user-provided key for a corpus.
    */
    'key': string;
    /**
    * The name for the corpus. This value defaults to the key.
    */
    'name'?: string;
    /**
    * Description for the corpus.
    */
    'description'?: string;
    /**
    * Queries made to this corpus are considered answers, and not questions.
    */
    'queriesAreAnswers'?: boolean = false;
    /**
    * Documents inside this corpus are considered questions, and not answers.
    */
    'documentsAreQuestions'?: boolean = false;
    /**
    * The encoder used by the corpus. This value defaults to the most recent Vectara encoder.
    */
    'encoderId'?: string;
    /**
    * The new filter attributes of the corpus.  If unset then the corpus will not have filter attributes. 
    */
    'filterAttributes'?: Array<FilterAttribute>;
    /**
    * A custom dimension is an additional numerical field attached to a document part. You can then multiply this numerical field with a query time custom dimension of the same name. This allows boosting (or deboosting) document parts for arbitrary reasons. This feature is only enabled for Scale customers. 
    */
    'customDimensions'?: Array<CorpusCustomDimension>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "queriesAreAnswers",
            "baseName": "queries_are_answers",
            "type": "boolean"
        },
        {
            "name": "documentsAreQuestions",
            "baseName": "documents_are_questions",
            "type": "boolean"
        },
        {
            "name": "encoderId",
            "baseName": "encoder_id",
            "type": "string"
        },
        {
            "name": "filterAttributes",
            "baseName": "filter_attributes",
            "type": "Array<FilterAttribute>"
        },
        {
            "name": "customDimensions",
            "baseName": "custom_dimensions",
            "type": "Array<CorpusCustomDimension>"
        }    ];

    static getAttributeTypeMap() {
        return CreateCorpusRequest.attributeTypeMap;
    }
}

