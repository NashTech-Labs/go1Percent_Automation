module.exports = {

    "navigate to All Techhubs page": function (browser) {
        browser
            .page.techhub()
            .All_Techhubs_page(browser)
            
            //.assert.urlContains("tech-hub");
    },

    "All status approved filter": function(browser)
    {
        browser
        .page.techhub()
        .Filter_AllStatus_Approved(browser)
        .assert.elementPresent("@Filter_AllStatus_Approved")
        .pause(2000)
        
    },

    "All status review filter": function(browser)
    {
        browser
        .page.techhub()
        .Filter_AllStatus_Review(browser)   
        .assert.elementPresent("@Filter_AllStatus_Review")  
        .pause(2000)
        
    },

    "Navigate to request Detail Page": function(browser)
    {
        browser
        .page.techhub()
        .Navigate_to_detailsPage(browser)
    },

    "Verify Detail Page": function(browser){
        browser
        .page.techhub()
        .assert.textEquals('@Detail_Page', 'View TechHub');
    },

    "Approve and verify techhub request": function(browser)
    {
        browser
        .page.techhub_detail()
        .Approve_Request(browser)
        .assert.elementPresent('@Approve_Toast')
    },

    "Reject and verify techhub request": function(browser)
    {
        browser
        .page.techhub_detail()
        .Reject_Request(browser)
        .assert.elementPresent('@Approve_Toast')
    },

    "Reject and verify techhub request without Reviewer Comment": function(browser){
        browser
        .page.techhub_detail()
        .Reject_Request_Without_Reviewer_Comment(browser)
        .assert.textContains("@Reviewer_Comment_error_message", "If Rejected, above field is mandatory. *");
    }

};