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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//const MyProfilePage = require('../../page-objects/myProfilePage');
//const Login=browser.page.login();
var userName = browser.globals.userName;
var password = browser.globals.password;
userName = 'testadmin';
password = 'testadmin';
var profilePicUploadSuccessMsg = "Profile picture updated successfully!";
describe("My Profile Page Frontend Automation", function () {
    //this.timeout(25000)
    var myProfile = browser.page.myProfile.myProfilePage();
    beforeEach(function (browser) {
        browser
            .window.maximize()
            //.maximizeWindow()
            .page.login()
            .navigate()
            .pause(3000)
            .enterCredentials(userName, password)
            //browser.pause(3000);
            .signIn()
            .assert.urlContains("my-dashboard", 'URL contains my-dashboard');
        myProfile
            //.page.myProfilePage()
            .pause(1000)
            .ClickOnMyProfile()
            .pause(1000)
            .assert.urlContains("my-profile", 'URL contains my-profile');
    });
    afterEach(function (browser) {
        browser.end();
    });
    it('View rewards button is present on the profile page when no reward is redeemed till now', function (browser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, myProfile.element.find('@ViewRewardBtn').waitUntil('visible', { timeout: 3000, abortOnFailure: false })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Re-directed to the rewards page when he clicks on view rewards button', function (browser) {
        myProfile
            //.waitForElementVisible()
            .pause(8000)
            .ClickOnRewardButton()
            .pause(4000)
            .assert.urlContains("rewards/list", 'You entered the View Rewards Page');
    });
    it('Re-directed to the rewards page and can able to edit the rewards as well', function (browser) {
        myProfile
            .pause(8000)
            .ClickOnRewardButton()
            .pause(3000)
            .ClickOnRewardEditCancelBtn()
            .pause(2000);
        //.console.log("Rewards can be edit from admin user");
    });
    it('See view rewards list by clicking on the view rewards button', function (browser) {
        myProfile
            .pause(8000)
            .ClickOnRewardButton()
            .pause(4000)
            .assert.urlContains("rewards/list", 'View Rewards list Page is visible');
    });
});
