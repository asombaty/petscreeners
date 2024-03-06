import { Page, expect } from "@playwright/test";
import User from "../models/User";

export default class AdminDashboard {
  private get addServiceProviderButton() {
    return `text=Add Service Provider`;
  }

  async load(page: Page) {
    await page.goto("/en/admin/tabs/all-service-providers");
  }

  async addServiceProvider(page: Page) {
    await page.click(this.addServiceProviderButton);
  }
  async verifyNewServiceProvider(page: Page, user: User) {
    const companyName = user.getCompany();
    //const target = page.getByRole("row", { name: companyName });
    await expect(page.getByText(companyName)).toBeVisible();
    //return target.isVisible();
  }
}
