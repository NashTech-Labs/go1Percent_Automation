// verifyEditReward.js
//import profilePage from "../page-objects/profilePage";

module.exports = {
  '3.Verify admin can be re-directed to the rewards page and can able to edit the rewards as well.': function (browser) {
    const profile = browser.page.profilePage();
    profile
      .navigate()
      .loginAndNavigateToDashboard('testadmin', 'testadmin')
      .verifySuccessMessage()


    browser.end();
  },
};
