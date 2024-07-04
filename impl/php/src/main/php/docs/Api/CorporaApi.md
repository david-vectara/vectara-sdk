# OpenAPI\Client\CorporaApi

All URIs are relative to https://api.vectara.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createCorpus()**](CorporaApi.md#createCorpus) | **POST** /v2/corpora | Create a corpus |
| [**deleteCorpus()**](CorporaApi.md#deleteCorpus) | **DELETE** /v2/corpora/{corpus_key} | Delete a corpus and all its data |
| [**getCorpus()**](CorporaApi.md#getCorpus) | **GET** /v2/corpora/{corpus_key} | Retrieve metadata about a corpus |
| [**listCorpora()**](CorporaApi.md#listCorpora) | **GET** /v2/corpora | List corpora |
| [**replaceFilterAttributes()**](CorporaApi.md#replaceFilterAttributes) | **POST** /v2/corpora/{corpus_key}/replace_filter_attributes | Replace the filter attributes of a corpus |
| [**resetCorpus()**](CorporaApi.md#resetCorpus) | **POST** /v2/corpora/{corpus_key}/reset | Remove all documents and data in a corpus |
| [**updateCorpus()**](CorporaApi.md#updateCorpus) | **PATCH** /v2/corpora/{corpus_key} | Update a corpus |


## `createCorpus()`

```php
createCorpus($create_corpus_request): \OpenAPI\Client\VectaraModel\Corpus
```

Create a corpus

Create a corpus, which is a container to store documents and associated metadata.

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


$apiInstance = new OpenAPI\Client\Api\CorporaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_corpus_request = new \OpenAPI\Client\VectaraModel\CreateCorpusRequest(); // \OpenAPI\Client\VectaraModel\CreateCorpusRequest

try {
    $result = $apiInstance->createCorpus($create_corpus_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CorporaApi->createCorpus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_corpus_request** | [**\OpenAPI\Client\VectaraModel\CreateCorpusRequest**](../Model/CreateCorpusRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\Corpus**](../Model/Corpus.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteCorpus()`

```php
deleteCorpus($corpus_key)
```

Delete a corpus and all its data

Delete a corpus and all the data that it contains.

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


$apiInstance = new OpenAPI\Client\Api\CorporaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = 'corpus_key_example'; // string | The unique key identifying the corpus to delete

try {
    $apiInstance->deleteCorpus($corpus_key);
} catch (Exception $e) {
    echo 'Exception when calling CorporaApi->deleteCorpus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | **string**| The unique key identifying the corpus to delete | |

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

## `getCorpus()`

```php
getCorpus($corpus_key): \OpenAPI\Client\VectaraModel\Corpus
```

Retrieve metadata about a corpus

Get metadata about a corpus. This operation is not a method of searching a corpus.

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


$apiInstance = new OpenAPI\Client\Api\CorporaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = 'corpus_key_example'; // string | The unique key identifying the corpus to retrieve.

try {
    $result = $apiInstance->getCorpus($corpus_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CorporaApi->getCorpus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | **string**| The unique key identifying the corpus to retrieve. | |

### Return type

[**\OpenAPI\Client\VectaraModel\Corpus**](../Model/Corpus.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listCorpora()`

```php
listCorpora($limit, $filter, $page_key): \OpenAPI\Client\VectaraModel\ListCorporaResponse
```

List corpora

List corpora in the account. The corpus objects that are returned are less detailed than the direct corpus retrieval operation.

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


$apiInstance = new OpenAPI\Client\Api\CorporaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 10; // int | The maximum number of corpora to return at one time.
$filter = 'filter_example'; // string | A regular expression to filter the corpora by their name or summary.
$page_key = 'page_key_example'; // string | Used to retrieve the next page of corpora after the limit has been reached.

try {
    $result = $apiInstance->listCorpora($limit, $filter, $page_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CorporaApi->listCorpora: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| The maximum number of corpora to return at one time. | [optional] [default to 10] |
| **filter** | **string**| A regular expression to filter the corpora by their name or summary. | [optional] |
| **page_key** | **string**| Used to retrieve the next page of corpora after the limit has been reached. | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\ListCorporaResponse**](../Model/ListCorporaResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceFilterAttributes()`

```php
replaceFilterAttributes($corpus_key, $replace_filter_attributes_request): \OpenAPI\Client\VectaraModel\ReplaceFilterAttributesResponse
```

Replace the filter attributes of a corpus

Replace the filter attributes of a corpus. This does not happen immediately, but instead creates a job and will complete when that job completes. Until that job completes, using new filter attributes will not work.  You can monitor the status of the filter change using the returned job id.

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


$apiInstance = new OpenAPI\Client\Api\CorporaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = 'corpus_key_example'; // string | Key of the corpus to have filters replaced.
$replace_filter_attributes_request = new \OpenAPI\Client\VectaraModel\ReplaceFilterAttributesRequest(); // \OpenAPI\Client\VectaraModel\ReplaceFilterAttributesRequest

try {
    $result = $apiInstance->replaceFilterAttributes($corpus_key, $replace_filter_attributes_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CorporaApi->replaceFilterAttributes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | **string**| Key of the corpus to have filters replaced. | |
| **replace_filter_attributes_request** | [**\OpenAPI\Client\VectaraModel\ReplaceFilterAttributesRequest**](../Model/ReplaceFilterAttributesRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\ReplaceFilterAttributesResponse**](../Model/ReplaceFilterAttributesResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `resetCorpus()`

```php
resetCorpus($corpus_key)
```

Remove all documents and data in a corpus

Resets a corpus, which removes all documents and data from the specified corpus, while keeping the corpus itself.

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


$apiInstance = new OpenAPI\Client\Api\CorporaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = 'corpus_key_example'; // string | The unique key identifying the corpus to reset.

try {
    $apiInstance->resetCorpus($corpus_key);
} catch (Exception $e) {
    echo 'Exception when calling CorporaApi->resetCorpus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | **string**| The unique key identifying the corpus to reset. | |

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

## `updateCorpus()`

```php
updateCorpus($corpus_key, $update_corpus_request): \OpenAPI\Client\VectaraModel\Corpus
```

Update a corpus

Enable or disable a corpus.

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


$apiInstance = new OpenAPI\Client\Api\CorporaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = 'corpus_key_example'; // string | The unique key identifying the corpus to update.
$update_corpus_request = new \OpenAPI\Client\VectaraModel\UpdateCorpusRequest(); // \OpenAPI\Client\VectaraModel\UpdateCorpusRequest

try {
    $result = $apiInstance->updateCorpus($corpus_key, $update_corpus_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CorporaApi->updateCorpus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | **string**| The unique key identifying the corpus to update. | |
| **update_corpus_request** | [**\OpenAPI\Client\VectaraModel\UpdateCorpusRequest**](../Model/UpdateCorpusRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\Corpus**](../Model/Corpus.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
