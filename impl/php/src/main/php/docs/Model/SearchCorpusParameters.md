# # SearchCorpusParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_dimensions** | **array<string,float>** | The custom dimensions as additional weights. | [optional]
**metadata_filter** | **string** | The filter string to narrow the search to according to metadata attributes. | [optional]
**lexical_interpolation** | **float** | How much to weigh lexical scores compared to the embedding score. 0 means lexical search is not used at all, and 1 means only lexical search is used. | [optional]
**semantics** | [**\OpenAPI\Client\VectaraModel\SearchSemantics**](SearchSemantics.md) |  | [optional]
**offset** | **int** | Specifies how many results into the result to skip. This is useful for pagination. | [optional] [default to 0]
**limit** | **int** | The maximum number of results returned. | [optional] [default to 10]
**context_configuration** | [**\OpenAPI\Client\VectaraModel\ContextConfiguration**](ContextConfiguration.md) |  | [optional]
**reranker** | [**\OpenAPI\Client\VectaraModel\SearchReranker**](SearchReranker.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
