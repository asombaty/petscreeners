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
Object.defineProperty(exports, "__esModule", { value: true });
class AdminDashboard {
    get addServiceProviderButton() {
        return `text=Add Service Provider`;
    }
    load(page) {
        return __awaiter(this, void 0, void 0, function* () {
            yield page.goto("/en/admin/tabs/all-service-providers");
        });
    }
    addServiceProvider(page) {
        return __awaiter(this, void 0, void 0, function* () {
            yield page.click(this.addServiceProviderButton);
        });
    }
    verifyServiceProviderAddress(page, user) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return __awaiter(this, void 0, void 0, function* () {
            const valueToMatch = user.getCompany();
            const row = page.getByRole("row", { name: valueToMatch });
            const addressString = yield row.textContent();
            const fullAddress = addressString
                ? (_b = (_a = addressString.match(/^(\w+)\s+(\w+)\s+/)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : ""
                : "";
            console.log(fullAddress);
            // Use regex to separate the components of the address
            const companyName = addressString
                ? (_d = (_c = addressString.match(/^(.*?)\d+\s+/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : ""
                : "";
            const streetNumber = addressString
                ? (_f = (_e = addressString.match(/(.*?)\d+\s+/)) === null || _e === void 0 ? void 0 : _e[0]) !== null && _f !== void 0 ? _f : ""
                : "";
            const streetName = addressString
                ? (_h = (_g = addressString.match(/(.*?)\d+\s+/)) === null || _g === void 0 ? void 0 : _g[1]) !== null && _h !== void 0 ? _h : ""
                : "";
            const city = addressString
                ? (_k = (_j = addressString.match(/(.*)\d{5}$/)) === null || _j === void 0 ? void 0 : _j[2]) !== null && _k !== void 0 ? _k : ""
                : "";
            const state = addressString
                ? (_m = (_l = addressString.match(/[A-Z]{2}/)) === null || _l === void 0 ? void 0 : _l[3]) !== null && _m !== void 0 ? _m : ""
                : "";
            const zipCode = addressString
                ? (_p = (_o = addressString.match(/[0-9]+$/)) === null || _o === void 0 ? void 0 : _o[4]) !== null && _p !== void 0 ? _p : ""
                : "";
            // Combine the components into a structured address
            const parsedAddress = {
                companyName,
                streetNumber,
                streetName,
                city,
                state,
                zipCode,
            };
            console.log(parsedAddress);
        });
    }
}
exports.default = AdminDashboard;
