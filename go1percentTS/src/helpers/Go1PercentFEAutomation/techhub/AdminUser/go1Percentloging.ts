import { NightwatchTests, NightwatchBrowser } from "nightwatch";
import { LoginPage } from '../../../../page-objects/techhub/AdminUser/login';
describe('Go1percent loging', () => {

    beforeEach((browser: NightwatchBrowser)=> {
        browser
            .maximizeWindow()
            .page.techhub.AdminUser.login()
            .navigate("https://nashtechglobal.qa.go1percent.com/")
            .enterCredentials(browser.globals.adminUserName, browser.globals.adminPassword)
            .signIn()
        //browser.pause(30000)
    }),
    after((browser: NightwatchBrowser)=> {
        browser.end();
    }),

    it("landing on dashboard page",(browser: NightwatchBrowser)=> {
        browser.assert.urlContains("my-dashboard");
    })
});