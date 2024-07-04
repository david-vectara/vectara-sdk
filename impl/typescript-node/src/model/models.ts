import localVarRequest from 'request';

export * from './apiKey';
export * from './apiKeyRole';
export * from './apiOperationPolicy';
export * from './apiPolicy';
export * from './apiRole';
export * from './appClient';
export * from './badRequestError';
export * from './chat';
export * from './chatFullResponse';
export * from './chatInfoResponse';
export * from './chatParameters';
export * from './chatRequest';
export * from './chatStreamedResponse';
export * from './citationParameters';
export * from './contextConfiguration';
export * from './coreDocument';
export * from './coreDocumentPart';
export * from './corpus';
export * from './corpusCustomDimension';
export * from './corpusLimits';
export * from './createApiKeyRequest';
export * from './createAppClientRequest';
export * from './createClientCredentialsRequest';
export * from './createCorpusRequest';
export * from './createDocumentRequest';
export * from './createUserRequest';
export * from './customerSpecificReranker';
export * from './document';
export * from './documentStorageUsage';
export * from './encoder';
export * from './factualConsistencyScore';
export * from './filterAttribute';
export * from './generationParameters';
export * from './individualSearchResult';
export * from './job';
export * from './jobState';
export * from './keyedSearchCorpus';
export * from './lLM';
export * from './language';
export * from './listApiKeysResponse';
export * from './listAppClientsResponse';
export * from './listChatTurnsResponse';
export * from './listChatsResponse';
export * from './listCorporaResponse';
export * from './listDocumentsResponse';
export * from './listEncodersResponse';
export * from './listJobsResponse';
export * from './listLLMsResponse';
export * from './listMetadata';
export * from './listRerankersResponse';
export * from './listUsersResponse';
export * from './mMRReranker';
export * from './modelError';
export * from './modelParameters';
export * from './notFoundError';
export * from './prompt';
export * from './queryCorpusRequest';
export * from './queryFullResponse';
export * from './queryRequest';
export * from './queryStreamedResponse';
export * from './replaceFilterAttributesRequest';
export * from './replaceFilterAttributesResponse';
export * from './reranker';
export * from './searchCorporaParameters';
export * from './searchCorpus';
export * from './searchCorpusParameters';
export * from './searchParameters';
export * from './searchReranker';
export * from './searchSemantics';
export * from './streamError';
export * from './streamGenerationChunk';
export * from './streamGenerationEnd';
export * from './streamResponseEnd';
export * from './streamSearchResponse';
export * from './structuredDocument';
export * from './structuredDocumentSection';
export * from './turn';
export * from './updateApiKeyRequest';
export * from './updateAppClientRequest';
export * from './updateCorpusRequest';
export * from './updateTurnRequest';
export * from './updateUserRequest';
export * from './user';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ApiKey } from './apiKey';
import { ApiKeyRole } from './apiKeyRole';
import { ApiOperationPolicy } from './apiOperationPolicy';
import { ApiPolicy } from './apiPolicy';
import { ApiRole } from './apiRole';
import { AppClient } from './appClient';
import { BadRequestError } from './badRequestError';
import { Chat } from './chat';
import { ChatFullResponse } from './chatFullResponse';
import { ChatInfoResponse } from './chatInfoResponse';
import { ChatParameters } from './chatParameters';
import { ChatRequest } from './chatRequest';
import { ChatStreamedResponse } from './chatStreamedResponse';
import { CitationParameters } from './citationParameters';
import { ContextConfiguration } from './contextConfiguration';
import { CoreDocument } from './coreDocument';
import { CoreDocumentPart } from './coreDocumentPart';
import { Corpus } from './corpus';
import { CorpusCustomDimension } from './corpusCustomDimension';
import { CorpusLimits } from './corpusLimits';
import { CreateApiKeyRequest } from './createApiKeyRequest';
import { CreateAppClientRequest } from './createAppClientRequest';
import { CreateClientCredentialsRequest } from './createClientCredentialsRequest';
import { CreateCorpusRequest } from './createCorpusRequest';
import { CreateDocumentRequest } from './createDocumentRequest';
import { CreateUserRequest } from './createUserRequest';
import { CustomerSpecificReranker } from './customerSpecificReranker';
import { Document } from './document';
import { DocumentStorageUsage } from './documentStorageUsage';
import { Encoder } from './encoder';
import { FactualConsistencyScore } from './factualConsistencyScore';
import { FilterAttribute } from './filterAttribute';
import { GenerationParameters } from './generationParameters';
import { IndividualSearchResult } from './individualSearchResult';
import { Job } from './job';
import { JobState } from './jobState';
import { KeyedSearchCorpus } from './keyedSearchCorpus';
import { LLM } from './lLM';
import { Language } from './language';
import { ListApiKeysResponse } from './listApiKeysResponse';
import { ListAppClientsResponse } from './listAppClientsResponse';
import { ListChatTurnsResponse } from './listChatTurnsResponse';
import { ListChatsResponse } from './listChatsResponse';
import { ListCorporaResponse } from './listCorporaResponse';
import { ListDocumentsResponse } from './listDocumentsResponse';
import { ListEncodersResponse } from './listEncodersResponse';
import { ListJobsResponse } from './listJobsResponse';
import { ListLLMsResponse } from './listLLMsResponse';
import { ListMetadata } from './listMetadata';
import { ListRerankersResponse } from './listRerankersResponse';
import { ListUsersResponse } from './listUsersResponse';
import { MMRReranker } from './mMRReranker';
import { ModelError } from './modelError';
import { ModelParameters } from './modelParameters';
import { NotFoundError } from './notFoundError';
import { Prompt } from './prompt';
import { QueryCorpusRequest } from './queryCorpusRequest';
import { QueryFullResponse } from './queryFullResponse';
import { QueryRequest } from './queryRequest';
import { QueryStreamedResponse } from './queryStreamedResponse';
import { ReplaceFilterAttributesRequest } from './replaceFilterAttributesRequest';
import { ReplaceFilterAttributesResponse } from './replaceFilterAttributesResponse';
import { Reranker } from './reranker';
import { SearchCorporaParameters } from './searchCorporaParameters';
import { SearchCorpus } from './searchCorpus';
import { SearchCorpusParameters } from './searchCorpusParameters';
import { SearchParameters } from './searchParameters';
import { SearchReranker } from './searchReranker';
import { SearchSemantics } from './searchSemantics';
import { StreamError } from './streamError';
import { StreamGenerationChunk } from './streamGenerationChunk';
import { StreamGenerationEnd } from './streamGenerationEnd';
import { StreamResponseEnd } from './streamResponseEnd';
import { StreamSearchResponse } from './streamSearchResponse';
import { StructuredDocument } from './structuredDocument';
import { StructuredDocumentSection } from './structuredDocumentSection';
import { Turn } from './turn';
import { UpdateApiKeyRequest } from './updateApiKeyRequest';
import { UpdateAppClientRequest } from './updateAppClientRequest';
import { UpdateCorpusRequest } from './updateCorpusRequest';
import { UpdateTurnRequest } from './updateTurnRequest';
import { UpdateUserRequest } from './updateUserRequest';
import { User } from './user';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ApiKeyRole": ApiKeyRole,
        "ApiRole": ApiRole,
        "CitationParameters.StyleEnum": CitationParameters.StyleEnum,
        "FilterAttribute.LevelEnum": FilterAttribute.LevelEnum,
        "FilterAttribute.TypeEnum": FilterAttribute.TypeEnum,
        "Job.TypeEnum": Job.TypeEnum,
        "JobState": JobState,
        "Language": Language,
        "SearchSemantics": SearchSemantics,
}

