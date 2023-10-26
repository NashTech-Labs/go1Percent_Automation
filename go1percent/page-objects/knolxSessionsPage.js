module.exports = {
    url: "",

    elements: {
        knolxButton: {
            selector: "//*[@id='sidenav-collapse-main']//*[text()=' Knolx ']",
            locateStrategy: 'xpath'
        },
        sessionsButton: ".nav.subMenu li a[href='/knolx/upcoming-sessions']",
        searchKnolxSessions: {
            selector: "//input[@placeholder='Search a knolx session']",
            locateStrategy: 'xpath'
        },
        // Upcoming Sessions Page 
        nasher: ".text-bold",
        title: {
            selector: "(//*[contains(text(),'TestAutomationTitle')])[1]",
            locateStrategy: 'xpath'
        },

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
                .clearValue('@searchKnolxSessions')
                .sendKeys('@searchKnolxSessions', data)
                .clearValue('@searchKnolxSessions')
        },
        waitForPageLoad(){
            return this
                .waitForElementVisible('body',10000)
        },
        selectDropdown(selector, optionValue) {
            return this
              .waitForElementVisible(selector)
              .click(selector)
              .click(`option[value="${optionValue}"]`);
          },
    }]
};