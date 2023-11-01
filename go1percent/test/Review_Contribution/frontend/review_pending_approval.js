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
        pageObject = browser.page.review_contribution.approvals();
   
       }),

    'Approvals': function (browser) {
        pageObject.approvalsPage();
    },

    'Approvals Contribution Page': function (browser) {
        pageObject.openApprovalsContributionPage();

    },

    'Verify Filter fields': function (browser) {
        pageObject.verifyAllFields();
    },

    'Approve a Contribution': function (browser) {
        pageObject.approvePendingContribution();
    },

    'Reject a Contribution': function (browser) {
        pageObject.rejectPendingContribution();
    },

    'Search a nasher': function (browser) {
        pageObject.searchNasher();
    },

    'All competency filter': function (browser) {
        pageObject.competencyFilter();
    },

    after: function (browser) {
        browser.end();
    },
};


