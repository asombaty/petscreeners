import { test } from "@playwright/test";
import User from "../models/User";
import SignInPage from "../pages/SignInPage";
import AdminDashboard from "../pages/AdminDashboardPage";
import AddServiceProviderPage from "../pages/AddServiceProviderPage";

test("should be able to add a new service provider", async ({ page }) => {
  const user = new User();
  const logInPage = new SignInPage();
  await logInPage.load(page);
  await logInPage.logIn(page);
  
  const adminPage = new AdminDashboard();
  await adminPage.addServiceProvider(page);

  const addServiceProvider = new AddServiceProviderPage();
  await addServiceProvider.addServiceProvider(page, user);
  const rowData = await adminPage.verifyServiceProviderAddress(page, user);
  console.log(rowData);
  

});
