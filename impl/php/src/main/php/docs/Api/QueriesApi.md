# OpenAPI\Client\QueriesApi

All URIs are relative to https://api.vectara.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**query()**](QueriesApi.md#query) | **POST** /v2/query | Query Corpora |
| [**queryCorpus()**](QueriesApi.md#queryCorpus) | **POST** /v2/corpora/{corpus_key}/query | Corpus Query |
| [**searchCorpus()**](QueriesApi.md#searchCorpus) | **GET** /v2/corpora/{corpus_key}/query | Simple Corpus Query |


## `query()`

```php
query($query_request): \OpenAPI\Client\VectaraModel\QueryFullResponse
```

Query Corpora

Perform a multi-purpose query that can retrieve relevant information from one or more corpora and generate a response using RAG.

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


$apiInstance = new OpenAPI\Client\Api\QueriesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$query_request = new \OpenAPI\Client\VectaraModel\QueryRequest(); // \OpenAPI\Client\VectaraModel\QueryRequest

try {
    $result = $apiInstance->query($query_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QueriesApi->query: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **query_request** | [**\OpenAPI\Client\VectaraModel\QueryRequest**](../Model/QueryRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\QueryFullResponse**](../Model/QueryFullResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/event-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `queryCorpus()`

```php
queryCorpus($corpus_key, $query_corpus_request): \OpenAPI\Client\VectaraModel\QueryFullResponse
```

Corpus Query

Query a specific corpus and find relevant results, highlight relevant snippets, and use Retrieval Augmented Generation.

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


$apiInstance = new OpenAPI\Client\Api\QueriesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = 'corpus_key_example'; // string | The unique key identifying the corpus to query.
$query_corpus_request = new \OpenAPI\Client\VectaraModel\QueryCorpusRequest(); // \OpenAPI\Client\VectaraModel\QueryCorpusRequest

try {
    $result = $apiInstance->queryCorpus($corpus_key, $query_corpus_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QueriesApi->queryCorpus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | **string**| The unique key identifying the corpus to query. | |
| **query_corpus_request** | [**\OpenAPI\Client\VectaraModel\QueryCorpusRequest**](../Model/QueryCorpusRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\QueryFullResponse**](../Model/QueryFullResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/event-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `searchCorpus()`

```php
searchCorpus($corpus_key, $query, $limit, $offset): \OpenAPI\Client\VectaraModel\QueryFullResponse
```

Simple Corpus Query

Search a single corpus with a simple query request.

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


$apiInstance = new OpenAPI\Client\Api\QueriesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = 'corpus_key_example'; // string | The unique key identifying the corpus to query.
$query = 'query_example'; // string | The search query string for the corpus.
$limit = 10; // int | Maximum number of results to return.
$offset = 0; // int | Position from which to start in the result set.

try {
    $result = $apiInstance->searchCorpus($corpus_key, $query, $limit, $offset);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QueriesApi->searchCorpus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | **string**| The unique key identifying the corpus to query. | |
| **query** | **string**| The search query string for the corpus. | |
| **limit** | **int**| Maximum number of results to return. | [optional] [default to 10] |
| **offset** | **int**| Position from which to start in the result set. | [optional] [default to 0] |

### Return type

[**\OpenAPI\Client\VectaraModel\QueryFullResponse**](../Model/QueryFullResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
