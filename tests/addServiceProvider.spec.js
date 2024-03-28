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
const test_1 = require("@playwright/test");
const User_1 = __importDefault(require("../models/User"));
const SignInPage_1 = __importDefault(require("../pages/SignInPage"));
const AdminDashboardPage_1 = __importDefault(require("../pages/AdminDashboardPage"));
const AddServiceProviderPage_1 = __importDefault(require("../pages/AddServiceProviderPage"));
(0, test_1.test)("@SP should be able to add a new service provider", { tag: '@SP' }, ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User_1.default();
    const logInPage = new SignInPage_1.default();
    yield logInPage.load(page);
    yield logInPage.logIn(page);
    const adminPage = new AdminDashboardPage_1.default();
    yield adminPage.addServiceProvider(page);
    const addServiceProvider = new AddServiceProviderPage_1.default();
    yield addServiceProvider.addServiceProvider(page, user);
    const rowData = yield adminPage.verifyServiceProviderAddress(page, user);
    console.log(rowData);
    // Testing for git
}));
