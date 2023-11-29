module.exports={
    '5.verify that User should be able to see the profile picture along with the monthly rank':function(browser){
    const profile = browser.page.profilePage();
    profile
      .navigate()
      .loginAndNavigateToDashboard('testadmin', 'testadmin') 
      .verifyProfilePictureAndRank();
    browser.end();
    },
}
