const Login = require('../../../../helpers/Go1PercentFEAutomation/CONTRIBUTION/ADD_CONTRIBUTION/go1Percentloging');
const dashboard = browser.page.CONTRIBUTION.ADD_CONTRIBUTION.Dashboard();
const profile = browser.page.CONTRIBUTION.ADD_CONTRIBUTION.Profile();
const contribution = browser.page.CONTRIBUTION.ADD_CONTRIBUTION.Contribution(); 

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
  
      'click to contribution and add contribution' : function (browser) 
      { 
           
              
            profile
              .click("@contribution")
              .click("@addcontribution")
  
      },  
  
    
    'Verify that user should not able to click on submit button without adding description':function (browser) 
    { 
        contribution
            .waitForElementVisible("@description", 5000) 
            .getValue("@description", function(result) 
            {
              var textareaValue = result.value;
              if(textareaValue == "")
              {
                contribution.Submitdisabled('disabled');
              }

            })

        contribution
          .sendKeys("@description", ['Entering description leass than 100 words'])
          .Submitdisabled('disabled');
    },

    'Verify that user should not able to click submit form with filling invalid url':function (browser) 
    { 
        contribution
           .sendKeys("@url", ['www.coursera'])
           .Submitdisabled('disabled');
    },
    'Verify that user should be able to select "Online Courses" from contribution':function (browser) 
    { 
        contribution
          .setValue('@contributiontype', 'Online Course')
    }

  

}