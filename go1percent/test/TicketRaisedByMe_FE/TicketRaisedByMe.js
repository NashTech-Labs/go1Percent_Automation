module.exports ={
    before: function(browser){
        browser
            .windowMaximize()
            .page.login()
            .navigate()
            .enterCredentials('testemployee','testemployee')
            .signIn()
            ticket =browser.page.ticket_raised.tickets()
            ticket.navigateToHelpDesk()
            
    }, 
    'should be able to see all fields in Open ticket page':function(){
        ticket
        .verifyAllElementsAreVisible()
    },
    'submit button should not be Enable without filling all fields': function(){
        ticket.assertSubmitButtonNotEnabled()
    },
    'should create a new ticket with attached file': function(){
        ticket
        .fillAllFields()
        .attachFile()
        .submitAndVerifySuccess()
    },
    'should create a new ticket without attached file': function(){
        ticket
        .fillAllFields()
        .submitAndVerifySuccess()
    },
    'should be able to see all closed tickets': function(browser){
        
        ticket
        .selectClosedTickets()
        .verifyAllElementsAreVisible()
    },
    'verify user created ticket should be closed by admin': function(browser){
        
        var admin=browser.page.ticket_raised.admin()
        var ticket=browser.page.ticket_raised.tickets()
        ticket.fillAllFields().submitAndVerifySuccess()
        admin.switchToAdminHelpDesk()
        var ticketId=admin.updateTicket('@setStatusClose')
        ticket.verifyUpdatedTicketStatus(ticketId,'@closedTickets')
    },
    'verify admin should be able to reopen closed tickets': function(){

        var admin=browser.page.ticket_raised.admin()
        admin
        .switchToAdminHelpDesk().selectClosedTickets()
        reopnenedTicketId=admin.updateTicket('@setStatusOpen')
        admin.verifyTicketIdInOpenTickets(reopnenedTicketId)
    },
    'user views reopened ticket details':function(){
        ticket
        .verifyUpdatedTicketStatus(reopnenedTicketId,'@openedTickets')
        .assert.textContains('@selectFirstTicket',reopnenedTicketId)
        .verifyStatusOfReoepenedTicket()

    },
    'user should not be able to close reopened tickets': function(){
        ticket
        .assertNoUpdateElementPresent()
    },
    
    'user attaches a file to reopened ticket': function(){
        ticket
        .assert.textContains('@selectFirstTicket',reopnenedTicketId)
        .click('@selectFirstTicket')
        .waitForElementVisible('@commentBox')
        .waitForElementVisible('@messageSection')
        .enterMessage('sending test message')
        .attachFile()
        .pause()
        .sendMessage().pause(5000)
        .assertFileSentSuccessfully()
    }
}
