function getCurrentFormattedDate() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear(); 
  // Return the formatted date
  return `${month} ${day}, ${year}`;
}

describe('Leaderboard : Redeemed Rewards Tab Test', () => {

  before((client) => {
    client
      .url('https://nashtechglobal.qa.go1percent.com')
      .window.maximize();
    rewardsPage = browser.page.Leaderboard_rewards_part2.rewards();
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
    redeemedRewardsTab = browser.page.Leaderboard_rewards_part2.redeem_reward();
    redeemedRewardsTab
      .openRewardReport();
  });

  //TC : 1169
  it('admin should be able to click on reward report button ', (client) => { 
  });

  //TC : 1170
  it('admin should be able to see list of names', (client) => {
    redeemedRewardsTab
      .assertRewardReport();
  });

  //TC : 1171
  it('admin should be able to click on any contributors tab', (client) => {
    redeemedRewardsTab
      .assertRewardReport()
      .openRedeemRequestWindow()
      .closeRedeemRequestWindow(); 
  });

  //TC : 1172
  /**
   * BUG : 
   * 1. On resetting the filter, the list does not appear
   * 2. On clicking process, the window is not closing
   * 3. After processing, the status of the reward changes only on refreshing
   * 
   * APPROACH : 
   * 1. set filter to processing, 
   * 2. check if there is any reward available to process
   * 3. if yes,  go to process window and store its details and process
   *   set filter to processed, assert the stored details
   * 4. if no, prompt error
   */
  
  it('admin should able to change status of reward from processing to process', (client) => {

    //set filter to processing
    redeemedRewardsTab
      .setStatusFilterToProcessing()
      .pause(3000);

      //check if there is any reward available to process
      browser.elements('css selector', 'button.btn.text-white.status-btn.mb-0.processingStatus', results => {
        if (results.value.length > 0) { 
          //open process window
          redeemedRewardsTab.openRedeemRequestWindowAndGetDetails(function (rewardDetails) {
            //store its details
            console.log('Reward Details:', rewardDetails);
            // process the request
            redeemedRewardsTab
            .processReward()
            //BUG : the window is not closing on its own
            .closeRedeemRequestWindow()
            .setStatusFilterToProcessed();
            //BUG : the page needs to be refreshed
            browser.refresh();
            //assert the stored details
            redeemedRewardsTab.assertProcessedReward(rewardDetails);
          });
        }
        else { 
          console.log('No Redeemed Reward Available'); 
        }
      });
  });

  // TC : 1173
  it('admin should able to switch to competency from Individual', (client) => {
    redeemedRewardsTab
      .switchToCompetency()
      .matchRewardReport()
      .switchToIndividual()
      .assertRewardReport();
  });

  //TC : 1174
  it('admin should be able to apply filter in all time dropdown', (client) => {
  redeemedRewardsTab
    .setTimeFilterToToday()
    .matchDate(getCurrentFormattedDate())
    .resetTimeFilter();
  });
  
  //TC : 1175
  //BUG : On resetting the filter, the list does not appear
  it('admin should able to filter out the status of reward', (client) => {
    redeemedRewardsTab
      .setStatusFilterToProcessing()
      .pause(3000);
      //check if there is any reward available to process
      browser.elements('css selector', 'button.btn.text-white.status-btn.mb-0.processingStatus', results => {
        if (results.value.length > 0) { 
          browser.assert.textContains('button.btn.text-white.status-btn.mb-0.processingStatus', 'PROCESSING');
        }
        else { 
          console.log('No Redeemed Reward Available'); 
        }
      });
  });

  TC : 1176
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