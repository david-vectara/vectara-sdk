# # AppClient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The Vectara App Client ID. This ID is not used during an OAuth flow but the ID used within the Vectara API. | [optional]
**name** | **string** | The human-readable name of the App Client. | [optional]
**description** | **string** | Description of the App Client. | [optional]
**client_id** | **string** | The client ID used with the OAuth flow. | [optional]
**client_secret** | **string** | The key used in API requests. Should be kept secure. | [optional]
**api_roles** | [**\OpenAPI\Client\VectaraModel\ApiRole[]**](ApiRole.md) | The API roles attached to the App Client. | [optional]
**api_policy** | [**\OpenAPI\Client\VectaraModel\ApiPolicy**](ApiPolicy.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
