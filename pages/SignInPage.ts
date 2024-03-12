import { Page } from "@playwright/test";

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
