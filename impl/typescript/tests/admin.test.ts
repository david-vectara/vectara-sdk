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