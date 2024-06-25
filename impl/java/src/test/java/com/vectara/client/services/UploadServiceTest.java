package com.vectara.client.services;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import com.vectara.client.YamlAppConfig;
import com.vectara.client.auth.AuthUtil;
import com.vectara.client.config.VectaraConfig;

import junit.framework.TestCase;

public class UploadServiceTest extends TestCase {

	public void test() {
		
		YamlAppConfig yamlConfig = new YamlAppConfig();
		VectaraConfig config = yamlConfig.getVectaraConfig();
		
		// Manually Wire Spring beans for now.
		AuthUtil authUtil = new AuthUtil();
		authUtil.setConfig(config);
		authUtil.initialize();

		UploadService target = new UploadService();
		target.setAuthUtil(authUtil);
		
		// FIXME This value should be dynamic based on a test corpus creation.
		String corpusKey = "Sour_Gas";
		
		String resourceName = "gem-ksa-national-report.pdf";

		ClassLoader classLoader = getClass().getClassLoader();
		File file = new File(classLoader.getResource(resourceName).getFile());
		String absolutePath = file.getAbsolutePath();
		System.out.println(absolutePath);
		
		Map<String,Object> metadata = new HashMap<String, Object>();
		metadata.put("test_key", "test_value");
		
		target.uploadStream(absolutePath, corpusKey, metadata);
		
	}
	
}
