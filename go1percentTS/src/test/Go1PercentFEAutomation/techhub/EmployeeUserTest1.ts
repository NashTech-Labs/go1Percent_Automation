import { NightwatchTests, NightwatchBrowser } from 'nightwatch';
import { TechHubPage } from '../../../page-objects/techhub/EmployeeUser/techHubPage';

const techHubTest: NightwatchTests = {

    // perform login ang go in TechHub Page through the profile
    beforeEach: (browser: NightwatchBrowser) => {
        browser
            .window.maximize()
            .page.techhub.EmployeeUser.techHubPage()
            .navigate()
            .enterCredentials()
            .signIn()
            .elementClick('@settings')
            .elementClick('@profile')
            .pause(5000)
            .elementClick('@techHub')
    },

    //check all techHubs button , pending button, request/Repo branch button and search bar are displayed
    'verify all the fields in techhub page': (browser: NightwatchBrowser) => {
        var fields = browser.page.techhub.EmployeeUser.techHubPage();
        fields
            .displayAllTechHub()
            .assert.textContains('@allTechHubs', 'All TechHubs')
            .displayPendingpage()
            .assert.textContains('@pending', 'Pending')
            .displayTemplatePage()
            .isVisible('@requestRepoBranch')
            .assert.textContains('@requestRepoBranch', 'Request A Repo/Branch')
            .isVisible('@searchBar')
            .end()
    },

    //Disable submit button without filling mandatory fields
    'Verify user should not be able to Request a Repo or Branch without filling mandatory field' : (browser: NightwatchBrowser) => {
        var submitButtonDisable = browser.page.techhub.EmployeeUser.techHubPage();
        submitButtonDisable
            .disableSubmitButtonInRequestRepo()
            .assert.attributeEquals('@submitButton','disabled', 'true')
            .end()
    },

    //able to see required characters and repo name error
    'Verify user should be able to see the minimum 15 characters required error': (browser: NightwatchBrowser) => {
        var repoNameError = browser.page.techhub.EmployeeUser.techHubPage();
        repoNameError
            .requiredNameInRepo()
            .assert.textContains('@errorMessage','Repo name is Required')
            .requiredCharactersInRepo()
            .assert.textContains('@errorMessage','Minimum 15 characters required !')
            .end()
    },

    //able to see the required technology error
    'Verify user should be able to see the Technology is required error': (browser: NightwatchBrowser) => {
        var technologyError = browser.page.techhub.EmployeeUser.techHubPage();
        technologyError
        .technologyRequiredError()
        .assert.textContains('@errorMessage','Technology is Required')
        .end()
    },

    //able to submit Request Repo branch successfully with filled all mandatory fields
    'Verify user should be able to Request a Repo or Branch successfully' : (browser : NightwatchBrowser) => {
        var enableSubmitButton = browser.page.techhub.EmployeeUser.techHubPage();
        enableSubmitButton
        .requestRepoBranchSubmission()
        .assert.textContains("@submissionPopupAlert", 'Submitted Successfully')
        .end()
    },

    //able to submit new branch from existing repo
    'Verify user should be able to Request a Repo or Branch and New Branch from existing repo' : (browser: NightwatchBrowser) => {
        var checkBox = browser.page.techhub.EmployeeUser.techHubPage();
        checkBox
        .newBranchFromExistingRepo()
        .execute(function () {
            document.querySelector('input[formcontrolname="isNewBranch"]')?.scrollIntoView()
        })
        .click('input[formcontrolname="isNewBranch"]')
        .enableSubmitButton()
        .assert.textContains("@submissionPopupAlert", 'Submitted Successfully')
        .end()
    },

    // able to click cancel button 
    'Verify user should be able to click cancel button on Request Repo or Branch page': (browser: NightwatchBrowser) => {
        var cancelButton = browser.page.techhub.EmployeeUser.techHubPage();
        cancelButton
        .clickCancelButton()
        .end()
    },

    //submit button disable without filling mandatory fields in draft template
    'Verify user should not be able to submit the draft without filling mandatory fields': (browser: NightwatchBrowser) => {
        var draftFields = browser.page.techhub.EmployeeUser.techHubPage();
        draftFields
        .draftAndPendingButton()
        .draftSubmitButtonDisable()
        .assert.attributeEquals('@submitButton', 'disabled', 'true')
        .end()
    },

    //able to see required characters error for title and caption
    'Verify user should be able to see minimum requirement error messages for Title, Caption': (browser: NightwatchBrowser) => {
        var titleCaptionErrorMessage = browser.page.techhub.EmployeeUser.techHubPage();
        titleCaptionErrorMessage
        .draftAndPendingButton()
        .requiredCharactersForDescription()
        .assert.textContains('@draftDescriptionBoxErrormessage', 'Minimum 100 characters required !')
        .requirementCharactersForTitle()
        .assert.textContains('@titleCharactersError', 'Minimum 15 characters required !')
        .requiredCharactersForCaption()
        .assert.textContains('@titleCharactersError', 'Minimum 15 characters required !')
        .end()
    },

    //blank field error messages for all the fields in draft template
    'Verify user should be able to see blank fields error messages': (browser: NightwatchBrowser) => {
        var blankFields = browser.page.techhub.EmployeeUser.techHubPage();
        blankFields
            .draftAndPendingButton()
            .requiredTitle()
            .assert.textContains('@errorMessage', 'Title is Required')
            .requiredCaption()
            .assert.textContains('@captionRequiredErrorMessage', 'Caption is Required')
            .execute(function() {
                document.querySelector('textarea[formcontrolname="description"]')?.scrollIntoView();
            })
            .requiredDescription()
            .assert.textContains('@descriptionBlankFieldError', 'Description is Required')
            .requiredBranchName()
            .assert.textContains("@branchBlankFieldErrorMessage", 'Branch Name is Required')
            .requiredTags()
            .assert.textContains('@tagsBlankFieldErrorMessage', 'Tags is Required')
            .requiredCategory()
            .assert.textContains('@categoryRequiredErrorMessage', 'Category is Required')
            .requiredBaseLanguage()
            .assert.textContains('@baselanguageRequiredErrorMessage', 'Base Language is Required')
            .end()
    },

    //error messages for required category and language
    'Verify user should be able to see Category and Language is required error message':(browser: NightwatchBrowser) => {
        var categoryAndLanguageError = browser.page.techhub.EmployeeUser.techHubPage();
        categoryAndLanguageError
        .draftAndPendingButton()
        .execute(function () {
            document.querySelector('select[id="category"]')?.scrollIntoView();
        })
        .requiredCategoryAndLanguage()
        .assert.textContains('@categoryRequiredErrorMessage', 'Category is Required')
        .assert.textContains('@baselanguageRequiredErrorMessage', 'Base Language is Required')
        .end()
    },

    //enable submit button with filled mandatory fields in draft template
    'Verify user should be able to submit the draft by filling mandatory fields only': (browser: NightwatchBrowser) => {
        var fields = browser.page.techhub.EmployeeUser.techHubPage();
        fields
            .draftAndPendingButton()
            .setBranchValue()
            .setTagsValue()
            .setCategoryValue()
            .setBaseLanguageValue()
            .setTitleValue()
            .setCaptionValue()
            .setDescriptionValue()
            .pause(5000)
            .enableSubmitButton()
            .assert.textContains("@submissionPopupAlert", 'Template successfully submitted, please wait for your studio head to review it.')
            .end()
    },

    // enable submit button with filling all the fields in draft template
    'Verify user should be able to submit the draft by filling all fields ' : (browser: NightwatchBrowser) => {
        var allFields = browser.page.techhub.EmployeeUser.techHubPage();
        allFields
        .waitForElementVisible('@pendingButton', 10000)
        .draftAndPendingButton()
        .setBranchValue()
        .setTagsValue()
        .setCategoryValue()
        .setBaseLanguageValue()
        .setOtherLanguageValue()
        .setBlogUrlValue()
        .setTitleValue()
        .setCaptionValue()
        .setDescriptionValue()
        .pause(5000)
        .enableSubmitButton()
        .assert.textContains("@submissionPopupAlert", 'Template successfully submitted, please wait for your studio head to review it.')
        .end()
    }
};

export default techHubTest;