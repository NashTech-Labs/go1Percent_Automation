import { NightwatchTests, NightwatchBrowser } from 'nightwatch';
import { RewardPage } from '../../../page-objects/Leaderboard_Rewards/rewards';
import { UpdateRewardPage } from '../../../page-objects/Leaderboard_Rewards/update_reward';


const UpdateRewardTest: NightwatchTests = {

    before: (browser: NightwatchBrowser) => {
    const rewardPage= browser.page.Leaderboard_Rewards.rewards() as RewardPage;
    browser
    .url('https://nashtechglobal.qa.go1percent.com')
    .window.maximize();
    rewardPage
    .signIn()
    .goToRewards()
    .assert.urlContains('rewards/list', 'Reward tab is opened');
    },

    after: (browser: NightwatchBrowser) => {
        browser.end();
    },

  // TC: 1164
  'admin should not be able to edit Available For option': (browser: NightwatchBrowser) => {
    const updateRewardsTab = browser.page.Leaderboard_Rewards.update_reward() as UpdateRewardPage;
      updateRewardsTab
      .openUpdateTab()
      .assert.textContains('@updateRewardTitle', 'Update Reward', 'Update Reward tab is opened.')
      .editAvailableFor()
      .isEnabled('@availableForButton', function(result) {
        this.assert.equal(result.value, false, 'Available for Button is disabled.');
      })
      .closeUpdateTab();
  },

  // TC: 1165
  'admin should be able to change expiry date of existing rewards': (browser: NightwatchBrowser) => {
    const updateRewardsTab = browser.page.Leaderboard_Rewards.update_reward() as UpdateRewardPage;
    updateRewardsTab
    .openUpdateTab()
    .changeExpiryDate()
    .assert.textContains('@alert', 'Reward was successfully updated!')
    .waitForElementNotPresent('@alert', 5000);
  },

  // TC: 1166
  'admin should be able to click on cancel button': (browser: NightwatchBrowser) => {
    const updateRewardsTab = browser.page.Leaderboard_Rewards.update_reward() as UpdateRewardPage;
    updateRewardsTab
    .openUpdateTab()
    .closeUpdateTab()
    .assert.not.elementPresent('@updateRewardTitle', 'Update Reward tab is closed.');
  },

   // TC: 1167
   'admin should be able to delete existing reward by clicking on delete button': (browser: NightwatchBrowser) => {
    const updateRewardsTab = browser.page.Leaderboard_Rewards.update_reward() as UpdateRewardPage;
    updateRewardsTab
    .openUpdateTab()
    .deleteReward()
    .assert.textContains('@alert', 'Reward is disabled', 'Disabled existing reward by clicking on delete button.')
    .waitForElementNotPresent('@alert', 5000);
  },

  // TC: 1168
  'admin should be able to switch on for competency option': (browser: NightwatchBrowser) => {
    const updateRewardsTab = browser.page.Leaderboard_Rewards.update_reward() as UpdateRewardPage;
      updateRewardsTab
      .switchToCompetency()
      .assert.cssProperty('@competencyOption', 'background-color', 'rgba(236, 64, 122, 1)', 'Switched to Competency.');
  },

    // TC: 1182
   'admin should be able to delete reward from competency section': (browser: NightwatchBrowser) => {
    const updateRewardsTab = browser.page.Leaderboard_Rewards.update_reward() as UpdateRewardPage;
    updateRewardsTab
    .switchToCompetency()
    .assert.cssProperty('@competencyOption', 'background-color', 'rgba(236, 64, 122, 1)', 'Switched to Competency.')
    .openUpdateTab()
    .deleteReward()
    .assert.textContains('@alert', 'Reward is disabled', 'Disabled existing reward by clicking on delete button.');
  },

};
 
export default UpdateRewardTest;