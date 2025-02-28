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
import { CorpusLimits } from './corpusLimits';
import { FilterAttribute } from './filterAttribute';

export class Corpus {
    /**
    * Vectara ID of the corpus.
    */
    'id'?: string;
    /**
    * A user-provided key for a corpus.
    */
    'key'?: string;
    /**
    * Name for the corpus. This value defaults to the key.
    */
    'name'?: string;
    /**
    * Corpus description.
    */
    'description'?: string;
    /**
    * Specifies whether the corpus is enabled or not.
    */
    'enabled'?: boolean;
    /**
    * Indicates that this corpus does not store documents amd stores chats instead.
    */
    'chatHistoryCorpus'?: boolean;
    /**
    * Queries made to this corpus are considered answers, and not questions. This swaps the semantics of the encoder used at query time. 
    */
    'queriesAreAnswers'?: boolean = false;
    /**
    * Documents inside this corpus are considered questions, and not answers. This swaps the semantics of the encoder used at indexing. 
    */
    'documentsAreQuestions'?: boolean = false;
    /**
    * The encoder used by the corpus.
    */
    'encoderId'?: string;
    /**
    * The new filter attributes of the corpus.
    */
    'filterAttributes'?: Array<FilterAttribute>;
    /**
    * The custom dimensions of all document parts inside the corpus.
    */
    'customDimensions'?: Array<CorpusCustomDimension>;
    'limits'?: CorpusLimits;
    /**
    * Indicates when the corpus was created.
    */
    'createdAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
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
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "chatHistoryCorpus",
            "baseName": "chat_history_corpus",
            "type": "boolean"
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
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "CorpusLimits"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Corpus.attributeTypeMap;
    }
}

