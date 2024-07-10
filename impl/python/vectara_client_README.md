# vectara-client
Vectara provides an end-to-end platform for creating GenAI products using  a simple to use API.  You can [sign up for an account](https://console.vectara.com/signup) and  then view several [API Recipes](https://docs.vectara.com/docs/api-recipes) with example queries  and parameter values.  The Vectara API Playground lets you experiment with REST endpoints from  your browser. Select an endpoint to view its definition, including the  required or optional headers, body, responses, and sample commands. On the  right side of each endpoint page, like [Get Corpus](/docs/rest-api/get-corpus), you manually  enter your API Key or OAuth Bearer Token, `customer_id`, and then any  required body parameters like the `corpusID` before sending the API  request.  :::note  Vectara supports two primary methods of authentication: API keys and OAuth  2.0, which are applicable to all endpoints. Query API Keys are used for  read-only querying operations, while Index API Keys provide read and write  access. The OAuth 2.0 operations authenticate with a Bearer Token via the  OAuth 2.0 client credentials grant. Review the [**OAuth 2.0 section**](https://docs.vectara.com/docs/learn/authentication/oauth-2) about  how to generate the token. 

The `vectara_client` package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.0
- Package version: 1.0.0
- Generator version: 7.6.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.7+

## Installation & Usage

This python library package is generated without supporting files like setup.py or requirements files

To be able to use it, you will need these dependencies in your own package that uses this library:

* urllib3 >= 1.25.3
* python-dateutil
* pydantic

## Getting Started

In your own code, to use this library to connect and interact with vectara-client,
you can run the following:

```python

import vectara_client
from vectara_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.vectara.io
# See configuration.py for a list of all supported configuration parameters.
configuration = vectara_client.Configuration(
    host = "https://api.vectara.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'


# Enter a context with an instance of the API client
with vectara_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectara_client.APIKeysApi(api_client)
    create_api_key_request = vectara_client.CreateApiKeyRequest() # CreateApiKeyRequest |  (optional)

    try:
        # Create an API key
        api_response = api_instance.create_api_key(create_api_key_request=create_api_key_request)
        print("The response of APIKeysApi->create_api_key:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling APIKeysApi->create_api_key: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.vectara.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*APIKeysApi* | [**create_api_key**](vectara_client/docs/APIKeysApi.md#create_api_key) | **POST** /v2/api_keys | Create an API key
*APIKeysApi* | [**delete_api_key**](vectara_client/docs/APIKeysApi.md#delete_api_key) | **DELETE** /v2/api_keys/{api_key_id} | Delete an API key
*APIKeysApi* | [**get_api_key**](vectara_client/docs/APIKeysApi.md#get_api_key) | **GET** /v2/api_keys/{api_key_id} | Get an API key
*APIKeysApi* | [**list_api_keys**](vectara_client/docs/APIKeysApi.md#list_api_keys) | **GET** /v2/api_keys | List API keys
*APIKeysApi* | [**update_api_key**](vectara_client/docs/APIKeysApi.md#update_api_key) | **PATCH** /v2/api_keys/{api_key_id} | Update an API key
*ApplicationClientsApi* | [**create_app_client**](vectara_client/docs/ApplicationClientsApi.md#create_app_client) | **POST** /v2/app_clients | Create an App Client
*ApplicationClientsApi* | [**delete_app_client**](vectara_client/docs/ApplicationClientsApi.md#delete_app_client) | **DELETE** /v2/app_clients/{app_client_id} | Delete an App Client
*ApplicationClientsApi* | [**get_app_client**](vectara_client/docs/ApplicationClientsApi.md#get_app_client) | **GET** /v2/app_clients/{app_client_id} | Get an App Client
*ApplicationClientsApi* | [**list_app_client**](vectara_client/docs/ApplicationClientsApi.md#list_app_client) | **GET** /v2/app_clients | List App Clients
*ApplicationClientsApi* | [**update_app_client**](vectara_client/docs/ApplicationClientsApi.md#update_app_client) | **PATCH** /v2/app_clients/{app_client_id} | Update an App Client
*ChatsApi* | [**create_chat**](vectara_client/docs/ChatsApi.md#create_chat) | **POST** /v2/chats | Start a chat
*ChatsApi* | [**create_chat_turn**](vectara_client/docs/ChatsApi.md#create_chat_turn) | **POST** /v2/chats/{chat_id}/turns | Create a new turn in the chat
*ChatsApi* | [**delete_chat**](vectara_client/docs/ChatsApi.md#delete_chat) | **DELETE** /v2/chats/{chat_id} | Delete a chat
*ChatsApi* | [**delete_chat_turn**](vectara_client/docs/ChatsApi.md#delete_chat_turn) | **DELETE** /v2/chats/{chat_id}/turns/{turn_id} | Delete a turn
*ChatsApi* | [**get_chat**](vectara_client/docs/ChatsApi.md#get_chat) | **GET** /v2/chats/{chat_id} | Get a chat
*ChatsApi* | [**get_chat_turn**](vectara_client/docs/ChatsApi.md#get_chat_turn) | **GET** /v2/chats/{chat_id}/turns/{turn_id} | Get a turn
*ChatsApi* | [**list_chat_turns**](vectara_client/docs/ChatsApi.md#list_chat_turns) | **GET** /v2/chats/{chat_id}/turns | List turns in a chat
*ChatsApi* | [**list_chats**](vectara_client/docs/ChatsApi.md#list_chats) | **GET** /v2/chats | List chats
*ChatsApi* | [**update_chat_turn**](vectara_client/docs/ChatsApi.md#update_chat_turn) | **PATCH** /v2/chats/{chat_id}/turns/{turn_id} | Update a turn
*CorporaApi* | [**create_corpus**](vectara_client/docs/CorporaApi.md#create_corpus) | **POST** /v2/corpora | Create a corpus
*CorporaApi* | [**delete_corpus**](vectara_client/docs/CorporaApi.md#delete_corpus) | **DELETE** /v2/corpora/{corpus_key} | Delete a corpus and all its data
*CorporaApi* | [**get_corpus**](vectara_client/docs/CorporaApi.md#get_corpus) | **GET** /v2/corpora/{corpus_key} | Retrieve metadata about a corpus
*CorporaApi* | [**list_corpora**](vectara_client/docs/CorporaApi.md#list_corpora) | **GET** /v2/corpora | List corpora
*CorporaApi* | [**replace_filter_attributes**](vectara_client/docs/CorporaApi.md#replace_filter_attributes) | **POST** /v2/corpora/{corpus_key}/replace_filter_attributes | Replace the filter attributes of a corpus
*CorporaApi* | [**reset_corpus**](vectara_client/docs/CorporaApi.md#reset_corpus) | **POST** /v2/corpora/{corpus_key}/reset | Remove all documents and data in a corpus
*CorporaApi* | [**update_corpus**](vectara_client/docs/CorporaApi.md#update_corpus) | **PATCH** /v2/corpora/{corpus_key} | Update a corpus
*DocumentsApi* | [**delete_corpus_document**](vectara_client/docs/DocumentsApi.md#delete_corpus_document) | **DELETE** /v2/corpora/{corpus_key}/documents/{document_id} | Delete a document
*DocumentsApi* | [**list_corpus_documents**](vectara_client/docs/DocumentsApi.md#list_corpus_documents) | **GET** /v2/corpora/{corpus_key}/documents | List the documents in the corpus
*EncodersApi* | [**list_encoders**](vectara_client/docs/EncodersApi.md#list_encoders) | **GET** /v2/encoders | List the available encoders
*IndexApi* | [**create_corpus_document**](vectara_client/docs/IndexApi.md#create_corpus_document) | **POST** /v2/corpora/{corpus_key}/documents | Add a document to a corpus
*JobsApi* | [**get_job**](vectara_client/docs/JobsApi.md#get_job) | **GET** /v2/jobs/{job_id} | Get a job by ID
*JobsApi* | [**list_jobs**](vectara_client/docs/JobsApi.md#list_jobs) | **GET** /v2/jobs | List jobs
*LargeLanguageModelsApi* | [**list_llms**](vectara_client/docs/LargeLanguageModelsApi.md#list_llms) | **GET** /v2/llms | List LLMs.
*QueriesApi* | [**query**](vectara_client/docs/QueriesApi.md#query) | **POST** /v2/query | Query Corpora
*QueriesApi* | [**query_corpus**](vectara_client/docs/QueriesApi.md#query_corpus) | **POST** /v2/corpora/{corpus_key}/query | Corpus Query
*QueriesApi* | [**search_corpus**](vectara_client/docs/QueriesApi.md#search_corpus) | **GET** /v2/corpora/{corpus_key}/query | Simple Corpus Query
*RerankersApi* | [**list_rerankers**](vectara_client/docs/RerankersApi.md#list_rerankers) | **GET** /v2/rerankers | List the available rerankers
*UploadApi* | [**upload_file**](vectara_client/docs/UploadApi.md#upload_file) | **POST** /v2/corpora/{corpus_key}/upload_file | Upload a file to the corpus
*UsersApi* | [**create_user**](vectara_client/docs/UsersApi.md#create_user) | **POST** /v2/users | Create a user in the current customer account
*UsersApi* | [**delete_user**](vectara_client/docs/UsersApi.md#delete_user) | **DELETE** /v2/users/{username} | Delete a user
*UsersApi* | [**get_user**](vectara_client/docs/UsersApi.md#get_user) | **GET** /v2/users/{username} | Get a user
*UsersApi* | [**list_users**](vectara_client/docs/UsersApi.md#list_users) | **GET** /v2/users | List users in the account
*UsersApi* | [**reset_user_password**](vectara_client/docs/UsersApi.md#reset_user_password) | **POST** /v2/users/{username}/reset_password | Reset the password for a user
*UsersApi* | [**update_user**](vectara_client/docs/UsersApi.md#update_user) | **PATCH** /v2/users/{username} | Update a user


## Documentation For Models

 - [ApiKey](vectara_client/docs/ApiKey.md)
 - [ApiKeyRole](vectara_client/docs/ApiKeyRole.md)
 - [ApiOperationPolicy](vectara_client/docs/ApiOperationPolicy.md)
 - [ApiPolicy](vectara_client/docs/ApiPolicy.md)
 - [ApiRole](vectara_client/docs/ApiRole.md)
 - [AppClient](vectara_client/docs/AppClient.md)
 - [BadRequestError](vectara_client/docs/BadRequestError.md)
 - [Chat](vectara_client/docs/Chat.md)
 - [ChatFullResponse](vectara_client/docs/ChatFullResponse.md)
 - [ChatInfoResponse](vectara_client/docs/ChatInfoResponse.md)
 - [ChatParameters](vectara_client/docs/ChatParameters.md)
 - [ChatRequest](vectara_client/docs/ChatRequest.md)
 - [ChatStreamedResponse](vectara_client/docs/ChatStreamedResponse.md)
 - [CitationParameters](vectara_client/docs/CitationParameters.md)
 - [ContextConfiguration](vectara_client/docs/ContextConfiguration.md)
 - [CoreDocument](vectara_client/docs/CoreDocument.md)
 - [CoreDocumentPart](vectara_client/docs/CoreDocumentPart.md)
 - [Corpus](vectara_client/docs/Corpus.md)
 - [CorpusCustomDimension](vectara_client/docs/CorpusCustomDimension.md)
 - [CorpusLimits](vectara_client/docs/CorpusLimits.md)
 - [CreateApiKeyRequest](vectara_client/docs/CreateApiKeyRequest.md)
 - [CreateAppClientRequest](vectara_client/docs/CreateAppClientRequest.md)
 - [CreateClientCredentialsRequest](vectara_client/docs/CreateClientCredentialsRequest.md)
 - [CreateCorpusRequest](vectara_client/docs/CreateCorpusRequest.md)
 - [CreateDocumentRequest](vectara_client/docs/CreateDocumentRequest.md)
 - [CreateUserRequest](vectara_client/docs/CreateUserRequest.md)
 - [CustomerSpecificReranker](vectara_client/docs/CustomerSpecificReranker.md)
 - [Document](vectara_client/docs/Document.md)
 - [DocumentStorageUsage](vectara_client/docs/DocumentStorageUsage.md)
 - [Encoder](vectara_client/docs/Encoder.md)
 - [Error](vectara_client/docs/Error.md)
 - [FactualConsistencyScore](vectara_client/docs/FactualConsistencyScore.md)
 - [FilterAttribute](vectara_client/docs/FilterAttribute.md)
 - [GenerationParameters](vectara_client/docs/GenerationParameters.md)
 - [IndividualSearchResult](vectara_client/docs/IndividualSearchResult.md)
 - [Job](vectara_client/docs/Job.md)
 - [JobState](vectara_client/docs/JobState.md)
 - [KeyedSearchCorpus](vectara_client/docs/KeyedSearchCorpus.md)
 - [LLM](vectara_client/docs/LLM.md)
 - [Language](vectara_client/docs/Language.md)
 - [ListApiKeysResponse](vectara_client/docs/ListApiKeysResponse.md)
 - [ListAppClientsResponse](vectara_client/docs/ListAppClientsResponse.md)
 - [ListChatTurnsResponse](vectara_client/docs/ListChatTurnsResponse.md)
 - [ListChatsResponse](vectara_client/docs/ListChatsResponse.md)
 - [ListCorporaResponse](vectara_client/docs/ListCorporaResponse.md)
 - [ListDocumentsResponse](vectara_client/docs/ListDocumentsResponse.md)
 - [ListEncodersResponse](vectara_client/docs/ListEncodersResponse.md)
 - [ListJobsResponse](vectara_client/docs/ListJobsResponse.md)
 - [ListLLMsResponse](vectara_client/docs/ListLLMsResponse.md)
 - [ListMetadata](vectara_client/docs/ListMetadata.md)
 - [ListRerankersResponse](vectara_client/docs/ListRerankersResponse.md)
 - [ListUsersResponse](vectara_client/docs/ListUsersResponse.md)
 - [MMRReranker](vectara_client/docs/MMRReranker.md)
 - [ModelParameters](vectara_client/docs/ModelParameters.md)
 - [NotFoundError](vectara_client/docs/NotFoundError.md)
 - [Prompt](vectara_client/docs/Prompt.md)
 - [QueryCorpusRequest](vectara_client/docs/QueryCorpusRequest.md)
 - [QueryFullResponse](vectara_client/docs/QueryFullResponse.md)
 - [QueryRequest](vectara_client/docs/QueryRequest.md)
 - [QueryStreamedResponse](vectara_client/docs/QueryStreamedResponse.md)
 - [ReplaceFilterAttributesRequest](vectara_client/docs/ReplaceFilterAttributesRequest.md)
 - [ReplaceFilterAttributesResponse](vectara_client/docs/ReplaceFilterAttributesResponse.md)
 - [Reranker](vectara_client/docs/Reranker.md)
 - [SearchCorporaParameters](vectara_client/docs/SearchCorporaParameters.md)
 - [SearchCorpus](vectara_client/docs/SearchCorpus.md)
 - [SearchCorpusParameters](vectara_client/docs/SearchCorpusParameters.md)
 - [SearchParameters](vectara_client/docs/SearchParameters.md)
 - [SearchReranker](vectara_client/docs/SearchReranker.md)
 - [SearchSemantics](vectara_client/docs/SearchSemantics.md)
 - [StreamError](vectara_client/docs/StreamError.md)
 - [StreamGenerationChunk](vectara_client/docs/StreamGenerationChunk.md)
 - [StreamGenerationEnd](vectara_client/docs/StreamGenerationEnd.md)
 - [StreamResponseEnd](vectara_client/docs/StreamResponseEnd.md)
 - [StreamSearchResponse](vectara_client/docs/StreamSearchResponse.md)
 - [StructuredDocument](vectara_client/docs/StructuredDocument.md)
 - [StructuredDocumentSection](vectara_client/docs/StructuredDocumentSection.md)
 - [Turn](vectara_client/docs/Turn.md)
 - [UpdateApiKeyRequest](vectara_client/docs/UpdateApiKeyRequest.md)
 - [UpdateAppClientRequest](vectara_client/docs/UpdateAppClientRequest.md)
 - [UpdateCorpusRequest](vectara_client/docs/UpdateCorpusRequest.md)
 - [UpdateTurnRequest](vectara_client/docs/UpdateTurnRequest.md)
 - [UpdateUserRequest](vectara_client/docs/UpdateUserRequest.md)
 - [User](vectara_client/docs/User.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="OAuth2"></a>
### OAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A

<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header


## Author

feedback@vectara.com

