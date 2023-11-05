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

    //DCTGO1-1250 : Verify Admin user should be able to Open and approve any TechHub which is on review (TC-402)
    "Open and approve any TechHub which is on review":  function (browser) {
        techhub['Navigate to All Techhubs page'](browser);
        techhub['Apply Review status filter'](browser);
        techhub['Navigate to request detail page'](browser);
        techhub['Approve techhub request and verify'](browser);
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
    }

    
};
