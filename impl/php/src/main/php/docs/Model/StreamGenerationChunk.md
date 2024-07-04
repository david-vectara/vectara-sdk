# # StreamGenerationChunk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | When the streaming event contains the next chunk of generator output, the type will be &#x60;generation_chunk&#x60;. | [optional] [default to 'generation_chunk']
**generation_chunk** | **string** | Part of the message from the generator. All summary chunks must be appended together in order to get the full summary. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
