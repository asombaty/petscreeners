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

  //   async verifyNewServiceProvider(page: Page, user: User) {
  //     const valueToMatch = user.getCompany();
  //     const row = page.getByRole("row", { name: valueToMatch });
  //     const addressString = await row.textContent();
  //     console.log(addressString);

  //     //const parseAddress: string = addressString ? addressString.match(/^(\w+)\s(\w+)\s(\w+)\s(\d{5})\s(.+)([A-Z]{2})(\d{5})$/)?.[0] ?? '' : '';
  //     const parseAddress: string = addressString ? addressString.match(/^(\w+)\s+(\d+)\s+(\w+)\s+(\w+)\s+(\W{2})(\d{5})$/)?.[0] ?? '' : '';
  //     console.log(parseAddress);

  // }
  async verifyServiceProviderAddress(page: Page, user: User) {
    const valueToMatch = user.getCompany();
    const row = page.getByRole("row", { name: valueToMatch });
    const addressString = await row.textContent();
    const fullAddress: string = addressString
      ? addressString.match(/^(\w+)\s+(\w+)\s+/)?.[0] ?? ""
      : "";
    console.log(fullAddress);

    interface Address {
      companyName: string;
      streetNumber: string;
      streetName: string;
      city: string;
      state: string;
      zipCode: string;
    }

    // Use regex to separate the components of the address
    const companyName: string = addressString
      ? addressString.match(/^(.*?)\d+\s+/)?.[1] ?? ""
      : "";
    const streetNumber: string = addressString
      ? addressString.match(/(.*?)\d+\s+/)?.[0] ?? ""
      : "";
    const streetName: string = addressString
      ? addressString.match(/(.*?)\d+\s+/)?.[1] ?? ""
      : "";
    const city: string = addressString
      ? addressString.match(/(.*)\d{5}$/)?.[2] ?? ""
      : "";
    const state: string = addressString
      ? addressString.match(/[A-Z]{2}/)?.[3] ?? ""
      : "";
    const zipCode: string = addressString
      ? addressString.match(/[0-9]+$/)?.[4] ?? ""
      : "";

    // Combine the components into a structured address
    const parsedAddress: Address = {
      companyName,
      streetNumber,
      streetName,
      city,
      state,
      zipCode,
    };

    console.log(parsedAddress);
  }
}
