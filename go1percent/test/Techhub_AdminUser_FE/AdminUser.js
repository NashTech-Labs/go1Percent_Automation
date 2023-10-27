const login = require('./go1Percentloging');
const dashboard = require('./go1PercentDashboard');
const techhub = require('./go1Percenttechhub');


module.exports = {
    beforeEach: function (browser) {
        // browser.pause(10000);
        login.beforeEach(browser);
        login['landing on dashboard page'](browser);
        dashboard['navigate to Techhub page'](browser);
    },
    afterEach: function (browser) {
        login.after(browser);
    },
    //Verify Admin user should be Able to view details of Approved TechHubs on All TechHubs page 
    // "View details of Approved TechHubs on All TechHubs page": function(browser) {

    //     techhub['navigate to All Techhubs page'](browser);
    //     techhub['All status approved filter'](browser);
    //     browser.pause(2000);
    //     techhub['Navigate to request Detail Page'](browser);
    //     techhub['Verify Detail Page'](browser);

    // },

    // //Verify user should be able to approve a TechHub request on TechHub details page 
    // "approve a TechHub request on TechHub details page": function(browser){

    //     techhub['Navigate to request Detail Page'](browser);
    //     techhub['Approve and verify techhub request'](browser);
    // },

    //Verify user should be able to reject a TechHub request on TechHub details page
    //  "reject a TechHub request on TechHub details page": function(browser){
    //     techhub['Navigate to request Detail Page'](browser);
    //     techhub['Reject and verify techhub request'](browser);

    //  },
    //  Verify That user should be able to filter through any Competency name on TechHub Approvals 
     "filter through any Competency name on TechHub Approvals ": function(browser){
        

     },

    //Verify User should not be able to reject a TechHub without reviewer comment 
    // "Cannot reject a TechHub without reviewer comment": function (browser) {

    //     techhub['Navigate to request Detail Page'](browser);
    //     browser.pause(5000);
    //     techhub['Reject and verify techhub request without Reviewer Comment'](browser);

    // },

    // //Verify Admin user should be able to Open and approve any TechHub which is on review
    // "Open and approve any TechHub which is on review": function (browser) {

    //     techhub['navigate to All Techhubs page'](browser);
    //     techhub['All status review filter'](browser);
    //     techhub['Navigate to request Detail Page'](browser);
    //     techhub['Approve and verify techhub request'](browser);

    // },
    // //Verify Admin user should be able to Open and Reject any TechHub which is on review
    // "Open and Reject any TechHub which is on review":function(browser){

    //     techhub['navigate to All Techhubs page'](browser);
    //     techhub['All status review filter'](browser);
    //     techhub['Navigate to request Detail Page'](browser);
    //     techhub['Reject and verify techhub request'](browser);

    //  },
     //Verify that total records is showing correct data on Approval Page
     "Total records": function(browser){

     },

     //verify admin should not be able to approve the techhub for same person twice a day 
     "Cannot approve the techhub for same person twice a day": function(browser)
     {

     },
};

