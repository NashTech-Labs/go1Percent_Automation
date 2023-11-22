import { NightwatchTests, NightwatchBrowser } from "nightwatch";
import { DashboardPage } from '../../../../page-objects/techhub/AdminUser/dashboard';

describe('Go1percent ', () => {

    it("navigate to Techhub page", (browser:NightwatchBrowser)=> {
        browser
            .page.techhub.AdminUser.dashboard()
            .Navigate_To_TechHub(browser)
        browser.assert.urlContains("tech-hub");
    })
});