import { AuthenticationUtil } from './util';

class Client {

	customerId: string;

	constructor(customerId: string) {
		this.customerId = customerId;
	}

	getCustomerId() {
		return this.customerId;
	}

}

class Factory {

	customerId: string;

	constructor(customerId: string) {
		this.customerId = customerId;
	}

	build(): Client {
		let authUtil = new AuthenticationUtil(this.customerId, "aaaa");


		return new Client(this.customerId);
	}

}

export { Client, Factory };


