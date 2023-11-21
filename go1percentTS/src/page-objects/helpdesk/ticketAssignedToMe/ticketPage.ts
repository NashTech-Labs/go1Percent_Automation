import { PageObjectModel, EnhancedPageObject } from 'nightwatch';
const message = 'this is for testing purpose';
 
const commands = {
    enterCredentials(this:LoginPage) {
        return this
            .setValue('@emailInput', 'testemployee')
            .pause(1000)
            .setValue('@passwordInput', 'testemployee')
            .pause(1000)
            
    },

    signInButton(this:LoginPage){
        return this 
        .click('@signIn')
    },

    helpDeskButton(this: LoginPage){
        return this 
        .click('@helpdesk')
    },

    Ticketassignedtome(this: LoginPage){
        return this 
        .click('@Ticketassignedtome')
    }, 
    OpenTicket(this: LoginPage){
        return this 
        .click('@openTicket')
    }, 
    clickOnHelpdesk(this: LoginPage) {
        return this
            .click('@helpdesk')
    },
    clickOnTicketassignedtome(this: LoginPage) {
        return this
            // .waitForElementVisible('@Ticketassignedtome')
            .click('@Ticketassignedtome')
    },
    openTicket(this: LoginPage) {
        return this
            .click('@openTicket')
    },
    OnparticularTicket(this: LoginPage) {
        return this
            .click("@particularTicket")
    },
    clickOntextBox(this: LoginPage) {
        return this
            .click("@textBox")
    },
    MessageSend(this: LoginPage) {
        return this
            .click("@textBox")
            .setValue('@textBox', message);
    },
    clickOnsendButton(this: LoginPage) {
        return this
            .click('@sendButton')
    },
    clickOnattachFile(this: LoginPage) {
        return this
            .click("@attachFile")
    },
    clickOnstatus(this: LoginPage) {
        return this
            .click('@status')
    },
    clickAssignedToClear(this: LoginPage) {
        return this
            .click('@assignedTo')
    },
    clickOncategory(this: LoginPage) {
        return this
            .click('@category')
    },
    clickKnolxCategory(this: LoginPage) {
        return this
            .click('@knolxCategory')
    },
    clickOnpriority(this: LoginPage) {
        return this
            .click('@priority')
    },
    clickOnupdateButton(this: LoginPage) {
        return this
            .waitForElementVisible('@updateButton', 5000)
            .click('@updateButton')
    },
    clickOncloseTicketButton(this: LoginPage) {
        return this
            .click('@closeTicketButton')
    },
    clickOnlatestClosedTicket(this: LoginPage) {
        return this
            .click('@latestClosedTicket')
    },
    chatPage(this: LoginPage) {
        return this
            .click('@helpDesk')
            .click('@Ticketassignedtome')
            .click('@openTicket')
            .click("@particularTicket")
    },

    closedTicketPage(this: LoginPage) {
        return this
            .click('@helpDesk')
            .click('@Ticketassignedtome')
            .click('@closeTicketButton')
    },

    clickLastClosedTicket(this: LoginPage) {
        return this
            .click('@lastClosed')
    },

    clickCategoryOpen(this: LoginPage) {
        return this
            .click('@categoryOpen')
    },
    clickStatusOpen(this: LoginPage) {
        return this
            .click('@statusOpen')
    }

};
 
const loginPage: PageObjectModel = {
    url: "https://nashtechglobal.qa.go1percent.com/",
    commands: [commands],
    elements: {
        emailInput: '#username',
        passwordInput: '#password',
        signIn: "#kc-login",
        helpDesk: {
            selector: "//h6[normalize-space()='HelpDesk']",
            locateStrategy: 'xpath'
        },
        Ticketassignedtome: {
            selector: "(//a[@href='/helpdesk/assigned-tickets'])[1]",
            locateStrategy: 'xpath'
        },
        openTicket: {
            selector: "(//a[normalize-space()='Open Ticket'])[1]",
            locateStrategy: 'xpath'
        },

        particularTicket: {
            selector: "//datatable-row-wrapper[@class='datatable-row-wrapper'][1]",
            locateStrategy: 'xpath'
        },

        textBox: {
            selector: "(//textarea[@placeholder='Enter you text'])[1]",
            locateStrategy: 'xpath'
        },

        sendButton: {
            selector: 'button[class="send-button bg-gradient-info"]'
        },

        attachFile: {
            selector: 'label[class="attach_file cursor-point"]'
        },

        closedTicketPage: {
            selector: '//div[@class="card me-3 p-4 mt-3"]',
            locateStrategy: 'xpath'
        },

        // assignedNameInput: {
        //     selector: "input[placeholder='Search']",
        //     locateStrategy: 'xpath'
        // },

        assignedNameSuggestion: {
            selector: "span[class='ng-star-inserted']"
        },

        status: {
            selector: "//option[normalize-space()='Closed']",
            locateStrategy: 'xpath'
        },
        statusCheck: {
            selector: '#status'
        },

        statusOpen: {
            selector: "select[id='status'] option:nth-child(1)"
        },

        category: {
            selector: '#category'
        },

        priority: {
            selector: '//option[normalize-space()="Low"]',
            locateStrategy: 'xpath'
        },
        priorityCheck: {
            selector: '#priority'
        },
        assignedCheck: {
            selector: "//tag-input[@class='ng-tns-c229-0 ng-untouched ng-pristine ng-valid ng-star-inserted']",
            locateStrategy: 'xpath'
        },
        updateButton: {
            selector: '//button[normalize-space()="Update"]',
            locateStrategy: 'xpath'
        },

        statusMessage: {
            selector: '#toast-container'
        },

        savedConversation: {
            selector: "//div[@class='card tab-bar border-0 mt-4 pr-2 pb-3 p-4']",
            locateStrategy: 'xpath'
        },
        allFieldsForm: {
            selector: "//form[@class='w-100 ng-untouched ng-pristine ng-valid']//div[@class='card tab-bar mt-4 p-4']",
            locateStrategy: 'xpath'
        },

        assignedNameInput: {
            selector: 'input[formcontrolname="item"]'
        },
        firstChatMessage: {
            selector: "div[class='msg-section']"
        },

        closeTicketButton: {
            selector: "(//a[normalize-space()='Close Ticket'])[1]",
            locateStrategy: 'xpath'
        },

        latestClosedTicket: {
            selector: "//div[@class='mt-2 ticket-number ng-star-inserted'][normalize-space()='1324']",
            locateStrategy: 'xpath'
        },
        knolxCategory: {
            selector: '//*[@id="category"]/option[10]',
            locateStrategy: 'xpath'
        },
        assignedClosedTicket: {
            selector: "//label[@class='fs-6 mb-2 ng-star-inserted']",
            locateStrategy: 'xpath'
        },
        assignedTo: {
            selector: "(//*[name()='path'])[1]",
            locateStrategy: 'xpath'
        },
        lastClosed: {
            selector: "//datatable-body//datatable-selection//datatable-row-wrapper[2]",
            locateStrategy: 'xpath'
        },
        categoryOpen: {
            selector: "select[id='status'] option:nth-child(1)"
        }
    },

 

};
 
export default loginPage;
 
export interface LoginPage
  extends EnhancedPageObject<typeof commands,
  typeof loginPage.elements> { }