package com.vectara.client.config;

import com.vectara.client.YamlAppConfig;

import junit.framework.TestCase;

public class YamlAppConfigTest extends TestCase {

	
	public void test() {
		YamlAppConfig config = new YamlAppConfig();
		VectaraConfig loadedConfig = config.getVectaraConfig();
		
		// TODO Add assertions.
		System.out.println("We found " + loadedConfig);
	}
}
