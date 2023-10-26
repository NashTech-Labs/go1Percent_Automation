module.exports = {
    url: "",

    elements: {
        knolxButton: {
            selector: "//*[@id='sidenav-collapse-main']/ul/li//h6[text()=' Knolx ']",
            locateStrategy: 'xpath'
        },
        sessionsButton: ".nav.subMenu li a[href='/knolx/upcoming-sessions']",
        searchKnolxSessions: {
            selector: "//input[@placeholder='Search a knolx session']",
            locateStrategy: 'xpath'
        },
        // Upcoming Sessions Page 
        nasher: ".text-bold",

    },
    commands: [{
        clickOnKnolxButton() {
            return this
                .waitForElementVisible('@knolxButton', 5000)
                .click("@knolxButton")
        },
        clickOnSessionsButton() {
            return this
                .waitForElementVisible('@sessionsButton', 5000)
                .click('@sessionsButton')
        },
        // Upcoming Sessions Page 
        searchKnolxSessions(data) {
            return this
                .waitForElementVisible('@searchKnolxSessions', 15000)
                .sendKeys('@searchKnolxSessions', data)
        },
    }]
};