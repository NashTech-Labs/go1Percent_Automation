module.exports={

    '7.Verify user should be able to see his/her name and competency name on the profile page':function(browser){
      const profile=browser.page.profilePage();
      profile
        .navigate()
        .loginAndNavigateToDashboard('testadmin', 'testadmin')
        .verifyNameAndCompetencyName()

      
    }
  }