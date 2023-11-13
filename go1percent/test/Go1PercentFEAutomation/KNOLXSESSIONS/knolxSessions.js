const login = browser.page.login()
const sessionsPage = browser.page.knolxSessions()
const globalsData = require('../../../globals')

describe("KNolx|Sessions Page Frontend Automation", () => {
    before(function () {
        browser
            .window.maximize()
        login
            .navigate()
            .enterCredentials(globalsData.requestData.username, globalsData.requestData.password)
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
                .clickOnNasher()
                .clickOnAddToCalenderButton()
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
                .clickOnBookMarkButton()
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
                .clickOnAllCompetencyDropdown()
                .clickOntestAutomationCompetency()
                .assert.textEquals('@testAutomationCompetencyDashboard', globalsData.testAutomationCompetencyName)
        }),

        it('Filter Session using All Sessions as Knolx in Upcoming Sessions Page', () => {
            sessionsPage
                .clickOnAllSessionsDropdown()
                .clickOnKnolxSessions()
                .assert.textEquals('@knolxSessionsDashboard', globalsData.badge)

        }),
        it('Verify user should be able to filter session using All Time in Upcoming Session page', async () => {
            const firstSessionDateBeforeFilter = await sessionsPage.getDateFromFirstSessions();

            sessionsPage.selectDateFromCalenderUpcomingSessions();

            const firstSessionDateAfterFilter = await sessionsPage.getDateFromFirstSessions();

            sessionsPage.assert.equal(firstSessionDateAfterFilter, firstSessionDateBeforeFilter, "Sessions time is equals after using filter by all time")

        }),

        // Past Sessions Page
        it('Verify user should be able to see all fields in Past Sessions page', () => {
            sessionsPage
                .clickOnPastSessionsTab()
                .assert.elementPresent('@allCompetency')
                .assert.elementPresent('@allSessions')
                .assert.elementPresent('@allTime')
                .assert.elementPresent('@allLocation')
        }),
        it('Verify user should be able to see Session details', () => {
            sessionsPage
                .clickOnPastSessionsTab()
                .clickOnTestingTicket()
                .assert.textContains('@sessionDescription', globalsData.sessionDescriptionInPast)
                .clickOnClosePopUp()
        }),
        it('Verify user should be able to navigate to all Social Media links', async function () {
            sessionsPage
                .clickOnPastSessionsTab()
                .clickOnTestingTicket()
                .clickOnFacebook()
            let fbwindowHandles = await browser.window.getAllHandles();
            browser.assert.equal(fbwindowHandles.length, 2)
                .window.switchTo(fbwindowHandles[1])
                .assert.urlContains('facebook')
                .window.close()
                // switch to the main window again
                .window.switchTo(fbwindowHandles[0])
            sessionsPage
                .clickOnTwitter()

            let twitterWindowHandle = await browser.window.getAllHandles();
            browser.assert.equal(twitterWindowHandle.length, 2)
                .window.switchTo(twitterWindowHandle[1])
                .pause(3000)
                .assert.urlContains('twitter')
                .window.close()
                // switch to the main window again
                .window.switchTo(twitterWindowHandle[0])
            sessionsPage
                .clickOnLinkedin()
            let linkedinWindowHandle = await browser.window.getAllHandles();
            browser.assert.equal(linkedinWindowHandle.length, 2)
                .window.switchTo(linkedinWindowHandle[1])
                .assert.urlContains('linkedin')
                .window.close()
                // switch to the main window again
                .window.switchTo(linkedinWindowHandle[0])
            sessionsPage.clickOnClosePopUp()
        }),
        it('Filter Session using All Competency as TEST AUTOMATION COMPETENCY in Past Sessions Page', () => {
            sessionsPage
                .clickOnPastSessionsTab()
                .clickOnAllCompetencyDropdown()
                .clickOntestAutomationCompetency()
                .assert.textEquals('@testAutomationCompetencyDashboard', globalsData.testAutomationCompetencyName)

        }),

        it('Filter Session using All Sessions as Knolx in Past Sessions Page', () => {
            sessionsPage
                .clickOnPastSessionsTab()
                .clickOnAllSessionsDropdown()
                .clickOnKnolxSessions()
                .assert.textEquals('@knolxSessionsDashboard', globalsData.badge)

        }),
        it('Verify user should be able to filter session using All Time in Past Session page', async () => {
            sessionsPage
                .clickOnPastSessionsTab()
            const firstSessionDateBeforeFilter = await sessionsPage.getDateFromFirstSessions();

            sessionsPage.selectDateFromCalenderPastSessions();

            const firstSessionDateAfterFilter = await sessionsPage.getDateFromFirstSessions();

            sessionsPage.assert.equal(firstSessionDateAfterFilter, firstSessionDateBeforeFilter, "Sessions time is equals after using filter by all time")

        }),
        after(function (browser) {
            browser.end();
        })

});