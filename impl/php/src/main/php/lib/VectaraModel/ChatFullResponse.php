<?php
/**
 * ChatFullResponse
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Vectara REST API v2
 *
 * Vectara provides an end-to-end platform for creating GenAI products using  a simple to use API.  You can [sign up for an account](https://console.vectara.com/signup) and  then view several [API Recipes](https://docs.vectara.com/docs/api-recipes) with example queries  and parameter values.  The Vectara API Playground lets you experiment with REST endpoints from  your browser. Select an endpoint to view its definition, including the  required or optional headers, body, responses, and sample commands. On the  right side of each endpoint page, like [Get Corpus](/docs/rest-api/get-corpus), you manually  enter your API Key or OAuth Bearer Token, `customer_id`, and then any  required body parameters like the `corpusID` before sending the API  request.  :::note  Vectara supports two primary methods of authentication: API keys and OAuth  2.0, which are applicable to all endpoints. Query API Keys are used for  read-only querying operations, while Index API Keys provide read and write  access. The OAuth 2.0 operations authenticate with a Bearer Token via the  OAuth 2.0 client credentials grant. Review the [**OAuth 2.0 section**](https://docs.vectara.com/docs/learn/authentication/oauth-2) about  how to generate the token.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: feedback@vectara.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.6.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\VectaraModel;

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * ChatFullResponse Class Doc Comment
 *
 * @category Class
 * @description Full response to a chat question when the result is not streamed.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ChatFullResponse implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ChatFullResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'chat_id' => 'string',
        'turn_id' => 'string',
        'answer' => 'string',
        'response_language' => '\OpenAPI\Client\VectaraModel\Language',
        'search_results' => '\OpenAPI\Client\VectaraModel\IndividualSearchResult[]',
        'factual_consistency_score' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'chat_id' => null,
        'turn_id' => null,
        'answer' => null,
        'response_language' => null,
        'search_results' => null,
        'factual_consistency_score' => 'float'
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'chat_id' => false,
        'turn_id' => false,
        'answer' => false,
        'response_language' => false,
        'search_results' => false,
        'factual_consistency_score' => false
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'chat_id' => 'chat_id',
        'turn_id' => 'turn_id',
        'answer' => 'answer',
        'response_language' => 'response_language',
        'search_results' => 'search_results',
        'factual_consistency_score' => 'factual_consistency_score'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'chat_id' => 'setChatId',
        'turn_id' => 'setTurnId',
        'answer' => 'setAnswer',
        'response_language' => 'setResponseLanguage',
        'search_results' => 'setSearchResults',
        'factual_consistency_score' => 'setFactualConsistencyScore'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'chat_id' => 'getChatId',
        'turn_id' => 'getTurnId',
        'answer' => 'getAnswer',
        'response_language' => 'getResponseLanguage',
        'search_results' => 'getSearchResults',
        'factual_consistency_score' => 'getFactualConsistencyScore'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->setIfExists('chat_id', $data ?? [], null);
        $this->setIfExists('turn_id', $data ?? [], null);
        $this->setIfExists('answer', $data ?? [], null);
        $this->setIfExists('response_language', $data ?? [], null);
        $this->setIfExists('search_results', $data ?? [], null);
        $this->setIfExists('factual_consistency_score', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets chat_id
     *
     * @return string|null
     */
    public function getChatId()
    {
        return $this->container['chat_id'];
    }

    /**
     * Sets chat_id
     *
     * @param string|null $chat_id If the chat response was stored, the ID of the chat.
     *
     * @return self
     */
    public function setChatId($chat_id)
    {
        if (is_null($chat_id)) {
            throw new \InvalidArgumentException('non-nullable chat_id cannot be null');
        }
        $this->container['chat_id'] = $chat_id;

        return $this;
    }

    /**
     * Gets turn_id
     *
     * @return string|null
     */
    public function getTurnId()
    {
        return $this->container['turn_id'];
    }

    /**
     * Sets turn_id
     *
     * @param string|null $turn_id If the chat response was stored, the ID of the turn.
     *
     * @return self
     */
    public function setTurnId($turn_id)
    {
        if (is_null($turn_id)) {
            throw new \InvalidArgumentException('non-nullable turn_id cannot be null');
        }
        $this->container['turn_id'] = $turn_id;

        return $this;
    }

    /**
     * Gets answer
     *
     * @return string|null
     */
    public function getAnswer()
    {
        return $this->container['answer'];
    }

    /**
     * Sets answer
     *
     * @param string|null $answer The message from the chat model for the chat message.
     *
     * @return self
     */
    public function setAnswer($answer)
    {
        if (is_null($answer)) {
            throw new \InvalidArgumentException('non-nullable answer cannot be null');
        }
        $this->container['answer'] = $answer;

        return $this;
    }

    /**
     * Gets response_language
     *
     * @return \OpenAPI\Client\VectaraModel\Language|null
     */
    public function getResponseLanguage()
    {
        return $this->container['response_language'];
    }

    /**
     * Sets response_language
     *
     * @param \OpenAPI\Client\VectaraModel\Language|null $response_language response_language
     *
     * @return self
     */
    public function setResponseLanguage($response_language)
    {
        if (is_null($response_language)) {
            throw new \InvalidArgumentException('non-nullable response_language cannot be null');
        }
        $this->container['response_language'] = $response_language;

        return $this;
    }

    /**
     * Gets search_results
     *
     * @return \OpenAPI\Client\VectaraModel\IndividualSearchResult[]|null
     */
    public function getSearchResults()
    {
        return $this->container['search_results'];
    }

    /**
     * Sets search_results
     *
     * @param \OpenAPI\Client\VectaraModel\IndividualSearchResult[]|null $search_results The ranked search results that the chat model used.
     *
     * @return self
     */
    public function setSearchResults($search_results)
    {
        if (is_null($search_results)) {
            throw new \InvalidArgumentException('non-nullable search_results cannot be null');
        }
        $this->container['search_results'] = $search_results;

        return $this;
    }

    /**
     * Gets factual_consistency_score
     *
     * @return float|null
     */
    public function getFactualConsistencyScore()
    {
        return $this->container['factual_consistency_score'];
    }

    /**
     * Sets factual_consistency_score
     *
     * @param float|null $factual_consistency_score The probability that the summary is factually consistent with the results.
     *
     * @return self
     */
    public function setFactualConsistencyScore($factual_consistency_score)
    {
        if (is_null($factual_consistency_score)) {
            throw new \InvalidArgumentException('non-nullable factual_consistency_score cannot be null');
        }
        $this->container['factual_consistency_score'] = $factual_consistency_score;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


