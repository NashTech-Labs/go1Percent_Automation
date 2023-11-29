module.exports={

    '10.verify that user should be able to view the reward if redeemed.':function(browser){
        const profile = browser.page.profilePage();
    profile
      .navigate()
      .loginAndNavigateToDashboard('testadmin', 'testadmin') 
      .verifyRedeemedReward();
    }

}