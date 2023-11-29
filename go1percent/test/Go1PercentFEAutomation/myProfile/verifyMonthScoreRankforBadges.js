module.exports = {
    '13.verify that user should be able to see month and score and rank by clicking on the badges': function (browser) {
      const profile = browser.page.profilePage();
      profile
        .navigate()
        .loginAndNavigateToDashboard('testadmin', 'testadmin') 
        .verifyMonthScoreAndRank()
  
      browser.end();
    },
  };