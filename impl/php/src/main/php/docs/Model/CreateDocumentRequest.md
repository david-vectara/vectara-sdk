# # CreateDocumentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The Document ID, must be unique within the corpus. |
**type** | **string** | When the type of the indexed document is &#x60;structured&#x60; the rest of the object is expected to follow this schema. It allows you to create a document that follows normal document conventions. The Vectara platform will then create document parts using its internal algorithm. | [default to 'structured']
**metadata** | **array<string,mixed>** | The metadata for a document and is an arbitrary JSON object. Properties of this object can be used by document level filter attributes. | [optional]
**document_parts** | [**\OpenAPI\Client\VectaraModel\CoreDocumentPart[]**](CoreDocumentPart.md) | Parts of the document that make up the document. |
**title** | **string** | The title of the document. | [optional]
**description** | **string** | The description of the document. | [optional]
**custom_dimensions** | **array<string,float>** | The custom dimensions as additional weights. | [optional]
**sections** | [**\OpenAPI\Client\VectaraModel\StructuredDocumentSection[]**](StructuredDocumentSection.md) | The subsection of the document. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
