//const Profile = require('../../../page-objects/Add_Contribution/Profile');
const Login = require('../../go1Percentloging');

module.exports = {

    before: function (browser) {
        Login.beforeEach(browser);
      },
     

      after: function (browser) {
        Login.after(browser);
      },
    
    'step two: click to setting' : function (browser) { 
        
        const setting = browser.page.Add_Contribution.Setting();
        
        setting
        .waitForElementVisible('@body', 1000)
        .click('@Setting')
        .pause(1000)
        
    
        },
        'step three: click to profile' : function (browser) { 
        
            const profile = browser.page.Add_Contribution.Profile();
            
            profile
            .waitForElementVisible('@body', 1000);
           // profile.element.find(by.xpath(''))
    profile.useXpath()
    .click("//span[normalize-space()='Profile']")
            //.click('@MicrosoftIcon')
            .pause(1000)
            .click("//a[normalize-space()='Contributions']");
            profile.useCss()
            .click(".btn.btn-primary.addRewardBtn.px-2.mt-n1")
            
        
            },
          
  };