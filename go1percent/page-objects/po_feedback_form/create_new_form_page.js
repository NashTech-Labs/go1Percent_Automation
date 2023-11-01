const cmds = {
    setFormTitle() {
        this
            .waitForElementVisible('@newForm')
            .sendKeys('@newFormTitleInput', 'Temporary Form')

        return this;
    },



    clearAllFormQuestions() {
        // while(this.waitForElementVisible('@formsQuestionDeleteButtonArray')){
        //     this
        //     .click('@formsQuestionDeleteButtonArray')
        // }


        // return this;
    },

    addNewQuestion() {
        this
            .waitForElementVisible('@addQuestionButton')
            .click('@addQuestionButton');

        return this;
    },


    // setting type of question
    setMCQQuestion() {
        this
            .waitForElementVisible('@questionDefaultMCQ')
            .click('@questionDefaultMCQ')

            .waitForElementVisible('@questionDefaultTitle')
            .sendKeys('@questionDefaultTitle', 'Default MCQ Question')

            // .waitForElementVisible('@createNewOption')
            // .click('@createNewOption')

            .waitForElementVisible('@questionDefaultOption1')
            .sendKeys('@questionDefaultOption1', 'Yes')

        // .waitForElementVisible('@questionDefaultOption2')
        // .setValue('@questionDefaultOption2', 'No');

        return this;

    },
    setParagraphQuestion() {
        // this
        //     .waitForElementVisible('@newFormQuestionTitle')  //nth last
        //     .setValue('@newFormQuestionTitle', 'Paragraph Question')
        //     .click('@selectQuestionTypeParagraph')

        // .click('@selectQuestionTypeNPS');
        this
            .waitForElementVisible('@questionTwoParagraph')
            .click('@questionTwoParagraph')
            .waitForElementVisible('@newFormQuestionTitle')
            .setValue('@questionTwoTitle', 'Paragraph Question')

        return this;
    },

    setNPSQuestion() {
        // this
        //     .waitForElementVisible('@newFormQuestionTitle')
        //     .setValue('@newFormQuestionTitle', 'NPS Question')
        //     .click('@selectQuestionTypeNPS')
        this
            .click('@questionOneNPS')
            .waitForElementVisible('@newFormQuestionTitle')
            .setValue('@questionOneTitle', 'NPS Question')
        // .click('@selectQuestionTypeNPS');

        return this;

    },

    saveForm() {
        this
            .waitForElementVisible('@newFormSaveFormButton')
            .click('@newFormSaveFormButton')

        return this;
    },

    // assertions

    assertPopUpMessageContains(message) {
        this
            .waitForElementVisible('@addNPSModal')
            .assert.textContains('@addNPSModal', message);

        return this;
    },

    assertTitleValidationIsShown(message) {
        this
            .waitForElementVisible('@formEmptyTitleValidationMessage')
            .assert.textContains('@formEmptyTitleValidationMessage', message);

        return this;
    },

    assertQuestionValidationIsShown(message) {
        this
            .waitForElementVisible('@formEmptyQuestionValidationMessage')
            .assert.textContains('@formEmptyQuestionValidationMessage', message);

        return this;

    },

    clickDeleteOnUpdateForm() {
        this
            .waitForElementVisible('@formUpdate_deleteButton')
            .click('@formUpdate_deleteButton')
        // .pause(4500);

        return this;
    }







}

module.exports = {

    commands: [
        cmds
    ],

    elements: {
        newForm: {
            selector: 'app-create-feedback-form form'
        },

        newFormTitleInput: {
            selector: 'app-create-feedback-form form  input[formcontrolname="formTitle"]'
        },

        addQuestionButton: {
            selector: 'app-create-feedback-form form  div[formarrayname="feedbackQuestions"] button'
        },

        newFormSaveFormButton: {
            selector: 'app-create-feedback-form div[class="buttons-div feedback"] button'
        },

        newFormQuestionArray: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li'
        },

        // add last of delete
        formsQuestionDeleteButtonArray: {
            selector: 'app-create-feedback-form form  div[formarrayname="feedbackQuestions"]  div[class="delete-container delete-cover"]'
        },

        newFormQuestionTitle: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:last-of-type input[formcontrolname="questionTitle"]'
        },

        newFormQuestionType: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:last-of-type select[formcontrolname="questionType"]'
        },


        selectQuestionTypeParagraph: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:last-of-type select[formcontrolname="questionType"] option[value="COMMENT"]'
        },

        selectQuestionTypeNPS: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:last-of-type select[formcontrolname="questionType"] option[value="NPS"]'
        },


        addNPSModal: {
            selector: 'modal-container  div[role="document"]'
        },

        formEmptyTitleValidationMessage: {
            selector: 'app-create-feedback-form form > div:nth-of-type(1) span'
        },

        formEmptyQuestionValidationMessage: {
            selector: 'app-create-feedback-form form  div[formarrayname="feedbackQuestions"]  li > div > div > span'
        },

        // questions
        questionDefaultMCQ: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:nth-of-type(1) select[formcontrolname="questionType"] option[value="MCQ"]'
        },

        questionDefaultTitle: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:nth-of-type(1) input[formcontrolname="questionTitle"]'
        },

        questionDefaultOption1: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:nth-of-type(1)  ul[formarrayname="options"] input:nth-of-type(1)'
        },

        questionDefaultOption2: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:nth-of-type(1)  ul[formarrayname="options"] input:nth-of-type(2)'
        },

        createNewOption: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:nth-of-type(1)  div[formgroupname="questionGroup"]  div:nth-of-type(1) div:nth-of-type(1) p'
        },

        questionOneNPS: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:nth-of-type(2) select[formcontrolname="questionType"] option[value="NPS"]'
        },

        questionOneTitle: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:nth-of-type(2) input[formcontrolname="questionTitle"]'
        },

        questionTwoParagraph: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:nth-of-type(3) select[formcontrolname="questionType"] option[value="COMMENT"]'
        },

        questionTwoTitle: {
            selector: 'app-create-feedback-form  div[formarrayname="feedbackQuestions"] ol > li:nth-of-type(3) input[formcontrolname="questionTitle"]'
        },

        formSavedSuccessfullyAlert: {
            selector: '#toast-container'
        },


        // ==============================UPDATE FORM=================
        formUpdate: {
            selector: 'app-update-feedback-form'
        },

        formUpdate_deleteButton: {
            selector: 'app-update-feedback-form div[class="feedback row"] div button:nth-of-type(2)'
        },

        formUpdate_dialogBox: {
            selector: 'modal-container div[class="modal-content"]'
        },

        previewButton: {
            selector: 'app-update-feedback-form div[class="feedback row"] div:nth-of-type(2) button'
        },
        // ==============

    }

};