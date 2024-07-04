# # ApiOperationPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_any_resource** | **bool** | If any resource is allowed for the operation. | [default to true]
**allowed_resources** | **array<string,string[]>** | Object with keys of resource paths to a list of allowed resources. A resource path starts with either body, path, or implicit. A body or path resource is within the operation body, and implicit resource is a resource implied by the request. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
