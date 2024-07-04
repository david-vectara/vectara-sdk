# OpenAPI\Client\DocumentsApi

All URIs are relative to https://api.vectara.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**deleteCorpusDocument()**](DocumentsApi.md#deleteCorpusDocument) | **DELETE** /v2/corpora/{corpus_key}/documents/{document_id} | Delete a document |
| [**listCorpusDocuments()**](DocumentsApi.md#listCorpusDocuments) | **GET** /v2/corpora/{corpus_key}/documents | List the documents in the corpus |


## `deleteCorpusDocument()`

```php
deleteCorpusDocument($corpus_key, $document_id)
```

Delete a document

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('x-api-key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('x-api-key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DocumentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = 'corpus_key_example'; // string | The unique key identifying the corpus with the document to delete.
$document_id = 'document_id_example'; // string | The Document ID of the document to delete. The `document_id` must be percent encoded.

try {
    $apiInstance->deleteCorpusDocument($corpus_key, $document_id);
} catch (Exception $e) {
    echo 'Exception when calling DocumentsApi->deleteCorpusDocument: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | **string**| The unique key identifying the corpus with the document to delete. | |
| **document_id** | **string**| The Document ID of the document to delete. The &#x60;document_id&#x60; must be percent encoded. | |

### Return type

void (empty response body)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listCorpusDocuments()`

```php
listCorpusDocuments($corpus_key, $limit, $page_key): \OpenAPI\Client\VectaraModel\ListDocumentsResponse
```

List the documents in the corpus

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('x-api-key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('x-api-key', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\DocumentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = 'corpus_key_example'; // string | The unique key identifying the queried corpus.
$limit = 10; // int | The maximum number of documents to return at one time.
$page_key = 'page_key_example'; // string | Used to the retrieve the next page of documents after the limit has been reached.

try {
    $result = $apiInstance->listCorpusDocuments($corpus_key, $limit, $page_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentsApi->listCorpusDocuments: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | **string**| The unique key identifying the queried corpus. | |
| **limit** | **int**| The maximum number of documents to return at one time. | [optional] [default to 10] |
| **page_key** | **string**| Used to the retrieve the next page of documents after the limit has been reached. | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\ListDocumentsResponse**](../Model/ListDocumentsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
