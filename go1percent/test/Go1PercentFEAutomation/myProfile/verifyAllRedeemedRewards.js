module.exports = {

  '11.Verify user should be able to view all the rewards redeemed by him/her': function (browser) {
    const profile = browser.page.profilePage();
    profile
      .navigate()
      .loginAndNavigateToDashboard('testadmin', 'testadmin')
      .verifyRedeemedReward()
      .verifyallRedeemedReward();

    browser.end();

  }

}