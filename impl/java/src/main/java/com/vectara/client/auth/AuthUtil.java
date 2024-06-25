package com.vectara.client.auth;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.vectara.ApiClient;
import com.vectara.client.ModApiClient;
import com.vectara.client.config.OAuth2Config;
import com.vectara.client.config.VectaraConfig;

@Component
public class AuthUtil {

	@Autowired
	private OAuth2Util oauth2Util;

	@Autowired
	private VectaraConfig config;

	private AuthenticationType type;

	public AuthUtil() {

	}

	public void initialize() {
		OAuth2Config authConfig = config.getAuth();

		if (StringUtils.isNotBlank(authConfig.getApiKey())) {
			this.type = AuthenticationType.API_KEY;
		} else if (StringUtils.isNotBlank(authConfig.getAppClientId())
				&& StringUtils.isNotBlank(authConfig.getAppClientSecret())) {
			this.type = AuthenticationType.OAUTH2;
		}
	}

	public ApiClient createApiClient() {
		
		if (type == AuthenticationType.API_KEY) {
			ApiClient apiClient = new ModApiClient();
			apiClient.setApiKey(this.config.getAuth().getApiKey());
			return apiClient;
			//result.put("x-api-key", this.config.getAuth().getApiKey());
		} else if (type == AuthenticationType.OAUTH2) {
			String clientId = this.config.getAuth().getAppClientId();
			String clientSecret = this.config.getAuth().getAppClientSecret();
			
			ApiClient apiClient = new ModApiClient(clientId, clientSecret, null);
			return apiClient;
		} else {
			throw new RuntimeException("AuthenticationType has not been set, has this class been initialized?");
		}
	}

	
	
	public void setConfig(VectaraConfig config) {
		this.config = config;
	}

	public VectaraConfig getConfig() {
		return config;
	}

}
