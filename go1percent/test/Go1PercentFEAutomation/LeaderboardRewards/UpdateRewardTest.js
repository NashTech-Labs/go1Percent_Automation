const login = require('../../../helpers/Go1PercentFEAutomation/TECHHUB/AdminUser/go1Percentloging');
describe('Leaderboard: Update Rewards Tab Test', () => {

  before((client) => {
    login.beforeEach(browser);
    login['landing on dashboard page'](browser);
    browser.page.LeaderboardRewards.rewards().goToRewards();
  });

  after((client, done) => {
    client.end(() => {
      done();
    });
  });

  beforeEach((client) => {
    updateRewardsTab = browser.page.LeaderboardRewards.update_reward();
  });

  // TC: 1164
  it('admin should not be able to edit Available For option', (client) => {
    updateRewardsTab
      .openUpdateTab()
      .editAvailableFor()
      .closeUpdateTab();
  });

  // TC: 1165
  it('admin should be able to change expiry date of existing rewards', (client) => {
    updateRewardsTab
      .openUpdateTab()
      .changeExpiryDate();
  });

  // TC: 1166
  it('admin should be able to click on cancel button', (client) => {
    updateRewardsTab
      .openUpdateTab()
      .closeUpdateTab();
  });

  // TC: 1167
  it('admin should be able to delete existing reward by clicking on delete button', (client) => {
    updateRewardsTab
      .openUpdateTab()
      .deleteReward();
  });

  // TC: 1168
  it('admin should be able to switch on for competency option', (client) => {
    updateRewardsTab
      .switchToCompetency();
  });

  // TC: 1182
  it('admin should be able to delete reward from competency section', (client) => {
    updateRewardsTab
      .switchToCompetency()
      .openUpdateTab()
      .deleteReward();
  });

});
