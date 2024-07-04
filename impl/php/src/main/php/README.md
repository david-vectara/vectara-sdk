# OpenAPIClient-php

Vectara provides an end-to-end platform for creating GenAI products using 
a simple to use API.

You can [sign up for an account](https://console.vectara.com/signup) and 
then view several [API Recipes](https://docs.vectara.com/docs/api-recipes) with example queries 
and parameter values.

The Vectara API Playground lets you experiment with REST endpoints from 
your browser. Select an endpoint to view its definition, including the 
required or optional headers, body, responses, and sample commands. On the 
right side of each endpoint page, like [Get Corpus](/docs/rest-api/get-corpus), you manually 
enter your API Key or OAuth Bearer Token, `customer_id`, and then any 
required body parameters like the `corpusID` before sending the API 
request.

:::note

Vectara supports two primary methods of authentication: API keys and OAuth 
2.0, which are applicable to all endpoints. Query API Keys are used for 
read-only querying operations, while Index API Keys provide read and write 
access. The OAuth 2.0 operations authenticate with a Bearer Token via the 
OAuth 2.0 client credentials grant. Review the [**OAuth 2.0 section**](https://docs.vectara.com/docs/learn/authentication/oauth-2) about 
how to generate the token.



## Installation & Usage

### Requirements

PHP 7.4 and later.
Should also work with PHP 8.0.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('x-api-key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('x-api-key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\APIKeysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_api_key_request = new \OpenAPI\Client\VectaraModel\CreateApiKeyRequest(); // \OpenAPI\Client\VectaraModel\CreateApiKeyRequest

try {
    $result = $apiInstance->createApiKey($create_api_key_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling APIKeysApi->createApiKey: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.vectara.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*APIKeysApi* | [**createApiKey**](docs/Api/APIKeysApi.md#createapikey) | **POST** /v2/api_keys | Create an API key
*APIKeysApi* | [**deleteApiKey**](docs/Api/APIKeysApi.md#deleteapikey) | **DELETE** /v2/api_keys/{api_key_id} | Delete an API key
*APIKeysApi* | [**getApiKey**](docs/Api/APIKeysApi.md#getapikey) | **GET** /v2/api_keys/{api_key_id} | Get an API key
*APIKeysApi* | [**listApiKeys**](docs/Api/APIKeysApi.md#listapikeys) | **GET** /v2/api_keys | List API keys
*APIKeysApi* | [**updateApiKey**](docs/Api/APIKeysApi.md#updateapikey) | **PATCH** /v2/api_keys/{api_key_id} | Update an API key
*ApplicationClientsApi* | [**createAppClient**](docs/Api/ApplicationClientsApi.md#createappclient) | **POST** /v2/app_clients | Create an App Client
*ApplicationClientsApi* | [**deleteAppClient**](docs/Api/ApplicationClientsApi.md#deleteappclient) | **DELETE** /v2/app_clients/{app_client_id} | Delete an App Client
*ApplicationClientsApi* | [**getAppClient**](docs/Api/ApplicationClientsApi.md#getappclient) | **GET** /v2/app_clients/{app_client_id} | Get an App Client
*ApplicationClientsApi* | [**listAppClient**](docs/Api/ApplicationClientsApi.md#listappclient) | **GET** /v2/app_clients | List App Clients
*ApplicationClientsApi* | [**updateAppClient**](docs/Api/ApplicationClientsApi.md#updateappclient) | **PATCH** /v2/app_clients/{app_client_id} | Update an App Client
*ChatsApi* | [**createChat**](docs/Api/ChatsApi.md#createchat) | **POST** /v2/chats | Start a chat
*ChatsApi* | [**createChatTurn**](docs/Api/ChatsApi.md#createchatturn) | **POST** /v2/chats/{chat_id}/turns | Create a new turn in the chat
*ChatsApi* | [**deleteChat**](docs/Api/ChatsApi.md#deletechat) | **DELETE** /v2/chats/{chat_id} | Delete a chat
*ChatsApi* | [**deleteChatTurn**](docs/Api/ChatsApi.md#deletechatturn) | **DELETE** /v2/chats/{chat_id}/turns/{turn_id} | Delete a turn
*ChatsApi* | [**getChat**](docs/Api/ChatsApi.md#getchat) | **GET** /v2/chats/{chat_id} | Get a chat
*ChatsApi* | [**getChatTurn**](docs/Api/ChatsApi.md#getchatturn) | **GET** /v2/chats/{chat_id}/turns/{turn_id} | Get a turn
*ChatsApi* | [**listChatTurns**](docs/Api/ChatsApi.md#listchatturns) | **GET** /v2/chats/{chat_id}/turns | List turns in a chat
*ChatsApi* | [**listChats**](docs/Api/ChatsApi.md#listchats) | **GET** /v2/chats | List chats
*ChatsApi* | [**updateChatTurn**](docs/Api/ChatsApi.md#updatechatturn) | **PATCH** /v2/chats/{chat_id}/turns/{turn_id} | Update a turn
*CorporaApi* | [**createCorpus**](docs/Api/CorporaApi.md#createcorpus) | **POST** /v2/corpora | Create a corpus
*CorporaApi* | [**deleteCorpus**](docs/Api/CorporaApi.md#deletecorpus) | **DELETE** /v2/corpora/{corpus_key} | Delete a corpus and all its data
*CorporaApi* | [**getCorpus**](docs/Api/CorporaApi.md#getcorpus) | **GET** /v2/corpora/{corpus_key} | Retrieve metadata about a corpus
*CorporaApi* | [**listCorpora**](docs/Api/CorporaApi.md#listcorpora) | **GET** /v2/corpora | List corpora
*CorporaApi* | [**replaceFilterAttributes**](docs/Api/CorporaApi.md#replacefilterattributes) | **POST** /v2/corpora/{corpus_key}/replace_filter_attributes | Replace the filter attributes of a corpus
*CorporaApi* | [**resetCorpus**](docs/Api/CorporaApi.md#resetcorpus) | **POST** /v2/corpora/{corpus_key}/reset | Remove all documents and data in a corpus
*CorporaApi* | [**updateCorpus**](docs/Api/CorporaApi.md#updatecorpus) | **PATCH** /v2/corpora/{corpus_key} | Update a corpus
*DocumentsApi* | [**deleteCorpusDocument**](docs/Api/DocumentsApi.md#deletecorpusdocument) | **DELETE** /v2/corpora/{corpus_key}/documents/{document_id} | Delete a document
*DocumentsApi* | [**listCorpusDocuments**](docs/Api/DocumentsApi.md#listcorpusdocuments) | **GET** /v2/corpora/{corpus_key}/documents | List the documents in the corpus
*EncodersApi* | [**listEncoders**](docs/Api/EncodersApi.md#listencoders) | **GET** /v2/encoders | List the available encoders
*IndexApi* | [**createCorpusDocument**](docs/Api/IndexApi.md#createcorpusdocument) | **POST** /v2/corpora/{corpus_key}/documents | Add a document to a corpus
*JobsApi* | [**getJob**](docs/Api/JobsApi.md#getjob) | **GET** /v2/jobs/{job_id} | Get a job by ID
*JobsApi* | [**listJobs**](docs/Api/JobsApi.md#listjobs) | **GET** /v2/jobs | List jobs
*LargeLanguageModelsApi* | [**listLLMs**](docs/Api/LargeLanguageModelsApi.md#listllms) | **GET** /v2/llms | List LLMs.
*QueriesApi* | [**query**](docs/Api/QueriesApi.md#query) | **POST** /v2/query | Query Corpora
*QueriesApi* | [**queryCorpus**](docs/Api/QueriesApi.md#querycorpus) | **POST** /v2/corpora/{corpus_key}/query | Corpus Query
*QueriesApi* | [**searchCorpus**](docs/Api/QueriesApi.md#searchcorpus) | **GET** /v2/corpora/{corpus_key}/query | Simple Corpus Query
*RerankersApi* | [**listRerankers**](docs/Api/RerankersApi.md#listrerankers) | **GET** /v2/rerankers | List the available rerankers
*UploadApi* | [**uploadFile**](docs/Api/UploadApi.md#uploadfile) | **POST** /v2/corpora/{corpus_key}/upload_file | Upload a file to the corpus
*UsersApi* | [**createUser**](docs/Api/UsersApi.md#createuser) | **POST** /v2/users | Create a user in the current customer account
*UsersApi* | [**deleteUser**](docs/Api/UsersApi.md#deleteuser) | **DELETE** /v2/users/{username} | Delete a user
*UsersApi* | [**getUser**](docs/Api/UsersApi.md#getuser) | **GET** /v2/users/{username} | Get a user
*UsersApi* | [**listUsers**](docs/Api/UsersApi.md#listusers) | **GET** /v2/users | List users in the account
*UsersApi* | [**resetUserPassword**](docs/Api/UsersApi.md#resetuserpassword) | **POST** /v2/users/{username}/reset_password | Reset the password for a user
*UsersApi* | [**updateUser**](docs/Api/UsersApi.md#updateuser) | **PATCH** /v2/users/{username} | Update a user

## Models

- [ApiKey](docs/Model/ApiKey.md)
- [ApiKeyRole](docs/Model/ApiKeyRole.md)
- [ApiOperationPolicy](docs/Model/ApiOperationPolicy.md)
- [ApiPolicy](docs/Model/ApiPolicy.md)
- [ApiRole](docs/Model/ApiRole.md)
- [AppClient](docs/Model/AppClient.md)
- [BadRequestError](docs/Model/BadRequestError.md)
- [Chat](docs/Model/Chat.md)
- [ChatFullResponse](docs/Model/ChatFullResponse.md)
- [ChatInfoResponse](docs/Model/ChatInfoResponse.md)
- [ChatParameters](docs/Model/ChatParameters.md)
- [ChatRequest](docs/Model/ChatRequest.md)
- [ChatStreamedResponse](docs/Model/ChatStreamedResponse.md)
- [CitationParameters](docs/Model/CitationParameters.md)
- [ContextConfiguration](docs/Model/ContextConfiguration.md)
- [CoreDocument](docs/Model/CoreDocument.md)
- [CoreDocumentPart](docs/Model/CoreDocumentPart.md)
- [Corpus](docs/Model/Corpus.md)
- [CorpusCustomDimension](docs/Model/CorpusCustomDimension.md)
- [CorpusLimits](docs/Model/CorpusLimits.md)
- [CreateApiKeyRequest](docs/Model/CreateApiKeyRequest.md)
- [CreateAppClientRequest](docs/Model/CreateAppClientRequest.md)
- [CreateClientCredentialsRequest](docs/Model/CreateClientCredentialsRequest.md)
- [CreateCorpusRequest](docs/Model/CreateCorpusRequest.md)
- [CreateDocumentRequest](docs/Model/CreateDocumentRequest.md)
- [CreateUserRequest](docs/Model/CreateUserRequest.md)
- [CustomerSpecificReranker](docs/Model/CustomerSpecificReranker.md)
- [Document](docs/Model/Document.md)
- [DocumentStorageUsage](docs/Model/DocumentStorageUsage.md)
- [Encoder](docs/Model/Encoder.md)
- [Error](docs/Model/Error.md)
- [FactualConsistencyScore](docs/Model/FactualConsistencyScore.md)
- [FilterAttribute](docs/Model/FilterAttribute.md)
- [GenerationParameters](docs/Model/GenerationParameters.md)
- [IndividualSearchResult](docs/Model/IndividualSearchResult.md)
- [Job](docs/Model/Job.md)
- [JobState](docs/Model/JobState.md)
- [KeyedSearchCorpus](docs/Model/KeyedSearchCorpus.md)
- [LLM](docs/Model/LLM.md)
- [Language](docs/Model/Language.md)
- [ListApiKeysResponse](docs/Model/ListApiKeysResponse.md)
- [ListAppClientsResponse](docs/Model/ListAppClientsResponse.md)
- [ListChatTurnsResponse](docs/Model/ListChatTurnsResponse.md)
- [ListChatsResponse](docs/Model/ListChatsResponse.md)
- [ListCorporaResponse](docs/Model/ListCorporaResponse.md)
- [ListDocumentsResponse](docs/Model/ListDocumentsResponse.md)
- [ListEncodersResponse](docs/Model/ListEncodersResponse.md)
- [ListJobsResponse](docs/Model/ListJobsResponse.md)
- [ListLLMsResponse](docs/Model/ListLLMsResponse.md)
- [ListMetadata](docs/Model/ListMetadata.md)
- [ListRerankersResponse](docs/Model/ListRerankersResponse.md)
- [ListUsersResponse](docs/Model/ListUsersResponse.md)
- [MMRReranker](docs/Model/MMRReranker.md)
- [ModelParameters](docs/Model/ModelParameters.md)
- [NotFoundError](docs/Model/NotFoundError.md)
- [Prompt](docs/Model/Prompt.md)
- [QueryCorpusRequest](docs/Model/QueryCorpusRequest.md)
- [QueryFullResponse](docs/Model/QueryFullResponse.md)
- [QueryRequest](docs/Model/QueryRequest.md)
- [QueryStreamedResponse](docs/Model/QueryStreamedResponse.md)
- [ReplaceFilterAttributesRequest](docs/Model/ReplaceFilterAttributesRequest.md)
- [ReplaceFilterAttributesResponse](docs/Model/ReplaceFilterAttributesResponse.md)
- [Reranker](docs/Model/Reranker.md)
- [SearchCorporaParameters](docs/Model/SearchCorporaParameters.md)
- [SearchCorpus](docs/Model/SearchCorpus.md)
- [SearchCorpusParameters](docs/Model/SearchCorpusParameters.md)
- [SearchParameters](docs/Model/SearchParameters.md)
- [SearchReranker](docs/Model/SearchReranker.md)
- [SearchSemantics](docs/Model/SearchSemantics.md)
- [StreamError](docs/Model/StreamError.md)
- [StreamGenerationChunk](docs/Model/StreamGenerationChunk.md)
- [StreamGenerationEnd](docs/Model/StreamGenerationEnd.md)
- [StreamResponseEnd](docs/Model/StreamResponseEnd.md)
- [StreamSearchResponse](docs/Model/StreamSearchResponse.md)
- [StructuredDocument](docs/Model/StructuredDocument.md)
- [StructuredDocumentSection](docs/Model/StructuredDocumentSection.md)
- [Turn](docs/Model/Turn.md)
- [UpdateApiKeyRequest](docs/Model/UpdateApiKeyRequest.md)
- [UpdateAppClientRequest](docs/Model/UpdateAppClientRequest.md)
- [UpdateCorpusRequest](docs/Model/UpdateCorpusRequest.md)
- [UpdateTurnRequest](docs/Model/UpdateTurnRequest.md)
- [UpdateUserRequest](docs/Model/UpdateUserRequest.md)
- [User](docs/Model/User.md)

## Authorization

Authentication schemes defined for the API:
### OAuth2

- **Type**: `OAuth`
- **Flow**: `application`
- **Authorization URL**: ``
- **Scopes**: N/A

### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header


## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author

feedback@vectara.com

## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2.0.0`
    - Generator version: `7.6.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
