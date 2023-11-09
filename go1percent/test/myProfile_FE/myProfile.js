const { assert } = require('nightwatch');
const DataSet = require('../../globals');
//const MyProfilePage = require('../../page-objects/myProfilePage');
//const Login=browser.page.login();
var userName = browser.globals.userName;
var password = browser.globals.password;
// userName = 'testemployee';
// password = 'testemployee';
const profilePicUploadSuccessMsg = "Profile picture updated successfully!";

describe("My Profile Page Frontend Automation", () => {
    //this.timeout(25000)
    var myProfile = browser.page.myProfilePage();


    beforeEach(function (browser) {

        browser
            .window.maximize()
            //.maximizeWindow()
            .page.login()
            .navigate()
            .pause(3000)
            .enterCredentials(userName, password)
            //browser.pause(3000);
            .signIn()
            .assert.urlContains("my-dashboard", 'URL contains my-dashboard');
        myProfile
            //.page.myProfilePage()
            .pause(1000)
            .ClickOnMyProfile()
            .pause(1000)
            .assert.urlContains("my-profile", 'URL contains my-profile')

    });
    afterEach(function (browser) {//testadmin
        browser.end();
    });
    
    it("No Badges Earned' message when no badges were earned to their profile", function (browser) {//testemployee1
        
        function countOptions(){
            alert("there are"+document.getElementsByClassName('.d-flex.justify-content-start.align-items-center.no-scroll-badges').length);
            for(i=0;i, 1;i++){
                alert(document.getElementsByClassName('.d-flex.justify-content-start.align-items-center.no-scroll-badges').textContent);
            }
        }









    //         // .pause(3000)
    //         .navigate("https://nashtechglobal.go1percent.com/my-profile?id=656")
    //         .pause(5000)
    //         if(myProfile.assert.elementPresent('@NoBadgeEarned',{return: true}))
    //         {
    //             console.log('No badge earned.');
    //         }
    //         else{
    //             console.log('Badge earned.');
    //         }

    //         //  const el1 = myProfile.element.find('@EarnedBadge')
    //         //  console.log(el1)

    //         //var badgeCheck = myProfile.assert.elementPresent('@NoBadgeEarned',{timeout: 3000, abortOnFailure: false}) ? true : false
    //         //console.log(badgeCheck)
    //         // myProfile.element(locateStrategy: 'xpath', "//body/app-root/div/app-main/section[@class='g-sidenav-show']/main[@class='main-content position-relative max-height-vh-100 h-100 border-radius-lg']/div[@class='container-fluid pb-4']/div[@class='row']/div[@class='col-12']/app-my-profile/div[@class='row board-pos']/div[@class='col-lg-8']/div[@class='card mt-2 card-gap']/div[@class='row badge-card p-3']/div[@class='d-flex justify-content-start align-items-center no-scroll-badges']/div[3]/div[1]/div[1]//*[name()='svg']", function(result){
    //         //     if(result.status != -1){
    //         //         console.log("Badge Earned")
    //         //         //Element exists, do something
    //         //     } else{
    //         //         console.log("No Badge Earned");

    //         //         //Element does not exist, do something else
    //         //     }
    //         // });
    //         // var truev='trues';
    //         // var isEarnedBadgeTrue = myProfile.assert.elementPresent('@EarnedBadge');
    //         // // console.log(isEarnedBadgeTrue)
    //         // if(isEarnedBadgeTrue=='truev'){
    //         // console.log("Badge Earned")
    //         // }
    //         // else
    //         // {
    //         //     console.log("No Badge Earned");
    //         // }


    });
    it('View the profile picture along with the monthly rank', function (browser) {
        myProfile
            .pause(5000)
            //.assert.elementPresent('@NoProfilePic','No Profile Pic exist')
            //.pause(5000)
            .assert.elementPresent('@ProfilePicExist','Profile Pic exist')
            .assert.elementPresent('@ViewMonthlyRank','Monthly Rank exist');
    });
    it('Change their profile picture by clicking on update profile page', function (browser) {
        myProfile

            .pause(7000)
            .ClickOnUpdateProfilePic()
            .pause(5000)
            //.assert.textContains('@ProfilePicSuccessMsg', profilePicUploadSuccessMsg)
            .expect('@ProfilePicSuccessMsg').to.be.eq(profilePicUploadSuccessMsg)
            .pause(2000);
     });
    it('Name and competency name on the profile page', function (browser) {
        myProfile
        .pause(10000)
        .assert.elementPresent('@UserName','User Name Visible')
        .assert.elementPresent('@CompetencyName','Competency Name Visible');

    });
    it('View the points, overall rank and monthly score on the profile page', function (browser) {
        myProfile
        .pause(3000)
        .assert.elementPresent('@Points','User Points Visible')
        .assert.elementPresent('@OverallRank','User OverallRank Visible')
        .assert.elementPresent('@MonthlyScore','User Monthly Score Visible')

    });
    
    it('View the reward if redeemed', function (browser) {
        myProfile
                .pause(12000)
                .assert.elementPresent('@RewardExist','Reward redeemed for the user')
                .assert.elementPresent('@ViewRewardBtn','No reward redeemed for the user');


    });
    it('View all the rewards redeemed by him/her', function (browser) {//testemploee.testemployee1,testadmin
        myProfile
        .pause(15000)
        .assert.elementPresent('@RewardExist','All redeemed reward for the user displyed')
        .assert.elementPresent('@ViewRewardBtn','No reward redeemed for the user');


    });
    // // it('View the badges and the count in the badges section', function (browser) {
    // //     myProfile
            

    // // });
    it('See month and score and rank by clicking on the badges', function (browser) {
        myProfile
        .pause(12000)
        .ClickOnBadge()
        .pause(2000)
        .assert.elementPresent('@BadgeRank','Badge Rank visible for the user')
        .assert.elementPresent('@BadgeMonth','Badge Month visible for the user')
        .assert.elementPresent('@BadgeScore','Badge Score visible for the user')
        .ClickOnBadgeQuit();

    });




});
