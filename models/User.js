"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
class User {
    constructor() {
        this.firstName = faker_1.faker.person.firstName();
        this.lastName = faker_1.faker.person.lastName();
        this.email = faker_1.faker.internet.email();
        this.password = '**Br3akm3';
        this.company = faker_1.faker.company.catchPhrase();
        this.address1 = faker_1.faker.location.streetAddress();
        this.city = faker_1.faker.location.city();
        this.state = faker_1.faker.location.state();
        this.postalCode = faker_1.faker.location.zipCode('#####');
        this.landingPage = faker_1.faker.internet.domainName();
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
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    getUserID() {
        return this.userID;
    }
    setUserID(userID) {
        this.userID = userID;
    }
}
exports.default = User;
