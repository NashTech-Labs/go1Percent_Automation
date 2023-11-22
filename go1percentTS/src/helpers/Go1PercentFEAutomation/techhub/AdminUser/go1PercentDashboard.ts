import { NightwatchTests, NightwatchBrowser } from "nightwatch";
import { DashboardPage } from '../../../../page-objects/techhub/AdminUser/dashboard';
module.exports = {

    "navigate to Techhub page": function (browser:NightwatchBrowser) {
        browser
            .page.techhub.AdminUser.dashboard()
            .Navigate_To_TechHub(browser)
        browser.assert.urlContains("tech-hub");
    }
};