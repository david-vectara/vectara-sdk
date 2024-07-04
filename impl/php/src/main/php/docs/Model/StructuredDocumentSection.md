# # StructuredDocumentSection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The section ID. Gets converted to a metadata field. | [optional]
**title** | **string** | The section title. | [optional]
**text** | **string** | The text of the section. |
**metadata** | **array<string,mixed>** | Arbitrary object that becomes document part level metadata on any document part created  by this section. Properties of this object can be used by document part level  filters if defined as a corpus filter attribute. | [optional]
**sections** | [**\OpenAPI\Client\VectaraModel\StructuredDocumentSection[]**](StructuredDocumentSection.md) | The sections that this section contains. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
