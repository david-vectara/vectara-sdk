# coding: utf-8

"""
    Vectara REST API v2

    Vectara provides an end-to-end platform for creating GenAI products using  a simple to use API.  You can [sign up for an account](https://console.vectara.com/signup) and  then view several [API Recipes](https://docs.vectara.com/docs/api-recipes) with example queries  and parameter values.  The Vectara API Playground lets you experiment with REST endpoints from  your browser. Select an endpoint to view its definition, including the  required or optional headers, body, responses, and sample commands. On the  right side of each endpoint page, like [Get Corpus](/docs/rest-api/get-corpus), you manually  enter your API Key or OAuth Bearer Token, `customer_id`, and then any  required body parameters like the `corpusID` before sending the API  request.  :::note  Vectara supports two primary methods of authentication: API keys and OAuth  2.0, which are applicable to all endpoints. Query API Keys are used for  read-only querying operations, while Index API Keys provide read and write  access. The OAuth 2.0 operations authenticate with a Bearer Token via the  OAuth 2.0 client credentials grant. Review the [**OAuth 2.0 section**](https://docs.vectara.com/docs/learn/authentication/oauth-2) about  how to generate the token. 

    The version of the OpenAPI document: 2.0.0
    Contact: feedback@vectara.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from vectara_client.models.core_document_part import CoreDocumentPart
from typing import Optional, Set
from typing_extensions import Self

class CoreDocument(BaseModel):
    """
    The document structure that most closely corresponds to Vectara's internal document data model.
    """ # noqa: E501
    id: StrictStr = Field(description="The Document ID, must be unique within the corpus.")
    type: StrictStr = Field(description="When the type of the indexed document is `core` the rest of the object is expected to follow this schema. This schema allows precise specification of document chunks that get directly translated to retrieval search results. ")
    metadata: Optional[Dict[str, Any]] = Field(default=None, description="Arbitrary object of document level metadata. Properties of this object can be used by document filter if defined as a corpus filter attribute. ")
    document_parts: Annotated[List[CoreDocumentPart], Field(min_length=1)] = Field(description="Parts of the document that make up the document.")
    __properties: ClassVar[List[str]] = ["id", "type", "metadata", "document_parts"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of CoreDocument from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in document_parts (list)
        _items = []
        if self.document_parts:
            for _item in self.document_parts:
                if _item:
                    _items.append(_item.to_dict())
            _dict['document_parts'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of CoreDocument from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "type": obj.get("type") if obj.get("type") is not None else 'core',
            "metadata": obj.get("metadata"),
            "document_parts": [CoreDocumentPart.from_dict(_item) for _item in obj["document_parts"]] if obj.get("document_parts") is not None else None
        })
        return _obj

