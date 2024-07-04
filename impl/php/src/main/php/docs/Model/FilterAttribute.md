# # FilterAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The JSON path of the filter attribute in a document or document part metadata. |
**level** | **string** | Indicates whether this a document or document part metadata filter. |
**description** | **string** | Description of the filter. May be omitted. | [optional]
**indexed** | **bool** | Whether an index is created for the filter. Creating an index will improve query latency when using the filter. | [optional] [default to true]
**type** | **string** | The value type of the filter. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
