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

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from vectara_client.models.context_configuration import ContextConfiguration
from vectara_client.models.search_reranker import SearchReranker
from typing import Optional, Set
from typing_extensions import Self

class SearchParameters(BaseModel):
    """
    Search parameters to retrieve knowledge for the query.
    """ # noqa: E501
    offset: Optional[Annotated[int, Field(strict=True, ge=0)]] = Field(default=0, description="Specifies how many results into the result to skip. This is useful for pagination.")
    limit: Optional[Annotated[int, Field(strict=True, ge=1)]] = Field(default=10, description="The maximum number of results returned.")
    context_configuration: Optional[ContextConfiguration] = None
    reranker: Optional[SearchReranker] = None
    __properties: ClassVar[List[str]] = ["offset", "limit", "context_configuration", "reranker"]

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
        """Create an instance of SearchParameters from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of context_configuration
        if self.context_configuration:
            _dict['context_configuration'] = self.context_configuration.to_dict()
        # override the default output from pydantic by calling `to_dict()` of reranker
        if self.reranker:
            _dict['reranker'] = self.reranker.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of SearchParameters from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "offset": obj.get("offset") if obj.get("offset") is not None else 0,
            "limit": obj.get("limit") if obj.get("limit") is not None else 10,
            "context_configuration": ContextConfiguration.from_dict(obj["context_configuration"]) if obj.get("context_configuration") is not None else None,
            "reranker": SearchReranker.from_dict(obj["reranker"]) if obj.get("reranker") is not None else None
        })
        return _obj

