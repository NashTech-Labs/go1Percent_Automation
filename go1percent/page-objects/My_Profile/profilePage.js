// profilePage.js

const { assert } = require("nightwatch");

module.exports = {
  url: 'https://nashtechglobal.go1percent.com/',
  //url:'https://nashtechglobal.qa.go1percent.com/',

  elements: {
    viewRewardsButton: {
      selector: "//button[@class='btn add-button reedeem-btn mt-5']",
      locateStrategy: 'xpath',
    },
    usernameInput: '#username',
    passwordInput: '#password',
    loginButton: '#kc-login',
    dashboardButton: '.hex',
    editButton: '.editIcon.justify-content-end',
    descriptionInput: '.form-control.reward-controls.ng-valid.ng-dirty.ng-touched',
    updateButton: '#updateButton',
    successMessage: {
      selector: "//div[@aria-label='Reward was successfully updated!']",
      locateStrategy: 'xpath',
    },
    NoBadgesEarned: {
      selector: "//p[normalize-space()='No Badges Earned']",
      locateStrategy: 'xpath',

    },
    profilePicture: {
      selector: "//img[@id='img']",
      locateStrategy: 'xpath',
    },
    rank: {
      selector: "//h4[normalize-space()='126']",
      locateStrategy: 'xpath',
    },
    rankText: {
      selector: "//span[normalize-space()='Overall Rank']",
      locateStrategy: 'xpath',
    },
    updateProfilePicture: {
      selector: "//button[@class='edit-detail-button']",
      locateStrategy: 'xpath',
    },
    save: {
      selector: "//button[normalize-space()='Save']",
      locateStrategy: 'xpath',
    },
    profilePictureStatus: {
      selector: "//div[@aria-label='Profile picture updated successfully!']",
      locateStrategy: 'xpath',
    },
    username: {
      selector: "//h3[normalize-space()='test admin']",
      locateStrategy: 'xpath',
    },
    competencyName: {
      selector: "//span[@class='studio']",
      locateStrategy: 'xpath',
    },
    points: {
      selector: "//div[@class='d-flex flex-column align-items-center points-section line-item']//h4[@class='mt-2'][normalize-space()='0']",
      locateStrategy: 'xpath',
    },
    monthlyScore: {
      selector: "//div[@class='d-flex flex-column align-items-center points-section p-1']//h4[@class='mt-2'][normalize-space()='0']",
      locateStrategy: 'xpath',
    },
    rewardsList:{
      selector: "/html/body/app-root/div/app-main/section/main/div/div/div/app-rewardspage/div/div[2]/app-rewards-list/div/div/div/div[2]",
      locateStrategy: 'xpath',
    },
    redeemedRewardText:{
      selector: "//div[@class='d-flex flex-column align-items-center']//span[contains(text(),'Rewards')]",
      locateStrategy: 'xpath',
    },
    redeemedRewardImage:{
      selector: "//img[@alt='reward']",
      locateStrategy: 'xpath',
    },
    navigateNextRewardButton:{
      selector: "//button[@class='btn btn-icon-only btn-rounded p-3 btn-md d-flex align-items-center justify-content-center']//i[@class='material-icons fs-4 text-white'][normalize-space()='navigate_next']",
      locateStrategy: 'xpath',
    },

    viewBadges:{
      selector: "/html/body/app-root/div/app-main/section/main/div/div/div/app-my-profile/div/div[2]/div[1]/div/div[3]",
      locateStrategy: 'xpath',
    },

    count1:{
      selector: "//div[@class='row badge-card p-3']//div[1]//div[1]//div[1]//div[1]//span[1]",
      locateStrategy: 'xpath',
    },
    count2:{
      selector: "//div[@class='material-symbols-outlined hexagon cursor-pointer']//span[@class='rank-tag-number d-flex align-items-center'][normalize-space()='2']",
      locateStrategy: 'xpath',
    },
    count3:{
      selector: "//div[@class='d-flex justify-content-start align-items-center no-scroll-badges']//div[3]//div[1]//div[1]//div[1]//span[1]",
      locateStrategy: 'xpath',
    },
    count4:{
      selector: "//div[@class='d-flex justify-content-start align-items-center no-scroll-badges']//div[4]//div[1]//div[1]//div[1]//span[1]",
      locateStrategy: 'xpath',
    },
    //body/app-root/div/app-main/section[@class='g-sidenav-show']/main[@class='main-content position-relative max-height-vh-100 h-100 border-radius-lg']/div[@class='container-fluid pb-4']/div[@class='row']/div[@class='col-12']/app-my-profile/div[@class='row board-pos']/div[@class='col-lg-8']/div[@class='card mt-2 card-gap']/div[@class='row badge-card p-3']/div[@class='d-flex justify-content-start align-items-center no-scroll-badges']/div[1]/div[1]/div[1]//*[name()='svg']
    badge1:{
      selector: "//body/app-root/div/app-main/section[@class='g-sidenav-show']/main[@class='main-content position-relative max-height-vh-100 h-100 border-radius-lg']/div[@class='container-fluid pb-4']/div[@class='row']/div[@class='col-12']/app-my-profile/div[@class='row board-pos']/div[@class='col-lg-8']/div[@class='card mt-2 card-gap']/div[@class='row badge-card p-3']/div[@class='d-flex justify-content-start align-items-center no-scroll-badges']/div[1]/div[1]/div[1]//*[name()='svg']",
      locateStrategy: 'xpath',
    },

    month:{
      selector:"//h6[@class='mb-n1']",
      locateStrategy:'xpath',
    },
    score:{
      selector:"//span[@class='score-size']",
      locateStrategy:'xpath',
    },
    badgesRank:{
      selector:"//span[@class='font-weight-light overall-txt-color rankSize']",
      locateStrategy:'xpath',
    },
    
  },

  commands: [{
    verifyViewRewardsButtonPresent: function () {
      return this.waitForElementVisible('@viewRewardsButton', 1000);
    },
    commands: [{
      clickViewRewardsButton: function () {
        return this.click('@viewRewardsButton');
      },
     
    }],
    commands: [{
      verifyImageVisible: function () {
        return this.assert.visible('@profilePicture');
      },
    }],
    commands: [{
      clickEditButton: function () {
        return this.click('@editButton');
      },

      editDescription: function (newDescription) {
        return this.setValue('@descriptionInput', newDescription);
      },

      clickUpdateButton: function () {
        return this.click('@updateButton');
      },
    }],
    verifyNoBadgesEarned: function () {
      return this.waitForElementVisible('@NoBadgesEarned', 5000)
        .assert.containsText('@NoBadgesEarned', 'No Badges Earned');
    },
    verifySuccessMessage: function () {
      return this
        .click('@viewRewardsButton')
        .click('@editButton')
        .click('@updateButton')
        .assert.containsText('@successMessage', 'Reward was successfully updated!');
    },
    loginAndNavigateToDashboard: function (username, password) {
      return this
        .maximizeWindow()
        .pause(1000)
        .setValue('@usernameInput', username)
        .setValue('@passwordInput', password)
        .click('@loginButton')
        .waitForElementVisible('@dashboardButton', 5000)
        .click('@dashboardButton')

    },

    verifyProfilePictureStatus: function () {
      return this
        .click('@updateProfilePicture')
        .click('@save')
        .assert.containsText('@profilePictureStatus', 'Profile picture updated successfully!');
    },

    verifyNameAndCompetencyName: function () {
      return this
        .assert.containsText('@username', 'test admin')
        .assert.containsText('@competencyName', 'Admin & IT');
    },

    verifyPointsMonthlyScoreAndOverAllRank: function () {
      return this
        .assert.textContains('@points', 0)
        .assert.textContains('@monthlyScore', 0)
        .assert.textContains('@rank', 126)


    },

    verifyRewardsListVisible: function () {
      return this.waitForElementVisible('@rewardsList', 5000);
    },

    verifyProfilePictureAndRank: function () {
      return this
        .assert.visible('@profilePicture')
        //.expect.element('@rank').text.to.eq('126')
        //.expect.element('@rankText').text.to.eq('Overall Rank')
        .assert.textContains('@rankText', 'Overall Rank')
        .assert.textContains('@rank', 126);
    },

    verifyRewardRedirection: function () {
      return this
        .click('@viewRewardsButton')
        .assert.urlContains('/rewards');
    },

    verifyRedeemedReward:function(){
      return this
         .assert.visible('@redeemedRewardImage')
         .assert.textContains('@redeemedRewardText','Rewards')
    },

    verifyallRedeemedReward:function(){
      return this
           .click('@navigateNextRewardButton')
           .assert.visible('@redeemedRewardImage')
    },

    verifyBadgesAndCount:function(){
      return this
          .assert.visible('@viewBadges')
          .assert.textContains('@count1',1)
          .assert.textContains('@count2',2)
          .assert.textContains('@count3',1)
          .assert.textContains('@count4',1)
    },

    verifyMonthScoreAndRank:function(){
      return this 
          .click('@badge1')
          .assert.textContains('@month','SEPTEMBER')
          .assert.textContains('@score','2000')
          .assert.textContains('@badgesRank','Rank')
          

    }

  }],
};


