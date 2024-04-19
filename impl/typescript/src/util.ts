

class AuthenticationUtil {

	mode?: string;
	customerId: string;
	apiKey?: string;
	oauth2AppId?: string;
	oauth2AppSecret?: string;

	constructor(customerId: string, apiKey?: string);
	constructor(customerId: string, oauth2AppId?: string, oauth2AppSecret?: string);
	constructor(customerId: string, apiKey?: string, oauth2AppId?: string, oauth2AppSecret?: string) {
		this.customerId = customerId;

		if (apiKey != null) {
			console.info("Creating with API Key for customer [" + customerId + "]");
			this.mode = "API Key"
			this.apiKey = apiKey;
		}
		if (oauth2AppId != null || oauth2AppSecret != null) {
			if (this.mode != null) {
				throw new Error("Configuration error - mode has already been specified with [" + this.mode + "], " +
					"so OAuth2 configuration unnecessary");
			}

			if (oauth2AppId == null || oauth2AppSecret == null) {
				throw new Error("Configuration error - if using OAuth2, you must specify both the oauth2AppId and " +
					"oauth2AppSecret")
			}

			console.info("Creating with OAuth2 for [" + customerId + "]");
			this.mode = "OAuth2";
			this.oauth2AppId = oauth2AppId;
			this.oauth2AppSecret = oauth2AppSecret;
		}

		if (this.mode == null) {
			throw new Error("You must either specify authentication configuration for an API Key or OAuth2")
		}

	}



}

export { AuthenticationUtil };