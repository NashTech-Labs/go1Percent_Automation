const { pause } = require('webdriverio/build/commands/browser');
const globalsData = require('../../globals');
const Myactivityui = browser.page.Myactivityui();
//const settingPage = require('../../page-objects/settingPage.js');
describe("KNolx|Settingbutton", () => {
    before(async function () {
        browser
            .maximizeWindow()
            .page.login()
            .navigate()
            .enterCredentials(browser.globals.userName, browser.globals.password)
            .signIn()
    });
    it("should navigate to the dashboard", () => {
        settingPage
        .clickOn()
        .pause(2000)
});
it("Verify user should be able to see the all the activities on the My activity", () => {
    settingPage
    .clickOn()
    .pause(2000)
});
it(' Verify user should be able to see the all the activities on the My activity', function (browser) {
Myactivityui
.waitForElementVisible('@MyActivity', 5000)
.assert.elementPresent('@MyActivity', 'My activity is present')
.assert.elementPresent('@MyContribution', 'Monthly point exist');
});
it(' Verify appropriate points should be added according to the contribution', function (browser) {
Myactivityui
.waitForElementVisible('@ContributionPoints', 7000)
.ContributionPoints()
.waitForElementVisible('@ContributionPoints', 7000)
.expect('@ContributionPoints').to.be.eq(profilePicUploadSuccessMsg)
.pause(2000);
});
it('Verify that the user can able to see the time the activity was done on all Activity', function (browser) {
Myactivityui
.waitForElementVisible('@time', 7000)
.assert.elementPresent('@time', 'time Visible')
.assert.elementPresent('@points', 'points Visible');
});
it.only('Verify that the user can able to scroll down and see all the activities', function (browser) {
Myactivityui
.pause(3000)
.assert.elementPresent('@Point', 'User Point Visible')
.scrollToElement('@Point ')
.pause(2000) 
});
it('Verify user should see Add a contribution button when no contribution has been added by the user', function (browser) {
Myactivityui
.waitForElementVisible('@contribution', 10000)
.assert.elementPresent('@contribution', 'contribution shown')
.assert.elementPresent('@contribution', 'contribution by the user');
});
it('Verify that user can view the current months score and the division of contributions', function (browser) {
Myactivityui
.waitForElementVisible('@Pointscontri', 10000)
.assert.elementPresent('@Pointscontri', 'All redeemed reward for the user displyed')
.assert.elementPresent('@Contributions', 'Contributions for the user');
});
it.only(' Verify that user can open all the contributions drop down and read the title', function (browser) {
Myactivityui
.ClickOnBadge(Pointscontri)
.ClickOnBadge(Alltime)
,pause(2000)
});
it('When i click on any of the contribution in circle', function (browser) {
Myactivityui
.waitForElementVisible('@Badge', 10000)
.ClickOnBadge(ContributionCircle)
,pause(2000)
.assert.elementPresent('@Contributions', 'Contributions for the user');
});
it('Verify that user is able to change the month which changes the chart and the contribution accordingly', function (browser) {
Myactivityui
.waitForElementVisible('@Month', 10000)
.ClickOnBadge(Month)
,pause (2000)
.ClickOnBadge(Octobermonth)
.assert.elementPresent('@Octobermonth', 'Contributions for the month');
});
it('Verify when the user hovers on the chart the contribution name should be displayed and the partition should be highlighted.', function (browser) {
 Myactivityui
.waitForElementVisible('@Month', 10000)
.ClickOnBadge(Month)
,pause(2000)
.ClickOnBadge(Octobermonth)
.assert.elementPresent('@Octobermonth', 'Contributions for the month');
 });

});


