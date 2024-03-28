"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserApi_1 = __importDefault(require("../apis/UserApi"));
const playwright_config_1 = __importDefault(require("../playwright.config"));
class AddServiceProviderPage {
    load(page) {
        return __awaiter(this, void 0, void 0, function* () {
            yield page.goto("/en/admin/service-provider");
        });
    }
    get companyName() {
        return `id=name-text-input`;
    }
    get address1() {
        return `id=location.address-text-input`;
    }
    get city() {
        return `id=location.city-text-input`;
    }
    get state() {
        return `id=location.stateProvince-select`;
    }
    get zipCode() {
        return `id=location.postalCode-text-input`;
    }
    get landingPage() {
        return `id=landingPagePrefix-text-input`;
    }
    // private get submitButton(){
    //   return `button[type='submit']`;
    // }
    addServiceProvider(page, user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield page.fill(this.companyName, user.getCompany());
            yield page.fill(this.address1, user.getAddress1());
            yield page.locator("id=location.stateProvince-select").click();
            yield page.getByRole("option", { name: user.getState() }).click();
            yield page.fill(this.city, user.getCity());
            yield page.fill(this.zipCode, user.getZipCode());
            yield page.fill(this.landingPage, user.getLandingPage());
            yield page.waitForLoadState('domcontentloaded');
            const okButton = page.locator("button[type='submit']");
            yield okButton.click();
        });
    }
    signupUsingAPI(request, user, context) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield new UserApi_1.default().signup(request, user);
            const responseBody = yield response.json();
            const access_token = responseBody.access_token;
            const firstName = responseBody.firstName;
            const userID = responseBody.userID;
            yield context.addCookies([
                {
                    name: "access_token",
                    value: access_token,
                    url: (_a = playwright_config_1.default.use) === null || _a === void 0 ? void 0 : _a.baseURL,
                },
                {
                    name: "firstName",
                    value: firstName,
                    url: (_b = playwright_config_1.default.use) === null || _b === void 0 ? void 0 : _b.baseURL,
                },
                {
                    name: "userID",
                    value: userID,
                    url: (_c = playwright_config_1.default.use) === null || _c === void 0 ? void 0 : _c.baseURL,
                },
            ]);
        });
    }
}
exports.default = AddServiceProviderPage;
