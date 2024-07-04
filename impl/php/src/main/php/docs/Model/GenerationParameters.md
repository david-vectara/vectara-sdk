# # GenerationParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt_name** | **string** | The prompt to use to feed the query results and other context to the model. By specifying the prompt name you also specify the model and other &#x60;model_parameter&#x60; defaults. | [optional]
**max_used_search_results** | **int** | The maximum number of search results to be available to the prompt. | [optional] [default to 5]
**prompt_text** | **string** | Vectara manages both system and user roles and prompts for the generative LLM out of the box by default. However, Scale customers can override the prompt_text via this variable. The prompt_text is in the form of an Apache Velocity template. For more details on how to configure the prompt_text, see the long-form documentation at https://docs.vectara.com/docs/prompts/vectara-prompt-engine. See https://vectara.com/pricing/ for more details on becoming a Scale customer. | [optional]
**max_response_characters** | **int** | Controls the length of the generated output. This is a rough estimate and not a hard limit: the end output can be longer or shorter than this value.  This is currently a Scale-only feature. See https://vectara.com/pricing/ for more details on becoming a Scale customer. | [optional]
**response_language** | [**\OpenAPI\Client\VectaraModel\Language**](Language.md) |  | [optional]
**model_parameters** | [**\OpenAPI\Client\VectaraModel\ModelParameters**](ModelParameters.md) |  | [optional]
**citations** | [**\OpenAPI\Client\VectaraModel\CitationParameters**](CitationParameters.md) |  | [optional]
**enable_factual_consistency_score** | **bool** | Enable returning the factual consistency score with query results. | [optional] [default to true]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
