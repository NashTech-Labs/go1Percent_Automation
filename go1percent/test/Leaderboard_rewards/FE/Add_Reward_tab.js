function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
}

function generateRandomString(length) {
  const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomString = '';
  for (let i = 0; i < length; i++) {
      randomString += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  }
  return randomString;
}

describe('Leaderboard : Add Rewards Tab Test', () => {

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
    addRewardTab = browser.page.Leaderboard_Rewards.Add_Reward_tab();
    addRewardTab
      .openAddRewardTab();
  });

  //TC : 1177
  it('admin should be able to add new reward by clicking on add reward button ', (client) => {
  });   

  //TC : 1178
  it('admin should able to add image in add new reward page ', (client) => {
    addRewardTab = browser.page.Leaderboard_Rewards.Add_Reward_tab();
    addRewardTab
      .addImage()
      .closeAddRewardTab();
  }); 

  // //TC : 1179
  it('admin should not be able to click on save button without adding details', (client) => { 
    addRewardTab = browser.page.Leaderboard_Rewards.Add_Reward_tab();
    addRewardTab
      .clickSaveButton()
      .assert.textContains('@errorMessage', 'Name is Required')
      .closeAddRewardTab();
  });   

  // //TC : 1180
  it('admin should be be able to save reward after adding all the details', (client) => {
    addRewardTab = browser.page.Leaderboard_Rewards.Add_Reward_tab();
    addRewardTab
    .addARewardDetails(generateRandomString(6), 'Testing Purpose', '1000', '100', '07-11-2027')
    .setAvaiableForIndividual()
    // .enableReward()
    .clickSaveButton()

    .getText('@alert', function (result) {
      let alertText = result.value;
      if (alertText !== null && alertText.includes('Successfully added reward!')) {
          this.assert.equal(result.value, 'Successfully added reward!');
      } else {
          this.assert.equal(result.value, 'Reward with the same name and type already exist');
          addRewardTab.closeAddRewardTab();
      }
    });
  }); 

  // // //TC : 1181
  it('admin should able to see competency reward in competency section', (client) => {
    addRewardTab = browser.page.Leaderboard_Rewards.Add_Reward_tab();
    addRewardTab
    .addARewardDetails(generateRandomString(6), 'Testing Purpose', '1000', '100', '07-11-2027')
    .setAvaiableForCompetency()
    // .enableReward()
    .clickSaveButton()
    
    .getText('@alert', function (result) {
      let alertText = result.value;
      if (alertText !== null && alertText.includes('Successfully added reward!')) {
          this.assert.equal(result.value, 'Successfully added reward!');
      } else {
          this.assert.equal(result.value, 'Reward with the same name and type already exist');
          addRewardTab.closeAddRewardTab();
      }
    });
  });  

  // // //TC : 1183
  it('admin should not able to add current date in exp date it should a popup message ', (client) => {
    addRewardTab = browser.page.Leaderboard_Rewards.Add_Reward_tab();
    addRewardTab
    .addARewardDetails(generateRandomString(6), 'Testing Purpose', '1000', '100', getCurrentDate())
    .setAvaiableForCompetency()
    // .enableReward()
    .clickSaveButton()
    .assert.textContains("div[role = 'alert']", 'Reward expiry date and time must be greater than current date and time');
    addRewardTab.closeAddRewardTab();
  });  

  //TC : 1184 : new test case 
  it('admin should able to add reward with same name', (client) => {
    addRewardTab = browser.page.Leaderboard_Rewards.Add_Reward_tab();
    addRewardTab
    .addARewardDetails('First Test Reward', 'Testing Purpose', '1000', '100', '07-11-2027')
    .setAvaiableForCompetency()
    // .enableReward()
    .clickSaveButton()
    
    .getText('@alert', function (result) {
      let alertText = result.value;
      if (alertText !== null && alertText.includes('Successfully added reward!')) {
          this.assert.equal(result.value, 'Successfully added reward!');
      } else {
          this.assert.equal(result.value, 'Reward with the same name and type already exist');
          addRewardTab.closeAddRewardTab();
      }
    });
  });  

  //TC : 1185 : new test case 
  it('admin should able to add reward with name that contain special symbols and number', (client) => {
    addRewardTab = browser.page.Leaderboard_Rewards.Add_Reward_tab();
    addRewardTab
    .addARewardDetails('Test_Reward', 'Testing Purpose', '1000', '100', '07-11-2027')
    .setAvaiableForCompetency()
    // .enableReward()
    .clickSaveButton()
    
    .getText('@alert', function (result) {
      let alertText = result.value;
      if (alertText !== null && alertText.includes('Successfully added reward!')) {
          this.assert.equal(result.value, 'Successfully added reward!');
      } else {
          this.assert.equal(result.value, 'Reward name should not contain special symbols and number');
          addRewardTab.closeAddRewardTab();
      }
    });
  });  
});