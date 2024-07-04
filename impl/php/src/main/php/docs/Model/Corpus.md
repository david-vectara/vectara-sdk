# # Corpus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Vectara ID of the corpus. | [optional]
**key** | **string** | A user-provided key for a corpus. | [optional]
**name** | **string** | Name for the corpus. This value defaults to the key. | [optional]
**description** | **string** | Corpus description. | [optional]
**enabled** | **bool** | Specifies whether the corpus is enabled or not. | [optional]
**chat_history_corpus** | **bool** | Indicates that this corpus does not store documents amd stores chats instead. | [optional]
**queries_are_answers** | **bool** | Queries made to this corpus are considered answers, and not questions. This swaps the semantics of the encoder used at query time. | [optional] [default to false]
**documents_are_questions** | **bool** | Documents inside this corpus are considered questions, and not answers. This swaps the semantics of the encoder used at indexing. | [optional] [default to false]
**encoder_id** | **string** | The encoder used by the corpus. | [optional]
**filter_attributes** | [**\OpenAPI\Client\VectaraModel\FilterAttribute[]**](FilterAttribute.md) | The new filter attributes of the corpus. | [optional]
**custom_dimensions** | [**\OpenAPI\Client\VectaraModel\CorpusCustomDimension[]**](CorpusCustomDimension.md) | The custom dimensions of all document parts inside the corpus. | [optional]
**limits** | [**\OpenAPI\Client\VectaraModel\CorpusLimits**](CorpusLimits.md) |  | [optional]
**created_at** | **\DateTime** | Indicates when the corpus was created. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
