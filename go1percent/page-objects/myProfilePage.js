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

        ViewRewardBtn: "//button[text()='View Rewards']",
        ProfilePicSuccessMsg: "#toast-container",


    },

    commands: [{

        ViewProfilePicSuccessMsg() {
            return ProfilePicSuccessMsg;
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
                .pause(3000)
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
        ViewRewardButton() {
             this
                .waitForElementVisible('@ViewRewardBtn', 3000)
                .assert.visible({ '@ViewRewardBtn': 'Button is visible', suppressNotFoundErrors: true })
                .click('@ViewRewardBtn');
                return this



        },
    }
    ]
}