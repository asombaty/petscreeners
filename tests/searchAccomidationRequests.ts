import { test } from "@playwright/test";
import User from "../models/User";
import SignInPage from "../pages/SignInPage";
import AdminDashboard from "../pages/AdminDashboardPage";
import AddServiceProviderPage from "../pages/AddServiceProviderPage";
import AccomidationRequestsPage from "../pages/AccomidationRequestsPage";



test("should be able to add a new service provider", {tag: '@AA'}, async ({ page }) => {
  const user = new User();
  const logInPage = new SignInPage();
  await logInPage.load(page);
  await logInPage.logIn(page);

  const adminPage = new AccomidationRequestsPage();
  await adminPage.addServiceProvider(page);


});