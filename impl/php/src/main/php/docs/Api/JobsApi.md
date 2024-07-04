# OpenAPI\Client\JobsApi

All URIs are relative to https://api.vectara.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getJob()**](JobsApi.md#getJob) | **GET** /v2/jobs/{job_id} | Get a job by ID |
| [**listJobs()**](JobsApi.md#listJobs) | **GET** /v2/jobs | List jobs |


## `getJob()`

```php
getJob($job_id): \OpenAPI\Client\VectaraModel\Job
```

Get a job by ID

Get a job by a specific ID. Jobs are background processes like replacing the filterable metadata attributes.

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


$apiInstance = new OpenAPI\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$job_id = 'job_id_example'; // string | The ID of job to get.

try {
    $result = $apiInstance->getJob($job_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->getJob: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **job_id** | **string**| The ID of job to get. | |

### Return type

[**\OpenAPI\Client\VectaraModel\Job**](../Model/Job.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listJobs()`

```php
listJobs($corpus_key, $after, $state, $limit, $page_key): \OpenAPI\Client\VectaraModel\ListJobsResponse
```

List jobs

List jobs for the account. Jobs are background processes like replacing the filterable metadata attributes.

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


$apiInstance = new OpenAPI\Client\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$corpus_key = array('corpus_key_example'); // string[] | The unique key identifying the corpus with the job.
$after = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | Get jobs after a date time.
$state = array(new \OpenAPI\Client\VectaraModel\\OpenAPI\Client\VectaraModel\JobState()); // \OpenAPI\Client\VectaraModel\JobState[] | Indicates the states the jobs can be in.
$limit = 10; // int | The maximum number of documents to return at one time.
$page_key = 'page_key_example'; // string | Used to the retrieve the next page of documents after the limit has been reached.

try {
    $result = $apiInstance->listJobs($corpus_key, $after, $state, $limit, $page_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->listJobs: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **corpus_key** | [**string[]**](../Model/string.md)| The unique key identifying the corpus with the job. | [optional] |
| **after** | **\DateTime**| Get jobs after a date time. | [optional] |
| **state** | [**\OpenAPI\Client\VectaraModel\JobState[]**](../Model/\OpenAPI\Client\VectaraModel\JobState.md)| Indicates the states the jobs can be in. | [optional] |
| **limit** | **int**| The maximum number of documents to return at one time. | [optional] [default to 10] |
| **page_key** | **string**| Used to the retrieve the next page of documents after the limit has been reached. | [optional] |

### Return type

[**\OpenAPI\Client\VectaraModel\ListJobsResponse**](../Model/ListJobsResponse.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
