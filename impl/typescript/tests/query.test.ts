import {describe, expect, test, jest} from '@jest/globals';
import {Factory} from "../src/core";
import {ResponseSet, SummaryResponse} from "../src/dto";

test('Verifies Creation of Batch Query', async () => {
    jest.setTimeout(30000)
    const client = await (new Factory()).build();
    const target = client.queryFacade;

    const result : ResponseSet = await target.simple("What does the search field do?", 427);

    console.log("We found summary:\n" + (result.summary as Array<SummaryResponse>)[0].text);
    expect(result).toBeDefined()
});
