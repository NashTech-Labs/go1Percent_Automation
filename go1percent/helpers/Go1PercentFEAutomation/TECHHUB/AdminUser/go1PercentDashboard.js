module.exports = {

    "navigate to Techhub page": function (browser) {
        browser
            .page.TECHHUB.AdminUser.dashboard()
            .Navigate_To_TechHub(browser)
        browser.assert.urlContains("tech-hub");
    }
};