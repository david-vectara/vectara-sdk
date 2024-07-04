import {AuthenticationUtil, DummyAuthentication} from './auth';
import {RequestUtil} from './request';
import {AdminService} from './admin';
import {Config, ConfigLoader} from './config'
import {QueryFacade, QueryService} from "./query";
import {QueriesApi, QueriesApiApiKeys} from "./api/queriesApi";
import {ChatsApi, ChatsApiApiKeys} from "./api/chatsApi";

class Client {

    public customerId: string;
    public adminService: AdminService;
    public queryService: QueryService;
    public queryFacade: QueryFacade;
    public queriesApi: QueriesApi;
    public chatsApi: ChatsApi;
    public authUtil: AuthenticationUtil;

    constructor(customerId: string, adminService: AdminService, queryService: QueryService, queryFacade: QueryFacade,
                queriesApi: QueriesApi, chatsApi: ChatsApi, authUtil: AuthenticationUtil) {
        this.customerId = customerId;
        this.adminService = adminService;
        this.queryService = queryService;
        this.queryFacade = queryFacade;
        this.queriesApi = queriesApi;
        this.chatsApi = chatsApi;
        this.authUtil = authUtil;
    };

    getCustomerId() {
        return this.customerId;
    };

    getQueriesApi() {
        return this.queriesApi;
    }
}

class Factory {

    config?: Config;
    profileName: string = ConfigLoader.DEFAULT_PROFILE;
    configFilePath: string = ConfigLoader.DEFAULT_CONFIG

    constructor() {

    }

    setConfig(input: Config) {
        this.config = input;
    }

    setConfigFile(input: string) {
        this.configFilePath = input;
    }

    setProfileName(input: string) {
        this.profileName = input;
    }

    async build(): Promise<Client | void> {
        if (this.config == null) {
            let configLoader = new ConfigLoader()
            this.config = configLoader.load(this.configFilePath, this.profileName);
        }

        let config = this.config;
        let authUtil = new AuthenticationUtil(this.config);

        return authUtil.initialize().then((value) => {


            const requestUtil = new RequestUtil(authUtil);

            const adminService = new AdminService(requestUtil);

            const queryService = new QueryService(requestUtil);

            const queryFacade = new QueryFacade(config.customerId, queryService);

            const queriesApi = new QueriesApi();
			const chatsApi = new ChatsApi();

            if (authUtil.mode = "OAuth2") {
                // Add in our interceptor. This will check if we need to refresh
				// our OAuth2 token in a promise, which needs to be done inside
				// a promise to avoid waiting.

				// For some reason, the authentication headers are "set" before the
				// interceptors so the only way to ensure the correct token is used is to
				// set our Authentication header inside the interceptor.

				// The WiredOAuth effectively becomes a dummy Auth mechanism.
                const refreshInterceptor = authUtil.buildOAuth2RefreshInterceptor();
                queriesApi.addInterceptor(refreshInterceptor);
				chatsApi.addInterceptor(refreshInterceptor);
                const wiredOAuth = new DummyAuthentication();
                queriesApi.setDefaultAuthentication(wiredOAuth);
				chatsApi.setDefaultAuthentication(wiredOAuth);
            } else {
                // Simpler method to authenticate ... but why the enum??
                const apiKey : string = (authUtil.apiKey as string);
                queriesApi.setApiKey(QueriesApiApiKeys.ApiKeyAuth, apiKey);
				chatsApi.setApiKey(ChatsApiApiKeys.ApiKeyAuth, apiKey)
            }


            const client = new Client(config.customerId, adminService, queryService, queryFacade, queriesApi,
                chatsApi, authUtil);
            console.info("Created client for customer [" + client.customerId + "]")
            return client;
        }).catch((error) => {
            console.error("Unable to initalize AuthenticationUtil: " + error.message);
            throw error;
        });


    }

}

export {Client, Factory};


