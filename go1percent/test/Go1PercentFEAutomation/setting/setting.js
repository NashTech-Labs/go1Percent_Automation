const globalsData = require('../../../globals');
const settingPage = browser.page.settingPage.settingPage();
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
});
it("Verify user should be able to see all fields in Profile Details page", () => {
     settingPage
         .verifyAllFieldsVisible() 
         
         
});
it("Verify user should be able to edit all the fields in Profile Details page", () => {
    settingPage
       .verifyeditname('Test emplyeeee')
});
it("Verify user should not be able to edit any field without click change or update button ", () => {
    settingPage
       .verifyChangesNot() 
});
it("Verify user should be able to provide only alphabets in the name field ", () => {
    settingPage
       .verifyAlphabetsNotall()
});
it("Verify user cannot not leave Github id and Wordpress id field blank ", () => {
    settingPage
    .verifyAllGitandWordpress()
    
});
it("Verify user should provide valid Github id ", () => {
    settingPage
    .verifyGit('GitID')
});
it("Verify user should not be able to provide other users Github id  ", () => {
    settingPage
    .verifyGitclone('https://github.com/souravmishraa') 
});
it("Verify user should provide valid Wordpress id   ", () => {
    settingPage
    .verifywordpress('wordpressnew')
});
it("Verify user should be able to select any Competency   ", () => {
    settingPage 
    .verifyCompetencySelection()
});
it("Verify user should be able to select any component from Practice   ", () => {
    settingPage
      .verifyPracticeSelection()
  
});
it("Verify user should be able to update skills    ", () => {
    settingPage
      .verifyskill('Selenium')
});
it("Verify user should not be able to enter same skill more than one time    ", () => {
    settingPage
     .verifySkillcopy('Selenium')
});
it("Verify user should be able to remove skills     ", () => {
    settingPage
     .verifyremoveskill()
});
it("Verify that user should be able to update location     ", () => {
    settingPage
    .verifyLocation()
});

it("verify that user should be able to select any component from location     ", () => {
    settingPage
    .verifylocinlist()
});

it("verify that user cannot leave location field empty     ", () => {
    settingPage
    .verifylocblank()
});
it("verify that user should not be able to add white space before or after the name in the name filed      ", () => {
    settingPage
    .verifynamecantblank()
});
it("verify that user should not be able to add special characters in the name in the name filed      ", () => {
    settingPage
    .verifynamewithspecialchar()
});
it("verify that user cannot leave Full name field empty      ", () => {
    settingPage
    .verifynamewithblankvalue()
});
it("verify that user cannot leave Full name field empty      ", () => {
    settingPage
    .verifywordpressclone('dummy8e296154-7caf-4ca5-a1d5-3f4f19a2cdca') 
});
});
