const globalsData = require('../../globals')
const sessionsPage = browser.page.RewardsPage()
describe("Rewards Page Frontend Automation", () => {
    before(function () {
        browser
            .window.maximize()
            .page.login()
            .navigate()
            .enterCredentials(browser.globals.userName,browser.globals.password)
            .signIn()
            .assert.urlContains("my-dashboard")
    });
        // Verify that user should be able to click reward button and able to see reward page (TC-273) 
        it("Should be able to see rewards page on expanding leaderboard and clicking rewards button", () => {
            sessionsPage
            .clickOnLeaderboardButton()
            .clickOnRewardsButton()
            .pause(2000)
            .assert.urlContains("/rewards/list");
        }),   
        
        // Verify user should able to see and switch between Two buttons (TC-274) 
        it("Should be able to switch between forCompetency and Individual Buttons", () => {
            sessionsPage
               .clickOnForCompetencyButton()
               .assert.cssProperty('@currentButton','background-color',globalsData.messages.colorCode)
               .clickOnIndividualButton()
               .assert.cssProperty('@currentButton','background-color',globalsData.messages.colorCode)
             
        }),

        // Verify that user should be able to see all the Rewards present in Rewards page (TC-275)
        it("Should be able to see reward points on loading all rewards", () => {
            const resultMessage = "pts"
            sessionsPage
                .assert.textContains('@points',resultMessage)   
                .getText('@value_of_points', function(result) {
                    const value = parseInt(result.value); // Parse the text content to an integer
                    this.assert.ok(value > 0, 'Value is greater than 0'); // Assert that the value is greater than 0
                  });
              
        }),

        // Verify that user should able to click on Redeem button (TC-276)
        it("Should be able to click on redeem button", () => {
            sessionsPage
               .clickOnRedeemButton()
               .assert.textContains('@popup',globalsData.messages.popupMessage)
        }),
        
        // Verify that user should able to click on NO button (TC-278) 
        it("Should be able to close popup message box when no button is clicked", () => {
            sessionsPage
                .clickOnNoButton()
                .assert.elementNotPresent('@popupBox')
                    
        }),

        // Verify that user should able to click on yes button (TC-277) 
        it("should display message when yes button is clicked", () => {
            sessionsPage
                .clickOnRedeemButton()
                .clickOnYesButton()
                .assert.textContains('@message',globalsData.messages.redeemMessage)
                    
        }),

        //  Verify that Admin should able to see Reward section (TC-280) 
        it("Should login as admin and should display rewards tab on expanding leaderboard", () => {
            sessionsPage.clickOnLogoutButton();
            const user = "Admin User"
            browser
            .page.login()
            .navigate()
            .enterCredentials('testadmin', 'testadmin')
            .signIn()
            .assert.urlContains("my-dashboard")
            .assert.textContains('.ml-1 > h4:nth-child(1) > span:nth-child(2)',user);

            sessionsPage
            .clickOnLeaderboardButton()
            .waitForElementPresent('@rewardsButton')
            .assert.elementPresent('@rewardsButton')
                    
        }),

        // Verify that Admin should be able to see rewards page after clicking reward tab(TC-281)
        it("Should display rewards page on clicking rewards button", () => {
            sessionsPage
            .pause(2000)
            .clickOnRewardsButton()
            .pause(2000)
            .assert.urlContains("/rewards/list");
        }),

        // Verify that Admin should able to see all rewards present in reward page (TC-282)
        it("Should be able to see all rewards for admin on scrolling", (browser) => {
            browser
            .pause(2000)
            .execute(function() {
                window.scrollTo(0, document.body.scrollHeight);
            })
            .pause(2000)
            .execute(function() {
                window.scrollTo(0, 0);
            })
            sessionsPage
            .waitForElementPresent('@lastReward')
            .assert.elementPresent('@lastReward')
         }),
       
        // Verify that Admin should able to switch between forCompetency from Individual (TC-283)  
        it("Should be able to switch between forCompetency from Individual Buttons", () => {
            sessionsPage
               .pause(2000)
               .clickOnForCompetencyButton()
               .waitForElementPresent('@currentButton')
               .assert.cssProperty('@currentButton','background-color',globalsData.messages.colorCode)
        }),

        // Verify that admin should be able to click on edit option in any reward (TC-284) 
        it("Should be able to open update rewards page on clicking edit button", () => {
            const updateMessage = "Update Reward"
            sessionsPage
               .clickOnIndividualButton()
               .clickOnEditButton()
               .waitForElementPresent('@updatePage')
               .assert.textContains('@updatePage',updateMessage)
        }),
              
        //  Verify that Admin should be able to see delete popup for cross button (TC-285)
        it("Should be able to see delete popup for cross button", () => {
            const title = "Delete"
            sessionsPage
               .moveToElement('@crossButton', 1, 1)
               .getAttribute('@crossButton', 'title', function(result) {
                this.assert.equal(result.value, title);
               })
             
       }),
 
       // Verify that admin should be able to edit Reward description (TC-289) 
        it("Should be able to see message on updating reward description", () => {
            sessionsPage
               .pause(3000)
               .setValue('@rewardDescription', 'testing reward description')
               .clickOnUpdateButton()
               .waitForElementPresent('@updateMessage')
               .assert.textContains('@updateMessage',globalsData.messages.successMessage)
        }),

        //  Verify that admin should be able to edit Reward name and able to click on update button (TC-290)
        it("Should be able to see message on updating reward name", () => {
            sessionsPage
               .pause(5000)
               .clickOnEditButton()
               .waitForElementPresent('@rewardName',3000)
               .setValue('@rewardName', 'testing reward name demo')
               .clickOnUpdateButton()
               .assert.textContains('@updateMessage',globalsData.messages.successMessage)
        }),

        //  Verify that admin should be able to increase or decrease Required points (TC-291)
        it("Should be able to increase or decrease required points", () => {
            sessionsPage
               .pause(5000)
               .clickOnEditButton()
               .pause(4000)
               .clickOnRequiredPoint()
               .getValue("@requiredPoints",function (result) {
                currentValue = parseInt(result.value);
                updatedValue = currentValue + 1;
                this.setValue("input[type='number']",updatedValue)
               })
                .clickOnUpdateButton()
                .assert.textContains('@updateMessage', globalsData.messages.successMessage)
            }),
      
        //  Verify that admin should be able to increase or decrease stock quantity (TC-292)
        it("Should be able to increase or decrease stock quantity for admin", () => {
            let updatedValue;
            sessionsPage
           .pause(5000)
           .clickOnEditButton()
           .pause(3000)
           .clickOnStockQuantity()
           .getValue('@stockQuantity', function (result) {
               currentValue = parseInt(result.value)
                updatedValue = currentValue + 1;
            })
            .perform((done) => {
                sessionsPage
                .clearValue('@stockQuantity')
                .setValue('@stockQuantity', updatedValue)
                .pause(1000)
                .clickOnUpdateButton()
                .assert.textContains('@updateMessage', globalsData.messages.successMessage);
                done()       
            })
        }),

        // Verify that admin should be able to delete existing pic in update rewards page (TC-286)   
        it("Should be able to see message on clicking cross button on image", () => {
            sessionsPage
               .pause(5000)
               .clickOnEditButton()
               .pause(3000)
               .clickOnCrossButton()
               .pause(2000)
               .assert.textContains('@imageUploadMessage',globalsData.messages.imageUploadMessage)
        }),

        // Verify that admin should be able to upload new image to existing reward (TC-288)
        it("Should be able to to upload new image to existing reward image", () => {
            sessionsPage
                .pause(2000)
                .clickOnImageUploadMessageButton()
                .pause(8000)
                .clickOnUpdateButton()
                .assert.textContains('@updateMessage', globalsData.messages.successMessage)
        }),

        //  Verify that admin should not be able to add any other extension files (TC-287)
        it("Should be able to see popup message on uploading invalid format image", () => {
             sessionsPage
                .pause(5000)
                .clickOnEditButton()
                .clickOnCrossButton()
                .clickOnImageUploadMessageButton()
                .pause(4000)
                .assert.textContains('@imageFormatMessage', globalsData.messages.imageFormatFailureMessage)
        }),

                    
         it("Should be able to see popup message on uploading image of invalid size", () => {
              sessionsPage
                .pause(5000)
                .clickOnImageUploadMessageButton()
                .pause(4000)
                .assert.textContains('@imageInvalidSize', globalsData.messages.imageInvalidSizeMessage)
        }),  

        after(function (browser) {
            browser.end();
        })
})

