module.exports={
    '6.verify that user should be able to change their profile picture by clicking on update profile page':function(browser){

        const profile = browser.page.profilePage();
    profile
      .navigate()
      .loginAndNavigateToDashboard('testadmin', 'testadmin') 
      .verifyViewRewardsButtonPresent()
      .verifyProfilePictureStatus();


    browser.end();
    }
}