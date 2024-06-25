package com.vectara.client.auth;

import static org.junit.Assert.assertNotEquals;

import com.vectara.client.YamlAppConfig;
import com.vectara.client.config.VectaraConfig;

import junit.framework.TestCase;

public class OAuth2UtilTest extends TestCase {

	public void testRenewCheck() {

		YamlAppConfig appConfig = new YamlAppConfig();
		VectaraConfig config = appConfig.getVectaraConfig();

		OAuth2Util util = new OAuth2Util();
		util.setConfig(config);
		util.initialize();

		String token = util.getAuthroizationToken();
		System.out.println("Found token [" + token + "]");
		
		Long lifetime = util.getToken().getLifetime();
		Long requestTs = util.getRequestTs();
		
		String token2 = util.getAuthroizationToken();
		assertEquals(token, token2);
		
		
		// Push the request timestamp back before the lifetime of the token.
		util.setRequestTs(requestTs - lifetime - 1);
		
		String token3 = util.getAuthroizationToken();
		assertNotEquals(token, token3);

	}

}
