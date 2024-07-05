//import {Client, Factory} from "@david-vectara/vectara-ts-node";
import express, {Express, Request, Response} from "express";
import {Client, Factory} from "@david-vectara/vectara-ts-node";
import {SearchCorpusParameters} from "@david-vectara/vectara-ts-node/dist/model/searchCorpusParameters";
import {GenerationParameters} from "@david-vectara/vectara-ts-node/dist/model/generationParameters";
import {QueryCorpusRequest} from "@david-vectara/vectara-ts-node/dist/model/queryCorpusRequest";
import {Language} from "@david-vectara/vectara-ts-node/dist/model/language";
import {HttpError} from "@david-vectara/vectara-ts-node/dist/api/apis";
import {BadRequestError} from "@david-vectara/vectara-ts-node/dist/model/badRequestError";
import {ObjectSerializer} from "@david-vectara/vectara-ts-node/dist/model/models";
// FIXME Get these exported from model

const factory = new Factory();

const app: Express = express();


factory.build().then((temp) => {

    // FIXME Only return client, no opportunity for void. Use reject!!
    const client = (temp as Client);

    const port = process.env.PORT || 3000;

    app.get("/", (httpReq: Request, res: Response) => {

        const queriesApi = client.queriesApi;

        let corpusKey = null;

        if (httpReq.query.key) {
            corpusKey = (httpReq.query.key as string);
            console.log("Corpus key: " + corpusKey);
        } else {
            res.send("Missing parameter [key] to specify the corpus key");
            return;
        }

        let query = null;
        if (httpReq.query.q) {
            query = (httpReq.query.q as string);
            console.log("Query: " + query);
        } else {
            res.send("Missing parameter [q] to specify the query");
            return;
        }

        console.log("On corpus [" + corpusKey + "], Running query: [" + query + "]");

        const searchCorpus = new SearchCorpusParameters();
        searchCorpus.limit = 30;

        const generation = new GenerationParameters();
        generation.promptName = "vectara-summary-ext-v1.2.0";
        generation.maxUsedSearchResults = 10;
        generation.responseLanguage = Language.Eng;
        generation.enableFactualConsistencyScore = false;

        const request = new QueryCorpusRequest();
        request.query = query
        request.search = searchCorpus;
        request.generation = generation;


        queriesApi.queryCorpus(corpusKey, request).then(value => {
            const body = value.body;
            const resp = value.response;
            console.log("Received " + resp.statusCode + " with message: " + resp.statusMessage);
            console.log("Summary: " + body.summary)
            res.send(body.summary);

        }).catch((httpError: HttpError) => {
            let body = (httpError.body as BadRequestError);

            const error = JSON.stringify(ObjectSerializer.serialize(body, "BadRequestError"));
            console.log("Error is: " + error);

            console.log("Failure calling chat: " + httpError.statusCode);

            console.log("Field errors")
            for (let fieldError in body.fieldErrors) {
                console.log("Field error: " + fieldError);
            }

            console.log("Message was: " + httpError.message);

            console.log("Response was: " + httpError.response.statusMessage);
            console.log("HttpError Name: " + httpError.name)

            res.status((httpError.statusCode as number)).send(error);

        });


    });

    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });

});




