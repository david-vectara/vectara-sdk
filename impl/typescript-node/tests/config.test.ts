import {describe, expect, test} from '@jest/globals';
import { ConfigLoader } from '../src/config';

test('Verifies Config Loading from Implicit', () => {
	let configLoader = new ConfigLoader();
    let config = configLoader.load(ConfigLoader.DEFAULT_CONFIG, ConfigLoader.DEFAULT_PROFILE);

	//expect(client.customerId).toBe("1234");
	//console.info("Here");


});