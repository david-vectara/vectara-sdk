# # ChatFullResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **string** | If the chat response was stored, the ID of the chat. | [optional]
**turn_id** | **string** | If the chat response was stored, the ID of the turn. | [optional]
**answer** | **string** | The message from the chat model for the chat message. | [optional]
**response_language** | [**\OpenAPI\Client\VectaraModel\Language**](Language.md) |  | [optional]
**search_results** | [**\OpenAPI\Client\VectaraModel\IndividualSearchResult[]**](IndividualSearchResult.md) | The ranked search results that the chat model used. | [optional]
**factual_consistency_score** | **float** | The probability that the summary is factually consistent with the results. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
