package com.vectara.client;

import java.io.File;
import java.net.URLConnection;
import java.util.Map;

import com.vectara.ApiClient;

import okhttp3.OkHttpClient;

public class ModApiClient extends ApiClient {

	public ModApiClient() {
		super();
	}

	public ModApiClient(OkHttpClient client) {
		super(client);
	}

	public ModApiClient(String clientId, Map<String, String> parameters) {
		super(clientId, parameters);
	}

	public ModApiClient(String clientId, String clientSecret, Map<String, String> parameters) {
		super(clientId, clientSecret, parameters);
	}

	public ModApiClient(String basePath, String clientId, String clientSecret, Map<String, String> parameters) {
		super(basePath, clientId, clientSecret, parameters);
	}

	public ModApiClient(String clientId) {
		super(clientId);
	}

	/**
	 * Guess Content-Type header from the given file (defaults to
	 * "application/octet-stream").
	 *
	 * @param file The given file
	 * @return The guessed Content-Type
	 */
	public String guessContentTypeFromFile(File file) {
		return "application/octet-stream";
	}

}
