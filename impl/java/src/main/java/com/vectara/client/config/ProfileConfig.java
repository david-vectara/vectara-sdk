package com.vectara.client.config;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnySetter;

public class ProfileConfig {


	private Map<String,VectaraConfig> profileMap;
	
	public ProfileConfig() {
		profileMap = new HashMap<String, VectaraConfig>();
	}
	
	public VectaraConfig getProfile(String name) {
		return profileMap.get(name);
	}
	
	@JsonAnySetter
	private void setAny(String propertyName, VectaraConfig value) {
		profileMap.put(propertyName, value);
	}
	
	
}
