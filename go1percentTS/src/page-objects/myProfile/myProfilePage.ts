import { PageObjectModel, EnhancedPageObject } from 'nightwatch';
import { NightwatchBrowser } from "nightwatch";
module.exports = {
    elements: {
        Setting: "#navbar  div:nth-of-type(2) ul app-dropdown-wrapper i",
        MyProfile: "div[class='d-flex py-1 mt-1'] span",
        UpdateProfilepic: {

            selector: "//button[normalize-space()='Update Profile Picture']",
            locateStrategy: 'xpath',
        },


        UpdateProfilePicSaveButton: "div[class='mt-5'] button:nth-child(1)",
        ProfilePic: {
            locateStrategy: 'xpath',
            selector: '//div[@class="material-symbols-outlined no-profile"]'
        },

        ViewRewardBtn: ".btn.add-button.reedeem-btn.mt-5",
        ProfilePicSuccessMsg: "#toast-container",
        RewardEditBtn: "div[class='row me-2'] div:nth-child(1) div:nth-child(1) span:nth-child(1)",
        RewardEditCancelBtn: ".btn.btn-light",
        NoBadgeEarned: "div[class='d-flex flex-column align-items-center my-auto'] p",
        BadgesContainer: "div[class='d-flex justify-content-start align-items-center no-scroll-badges']",
        EachBadge: {
            locateStrategy: 'xpath',
            selector: "//div[@class='w-20']"
        },
        EachBadgeInside: "div[class='d-flex flex-column align-items-center outer-div']",
        NoProfilePic: {
            locateStrategy: 'xpath',
            selector: "//div[@id='img']//*[name()='svg']"
        },
        ProfilePicExist: {
            locateStrategy: 'xpath',
            selector: "//img[@id='img']"
        },
        ViewMonthlyRank: {
            locateStrategy: 'xpath',
            selector: "//div[@class='material-symbols-outlined hexSmall']//*[name()='svg']"
        },
        UserName: "div[class='d-flex flex-column align-items-center'] div h3",
        CompetencyName: {
            locateStrategy: 'xpath',
            selector: "//span[@class='studio']"
        },
        Points: "app-my-profile  > div > div> div >div >div:nth-child(2)>div:nth-child(2)",
        OverallRank: "app-my-profile  > div > div> div >div >div:nth-child(2)>div:nth-child(2)",
        MonthlyScore: "div[class='d-flex flex-column align-items-center points-section p-1'] h4[class='mt-2']",
        RewardExist: "img[alt='reward']",

        Badge: "app-my-profile > div > div:nth-of-type(2) > div:nth-of-type(1) > div > div:nth-of-type(3) > div",
        BadgeRank: "modal-container div.modal-content > div > div:nth-of-type(1)",
        BadgeMonth: "modal-container div.modal-content > div > div:nth-of-type(2) > div >div >h6",
        BadgeScore: "div[class='info-div d-flex flex-column justify-content-center'] span[class='score-size']",
        BadgeQuit: "span[role='button']",
        BadgeCounts: {
            localStrategy: 'xpath',
            selector: "//div[@class='w-20']"
        },
    },
    commands: [{



        ClickOnBadge(this: EnhancedPageObject) {
            return this
                .waitForElementVisible('@Badge', 30000)
                .click('@Badge');
        },
        Buttontext(this: EnhancedPageObject) {
            return this
                .getText('@contributiontext', function (result: any) {
                    const buttonText = result.value;

                    // Compare the button text with the expected text
                    this.assert.equal(buttonText, 'ADD A CONTRIBUTION');
                })
        },

        ClickOnUpdateProfilePic(this: EnhancedPageObject) {
            this
                .waitForElementVisible('@UpdateProfilepic', 30000)
                .click('@UpdateProfilepic')
                .waitForElementVisible('@UpdateProfilePicSaveButton', 3000)
                .click('@UpdateProfilePicSaveButton')
            return this
        },

        ClickOnMyProfile(this: EnhancedPageObject) {
            this
                .waitForElementVisible('@Setting', 3000)
                .click('@Setting')
                .waitForElementVisible('@MyProfile', 3000)
                .click('@MyProfile');
            return this
        },


        ClickOnProfilePic(this: EnhancedPageObject) {
            this
                .waitForElementVisible('@ProfilePic', 3000)
                .click('@ProfilePic')
            return this
        },
        ClickOnRewardButton(this: EnhancedPageObject) {
            this
                .waitForElementVisible('@ViewRewardBtn', 30000)
                .click('@ViewRewardBtn');
            return this
        },
        waitForPageLoad(this: EnhancedPageObject) {
            return this
                .waitForElementVisible('body', 10000)
        },
        ClickOnRewardEditCancelBtn(this: EnhancedPageObject) {
            this
                .waitForElementVisible('@RewardEditBtn', 30000)
                .assert.elementPresent('@RewardEditBtn')
                .click('@RewardEditBtn')
                .waitForElementVisible('@RewardEditCancelBtn', 30000)
                .assert.elementPresent('@RewardEditCancelBtn')
                .click('@RewardEditCancelBtn');
            return this

        },
        BadgeCheck(this: EnhancedPageObject) {
            return this
                .waitForElementVisible('@NoBadgeEarned', 30000)
                .assert.elementPresent('@NoBadgeEarned')
        },
        ViewUserCompetencyName(this: EnhancedPageObject) {
            this
                .waitForElementVisible('@UserName', 3000)
                .pause(3000)
                .waitForElementVisible('@CompetencyName', 3000)
            return this
        },


    }]
};