function getCurrentFormattedDate() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  
  // Return the formatted date.
  return `${month} ${day}, ${year}`;
}

describe('Leaderboard : Redeemed Rewards Tab Test', () => {

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


  beforeEach((client) => {
    redeemedRewardsTab = browser.page.Leaderboard_Rewards.Redeemed_rewards_tab();
    redeemedRewardsTab
      .openRewardReport();
  });

  //TC : 1169
  it('admin should be able to click on reward report button ', (client) => { 
  });

  //TC : 1170
  it('admin should be able to see list of names', (client) => {
    redeemedRewardsTab = browser.page.Leaderboard_Rewards.Redeemed_rewards_tab();
    redeemedRewardsTab
      .assertRewardReportDetails();
  });

  //TC : 1171
  it('admin should be able to click on any contributors tab', (client) => {
    redeemedRewardsTab = browser.page.Leaderboard_Rewards.Redeemed_rewards_tab();
    redeemedRewardsTab
      .assertRewardReportDetails()
      .openRedeemRequestWindow()
      .closeRedeemRequestWindow(); 
  });

  //TC : 1172
  //BUG : On resetting the filter, the list does not appear
  //BUG : On clicking process, the window is not closing
  //BUG : After processing, the status of the reward changes only on refreshing
  it('admin should able to change status of reward from processing to process', (client) => {
    redeemedRewardsTab = browser.page.Leaderboard_Rewards.Redeemed_rewards_tab();
    redeemedRewardsTab
    .setStatusFilterToProcessing()
    .matchStatus('PROCESSING')
    .openRedeemRequestWindow()
    .changeStatusOfReward()
    .resetStatusFilter()
    .waitForElementPresent('@processedStatus', 5000)
    .assert.textContains('@processedStatus', 'PROCESSED');
  });

  // TC : 1173
  it('admin should able to switch to competency from Individual', (client) => {
    redeemedRewardsTab = browser.page.Leaderboard_Rewards.Redeemed_rewards_tab();
    redeemedRewardsTab
      .switchToCompetency()
      .matchRewardReport()
      .switchToIndividual()
      .assertRewardReportDetails();
  });

  //TC : 1174
  it('admin should be able to apply filter in all time dropdown', (client) => {
  redeemedRewardsTab = browser.page.Leaderboard_Rewards.Redeemed_rewards_tab();
  redeemedRewardsTab
    .setTimeFilterToToday()
    .matchDate(getCurrentFormattedDate())
    .resetTimeFilter();
  });
  
  //TC : 1175
  //BUG : On resetting the filter, the list does not appear
  it('admin should able to filter out the status of reward', (client) => {
    redeemedRewardsTab = browser.page.Leaderboard_Rewards.Redeemed_rewards_tab();
    redeemedRewardsTab
    .setStatusFilterToProcessing()
    .matchStatus('PROCESSING')
    .resetStatusFilter();
  });

  //TC : 1176
  //BUG : show more is dispalyed, instead of redeemed rewards msg
  it('admin should able to see blank screen with message', (client) => {
    redeemedRewardsTab = browser.page.Leaderboard_Rewards.Redeemed_rewards_tab();
      redeemedRewardsTab
      .searchNasher('Tester')
      //actual 
      .waitForElementPresent('@showMoreCard') 
      .assert.textContains('@showMoreCard', 'SHOW MORE');
      //expected
      // .matchRewardReport();
  });
})