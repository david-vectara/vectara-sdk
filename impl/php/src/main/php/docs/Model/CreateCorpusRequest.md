# # CreateCorpusRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A user-provided key for a corpus. |
**name** | **string** | The name for the corpus. This value defaults to the key. | [optional]
**description** | **string** | Description for the corpus. | [optional]
**queries_are_answers** | **bool** | Queries made to this corpus are considered answers, and not questions. | [optional] [default to false]
**documents_are_questions** | **bool** | Documents inside this corpus are considered questions, and not answers. | [optional] [default to false]
**encoder_id** | **string** | The encoder used by the corpus. This value defaults to the most recent Vectara encoder. | [optional]
**filter_attributes** | [**\OpenAPI\Client\VectaraModel\FilterAttribute[]**](FilterAttribute.md) | The new filter attributes of the corpus.  If unset then the corpus will not have filter attributes. | [optional]
**custom_dimensions** | [**\OpenAPI\Client\VectaraModel\CorpusCustomDimension[]**](CorpusCustomDimension.md) | A custom dimension is an additional numerical field attached to a document part. You can then multiply this numerical field with a query time custom dimension of the same name. This allows boosting (or deboosting) document parts for arbitrary reasons. This feature is only enabled for Scale customers. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
