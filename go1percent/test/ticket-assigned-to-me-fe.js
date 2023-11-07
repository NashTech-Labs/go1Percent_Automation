
const { assert } = require("chai");
const loginPage = browser.page.login();
const fetchedElements = browser.page.Add_Contribution.ticketAssignedToMe();
const globals = require('../globals')

describe("Requested session Frontend Automation", () => {

    beforeEach(function () {
        browser
            .window.maximize()
        loginPage
            .navigate()
            .enterCredentials(browser.globals.userName, browser.globals.password)
            .signIn()
            .assert.urlContains("my-dashboard")

    }),

        it("verify send value is equal to expected value", () => {
            const messageToBeSend = 'this is first testing';
            fetchedElements
                .chatPage()
                .messagesend()
                .clickOnsendButton()
                .getText('@firstChatMessage', function (result) {
                    const divValue = result.value;
                    this.assert.equal(divValue, 'this is first testing', 'Div value matches the expected value.');
                })
                .end();
        }),

        it("verify attach file equal to sended value", () => {
            fetchedElements
                .chatPage()
                .clickOnattachFile()
                .pause(5000)
                .clickOnsendButton()
                .end();
        }),

        it("verify category should updated", () => {
            fetchedElements
                .chatPage()
                .clickKnolxCategory()
                .clickOnupdateButton()
                .waitForElementVisible('@statusMessage')
                .getText('@statusMessage', function (result) {
                    const divValue = result.value;
                    this.assert.equal(divValue, globals.expectedStatus, 'Div value matches the expected value.');
                })
                .end();
        }),

        it("verify Priority should updated", () => {
            fetchedElements
                .chatPage()
                .clickOnpriority()
                .clickOnupdateButton()
                .waitForElementVisible('@statusMessage')
                .getText('@statusMessage', function (result) {
                    const divValue = result.value;
                    this.assert.equal(divValue, globals.expectedStatus, 'Div value matches the expected value.');
                })
                .end();
        }),

        it("Updating status of ticket open to close", () => {
            fetchedElements
                .chatPage()
                .clickOnstatus()
                .clickOnupdateButton()
                .waitForElementVisible('@statusMessage')
                .getText('@statusMessage', function (result) {
                    const divValue = result.value;
                    this.assert.equal(divValue, globals.expectedStatus, 'Div value matches the expected value.');
                })
                .end();
        }),

        it("verify saved conversation is present on closed page chat", () => {
            fetchedElements
                .closedTicketPage()
                .clickLastClosedTicket()
                .waitForElementVisible('@savedConversation')
                .assert.elementPresent('@savedConversation')
                .end();
        }),

        it("verifiying closed ticket is present on closed page", () => {
            fetchedElements
                .closedTicketPage()
                .waitForElementVisible('@closedTicketPage')
                .assert.elementPresent('@closedTicketPage')
                .end();
        })
    // //test case is not working due to bug on closed ticket page 
    // it("verify all fields are present on closed page chat", () => {
    //     fetchedElements
    //         .closedTicketPage()
    //         .clickLastClosedTicket()
    //         .assert.elementPresent('@status')
    //         .assert.elementPresent('@category')
    //         .assert.elementPresent('@priority')
    //         .assert.elementPresent('@assignedTo')
    //         .isVisible('@updateButton')
    //         .end();
    // }),
    // //test case is not working due to bug on closed ticket page 
    // it("Updating status of ticket open to close", () => {
    //     fetchedElements
    //         .closedTicketPage()
    //         .clickLastClosedTicket()
    //         .clickStatusOpen()
    //         .waitForElementVisible('@updateButton')
    //         .clickOnupdateButton()
    //         .waitForElementVisible('@statusMessage')
    //         .getText('@statusMessage', function (result) {
    //             const divValue = result.value;
    //             this.assert.equal(divValue, globals.expectedStatus, 'Div value matches the expected value.')
    //         })
    //         .end();
    // }),
    // //test case is not working due to bug on closed ticket page 
    // it("verify category should updated on closed ticket", () => {
    //     fetchedElements
    //         .closedTicketPage()
    //         .clickLastClosedTicket()
    //         .clickKnolxCategory()
    //         .clickOnupdateButton()
    //         .waitForElementVisible('@statusMessage')
    //         .getText('@statusMessage', function (result) {
    //             const divValue = result.value;
    //             this.assert.equal(divValue, globals.expectedStatus, 'Value matches the expected value.');
    //         })
    //         .end();
    // }),
    // //test case is not working due to bug on closed ticket page 
    // it("verify Priority should updated in closed ticket", () => {
    //     fetchedElements
    //         .closedTicketPage()
    //         .clickLastClosedTicket()
    //         .clickOnpriority()
    //         .clickOnupdateButton()
    //         .waitForElementVisible('@statusMessage')
    //         .getText('@statusMessage', function (result) {
    //             const divValue = result.value;
    //             this.assert.equal(divValue, globals.expectedStatus, 'Div value matches the expected value.');
    //         })
    //         .end();
    // }),

    //     //test case is not working due to bug on closed ticket page 
    //     it("Verify Assigned name saved on the ticket", () => {
    //         const assignedValue = 'Ankit Kumar';
    //         fetchedElements
    //             .chatPage()
    //             .clickAssignedTo()
    //             .setValue('@assignedNameInput', [assignedValue, browser.Keys.ENTER])
    //             .waitForElementVisible('@updateButton')
    //             .clickOnupdateButton()
    //             .waitForElementVisible('@statusMessage')
    //             .getText('@statusMessage', function (result) {
    //                 const divValue = result.value;
    //                 this.assert.equal(divValue, globals.expectedStatus, 'Div value matches the expected value.');
    //             })
    //             .end();
    //     }),

    // //  Not clicking on update button 
    // it("Verify Assigned name saved on the ticket", () => {
    //     const assignedValue = 'Ankit Kumar';
    //     fetchedElements
    //         .closedTicketPage()
    //         .clickLastClosedTicket()
    //         .clickAssignedToClear()
    //         .setValue('@assignedNameInput', [assignedValue, Keys.ENTER])
    //         .waitForElementVisible('@updateButton')
    //         .clickOnupdateButton()
    //         .waitForElementVisible('@statusMessage')
    //         .getText("@statusMessage", function (result) {
    //             const divValue = result.value;
    //             this.assert.equal(divValue, globals.expectedStatus, 'Div value matches the expected value.');
    //         });
    // })

})