/**
 * Helper functions
 */
function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();
  return `${day}-${month}-${year}`;
}

function addImage (imagePath) {
  browser
  .isEnabled('div.ImageMinWidthClass > input', function(result) {
      if (result.value) {
          // Element is interactable, proceed with file upload
          browser.uploadFile('div.ImageMinWidthClass > input', imagePath);
      } else {
          console.error('Element is not interactable');
      }
  });
}

function generateRandomString(length) {
  const allowedChars = 'abcdefghijklmnopqrstuvwxyz';
  let randomString = '';

  // Generate the first character separately to ensure it's capitalized
  randomString += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)).toUpperCase();

  // Generate the rest of the string
  for (let i = 1; i < length; i++) {
    randomString += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  }
  return randomString;
}

/**
 * Test cases
 */

describe('Leaderboard : Add Rewards Tab Test', () => {

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
    addRewardTab = browser.page.Leaderboard_rewards_part2.add_reward();
    addRewardTab
      .openAddRewardTab();
    addImage('/home/knoldus/go1Percent_Automation/go1percent/files/Reward.jpeg');
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
    const rewardName = generateRandomString(6);
    addRewardTab
    .addARewardDetails(rewardName, 'Testing Purpose', '1000', '100', '07-11-2027')
    .execute(function() {
        document.querySelector('button.yes-button.font-weight-light.bg-transparent').scrollIntoView();
    })
    .setAvaiableForIndividual()
    .clickSaveButton()
    .assertAlert();

    //assert reward is added in the individual section
    updateRewardsTab = browser.page.Leaderboard_rewards_part2.update_reward();
    updateRewardsTab
    .openUpdateTab()
    .assert.valueContains('@rewardName', rewardName)
    .closeUpdateTab();
  }); 

  // TC : 1181
  it('admin should able to see competency reward in competency section', (client) => {
    const rewardName = generateRandomString(6);
    addRewardTab
    .addARewardDetails(rewardName, 'Testing Purpose', '1000', '100', '07-11-2027')
    .execute(function() {
      document.querySelector('button.no-button.font-weight-light.bg-transparent').scrollIntoView();
    })
    .setAvaiableForCompetency()
    .clickSaveButton()
    .assertAlert();
    browser.refresh();

    //check reward is added in the competency section
    updateRewardsTab = browser.page.Leaderboard_rewards_part2.update_reward();
    updateRewardsTab
    .switchToCompetency()
    .openUpdateTab()
    .assert.valueContains('@rewardName', rewardName)
    .closeUpdateTab();
  });  

  // TC : 1183
  it('admin should not able to add current date in exp date it should a popup message ', (client) => {
    addRewardTab
    .addARewardDetails(generateRandomString(6), 'Testing Purpose', '1000', '100', getCurrentDate())
    .execute(function() {
      document.querySelector('button.no-button.font-weight-light.bg-transparent').scrollIntoView();
    })
    .setAvaiableForCompetency()
    .clickSaveButton()
    .assertAlert();
  });  

  // TC : 1184 : new test case 
  it('admin should not able to add reward with same name', (client) => {
    addRewardTab
    .addARewardDetails('First Test Reward', 'Testing Purpose', '1000', '100', '07-11-2027')
    .execute(function() {
      document.querySelector('button.no-button.font-weight-light.bg-transparent').scrollIntoView();
    })
    .setAvaiableForCompetency()
    .clickSaveButton()
    .assertAlert();
  });  

  //TC : 1185 : new test case 
  it('admin should not able to add reward with name that contain special symbols and number', (client) => {
    addRewardTab
    .addARewardDetails('Test_Reward', 'Testing Purpose', '1000', '100', '07-11-2027')
    .execute(function() {
      document.querySelector('button.no-button.font-weight-light.bg-transparent').scrollIntoView();
    })
    .setAvaiableForCompetency()
    .clickSaveButton()
    .assertAlert();
  });
});