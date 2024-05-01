import {describe, expect, test} from '@jest/globals';
import { Factory } from '../src/core';
import {CorpusDto} from "../src/dto";

test('Verifies List Corpora', async () => {
	let client = await new Factory().build();

    const adminService = client.adminService;

	console.log("Making request to list corpora")
	const response = await adminService.listCorpora();

	response.corpus.forEach((value: CorpusDto, index: number) => {
		console.log("We found corpus [" + value.id + "] with name [" + value.name + "]")
	});

});

test("Verifies Create Corpus", async () => {

		let client = await new Factory().build();

    const adminService = client.adminService;

	const corpus : CorpusDto = { name: "Created from Typescript"};

	console.log("Making request to list corpora");
	const corpusId = await adminService.createCorpus(corpus);

	expect(corpusId).toBeGreaterThan(0);

})