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

     //DCTGO1-1247 : Verify user should be able to reject a TechHub request on TechHub details page (TC-399)
     "Reject a TechHub request on TechHub details page":  function(browser){
        techhub['Navigate to request detail page'](browser);
        techhub['Reject techhub request and verify'](browser);
     },
     //DCTGO1-1249 : Verify User should not be able to reject a TechHub without reviewer comment (TC-401) 
    "Cannot reject a TechHub without reviewer comment":  function (browser) {
        techhub['Navigate to request detail page'](browser);
        browser.pause(5000);
        techhub['Reject Techhub request without Reviewer Comment and verify unsuccessful'](browser);
    },

    //DCTGO1-1251 : Verify Admin user should be able to Open and Reject any TechHub which is on review (TC-403) 
    "Open and Reject any TechHub which is on review":  function(browser){
        techhub['Navigate to All Techhubs page'](browser);
        techhub['Apply Review status filter'](browser);
        techhub['Navigate to request detail page'](browser);
        techhub['Reject techhub request and verify'](browser);
     },
};

