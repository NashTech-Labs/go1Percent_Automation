const Login = require('../../../helpers/Go1PercentFEAutomation/ADD_CONTRIBUTION/go1Percentloging');
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
    
    'User should able to view profile page' : function (browser) 
    { 
        
        
        dashboard
        .waitForElementVisible('@body', 1000)
        .click('@setting')
        .click("@profile")
        .assert.urlContains("my-profile")
    
    },

    'Verify that user should be able to click on contribution button to add contribution' : function (browser) 
    { 
        profile
        .waitForElementVisible('@body', 1000)
        .click("@contribution")
        contribution
            .Buttontext()
        profile
        .click("@addcontribution")

          
    },
   
    'Verify that user should not able to submit form without filling mandatory fields':function (browser) 
    { 
        contribution
            .Submitdisabled('disabled');
          
    },
    'Verify that user should not able to click on submit button with adding title':function (browser) 
    { 
        contribution
           .sendKeys("@title", ['Nightwatchjs']);
         contribution
           .Submitdisabled('disabled');
          
    }
}