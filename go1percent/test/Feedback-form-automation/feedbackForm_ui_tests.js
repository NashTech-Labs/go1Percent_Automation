const globals = require('../../globals')
const Homepage = browser.page.FeedbackForm.loginPage();
const feedbackFormPage = browser.page.FeedbackForm.feedbackFormSectionPage();
const formCreateUpdatePage = browser.page.FeedbackForm.formCreateUpdatePage();
const feedbackUrl = 'https://nashtechglobal.qa.go1percent.com/knolx/feedback-forms';

const sessionInUseMessage = 'The Form is currently being used in following session(s)';
const formUpdateMessage = 'Form Updated Successfully';
const deleteDialogBoxMessage = 'Are you sure want to delete this form ?';
const addNPSMessage = 'Please add a NPS question';
const addFormTitleMessage = 'Please enter a Form Title';
const addQuestionMessage = 'Question cannot be empty';
const formCreatedMessage = 'Form created successfully';
const searchQuery = 'Search Me';
const formDeletedMessage = 'Form Deleted Successfully';

const data = globals.feedbackForm.uiData;

// ----------------------------------------------------------------------
//   >> using command "npx nightwatch ./test/Feedback-form-automation/UI-tests/"
// -------------------------------------------------------------------------
describe('Feedback-form UI tests', function () {

    beforeEach(
        async function (browser) {

            Homepage
                .navigate();

            await browser.window.maximize();

            await Homepage
                .inputUsername(browser.globals.userName)
                .inputPassword(browser.globals.password)
                .login();

        });

    afterEach(function (browser) {

        browser
            .quit();

    });


    it('LB-1252 : Verify that admin should be able to see feedback form in feedback section (TC-257)',

        async function (browser) {

            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .waitForElementVisible('@heading')
                .assert.textContains('@heading', 'Feedback Forms')
                .assert.urlContains('feedback-forms');

        });


    it('LB-1253 : Verify that admin should be able to click on edit option of existing feedback forms (TC-258)',

        async function (browser) {

            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .clickOnFormEditButton()
                .waitForElementVisible('@dialogBox');

        });


    it('LB-1254 : Verify that admin should not able to edit a feedback form (TC-259) ',

        async function (browser) {

            

            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage

                .waitForElementVisible('@feedbackFormCardTitle')

                .waitForElementVisible('@feedbackFormCardEditButton')
                .click('@feedbackFormCardEditButton')

                .waitForElementVisible('@sessionDialogBox')
                .assert.textContains('@sessionDialogBox', data.sessionInUseMessage);
        });


    it('LB-1255 : Verify that admin should be able to update in feedback form in preview form mode (TC-260)',

        async function (browser) {

            

            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .clickOnFormEditButton_withNoSession();

            await formCreateUpdatePage
                .clickAddQuestion()
                .setParagaphQuestion()
                .saveUpdatedForm()
                .waitForElementVisible('@alertOfFormUpdated')
                .assert.textContains('@alertOfFormUpdated', data.formUpdateMessage);
        });



    it("LB-1256 : Verify that admin should be able to preview their feedback form. (TC-261)",
        async function (browser) {

            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .waitForElementVisible('@noSession_feedbackFormCardTitle')
                .waitForElementVisible('@noSession_feedbackFormCardEditButton')
                .click('@noSession_feedbackFormCardEditButton');

            await formCreateUpdatePage
                .waitForElementPresent('@previewButton')
                .click('@previewButton');


            await browser.window.getAllHandles(async (res) => {
                await browser.window.switchTo(res.value[1]);
            })
                .assert.visible("app-preview-form");

        });


    it('LB-1257 : Verify that admin should be able to delete existing feedback form. (TC-262) ',
        async function (browser) {

            

            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .clickOnFormDeleteButton()
                .assert.textContains('@deleteDialogBox_Message', data.deleteDialogBoxMessage);

        });


    it('LB-1258 : Verify that admin should not able to delete a feedback form (TC-263)',
        async function (browser) {

            
            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .clickOnFormDeleteButtonSession()
                .assert.textContains('@deleteDialogBox', data.sessionInUseMessage);

        });


    it('LB-1259 : Verify that admin should be able to create a new feedback form (TC-264) ',
        async function (browser) {

            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .clickOnCreateFormButton();

            await formCreateUpdatePage
                .assert.visible('@newForm');
        });


    it('LB-1260 : Verify that admin should not able to save form until they add a NPS Question (TC-265) ',
        async function (browser) {


            
            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .clickOnCreateFormButton();

            await formCreateUpdatePage
                .setFormTitle()
                .setMCQQuestion()  //can be optional
                .saveForm()
                .assertPopUpMessageContains(data.addNPSMessage)
        });


    it('LB-1261 : Verify that admin should not be able to save form without adding Form Title (TC-266)',
        async function (browser) {
            
            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .clickOnCreateFormButton();

            await formCreateUpdatePage
                .setNPSQuestion()  //can be optional
                .saveForm()
                .assertTitleValidationIsShown(data.addFormTitleMessage)
        });


    it('LB-1262 : Verify that admin should able to see validation message if they don\'t add Question in form. (TC-267)',
        async function (browser) {


            
            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .clickOnCreateFormButton();

            await formCreateUpdatePage
                .setFormTitle()
                .waitForElementVisible('@newFormQuestionTitle')
                .click('@selectQuestionTypeNPS')
                .saveForm()
                .assertQuestionValidationIsShown(data.addQuestionMessage)
        });


    it('LB-1263 : Verify that admin should be able to save form by adding all the mandatory task (TC-268)',
        async function (browser) {

            
            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .clickOnCreateFormButton();

            await formCreateUpdatePage
                .setFormTitle()
                .addNewQuestion()
                .addNewQuestion()
                .setMCQQuestion()
                .setNPSQuestion()
                .setParagraphQuestion()
                .saveForm()
                .assert.textContains('@formSavedSuccessfullyAlert', data.formCreatedMessage);
        });


    it('LB-1265 : Verify that admin should be able to search particular form from existing feedback form (TC-270)',
        async function (browser) {

            
            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .inputInSearchField(data.searchQuery)
                .pause(10000)
                .findElements('@feedbackFormCardTitle', async function (result) {


                    const key_id = Object.keys(result.value[0])[0];
                    const array = result.value;


                    await array.forEach(async function (el) {
                        await browser
                            .expect(browser.elementIdText(el[key_id]))
                            .to.eq(data.searchQuery);
                    })
                })

        });


    it('LB-1266 : Verify that admin should be able to delete form in edit mode (TC-271)',
        async function (browser) {

            
            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .clickOnFormEditButton_withNoSession();

            await formCreateUpdatePage
                .clickDeleteOnUpdateForm()
                .waitForElementVisible('@formUpdate_dialogBox')
                .assert.textContains('@formUpdate_dialogBox', data.deleteDialogBoxMessage);

        });



    it('LB-1267 : Verify that admin should be able to delete existing feedback form. (TC-272)',
        async function (browser) {
            
            await Homepage
                .goToFeedbackFormSection();

            await feedbackFormPage
                .clickOnFormDeleteButton()
                .assert.textContains('@deleteDialogBox', data.deleteDialogBoxMessage)
                .assert.textContains('@deleteDialogBox_YesButton', 'Yes')
                .assert.textContains('@deleteDialogBox_NoButton', 'No')
                .click('@deleteDialogBox_YesButton')
                .assert.textContains('@feedbackFormAlert', data.formDeletedMessage);

        });

});