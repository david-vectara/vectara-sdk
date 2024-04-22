import {describe, expect, test, } from '@jest/globals';
import { ConfigLoader } from '../src/config';
import { AuthenticationUtil } from '../src/auth';

// TODO Use a non-default profile for OAuth2 and API Key to test each.
test('Verifies Authentication', async() => {
	let configLoader = new ConfigLoader();
    let config = configLoader.load(ConfigLoader.DEFAULT_CONFIG, ConfigLoader.DEFAULT_PROFILE);

    let target = new AuthenticationUtil(config)
    console.info("Loaded authentication util with mode [" + target.mode + "]")
    let result = await target.initialize();
    expect(result).toBe(true);
    console.info("We authenticated with token:\n" + target.token);

    // OAuth2 only tested at the moment as default profile.
    const headerMap = target.getHttpHeaders();
    expect(headerMap.has("Customer-Id")).toBe(true);
    expect(headerMap.has("Authorization")).toBe(true);





});