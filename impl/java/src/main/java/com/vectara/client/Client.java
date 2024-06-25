package com.vectara.client;

import java.io.File;


import com.vectara.ApiClient;

import com.vectara.api.IndexApi;
import com.vectara.api.QueriesApi;
import com.vectara.client.auth.AuthUtil;
import com.vectara.client.config.VectaraConfig;
import com.vectara.model.GenerationParameters;
import com.vectara.model.KeyedSearchCorpus;
import com.vectara.model.Language;
import com.vectara.model.QueryFullResponse;
import com.vectara.model.QueryRequest;
import com.vectara.model.SearchCorporaParameters;

public class Client {

	public static void runTest(String query, String corpusKey) {
		try {
			YamlAppConfig yamlConfig = new YamlAppConfig();
			VectaraConfig config = yamlConfig.getVectaraConfig();

			AuthUtil authUtil = new AuthUtil();
			authUtil.setConfig(config);
			authUtil.initialize();
			
			ApiClient apiClient = authUtil.createApiClient();
			
			QueriesApi queryApi = new QueriesApi(apiClient);
			
			// Create the query request
			QueryRequest request = new QueryRequest();
			request.setQuery(query);

			// Set the search corpora params
			SearchCorporaParameters searchCorporaParams = new SearchCorporaParameters();
			KeyedSearchCorpus keyedSearchCorpus = new KeyedSearchCorpus();
			keyedSearchCorpus.setCorpusKey(corpusKey);
			searchCorporaParams.addCorporaItem(keyedSearchCorpus);
			request.setSearch(searchCorporaParams);
			
			GenerationParameters generationParams = new GenerationParameters();
			generationParams.setMaxUsedSearchResults(5);
			generationParams.setPromptName("vectara-summary-ext-v1.3.0");
			generationParams.setResponseLanguage(Language.ENG);
			
			request.setGeneration(generationParams);
			
			
			QueryFullResponse response = queryApi.query(request);
			System.out.println(response.getSummary());
//			
//			// Manually Wire Spring beans for now.
//			AuthUtil authUtil = new AuthUtil();
//			authUtil.setConfig(config);
//			authUtil.initialize();
//			
//			Channel channel = managedChannel("serving.vectara.io");
//
//			QueryServiceBlockingStub querying = QueryServiceGrpc.newBlockingStub(channel);
//
//			CorpusKey.Builder corpusKeyBuilder = CorpusKey.newBuilder();
//			corpusKeyBuilder.setCorpusId(corpusId);
//			corpusKeyBuilder.setCustomerId(Integer.parseInt(config.getCustomerId()));
//
//			QueryRequest.Builder queryBuilder = QueryRequest.newBuilder();
//			queryBuilder.addCorpusKey(corpusKeyBuilder.build());
//			queryBuilder.setQuery(query);
//			queryBuilder.setNumResults(100);
//
//			SummarizationRequest request = SummarizationRequest.newBuilder()
//					.setSummarizerPromptName("vectara-summary-ext-v1.3.0").setMaxSummarizedResults(5)
//					.setResponseLang("auto").build();
//
//			queryBuilder.addSummary(request);
//
//			BatchQueryRequest.Builder builder = BatchQueryRequest.newBuilder();
//			builder.addQuery(queryBuilder.build());
//
//			CallCredentials credentials = authUtil.createGrpcCredentials();
//			
//			BatchQueryResponse response = querying.withCallCredentials(credentials).query(builder.build());
			
		} catch (Exception e) {
			System.out.println("machine says no: " + e.getMessage());
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		runTest("What kind of effects will GenAI have on employees?", "Thought_Provoking_McKinsey_341");
	}

}
