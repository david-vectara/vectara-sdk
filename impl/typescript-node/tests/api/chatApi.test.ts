import {jest, test} from '@jest/globals';
import {Client, Factory} from '../../src/core';
import {QueryCorpusRequest} from "../../src/model/queryCorpusRequest";
import {SearchCorpusParameters} from "../../src/model/searchCorpusParameters";
import {GenerationParameters} from "../../src/model/generationParameters";
import {Language} from "../../src/model/language";
import {ChatRequest} from "../../src/model/chatRequest";
import {SearchCorporaParameters} from "../../src/model/searchCorporaParameters";
import {KeyedSearchCorpus} from "../../src/model/keyedSearchCorpus";
import {SearchSemantics} from "../../src/model/searchSemantics";
import {ContextConfiguration} from "../../src/model/contextConfiguration";
import {SearchReranker} from "../../src/model/searchReranker";
import {ModelParameters} from "../../src/model/modelParameters";
import {CitationParameters} from "../../src/model/citationParameters";
import {ChatParameters} from "../../src/model/chatParameters";
import {HttpError} from "../../src/api/apis";
import {ChatFullResponse} from "../../src/model/chatFullResponse";
import {BadRequestError, ObjectSerializer} from "../../src/model/models";

// Increase the default timeout as we're doing functional testing rather than
// performance based testing.
jest.setTimeout(30000)

test('Verifies Create Chat Request', async () => {
    let temp: Client | void = await new Factory().build();

    if (temp && temp instanceof Client) {
        const chatsApi = temp.chatsApi;

        console.log("Running query");


        const key = new KeyedSearchCorpus();
        key.customDimensions = {};
        key.metadataFilter = "";
        key.lexicalInterpolation = 0.025;
        key.semantics = SearchSemantics.Default;
        key.corpusKey = "vectara-docs_314";

        const context = new ContextConfiguration();
        context.charactersBefore = 30;
        context.charactersAfter = 30;
        context.sentencesBefore = 3;
        context.sentencesAfter = 3;
        context.startTag = "<em>";
        context.endTag = "</em>";

        const reranker = new SearchReranker();
        reranker.type = "customer_reranker";
        reranker.rerankerId = "rnk_272725719";

        const searchCorpus = new SearchCorporaParameters();
        searchCorpus.corpora = [key];
        searchCorpus.offset = 0;
        searchCorpus.limit = 10;
        searchCorpus.contextConfiguration = context;
        searchCorpus.reranker = reranker;

        const model = new ModelParameters();
        model.maxTokens = 100;
        model.temperature = 0;
        model.frequencyPenalty = 0;
        model.presencePenalty = 0;

        const citations = new CitationParameters();

        const generation = new GenerationParameters();
        generation.promptName = "vectara-summary-ext-v1.3.0";
        generation.maxUsedSearchResults = 5;
        generation.promptText = "[\n  {\"role\": \"system\", \"content\": \"You are a helpful search assistant.\"},\n  #foreach ($qResult in $vectaraQueryResults)\n     {\"role\": \"user\", \"content\": \"Given the $vectaraIdxWord[$foreach.index] search result.\"},\n     {\"role\": \"assistant\", \"content\": \"${qResult.getText()}\" },\n  #end\n  {\"role\": \"user\", \"content\": \"Generate a summary for the query '${vectaraQuery}' based on the above results.\"}\n]\n";
        generation.maxResponseCharacters = 300;
        generation.responseLanguage = Language.Auto;
        generation.modelParameters = model;
        generation.citations = citations;
        generation.enableFactualConsistencyScore = false;

        const chat = new ChatParameters();
        chat.store = true;

        const request = new ChatRequest();
        request.query = "What is the difference between the standard and low level APIs in Vectara for indexing?"
        request.search = searchCorpus;
        request.generation = generation;
        request.chat = chat;
        request.streamResponse = false;

        console.log("Chat request is: " + JSON.stringify(ObjectSerializer.serialize(request, "ChatRequest"), null, 4));

        await chatsApi.createChat(request).then(value => {
            const body = value.body;
            const resp = value.response;



            console.log("Received " + resp.statusCode + " with message: " + resp.statusMessage);
            console.log("Chat Id: " + body.chatId);
            console.log("Summary: " + body.answer);

        }).catch((httpError: HttpError) => {
            let body = (httpError.body as BadRequestError);

            console.log("Error is: " + JSON.stringify(ObjectSerializer.serialize(body, "BadRequestError")));

            console.log("Failure calling chat: " + httpError.statusCode);

            console.log("Field errors")
            for (let fieldError in body.fieldErrors) {
                console.log("Field error: " + fieldError);
            }

            console.log("Message was: " + httpError.message);

            console.log("Response was: " + httpError.response.statusMessage);
            console.log("HttpError Name: " + httpError.name)
        });
    }


});
