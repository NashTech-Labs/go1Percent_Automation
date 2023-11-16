const login = require('../../../helpers/Go1PercentFEAutomation/TECHHUB/AdminUser/go1Percentloging');
const helper = require('../../../helpers/Go1PercentFEAutomation/LeaderboardRewards/helperFunctions.js');

describe('Leaderboard : Add Rewards Tab Test', () => {

    before((client) => {
      login.beforeEach(browser);
      login['landing on dashboard page'](browser);
      browser.page.Leaderboard_Rewards.rewards().goToRewards();
  });
  

    after((client, done) => {
      client.end(() => {
          done();
      });
  });


  beforeEach((client) => {
    addRewardTab = browser.page.Leaderboard_Rewards.add_reward();
    addRewardTab
      .openAddRewardTab()
      .addImage(browser);
  });

  //TC : 1177
  it('admin should be able to add new reward by clicking on add reward button ', (client) => {
    addRewardTab
      .closeAddRewardTab();
  });   

  //TC : 1178
  it('admin should able to add image in add new reward page ', (client) => {
    addRewardTab
      .closeAddRewardTab();
  }); 

  //TC : 1179
  it('admin should not be able to click on save button without adding details', (client) => { 
    addRewardTab
      .clickSaveButton()
      .assert.textContains('@errorMessage', 'Name is Required')
      .closeAddRewardTab();
  });   

  //TC : 1180
  it('admin should be be able to save reward after adding all the details', (client) => {
    const rewardName = helper.generateRandomString();
    addRewardTab
    .addARewardDetails(rewardName, '07-11-2027')
    .setAvailableForIndividual()
    .clickSaveButton()
    .assertAlert();

    //assert reward is added in the individual section
    updateRewardsTab = browser.page.Leaderboard_Rewards.update_reward();
    updateRewardsTab
    .openUpdateTab()
    .assert.valueContains('@rewardName', rewardName)
    .closeUpdateTab();
  }); 

  // TC : 1181
  it('admin should able to see competency reward in competency section', (client) => {
    const rewardName = helper.generateRandomString();
    addRewardTab
    .addARewardDetails(rewardName, '07-11-2027')
    .setAvailableForCompetency()
    .clickSaveButton()
    .assertAlert();
    browser.refresh();

    //check reward is added in the competency section
    updateRewardsTab = browser.page.Leaderboard_Rewards.update_reward();
    updateRewardsTab
    .switchToCompetency()
    .openUpdateTab()
    .assert.valueContains('@rewardName', rewardName)
    .closeUpdateTab();
  });  

  // TC : 1183
  it('admin should not able to add current date in exp date it should a popup message ', (client) => {
    const rewardName = helper.generateRandomString();
    const today = helper.getCurrentDate();
    addRewardTab
    .addARewardDetails(rewardName, today)
    .setAvailableForCompetency()
    .clickSaveButton()
    .assertAlert();
  });  

  // TC : 1184 : new test case 
  it('admin should not able to add reward with same name', (client) => {
    addRewardTab
    .addARewardDetails('First Test Reward', '07-11-2027')
    .setAvailableForCompetency()
    .clickSaveButton()
    .assertAlert();
  });  

  //TC : 1185 : new test case 
  it('admin should not able to add reward with name that contain special symbols and number', (client) => {
    addRewardTab
    .addARewardDetails('Test_Reward', '07-11-2027')
    .setAvailableForCompetency()
    .clickSaveButton()
    .assertAlert();
  });
});