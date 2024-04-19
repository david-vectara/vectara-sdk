import {describe, expect, test} from '@jest/globals';
import { Factory } from '../src/core';

test('Verifies Client Creation', () => {
	let client = new Factory("1234").build();
	expect(client.customerId).toBe("1234");
	console.info("Here");


});