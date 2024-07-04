import {test, jest} from '@jest/globals';
import {Client, Factory} from '../../src/core';
import {QueryCorpusRequest} from "../../src/model/queryCorpusRequest";
import {SearchCorpusParameters} from "../../src/model/searchCorpusParameters";
import {GenerationParameters} from "../../src/model/generationParameters";
import {Language} from "../../src/model/language";
import http from "http";
import {QueryFullResponse} from "../../src/model/queryFullResponse";

// Increase the default timeout as we're doing functional testing rather than
// performance based testing.
jest.setTimeout(30000)

test('Verifies List Corpora', async () => {
    let temp : Client | void = await new Factory().build();

    if (temp && temp instanceof Client) {
        const queriesApi = temp.queriesApi;

        console.log("Running query");

        const searchCorpus = new SearchCorpusParameters();
        searchCorpus.limit = 30;

        const generation = new GenerationParameters();
        generation.promptName = "vectara-summary-ext-v1.3.0";
        generation.maxUsedSearchResults = 10;
        generation.responseLanguage = Language.Eng;
        generation.enableFactualConsistencyScore = false;

        const request = new QueryCorpusRequest();
        request.query = "What is the difference between the standard and low level APIs in Vectara for indexing?"
        request.search = searchCorpus;
        request.generation = generation;


        await queriesApi.queryCorpus("vectara-docs_314", request).then(value => {
            const body = value.body;
            const resp = value.response;

            console.log("Received " + resp.statusCode + " with message: " + resp.statusMessage);

            console.log("Summary: " + body.summary)
        });

    }



});

test('Verifies Refresh Functionality', async () => {
    let temp : Client | void = await new Factory().build();

    if (temp && temp instanceof Client) {
        const client = (temp as Client);

        const queriesApi = client.queriesApi;

        console.log("Expiring token")
        client.authUtil.token.expiresAt = Date.now() - 1;
        client.authUtil.token.accessToken = "";

        console.log("Running query");

        const searchCorpus = new SearchCorpusParameters();
        searchCorpus.limit = 30;

        const generation = new GenerationParameters();
        generation.promptName = "vectara-summary-ext-v1.3.0";
        generation.maxUsedSearchResults = 10;
        generation.responseLanguage = Language.Eng;
        generation.enableFactualConsistencyScore = false;

        const request = new QueryCorpusRequest();
        request.query = "What is the difference between the standard and low level APIs in Vectara for indexing?"
        request.search = searchCorpus;
        request.generation = generation;


        await queriesApi.queryCorpus("vectara-docs_314", request).then(value => {
            const body = value.body;
            const resp = value.response;

            console.log("Received " + resp.statusCode + " with message: " + resp.statusMessage);

            console.log("Summary: " + body.summary)
        });

    }



});