# # CoreDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The Document ID, must be unique within the corpus. |
**type** | **string** | When the type of the indexed document is &#x60;core&#x60; the rest of the object is expected to follow this schema. This schema allows precise specification of document chunks that get directly translated to retrieval search results. | [default to 'core']
**metadata** | **array<string,mixed>** | Arbitrary object of document level metadata. Properties of this object can be used by document filter if defined as a corpus filter attribute. | [optional]
**document_parts** | [**\OpenAPI\Client\VectaraModel\CoreDocumentPart[]**](CoreDocumentPart.md) | Parts of the document that make up the document. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
