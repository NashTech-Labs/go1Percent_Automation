const DataSet=require('../../globals');
const MyProfilePage = require('../../page-objects/myProfilePage');
//const Login=browser.page.login();
const myProfile = browser.page.myProfilePage();

describe("My Profile Page Frontend Automation", () => {
    before(function () {

        browser
            .pause(3000)
            //.maximizeWindow()
            .page.login()
            .navigate()
            .pause(3000)
            .enterCredentials(browser.globals.userName, browser.globals.password)
            //browser.pause(3000);
            .signIn()
            .pause(3000)
            .assert.urlContains("my-dashboard",'URL contains my-dashboard')
            .pause(30000)
            .done();
        myProfile
            //.page.myProfilePage()
            //.ClickOnSetting()
            .ClickOnMyProfile()
            .waitForPageLoad()
        
            .assert.urlContains("my-profile",'URL contains my-profile');
      
    }),
    //it('Test', () => {}),
       

        after(function (browser) {
            browser.end();
        })
});