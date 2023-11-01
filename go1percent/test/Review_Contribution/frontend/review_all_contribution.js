module.exports = {
    before: function (browser) {
        browser
            .maximizeWindow()
            .page.login()
            .navigate()
            .setValue('@emailInput', 'testadmin')
            .setValue('@passwordInput', 'testadmin')
            .signIn()
    },

    beforeEach:(function(browser){
     pageObject = browser.page.review_contribution.allContribution();

    }),

    'Approvals': function (browser) {
        pageObject.approvalsPage();

    },

    'All Contributions page': function (browser) {
        pageObject.navigateToAllContributions();
    },

    'Verify fields': function (browser) {
        pageObject.verifyAllFields();
    },

    'Approve a contribution': function(){
        pageObject.approveContribution();
    },

    'Reject a contribution': function(){
        pageObject.rejectContribution();
    },

    'Filter a contribution by status': function (browser) {
        pageObject.allStatus();
    },

    'Search a Nasher': function (browser) {
        pageObject.searchNasher();
    },

    'Filter contributions by competency': function (browser) {
        pageObject.competencyFilter();
    },

    'Filter contributions by date': function (browser) {
        pageObject.timeFilter()

    },

    after: function (browser) {
        browser.end();
    },
};


