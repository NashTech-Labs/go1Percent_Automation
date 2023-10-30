const globalsData = require('../../globals')
const sessionsPage = browser.page.knolxSessionsPage()
describe("KNolx|Sessions Page Frontend Automation", () => {
    before(function () {
        browser
            .window.maximize()
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

        // Upcoming Sessions Page
        it("Verify user should be able to see all fields in Upcoming Sessions page", () => {
            sessionsPage
                .waitForPageLoad()
                .assert.elementPresent('@allCompetency')
                .assert.elementPresent('@allSessions')
                .assert.elementPresent('@allTime')
                .assert.elementPresent('@allLocation')
        }),
        it("Verify user should be able to add session to calender through add to calender button", async function () {
            sessionsPage
                .clickOnElement('@nasher')
                .clickOnElement('@addToCalaender')
            let windowHandles = await browser.window.getAllHandles();
            browser.assert.equal(windowHandles.length, 2)
                .window.switchTo(windowHandles[1])
                .assert.urlContains('microsoft')
                .window.close()
            // switch to the main window again
            browser.window.switchTo(windowHandles[0])
            sessionsPage.clickOnElement('@closePopUp')

        }),
        it("Verify user should be able to add session to calender through bookmark button", async function (browser) {
            sessionsPage
                .waitForPageLoad()
                .clickOnElement('@bookmarkButton')
            let windowHandles = await browser.window.getAllHandles();
            browser.assert.equal(windowHandles.length, 2)
                .window.switchTo(windowHandles[1])
                .assert.urlContains('microsoft')
                .window.close()
            // switch to the main window again
            browser.window.switchTo(windowHandles[0])
        }),

        it('Filter Session using All Competency as TEST AUTOMATION COMPETENCY in Upcoming Sessions Page', () => {
            sessionsPage
                .clickOnElement('@allCompetency')
                .clickOnElement('@testAutomationCompetency')
                .assert.textEquals('@testAutomationCompetencyDashboard', globalsData.testAutomationCompetencyName)
        }),

        it('Filter Session using All Sessions as Knolx in Upcoming Sessions Page', () => {
            sessionsPage
                .clickOnElement('@allSessions')
                .clickOnElement('@knolxSessions')
                .assert.textEquals('@knolxSessionsDashboard', globalsData.badge)

        }),
        it('Verify user should be able to filter session using All Time in Upcoming Session page', () => {
            sessionsPage
                .selectDateFromCalenderUpcomingSessions()
                .assert.textEquals('@dateDashboard', globalsData.date)

        }),

        // Past Sessions Page
        it('Verify user should be able to see all fields in Past Sessions page', () => {
            sessionsPage
                .clickOnElement('@pastSessionTab')
                .assert.elementPresent('@allCompetency')
                .assert.elementPresent('@allSessions')
                .assert.elementPresent('@allTime')
                .assert.elementPresent('@allLocation')
        }),
        it('Verify user should be able to see Session details', () => {
            sessionsPage
                .clickOnElement('@pastSessionTab')
                .clickOnElement('@testingTicket')
                .assert.textContains('@sessionDescription', globalsData.sessionDescriptionInPast)
                .clickOnElement('@closePopUp')
        }),
        it('Verify user should be able to navigate to all Social Media links', async function () {
            sessionsPage
                .clickOnElement('@pastSessionTab')
                .clickOnElement('@testingTicket')
                .clickOnElement('@facebook')
            let fbwindowHandles = await browser.window.getAllHandles();
            browser.assert.equal(fbwindowHandles.length, 2)
                .window.switchTo(fbwindowHandles[1])
                .assert.urlContains('facebook')
                .window.close()
                // switch to the main window again
                .window.switchTo(fbwindowHandles[0])
            sessionsPage
                .clickOnElement('@twitter')

            let twitterWindowHandle = await browser.window.getAllHandles();
            browser.assert.equal(twitterWindowHandle.length, 2)
                .window.switchTo(twitterWindowHandle[1])
                .pause(3000)
                .assert.urlContains('twitter')
                .window.close()
                // switch to the main window again
                .window.switchTo(twitterWindowHandle[0])
            sessionsPage
                .clickOnElement('@linkedin')
            let linkedinWindowHandle = await browser.window.getAllHandles();
            browser.assert.equal(linkedinWindowHandle.length, 2)
                .window.switchTo(linkedinWindowHandle[1])
                .assert.urlContains('linkedin')
                .window.close()
                // switch to the main window again
                .window.switchTo(linkedinWindowHandle[0])
            sessionsPage.clickOnElement('@closePopUp')
        }),
        it('Filter Session using All Competency as TEST AUTOMATION COMPETENCY in Past Sessions Page', () => {
            sessionsPage
                .clickOnElement('@pastSessionTab')
                .clickOnElement('@allCompetency')
                .clickOnElement('@testAutomationCompetency')
                .assert.textEquals('@testAutomationCompetencyDashboard', globalsData.testAutomationCompetencyName)

        }),

        it('Filter Session using All Sessions as Knolx in Past Sessions Page', () => {
            sessionsPage
                .clickOnElement('@pastSessionTab')
                .clickOnElement('@allSessions')
                .clickOnElement('@knolxSessions')
                .assert.textEquals('@knolxSessionsDashboard', globalsData.badge)

        }),
        it('Verify user should be able to filter session using All Time in Past Session page', () => {
            sessionsPage
                .clickOnElement('@pastSessionTab')
                .selectDateFromCalenderPastSessions()
                .assert.textEquals('@dateDashboard', globalsData.datePastSessions)

        }),
        after(function (browser) {
            browser.end();
        })

});