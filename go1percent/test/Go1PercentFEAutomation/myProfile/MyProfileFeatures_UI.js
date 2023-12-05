describe("My Profile Features UI-Automation", () => {
    var profile = browser.page.profilePage();

    afterEach(function (browser) {
        browser.end();
    });

    beforeEach(function (browser) {
        browser.window.maximize()

    });
    it('1.View rewards button is present on the profile page when no reward is redeemed till now', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifyViewRewardsButtonPresent();
    });

    it('6.verify that user should be able to change their profile picture by clicking on update profile page', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifyViewRewardsButtonPresent()
            .verifyProfilePictureStatus();
    });

    it('2.Verify user should be re-directed to the rewards page when he clicks on view rewards button', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifyViewRewardsButtonPresent()
            .verifyRewardRedirection()
    });

    it('9.verify that user should be able to see view rewards list by clicking on the view rewards button', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifyViewRewardsButtonPresent()
            .click('@viewRewardsButton')
            .verifyRewardsListVisible();

    });

    it('10.verify that user should be able to view the reward if redeemed.', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifyRedeemedReward();

    });

    it('11.Verify user should be able to view all the rewards redeemed by him/her', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifyRedeemedReward()
            .verifyallRedeemedReward();

    });

    it('5.verify that User should be able to see the profile picture along with the monthly rank', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifyProfilePictureAndRank();

    });

    it('8.Verify user should be able to see their points, overall rank and monthly score on the profile page', function (browser) {

        profile
        .navigate()
        .loginAndNavigateToDashboard('testadmin', 'testadmin') 
        .verifyPointsMonthlyScoreAndOverAllRank();


    });

    it('4.Verify user should see the No Badges Earned message when no badges were earned to their profile.', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifyViewRewardsButtonPresent()
            .verifyNoBadgesEarned()

    });


    it('7.Verify user should be able to see his/her name and competency name on the profile page', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifyNameAndCompetencyName()


    });


    it('13.verify that user should be able to see month and score and rank by clicking on the badges', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifyMonthScoreAndRank()



     });

    it('3.Verify admin can be re-directed to the rewards page and can able to edit the rewards as well.', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifySuccessMessage()


    });

    it('12.verify that user should be able to view the badges and the count in the badges section ', function (browser) {

        profile
            .navigate()
            .loginAndNavigateToDashboard('testadmin', 'testadmin')
            .verifyBadgesAndCount();


    });










});
