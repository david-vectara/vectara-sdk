import {describe, expect, test,} from '@jest/globals';
import {Factory} from "../src/core";
import {ResponseSet, SummaryResponse} from "../src/dto";

test('Verifies Creation of Batch Query', async () => {
    const client = await (new Factory()).build();
    const target = client.queryFacade;

    const result : ResponseSet = await target.simple("What does the search field do?", 427);

    expect(result).toBeDefined()
    console.log("We found summary:\n" + (result.summary as Array<SummaryResponse>)[0].text);
});
