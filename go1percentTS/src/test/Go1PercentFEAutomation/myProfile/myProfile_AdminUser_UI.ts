import { NightwatchTests, NightwatchBrowser } from "nightwatch";
//const Login=browser.page.login();
var userName = browser.globals.userName;
var password = browser.globals.password;
userName = 'testadmin';
password = 'testadmin';
const profilePicUploadSuccessMsg = "Profile picture updated successfully!";

describe("My Profile Page Frontend Automation", () => {
    //this.timeout(25000)
    var myProfile = browser.page.myProfile.myProfilePage();


    beforeEach(function (browser) {

        browser
            .window.maximize()
            //.maximizeWindow()
            
            .page.contribution.login()
            .navigate()
            .setValue('@emailInput', userName)
            .setValue('@passwordInput', password)
            .signIn() 
            .assert.urlContains("my-dashboard", 'URL contains my-dashboard');
        myProfile
            //.page.myProfilePage()
            .pause(1000)
            .ClickOnMyProfile()
            .pause(1000)
            .assert.urlContains("my-profile", 'URL contains my-profile')

    });
    afterEach(function (browser) {//testadmin
        browser.end();
    });

    it.only('View rewards button is present on the profile page when no reward is redeemed till now', function (browser) {

        myProfile.isVisible('@ViewRewardBtn', function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0,);
            this.assert.equal(result.value, true);
          });
            //await myProfile.element.find('@ViewRewardBtn').waitUntil('visible', {timeout: 3000, abortOnFailure: false});
          
    });

    it('Re-directed to the rewards page when he clicks on view rewards button', function (browser) {//testadmin
        myProfile
            
            //.waitForElementVisible()
            .pause(8000)
            .ClickOnRewardButton()
            .pause(4000)
            .assert.urlContains("rewards/list", 'You entered the View Rewards Page');


    });
    it('Re-directed to the rewards page and can able to edit the rewards as well', function (browser) {//testadmin
        myProfile
            
            .pause(8000)
            .ClickOnRewardButton()
            .pause(3000)
            .ClickOnRewardEditCancelBtn()
            .pause(2000)
            //.console.log("Rewards can be edit from admin user");
            

    });
    it('See view rewards list by clicking on the view rewards button', function (browser) {//testadmin
        myProfile

            .pause(8000)
            .ClickOnRewardButton()
            .pause(4000)
            .assert.urlContains("rewards/list", 'View Rewards list Page is visible');


    });
});