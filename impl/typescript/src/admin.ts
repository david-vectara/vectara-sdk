import {RequestUtil} from './request';
import {LooseObject} from './domain';
import {ListCorporaResponseDto} from "./dto";

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

        let value = await this.requestUtil.request("list-corpora", payload);
        if (value.success) {
            return value.response;
        } else {
            throw new Error("Unable to list corpora, we had a non 200 response ("
                + value.httpStatus + "): " + value.httpMessage);
        }


    }
}

export {AdminService}