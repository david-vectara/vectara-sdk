package com.vectara.client.services;

import java.io.File;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.vectara.ApiClient;
import com.vectara.ApiException;
import com.vectara.api.UploadApi;
import com.vectara.client.auth.AuthUtil;

@Component
public class UploadService {

	@Autowired
	private AuthUtil authUtil;
	
	public Boolean uploadStream(String fileName, String corpusKey, Map<String,Object> metadata) {
		
		ApiClient client = authUtil.createApiClient();
		
		UploadApi upload = new UploadApi(client);
    	File file = new File(fileName);
    	
    	// TODO Add in the shortFileName.
    	String shortFileName = file.getName();

		try {
			upload.uploadFile(corpusKey, file, metadata);
		} catch (ApiException e) {
			e.printStackTrace();
			return false;
		}
		
		return true;
		
//	    try {
//	    	File file = new File(fileName);
//	    	
//	    	// TODO Add in the shortFileName.
//	    	String shortFileName = file.getName();
//	    	
//	    	String[] parts = StringUtils.split(fileName, ".");
//	    	String extension = parts[parts.length - 1]; 
//	    	
//	    	MediaType mimeType = null;
//	    	switch (extension) {
//	    		case "pdf":
//	    			mimeType = MediaType.parse("application/pdf");
//	    			break;
//	    		case "ppt":
//	    			mimeType = MediaType.parse("application/vnd.ms-powerpoint");
//	    			break;
//	    		case "pptx":
//	    			mimeType = MediaType.parse("application/vnd.openxmlformats-officedocument.presentationml.presentation");
//	    			break;
//	    		case "docx":
//	    			mimeType = MediaType.parse("application/msword");
//	    			break;
//	    		case "json":
//	    			mimeType = MediaType.parse("text/json");
//	    			break;
//	    		default:
//	    			throw new Exception("Unexpected document extension [" + extension + "]");
//	    		
//	    	}
//	    	
//
//	    	
//	    	MultipartBody.Builder builder = new MultipartBody.Builder()
//	    	        .setType(MultipartBody.FORM);
//	    	        
//            		// RequestBody.create(file, mimeType));
//	    	        //
//	    	
//	    	// TODO Add in the metadata.
//	    	if (metadata != null) {
//		    	ObjectMapper objectMapper = new ObjectMapper();
//				String metadataJson = objectMapper.writeValueAsString(metadata);
//				builder = builder.addFormDataPart("metadata", null, RequestBody.create(metadataJson, MediaType.parse("application/json")));
//	    	}
//
//	    	builder = builder.addFormDataPart("d", "true");
//	    	
//	        builder = builder.addFormDataPart("file", shortFileName,
//    	            RequestBody.create(file, MediaType.parse("application/octet-stream")));
//
//	    	
//	    	RequestBody formBody = builder.build();
//	    	
//	    	Request.Builder requestBuilder = new Request.Builder()
//	    			.url("https://api.vectara.io/v2/corpora/"+corpusKey+"/upload_file")
//	    			.post(formBody)
//	    			.addHeader("Content-Type", "multipart/form-data");
//	    	
//	    	Map<String,String> authHeaders = this.authUtil.createHttpHeaders();
//	    	List<String> headers = new ArrayList<String>(authHeaders.keySet());
//	    	Collections.sort(headers);
//	    	for (String header: headers) {
//	    		String value = authHeaders.get(header);
//	    		requestBuilder.addHeader(header, value);
//	    	}
//	    	
//	    	Request request = requestBuilder.build();
//	    	
//	    	OkHttpClient client = new OkHttpClient();
//	    	
//	    	Response response = client.newCall(request).execute();
//	    	System.out.println("Response was: " + response.code());
//	    	//if (response.code() != 200 && response.code() != 201) {
//	    		
//	    		System.out.println("Unexpected response [" + response.code() + "], message: " + response.message());
//	    		
//	    		// DO NOT DO THIS IF WE ARE REQUESTING OUTPUT AND GET A 200 or 201.
//	    		ResponseBody body = response.body();
//	    		String bodyText = new String(body.bytes(), "utf-8");
//	    		System.out.println("Response body: " + bodyText);
//	    	//}
//	    } catch (Exception e) {
//	    	System.out.println("Unable to upload file.");
//	    	e.printStackTrace();
//	    	
//	    }
//	    return false;
	}

	public void setAuthUtil(AuthUtil authUtil) {
		this.authUtil = authUtil;
	}

	
	
}
