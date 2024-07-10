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
import json
import pprint
from pydantic import BaseModel, ConfigDict, Field, StrictStr, ValidationError, field_validator
from typing import Any, List, Optional
from vectara_client.models.chat_info_response import ChatInfoResponse
from vectara_client.models.factual_consistency_score import FactualConsistencyScore
from vectara_client.models.stream_error import StreamError
from vectara_client.models.stream_generation_chunk import StreamGenerationChunk
from vectara_client.models.stream_generation_end import StreamGenerationEnd
from vectara_client.models.stream_response_end import StreamResponseEnd
from vectara_client.models.stream_search_response import StreamSearchResponse
from pydantic import StrictStr, Field
from typing import Union, List, Set, Optional, Dict
from typing_extensions import Literal, Self

CHATSTREAMEDRESPONSE_ONE_OF_SCHEMAS = ["ChatInfoResponse", "FactualConsistencyScore", "StreamError", "StreamGenerationChunk", "StreamGenerationEnd", "StreamResponseEnd", "StreamSearchResponse"]

class ChatStreamedResponse(BaseModel):
    """
    An individual event when the response is streamed.
    """
    # data type: StreamSearchResponse
    oneof_schema_1_validator: Optional[StreamSearchResponse] = None
    # data type: ChatInfoResponse
    oneof_schema_2_validator: Optional[ChatInfoResponse] = None
    # data type: StreamGenerationChunk
    oneof_schema_3_validator: Optional[StreamGenerationChunk] = None
    # data type: StreamGenerationEnd
    oneof_schema_4_validator: Optional[StreamGenerationEnd] = None
    # data type: FactualConsistencyScore
    oneof_schema_5_validator: Optional[FactualConsistencyScore] = None
    # data type: StreamResponseEnd
    oneof_schema_6_validator: Optional[StreamResponseEnd] = None
    # data type: StreamError
    oneof_schema_7_validator: Optional[StreamError] = None
    actual_instance: Optional[Union[ChatInfoResponse, FactualConsistencyScore, StreamError, StreamGenerationChunk, StreamGenerationEnd, StreamResponseEnd, StreamSearchResponse]] = None
    one_of_schemas: Set[str] = { "ChatInfoResponse", "FactualConsistencyScore", "StreamError", "StreamGenerationChunk", "StreamGenerationEnd", "StreamResponseEnd", "StreamSearchResponse" }

    model_config = ConfigDict(
        validate_assignment=True,
        protected_namespaces=(),
    )


    discriminator_value_class_map: Dict[str, str] = {
    }

    def __init__(self, *args, **kwargs) -> None:
        if args:
            if len(args) > 1:
                raise ValueError("If a position argument is used, only 1 is allowed to set `actual_instance`")
            if kwargs:
                raise ValueError("If a position argument is used, keyword arguments cannot be used.")
            super().__init__(actual_instance=args[0])
        else:
            super().__init__(**kwargs)

    @field_validator('actual_instance')
    def actual_instance_must_validate_oneof(cls, v):
        instance = ChatStreamedResponse.model_construct()
        error_messages = []
        match = 0
        # validate data type: StreamSearchResponse
        if not isinstance(v, StreamSearchResponse):
            error_messages.append(f"Error! Input type `{type(v)}` is not `StreamSearchResponse`")
        else:
            match += 1
        # validate data type: ChatInfoResponse
        if not isinstance(v, ChatInfoResponse):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ChatInfoResponse`")
        else:
            match += 1
        # validate data type: StreamGenerationChunk
        if not isinstance(v, StreamGenerationChunk):
            error_messages.append(f"Error! Input type `{type(v)}` is not `StreamGenerationChunk`")
        else:
            match += 1
        # validate data type: StreamGenerationEnd
        if not isinstance(v, StreamGenerationEnd):
            error_messages.append(f"Error! Input type `{type(v)}` is not `StreamGenerationEnd`")
        else:
            match += 1
        # validate data type: FactualConsistencyScore
        if not isinstance(v, FactualConsistencyScore):
            error_messages.append(f"Error! Input type `{type(v)}` is not `FactualConsistencyScore`")
        else:
            match += 1
        # validate data type: StreamResponseEnd
        if not isinstance(v, StreamResponseEnd):
            error_messages.append(f"Error! Input type `{type(v)}` is not `StreamResponseEnd`")
        else:
            match += 1
        # validate data type: StreamError
        if not isinstance(v, StreamError):
            error_messages.append(f"Error! Input type `{type(v)}` is not `StreamError`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in ChatStreamedResponse with oneOf schemas: ChatInfoResponse, FactualConsistencyScore, StreamError, StreamGenerationChunk, StreamGenerationEnd, StreamResponseEnd, StreamSearchResponse. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in ChatStreamedResponse with oneOf schemas: ChatInfoResponse, FactualConsistencyScore, StreamError, StreamGenerationChunk, StreamGenerationEnd, StreamResponseEnd, StreamSearchResponse. Details: " + ", ".join(error_messages))
        else:
            return v

    @classmethod
    def from_dict(cls, obj: Union[str, Dict[str, Any]]) -> Self:
        return cls.from_json(json.dumps(obj))

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Returns the object represented by the json string"""
        instance = cls.model_construct()
        error_messages = []
        match = 0

        # deserialize data into StreamSearchResponse
        try:
            instance.actual_instance = StreamSearchResponse.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ChatInfoResponse
        try:
            instance.actual_instance = ChatInfoResponse.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into StreamGenerationChunk
        try:
            instance.actual_instance = StreamGenerationChunk.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into StreamGenerationEnd
        try:
            instance.actual_instance = StreamGenerationEnd.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into FactualConsistencyScore
        try:
            instance.actual_instance = FactualConsistencyScore.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into StreamResponseEnd
        try:
            instance.actual_instance = StreamResponseEnd.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into StreamError
        try:
            instance.actual_instance = StreamError.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into ChatStreamedResponse with oneOf schemas: ChatInfoResponse, FactualConsistencyScore, StreamError, StreamGenerationChunk, StreamGenerationEnd, StreamResponseEnd, StreamSearchResponse. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into ChatStreamedResponse with oneOf schemas: ChatInfoResponse, FactualConsistencyScore, StreamError, StreamGenerationChunk, StreamGenerationEnd, StreamResponseEnd, StreamSearchResponse. Details: " + ", ".join(error_messages))
        else:
            return instance

    def to_json(self) -> str:
        """Returns the JSON representation of the actual instance"""
        if self.actual_instance is None:
            return "null"

        if hasattr(self.actual_instance, "to_json") and callable(self.actual_instance.to_json):
            return self.actual_instance.to_json()
        else:
            return json.dumps(self.actual_instance)

    def to_dict(self) -> Optional[Union[Dict[str, Any], ChatInfoResponse, FactualConsistencyScore, StreamError, StreamGenerationChunk, StreamGenerationEnd, StreamResponseEnd, StreamSearchResponse]]:
        """Returns the dict representation of the actual instance"""
        if self.actual_instance is None:
            return None

        if hasattr(self.actual_instance, "to_dict") and callable(self.actual_instance.to_dict):
            return self.actual_instance.to_dict()
        else:
            # primitive type
            return self.actual_instance

    def to_str(self) -> str:
        """Returns the string representation of the actual instance"""
        return pprint.pformat(self.model_dump())

