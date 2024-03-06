import { APIRequestContext, BrowserContext, Page } from "@playwright/test";
import User from "../models/User";
import UserApi from "../apis/UserApi";
import config from "../playwright.config";

export default class AddServiceProviderPage {
  async load(page: Page) {
    await page.goto("/en/admin/service-provider");
  }

  private get companyName() {
    return `id=name-text-input`;
  }

  private get address1() {
    return `id=location.address-text-input`;
  }

  private get city() {
    return `id=location.city-text-input`;
  }

  private get state() {
    return `id=location.stateProvince-select`;
  }
  private get zipCode() {
    return `id=location.postalCode-text-input`;
  }

  private get landingPage(){
    return `id=landingPagePrefix-text-input`
  }

  // private get submitButton(){
  //   return `button[type='submit']`;
  // }

  async addServiceProvider(page: Page, user: User) {
    await page.fill(this.companyName, user.getCompany());
    console.log(this.companyName, user.getCompany());
    await page.fill(this.address1, user.getAddress1());
    await page.locator("id=location.stateProvince-select").click();
    await page.getByRole("option", { name: "Ohio" }).click();
    await page.fill(this.city, user.getCity());
    await page.fill(this.zipCode, user.getZipCode());
    await page.fill(this.landingPage, user.getLandingPage());
    await page.waitForLoadState('domcontentloaded');
    const okButton = page.locator("button[type='submit']");
    await okButton.click({force: true});
  }

  async signupUsingAPI(
    request: APIRequestContext,
    user: User,
    context: BrowserContext
  ) {
    const response = await new UserApi().signup(request, user);

    const responseBody = await response.json();
    const access_token = responseBody.access_token;
    const firstName = responseBody.firstName;
    const userID = responseBody.userID;

    await context.addCookies([
      {
        name: "access_token",
        value: access_token,
        url: config.use?.baseURL,
      },
      {
        name: "firstName",
        value: firstName,
        url: config.use?.baseURL,
      },
      {
        name: "userID",
        value: userID,
        url: config.use?.baseURL,
      },
    ]);
  }
}
