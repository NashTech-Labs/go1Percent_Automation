const globalsData = require('../../globals')
const sessionsPage = browser.page.knolxSessionsPage()
describe("KNolx|Sessions Page Frontend Automation", () => {
    before(function () {
        browser
            .maximizeWindow()
            .page.login()
            .navigate()
            .enterCredentials(browser.globals.userName, browser.globals.password)
            .signIn()
            .assert.urlContains("my-dashboard")
        sessionsPage
            .clickOnKnolxButton()
            .clickOnSessionsButton()
            .waitForPageLoad()
            .assert.urlContains("upcoming-sessions");
      
    }),
        it("Search session using Nasher as testadmin in Upcoming Sessions Page", () => {
            sessionsPage
                .searchKnolxSessions(globalsData.nasher)
                .assert.textContains('@nasher', globalsData.nasher)
        }),

        it("Search session using Session Title as TestAutomationTitle in Upcoming Sessions Page", () => {
            sessionsPage
                .waitForPageLoad()
                .searchKnolxSessions(globalsData.titleName)
                .assert.elementPresent('@title')
        }),
       

        after(function (browser) {
            browser.end();
        })
});