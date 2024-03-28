import { base } from "@faker-js/faker";
import { Page, defineConfig } from "@playwright/test";
import { PlaywrightTestConfig } from "@playwright/test";
import { config } from "process";
import playwrightConfig from "../playwright.config";

export default class SignInPage {
  private get userName() {
    return `id=username`;
  }

  private get passWord() {
    return `id=password`;
  }

  private get signInButton() {
    return `id=kc-login`;
  }
  async load(page: Page) {
    await page.goto("/admin");
  }

  async logIn(page: Page) {
    await page.fill(this.userName, "qaauto001@petscreening.com");
    await page.fill(this.passWord, "*Br3akm3*");
    await page.click(this.signInButton);
  }
}
