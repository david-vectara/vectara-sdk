# # ChatStreamedResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | If the stream errors, an event with type &#x60;error&#x60; will be sent. | [optional] [default to 'error']
**search_results** | [**\OpenAPI\Client\VectaraModel\IndividualSearchResult[]**](IndividualSearchResult.md) | The ranked search results. | [optional]
**chat_id** | **string** | ID of the chat. | [optional]
**turn_id** | **string** | ID of the turn. | [optional]
**generation_chunk** | **string** | Part of the message from the generator. All summary chunks must be appended together in order to get the full summary. | [optional]
**factual_consistency_score** | **float** | The probability that the summary is factually consistent with the results. | [optional]
**messages** | **string[]** | The error messages. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
