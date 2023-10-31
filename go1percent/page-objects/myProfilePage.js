module.exports = {

    url: "",

    elements: {

        Setting: "ul[class='navbar-nav justify-content-end'] app-dropdown-wrapper div[class='position-relative'] div[class='pt-2'] li[class='icon nav-item dropdown px-2 d-flex align-items-center justify-content-center'] a[class='nav-link text-body p-0 text-white'] div i[class='material-icons user-icon']",
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
        NoProfilePic: {
            locateStrategy: 'xpath',
            selector: "//div[@id='img']//*[name()='svg']"},
        ProfilePicExist: {
            locateStrategy: 'xpath',
            selector: "//img[@id='img']"},
        ViewMonthlyRank: {
            locateStrategy: 'xpath',
            selector: "//div[@class='material-symbols-outlined hexSmall']//*[name()='svg']"},
        UserName: "div[class='d-flex flex-column align-items-center'] div h3",
        CompetencyName: {
            locateStrategy: 'xpath',
            selector: "//span[@class='studio']"},
        Points: "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(2)",
        OverallRank: "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > h4:nth-child(2)",
        MonthlyScore: "div[class='d-flex flex-column align-items-center points-section p-1'] h4[class='mt-2']",
        RewardExist: "img[alt='reward']",
    
        Badge: {
            locateStrategy: 'xpath',
            selector: "//body/app-root/div/app-main/section[@class='g-sidenav-show']/main[@class='main-content position-relative max-height-vh-100 h-100 border-radius-lg']/div[@class='container-fluid pb-4']/div[@class='row']/div[@class='col-12']/app-my-profile/div[@class='row board-pos']/div[@class='col-lg-8']/div[@class='card mt-2 card-gap']/div[@class='row badge-card p-3']/div[@class='d-flex justify-content-start align-items-center no-scroll-badges']/div[1]/div[1]/div[1]//*[name()='svg']"
        },
        BadgeRank: ".font-weight-light.overall-txt-color.rankSize",
        BadgeMonth: "div[class='modal-body m-2 p-4'] div:nth-child(1) div:nth-child(1) h6:nth-child(1)",
        BadgeScore: "body > modal-container:nth-child(11) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)",
        BadgeQuit: "span[role='button']",
    },

    commands: [{

        ViewProfilePicSuccessMsg() {
            return ProfilePicSuccessMsg;
        },

        ClickOnBadge() {
            this
                .waitForElementVisible('@Badge', 30000)
                .click('@Badge')
            return this
        },
        ClickOnBadgeQuit() {
            this
                .waitForElementVisible('@BadgeQuit', 30000)
                .click('@BadgeQuit')
            return this
        },

        ClickOnUpdateProfilePic() {
            this
                .waitForElementVisible('@UpdateProfilepic', 20000)
                .click('@UpdateProfilepic')
                .waitForElementVisible('@UpdateProfilePicSaveButton', 3000)
                .click('@UpdateProfilePicSaveButton')
            return this
        },

        ClickOnMyProfile() {
            this
                .waitForElementVisible('@Setting', 3000)
                .click('@Setting')
                .waitForElementVisible('@MyProfile', 3000)
                .click('@MyProfile');
            return this
        },


        ClickOnProfilePic(ProfilePic) {
            this
                .waitForElementVisible('@ProfilePic', 3000)
                .click('@ProfilePic')
            return this
        },
        ClickOnRewardButton() {
            this
                .waitForElementVisible('@ViewRewardBtn', 3000)
                .click('@ViewRewardBtn');
            return this
        },
        waitForPageLoad() {
            return this
                .waitForElementVisible('body', 10000)
        },
        ClickOnRewardEditCancelBtn() {
            this
            .waitForElementVisible('@RewardEditBtn', 30000)
            .assert.elementPresent('@RewardEditBtn')
            .click('@RewardEditBtn')
            .waitForElementVisible('@RewardEditCancelBtn', 30000)
            .assert.elementPresent('@RewardEditCancelBtn')
            .click('@RewardEditCancelBtn');
            return this

        },
        BadgeCheck()
        {
            return this
            .waitForElementVisible('@NoBadgeEarned', 30000)
            .assert.elementPresent('@NoBadgeEarned')
        },
        ViewUserCompetencyName() {
            this
                .waitForElementVisible('@UserName', 3000)
                .pause(3000)
                .waitForElementVisible('@CompetencyName', 3000)
            return this
        },
    }
    ]
}

