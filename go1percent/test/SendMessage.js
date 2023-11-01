const { log } = require('console')

module.exports={
    before: function(browser){
        browser
            .windowMaximize()
            .page.login()
            .navigate()
            .enterCredentials('testemployee','testemployee')
            .signIn()
            
    },
    'should be able to Chat on OpenTicketPage': function(browser){
        var ticket =browser.page.tickets()
        ticket
        .navigateToHelpDesk()
        .click('@selectFirstTicket')   
        .assert.containsText('@ticketStatus','OPEN')
        .enterMessage('sending')
        .sendMessage()
        .pause(5000)
        .assertMessage()
    },
   'should be able to send file on OpenTicketPage': function(browser){
        var ticket =browser.page.tickets()
        ticket
        .waitForElementVisible('@commentBox')
        .waitForElementVisible('@messageSection')
        .enterMessage('sending with file')
        .click('@attachfile')
        .pause()
        .sendMessage().pause(5000)
        .assertFileSentSuccessfully()
    } ,
    'should be able to See on OpenTicketPage': function(browser){
        var ticket =browser.page.tickets()
       ticket.assert.visible('@messageSection')

    }  

}