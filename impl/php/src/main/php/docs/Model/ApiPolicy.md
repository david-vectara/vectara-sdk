# # ApiPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the API role. |
**allowed_operations** | [**array<string,\OpenAPI\Client\VectaraModel\ApiOperationPolicy>**](ApiOperationPolicy.md) | Operations that are allowed by the API role. Each operation may only allow certain resources that are described by a resource path to resource value map. If the value is null, then the operation is allowed on any resource. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
