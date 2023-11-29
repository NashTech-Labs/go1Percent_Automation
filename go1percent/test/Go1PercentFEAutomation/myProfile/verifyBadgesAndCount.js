module.exports = {
    '12.verify that user should be able to view the badges and the count in the badges section ': function (browser) {
      const profile = browser.page.profilePage();
      profile
        .navigate()
        .loginAndNavigateToDashboard('testadmin', 'testadmin') 
        .verifyBadgesAndCount();
  
  
      browser.end();
    },
  };