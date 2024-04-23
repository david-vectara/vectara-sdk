import { AuthenticationUtil } from './auth';
import { RequestUtil } from './request';
import { AdminService } from './admin';
import { Config, ConfigLoader } from './config'
import {QueryFacade, QueryService} from "./query";

class Client {

	customerId: string;
	adminService: AdminService;
	queryService: QueryService;
	queryFacade: QueryFacade;

	constructor(customerId: string, adminService: AdminService, queryService : QueryService, queryFacade: QueryFacade) {
		this.customerId = customerId;
		this.adminService = adminService;
		this.queryService = queryService;
		this.queryFacade = queryFacade;
	}

	getCustomerId() {
		return this.customerId;
	}

}

class Factory {

	config?: Config;
	profileName: string = ConfigLoader.DEFAULT_PROFILE;
	configFilePath: string = ConfigLoader.DEFAULT_CONFIG

	constructor() {

	}

	setConfig(input : Config) {
		this.config = input;
	}

	setConfigFile(input: string) {
		this.configFilePath = input;
	}

	setProfileName(input: string) {
		this.profileName = input;
	}

	async build(): Promise<Client> {
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

			const client =  new Client(config.customerId, adminService, queryService, queryFacade);
			console.info("Created client for customer [" + client.customerId + "]")
			return client;
		}).catch((error) => {
			console.error("Unable to initalize AuthenticationUtil: " + error.message);
			throw error;
		});


	}

}

export { Client, Factory };


