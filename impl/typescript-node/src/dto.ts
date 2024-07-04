import {FilterAttributeLevel, FilterAttributeType, Semantics, Status} from "./enums";

export interface StatusDto {
    code: Status;
    statusDetail?: string;
    cause?: string;
}

export interface Dimension {
    name: string;
    description?: string;
    servingDefault?: string;
    indexingDefault?: string;
}

export interface FilterAttribute {
    name: string;
    description?: string;
    indexed: boolean;
    type: FilterAttributeType; // TODO FilterAttributeType
    level: FilterAttributeLevel; // TODO FilterAttributeLevel
}



export interface CorpusDto {
    id?: number; // ID is only optional on creation.
    name: string;
    description?: string;
    dtProvision?: string;
    enabled?: boolean;
    swapQenc?: boolean;
    swapIenc?: boolean;
    textless?: boolean;
    encrypted?: boolean;
    encoderId?: string;
    metadataMaxBytes?: number;
    faissIndexType?: string;
    customDimensions?: Array<Dimension>;
    filterAttributes?: Array<FilterAttribute>;
}

export interface CreateCorpusRequestDto {
    corpus: CorpusDto;
}

export interface CreateCorpusResponseDto {
    corpusId: number;
    status: StatusDto;
}

export interface ListCorporaResponseDto {
    corpus: Array<CorpusDto>;
    pageKey: string;
    status?: Status;

}

export interface QueryContextConfig {
    charsBefore?: number;
    charsAfter?: number;
    sentencesBefore?: number;
    sentencesAfter?: number;
    startTag?: string;
    endTag?: string;
}

export interface CustomDimension {
    name: string;
    value: number; // float
}

export interface LinearInterpolation {
      // Unfortunately Python dataclass attributes cannot be reserved words.
    lambda?: number; // float
}


export interface CorpusKey {
    corpusId: number;
    customerId?: number;
    semantics?: Semantics;
    dim?: Array<CustomDimension>;
    metadataFilter?: string;
    lexicalInterpolationConfig?: LinearInterpolation;
}

export interface MMRConfig {
    diversityBias: number;
}

export interface RerankingConfig {
    rerankerId: number;
    mmrConfig?: MMRConfig;
}

export interface ModelParams {
    maxTokens?: number;
    temperature?: number; // float
    // provides even more granular control to help ensure that the summarization decreases the likelihood of repeating words. The values range from 0.0 to 1.0
    frequencyPenalty?: number; // float
    // provides more control over whether you want the summary to include new topics. The values also range from 0.0 to 1.0.
    presencePenalty?: number; // float
}

export interface ChatRequest {
    store?: boolean;
    conversationId?: string;
}

export interface Summarizer {
    summarizerPromptName: string;
    promptText?: string;
    responseLang: string;
    maxSummarizedResults: number;
    debug?: boolean;
    chat?: ChatRequest;
    modelParams?: ModelParams;
}

export interface QueryBody {
    query: string;
    queryContext: string;
    start?: number;
    numResults?: number;
    contextConfig?: QueryContextConfig;
    corpusKey: Array<CorpusKey>;
    rerankingConfig?: RerankingConfig;
    summary?: Array<Summarizer>;
}

export interface BatchQueryRequest {
    query: Array<QueryBody>;
}

export interface Attribute {
    name: string;
    value: string;
}

export interface ResponseDocument {
    id: string;
    metadata: Array<Attribute>;
}

export interface ChatResponse {
    conversationId: string;
    turnId?: string;
    rephrasedQuery?: string;
    status?: Status;
}

export interface SummaryResponse {
    text?: string;
    lang: string;
    prompt: string;
    status: Array<Status>;
    chat?: ChatResponse;

}

export interface ResponseSet {
    response: Array<Response>;
    status: Array<Status>;
    document?: Array<ResponseDocument>;
    summary?: Array<SummaryResponse>;
}

export interface PerformanceMetrics {
    queryEncodeMs: number;
    retrievalMs: number;
    userdataRetrievalMs: number;
    rerankMs: number;
}

export interface BatchQueryResponse {
    responseSet?: Array<ResponseSet>;
    status: Array<Status>;
    metrics?: PerformanceMetrics;
}

