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
    'should be able to Chat on OpenTicketPage': function(){
        
        ticket
        .assert.containsText('@ticketStatus','OPEN')
        .enterMessage('sending')
        .sendMessage()
        .pause(5000)
        .assertMessage()
    },
   'should be able to send file on OpenTicketPage': function(){
        
        ticket
        .waitForElementVisible('@commentBox')
        .waitForElementVisible('@messageSection')
        .enterMessage('sending with file')
        .click('@attachfile').pause()
        .sendMessage().pause(5000)
        .assertFileSentSuccessfully()
    } ,
    'should be able to See on OpenTicketPage': function(){
       
        ticket.assert.visible('@messageSection')

    }  

}