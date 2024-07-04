# # SearchCorporaParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offset** | **int** | Specifies how many results into the result to skip. This is useful for pagination. | [optional] [default to 0]
**limit** | **int** | The maximum number of results returned. | [optional] [default to 10]
**context_configuration** | [**\OpenAPI\Client\VectaraModel\ContextConfiguration**](ContextConfiguration.md) |  | [optional]
**reranker** | [**\OpenAPI\Client\VectaraModel\SearchReranker**](SearchReranker.md) |  | [optional]
**corpora** | [**\OpenAPI\Client\VectaraModel\KeyedSearchCorpus[]**](KeyedSearchCorpus.md) | The corpora that you want to search. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
