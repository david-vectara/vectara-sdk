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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from vectara_client.models.corpus_custom_dimension import CorpusCustomDimension
from vectara_client.models.filter_attribute import FilterAttribute
from typing import Optional, Set
from typing_extensions import Self

class CreateCorpusRequest(BaseModel):
    """
    CreateCorpusRequest
    """ # noqa: E501
    key: Annotated[str, Field(strict=True, max_length=50)] = Field(description="A user-provided key for a corpus.")
    name: Optional[StrictStr] = Field(default=None, description="The name for the corpus. This value defaults to the key.")
    description: Optional[StrictStr] = Field(default=None, description="Description for the corpus.")
    queries_are_answers: Optional[StrictBool] = Field(default=False, description="Queries made to this corpus are considered answers, and not questions.")
    documents_are_questions: Optional[StrictBool] = Field(default=False, description="Documents inside this corpus are considered questions, and not answers.")
    encoder_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The encoder used by the corpus. This value defaults to the most recent Vectara encoder.")
    filter_attributes: Optional[List[FilterAttribute]] = Field(default=None, description="The new filter attributes of the corpus.  If unset then the corpus will not have filter attributes. ")
    custom_dimensions: Optional[List[CorpusCustomDimension]] = Field(default=None, description="A custom dimension is an additional numerical field attached to a document part. You can then multiply this numerical field with a query time custom dimension of the same name. This allows boosting (or deboosting) document parts for arbitrary reasons. This feature is only enabled for Scale customers. ")
    __properties: ClassVar[List[str]] = ["key", "name", "description", "queries_are_answers", "documents_are_questions", "encoder_id", "filter_attributes", "custom_dimensions"]

    @field_validator('key')
    def key_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if not re.match(r"[a-zA-Z0-9_\=\-]+$", value):
            raise ValueError(r"must validate the regular expression /[a-zA-Z0-9_\=\-]+$/")
        return value

    @field_validator('encoder_id')
    def encoder_id_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"enc_[0-9]+$", value):
            raise ValueError(r"must validate the regular expression /enc_[0-9]+$/")
        return value

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
        """Create an instance of CreateCorpusRequest from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in filter_attributes (list)
        _items = []
        if self.filter_attributes:
            for _item in self.filter_attributes:
                if _item:
                    _items.append(_item.to_dict())
            _dict['filter_attributes'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in custom_dimensions (list)
        _items = []
        if self.custom_dimensions:
            for _item in self.custom_dimensions:
                if _item:
                    _items.append(_item.to_dict())
            _dict['custom_dimensions'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of CreateCorpusRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "key": obj.get("key"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "queries_are_answers": obj.get("queries_are_answers") if obj.get("queries_are_answers") is not None else False,
            "documents_are_questions": obj.get("documents_are_questions") if obj.get("documents_are_questions") is not None else False,
            "encoder_id": obj.get("encoder_id"),
            "filter_attributes": [FilterAttribute.from_dict(_item) for _item in obj["filter_attributes"]] if obj.get("filter_attributes") is not None else None,
            "custom_dimensions": [CorpusCustomDimension.from_dict(_item) for _item in obj["custom_dimensions"]] if obj.get("custom_dimensions") is not None else None
        })
        return _obj


