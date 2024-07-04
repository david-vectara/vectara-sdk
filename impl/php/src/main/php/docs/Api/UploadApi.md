# OpenAPI\Client\UploadApi

All URIs are relative to https://api.vectara.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**uploadFile()**](UploadApi.md#uploadFile) | **POST** /v2/corpora/{corpus_key}/upload_file | Upload a file to the corpus |


## `uploadFile()`

```php
uploadFile($corpus_key, $file, $metadata): \OpenAPI\Client\VectaraModel\Document
```

Upload a file to the corpus

Upload files such as PDFs and Word Documents. Vectara will attempt to automatically extract text and any metadata.

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


$apiInstance = new OpenAPI\Client\Api\UploadApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = 'corpus_key_example'; // string | The unique key identifying the corpus of which to upload the file.
$file = "/path/to/file.txt"; // \SplFileObject | Binary file contents. The file name of the file will be used as the document ID.
$metadata = NULL; // array<string,mixed> | Arbitrary object that will be attached as document metadata to the extracted document.

try {
    $result = $apiInstance->uploadFile($corpus_key, $file, $metadata);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UploadApi->uploadFile: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | **string**| The unique key identifying the corpus of which to upload the file. | |
| **file** | **\SplFileObject****\SplFileObject**| Binary file contents. The file name of the file will be used as the document ID. | |
| **metadata** | [**array<string,mixed>**](../Model/array.md)| Arbitrary object that will be attached as document metadata to the extracted document. | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\Document**](../Model/Document.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
