module.exports = {
  url: 'https://nashtechglobal.qa.go1percent.com/', 

  elements: {
    
    admin: {
      selector: "//aside[@id='sidenav-main']//h6[contains(text(),'ADMIN')]",
      locateStrategy: 'xpath'
    },
    
    knolxButton: {
      selector: "//div[@role='button']//span[contains(text(),'Knolx')]",
      locateStrategy:'xpath'
    },
    manageSlots: 'a.nav-link.text-white[href="/knolx/manage-slots"]',
    calendarDate: 'a[aria-label="November 11, 2023"]',
    knolx: {
      selector: "//label[contains(text(),'Knolx')]",
      locateStrategy: 'xpath',
    },
    slotTitleInput: 'input[formcontrolname="slotTitle"]',
    saveSlotButton: 'button[class="btn btn-primary button submit-button"]',
    slotStartDateInput: 'input[formcontrolname="date"]',
    slotStartTimeInput: 'input[placeholder="HH"]',
    successfullyCreatedSlotMessage: 'div[aria-label="Slot Created Successfully"]',
    cancelButton: 'button[class="btn btn-primary button cancel-button ml-3 mr-2"]',
    presentDate: {
      selector: '//td//a[@aria-label="November 6, 2023"]',
      locateStrategy: 'xpath',
    },
    errorMessage: {
      selector: "//span[contains(text(),'Please do not enter past time')]",
      locateStrategy: 'xpath',
    },
    downArrow:
    {
      selector: "(//div[@class='ngx-timepicker-control']//span[@class='ngx-timepicker-control__arrow'])[2]",
      locateStrategy: 'xpath'
  },
  upArrow:
  {
     selector: "(//div[@class='ngx-timepicker-control']//span[@class='ngx-timepicker-control__arrow'])[1]",
     locateStrategy: 'xpath'
  },
  automateSlot: {
    selector: "//button[text()='Automate Slot']",
    locateStrategy: 'xpath'
  },
  selectSessionDropdown: 'select[name="quarter"]',
  dropDownValue: 'option[value="4"]',
  automateSlotCreationMessage: 'p[class="modal-title spanText pull-left mt-4 mb-2"]',
  webinr: 'label[for="webinar"]',
  meetup: 'label[for="meetup"]',
  knolmeet: 'label[for="knolmeet"]',
  freeSlot: {
    selector: "//td//div[contains(text(),'11:00 am')]",
    locateStrategy: 'xpath',
  },
  updateButton: 'button[class="btn btn-primary button submit-button"]',
  cancelButton: {
    selector: "//div//button[contains(text(),'Cancel')]",
    locateStrategy: 'xpath',
  },
  deleteButton: 'button[class="btn btn-primary button delete-button"]',
  deletefreeSlot: {
    selector: "//td//div[contains(text(),'04:00 pm')]",
    locateStrategy: 'xpath',
  },
  acceptPopUp: 'button[class="btn btn-primary button submit-button"]',
  successfullyDeletedMessage: 'div[aria-label="Session Deleted Successfully"]',
  updatefreeSlot: {
    selector: "//td//div[contains(text(),'11:03 am')]",
    locateStrategy: 'xpath',
  },
  updateFreeSlotTitle: 'input[formcontrolname="newSlotTitle"]',
  successfullyUpdateFreeSlot: 'div[aria-label="Session Updated Successfully"]',
  knolxSession: {
    selector: '//div[contains(text(), "08:40 am")]',
    locateStrategy: 'xpath',
  },
  approve: {
    selector: "//div[@class='action-button-div mt-4']//button[contains(text(),'Approve')]",
    locateStrategy: 'xpath',
  },
  },  

  commands: [{
    waitForPageLoad() {
    return this
    .waitForElementVisible('body', 10000)
    },

       clickAdminButton() {
       return this.waitForElementVisible('@admin', 5000)
       .click('@admin')
        .waitForPageLoad();
         },

       clickKnolxButton() {
       return this.waitForElementVisible('@knolxButton', 5000)
       .click('@knolxButton')
        .waitForPageLoad();
                },

        clickOnManageSlot() {
       return this.waitForElementVisible('@manageSlots', 5000)
       .click('@manageSlots')
       .waitForPageLoad();
    },


     clickOnDateInCalendar() {
      this.waitForElementVisible('@calendarDate', 5000);
      this.click('@calendarDate');
    },
  

    clickSlotTypeKnolx() {
      return this.waitForElementVisible('@knolx', 50000)
        .click('@knolx');
    },
    
    createSlot(slotTitle) {
      return this.waitForElementVisible('@slotTitleInput', 5000)
        .setValue('@slotTitleInput', slotTitle)
       
       
    },

    clickSaveSlotButton() {
      return this.waitForElementVisible('@saveSlotButton', 5000)
        .click('@saveSlotButton');
    },

    getSlotStartDateElement() {
      return this.waitForElementVisible('@slotStartDateInput', 5000)
      .getAttribute('@slotStartDateInput','min');
    },

    getSlotStartTimeElement: function () {
      return this.waitForElementVisible('@slotStartTimeInput', 5000)
      .getAttribute('@slotStartTimeInput','placeholder')
    },
    clickSlotStartTimeElement: function () {
      return this.waitForElementVisible('@slotStartTimeInput', 5000)
      .click('@slotStartTimeInput')
    },

    SuccessfullyCreatedSlotMessage: function () {
      return this.waitForElementVisible('@successfullyCreatedSlotMessage', 5000)
    },

    getSlotStartDate() {
      return this.waitForElementVisible('@slotStartDateInput', 5000)
      .getAttribute('@slotStartDateInput','min')
    },

    getSlotStartTime() {
      return this.getAttribute('@slotStartTimeInput', 5000)
      .getAttribute('@slotStartTimeInput','placeholder')

    },

    clickOnPresentDate() {
      return this.waitForElementVisible('@presentDate', 30000)
      .click('@presentDate')
        },


    clickOnCancelButton() {
      return this.waitForElementVisible('@cancelButton', 5000)
      .click('@cancelButton')
        },

        clickOnDownArrow() {
          return this.waitForElementVisible('@downArrow', 10000)
            .click('@downArrow');
        },

        clickOnUpArrow() {
          return this.waitForElementVisible('@upArrow', 10000)
          .click('@upArrow');
          },

        clickOnErrorMessage() {
          return this.waitForElementVisible('@errorMessage', 5000)
            .click('@errorMessage');
        },
        clickOnAutomateSlot() {
          return this.waitForElementVisible('@automateSlot', 5000)
            .click('@automateSlot');
        },
        clickSelectSessionDropdown(){
          return this.waitForElementVisible('@selectSessionDropdown', 5000)
            .click('@selectSessionDropdown');
        },
        clickOnDropDownValue(){
          return this.waitForElementVisible('@dropDownValue', 5000)
            .click('@dropDownValue');
        },
        
        getAutomatedSlotMessage() {
          return this.waitForElementVisible('@automateSlotCreationMessage', 5000)
        },

        clickSlotTypeWebinr(){
          return this.waitForElementVisible('@webinr', 5000)
            .click('@webinr');
        },

        clickSlotTypeMeetup(){
          return this.waitForElementVisible('@meetup', 5000)
            .click('@meetup');
        },

        clickSlotTypeKnolmeet(){
          return this.waitForElementVisible('@knolmeet', 5000)
            .click('@knolmeet');
        },

        clickFreeSlot(){
          return this.waitForElementVisible('@freeSlot', 5000)
            .click('@freeSlot');
        },

        clickFreeSlotToUpdate(){
          return this.waitForElementVisible('@updatefreeSlot', 5000)
            .click('@updatefreeSlot'); 
        },
        clickDeleteFreeSlot(){
          return this.waitForElementVisible('@deletefreeSlot', 5000)
            .click('@deletefreeSlot');
        },

        clickupdateButton(){
          return this.waitForElementVisible('@updateButton', 5000)
          .click('@updateButton')
        },

        cancelButtonVisibility(){
          return this.waitForElementVisible('@cancelButton', 5000)
        },
        deleteButton(){
          return this.waitForElementVisible('@deleteButton', 5000)
          .click('@deleteButton');

        },

        deleteConfirmPopUpYesButton(){
          return this.waitForElementVisible('@acceptPopUp', 5000)
            .click('@acceptPopUp');
        },

        SuccessfullyDeletedFreeSlotMessage: function () {
          return this.waitForElementVisible('@successfullyDeletedMessage', 5000)
        },

        updateSlot(updateslotTitle) {
          return this.waitForElementVisible('@updateFreeSlotTitle', 5000)
             .click('@updateFreeSlotTitle')
            .clearValue('@updateFreeSlotTitle')
            .setValue('@updateFreeSlotTitle', updateslotTitle)
            
        },
        SuccessfullyUpdatedFreeSlotMessage: function () {
          return this.waitForElementVisible('@successfullyUpdateFreeSlot', 5000)
        },
        clickApproveKnolxSession(){
          return this.waitForElementVisible('@knolxSession', 5000)
            .click('@knolxSession');
        },

        clickApproveButton(){
          return this.waitForElementVisible('@approve', 5000)
          .click('@approve')
        },
    }],
  };

