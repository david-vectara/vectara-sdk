# # ContextConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**characters_before** | **int** | The number of characters before the matching document part that are shown. This is useful to show the context of the document part in the wider document. Ignored if &#x60;sentences_before&#x60; is set. Vectara will capture the full sentence that contains the captured characters, so as to not lose the meaning caused by a truncated word or sentence. | [optional] [default to 0]
**characters_after** | **int** | The number of characters after the matching document part that are shown.  This is useful to show the context of the document part in the wider document. Ignored if &#x60;sentences_after&#x60; is set. Vectara will capture the full sentence that contains the captured characters, so as to not lose the meaning caused by a truncated word or sentence. | [optional] [default to 0]
**sentences_before** | **int** | The number of sentences before the matching document part that are shown. This is useful to show the context of the document part in the wider document. | [optional] [default to 0]
**sentences_after** | **int** | The number of sentences after the matching document part that are shown.  This is useful to show the context of the document part in the wider document. | [optional] [default to 0]
**start_tag** | **string** | The tag that wraps the document part at the start. This is often used to  provide a start HTML/XML tag or some other delimiter you can use in an  application to understand where to provide highlighting in your UI and  understand where the context before ends and the document part begins. | [optional]
**end_tag** | **string** | The tag that wraps the document part at the end. This is often used to  provide a start HTML/XML tag or some other delimiter you can use in an  application to understand where to provide highlighting in your UI and  understand where the context before ends and the document part begins. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
