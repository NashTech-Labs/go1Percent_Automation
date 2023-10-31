
const Login = require('../../go1Percentloging');
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
    
    'Step one: click to setting and profile' : function (browser) 
    { 
        
        
        dashboard
        .waitForElementVisible('@body', 1000)
        .click('@setting')
        .pause(1000)
        .click("@profile")
        .pause(1000)
        .assert.urlContains("my-profile")
        .pause(3000)
        
    
    },

    'Step two: Adding contribution and applying assertions' : function (browser) 
    { 
         
            
          profile
            .click("@contribution")
            .pause(2000);

          contribution
            .Buttontext()
            .pause(2000);
           
           profile
            .click("@addcontribution")
            .pause(2000);

          contribution
            .Submitdisabled('disabled');

    },  

    'Step threee: Adding contribution with future date and valid details' : function (browser) 
    { 
      
            
          profile
            .click("@contribution")
            .pause(2000);

          contribution
            .Buttontext()
            .pause(2000);
           
          profile
            .click("@addcontribution")
            .pause(2000);

          contribution
            .sendKeys("@title", ['Nightwatchjs test script'])
            .pause(1000)
            .setValue('@contributiontype', 'Book')
            .pause(2000)
            .Futuredate()
            .pause(2000)
            .sendKeys("@description", ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to'])
            .pause(2000)
            .sendKeys("@bookurl", ['www.cofdsa.org'])
            .pause(2000)
            .click("@submit")
            .pause(1000)
            .Alerttext()
            .pause(2000)
            .Submitdisabled('disabled')
          contribution
            .pause(2000) 
            .click("@Invalidcancel")
          contribution
            .pause(2000) 

    },  

    'Step four: Adding contribution with valid/invalid details' : function (browser) 
    { 


         profile
           .click("@addcontribution")
           .pause(2000);
     
         contribution
           .pause(1000)
           .sendKeys("@title", ['Nightwatchjs']);
         contribution
           .Submitdisabled('disabled');
         contribution
            .waitForElementVisible("@description", 5000) 
            .getValue("@description", function(result) 
            {
              var textareaValue = result.value;
              if(textareaValue == "")
              {
                contribution.expect.element("@submit").to.have.attribute('disabled');
              }

            })

        contribution
          .pause(1000)
          .sendKeys("@description", ['Entering description leass than 100 words'])
          .Submitdisabled('disabled');

        contribution.pause(1000)
           .sendKeys("@url", ['www.coursera'])
           .Submitdisabled('disabled');
      
        contribution
          .sendKeys("@title", ['Nightwatchjs test script'])
          .pause(1000)
          .setValue('@contributiontype', 'Online Course')
          .pause(2000)
          .sendKeys("@description", ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to'])
          .pause(2000)
          .sendKeys("@videourl", ['www.cofnkndsa.org'])
          .pause(2000)
          .click("@submit")
       contribution
          .Textcontain('successfully');
           

        }
            
            
  };