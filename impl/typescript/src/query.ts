import {
    BatchQueryRequest,
    BatchQueryResponse,
    CorpusKey,
    QueryBody,
    QueryContextConfig,
    ResponseSet,
    Summarizer
} from "./dto";
import {RequestUtil} from "./request";
import {Semantics} from "./enums";

class QueryService {

    requestUtil: RequestUtil;

    constructor(requestUtil: RequestUtil) {
        this.requestUtil = requestUtil;
    }

    public async query(request: BatchQueryRequest): Promise<BatchQueryResponse> {
        return this.requestUtil.request("query", request).then((response) => {
           const responsePayload : BatchQueryResponse = response.response;
           return responsePayload;
        });
    }

}

class QueryFacade {

    customerId: string;
    service: QueryService;

    constructor(customerId: string, service: QueryService) {
        this.service = service;
        this.customerId = customerId;
    }

    private addKey(corpusId: number, corpusKeys: Array<CorpusKey>) {
        const corpusKey: CorpusKey = {
            corpusId: corpusId,
            customerId: +this.customerId,
            semantics: Semantics.QUERY
        }
        corpusKeys.push(corpusKey)
    }

    public buildTemplate(query: string, corpusId: number | Array<number>, start = 0, buildSummary = true): QueryBody  {
        const corpusKeys: Array<CorpusKey> = [];
        if (typeof(corpusId) === 'number') {
            this.addKey(corpusId, corpusKeys);
        } else if (Array.isArray(corpusId)) {
            (corpusId as Array<number>).forEach(value => {
                this.addKey(value, corpusKeys);
            })
        }

        const contextConfig: QueryContextConfig = {
            sentencesBefore: 2,
            sentencesAfter: 2,
            startTag: "<b>",
            endTag: "</b>"
        };

        // TODO Add Reranker

        // TODO Add Summary
        const summaries: Array<Summarizer> = [];
        if (buildSummary) {
            const summary: Summarizer = {
                summarizerPromptName: "vectara-summary-ext-v1.2.0",
                responseLang: "en",
                maxSummarizedResults: 5
            };
            summaries.push(summary);
        }

        const result: QueryBody = {
            query: query,
            queryContext: "",
            numResults: 20,
            corpusKey: corpusKeys,
            contextConfig: contextConfig,
            summary: summaries
        };

        console.info(start);
        return result;
    }



    public async simple(query: string, corpusId: number): Promise<ResponseSet> {
        const queryBody = this.buildTemplate(query, corpusId);
        const request: BatchQueryRequest = {
            query : [
                queryBody
            ]
        }
        const promise : Promise<BatchQueryResponse> = this.service.query(request);
        return promise.then((value) => {
           return (value.responseSet as Array<ResponseSet>)[0];
        });
    }



}


export { QueryService, QueryFacade }