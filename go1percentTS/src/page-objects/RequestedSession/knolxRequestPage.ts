import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const Go1Commands = {

    enterCredentials(this: EnhancedPageObject, email: string, password: string) {
        return this
            .setValue('@emailInput', email)
            .pause(1000)
            .setValue('@passwordInput', password)
            .pause(1000)
    },
    signIn(this: EnhancedPageObject) {
        return this
            .click("@signIn")
    },
    clickAdmin(this: EnhancedPageObject) {
        return this
            .click('@adminLink')
    },
    clickKnolx(this: EnhancedPageObject) {
        return this
            .click('@knolx')
    },
    clickmanageSession(this: EnhancedPageObject) {
        return this
            .click('@manageSessions')
    },
    clickRequested(this: EnhancedPageObject) {
        return this
            .click('@requested')
    },
    clickSession(this: EnhancedPageObject) {
        return this
            .click('@session')
    },
    clickEditButton(this: EnhancedPageObject) {
        return this
            .click('@titleEdit')
    },
    editTitle(this: EnhancedPageObject, text: string) {
        return this
            .clearValue('@inputTitle')
            .setValue('@inputTitle', text)
            .click('@inputTitle')
    },
    clickSaveButton(this: EnhancedPageObject) {
        return this
            .click('@saveButton');
    },
    addingTag(this: EnhancedPageObject, tag: string) {
        return this
            .click('@addTag')
            .setValue('@tagInput', tag)
    },
    saveTag(this: EnhancedPageObject) {
        return this
            .click('@saveTag')
    },
    RemovingTag(this: EnhancedPageObject) {
        return this
            .click('@removeTag')
    },
    clickEditDesc(this: EnhancedPageObject) {
        return this
            .click('@describeEdit')
    },
    DescriptionEdit(this: EnhancedPageObject, desctext: string) {
        return this
            .clearValue('@descriptionInput')
            .setValue('@descriptionInput', desctext)
    },
    SavingDescription(this: EnhancedPageObject) {
        return this
            .click('@descriptionSave')
    },
    clickSlideEdit(this: EnhancedPageObject) {
        return this
            .click('@slideEdit')
    },
    SlideEdit(this: EnhancedPageObject, slideText: string) {
        return this
            .clearValue('@slideInput')
            .setValue('@slideInput', slideText)
    },
    savingSlide(this: EnhancedPageObject) {
        return this
            .click('@slideSave')

    },
    clickDropdown(this: EnhancedPageObject, optionValue: string) {
        return this
            .click('@dropdown')
            .setValue('@dropdown', optionValue)
    },
    UpdatingFeedback(this: EnhancedPageObject) {
        return this
            .click('@feedbackUpdate')

    },

    ClickRemarks(this: EnhancedPageObject, retext: string) {
        return this
            .clearValue('@remarks')
            .setValue('@remarks', retext)
            .click('@remarks')

    },
    ApprovingSession(this: EnhancedPageObject) {
        return this
            .click('@approveButton')
    },
    RejectingingSession(this: EnhancedPageObject) {
        return this
            .click('@rejectButton')
    },

};

const knolxRequestPage: PageObjectModel = {
    
    url: "https://nashtechglobal.qa.go1percent.com/my-dashboard",
    
    commands: [Go1Commands],

    elements: {
        emailInput: '#username',
        passwordInput: '#password',
        signIn: "#kc-login",
        adminLink: {
            selector: "//h6[normalize-space()='ADMIN']",
            locateStrategy: 'xpath'
        },
        knolx: {
            selector: "//span[normalize-space()='Knolx']",
            locateStrategy: 'xpath'
        },
        manageSessions: {
            selector: "//a[@href='/knolx/requested-sessions']",
            locateStrategy: 'xpath'
        },
        requested: {
            selector: "//a[normalize-space()='Requested']",
            locateStrategy: 'xpath'
        },
        totalrecords: '.ml-2',
        session: ".cell-name.session.session-title",
        titleEdit: "div[class='mt-2 d-flex justify-content-end'] button[class='btn btn-primary edit-session-button floatRight']",
        inputTitle: "input[type='text']",
        saveButton: '.btn.btn-primary.save-session-button.mx-2',
        titleMessage: "div[aria-label='Successfully Updated']",
        addTag: "a[role='button']",
        tagInput: {
            selector: "//input[@aria-expanded='false']",
            locateStrategy: 'xpath'
        },
        saveTag: 'button.mx-2:nth-child(1)',
        removeTag: 'i.fa:nth-child(1)',
        describeEdit: '.btn.edit',
        descriptionSave: '.btn.btn-primary.saveBtn.mx-2.mt-2',
        // descriptionInput not working with other selectors as it keeps changing
        descriptionInput: 'body > app-root > div > app-main > section > main > div > div > div > app-knolx > div > app-manage-session-detail > div.card.page-wrapper > div.row.manage-session-detail > div.col-xl-8.col-lg-8.col-md-7 > form > div.mb-2.mt-4.px-4 > div:nth-child(2) > textarea',
        slideInput: '.bg-transparent.spanText.text-sm.px-1.mr-2.session-input.div-item.ng-untouched.ng-pristine.ng-valid',
        slideEdit: {
            selector: "(//button[@class='btn btn-primary edit-session-button floatRight'][normalize-space()='Edit'])[2]",
            locateStrategy: 'xpath'
        },
        slideSave: '.btn.btn-primary.save-session-button.mx-2',
        dropdown: '.quarter-dropdown',
        feedbackUpdate: '.btn.btn-primary.save-session-button.save-session',
        remarks: "textarea[placeholder='Please add the reason for rejecting/declining the request.']",
        approveButton: '.btn.approve-btn.btns',
        rejectButton: '.btn.reject-btn.btns.mx-3',
    },
    
};

export default knolxRequestPage;

export interface knolxRequestPage
    extends EnhancedPageObject<typeof Go1Commands,
        typeof knolxRequestPage.elements> { }