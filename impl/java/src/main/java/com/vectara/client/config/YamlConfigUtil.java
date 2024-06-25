package com.vectara.client.config;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.vectara.client.config.ProfileConfig;
import com.vectara.client.config.VectaraConfig;

public class YamlConfigUtil {

	private static final String VECTARA_CONF_NAME = ".vec_auth.yaml";

	public VectaraConfig readYaml() {
		return readYaml("default");
	}

	public VectaraConfig readYaml(String profileName) {
		String userHome = System.getProperty("user.home");
		String path = userHome + File.separator + VECTARA_CONF_NAME;

		try {
			String configYaml = new String(Files.readAllBytes(Paths.get(path)));
			ProfileConfig profileConfig = innerReadYaml(configYaml);
			return profileConfig.getProfile(profileName);

		} catch (IOException e) {
			throw new RuntimeException("Unable to read config file: " + e.getMessage(), e);
		}

	}

	public ProfileConfig innerReadYaml(String config) {
		try {
			final ObjectMapper mapper = new ObjectMapper(new YAMLFactory()); // jackson databind
			return mapper.readValue(config, ProfileConfig.class);
		} catch (Exception e) {
			throw new RuntimeException("Unable to load configuration: " + e.getMessage(), e);
		}
	}

}
