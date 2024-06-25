package com.vectara.client.config;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VectaraConfig {

	// customer_id
	@JsonProperty("customer_id")
	private String customerId;	
	
	// auth
	@JsonProperty("auth")
	private OAuth2Config auth;
	
	public VectaraConfig() {
		
	}
	
	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public OAuth2Config getAuth() {
		return auth;
	}

	public void setAuth(OAuth2Config auth) {
		this.auth = auth;
	}

	@Override
	public String toString() {
		return "VectaraConfig [customerId=" + customerId + ", auth=" + auth + "]";
	}


	
}
