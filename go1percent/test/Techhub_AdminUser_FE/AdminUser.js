const login = require('./go1Percentloging');
const dashboard = require('./go1PercentDashboard');
const techhub = require('./go1PercentTechhub');

module.exports = {
    beforeEach: function (browser) {
        login.beforeEach(browser);
        login['landing on dashboard page'](browser);
        browser.pause(40000);
        dashboard['navigate to Techhub page'](browser);
        browser.pause(30000);        
    },
    afterEach: function (browser) {
        login.after(browser);
    },

     //DCTGO1-1245 : Verify user should be able to approve a TechHub request on TechHub details page (TC-397)
     "Approve a TechHub request on TechHub details page":  function (browser) {
        techhub['Navigate to request detail page'](browser);
        techhub['Approve techhub request and verify'](browser);
    },
    
    //DCTGO1-1247 : Verify user should be able to reject a TechHub request on TechHub details page (TC-399)
     "Reject a TechHub request on TechHub details page":  function(browser){
        techhub['Navigate to request detail page'](browser);
        techhub['Reject techhub request and verify'](browser);
     },

     //DCTGO1-1248 : Verify That user should be able to filter through any Competency name on TechHub Approvals (TC-400)
    "Filter through any Competency name on TechHub Approvals ": function (browser) {       
        techhub['Apply any Competency filter and verify'](browser);
    },

    //DCTGO1-1249 : Verify User should not be able to reject a TechHub without reviewer comment (TC-401) 
    "Cannot reject a TechHub without reviewer comment":  function (browser) {
        techhub['Navigate to request detail page'](browser);
        browser.pause(5000);
        techhub['Reject Techhub request without Reviewer Comment and verify unsuccessful'](browser);
    },

    //DCTGO1-1250 : Verify Admin user should be able to Open and approve any TechHub which is on review (TC-402)
    "Open and approve any TechHub which is on review":  function (browser) {
        techhub['Navigate to All Techhubs page'](browser);
        techhub['Apply Review status filter'](browser);
        techhub['Navigate to request detail page'](browser);
        techhub['Approve techhub request and verify'](browser);
    },

    //DCTGO1-1251 : Verify Admin user should be able to Open and Reject any TechHub which is on review (TC-403) 
    "Open and Reject any TechHub which is on review":  function(browser){
        techhub['Navigate to All Techhubs page'](browser);
        techhub['Apply Review status filter'](browser);
        techhub['Navigate to request detail page'](browser);
        techhub['Reject techhub request and verify'](browser);
     },

    //DCTGO1-1285 : Verify that total records is showing correct data on Approval Page.
    "Total records": function (browser) {        
       //browser.pause(10000);
        techhub['Total_records'](browser);
    },

    //DCTGO1-1313 : verify admin should not be able to approve the techhub for same person twice a day
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

   

    //DCTGO1-1244 : Verify Admin user should be Able to view details of Approved TechHubs on All TechHubs page (TC-396) 
    "View details of Approved TechHubs on All TechHubs page":  function (browser) {
        techhub['Navigate to All Techhubs page'](browser);
        techhub['Apply Approved status filter'](browser);
        browser.pause(2000);
        techhub['Navigate to request detail page'](browser);
        techhub['Verify detail page'](browser);
    },

    //DCTGO1-1346 : Verify Admin user should be able to navigate to GitHub URL provided in techhub details page
    "navigate to GitHub URL provided in techhub details page": function(browser){
        techhub['Navigate to request detail page'](browser);
        browser.pause(3000);
        techhub['Navigate to Github URL and verify'](browser);
    }
};

