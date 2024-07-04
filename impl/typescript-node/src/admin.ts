import {RequestUtil} from './request';
import {LooseObject} from './domain';
import {CorpusDto, CreateCorpusRequestDto, CreateCorpusResponseDto, ListCorporaResponseDto} from "./dto";
import {Status} from "./enums";

class AdminService {

    requestUtil: RequestUtil;

    constructor(requestUtil: RequestUtil) {
        this.requestUtil = requestUtil;
    }

    async listCorpora(filter?: string, numResults?: number, pageKey?: number): Promise<ListCorporaResponseDto> {
        const payload: LooseObject = {};

        if (filter !== undefined) {
            payload['filter'] = filter
        }
        if (numResults !== undefined) {
            payload['numResults'] = numResults
        }
        if (pageKey !== undefined) {
            payload['pageKey'] = pageKey
        }

        let value = this.requestUtil.request("list-corpora", payload);
        return value.then(response => {
            if (response.success) {
                const responsePayload: ListCorporaResponseDto = response.response;
                return responsePayload;
            } else {
                throw new Error("Unable to list corpora, we had a non 200 response ("
                    + response.httpStatus + "): " + response.httpMessage);
            }
        }).catch(error => {
            console.error("Unable to list corpora: " + error.message);
            throw error;
        });

    }

    async createCorpus(corpus: CorpusDto): Promise<number> {
        const request : CreateCorpusRequestDto = { corpus: corpus };

        let value = this.requestUtil.request("create-corpus", request);
        return value.then(response => {
            if (response.success) {
                const responsePayload: CreateCorpusResponseDto = response.response;
                if (responsePayload.status.code === Status.OK) {
                    console.info("New Corpus created with ID [" + responsePayload.corpusId + "]");
                    return responsePayload.corpusId;
                } else {
                    throw new Error("Unable to create corpus, we had a non OK status: " + responsePayload.status.code + ", with detail:" + responsePayload.status.statusDetail + ", with cause: " + responsePayload.status.cause);
                }
            } else {
                throw new Error("Unable to list corpora, we had a non 200 response ("
                    + response.httpStatus + "): " + response.httpMessage);
            }
        }).catch(error => {
            console.error("Unable to list corpora: " + error.message);
            throw error;
        });
    }
}

export {AdminService}