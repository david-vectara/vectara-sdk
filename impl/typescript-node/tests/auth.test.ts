import {describe, expect, test,} from '@jest/globals';
import {ConfigLoader} from '../src/config';
import {AuthenticationUtil} from '../src/auth';
import {OAuth2Token} from "@badgateway/oauth2-client";

// TODO Use a non-default profile for OAuth2 and API Key to test each.
test('Verifies Authentication', async () => {
    let configLoader = new ConfigLoader();
    let config = configLoader.load(ConfigLoader.DEFAULT_CONFIG, ConfigLoader.DEFAULT_PROFILE);

    let target = new AuthenticationUtil(config)
    console.info("Loaded authentication util with mode [" + target.mode + "]")
    let result = await target.initialize();
    expect(result).toBe(true);
    console.info("We authenticated with token:\n" + target.token);

    // OAuth2 only tested at the moment as default profile.
    const headerMap = await target.getHttpHeaders();
    expect(headerMap.has("Customer-Id")).toBe(true);
    expect(headerMap.has("Authorization")).toBe(true);

});

// TODO Use a non-default profile for OAuth2 and API Key to test each.
test('Verifies Expiry', async () => {
    let configLoader = new ConfigLoader();
    let config = configLoader.load(ConfigLoader.DEFAULT_CONFIG, ConfigLoader.DEFAULT_PROFILE);

    let target = new AuthenticationUtil(config);
    console.info("Loaded authentication util with mode [" + target.mode + "]");
    let result = await target.initialize();
    expect(result).toBe(true);

    let token = (target.token as OAuth2Token);
    const existingAccessToken = token.accessToken;
    const existingExpiry = token.expiresAt;
    console.info("Existing expiry is [" + existingExpiry + "]");

    // First test verifies that the token is not refreshed immediately.
    // Get headers, nothing should change with new token.
    await target.getHttpHeaders()
    const notChangedAccessToken = token.accessToken as string;
    const notChangedExpiry = token.expiresAt as number;


    expect(existingExpiry).toBeGreaterThan(Date.now());

    // Now we "expire" our token but setting a date in the past, the access token should be
    // changed.
    token.expiresAt = Date.now() - 500
    console.info("We authenticated with token:\n" + target.token);

    // OAuth2 only tested at the moment as default profile.
    const headerMap = await target.getHttpHeaders();
    expect(headerMap.has("Customer-Id")).toBe(true);
    expect(headerMap.has("Authorization")).toBe(true);

    token = (target.token as OAuth2Token);
    const changedAccessToken = token.accessToken as string;
    const changedExpiry = token.expiresAt as number;

    // They should not be the same anymore.
    expect(existingAccessToken).not.toBe(changedAccessToken);
    expect(existingExpiry).not.toBe(changedExpiry);



});