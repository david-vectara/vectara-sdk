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

from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from typing import Optional, Set
from typing_extensions import Self

class Turn(BaseModel):
    """
    Turn
    """ # noqa: E501
    id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The ID of the turn.")
    chat_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The ID of the chat the turn resides in.")
    query: Optional[StrictStr] = Field(default=None, description="The query made to produce this turn.")
    answer: Optional[StrictStr] = Field(default=None, description="The response to the query.")
    enabled: Optional[StrictBool] = Field(default=None, description="Indicates whether the turn is enabled and shown in futures turns of the chat.")
    created_at: Optional[datetime] = Field(default=None, description="Specifies when the turn was created.")
    __properties: ClassVar[List[str]] = ["id", "chat_id", "query", "answer", "enabled", "created_at"]

    @field_validator('id')
    def id_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"trn_.+$", value):
            raise ValueError(r"must validate the regular expression /trn_.+$/")
        return value

    @field_validator('chat_id')
    def chat_id_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"cht_.+$", value):
            raise ValueError(r"must validate the regular expression /cht_.+$/")
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
        """Create an instance of Turn from a JSON string"""
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
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Turn from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "chat_id": obj.get("chat_id"),
            "query": obj.get("query"),
            "answer": obj.get("answer"),
            "enabled": obj.get("enabled"),
            "created_at": obj.get("created_at")
        })
        return _obj


