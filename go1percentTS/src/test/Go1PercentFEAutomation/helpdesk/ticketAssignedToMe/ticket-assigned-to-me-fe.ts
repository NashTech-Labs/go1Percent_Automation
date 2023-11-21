import {  NightwatchBrowser } from "nightwatch";

const fetchElements = browser.page.helpdesk.ticketAssignedToMe.ticketPage();

    describe("TicketAssignedToMe Frontend Automation", () => {
    beforeEach((browser: NightwatchBrowser) => {
        fetchElements
            .maximizeWindow()
            .navigate()
            .enterCredentials()
            .signInButton()
            .assert.urlContains("my-dashboard");
    }),

    it("verify all fields are present on Open ticket chat page 880", () => {
        fetchElements
            .chatPage()
            .assert.elementPresent("@status")
            .assert.elementPresent("@category")
            .assert.elementPresent("@priority")
            .assert.elementPresent("@assignedTo")
            .isVisible("@updateButton")
            .end();
    }),

    it("verify user able to send message successfully 897", () => {
        fetchElements
            .chatPage()
            .MessageSend()
            .clickOnsendButton()
            .end();
    }),


    it("verify attach file equal to sended value 898", () => {
        const messageToBeSend = 'this is for testing purpose';
        fetchElements
            .chatPage()
            .pause(3000)
            .MessageSend()
        browser
            .isEnabled('#uploadfile', (result) => {
                browser.uploadFile('#uploadfile', '/home/knoldus/smalldog.jpg');
            })
        fetchElements
            .pause(2000)
            .clickOnsendButton()
            .getText('@firstChatMessage', (result: { value: string; }) => {
                browser.assert.equal(result.value, messageToBeSend, 'Div value matches the expected value.');
            })
            .pause(3000)
    }),




    it("verify category should updated 899", () => {
        fetchElements
            .chatPage()
            .clickKnolxCategory()
            .pause(1000)
            .clickOnupdateButton()
            .waitForElementVisible('@statusMessage')
            .assert.elementPresent('@statusMessage')
            .end();
    }),

    it("verify Priority should updated 900", () => {
        fetchElements
            .chatPage()
            .clickOnpriority()
            .clickOnupdateButton()
            .waitForElementVisible('@statusMessage')
            .assert.elementPresent('@statusMessage')
            .end();
    }),

    it("Verify able to change Assigned name on the ticket chat page 901", () => {
        const assignedValue = 'Ankit';
        fetchElements
            .chatPage()
            .clickAssignedToClear()
            .setValue('@assignedNameInput', assignedValue)
            .click('@assignedNameSuggestion')
            .pause(2000)
            .clickOnupdateButton()
            .waitForElementVisible('@statusMessage')
            .assert.elementPresent('@statusMessage')
            .end();
    }),

    it("Updating status of ticket open to close 902", () => {
        fetchElements
            .chatPage()
            .clickOnstatus()
            .clickOnupdateButton()
            .waitForElementVisible('@statusMessage')
            .assert.elementPresent('@statusMessage')
            .end();
    }),

    it("verify saved conversation is present on closed chat page 904", () => {
        fetchElements
            .closedTicketPage()
            .clickLastClosedTicket()
            .waitForElementVisible('@savedConversation')
            .assert.elementPresent('@savedConversation')
            .waitForElementVisible('@allFieldsForm')
            .assert.elementPresent('@allFieldsForm')
            .end();
    }),

    it("verifying closed ticket is present on closed page", () => {
        fetchElements
            .closedTicketPage()
            .waitForElementVisible('@closedTicketPage')
            .assert.elementPresent('@closedTicketPage')
            .end();
    }),

    it("Verify user should be able to see all fields in Close ticket page 903", () => {
        fetchElements
            .closedTicketPage()
            .clickLastClosedTicket()
            .assert.elementPresent('@statusCheck')
            .assert.elementPresent('@category')
            .assert.elementPresent('@priorityCheck')
            .assert.elementPresent('@assignedCheck')
            .assert.elementPresent('@updateButton')
            .end()
    }),

    //test case is not working due to bug on closed ticket page 
    it("Updating status of ticket open to close", () => {
        fetchElements
            .closedTicketPage()
            .clickLastClosedTicket()
            .clickStatusOpen()
            .waitForElementVisible('@updateButton')
            .clickOnupdateButton()
            .waitForElementVisible('@statusMessage')
            .assert.elementPresent('@statusMessage')
            .end();
    }),
    //test case is not working due to bug on closed ticket page 
    it("verify category should updated on closed ticket", () => {
        fetchElements
            .closedTicketPage()
            .clickLastClosedTicket()
            .clickKnolxCategory()
            .clickOnupdateButton()
            .waitForElementVisible('@statusMessage')
            .assert.elementPresent('@statusMessage')
            .end();
    }),
    //test case is not working due to bug on closed ticket page 
    it("verify Priority should updated in closed ticket", () => {
        fetchElements
            .closedTicketPage()
            .clickLastClosedTicket()
            .clickOnpriority()
            .clickOnupdateButton()
            .waitForElementVisible('@statusMessage')
            .assert.elementPresent('@statusMessage')
            .end();
    }),


    //test case is not working due to bug on closed ticket page 
    it("Verify Assigned name saved on the ticket", () => {
        const assignedValue = 'Ankit';
        fetchElements
            .closedTicketPage()
            .clickLastClosedTicket()
            .clickAssignedToClear()
            .setValue('@assignedNameInput', assignedValue)
            .click('@assignedNameSuggestion')
            .pause(2000)
            .clickOnupdateButton()
            .waitForElementVisible('@statusMessage')
            .assert.elementPresent('@statusMessage')
            .end();
    })

});

