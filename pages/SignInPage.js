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
class SignInPage {
    get userName() {
        return `id=username`;
    }
    get passWord() {
        return `id=password`;
    }
    get signInButton() {
        return `id=kc-login`;
    }
    load(page) {
        return __awaiter(this, void 0, void 0, function* () {
            yield page.goto("/admin");
        });
    }
    logIn(page) {
        return __awaiter(this, void 0, void 0, function* () {
            yield page.fill(this.userName, "qaauto001@petscreening.com");
            yield page.fill(this.passWord, "*Br3akm3*");
            yield page.click(this.signInButton);
        });
    }
}
exports.default = SignInPage;
