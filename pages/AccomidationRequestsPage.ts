import { Page } from "@playwright/test";

export default class AccomidationRequestsPage {
  private get pageTitle() {
    return `.text-4xl.font-semibold.mb-6`;
  }

  async load(page: Page) {
    await page.goto("https://verifications.qa.petscreening.com/en/accommodation-requests/users");
  }

  async verifyPageLoad(page: Page){

  }
  
}