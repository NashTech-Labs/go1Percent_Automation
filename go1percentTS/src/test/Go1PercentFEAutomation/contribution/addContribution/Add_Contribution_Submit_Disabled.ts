const Login = require('../../../../helpers/Go1PercentFEAutomation/contribution/addContribution/go1Percentloging');
const dashboard = browser.page.contribution.addContribution.Dashboard();
const profile = browser.page.contribution.addContribution.Profile();
const contribution = browser.page.contribution.addContribution.Contribution(); 
import { NightwatchBrowser } from 'nightwatch';

module.exports = 
{

    before: function (browser:NightwatchBrowser )
     {
        Login.beforeEach(browser);
      },
     

      after: function (browser:NightwatchBrowser ) 
      {
        Login.after(browser);
      },
    
    'User should able to view profile page' : function (browser:NightwatchBrowser ) 
    { 
        
        
        dashboard
        .waitForElementVisible('@body', 1000)
        .click('@setting')
        .click("@profile")
        .assert.urlContains("my-profile")
    
    },

    'Verify that user should be able to click on contribution button to add contribution' : function (browser:NightwatchBrowser ) 
    { 
        profile
        .waitForElementVisible('@body', 1000)
        .click("@contribution")
        contribution
            .Buttontext()
        profile
        .click("@addcontribution")

          
    },
   
    'Verify that user should not able to submit form without filling mandatory fields':function (browser:NightwatchBrowser)
    { 
        contribution
            .Submitdisabled('disabled');
          
    },
    'Verify that user should not able to click on submit button with adding title':function (browser:NightwatchBrowser ) 
    { 
        contribution
           .sendKeys("@title", ['Nightwatchjs']);
         contribution
           .Submitdisabled('disabled');
          
    }
}