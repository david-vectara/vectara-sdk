# # CustomerSpecificReranker

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | When type is is &#x60;customer_reranker&#x60;, you can specify the &#x60;reranker_id&#x60; of a reranker.  The retrieval engine will then rerank results using that reranker. | [optional] [default to 'customer_reranker']
**reranker_id** | **string** | The ID of the reranker. Current reranker that may be used by Scale customers is rnk_272725719. Do not specify the MMR reranker ID here, and instead use the MMR reranker object type. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
