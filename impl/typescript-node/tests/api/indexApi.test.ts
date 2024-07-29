import {jest, test} from '@jest/globals';
import {CreateDocumentRequest} from "../../src/model/createDocumentRequest";
import {CreateCorpusRequest} from "../../src/model/createCorpusRequest";
import {Client, Factory} from "../../src";
import {HttpError} from "../../src/api/apis";
import {
    FilterAttribute,
    GenerationParameters, Language, ObjectSerializer, QueryCorpusRequest,
    SearchCorpusParameters,
    StructuredDocument
} from "../../src/model/models";
import {CorpusBuilder} from "../../src/manager";
import LevelEnum = FilterAttribute.LevelEnum;
import TypeEnum = FilterAttribute.TypeEnum;

// Increase the default timeout as we're doing functional testing rather than
// performance based testing.
jest.setTimeout(30000)

function handleError(httpError: HttpError, operation: string) {
    console.log("Failure calling [" + operation + "]: " + httpError.statusCode);
    console.log("Message was: " + httpError.message);

    if (httpError?.response?.statusMessage) {
        console.log("Response was: " + httpError.response.statusMessage);
    }

    if (httpError.statusCode >= 400 && httpError?.body) {
        const body: { "request_id": string, messages: string[], "field_errors": Object } = httpError.body;

        let requestId = "";
        if (body?.request_id) {
            console.log("Request ID: " + body.request_id);
            requestId = body.request_id;
        }

        let messageConcat = "";

        if (body?.messages) {
            body.messages.forEach((element) => {
                if (messageConcat != "") {
                    messageConcat += ", ";
                }
                console.log("Error message on body: " + element);
                messageConcat += element;
            });
        }

        if (body?.field_errors) {
            for (const key in body.field_errors) {
                if (messageConcat != "") {
                    messageConcat += ", ";
                }
                const field_error_value = body.field_errors[key];
                messageConcat += "field [" + key + "] has error [" + field_error_value + "]";
            }
        }


        console.log("Error is: " + JSON.stringify(body));
        throw new Error("Error performing [" + operation + "], request ID [" + requestId + "], messages: " + messageConcat);
    }


}

test('Test we can index using the standard API', async () => {
    let temp: Client | void = await new Factory().build();
    if (!temp) {
        return;
    }

    const client = temp;

    const corporaApi = client.corporaApi;

    let corpusKey = "test-index-corpus";
    let corpusName = "Test Index Corpus";

    console.log("Checking for existing corpus");
    const found = await corporaApi.listCorpora(10, corpusName)
        .then(value => {
            let found = false;
            if (value?.body?.corpora) {
                value.body.corpora.forEach((corpus) => {
                    console.log(corpus.name)
                    if (corpus.name == corpusName) {
                        found = true;
                        return;
                    }
                });
            }
            return found;
        }).catch(value => {
            handleError(value, "listCorpora");
        });

    const refreshCorpus = true;

    if (refreshCorpus && found) {
        console.log("Deleting existing corpus")
        await corporaApi.deleteCorpus(corpusKey).then(value => {
            console.log("Deleted corpus")
        }).catch(error => {
            handleError(error, "deleteCorpus")
        });
    } else {
        console.log("Existing corpus not found")
    }


    if (refreshCorpus || !found) {
        const corpus = (new CorpusBuilder(corpusName)
            .key(corpusKey)
            .description("This is a corpus which allows us to test indexing documents")
            .addAttribute({name: 'testquote', level: LevelEnum.Document, type: TypeEnum.Text})
            .build())


        let corpusId = "";
        await corporaApi.createCorpus(corpus).then(value => {
            corpusId = value.body.id;
            corpusKey = value.body.key;
        }).catch(error => {
            handleError(error, "createCorpus")
        });
        console.log("Created corpus " + corpusKey);
    }
    const indexApi = client.indexApi;

    const corpusDocRequest: StructuredDocument = {
        id: "david-bio2",
        type: "structured",
        title: "David Bio",
        customDimensions: {},
        description: "",
        metadata: {'testquote': 'test\'value'},
        sections: [{
            title: "Bio",
            text: "David was a coder, not the best, not the worst, but doggedly persistent. David is 44 years old " +
                "at the time of this writing, being 2024."
        }],
    };

    await indexApi.createCorpusDocument(corpusKey, (corpusDocRequest as CreateDocumentRequest)).then(value => {
        console.log("Document created " + JSON.stringify(value.body.storageUsage));
    }).catch(error => {
        handleError(error, "createCorpusDocument")
    });

    const queriesApi = client.queriesApi;

    console.log("Sleeping 10s")
    await new Promise(f => setTimeout(f, 10000));

    console.log("Running query");

    const searchCorpus = new SearchCorpusParameters();
    searchCorpus.limit = 30;
    searchCorpus.metadataFilter = "doc.testquote = \\\"testvalue\\\"";

    const generation = new GenerationParameters();
    generation.promptName = "vectara-summary-ext-v1.3.0";
    generation.maxUsedSearchResults = 10;
    generation.responseLanguage = Language.Eng;
    generation.enableFactualConsistencyScore = false;

    const request = new QueryCorpusRequest();
    request.query = "How old is David?"
    request.search = searchCorpus;
    request.generation = generation;

    console.log("Query request is: " + JSON.stringify(ObjectSerializer.serialize(request, "QueryCorpusRequest"), null, 4));

    await queriesApi.queryCorpus(corpusKey, request).then(value => {
        const body = value.body;
        const resp = value.response;

        console.log("Received " + resp.statusCode + " with message: " + resp.statusMessage);

        console.log("Summary: " + body.summary)
    }).catch(error => {
        handleError(error, "query")
    });
});




