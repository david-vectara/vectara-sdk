import {describe, expect, test, jest} from '@jest/globals';
import {Factory} from "../src/core";
import {ResponseSet, SummaryResponse} from "../src/dto";

// Increase the default timeout as we're doing functional testing rather than
// performance based testing.
jest.setTimeout(30000)

test('Verifies Creation of Batch Query', async () => {
    const client = await (new Factory()).build();
    const target = client.queryFacade;

    const result : ResponseSet = await target.simple("What does the search field do?", 427);

    console.log("We found summary:\n" + (result.summary as Array<SummaryResponse>)[0].text);
    expect(result).toBeDefined()
});
