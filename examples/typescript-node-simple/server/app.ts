//import {Client, Factory} from "@david-vectara/vectara-ts-node";
import express, {Express, Request, Response} from "express";

import {Client, Config, Factory} from "@david-vectara/vectara-ts-node";
import {GenerationParameters} from "@david-vectara/vectara-ts-node/dist/model/generationParameters";
import {Language} from "@david-vectara/vectara-ts-node/dist/model/language";
import {QueryCorpusRequest} from "@david-vectara/vectara-ts-node/dist/model/queryCorpusRequest";
import {BadRequestError} from "@david-vectara/vectara-ts-node/dist/model/badRequestError";
import {SearchCorpusParameters} from "@david-vectara/vectara-ts-node/models";
import {ObjectSerializer} from "@david-vectara/vectara-ts-node/dist/model/models";
import {QueriesApi} from "@david-vectara/vectara-ts-node/dist/api/queriesApi";
// FIXME Get these exported from model


const app: Express = express();

//const config = new Config("YOUR_CUSTOMER_ID", {"apiKey": "YOUR_API_KEY"});
//const factory = new Factory().config(config);

factory.build().then((temp) => {

    // FIXME Only return client, no opportunity for void. Use reject!!
    const client = (temp as Client);

    const port = process.env.PORT || 3000;

    app.get("/", (httpReq: Request, res: Response) => {

        const queriesApi = (client.queriesApi as QueriesApi);

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
            if (body.fieldErrors) {
                for (let fieldError in body.fieldErrors) {
                    console.log("Field error: " + fieldError);
                }
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




