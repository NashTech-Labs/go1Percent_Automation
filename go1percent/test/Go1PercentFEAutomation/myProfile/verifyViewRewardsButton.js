// verifyViewRewardsButton.js

//const profile = require('./go1percent/page-objects/My_Profile/profilePage');

module.exports = {
  '1.Verify that view rewards button is present on the profile page when no reward is redeemed till now.': function (browser) {
    const profile = browser.page.profilePage();

    profile
      .navigate()
      .loginAndNavigateToDashboard('testadmin', 'testadmin')
      .verifyViewRewardsButtonPresent()


    browser.end();
  },
};
