const DataSet = require('../../globals');
//const MyProfilePage = require('../../page-objects/myProfilePage');
//const Login=browser.page.login();
const profilePicUploadSuccessMsg = ' Profile picture updated successfully! ';

describe("My Profile Page Frontend Automation", () => {
    //this.timeout(25000)
    var myProfile = browser.page.myProfilePage();


    beforeEach(function (browser) {



        browser
        .window.maximize()
            //.maximizeWindow()
            .page.login()
            .navigate()
            .pause(3000)
            .enterCredentials(browser.globals.userName, browser.globals.password)
            //browser.pause(3000);
            .signIn()
            .assert.urlContains("my-dashboard", 'URL contains my-dashboard');
        myProfile
            //.page.myProfilePage()
            .pause(1000)
            .ClickOnMyProfile()
            .pause(1000)
            .assert.urlContains("my-profile", 'URL contains my-profile')

    });
    afterEach(function (browser) {
        browser.end();
    });
    // it('View rewards button is present on the profile page when no reward is redeemed till now', function (browser) {
    //     myProfile

    // });

    // it('Re-directed to the rewards page when he clicks on view rewards button', function (browser) {
    //     myProfile


    // });
    // it('Re-directed to the rewards page and can able to edit the rewards as well', function (browser) {
    //     myProfile


    // });
    // it("No Badges Earned' message when no badges were earned to their profile", function (browser) {
    //     myProfile


    // });
    // it('View the profile picture along with the monthly rank', function (browser) {
    //     myProfile


    // });
    it('Change their profile picture by clicking on update profile page', function (browser) {
        myProfile

            .ClickOnUpdateProfilePic()
            .pause(10000)
            .assert.textContains('@ProfilePicSuccessMsg', profilePicUploadSuccessMsg)
        //.assert.visible('@ViewRewardBtn', 'Button is visible')
        //.click("//button[text()='View Rewards']") // XPath selector
        //.assert.urlContains("rewards/list",'URL contains rewards/list')
        .ViewRewardButton();

     });
    // it('Name and competency name on the profile page', function (browser) {
    //     myProfile


    // });
    // it('View the points, overall rank and monthly score on the profile page', function (browser) {
    //     myProfile


    // });
    // it('See view rewards list by clicking on the view rewards button', function (browser) {
    //     myProfile


    // });
    // it('View the reward if redeemed', function (browser) {
    //     myProfile


    // });
    // it('View all the rewards redeemed by him/her', function (browser) {
    //     myProfile


    // });
    // it('View the badges and the count in the badges section', function (browser) {
    //     myProfile


    // });
    // it('See month and score and rank by clicking on the badges', function (browser) {
    //     myProfile


    // });

    


});
