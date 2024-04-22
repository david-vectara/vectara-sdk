import {describe, expect, test} from '@jest/globals';
import { Factory } from '../src/core';

test('Verifies Client Creation', async() => {
	let client = await new Factory().build();
	expect(client.customerId).toBeDefined();
	expect(client.adminService).toBeDefined();


});