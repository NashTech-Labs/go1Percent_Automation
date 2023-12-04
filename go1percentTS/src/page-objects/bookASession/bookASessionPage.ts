import { PageObjectModel, EnhancedPageObject, NightwatchAPI } from 'nightwatch';

const bookASessionCommands = {
    waitForPageLoad(this: BookASessionPage) {
        return this.waitForElementVisible('body', 10000);
    },

    clickOnElement(this: BookASessionPage, element: string) {
        return this
            .waitForElementVisible(element, 10000)
            .click(element);
    },

    clickOnKnolxButton(this: BookASessionPage) {
        return this
            .clickOnElement("@knolxButton");
    },

    clickbookASessionButton(this: BookASessionPage) {
        return this
            .clickOnElement("@bookASessionButton");
    },

    clickOnUnavailableDates(this: BookASessionPage) {
        return this
            .clickOnElement("@unavailableDates");
    },
    checkForAvailableSlots: function (this: BookASessionPage) {
        this.api.execute(function () {
            window.scrollBy(0, 400);
        });
        return this;
    },

    clickUnAvailableDateAndCheckAvailability: function (this: BookASessionPage) {
        return this
            .waitForElementVisible('@unAvailableDates', 10000)
    },

    fillDetails(this: BookASessionPage){
        return this
        .clickOnElement('@lastAvailableDate')
        .perform((client: { execute: (arg0: () => void, arg1: never[], arg2: any) => void; }, done: any) => {
            client.execute(() => {
                window.scrollBy(0, window.innerHeight);
            }, [], done)})
        .clickOnElement('@availableSlots')
        .clickOnElement("@categoryDropDown")
        .clickOnElement("@testAutomationOption")
        .clickOnElement("@subCategoryDropDown")
        .clickOnElement("@cypressOption")
        .clickOnElement("@topicTileInput")
        .clearValue('@topicTileInput') 
        .setValue('@topicTileInput', 'Automation Test')
        .clearValue('@sessionBrief')
    },
    
    sessionType(this: BookASessionPage){
        return this
        .clickOnElement('@lastAvailableDate')
        .clickOnElement('@availableSlots')     
    },
    
    validateDateTime(this: BookASessionPage) {
        return this
        .clickOnElement('@lastAvailableDate')
        .clickOnElement('@availableSlots')
    },

    validateDifferentSessions(this: BookASessionPage) {
        return this
          .clickOnElement('@lastAvailableDate')
          .clickOnElement('@availableSlots')
    },

      validateCoPresenterEntry(this: BookASessionPage) {
        return this
          .clickOnElement("@coPresenterField")
          .setValue('@coPresenterField', ['Mayank Verma', this.api.Keys.ENTER])
    },

      validateCoPresenterRemoval(this: BookASessionPage) {
        return this
          .clickOnElement("@removeCoPresenter")
    },   
      
    validateReset(this: BookASessionPage) {
        return this
        .setValue('@sessionBrief', 'This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test ')           
        .clickOnElement("@resetButton");
    },

      validateSubCategoryDropdown(this: BookASessionPage) {
        return this
          .clickOnElement('@lastAvailableDate')
          .clickOnElement('@availableSlots')
    },
      
    validateUnselect(this: BookASessionPage){
        return this
        .clickOnElement('@lastAvailableDate')
        .clickOnElement('@availableSlots')
        .clickOnElement('@lastAvailableDate')
    },

    verifyDropDown(this: BookASessionPage) {
        return this
        .clickOnElement('@lastAvailableDate')
        .clickOnElement('@availableSlots')
        .clickOnElement("@categoryDropDown")
        .clickOnElement("@testAutomationOption")
        .click('@subCategoryDropDown') 
        .click('select[formcontrolname="subCategory"] option') 
    },
    
    verifyAvailableDatesGreenColor(this: BookASessionPage) {
        return this
            .waitForElementVisible('@availableDates', 10000)
            .clickOnElement("@availableDates")
    },

};

const bookPage: PageObjectModel = {
    url: '',
    elements: {
        knolxButton: "[src='../../../assets/Icons/knolx.svg']",
        bookASessionButton: ".nav-link.text-white[href='/knolx/book-a-session']",
        resetButton:'.btn.btn-primary.bg-cancel.text-black.ms-2',
        topicTileInput: "input[placeholder='Title of the Session']",
        sessionBrief:"textarea[placeholder='Write a short description about your session.']",
        errorMessage:".errorMessage.ng-star-inserted",        
        webinarLabel:"label[for='webinar']",        
        meetupLabel: "label[for='meetup']",
        coPresenterField:"input[placeholder='Search']",
        selectDateTime:"input[type='datetime-local']",
        categoryDropDown: "select[formcontrolname='category']",
        submitButton:"button[type='submit']",
        knolxLabel:"label[for='knolx']",     
        subCategoryDropDown: "select[formcontrolname='subCategory']",
        
        unAvailableDates: {
            selector: '//span[@class="bg-unavailable text-white ng-star-inserted"]',
            locateStrategy: 'xpath'
        },
        availableSlots: {
            selector: '(//div[@class="d-flex flex-column block"])[last()]',
            locateStrategy: 'xpath'
        },
        availableDates: {
            selector: '//span[@class="bg-unavailable text-white bg-available ng-star-inserted"]',
            locateStrategy: 'xpath'
        },
        lastAvailableDate: {
            selector: "//span[@class='bg-available text-white selected ng-star-inserted']",
            locateStrategy: 'xpath'
        },
        testAutomationOption: {
            selector: "//option[contains(text(),'TEST AUTOMATION COMPETENCY ')]",
            locateStrategy: 'xpath',
        },
        cypressOption: {
            selector: "//option[contains(text(),' Cypress ')]",
            locateStrategy: 'xpath',
        },
        removeCoPresenter:{
            selector:"//delete-icon[@aria-label='Remove tag']//span//*[name()='svg']",
            locateStrategy:'xpath'
        },
    },
    
    commands: [bookASessionCommands],
};

export default bookPage;
export interface BookASessionPage
    extends EnhancedPageObject<typeof bookASessionCommands, typeof bookPage.elements> { }