// verifyRewardsRedirection.js

//const profilePage = require('./go1percent/page-objects//profilePage');

module.exports = {
  '2.Verify user should be re-directed to the rewards page when he clicks on view rewards button': function (browser) {
    const profile = browser.page.profilePage();
    profile
      .navigate()
      .loginAndNavigateToDashboard('testadmin', 'testadmin')
      .verifyViewRewardsButtonPresent()
      .verifyRewardRedirection()
    browser.end();
  },
};
