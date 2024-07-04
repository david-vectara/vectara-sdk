# OpenAPI\Client\IndexApi

All URIs are relative to https://api.vectara.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createCorpusDocument()**](IndexApi.md#createCorpusDocument) | **POST** /v2/corpora/{corpus_key}/documents | Add a document to a corpus |


## `createCorpusDocument()`

```php
createCorpusDocument($corpus_key, $create_document_request): \OpenAPI\Client\VectaraModel\Document
```

Add a document to a corpus

Add a document to a corpus. You can add documents that are either in a typical structured format, or in a format that explicitly specifies each document part that becomes a search result.

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


$apiInstance = new OpenAPI\Client\Api\IndexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = 'corpus_key_example'; // string | The unique key identifying the queried corpus.
$create_document_request = new \OpenAPI\Client\VectaraModel\CreateDocumentRequest(); // \OpenAPI\Client\VectaraModel\CreateDocumentRequest

try {
    $result = $apiInstance->createCorpusDocument($corpus_key, $create_document_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling IndexApi->createCorpusDocument: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | **string**| The unique key identifying the queried corpus. | |
| **create_document_request** | [**\OpenAPI\Client\VectaraModel\CreateDocumentRequest**](../Model/CreateDocumentRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\Document**](../Model/Document.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
