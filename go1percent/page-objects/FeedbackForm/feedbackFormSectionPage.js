const cmd = {

    clickOnFormDeleteButton() {
        this
            .waitForElementVisible('@heading')
            .waitForElementVisible('@noSession_feedbackFormCardTitle')
            .waitForElementVisible('@noSession_feedbackFormCardDeleteButton')
            .click('@noSession_feedbackFormCardDeleteButton')
        return this;
    },

    clickNoOnPopupMessage() {
        this
            .waitForElementVisible('@deleteDialogBox')
            .click('@deleteDialogBox_NoButton')

        return this;
    },

    clickOnFormDeleteButtonSession() {
        this
            .waitForElementVisible('@heading')
            .waitForElementVisible('@feedbackFormCardTitle')
            .waitForElementVisible('@feedbackFormCardDeleteButton')
            .click('@feedbackFormCardDeleteButton')
        return this;
    },

    inputInSearchField(message) {
        this
            .waitForElementVisible('@heading')
            .waitForElementVisible('@feedbackFormCardTitle')
            .waitForElementVisible('@searchField')
            .sendKeys('@searchField', message);

        return this;
    },

    clickOnFormEditButton_withNoSession() {
        this
            .waitForElementVisible('@heading')
            .waitForElementVisible('@noSession_feedbackFormCardTitle')
            .click('@noSession_feedbackFormCardEditButton');

        return this;
    },

    clickOnFormEditButton() {
        this
            .waitForElementVisible('@heading')
            .waitForElementVisible('@feedbackFormCardTitle')
            .click('@feedbackFormCardEditButton');

        return this;
    },

};

const createFormCommands = {

    clickOnCreateFormButton() {
        this
            .waitForElementVisible('@createANewFormButton')
            .click('@createANewFormButton');

        return this;
    }
}



module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com/',
    feedbackUrl: 'https://nashtechglobal.qa.go1percent.com/knolx/feedback-forms',

    commands: [
        cmd, createFormCommands, updateFormCommands
    ],

    elements: {
        heading: {
            selector: 'app-feedback-forms h5'
        },

        searchField: {
            selector: 'app-feedback-forms input[placeholder=" Search Form"]'
        },

        createANewFormButton: {
            selector: 'app-feedback-forms button'
        },

        feedbackFormsRow: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4)'
        },

        feedbackFormCardContainer: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(1)'
        },
        // app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(1) div div[class="card-body"]  span[title="Delete"]

        feedbackFormCard: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(1) div'
        },


        feedbackFormCardBody: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(1) div div[class="card-body"]'
        },


        feedbackFormCardHeader: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(1) div div[class="cardHeader"]'
        },

        feedbackFormCardTitle: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(1) div div[class="cardHeader"] p'
        },

        feedbackFormCardEditButton: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(1) div div[class="card-body"]  span[title="Edit"]'
        },

        feedbackFormCardDeleteButton: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(1) div div[class="card-body"]  span[title="Delete"]'
        },

        noSession_feedbackFormCardContainer: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(7)'
        },

        noSession_feedbackFormCard: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(7) div'
        },


        noSession_feedbackFormCardBody: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(7) div div[class="card-body"]'
        },


        noSession_feedbackFormCardHeader: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(7) div div[class="cardHeader"]'
        },

        noSession_feedbackFormCardTitle: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(7) div div[class="cardHeader"] p'
        },

        noSession_feedbackFormCardEditButton: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(7) div div[class="card-body"]  span[title="Edit"]'
        },

        noSession_feedbackFormCardDeleteButton: {
            selector: 'app-feedback-forms div[class="row"]:nth-of-type(4) div:nth-of-type(7) div div[class="card-body"]  span[title="Delete"]'
        },

        deleteDialogBox: {
            selector: 'modal-container  div[class="modal-content"]'
        },

        deleteDialogBox_YesButton: {
            selector: 'modal-container  div[class="modal-content"] button:nth-of-type(1)'
        },

        deleteDialogBox_NoButton: {
            selector: 'modal-container  div[class="modal-content"] button:nth-of-type(2)'
        },

        deleteDialogBox_Message: {
            selector: 'modal-container  div[class="modal-content"] p:nth-of-type(2)'
        },

        deleteDialogBox_Title: {
            selector: 'modal-container  div[class="modal-content"] p:nth-of-type(1)'
        },

        feedbackFormAlert: {
            selector: '#toast-container'
        },

        sessionDialogBox: {
            selector: '[class="modal-content"]'
        },

        dialogBox: {
            selector: '*[class="modal-content"]'
        }


    }



};