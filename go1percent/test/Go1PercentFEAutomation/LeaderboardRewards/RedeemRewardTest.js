const login = require('../../../helpers/Go1PercentFEAutomation/TECHHUB/AdminUser/go1Percentloging');
const helper = require('../../../helpers/Go1PercentFEAutomation/LeaderboardRewards/helperFunctions.js');

describe('Leaderboard : Redeemed Rewards Tab Test', () => {

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
    redeemedRewardsTab = browser.page.Leaderboard_Rewards.redeem_reward();
    redeemedRewardsTab
      .openRewardReport();
  });

  //TC : 1169
  it('admin should be able to click on reward report button ', (client) => { 
  });

  //TC : 1170
  it('admin should be able to see list of names', (client) => {
    redeemedRewardsTab
      .assertIndividualReport();
  });

  //TC : 1171
  it('admin should be able to click on any contributors tab', (client) => {
    redeemedRewardsTab
      .assertIndividualReport()
      .openRedeemRequestWindow()
      .closeRedeemRequestWindow(); 
  });

  //TC : 1172
  /**
   * BUG : 
   * 1. On resetting the filter, the list does not appear
   * 2. On clicking process, the window is not closing
   * 3. After processing, the status of the reward changes only on refreshing
   * */
  it('admin should able to change status of reward from processing to process', (client) => {
    //set filter to processing
    redeemedRewardsTab
      .setStatusFilterToProcessing()
      .pause(3000)
      .checkAndProcessTheRequest(browser);
  });

  // TC : 1173
  it('admin should able to switch to competency from Individual', (client) => {
    redeemedRewardsTab
      .switchToCompetency()
      .assertCompetenecyReport()
      .switchToIndividual()
      .assertIndividualReport();
  });

  //TC : 1174
  it('admin should be able to apply filter in all time dropdown', (client) => {
    const currentFormattedDate = helper.getCurrentFormattedDate();
    redeemedRewardsTab
      .setTimeFilterToToday()
      .matchDate(currentFormattedDate)
      .resetTimeFilter();
  });
  
  //TC : 1175
  //BUG : On resetting the filter, the list does not appear
  it('admin should able to filter out the status of reward', (client) => {
    redeemedRewardsTab
      .setStatusFilterToProcessing()
      .pause(3000)
      .assertFilteredResult(browser);
  });

  // TC : 1176
  //BUG : show more is dispalyed, instead of redeemed rewards msg
  it('admin should able to see blank screen with message', (client) => {
      redeemedRewardsTab
      .searchNasher('Tester')
      //actual 
      .waitForElementPresent('@showMoreCard') 
      .assert.textContains('@showMoreCard', 'SHOW MORE');
      //expected
      // .matchRewardReport();
  });
})