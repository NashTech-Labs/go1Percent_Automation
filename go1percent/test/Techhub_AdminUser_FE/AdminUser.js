const login = require('./go1Percentloging');
const dashboard = require('./go1PercentDashboard');
const techhub = require('./go1Percenttechhub');

module.exports = {
    beforeEach: function (browser) {
        login.beforeEach(browser);
        login['landing on dashboard page'](browser);
        dashboard['navigate to Techhub page'](browser);
        browser.pause(40000);
    },
    afterEach: function (browser) {
        login.after(browser);
    },

    //Verify Admin user should be Able to view details of Approved TechHubs on All TechHubs page 
    "View details of Approved TechHubs on All TechHubs page":  function (browser) {
        techhub['Navigate to All Techhubs page'](browser);
        techhub['Apply Approved status filter'](browser);
        browser.pause(2000);
        techhub['Navigate to request detail page'](browser);
        techhub['Verify detail page'](browser);
    },

    //Verify user should be able to approve a TechHub request on TechHub details page 
    "Approve a TechHub request on TechHub details page":  function (browser) {
        techhub['Navigate to request detail page'](browser);
        techhub['Approve techhub request and verify'](browser);
    },

    //Verify user should be able to reject a TechHub request on TechHub details page
     "Reject a TechHub request on TechHub details page":  function(browser){
        techhub['Navigate to request detail page'](browser);
        techhub['Reject techhub request and verify'](browser);
     },

     //Verify That user should be able to filter through any Competency name on TechHub Approvals 
    "Filter through any Competency name on TechHub Approvals ": function (browser) {       
        techhub['Apply any Competency filter and verify'](browser);
    },

    //Verify User should not be able to reject a TechHub without reviewer comment 
    "Cannot reject a TechHub without reviewer comment":  function (browser) {
        techhub['Navigate to request detail page'](browser);
        browser.pause(5000);
        techhub['Reject Techhub request without Reviewer Comment and verify unsuccessful'](browser);
    },

    //Verify Admin user should be able to Open and approve any TechHub which is on review
    "Open and approve any TechHub which is on review":  function (browser) {
        techhub['Navigate to All Techhubs page'](browser);
        techhub['Apply Review status filter'](browser);
        techhub['Navigate to request detail page'](browser);
        techhub['Approve techhub request and verify'](browser);
    },

    //Verify Admin user should be able to Open and Reject any TechHub which is on review
    "Open and Reject any TechHub which is on review":  function(browser){
        techhub['Navigate to All Techhubs page'](browser);
        techhub['Apply Review status filter'](browser);
        techhub['Navigate to request detail page'](browser);
        techhub['Reject techhub request and verify'](browser);
     },

    //Verify that total records is showing correct data on Approval Page
    "Total records": function (browser) {        
       //browser.pause(10000);
        techhub['Total_records'](browser);
    },

    //verify admin should not be able to approve the techhub for same person twice a day 
    "Cannot approve the techhub for same person twice a day": function (browser) {       
        techhub['Search a Nasher'](browser);
        browser.pause(20000);
        techhub['Navigate to request detail page'](browser);
        browser.pause(1000);
        techhub['Approve techhub request and verify'](browser);
        browser.pause(20000);
        techhub['Navigate to request detail page'](browser);
        techhub['Approve second request of same person on same day and check'](browser);
    },

    //Verify Admin user should be able to navigate to GitHub URL provided in techhub details page
    "navigate to GitHub URL provided in techhub details page": function(browser){
        techhub['Navigate to request detail page'](browser);
        browser.pause(3000);
        techhub['Navigate to Github URL and verify'](browser);
    }
};

