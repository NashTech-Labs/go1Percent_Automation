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

