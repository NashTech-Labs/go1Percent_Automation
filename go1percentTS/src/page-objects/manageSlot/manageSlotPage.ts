//import { PageObjectModel, EnhancedPageObject } from 'nightwatch';
import { PageObjectModel, EnhancedPageObject, NightwatchAPI } from 'nightwatch';


//import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const ManageslotCommands = {  
 
  
       clickAdmin(this: manageSlotPage) {
           return this
          .click('@adminLink')
             },
        waitForPageLoad(this: manageSlotPage) {
          return this
        .waitForElementVisible('body', 20000)
            },

       clickAdminButton(this: manageSlotPage) {
       return this.waitForElementVisible('@admin', 5000)
       .click('@admin')
        
         },

       clickKnolxButton(this: manageSlotPage) {
       return this.waitForElementVisible('@knolxButton', 5000)
       .click('@knolxButton')
        
                },

        clickOnManageSlot(this: manageSlotPage) {
       return this.waitForElementVisible('@manageSlots', 5000)
       .click('@manageSlots')
       
    },


     clickOnDateInCalendar(this: manageSlotPage) {
      this.waitForElementVisible('@calendarDate', 5000);
      this.click('@calendarDate');
    },
  

    clickSlotTypeKnolx(this: manageSlotPage) {
      return this.waitForElementVisible('@knolx', 50000)
        .click('@knolx');
    },
};

const ManageSlot: PageObjectModel = {
    
    url: "https://nashtechglobal.qa.go1percent.com/my-dashboard",
    
    commands: [ManageslotCommands],
  
    elements: {
    
        admin: "//aside[@id='sidenav-main']//h6[contains(text(),'ADMIN')]",
        knolxButton: "//div[@role='button']//span[contains(text(),'Knolx')]",
        manageSlots: 'a.nav-link.text-white[href="/knolx/manage-slots"]',
        calendarDate: 'a[aria-label="November 11, 2023"]',
        knolx: "//label[contains(text(),'Knolx')]",
    },
    //commands: [ManageslotCommands],
};

export default ManageSlot;

export interface manageSlotPage
    extends EnhancedPageObject<typeof ManageslotCommands,
        typeof ManageSlot.elements> {
    windowMaximize(): unknown;
    window: any;
}