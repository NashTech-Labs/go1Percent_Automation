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

    
};

