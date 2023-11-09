const globalsData = require('../../../globals')

describe('Leaderboard : Update Rewards Tab Test', () => {
  
  before((client) => {
    client
    .url('https://nashtechglobal.qa.go1percent.com')
    .window.maximize();
    rewardsPage = browser.page.Leaderboard_Rewards.RewardsPage();
    rewardsPage
    .signIn()
    .goToRewards();
  });


  after((client, done) => {
    client.end(() => {
      done();
    });
  });

  // //TC : 1164
  it('admin should not be able to edit Available For option', (client) => {
  updateRewardsTab = browser.page.Leaderboard_Rewards.Update_rewards_tab();
    updateRewardsTab
    .openUpdateTab()
    .editAvailableFor()
    .closeUpdateTab();
  });

  // //TC : 1165
  it('admin should able to change expiry date of existing rewards', (client) => {
    updateRewardsTab = browser.page.Leaderboard_Rewards.Update_rewards_tab();
    updateRewardsTab
    .openUpdateTab()
    .changeExpiryDate();
  });

  // //TC : 1166
  it('admin should be able to click on cancel button', (client) => {
    updateRewardsTab = browser.page.Leaderboard_Rewards.Update_rewards_tab();
    updateRewardsTab
    .openUpdateTab()
    .closeUpdateTab();
  });

  // //TC : 1167
  it('admin should be able to delete existing reward by clicking on delete button', (client) => {
    updateRewardsTab = browser.page.Leaderboard_Rewards.Update_rewards_tab();
    updateRewardsTab
    .openUpdateTab()
    .deleteReward();
  });

  // //TC : 1168
  it('admin should be able to switch on for competency option ', (client) => {
    updateRewardsTab = browser.page.Leaderboard_Rewards.Update_rewards_tab();
    updateRewardsTab
    .switchToCompetency();
  }); 

   //TC : 1182
   it('admin should  be able to delete reward from competency section', (client) => {
    updateRewardsTab = browser.page.Leaderboard_Rewards.Update_rewards_tab();
    updateRewardsTab
    .switchToCompetency()
    .openUpdateTab()
    .deleteReward();
  }); 

  
});
  
  
  
  