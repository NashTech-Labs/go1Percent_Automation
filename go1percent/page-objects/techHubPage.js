module.exports = {
    elements: {
        emailInput: '#username',
        passwordInput: '#password',
        signIn: "#kc-login",
        settings: 'i[class="material-icons user-icon"]',
        profile: 'div[class = "d-flex py-1 mt-1"]',
        techHub: "li[class*='nav-item ']:nth-child(4)",
        allTechHubs: 'a[class="cursor-pointer newTabs"]',
        pending: 'a[class="cursor-pointer"]',
        templates: 'div[class="studio-member-card cursor-pointer my-4 px-2 py-3"]',
        requestRepoBranch: 'span.addRewardTxt',
        searchBar: 'input[class="ng-untouched ng-pristine ng-valid"]',
        submitButton: 'button[type="submit"]',
        repoName: 'input[formcontrolname="name"]',
        errorMessage: 'span[class = "errorMessage"]',
        submissionPopupAlert: "div[role='alert']",
        isNewBranchCheckBox: 'input[formcontrolname="isNewBranch"]',
        selectTechnology: "select[id='technology']",
        chooseTechnology: 'option:nth-child(22)',
        descriptionBox: 'textarea[formcontrolname="description"]',
        cancelButton: 'button[class="btn btn-primary button cancel-button mx-2"]',
        pendingButton: 'a[class="cursor-pointer"]',
        draftButton: 'h6[class="mb-0 rank status pendingStatus"]',
        titleName: 'input[formcontrolname="title"]',
        titleCharactersError: '.errorMessage',
        draftCaption: 'input[formcontrolname="caption"]',
        draftDescriptionBox: 'textarea[type = "text"]',
        draftDescriptionBoxErrormessage: 'div.form-group.mx-2 > span',
        draftCategory: 'select[id="category"]',
        draftOtherLanguage: 'input[formcontrolname="otherLanguages"]',
        draftBaseLanguage: 'select[formcontrolname="baseLanguage"]',
        descriptionBlankFieldError: "div[class='col form-group mb-4 mx-2'] span[class='errorMessage']",
        draftBranch: 'input[formcontrolname="branch"]',
        draftTags: 'input[formcontrolname="tags"]',
        chooseDraftCategory: "select[id='category'] option:nth-child(2)",
        chooseBaseLanguage: "select[id='baseLanguage'] option:nth-child(3)",
        draftBlogUrl: 'input[formcontrolname="infoUrl"]',
        captionRequiredErrorMessage: {
            selector: "//span[contains(text(),'Caption is Required')]",
            locateStrategy: 'xpath'
        },
        branchBlankFieldErrorMessage: {
            selector: "//span[contains(text(),'Branch Name is Required')]",
            locateStrategy: 'xpath'
        },
        tagsBlankFieldErrorMessage: {
            selector: "//span[contains(text(),'Tags is Required')]",
            locateStrategy: 'xpath'
        },
        categoryRequiredErrorMessage: {
            selector: "//span[contains(text(),'Category is Required')]",
            locateStrategy: 'xpath'
        },
        baselanguageRequiredErrorMessage: {
            selector: "//span[contains(text(),'Base Language is Required')]",
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        enterCredentials(email, password) {
            return this
                .setValue('@emailInput', email)
                .pause(1000)
                .setValue('@passwordInput', password)
                .pause(1000)
        },
        signIn() {
            return this
                .click("@signIn")
        },

        elementClick(selector) {
            return this
                .waitForElementVisible(selector,1000)
                .click(selector)
        },

        displayAllTechHub() {
            return this
                .waitForElementVisible('@allTechHubs')
                .isVisible('@allTechHubs')
        },

        displayPendingpage() {
            return this
                .waitForElementVisible('@pending')
                .isVisible('@pending')
        },

        displayTemplatePage() {
            return this
                .waitForElementVisible('@templates')
                .isVisible('@templates')
        },

        disableSubmitButtonInRequestRepo() {
            return this
                .elementClick('@requestRepoBranch')
                .elementClick('@repoName')
                .setValue('@repoName', 'TestingTestingHub')
        },

        requiredNameInRepo() {
            return this
                .elementClick('@requestRepoBranch')
                .elementClick('@repoName')
                .elementClick('@selectTechnology')
        },

        requiredCharactersInRepo() {
            return this
                .click('@repoName')
                .setValue('@repoName', 'testi')
        },

        technologyRequiredError() {
            return this
                .elementClick('@requestRepoBranch')
                .elementClick('@selectTechnology')
                .click("@descriptionBox")
        },

        requestRepoBranchSubmission() {
            const uniqueName = `TestingNightwatchTestcase1-${Math.floor(Math.random() * 1000000)}`;
            return this
                .elementClick('@requestRepoBranch')
                .elementClick('@repoName')
                .setValue('@repoName', uniqueName)
                .elementClick('@selectTechnology')
                .elementClick('@chooseTechnology')
                .elementClick('@descriptionBox')
                .setValue('@descriptionBox', 'jhgfghjkhgyftdrfghbgvftcdtghjnkmjhgyftghjnkhbgyvftcdrfgvhbjnhbgvfcdrcfgvhbjnhbgvfcrdfcgvhbjnknhbgvtfcdftgvhbjnknhbgvfcttgvh')
                .waitForElementVisible('@submitButton')
                .isEnabled('@submitButton')
                .click('@submitButton')
                .waitForElementVisible("@submissionPopupAlert")
        },

        newBranchFromExistingRepo() {
            return this
                .elementClick('@requestRepoBranch')
                .elementClick('@repoName')
                .setValue('@repoName', 'TestingTestingHub')
                .elementClick("@selectTechnology")
                .elementClick('@chooseTechnology')
                .elementClick('@descriptionBox')
                .setValue('@descriptionBox', 'jhgfghjkhgyftdrfghbgvftcdtghjnkmjhgyftghjnkhbgyvftcdrfgvhbjnhbgvfcdrcfgvhbjnhbgvfcrdfcgvhbjnknhbgvtfcdftgvhbjnknhbgvfcttgvh')
                .elementClick('@isNewBranchCheckBox')
                .waitForElementVisible('@submitButton')
                .isEnabled('@submitButton')
                .click('@submitButton')
                .waitForElementVisible("@submissionPopupAlert")
                .assert.textContains("@submissionPopupAlert", 'Submitted Successfully')
        },

        clickCancelButton() {
            return this
                .elementClick('@requestRepoBranch')
                .waitForElementVisible('@cancelButton')
                .isEnabled('@cancelButton')
                .click('@cancelButton')
                .waitForElementVisible('@requestRepoBranch')
                .isVisible('@requestRepoBranch')
        },

        draftSubmitButtonDisable() {
            return this
                .elementClick('@titleName')
                .setValue('@titleName', 'TestingTestingHub')
        },

        requirementCharactersForTitle() {
            return this
                .elementClick('@titleName')
                .setValue('@titleName', 'Testing')
        },

        requiredCharactersForCaption() {
            return this
                .elementClick('@draftCaption')
                .setValue('@draftCaption', 'caption')
        },

        requiredCharactersForDescription() {
            return this
                .elementClick('@draftDescriptionBox')
                .setValue('@draftDescriptionBox', 'sdfsd')
        },

        requiredTitle() {
            return this
                .elementClick('@titleName')
                .click('@draftCaption')
        },

        requiredCaption() {
            return this
                .elementClick('@draftCaption')
                .click('@titleName')
        },

        requiredDescription() {
            return this
                .elementClick('@draftDescriptionBox')
                .click('@draftBranch')
        },

        requiredBranchName() {
            return this
                .elementClick('@draftBranch')
                .click('@draftDescriptionBox')
        },

        requiredTags() {
            return this
                .elementClick('@draftTags')
                .click('@draftDescriptionBox')
        },

        requiredCategory() {
            return this
                .elementClick('@draftCategory')
                .click('@draftDescriptionBox')
        },

        requiredBaseLanguage() {
            return this
                .elementClick('@draftBaseLanguage')
                .click('@draftDescriptionBox')
        },

        requiredCategoryAndLanguage() {
            return this
                .elementClick('@draftCategory')
                .elementClick('@draftOtherLanguage')
                .elementClick('@draftBaseLanguage')
                .elementClick('@draftOtherLanguage')
        },

        draftAndPendingButton() {
            return this
                .elementClick('@pendingButton')
                .elementClick('@draftButton')
        },

        setTitleValue() {
            return this
                .elementClick('@titleName')
                .setValue('@titleName', 'TestingTestingHubSome')
        },

        setCaptionValue() {
            return this
                .elementClick('@draftCaption')
                .setValue('@draftCaption', 'TestingCaptionForTemplate')
        },

        setDescriptionValue() {
            return this
                .waitForElementVisible('@draftDescriptionBox')
                .setValue('@draftDescriptionBox', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        },

        setBranchValue() {
            return this
                .waitForElementVisible('@draftBranch')
                .elementClick('@draftBranch')
                .setValue('@draftBranch', 'main')
        },

        setTagsValue() {
            return this
                .elementClick('@draftTags')
                .setValue('@draftTags', 'tags')
        },

        setCategoryValue() {
            return this
                .elementClick('@draftCategory')
                .elementClick("@chooseDraftCategory")
        },

        setBaseLanguageValue() {
            return this
                .elementClick('@draftBaseLanguage')
                .elementClick('@chooseBaseLanguage')
        },

        enableSubmitButton() {
            return this
                .waitForElementVisible('@submitButton')
                .isEnabled('@submitButton')
                .click('@submitButton')
                .waitForElementVisible("@submissionPopupAlert", 5000)
        },

        setOtherLanguageValue() {
            return this
                .waitForElementVisible('@draftOtherLanguage')
                .setValue('@draftOtherLanguage', 'Akka')
        },

        setBlogUrlValue() {
            return this
                .elementClick('@draftBlogUrl')
                .setValue('@draftBlogUrl', 'https://google.com')
        },

    }]
}