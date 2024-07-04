# OpenAPI\Client\ChatsApi

All URIs are relative to https://api.vectara.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createChat()**](ChatsApi.md#createChat) | **POST** /v2/chats | Start a chat |
| [**createChatTurn()**](ChatsApi.md#createChatTurn) | **POST** /v2/chats/{chat_id}/turns | Create a new turn in the chat |
| [**deleteChat()**](ChatsApi.md#deleteChat) | **DELETE** /v2/chats/{chat_id} | Delete a chat |
| [**deleteChatTurn()**](ChatsApi.md#deleteChatTurn) | **DELETE** /v2/chats/{chat_id}/turns/{turn_id} | Delete a turn |
| [**getChat()**](ChatsApi.md#getChat) | **GET** /v2/chats/{chat_id} | Get a chat |
| [**getChatTurn()**](ChatsApi.md#getChatTurn) | **GET** /v2/chats/{chat_id}/turns/{turn_id} | Get a turn |
| [**listChatTurns()**](ChatsApi.md#listChatTurns) | **GET** /v2/chats/{chat_id}/turns | List turns in a chat |
| [**listChats()**](ChatsApi.md#listChats) | **GET** /v2/chats | List chats |
| [**updateChatTurn()**](ChatsApi.md#updateChatTurn) | **PATCH** /v2/chats/{chat_id}/turns/{turn_id} | Update a turn |


## `createChat()`

```php
createChat($chat_request): \OpenAPI\Client\VectaraModel\ChatFullResponse
```

Start a chat

Create a chat while specifying the default retrieval parameters used by the prompt.

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


$apiInstance = new OpenAPI\Client\Api\ChatsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$chat_request = new \OpenAPI\Client\VectaraModel\ChatRequest(); // \OpenAPI\Client\VectaraModel\ChatRequest

try {
    $result = $apiInstance->createChat($chat_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChatsApi->createChat: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **chat_request** | [**\OpenAPI\Client\VectaraModel\ChatRequest**](../Model/ChatRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\ChatFullResponse**](../Model/ChatFullResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/event-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createChatTurn()`

```php
createChatTurn($chat_id, $chat_request): \OpenAPI\Client\VectaraModel\ChatFullResponse
```

Create a new turn in the chat

Create a new turn in the chat. Each conversation has a series of `turn` objects, which are the sequence of message and response pairs tha make up the dialog.

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


$apiInstance = new OpenAPI\Client\Api\ChatsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$chat_id = 'chat_id_example'; // string | The ID of the chat.
$chat_request = new \OpenAPI\Client\VectaraModel\ChatRequest(); // \OpenAPI\Client\VectaraModel\ChatRequest

try {
    $result = $apiInstance->createChatTurn($chat_id, $chat_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChatsApi->createChatTurn: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **chat_id** | **string**| The ID of the chat. | |
| **chat_request** | [**\OpenAPI\Client\VectaraModel\ChatRequest**](../Model/ChatRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\ChatFullResponse**](../Model/ChatFullResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/event-stream`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteChat()`

```php
deleteChat($chat_id)
```

Delete a chat

Delete a chat and any turns it contains permanently.

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


$apiInstance = new OpenAPI\Client\Api\ChatsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$chat_id = 'chat_id_example'; // string | The ID of the chat.

try {
    $apiInstance->deleteChat($chat_id);
} catch (Exception $e) {
    echo 'Exception when calling ChatsApi->deleteChat: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **chat_id** | **string**| The ID of the chat. | |

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

## `deleteChatTurn()`

```php
deleteChatTurn($chat_id, $turn_id)
```

Delete a turn

Delete a turn from a chat. This will delete all subsequent turns in the chat.

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


$apiInstance = new OpenAPI\Client\Api\ChatsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$chat_id = 'chat_id_example'; // string | The ID of the chat.
$turn_id = 'turn_id_example'; // string | The ID of the turn.

try {
    $apiInstance->deleteChatTurn($chat_id, $turn_id);
} catch (Exception $e) {
    echo 'Exception when calling ChatsApi->deleteChatTurn: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **chat_id** | **string**| The ID of the chat. | |
| **turn_id** | **string**| The ID of the turn. | |

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

## `getChat()`

```php
getChat($chat_id): \OpenAPI\Client\VectaraModel\Chat
```

Get a chat

Get a chat summary to view what started the chat, but not subsequent turns.

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


$apiInstance = new OpenAPI\Client\Api\ChatsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$chat_id = 'chat_id_example'; // string | The ID of the chat.

try {
    $result = $apiInstance->getChat($chat_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChatsApi->getChat: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **chat_id** | **string**| The ID of the chat. | |

### Return type

[**\OpenAPI\Client\VectaraModel\Chat**](../Model/Chat.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getChatTurn()`

```php
getChatTurn($chat_id, $turn_id): \OpenAPI\Client\VectaraModel\Turn
```

Get a turn

Get a specific turn from a chat, which is a message and response pair from the conversation.

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


$apiInstance = new OpenAPI\Client\Api\ChatsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$chat_id = 'chat_id_example'; // string | The ID of the chat.
$turn_id = 'turn_id_example'; // string | The ID of the turn.

try {
    $result = $apiInstance->getChatTurn($chat_id, $turn_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChatsApi->getChatTurn: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **chat_id** | **string**| The ID of the chat. | |
| **turn_id** | **string**| The ID of the turn. | |

### Return type

[**\OpenAPI\Client\VectaraModel\Turn**](../Model/Turn.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listChatTurns()`

```php
listChatTurns($chat_id): \OpenAPI\Client\VectaraModel\ListChatTurnsResponse
```

List turns in a chat

List all turns in a chat to see all message and response pairs that make up the dialog.

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


$apiInstance = new OpenAPI\Client\Api\ChatsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$chat_id = 'chat_id_example'; // string | The ID of the chat.

try {
    $result = $apiInstance->listChatTurns($chat_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChatsApi->listChatTurns: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **chat_id** | **string**| The ID of the chat. | |

### Return type

[**\OpenAPI\Client\VectaraModel\ListChatTurnsResponse**](../Model/ListChatTurnsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listChats()`

```php
listChats($limit, $page_key): \OpenAPI\Client\VectaraModel\ListChatsResponse
```

List chats

Retrieve a list of previous chats in the Vectara account.

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


$apiInstance = new OpenAPI\Client\Api\ChatsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 1000; // int | The maximum number of results to return in the list.
$page_key = 'page_key_example'; // string | Used to the retrieve the next page of chats after the limit has been reached.

try {
    $result = $apiInstance->listChats($limit, $page_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChatsApi->listChats: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| The maximum number of results to return in the list. | [optional] [default to 1000] |
| **page_key** | **string**| Used to the retrieve the next page of chats after the limit has been reached. | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\ListChatsResponse**](../Model/ListChatsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateChatTurn()`

```php
updateChatTurn($chat_id, $turn_id, $update_turn_request): \OpenAPI\Client\VectaraModel\Turn
```

Update a turn

Update a turn; used to disable or enable a chat.

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


$apiInstance = new OpenAPI\Client\Api\ChatsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$chat_id = 'chat_id_example'; // string | The ID of the chat.
$turn_id = 'turn_id_example'; // string | The ID of the turn.
$update_turn_request = new \OpenAPI\Client\VectaraModel\UpdateTurnRequest(); // \OpenAPI\Client\VectaraModel\UpdateTurnRequest

try {
    $result = $apiInstance->updateChatTurn($chat_id, $turn_id, $update_turn_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChatsApi->updateChatTurn: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **chat_id** | **string**| The ID of the chat. | |
| **turn_id** | **string**| The ID of the turn. | |
| **update_turn_request** | [**\OpenAPI\Client\VectaraModel\UpdateTurnRequest**](../Model/UpdateTurnRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\Turn**](../Model/Turn.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
