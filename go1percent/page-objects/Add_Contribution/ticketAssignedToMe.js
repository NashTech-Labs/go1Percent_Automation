const message = 'this is first testing';
module.exports = {

    url: 'https://ticket-backend.qa.go1percent.com',
    elements: {

        username: {
            selector: 'input[name="username"]'
        },

        password: {
            selector: 'input[name="password"]'
        },

        submit: {
            selector: 'input[type="submit"]'
        },

        helpdesk: {
            selector: "//h6[normalize-space()='HelpDesk']",
            locateStrategy: 'xpath'
        },

        ticketAssignedTome: {
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

        lastSendMessage: {
            selector: "body > app-root > div > app-main > section > main > div > div > div > app-helpdesk > div > app-assigned-ticket-detail-view > div.row > div > div.col-xl-7.col-lg-6 > div > div:nth-child(14) > div:nth-child(2)"
        },

        attachFile: {
            selector: 'label[class="attach_file cursor-point"]'
        },

        closedTicketPage: {
            selector: '//div[@class="card me-3 p-4 mt-3"]',
            locateStrategy: 'xpath'
        },

        assignedNameInput: {
            selector: '//input[@placeholder="Search"]',
            locateStrategy: 'xpath'
        },

        status: {
            selector: "//option[normalize-space()='Closed']",
            locateStrategy: 'xpath'
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

        updateButton: {
            selector: '//button[normalize-space()="Update"]',
            locateStrategy: 'xpath'
        },

        statusMessage: {
            selector: '#toast-container'
        },

        savedConversation: {
            selector: "/html/body/app-root/div/app-main/section/main/div/div/div/app-helpdesk/div/app-assigned-ticket-detail-view/div[2]/div/div[1]/div",
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
    commands: [
        {
            elementClick(selector) {
                return this
                    //  .waitForElementVisible(selector,1000)
                    .click(selector)
            },
            clickOnHelpdesk() {
                return this
                    // .waitForElementVisible('@helpdesk')
                    .click('@helpdesk')
            },
            clickOnTicketAssignedTome() {
                return this
                    // .waitForElementVisible('@ticketAssignedTome')
                    .click('@ticketAssignedTome')
            },
            openTicket() {
                return this
                    .click('@openTicket')
            },
            OnparticularTicket() {
                return this
                    .click("@particularTicket")
            },
            clickOntextBox() {
                return this
                    .click("@textBox")
            },
            messagesend() {
                return this
                    .click("@textBox")
                    .setValue('@textBox', message);
            },
            clickOnsendButton() {
                return this
                    .click('@sendButton')
            },
            clickOnattachFile() {
                return this
                    .click("@attachFile")
            },
            clickOnstatus() {
                return this
                    .click('@status')
            },
            clickAssignedToClear() {
                return this
                    .click('@assignedTo')
            },
            clickOncategory() {
                return this
                    .click('@category')
            },
            clickKnolxCategory() {
                return this
                    .click('@knolxCategory')
            },
            clickOnpriority() {
                return this
                    .click('@priority')
            },
            clickOnupdateButton() {
                return this
                    .click('@updateButton')
            },
            clickOnstatusMessage() {
                return this
                    .click('@statusMessage')
            },
            clickOncloseTicketButton() {
                return this
                    .click('@closeTicketButton')
            },
            clickOnlatestClosedTicket() {
                return this
                    .click('@latestClosedTicket')
            },
            chatPage() {
                return this
                    .click('@helpdesk')
                    .click('@ticketAssignedTome')
                    .click('@openTicket')
                    .click("@particularTicket")
            },

            closedTicketPage() {
                return this
                    .click('@helpdesk')
                    .click('@ticketAssignedTome')
                    .click('@closeTicketButton')
                //.click('@latestClosedTicket')
            },

            clickLastClosedTicket() {
                return this
                    .click('@lastClosed')
            },

            clickCategoryOpen() {
                return this
                    .click('@categoryOpen')
            },
            clickStatusOpen() {
                return this
                    .click('@statusOpen')
            }


        }]

};