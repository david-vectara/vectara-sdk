# # CitationParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**style** | **string** | The citation style to be used in summary. Can be one of: * &#x60;numeric&#x60; - Citations formatted as simple numerals: \\[1\\], \\[2\\] ... * &#x60;none&#x60; - Citations removed from text. * &#x60;html&#x60; - Citation formatted as url like &#x60;&lt;a href&#x3D;\&quot;url_pattern\&quot;&gt;text_pattern&lt;/a&gt;&#x60;. * &#x60;markdown&#x60; - Formatted as &#x60;[text_pattern](url_pattern)&#x60;. | [optional]
**url_pattern** | **string** | The url pattern if the citation_style is set to &#x60;html&#x60; or &#x60;markdown&#x60;. The pattern can access metadata attributes in the document or part. e.g. &#x60;https://my.doc/foo/{doc.id}/{part.id}&#x60;  The default &#x60;url_pattern&#x60; is an empty string. | [optional]
**text_pattern** | **string** | The text pattern if the citation_style is set to &#x60;html&#x60; or &#x60;markdown&#x60;. This pattern sets the href for html or the text within &#x60;[]&#x60; in markdown, and defaults to N being the index of result if it is not set.  The default citation style looks like &#x60;[N](&lt;url_pattern&gt;)&#x60; for markdown.  You can use metadata attributes in the &#x60;text_pattern&#x60;. For example, the pattern &#x60;{doc.title}&#x60; with citation style &#x60;markdown&#x60; would result in final citation output like &#x60;[Title](&lt;url_pattern&gt;)&#x60; when the document&#39;s metadata includes &#x60;{\&quot;title\&quot;:\&quot;Title\&quot;}&#x60;. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