let typeMap: {[index: string]: any} = {
    "ApiKey": ApiKey,
    "ApiOperationPolicy": ApiOperationPolicy,
    "ApiPolicy": ApiPolicy,
    "AppClient": AppClient,
    "BadRequestError": BadRequestError,
    "Chat": Chat,
    "ChatFullResponse": ChatFullResponse,
    "ChatInfoResponse": ChatInfoResponse,
    "ChatParameters": ChatParameters,
    "ChatRequest": ChatRequest,
    "ChatStreamedResponse": ChatStreamedResponse,
    "CitationParameters": CitationParameters,
    "ContextConfiguration": ContextConfiguration,
    "CoreDocument": CoreDocument,
    "CoreDocumentPart": CoreDocumentPart,
    "Corpus": Corpus,
    "CorpusCustomDimension": CorpusCustomDimension,
    "CorpusLimits": CorpusLimits,
    "CreateApiKeyRequest": CreateApiKeyRequest,
    "CreateAppClientRequest": CreateAppClientRequest,
    "CreateClientCredentialsRequest": CreateClientCredentialsRequest,
    "CreateCorpusRequest": CreateCorpusRequest,
    "CreateDocumentRequest": CreateDocumentRequest,
    "CreateUserRequest": CreateUserRequest,
    "CustomerSpecificReranker": CustomerSpecificReranker,
    "Document": Document,
    "DocumentStorageUsage": DocumentStorageUsage,
    "Encoder": Encoder,
    "FactualConsistencyScore": FactualConsistencyScore,
    "FilterAttribute": FilterAttribute,
    "GenerationParameters": GenerationParameters,
    "IndividualSearchResult": IndividualSearchResult,
    "Job": Job,
    "KeyedSearchCorpus": KeyedSearchCorpus,
    "LLM": LLM,
    "ListApiKeysResponse": ListApiKeysResponse,
    "ListAppClientsResponse": ListAppClientsResponse,
    "ListChatTurnsResponse": ListChatTurnsResponse,
    "ListChatsResponse": ListChatsResponse,
    "ListCorporaResponse": ListCorporaResponse,
    "ListDocumentsResponse": ListDocumentsResponse,
    "ListEncodersResponse": ListEncodersResponse,
    "ListJobsResponse": ListJobsResponse,
    "ListLLMsResponse": ListLLMsResponse,
    "ListMetadata": ListMetadata,
    "ListRerankersResponse": ListRerankersResponse,
    "ListUsersResponse": ListUsersResponse,
    "MMRReranker": MMRReranker,
    "ModelError": ModelError,
    "ModelParameters": ModelParameters,
    "NotFoundError": NotFoundError,
    "Prompt": Prompt,
    "QueryCorpusRequest": QueryCorpusRequest,
    "QueryFullResponse": QueryFullResponse,
    "QueryRequest": QueryRequest,
    "QueryStreamedResponse": QueryStreamedResponse,
    "ReplaceFilterAttributesRequest": ReplaceFilterAttributesRequest,
    "ReplaceFilterAttributesResponse": ReplaceFilterAttributesResponse,
    "Reranker": Reranker,
    "SearchCorporaParameters": SearchCorporaParameters,
    "SearchCorpus": SearchCorpus,
    "SearchCorpusParameters": SearchCorpusParameters,
    "SearchParameters": SearchParameters,
    "SearchReranker": SearchReranker,
    "StreamError": StreamError,
    "StreamGenerationChunk": StreamGenerationChunk,
    "StreamGenerationEnd": StreamGenerationEnd,
    "StreamResponseEnd": StreamResponseEnd,
    "StreamSearchResponse": StreamSearchResponse,
    "StructuredDocument": StructuredDocument,
    "StructuredDocumentSection": StructuredDocumentSection,
    "Turn": Turn,
    "UpdateApiKeyRequest": UpdateApiKeyRequest,
    "UpdateAppClientRequest": UpdateAppClientRequest,
    "UpdateCorpusRequest": UpdateCorpusRequest,
    "UpdateTurnRequest": UpdateTurnRequest,
    "UpdateUserRequest": UpdateUserRequest,
    "User": User,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
