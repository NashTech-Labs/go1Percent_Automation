const globalsData = require('../../globals');
const settingPage = browser.page.settingPage.settingPage();
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
 it("Verify user should be able to see all fields in Profile Details page", () => {
     settingPage
         .verifyAllFieldsVisible() //first test case
         .pause(5000)
});
it("Verify user should be able to edit all the fields in Profile Details page", () => {
    settingPage
       .verifyeditname('Test emplyeeee')
});
it("Verify user should not be able to edit any field without click change or update button ", () => {
    settingPage
       .verifyChangesNot()
       .pause(5000)
       //.verifyAlphabetsNotall()
});
it("Verify user should be able to provide only alphabets in the name field ", () => {
    settingPage
       .verifyAlphabetsNotall()
       .verifyAllGitandWordpress()
       .verifyGit('GitID')
       .verifyGitclone('https://github.com/souravmishraa') 
       .verifywordpress('wordpressnew')
});
});
