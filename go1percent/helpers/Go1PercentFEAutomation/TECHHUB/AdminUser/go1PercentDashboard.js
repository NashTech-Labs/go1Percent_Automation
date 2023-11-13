module.exports = {

    "navigate to Techhub page": function (browser) {
        browser
            .page.dashboard()
            .Navigate_To_TechHub(browser)
        browser.assert.urlContains("tech-hub");
    }
};