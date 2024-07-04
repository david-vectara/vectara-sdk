# OpenAPI\Client\LargeLanguageModelsApi

All URIs are relative to https://api.vectara.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**listLLMs()**](LargeLanguageModelsApi.md#listLLMs) | **GET** /v2/llms | List LLMs. |


## `listLLMs()`

```php
listLLMs($filter, $limit, $page_key): \OpenAPI\Client\VectaraModel\ListLLMsResponse
```

List LLMs.

List LLMs that can be used with query and chat endpoints.

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


$apiInstance = new OpenAPI\Client\Api\LargeLanguageModelsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$filter = 'filter_example'; // string | A regular expression to match names and descriptions of the LLMs.
$limit = 10; // int | The maximum number of results to return in the list.
$page_key = 'page_key_example'; // string | Used to the retrieve the next page of LLMs after the limit has been reached. This parameter is not needed for the first page of results.

try {
    $result = $apiInstance->listLLMs($filter, $limit, $page_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LargeLanguageModelsApi->listLLMs: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| A regular expression to match names and descriptions of the LLMs. | [optional] |
| **limit** | **int**| The maximum number of results to return in the list. | [optional] [default to 10] |
| **page_key** | **string**| Used to the retrieve the next page of LLMs after the limit has been reached. This parameter is not needed for the first page of results. | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\ListLLMsResponse**](../Model/ListLLMsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
