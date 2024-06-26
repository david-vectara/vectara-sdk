package com.vectara.client.auth;

import java.net.URI;
import java.text.MessageFormat;

import com.nimbusds.oauth2.sdk.AccessTokenResponse;
import com.nimbusds.oauth2.sdk.AuthorizationGrant;
import com.nimbusds.oauth2.sdk.ClientCredentialsGrant;
import com.nimbusds.oauth2.sdk.TokenErrorResponse;
import com.nimbusds.oauth2.sdk.TokenRequest;
import com.nimbusds.oauth2.sdk.TokenResponse;
import com.nimbusds.oauth2.sdk.auth.ClientAuthentication;
import com.nimbusds.oauth2.sdk.auth.ClientSecretBasic;
import com.nimbusds.oauth2.sdk.auth.Secret;
import com.nimbusds.oauth2.sdk.id.ClientID;
import com.nimbusds.oauth2.sdk.token.AccessToken;
import com.vectara.client.config.VectaraConfig;

public class OAuth2Util {

	private static final String DEFAULT_OAUTH2_URL = "https://vectara-prod-{0}.auth.us-west-2.amazoncognito.com/oauth2/token";

	protected AccessToken token;
	
	protected Long requestTs;

	private VectaraConfig config;
	
	public OAuth2Util() {

	}

	/**
	 * Initialization is not automatically called by Spring, we instead want
	 * to ensure this is only done if the AuthUtil determines that we're using
	 * OAuth2.
	 */
	public synchronized void initialize() {
		this.getAuthroizationToken();
	}

	protected AccessToken requestNewToken() {
		try {
			// Construct the client credentials grant
			AuthorizationGrant clientGrant = new ClientCredentialsGrant();

			// The credentials to authenticate the client at the token endpoint
			ClientID clientID = new ClientID(this.config.getAuth().getAppClientId());
			Secret clientSecret = new Secret(this.config.getAuth().getAppClientSecret());
			ClientAuthentication clientAuth = new ClientSecretBasic(clientID, clientSecret);

			// The request scope for the token (may be optional)
			//Scope scope = new Scope("read", "write");

			// The token endpoint
			String finalOAuth2Url = MessageFormat.format(DEFAULT_OAUTH2_URL, this.config.getCustomerId());
			URI tokenEndpoint = new URI(finalOAuth2Url);

			// Make the token request
			TokenRequest request = new TokenRequest(tokenEndpoint, clientAuth, clientGrant);

			TokenResponse response = TokenResponse.parse(request.toHTTPRequest().send());

			if (!response.indicatesSuccess()) {
				// We got an error response...
				TokenErrorResponse errorResponse = response.toErrorResponse();
			}

			AccessTokenResponse successResponse = response.toSuccessResponse();

			// Get the access token
			return successResponse.getTokens().getAccessToken();
			
		} catch (Exception e) {
			throw new RuntimeException("Unexpected exception invoking OAuth2: " + e.getMessage(), e);
		}		
	}
	
	public synchronized String getAuthroizationToken() {
		
		boolean renew = false;
		if (this.token == null) {
			System.out.println("We have no token so acquiring OAuth2 Token.");
			renew = true;
		} else { 
			// If we have a token, check whether we should
			// refresh based on the tokens expiry
			Long expiryTs = this.token.getLifetime() + this.requestTs;
			Long currentTs = System.currentTimeMillis() / 1000;
			if (currentTs > expiryTs) {
				System.out.println("Token has expired by [" + (currentTs - expiryTs) +"] seconds");
				renew = true;
			}
		}
		
		if (renew) {
			// Reset timestamp.
			this.requestTs = System.currentTimeMillis() / 1000;
			
			this.token = requestNewToken();
		}
	
		this.token.getLifetime();
		
		return this.token.getValue();

	}

	public VectaraConfig getConfig() {
		return config;
	}

	public void setConfig(VectaraConfig config) {
		this.config = config;
	}

	public Long getRequestTs() {
		return requestTs;
	}

	public void setRequestTs(Long requestTs) {
		this.requestTs = requestTs;
	}

	public AccessToken getToken() {
		return token;
	}

	
	
}
