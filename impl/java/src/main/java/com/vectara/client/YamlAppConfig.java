package com.vectara.client;

import com.vectara.client.config.VectaraConfig;
import com.vectara.client.config.YamlConfigUtil;

public class YamlAppConfig {

	public VectaraConfig getVectaraConfig() {
		return new YamlConfigUtil().readYaml();
	}
	
}
