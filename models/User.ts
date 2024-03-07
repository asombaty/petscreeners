import { faker } from '@faker-js/faker';

export default class User {
	private firstName: string;
	private lastName: string;
	private email: string;
	private password: string;
	private accessToken: string;
	private userID: string;
	private company: string;
	private address1: string;
	private city: string;
	private state: string;
	private postalCode: string;
	private landingPage: string;

	constructor() {
		this.firstName = faker.person.firstName();
		this.lastName = faker.person.lastName();
		this.email = faker.internet.email();
		this.password = '**Br3akm3';
		this.company = faker.company.catchPhrase();
		console.log(this.company);
		this.address1 = faker.location.streetAddress();
		this.city = faker.location.city();
		this.state = faker.location.state();
		this.postalCode = faker.location.zipCode();
		this.landingPage = faker.internet.domainName();
	}

	getFirstName() {
		return this.firstName;
	}
	getCompany() {
		return this.company;
	}
	getAddress1() {
		return this.address1;
	}
	getCity() {
		return this.city;
	}
	getState() {
		return this.state;
	}
	getZipCode() {
		return this.postalCode;
	}
	getLandingPage() {
		return this.landingPage;
	}

	getLastName() {
		return this.lastName;
	}

	getEmail() {
		return this.email;
	}

	getPassword() {
		return this.password;
	}

	getAccessToken() {
		return this.accessToken;
	}

	setAccessToken(accessToken: string) {
		this.accessToken = accessToken;
	}


	getUserID() {
		return this.userID;
	}

	setUserID(userID: string) {
		this.userID = userID;
	}
}
