module.exports = {
    '9.verify that user should be able to see view rewards list by clicking on the view rewards button ': function (browser) {
      const profile = browser.page.profilePage();
      profile
        .navigate()
        .loginAndNavigateToDashboard('testadmin', 'testadmin') 
        .verifyViewRewardsButtonPresent()
        .click('@viewRewardsButton')
        .verifyRewardsListVisible();

  
  
      browser.end();
    },
  };
  