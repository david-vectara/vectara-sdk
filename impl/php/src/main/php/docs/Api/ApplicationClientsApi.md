# OpenAPI\Client\ApplicationClientsApi

All URIs are relative to https://api.vectara.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createAppClient()**](ApplicationClientsApi.md#createAppClient) | **POST** /v2/app_clients | Create an App Client |
| [**deleteAppClient()**](ApplicationClientsApi.md#deleteAppClient) | **DELETE** /v2/app_clients/{app_client_id} | Delete an App Client |
| [**getAppClient()**](ApplicationClientsApi.md#getAppClient) | **GET** /v2/app_clients/{app_client_id} | Get an App Client |
| [**listAppClient()**](ApplicationClientsApi.md#listAppClient) | **GET** /v2/app_clients | List App Clients |
| [**updateAppClient()**](ApplicationClientsApi.md#updateAppClient) | **PATCH** /v2/app_clients/{app_client_id} | Update an App Client |


## `createAppClient()`

```php
createAppClient($create_app_client_request): \OpenAPI\Client\VectaraModel\AppClient
```

Create an App Client

An App Client is used for OAuth 2.0 authentication when calling Vectara APIs.

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


$apiInstance = new OpenAPI\Client\Api\ApplicationClientsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_app_client_request = new \OpenAPI\Client\VectaraModel\CreateAppClientRequest(); // \OpenAPI\Client\VectaraModel\CreateAppClientRequest

try {
    $result = $apiInstance->createAppClient($create_app_client_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApplicationClientsApi->createAppClient: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_app_client_request** | [**\OpenAPI\Client\VectaraModel\CreateAppClientRequest**](../Model/CreateAppClientRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\AppClient**](../Model/AppClient.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteAppClient()`

```php
deleteAppClient($app_client_id)
```

Delete an App Client

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


$apiInstance = new OpenAPI\Client\Api\ApplicationClientsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$app_client_id = 'app_client_id_example'; // string | The name of App Client.

try {
    $apiInstance->deleteAppClient($app_client_id);
} catch (Exception $e) {
    echo 'Exception when calling ApplicationClientsApi->deleteAppClient: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **app_client_id** | **string**| The name of App Client. | |

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

## `getAppClient()`

```php
getAppClient($app_client_id): \OpenAPI\Client\VectaraModel\AppClient
```

Get an App Client

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


$apiInstance = new OpenAPI\Client\Api\ApplicationClientsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$app_client_id = 'app_client_id_example'; // string | The name of the App Client.

try {
    $result = $apiInstance->getAppClient($app_client_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApplicationClientsApi->getAppClient: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **app_client_id** | **string**| The name of the App Client. | |

### Return type

[**\OpenAPI\Client\VectaraModel\AppClient**](../Model/AppClient.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listAppClient()`

```php
listAppClient($limit, $filter, $page_key): \OpenAPI\Client\VectaraModel\ListAppClientsResponse
```

List App Clients

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


$apiInstance = new OpenAPI\Client\Api\ApplicationClientsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 10; // int | The maximum number of App Clients to return at one time.
$filter = 'filter_example'; // string | Regular expression to filter the names of the App Clients.
$page_key = 'page_key_example'; // string | Used to retrieve the next page of App Clients after the limit has been reached.

try {
    $result = $apiInstance->listAppClient($limit, $filter, $page_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApplicationClientsApi->listAppClient: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| The maximum number of App Clients to return at one time. | [optional] [default to 10] |
| **filter** | **string**| Regular expression to filter the names of the App Clients. | [optional] |
| **page_key** | **string**| Used to retrieve the next page of App Clients after the limit has been reached. | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\ListAppClientsResponse**](../Model/ListAppClientsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateAppClient()`

```php
updateAppClient($app_client_id, $update_app_client_request): \OpenAPI\Client\VectaraModel\AppClient
```

Update an App Client

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


$apiInstance = new OpenAPI\Client\Api\ApplicationClientsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$app_client_id = 'app_client_id_example'; // string | The name of App Client.
$update_app_client_request = new \OpenAPI\Client\VectaraModel\UpdateAppClientRequest(); // \OpenAPI\Client\VectaraModel\UpdateAppClientRequest

try {
    $result = $apiInstance->updateAppClient($app_client_id, $update_app_client_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApplicationClientsApi->updateAppClient: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **app_client_id** | **string**| The name of App Client. | |
| **update_app_client_request** | [**\OpenAPI\Client\VectaraModel\UpdateAppClientRequest**](../Model/UpdateAppClientRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\AppClient**](../Model/AppClient.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
