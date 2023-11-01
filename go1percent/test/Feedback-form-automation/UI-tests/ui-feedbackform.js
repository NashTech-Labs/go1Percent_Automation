const globals = require('../../../globals')
// ----------------------------------------------------------------------
//   >> using command "npx nightwatch ./test/Feedback-form-automation/UI-tests/"
// -------------------------------------------------------------------------
describe('Feedback-form UI tests', function () {
    const Homepage = browser.page.po_feedback_form.navbar();
    const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();
    const createNewForm_page = browser.page.po_feedback_form.create_new_form_page();




    beforeEach(
        async function (browser) {
            const Homepage = browser.page.po_feedback_form.navbar();
            const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();
            const createNewForm_page = browser.page.po_feedback_form.create_new_form_page();

            Homepage
                .navigate();
            browser.window.maximize()
            Homepage
                .inputUsername('testadmin')
                .inputPassword('testadmin')
                .loginAndMaximizeWindow()


            // browser.window.maximize()

        });

    afterEach(function (browser) {

        browser
            .quit();

    });


    it.only('LB-1252 : Verify that admin should be able to see feedback form in feedback section (TC-257)',

        async function (browser) {

            await Homepage
                .goToFeedbackFormSection()
            await FeedbackForm_page
                .waitForElementVisible('@heading')
                .assert.textContains('@heading', 'Feedback Forms');
        });


    it('LB-1253 : Verify that admin should be able to click on edit option of existing feedback forms (TC-258)',

        async function (browser) {

            await Homepage
                .goToFeedbackFormSection()

            await FeedbackForm_page
                .clickOnFormEditButton_withNoSession();

            await createNewForm_page
                .waitForElementVisible('@formUpdate');
        });


    it('LB-1254 : Verify that admin should not able to edit a feedback form (TC-259) ',

        async function (browser) {

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page

                .waitForElementVisible('@feedbackFormCardTitle')

                .waitForElementVisible('@feedbackFormCardEditButton')
                .click('@feedbackFormCardEditButton')

                .waitForElementVisible('@sessionDialogBox')
                .assert.textContains('@sessionDialogBox', "The Form is currently being used in following session(s)")
        });


    it('LB-1255 : Verify that admin should be able to update in feedback form in preview form mode (TC-260)',

        async function (browser) {

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .waitForElementVisible('@noSession_feedbackFormCardTitle')

                .waitForElementVisible('@noSession_feedbackFormCardEditButton')
                .click('@noSession_feedbackFormCardEditButton')

            //clicking add question button
            await browser
                .waitForElementVisible('app-update-feedback-form div[formarrayname="feedbackQuestions"] button')
                .click('app-update-feedback-form div[formarrayname="feedbackQuestions"] button')

                .waitForElementVisible('app-update-feedback-form [class="card p-5"] form')
                .sendKeys('app-update-feedback-form [class="card p-5"] form input[formcontrolname="questionTitle"]', "New Question id Added")  //question title

                .click('app-update-feedback-form [class="card p-5"] form select[name="questionType"] option[value="COMMENT"]')  //select question type
                .click('app-update-feedback-form [class="card p-5"]  div[class="feedback row"] button:nth-of-type(1)')

                .waitForElementVisible('div[role="alert"]')
                .assert.textContains('div[role="alert"]', 'Form Updated Successfully')
        });



    it("LB-1256 : Verify that admin should be able to preview their feedback form. (TC-261)",
        async function (browser) {

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .waitForElementVisible('@noSession_feedbackFormCardTitle')
                .waitForElementVisible('@noSession_feedbackFormCardEditButton')
                .click('@noSession_feedbackFormCardEditButton');

            await createNewForm_page
                .waitForElementNotPresent('@previewButton')
                .click('@previewButton');


            await browser.window.getAllHandles(async (res) => {
                // console.log(res);
                await browser.window.switchTo(res.value[1]);
            })
                .assert.visible("app-preview-form")
        });

    it('LB-1257 : Verify that admin should be able to delete existing feedback form. (TC-262) ',
        async function (browser) {
            const Homepage = browser.page.po_feedback_form.navbar();
            const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .clickOnFormDeleteButton()
                // .clickNoOnPopupMessage()
                .assert.textContains('@deleteDialogBox_Message', "Are you sure want to delete this form ?")

        });

    it('LB-1258 : Verify that admin should not able to delete a feedback form (TC-263)',
        async function (browser) {
            const Homepage = browser.page.po_feedback_form.navbar();
            const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .clickOnFormDeleteButtonSession()
                .assert.textContains('@deleteDialogBox', "The Form is currently being used in following session(s)")

        });

    it('LB-1259 : Verify that admin should be able to create a new feedback form (TC-264) ',
        async function (browser) {
            const Homepage = browser.page.po_feedback_form.navbar();
            const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();
            const createNewForm_page = browser.page.po_feedback_form.create_new_form_page();

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .clickOnCreateFormButton();

            await createNewForm_page
                .assert.visible('@newForm')
                .pause(3000);
        });

    it('LB-1260 : Verify that admin should not able to save form until they add a NPS Question (TC-265) ',
        async function (browser) {
            const Homepage = browser.page.po_feedback_form.navbar();
            const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();
            const createNewForm_page = browser.page.po_feedback_form.create_new_form_page();

            const message = 'Please add a NPS question';

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .clickOnCreateFormButton();

            await createNewForm_page
                .setFormTitle()
                .setMCQQuestion()  //can be optional
                .saveForm()
                .assertPopUpMessageContains(message)
        });

    it('LB-1261 : Verify that admin should not be able to save form without adding Form Title (TC-266)',
        async function (browser) {
            const Homepage = browser.page.po_feedback_form.navbar();
            const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();
            const createNewForm_page = browser.page.po_feedback_form.create_new_form_page();

            const message = 'Please enter a Form Title';

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .clickOnCreateFormButton();

            await createNewForm_page
                .setNPSQuestion()  //can be optional
                .saveForm()
                .assertTitleValidationIsShown(message)
        });

    it('LB-1262 : Verify that admin should able to see validation message if they don\'t add Question in form. (TC-267)',
        async function (browser) {
            const Homepage = browser.page.po_feedback_form.navbar();
            const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();
            const createNewForm_page = browser.page.po_feedback_form.create_new_form_page();

            const message = 'Question cannot be empty';

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .clickOnCreateFormButton();

            await createNewForm_page
                .setFormTitle()
                .waitForElementVisible('@newFormQuestionTitle')
                .click('@selectQuestionTypeNPS')
                .saveForm()
                .assertQuestionValidationIsShown(message)
            //         .waitForElementVisible('@formEmptyQuestionValidationMessage')
            // .assert.textContains('@formEmptyQuestionValidationMessage',message);
        });

    it('LB-1263 : Verify that admin should be able to save form by adding all the mandatory task (TC-268)',
        async function (browser) {
            const Homepage = browser.page.po_feedback_form.navbar();
            const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();
            const createNewForm_page = browser.page.po_feedback_form.create_new_form_page();

            const message = 'Question cannot be empty';

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .clickOnCreateFormButton();

            await createNewForm_page
                .setFormTitle()
                .addNewQuestion()
                .addNewQuestion()
                .setMCQQuestion()
                .setNPSQuestion()
                .setParagraphQuestion()
                .saveForm()
                .assert.textContains('@formSavedSuccessfullyAlert', 'Form created successfully')
        });


    it.only('LB-1265 : Verify that admin should be able to search particular form from existing feedback form (TC-270)',
        async function (browser) {
            const Homepage = browser.page.po_feedback_form.navbar();
            const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();


            const message = 'Search Me';

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .inputInSearchField(message)
                .pause(4500)
                .findElements('@feedbackFormCardTitle', async function (result) {
                    // console.log(result);
                    const key_id = Object.keys(result.value[0])[0];
                    await result.value.forEach(function (el) {
                        const val = browser
                            .elementIdText(el[key_id]);
                        // console.log(val);
                        browser.expect(val).to.eq(message);
                    })
                })

        });

    it('LB-1266 : Verify that admin should be able to delete form in edit mode (TC-271)',
        async function (browser) {
            const Homepage = browser.page.po_feedback_form.navbar();
            const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();
            const createNewForm_page = browser.page.po_feedback_form.create_new_form_page();

            const message = 'Search Me';

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .clickOnFormEditButton_withNoSession();

            await createNewForm_page
                .clickDeleteOnUpdateForm()
                .waitForElementVisible('@formUpdate_dialogBox')
                .assert.textContains('@formUpdate_dialogBox', 'Are you sure want to delete this form ?');

        });



    it('LB-1267 : Verify that admin should be able to delete existing feedback form. (TC-272)',
        async function (browser) {
            const Homepage = browser.page.po_feedback_form.navbar();
            const FeedbackForm_page = browser.page.po_feedback_form.feedback_form_page();
            const createNewForm_page = browser.page.po_feedback_form.create_new_form_page();

            const message = 'Search Me';

            await Homepage
                .goToFeedbackFormSection();

            await FeedbackForm_page
                .clickOnFormDeleteButton()
                .assert.textContains('@deleteDialogBox', 'Are you sure want to delete this form ?')
                .assert.textContains('@deleteDialogBox_YesButton', 'Yes')
                .assert.textContains('@deleteDialogBox_NoButton', 'No')
                .click('@deleteDialogBox_YesButton')
                .assert.textContains('@feedbackFormAlert', 'Form Deleted Successfully');

        });




});