import { NightwatchTests, NightwatchBrowser } from "nightwatch";
var userName = browser.globals.userName;
var password = browser.globals.password;
userName = 'testadmin';
password = 'testadmin';
const profilePicUploadSuccessMsg = "Profile picture updated successfully!";

describe("My Profile Page Frontend Automation", () => {
    var myProfile = browser.page.myProfile.myProfilePage();


    beforeEach(function (browser) {

        browser
            .window.maximize()            
            .page.contribution.login()
            .navigate()
            .setValue('@emailInput', userName)
            .setValue('@passwordInput', password)
            .signIn() 
            .assert.urlContains("my-dashboard", 'URL contains my-dashboard');

        myProfile
            .pause(1000)
            .ClickOnMyProfile()
            .assert.urlContains("my-profile", 'URL contains my-profile')

    });
    afterEach(function (browser) {
        browser.end();
    });

    it.only('View rewards button is present on the profile page when no reward is redeemed till now', async function (browser) {

       await myProfile.element.find('@ViewRewardBtn').waitUntil('visible', {timeout: 3000, abortOnFailure: false});
          
    });

    it('Re-directed to the rewards page when he clicks on view rewards button', function (browser) {
        myProfile
            

            .ClickOnRewardButton()
            .pause(1000)
            .assert.urlContains("rewards/list", 'You entered the View Rewards Page');


    });
    it('Re-directed to the rewards page and can able to edit the rewards as well', function (browser) {
        myProfile
            
            .waitForElementVisible('@ViewRewardBtn',3000)
            .ClickOnRewardButton()
            .ClickOnRewardEditCancelBtn()
            

    });
    it('See view rewards list by clicking on the view rewards button', function (browser) {
        myProfile

            .waitForElementVisible('@ViewRewardBtn',3000)
            .ClickOnRewardButton()
            .pause(1000)
            .assert.urlContains("rewards/list", 'View Rewards list Page is visible');


    });
});