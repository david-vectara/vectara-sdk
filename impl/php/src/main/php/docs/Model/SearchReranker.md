# # SearchReranker

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | When the type is &#x60;mmr&#x60;, you can specify the &#x60;diversity_bias&#x60;, and the the retrieval engine will use the MMR reranker. | [optional] [default to 'mmr']
**reranker_id** | **string** | The ID of the reranker. Current reranker that may be used by Scale customers is rnk_272725719. Do not specify the MMR reranker ID here, and instead use the MMR reranker object type. |
**diversity_bias** | **float** | The diversity bias. Higher values indicate more diversity. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
