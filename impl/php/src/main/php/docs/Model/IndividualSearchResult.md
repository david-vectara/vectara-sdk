# # IndividualSearchResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | The document part altered by the context configuration that matches the query. | [optional]
**score** | **float** | The score of the individual result. | [optional]
**part_metadata** | **array<string,mixed>** | The metadata for the document part. | [optional]
**document_metadata** | **array<string,mixed>** | The metadata for the document that contains the document part. | [optional]
**document_id** | **string** | The ID of the document that contains the document part. | [optional]
**request_corpora_index** | **int** | A query request can search over multiple corpora at a time. This property  is set to the index in the list of corpora in the original search request that this search result originated from.  If the query request is only over one corpus, this property is 0. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
