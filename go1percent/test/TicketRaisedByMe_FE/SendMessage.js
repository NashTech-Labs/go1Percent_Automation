/**
 * Nightwatch test suite to test chat functionality.
 */
module.exports={
    before: function(browser){
        browser
            .windowMaximize()
            .page.login()
            .navigate()
            .enterCredentials('testemployee','testemployee')
            .signIn()
            ticket =browser.page.ticket_raised.tickets()  
            ticket
            .navigateToHelpDesk()
            .waitForElementVisible('@selectFirstTicket',10000)
            .click('@selectFirstTicket')   
    },
    /**
     * @function shouldChatOnOpenTicketPage
     * @description This test case verifies the ability to chat on the OpenTicketPage.
     */
    'should be able to Chat on OpenTicketPage': function(){
        
        ticket
        .assert.containsText('@ticketStatus','OPEN')
        .enterMessage('sending')
        .sendMessage()
        .pause(5000)
        .assertMessage()
    },
    /**
     * @function shouldSendFileOnOpenTicketPage
     * @description This test case verifies the ability to send a file on the OpenTicketPage.
     * showing error
     */
   'should be able to send file on OpenTicketPage': function(){
        
        ticket
        .waitForElementVisible('@commentBox')
        .waitForElementVisible('@messageSection')
        .enterMessage('sending with file')
        .waitForElementVisible('input#uploadfile', 1000)
        .pause(2000)
        .setValue('input#uploadfile', require('path').resolve(__dirname + 'files/test.png'))
        ticket
        .sendMessage().pause(5000)
        .assertFileSentSuccessfully()
    } ,
    /**
     * @function shouldBeAbleToSeeOnOpenTicketPage
     * @description This test case verifies the ability to see messages on the OpenTicketPage.
     * 
     */
    'should be able to See on OpenTicketPage': function(){ 
        ticket.assert.visible('@messageSection')

    }  

}