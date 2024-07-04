# # LLM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the LLM. This is used as the model ID in a query. | [optional]
**name** | **string** | Name of the LLM. | [optional]
**description** | **string** | The description of the LLM. | [optional]
**enabled** | **bool** | Indicates whether the LLM is enabled. | [optional]
**default** | **bool** | If this is the default LLM, it is used in queries when the generator is not specified. | [optional]
**prompts** | [**\OpenAPI\Client\VectaraModel\Prompt[]**](Prompt.md) | List of prompts that the model can used. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
