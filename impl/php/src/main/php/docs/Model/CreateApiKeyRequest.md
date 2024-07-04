# # CreateApiKeyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The human-readable name of the API key. |
**api_key_role** | [**\OpenAPI\Client\VectaraModel\ApiKeyRole**](ApiKeyRole.md) |  |
**corpus_keys** | **string[]** | Corpora this API key has roles on if it is not a Personal API key. This property should be null of missing if this &#x60;api_key_role&#x60; is &#x60;personal&#x60;. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
