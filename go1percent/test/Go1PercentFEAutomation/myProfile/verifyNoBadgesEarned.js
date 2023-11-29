module.exports={

    '4.Verify user should see the No Badges Earned message when no badges were earned to their profile.':function(browser){
        const profile=browser.page.profilePage();
        profile
        .navigate()
        .loginAndNavigateToDashboard('testadmin', 'testadmin') 
        .verifyViewRewardsButtonPresent()
        .verifyNoBadgesEarned()
  
  
      browser.end();
    }
    

}