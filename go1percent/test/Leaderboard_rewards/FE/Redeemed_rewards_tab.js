describe('Leaderboard : Update Rewards Tab Test', () => {

  before((client) => {
    client
    .url('https://nashtechglobal.qa.go1percent.com')
    .window.maximize();
    rewardsPage = browser.page.RewardsPage();
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
    redeemedRewardsTab = browser.page.Redeemed_rewards_tab();
    redeemedRewardsTab
      .openRewardReport();
  });

  //TC : 1169
  it('admin should be able to click on reward report button ', (client) => { 
  });

  //TC : 1170
  it('admin should be able to see list of names', (client) => {
    redeemedRewardsTab = browser.page.Redeemed_rewards_tab();
    redeemedRewardsTab
      .assertRewardReportDetails('test one', 'QC Competency', 'Trolly', '2 points', 'Nov 7, 2023');
  });

  //TC : 1171
  it('admin should be able to click on any contributors tab', (client) => {
    redeemedRewardsTab = browser.page.Redeemed_rewards_tab();
    redeemedRewardsTab
      .openRedeemRequestWindow()
      .closeRedeemRequestWindow(); 
  });

  //TC : 1172
  it('admin should able to change status of reward from processing to process', (client) => {
    redeemedRewardsTab = browser.page.Redeemed_rewards_tab();
    redeemedRewardsTab
    .setStatusFilterToProcessing()
    .matchStatus('PROCESSING')
    .openRedeemRequestWindow()
    .changeStatusOfReward()
    .resetStatusFilter()
    .waitForElementPresent('@processedStatus', 5000)
    .assert.textContains('@processedStatus', 'PROCESSED');
  });

  //TC : 1173
  it('admin should able to switch to competency from Individual', (client) => {
    redeemedRewardsTab = browser.page.Redeemed_rewards_tab();
    redeemedRewardsTab
      .switchToCompetency()
      .switchToIndividual();
  });

  //TC : 1174
  it('admin should be able to apply filter in all time dropdown', (client) => {
  redeemedRewardsTab = browser.page.Redeemed_rewards_tab();
  redeemedRewardsTab
    .setTimeFilterToToday()
    .matchDate('Nov 7, 2023')
    .resetTimeFilter();

  });
  
  //TC : 1175
  it('admin should able to filter out the status of reward', (client) => {
    redeemedRewardsTab = browser.page.Redeemed_rewards_tab();
    redeemedRewardsTab
      .setStatusFilterToProcessing()
      .matchStatus('PROCESSING')
      .resetStatusFilter();
  });

  //TC : 1176
  //show more is dispalyed, instead of redeemed rewards msg
  it('admin should able to see blank screen with message', (client) => {
    redeemedRewardsTab = browser.page.Redeemed_rewards_tab();
      redeemedRewardsTab
      .searchNasher('Tester')
      .waitForElementPresent('div.report-card-footer > div') 
      .assert.textContains('div.report-card-footer > div', 'SHOW MORE');
  });
})