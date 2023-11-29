module.exports={

    '8.Verify user should be able to see their points, overall rank and monthly score on the profile page':function(browser){
    
        const profile=browser.page.profilePage();
        profile
           .navigate()
           .loginAndNavigateToDashboard('testadmin', 'testadmin') 
           .verifyPointsMonthlyScoreAndOverAllRank();



    }
}