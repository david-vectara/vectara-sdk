<?php
/**
 * LargeLanguageModelsApi
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

namespace OpenAPI\Client\Vectara;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use OpenAPI\Client\ApiException;
use OpenAPI\Client\Configuration;
use OpenAPI\Client\HeaderSelector;
use OpenAPI\Client\ObjectSerializer;

/**
 * LargeLanguageModelsApi Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class LargeLanguageModelsApi
{
    /**
     * @var ClientInterface
     */
    protected $client;

    /**
     * @var Configuration
     */
    protected $config;

    /**
     * @var HeaderSelector
     */
    protected $headerSelector;

    /**
     * @var int Host index
     */
    protected $hostIndex;

    /** @var string[] $contentTypes **/
    public const contentTypes = [
        'listLLMs' => [
            'application/json',
        ],
    ];

    /**
     * @param ClientInterface $client
     * @param Configuration   $config
     * @param HeaderSelector  $selector
     * @param int             $hostIndex (Optional) host index to select the list of hosts if defined in the OpenAPI spec
     */
    public function __construct(
        ClientInterface $client = null,
        Configuration $config = null,
        HeaderSelector $selector = null,
        $hostIndex = 0
    ) {
        $this->client = $client ?: new Client();
        $this->config = $config ?: new Configuration();
        $this->headerSelector = $selector ?: new HeaderSelector();
        $this->hostIndex = $hostIndex;
    }

    /**
     * Set the host index
     *
     * @param int $hostIndex Host index (required)
     */
    public function setHostIndex($hostIndex): void
    {
        $this->hostIndex = $hostIndex;
    }

    /**
     * Get the host index
     *
     * @return int Host index
     */
    public function getHostIndex()
    {
        return $this->hostIndex;
    }

    /**
     * @return Configuration
     */
    public function getConfig()
    {
        return $this->config;
    }

    /**
     * Operation listLLMs
     *
     * List LLMs.
     *
     * @param  string $filter A regular expression to match names and descriptions of the LLMs. (optional)
     * @param  int $limit The maximum number of results to return in the list. (optional, default to 10)
     * @param  string $page_key Used to the retrieve the next page of LLMs after the limit has been reached. This parameter is not needed for the first page of results. (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['listLLMs'] to see the possible values for this operation
     *
     * @throws \OpenAPI\Client\ApiException on non-2xx response or if the response body is not in the expected format
     * @throws \InvalidArgumentException
     * @return \OpenAPI\Client\VectaraModel\ListLLMsResponse|\OpenAPI\Client\VectaraModel\Error
     */
    public function listLLMs($filter = null, $limit = 10, $page_key = null, string $contentType = self::contentTypes['listLLMs'][0])
    {
        list($response) = $this->listLLMsWithHttpInfo($filter, $limit, $page_key, $contentType);
        return $response;
    }

    /**
     * Operation listLLMsWithHttpInfo
     *
     * List LLMs.
     *
     * @param  string $filter A regular expression to match names and descriptions of the LLMs. (optional)
     * @param  int $limit The maximum number of results to return in the list. (optional, default to 10)
     * @param  string $page_key Used to the retrieve the next page of LLMs after the limit has been reached. This parameter is not needed for the first page of results. (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['listLLMs'] to see the possible values for this operation
     *
     * @throws \OpenAPI\Client\ApiException on non-2xx response or if the response body is not in the expected format
     * @throws \InvalidArgumentException
     * @return array of \OpenAPI\Client\VectaraModel\ListLLMsResponse|\OpenAPI\Client\VectaraModel\Error, HTTP status code, HTTP response headers (array of strings)
     */
    public function listLLMsWithHttpInfo($filter = null, $limit = 10, $page_key = null, string $contentType = self::contentTypes['listLLMs'][0])
    {
        $request = $this->listLLMsRequest($filter, $limit, $page_key, $contentType);

        try {
            $options = $this->createHttpClientOption();
            try {
                $response = $this->client->send($request, $options);
            } catch (RequestException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    (int) $e->getCode(),
                    $e->getResponse() ? $e->getResponse()->getHeaders() : null,
                    $e->getResponse() ? (string) $e->getResponse()->getBody() : null
                );
            } catch (ConnectException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    (int) $e->getCode(),
                    null,
                    null
                );
            }

            $statusCode = $response->getStatusCode();

            if ($statusCode < 200 || $statusCode > 299) {
                throw new ApiException(
                    sprintf(
                        '[%d] Error connecting to the API (%s)',
                        $statusCode,
                        (string) $request->getUri()
                    ),
                    $statusCode,
                    $response->getHeaders(),
                    (string) $response->getBody()
                );
            }

            switch($statusCode) {
                case 200:
                    if ('\OpenAPI\Client\VectaraModel\ListLLMsResponse' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\OpenAPI\Client\VectaraModel\ListLLMsResponse' !== 'string') {
                            try {
                                $content = json_decode($content, false, 512, JSON_THROW_ON_ERROR);
                            } catch (\JsonException $exception) {
                                throw new ApiException(
                                    sprintf(
                                        'Error JSON decoding server response (%s)',
                                        $request->getUri()
                                    ),
                                    $statusCode,
                                    $response->getHeaders(),
                                    $content
                                );
                            }
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\OpenAPI\Client\VectaraModel\ListLLMsResponse', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 403:
                    if ('\OpenAPI\Client\VectaraModel\Error' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\OpenAPI\Client\VectaraModel\Error' !== 'string') {
                            try {
                                $content = json_decode($content, false, 512, JSON_THROW_ON_ERROR);
                            } catch (\JsonException $exception) {
                                throw new ApiException(
                                    sprintf(
                                        'Error JSON decoding server response (%s)',
                                        $request->getUri()
                                    ),
                                    $statusCode,
                                    $response->getHeaders(),
                                    $content
                                );
                            }
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\OpenAPI\Client\VectaraModel\Error', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
            }

            $returnType = '\OpenAPI\Client\VectaraModel\ListLLMsResponse';
            if ($returnType === '\SplFileObject') {
                $content = $response->getBody(); //stream goes to serializer
            } else {
                $content = (string) $response->getBody();
                if ($returnType !== 'string') {
                    try {
                        $content = json_decode($content, false, 512, JSON_THROW_ON_ERROR);
                    } catch (\JsonException $exception) {
                        throw new ApiException(
                            sprintf(
                                'Error JSON decoding server response (%s)',
                                $request->getUri()
                            ),
                            $statusCode,
                            $response->getHeaders(),
                            $content
                        );
                    }
                }
            }

            return [
                ObjectSerializer::deserialize($content, $returnType, []),
                $response->getStatusCode(),
                $response->getHeaders()
            ];

        } catch (ApiException $e) {
            switch ($e->getCode()) {
                case 200:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\OpenAPI\Client\VectaraModel\ListLLMsResponse',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 403:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\OpenAPI\Client\VectaraModel\Error',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation listLLMsAsync
     *
     * List LLMs.
     *
     * @param  string $filter A regular expression to match names and descriptions of the LLMs. (optional)
     * @param  int $limit The maximum number of results to return in the list. (optional, default to 10)
     * @param  string $page_key Used to the retrieve the next page of LLMs after the limit has been reached. This parameter is not needed for the first page of results. (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['listLLMs'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function listLLMsAsync($filter = null, $limit = 10, $page_key = null, string $contentType = self::contentTypes['listLLMs'][0])
    {
        return $this->listLLMsAsyncWithHttpInfo($filter, $limit, $page_key, $contentType)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation listLLMsAsyncWithHttpInfo
     *
     * List LLMs.
     *
     * @param  string $filter A regular expression to match names and descriptions of the LLMs. (optional)
     * @param  int $limit The maximum number of results to return in the list. (optional, default to 10)
     * @param  string $page_key Used to the retrieve the next page of LLMs after the limit has been reached. This parameter is not needed for the first page of results. (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['listLLMs'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function listLLMsAsyncWithHttpInfo($filter = null, $limit = 10, $page_key = null, string $contentType = self::contentTypes['listLLMs'][0])
    {
        $returnType = '\OpenAPI\Client\VectaraModel\ListLLMsResponse';
        $request = $this->listLLMsRequest($filter, $limit, $page_key, $contentType);

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) use ($returnType) {
                    if ($returnType === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ($returnType !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, $returnType, []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                },
                function ($exception) {
                    $response = $exception->getResponse();
                    $statusCode = $response->getStatusCode();
                    throw new ApiException(
                        sprintf(
                            '[%d] Error connecting to the API (%s)',
                            $statusCode,
                            $exception->getRequest()->getUri()
                        ),
                        $statusCode,
                        $response->getHeaders(),
                        (string) $response->getBody()
                    );
                }
            );
    }

    /**
     * Create request for operation 'listLLMs'
     *
     * @param  string $filter A regular expression to match names and descriptions of the LLMs. (optional)
     * @param  int $limit The maximum number of results to return in the list. (optional, default to 10)
     * @param  string $page_key Used to the retrieve the next page of LLMs after the limit has been reached. This parameter is not needed for the first page of results. (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['listLLMs'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    public function listLLMsRequest($filter = null, $limit = 10, $page_key = null, string $contentType = self::contentTypes['listLLMs'][0])
    {


        if ($limit !== null && $limit > 100) {
            throw new \InvalidArgumentException('invalid value for "$limit" when calling LargeLanguageModelsApi.listLLMs, must be smaller than or equal to 100.');
        }
        if ($limit !== null && $limit < 1) {
            throw new \InvalidArgumentException('invalid value for "$limit" when calling LargeLanguageModelsApi.listLLMs, must be bigger than or equal to 1.');
        }
        


        $resourcePath = '/v2/llms';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;

        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $filter,
            'filter', // param base name
            'string', // openApiType
            'form', // style
            true, // explode
            false // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $limit,
            'limit', // param base name
            'integer', // openApiType
            'form', // style
            true, // explode
            false // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $page_key,
            'page_key', // param base name
            'string', // openApiType
            'form', // style
            true, // explode
            false // required
        ) ?? []);




        $headers = $this->headerSelector->selectHeaders(
            ['application/json', ],
            $contentType,
            $multipart
        );

        // for model (json/xml)
        if (count($formParams) > 0) {
            if ($multipart) {
                $multipartContents = [];
                foreach ($formParams as $formParamName => $formParamValue) {
                    $formParamValueItems = is_array($formParamValue) ? $formParamValue : [$formParamValue];
                    foreach ($formParamValueItems as $formParamValueItem) {
                        $multipartContents[] = [
                            'name' => $formParamName,
                            'contents' => $formParamValueItem
                        ];
                    }
                }
                // for HTTP post (form)
                $httpBody = new MultipartStream($multipartContents);

            } elseif (stripos($headers['Content-Type'], 'application/json') !== false) {
                # if Content-Type contains "application/json", json_encode the form parameters
                $httpBody = \GuzzleHttp\Utils::jsonEncode($formParams);
            } else {
                // for HTTP post (form)
                $httpBody = ObjectSerializer::buildQuery($formParams);
            }
        }

        // this endpoint requires OAuth (access token)
        if (!empty($this->config->getAccessToken())) {
            $headers['Authorization'] = 'Bearer ' . $this->config->getAccessToken();
        }
        // this endpoint requires API key authentication
        $apiKey = $this->config->getApiKeyWithPrefix('x-api-key');
        if ($apiKey !== null) {
            $headers['x-api-key'] = $apiKey;
        }

        $defaultHeaders = [];
        if ($this->config->getUserAgent()) {
            $defaultHeaders['User-Agent'] = $this->config->getUserAgent();
        }

        $headers = array_merge(
            $defaultHeaders,
            $headerParams,
            $headers
        );

        $operationHost = $this->config->getHost();
        $query = ObjectSerializer::buildQuery($queryParams);
        return new Request(
            'GET',
            $operationHost . $resourcePath . ($query ? "?{$query}" : ''),
            $headers,
            $httpBody
        );
    }

    /**
     * Create http client option
     *
     * @throws \RuntimeException on file opening failure
     * @return array of http client options
     */
    protected function createHttpClientOption()
    {
        $options = [];
        if ($this->config->getDebug()) {
            $options[RequestOptions::DEBUG] = fopen($this->config->getDebugFile(), 'a');
            if (!$options[RequestOptions::DEBUG]) {
                throw new \RuntimeException('Failed to open the debug file: ' . $this->config->getDebugFile());
            }
        }

        return $options;
    }
}
