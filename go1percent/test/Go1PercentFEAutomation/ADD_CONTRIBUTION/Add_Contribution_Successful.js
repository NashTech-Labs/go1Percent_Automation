const Login = require('../../../helpers/Go1PercentFEAutomation/ADD_CONTRIBUTION/go1Percentloging');
const globals = require('../../../globals')
const dashboard = browser.page.Add_Contribution.Dashboard();
const profile = browser.page.Add_Contribution.Profile();
const contribution = browser.page.Add_Contribution.Contribution(); 

module.exports = 
{

    before: function (browser)
     {
        Login.beforeEach(browser);
      },
     

      after: function (browser) 
      {
        Login.after(browser);
      },
    
      'click to setting and profile' : function (browser) 
      { 
          
          
          dashboard
          .waitForElementVisible('@body', 1000)
          .click('@setting')
          .click("@profile")
      
      },
  
      'Adding contribution and applying assertions' : function (browser) 
      { 
           
              
            profile
              .click("@contribution")
              .click("@addcontribution")
  
      },  
    'Verify that user should be able to add details for adding contribution':function (browser) 
    { 

        contribution
          .sendKeys("@title", ['Nightwatchjs test script'])
          .setValue('@contributiontype', 'Online Course')
          .sendKeys("@description", ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to'])
          .sendKeys("@videourl", [globals.Add_Contribution.Contribution_url])
          .click("@submit")
       contribution
          .Textcontain('successfully');
    }
}


 