import { NightwatchTests } from "nightwatch";

const chat:NightwatchTests ={
    'login Test':()=>{
        browser.windowMaximize()
        const login =browser.page.helpdesk.ticketRaised.login();
        login.navigate().enterCredentials('testemployee','testemployee').signIn()
        
    },
    'should be able to Chat on OpenTicketPage': function(){
        const ticket =browser.page.helpdesk.ticketRaised.ticket();
        ticket
        .navigateToHelpDesk().waitForElementVisible('@selectFirstTicket',10000)
        .click('@selectFirstTicket') 
        .assert.containsText('@ticketStatus','OPEN')
        .enterMessage('sending')
        .sendMessage()
        .pause(6000)
        .assertMessage()
    }, 'should be able to send file on OpenTicketPage': function(){
        const ticket =browser.page.helpdesk.ticketRaised.ticket();
        ticket
        .waitForElementVisible('@commentBox')
        .waitForElementVisible('@messageSection')
        .enterMessage('sending with file')
        .attachFile()
        .sendMessage().pause(5000)
        .assertFileSentSuccessfully()
    },
    'should be able to See on OpenTicketPage': function(){ 
        const ticket =browser.page.helpdesk.ticketRaised.ticket();
        ticket.assert.visible('@messageSection')

    }  
}
export default chat;