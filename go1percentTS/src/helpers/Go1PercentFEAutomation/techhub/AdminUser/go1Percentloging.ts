import { NightwatchTests, NightwatchBrowser } from "nightwatch";
import { LoginPage } from '../../../../page-objects/techhub/AdminUser/login';
module.exports = {
    beforeEach: function(browser: NightwatchBrowser) {
        browser
            .maximizeWindow()
            .page.techhub.AdminUser.login()
            .navigate("https://nashtechglobal.qa.go1percent.com/")
            .enterCredentials(browser.globals.adminUserName, browser.globals.adminPassword)
            .signIn()
        //browser.pause(30000)
    },
    after: function(browser: NightwatchBrowser) {
        browser.end();
    },
    "landing on dashboard page": function(browser: NightwatchBrowser) {
        browser.assert.urlContains("my-dashboard");
    }
};