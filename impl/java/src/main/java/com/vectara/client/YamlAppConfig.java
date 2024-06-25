package com.vectara.client;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.vectara.client.config.VectaraConfig;
import com.vectara.client.config.YamlConfigUtil;

@Configuration
public class YamlAppConfig {

	@Bean
	public VectaraConfig getVectaraConfig() {
		return new YamlConfigUtil().readYaml();
	}
	
}
