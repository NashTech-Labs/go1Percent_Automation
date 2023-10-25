const globalsData = require('../../globals')
const sessionsPage = browser.page.knolxSessionsPage()
describe("KNolx|Sessions Page Frontend Automation", () => {
    beforeEach(function () {
        browser
            .maximizeWindow()
            .page.login()
            .navigate()
            .enterCredentials(browser.globals.userName, browser.globals.password)
            .signIn()
        browser.assert.urlContains("my-dashboard")
        sessionsPage
            .clickOnKnolxButton()
            .clickOnSessionsButton()
            .assert.urlContains("upcoming-sessions")
    }),
        it("Search session using Nasher as testadmin in Upcoming Sessions Page", () => {
            sessionsPage
                .searchKnolxSessions(globalsData.nasher)
                .assert.textContains('@nasher', globalsData.nasher)
        }),

        after(function (browser) {
            browser.end();
        })
});