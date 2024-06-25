package com.vectara.client.config;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OAuth2Config {

	// app_client_id
	@JsonProperty("app_client_id")
	private String appClientId;

	// app_client_secret
	@JsonProperty("app_client_secret")
	private String appClientSecret;

	// auth_url
	@JsonProperty("auth_url")
	private String authUrl;

	// api_key
	@JsonProperty("api_key")
	private String apiKey;

	public OAuth2Config() {

	}

	public String getAppClientId() {
		return appClientId;
	}

	public void setAppClientId(String appClientId) {
		this.appClientId = appClientId;
	}

	public String getAppClientSecret() {
		return appClientSecret;
	}

	public void setAppClientSecret(String appClientSecret) {
		this.appClientSecret = appClientSecret;
	}

	public String getAuthUrl() {
		return authUrl;
	}

	public void setAuthUrl(String authUrl) {
		this.authUrl = authUrl;
	}

	public String getApiKey() {
		return apiKey;
	}

	public void setApiKey(String apiKey) {
		this.apiKey = apiKey;
	}

	@Override
	public String toString() {
		return "OAuth2Config [" + (appClientId != null ? "appClientId=" + appClientId + ", " : "")
				+ (appClientSecret != null ? "appClientSecret=" + appClientSecret + ", " : "")
				+ (authUrl != null ? "authUrl=" + authUrl + ", " : "") + (apiKey != null ? "apiKey=" + apiKey : "")
				+ "]";
	}

	
	
}
