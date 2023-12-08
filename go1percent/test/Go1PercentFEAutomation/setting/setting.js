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
            .assert.urlContains("my-dashboard")
            settingPage
            .clickOnProfileSetting()
            .clickOnClickonProfile()
            .clickOnClickonSetting()
    });
it("should navigate to the dashboard", () => {
        settingPage
        .clickOn()       
});
it.only("Verify user should be able to see all fields in Profile Details page", () => {
     settingPage
    .assert.elementPresent('@editclickname')
    .assert.elementPresent('@updategithubid')
    .assert.elementPresent('@updatewordpress')
    .assert.elementPresent('@changepractice')
    .assert.elementPresent('@updatelocation')
    .assert.elementPresent('@changecompetency')
    .assert.elementPresent('@addskill')

});
it("Verify user should be able to edit all the fields in Profile Details page", () => {
    settingPage
    .clickOnEditClickName()
    .clickOnUpdateGitHubId()
    .clickOnUpdateWordPress()
    .clickOnChangePractice()
    .clickOnUpdateLocation()
    .clickOnChangeCompetency()
    .clickOnAddSkill() 
});
it("Verify user should not be able to edit any field without click change or update button ", () => {
    settingPage
       .verifyChangesNot() 
});
it("Verify user should be able to provide only alphabets in the name field ", () => {
    settingPage
      .clickOnEditClickName()
      .verifyAlphabetsNotall()
      .assert.containsText('@errormsg', 'Name can only contain alphabets')
});
it("Verify user cannot not leave Github id and Wordpress id field blank ", () => {
    settingPage
   .clickOnUpdateGitHubId()
   .verifyAllGitandWordpress()
   .waitForElementVisible('@errormsggit', 10000)
   .assert.containsText('@errormsggit', 'GitHub Id cannot contain whitespaces'.trim())  
});
it("Verify user should provide valid Github id ", () => {
    settingPage
    .clickOnUpdateGitHubId()
    .verifyGit('GitID')
    .waitForElementVisible('@updatemsggr', 10000)
    .assert.containsText('@updatemsggr',' Profile updated successfully!'.trim())  
});
it("Verify user should not be able to provide other users Github id  ", () => {
    settingPage
    .clickOnUpdateGitHubId()
    .verifyGitClone('https://github.com/souravmishraa') 
    .waitForElementVisible('@copyidgit', 10000)
    .assert.containsText('@copyidgit','  Cannot update provided github id , as it already belongs to other user '.trim())
});
it("Verify user should provide valid Wordpress id   ", () => {
    settingPage
    .clickOnUpdateGitHubId()
    .verifyWordPress('wordpressid')
    .waitForElementVisible('@grforwordpress', 10000)
    .assert.containsText('@grforwordpress','  Profile updated successfully! '.trim())
});
it("Verify user should be able to select any Competency   ", () => {
    settingPage 
    .clickOnChangeCompetency()
    .verifyCompetencySelection()
    .waitForElementVisible('@gecomency', 10000)
    .assert.containsText('@gecomency','  Profile updated successfully! '.trim())
});
it("Verify user should be able to select any component from Practice   ", () => {
    settingPage
    .clickOnChangePractice()
    .verifyPracticeSelection()
    .waitForElementVisible('@grpract', 10000)
    .assert.containsText('@grpract','  Successfully Updated Practice Area '.trim())
  
});
it("Verify user should be able to update skills    ", () => {
    settingPage
      .clickOnAddSkill()
      .verifySkill('Selenium1')
      .waitForElementVisible('@upgrskill', 10000)
      .assert.containsText('@upgrskill','Successfully Updated'.trim())
});
it("Verify user should not be able to enter same skill more than one time    ", () => {
    settingPage
    .clickOnAddSkill()
    .verifySkillcopy('Selenium1')
    .waitForElementVisible('@skilladdednot', 15000)
    .assert.containsText('@skilladdednot','Skill already added'.trim())
});
it("Verify user should be able to remove skills     ", () => {
    settingPage
     .verifyRemoveSkill()
     .waitForElementVisible('@grskillnot', 15000)
     .assert.containsText('@grskillnot','Successfully Updated'.trim())
});
it("Verify that user should be able to update location     ", () => {
    settingPage
    .clickOnUpdateLocation()
    .verifyLocation()
    .waitForElementVisible('@grlocation', 15000)
     .assert.containsText('@grlocation','Profile updated successfully!'.trim())
});

it("verify that user should be able to select any component from location     ", () => {
    settingPage
    .clickOnUpdateLocation()
    .verifyLocinList()
    
});

it("verify that user cannot leave location field empty     ", () => {
    settingPage
    .clickOnUpdateLocation()
    .verifyLocBlank()
    
});
it("verify that user should not be able to add white space before or after the name in the name filed      ", () => {
    settingPage
    .clickOnEditClickName()
     .verifyWhiteSpace()
     .waitForElementVisible('@errormsg', 5000)
     .assert.containsText('@errormsg', 'Name can not contain whitespaces'.trim())  
});
it("verify that user should not be able to add special characters in the name in the name filed      ", () => {
    settingPage
    .clickOnEditClickName()
    .verifyNameWithSpecialChar()
    .waitForElementVisible('@errorspe', 5000)
    .assert.containsText('@errorspe', 'Name can only contain alphabets'.trim()) 
});
it("verify that user cannot leave Full name field empty      ", () => {
    settingPage
    .clickOnEditClickName()
    .verifyNameWithBlankValue(" ")
    .waitForElementVisible('@errormsg', 5000)
    .assert.containsText('@errormsg', ' Name can not contain whitespaces'.trim()) 
    
});
 it("Verify user should not be able to provide other users Wordpress Id      ", () => {
    settingPage
    .clickOnUpdateWordPress()
     .verifyWordPressClone('souravmishra538826d744') 
     .waitForElementVisible('@updatenotwordpr', 5000)
    .assert.containsText('@updatenotwordpr', ' Cannot update provided word_press Id, as it already belongs to other user'.trim()) 

 });
});
