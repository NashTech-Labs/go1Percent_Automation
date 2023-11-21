import { NightwatchTests, NightwatchBrowser } from 'nightwatch';
import { RewardPage } from '../../../page-objects/LeaderboardRewards/rewards';
import { AddRewardPage } from '../../../page-objects/LeaderboardRewards/add_reward';
import { UpdateRewardPage } from '../../../page-objects/LeaderboardRewards/update_reward';

const addRewardTest: NightwatchTests = {

    before: (browser: NightwatchBrowser) => {
    const rewardPage= browser.page.LeaderboardRewards.rewards() as RewardPage;
    rewardPage
    .navigate()
    .maximizeWindow()
    .signIn()
    .goToRewards()
    .assert.urlContains('rewards/list', 'Reward tab is opened');
    },

    beforeEach : (browser: NightwatchBrowser) => {
    const addRewardTab= browser.page.LeaderboardRewards.add_reward() as AddRewardPage;
    addRewardTab
      .openAddRewardTab()
      .addImage(browser);
    },

    after: (browser: NightwatchBrowser) => {
        browser.end();
    },


    //TC : 1177 
    'admin should be able to add new reward by clicking on add reward button': (browser: NightwatchBrowser) => {
        const addRewardTab= browser.page.LeaderboardRewards.add_reward() as AddRewardPage;
        addRewardTab
        .assert.textContains('@addRewardTitle', 'Add a new reward', 'Add reward tab is opened.')
        .closeAddRewardTab();
    },

    //TC : 1178
    'admin should able to add image in add new reward page': (browser: NightwatchBrowser) => {
    const addRewardTab= browser.page.LeaderboardRewards.add_reward() as AddRewardPage;
    addRewardTab
    .assert.elementPresent('@imageCrossButton', 'Able to add image in add new reward page.')
    .closeAddRewardTab();
    },

    //TC : 1179
    'admin should not be able to click on save button without adding details': (browser: NightwatchBrowser) => {
        const addRewardTab= browser.page.LeaderboardRewards.add_reward() as AddRewardPage;
        addRewardTab
          .clickSaveButton()
          .assert.textContains('@errorMessage', 'Name is Required', 'Cannot save reward without adding name.')
          .closeAddRewardTab();
    },

    //TC : 1180
    'admin should be be able to save reward after adding all the details': (browser: NightwatchBrowser) => {
        
        const addRewardTab = browser.page.LeaderboardRewards.add_reward() as AddRewardPage;
        const updateRewardsTab = browser.page.LeaderboardRewards.update_reward() as UpdateRewardPage;
        const rewardName = addRewardTab.generateRandomString();

        addRewardTab
        .addARewardDetails(rewardName, '07-11-2027');
        browser
        .execute(function() {
            document.querySelector('button.no-button')?.scrollIntoView();
        });
        addRewardTab
        .setAvailableForIndividual()
        .clickSaveButton()
        .assert.textContains('@alert', 'Successfully added reward!', 'Reward is successfully added in individual section.');
    
        //assert reward is added in the individual section
        updateRewardsTab
        .openUpdateTab()
        .assert.valueContains('@rewardName', rewardName, 'Reward added is present in individual section.')
        .closeUpdateTab();
    },

      // TC : 1181
    'admin should able to see competency reward in competency section': (browser: NightwatchBrowser) => {
        const addRewardTab = browser.page.LeaderboardRewards.add_reward() as AddRewardPage;
        const updateRewardsTab = browser.page.LeaderboardRewards.update_reward() as UpdateRewardPage;
        const rewardName = addRewardTab.generateRandomString();
    
        addRewardTab
        .addARewardDetails(rewardName, '07-11-2027');
        browser
        .execute(function() {
            document.querySelector('button.yes-button')?.scrollIntoView();
        });
        addRewardTab
        .setAvailableForCompetency(browser)
        .clickSaveButton()
        .assert.textContains('@alert', 'Successfully added reward!', 'Reward is successfully added in competency section.');
        
        browser.refresh();
    
        //check reward is added in the competency section
        updateRewardsTab
        .switchToCompetency()
        .openUpdateTab()
        .assert.valueContains('@rewardName', rewardName, 'Reward added is present in competency section.')
        .closeUpdateTab();
    },

    // TC : 1183
    'admin should not able to add current date in exp date it should a popup message': (browser: NightwatchBrowser) => {
        const addRewardTab = browser.page.LeaderboardRewards.add_reward() as AddRewardPage;
        const updateRewardsTab = browser.page.LeaderboardRewards.update_reward() as UpdateRewardPage;
        const rewardName = addRewardTab.generateRandomString();
        const today = addRewardTab.getCurrentDate();
    
        addRewardTab
        .addARewardDetails(rewardName, today);
        browser
        .execute(function() {
            document.querySelector('button.yes-button')?.scrollIntoView();
        });
        addRewardTab
        .setAvailableForCompetency(browser)
        .clickSaveButton()
        .assert.textContains('@alert', 'Reward expiry date and time must be greater than current date and time',
                            'admin is not able to add current date in exp date')
        .closeAddRewardTab();
    },

    // TC : 1184 : new test case 
    'admin should not able to add reward with same name': (browser: NightwatchBrowser) => {
        const addRewardTab = browser.page.LeaderboardRewards.add_reward() as AddRewardPage;
        addRewardTab
        .addARewardDetails('First Test Reward', '07-11-2027');
        browser
        .execute(function() {
            document.querySelector('button.yes-button')?.scrollIntoView();
        });
        addRewardTab
        .setAvailableForCompetency(browser)
        .clickSaveButton()
        .assert.textContains('@alert', 'Reward with the same name and type already exist',
                            'admin is not able to add reward with same name')
        .closeAddRewardTab();

        
    },

     //TC : 1185 : new test case 
     'admin should not able to add reward with name that contain special symbols and number': (browser: NightwatchBrowser) => {
        const addRewardTab = browser.page.LeaderboardRewards.add_reward() as AddRewardPage;
        addRewardTab
        .addARewardDetails('Test_Reward', '07-11-2027');
        browser
        .execute(function() {
            document.querySelector('button.yes-button')?.scrollIntoView();
        });
        addRewardTab
        .setAvailableForCompetency(browser)
        .clickSaveButton()
        .assert.textContains('@alert', 'Reward name should not contain special symbols and number',
                            'admin is not able to add reward with name that contain special symbols and number')
        .closeAddRewardTab();
    } 

};
 
export default addRewardTest;
