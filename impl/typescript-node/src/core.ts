import {AuthenticationUtil, DummyAuthentication} from './auth';
import {RequestUtil} from './request';
import {AdminService} from './admin';
import {Config, ConfigLoader} from './config'
import {QueryFacade, QueryService} from "./query";
import {QueriesApi, QueriesApiApiKeys} from "./api/queriesApi";
import {ChatsApi, ChatsApiApiKeys} from "./api/chatsApi";
import {CorporaApi, CorporaApiApiKeys} from "./api/corporaApi";
import {DocumentsApi, DocumentsApiApiKeys} from "./api/documentsApi";
import {EncodersApi, EncodersApiApiKeys} from "./api/encodersApi";
import {IndexApi, IndexApiApiKeys} from "./api/indexApi";
import {JobsApi, JobsApiApiKeys} from "./api/jobsApi";
import {LargeLanguageModelsApi, LargeLanguageModelsApiApiKeys} from "./api/largeLanguageModelsApi";
import {RerankersApi, RerankersApiApiKeys} from "./api/rerankersApi";
import {UploadApi, UploadApiApiKeys} from "./api/uploadApi";
import {UsersApi, UsersApiApiKeys} from "./api/usersApi";

class Client {

    public customerId: string;
    public adminService: AdminService;
    public queryService: QueryService;
    public queryFacade: QueryFacade;

    public chatsApi: ChatsApi;
    public corporaApi: CorporaApi;
    public documentsApi: DocumentsApi;
    public encodersApi: EncodersApi;
    public indexApi: IndexApi;
    public jobsApi: JobsApi;
    public largeLanguageModelsApi: LargeLanguageModelsApi;
    public queriesApi: QueriesApi;
    public rerankersApi: RerankersApi;
    public uploadApi: UploadApi;
    public usersApi: UsersApi;

    public authUtil: AuthenticationUtil;

    constructor(customerId: string, adminService: AdminService, queryService: QueryService, queryFacade: QueryFacade,
                chatsApi: ChatsApi, corporaApi: CorporaApi, documentsApi: DocumentsApi, encodersApi: EncodersApi,
                indexApi: IndexApi, jobsApi: JobsApi, largeLanguageModelsApi: LargeLanguageModelsApi,
                queriesApi: QueriesApi, rerankersApi: RerankersApi, uploadApi: UploadApi, usersApi: UsersApi,
                authUtil: AuthenticationUtil) {
        this.customerId = customerId;
        this.adminService = adminService;
        this.queryService = queryService;
        this.queryFacade = queryFacade;
        this.chatsApi = chatsApi;
        this.corporaApi = corporaApi;
        this.documentsApi = documentsApi;
        this.encodersApi = encodersApi;
        this.indexApi = indexApi;
        this.jobsApi = jobsApi;
        this.largeLanguageModelsApi = largeLanguageModelsApi;
        this.queriesApi = queriesApi;
        this.rerankersApi = rerankersApi;
        this.uploadApi = uploadApi;
        this.usersApi = usersApi;

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

			const chatsApi = new ChatsApi();
            const corporaApi = new CorporaApi();
            const documentsApi = new DocumentsApi();
            const encodersApi = new EncodersApi();
            const indexApi = new IndexApi();
            const jobsApi = new JobsApi();
            const largeLanguageModelsApi = new LargeLanguageModelsApi();
            const queriesApi = new QueriesApi();
            const rerankersApi = new RerankersApi();
            const uploadApi = new UploadApi();
            const usersApi = new UsersApi();

            if (authUtil.mode = "OAuth2") {
                // Add in our interceptor. This will check if we need to refresh
				// our OAuth2 token in a promise, which needs to be done inside
				// a promise to avoid waiting.

				// For some reason, the authentication headers are "set" before the
				// interceptors so the only way to ensure the correct token is used is to
				// set our Authentication header inside the interceptor.

				// The WiredOAuth effectively becomes a dummy Auth mechanism.
                const refreshInterceptor = authUtil.buildOAuth2RefreshInterceptor();
				chatsApi.addInterceptor(refreshInterceptor);
                corporaApi.addInterceptor(refreshInterceptor);
                documentsApi.addInterceptor(refreshInterceptor);
                encodersApi.addInterceptor(refreshInterceptor);
                indexApi.addInterceptor(refreshInterceptor);
                jobsApi.addInterceptor(refreshInterceptor);
                largeLanguageModelsApi.addInterceptor(refreshInterceptor);
                queriesApi.addInterceptor(refreshInterceptor);
                rerankersApi.addInterceptor(refreshInterceptor);
                uploadApi.addInterceptor(refreshInterceptor);
                usersApi.addInterceptor(refreshInterceptor);

                const dummyAuth = new DummyAuthentication();
				chatsApi.setDefaultAuthentication(dummyAuth);
                corporaApi.setDefaultAuthentication(dummyAuth);
                documentsApi.setDefaultAuthentication(dummyAuth);
                encodersApi.setDefaultAuthentication(dummyAuth);
                indexApi.setDefaultAuthentication(dummyAuth);
                jobsApi.setDefaultAuthentication(dummyAuth);
                largeLanguageModelsApi.setDefaultAuthentication(dummyAuth);
                queriesApi.setDefaultAuthentication(dummyAuth);
                rerankersApi.setDefaultAuthentication(dummyAuth);
                uploadApi.setDefaultAuthentication(dummyAuth);
                usersApi.setDefaultAuthentication(dummyAuth);

            } else {
                // Simpler method to authenticate ... but why the enum??
                const apiKey : string = (authUtil.apiKey as string);
				chatsApi.setApiKey(ChatsApiApiKeys.ApiKeyAuth, apiKey)
                corporaApi.setApiKey(CorporaApiApiKeys.ApiKeyAuth, apiKey);
                documentsApi.setApiKey(DocumentsApiApiKeys.ApiKeyAuth, apiKey);
                encodersApi.setApiKey(EncodersApiApiKeys.ApiKeyAuth, apiKey);
                indexApi.setApiKey(IndexApiApiKeys.ApiKeyAuth, apiKey);
                jobsApi.setApiKey(JobsApiApiKeys.ApiKeyAuth, apiKey);
                largeLanguageModelsApi.setApiKey(LargeLanguageModelsApiApiKeys.ApiKeyAuth, apiKey);
                queriesApi.setApiKey(QueriesApiApiKeys.ApiKeyAuth, apiKey);
                rerankersApi.setApiKey(RerankersApiApiKeys.ApiKeyAuth, apiKey);
                uploadApi.setApiKey(UploadApiApiKeys.ApiKeyAuth, apiKey);
                usersApi.setApiKey(UsersApiApiKeys.ApiKeyAuth, apiKey);
            }


            const client = new Client(config.customerId, adminService, queryService, queryFacade,
                chatsApi, corporaApi, documentsApi, encodersApi, indexApi, jobsApi, largeLanguageModelsApi,
                queriesApi, rerankersApi, uploadApi, usersApi, authUtil);
            console.info("Created client for customer [" + client.customerId + "]")
            return client;
        }).catch((error) => {
            console.error("Unable to initalize AuthenticationUtil: " + error.message);
            throw error;
        });


    }

}

export {Client, Factory};


