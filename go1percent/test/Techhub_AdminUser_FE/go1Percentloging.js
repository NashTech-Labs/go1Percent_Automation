module.exports = {
    beforeEach: function(browser) {
        browser
            .maximizeWindow()
            .page.login()
            .navigate()
            .enterCredentials(browser.globals.admin.userName, browser.globals.admin.password)
            .signIn()
       // browser.pause(30000)
    },
    after: function(browser) {
        browser.end();
    },
    "landing on dashboard page": function(browser) {
        browser.assert.urlContains("my-dashboard");
    }
};