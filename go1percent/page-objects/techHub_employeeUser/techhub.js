module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com',

    elements: {
      username: '#username',
      password: '#password',
      submit: '#kc-login',
      SettingsButton: '#navbar div.desktop-header app-dropdown-wrapper i',
      Profile: 'div[class = "d-flex py-1 mt-1"]',
      Logout: '#navbar div:nth-child(2) > div:nth-child(2) h6 > span',
      TechhubPage: "li[class='nav-item my-1 cursor-pointer text-bold p-2']:nth-child(4)",
      pendingTab: 'li.mt-2:nth-child(2) > a:nth-child(1)',
      searchBar: 'body div.row.g-2 input',
      pendingTechhubRecords: 'div[class="studio-member-card cursor-pointer my-4 px-2 py-3"]',
      NoOfRecords: 'span[class="ml-2"]',
      requestRepoOrBranchTab: 'span.addRewardTxt',
      descriptionTextarea: 'form textarea',
      closeTab: 'body button.btn.btn-primary.button.cancel-button.mx-2',
      closeApprovedTechhub: 'button[class="btn btn-primary button cancel-button mx-2"]',
      allTechHubTab: 'li.mt-2:nth-child(1) > a:nth-child(1)',
      allTechHubSearchBar: 'body div.row.g-2 input',
      approvedTab: 'h6[class="mb-0 rank status approvedStatus"]',
      githubUrl: 'body div.col.mb-3.mx-2.d-flex.flex-column a',
      draftTechhub: 'h6[class="mb-0 rank status pendingStatus"]',
      submitTechhubPage: 'body div.modal-header.bg-gradient-dark.px-4.pt-4 > h5',
      submitTechhubTitle: 'body div:nth-child(1) > div:nth-child(1) > input',
      submitTechhubCaption: 'body form > div:nth-child(1) > div:nth-child(2) > input',
      submitTechhubDescription: 'body textarea',
      submitTechhubBranch: 'body div:nth-child(4) > div:nth-child(1) > input',
      submitTechhubTags: 'body div:nth-child(4) > div:nth-child(2) > input',
      submitTechhubCategory: '#category',
      learningCategory: '#category > option:nth-child(2)',
      submitTechhubBaseLanguage: '#baseLanguage',
      baseLanguageJava: '#baseLanguage > option:nth-child(12)',
      approvedTechhub: 'h6[class="mb-0 rank status approvedStatus"]',
      searchResultInReview: 'body div.studio-member > div:nth-child(2)',
      viewTechhub: 'h5[class="fw-bold modal-title pull-left ms-2"]',
      approvedStatusInTechhub: 'span[class="status text-capitalize approvedStatus"]',
      techhubInreviewAfterReview: 'h6[class="topic-text"]',
      dateOfTechhubInreview: 'h6[class="mb-0 rank"]',
      draftTab: 'h6[class="mb-0 rank status pendingStatus"]',
      inReviewTab: 'h6[class="mb-0 rank status reviewStatus"]',
      searchResultInPendingTab: 'div[class="studio-member-card cursor-pointer my-4 px-2 py-3"]',
      searchResultInAllTechhubTab: 'div[class="col-xxl-4 col-lg-4 col-md-4 d-flex"]',
      submissionPopupAlert: "div[role='alert']",
      errorMessage: 'span[class="errorMessage"]',
      repoName: 'input[formcontrolname="name"]',
      repoTechnology: 'select[id="technology"]',
      repoDescription: 'textarea[formcontrolname="description"]',
    },

    commands: {
      loginGo1: function (username, password) {
        return this
          .waitForElementVisible('#kc-page-title')
          .setValue('@username', username)
          .setValue('@password', password)
          .pause(1000);
      },
  
      signIn: function () {
          return this
          .click('@submit')
      },

      navigateToSettings: function () {
        return this
        .waitForElementVisible('@SettingsButton')
        .click('@SettingsButton')
      },

      navigateToProfile: function () {
        return this
        .waitForElementVisible('@Profile')
        .click('@Profile')
      },

      navigateToTechhub: function () {
        return this
        .waitForElementVisible('@TechhubPage', 5000)
        .click('@TechhubPage')
      },

      navigateToLogout: function () {
        return this
        .waitForElementVisible('@SettingsButton')
        .click('@SettingsButton')
        .waitForElementVisible('@Logout')
        .click('@Logout')
      },

      navigateToPendingTechHubSearch: function() {
        return this
        .waitForElementVisible('@pendingTab')
        .click('@pendingTab')
        .click('@pendingTab')
        .click('@searchBar')
      },

      searchForPendingTechhub: function() {
        return this
        .setValue('@searchBar', "Testing")
        .pause(10000)
        .waitForElementVisible('@searchResultInPendingTab')
      },

      navigateToRequestARepoOrBranch: function() {
        return this
        .waitForElementVisible('@requestRepoOrBranchTab')
        .click('@requestRepoOrBranchTab')
        .waitForElementVisible('@descriptionTextarea')
      },

      setSmallDescriptionValue: function() {
        return this
        .click('@descriptionTextarea')
        .setValue('@descriptionTextarea', 'testingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting')
      },

      setLargeDescriptionValue: function() {
        return this
        .click('@descriptionTextarea')
        .setValue('@descriptionTextarea', 'testingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting')
      },

      closeRequestARepoOrBranch: function() {
        return this
        .waitForElementVisible('@closeTab')
        .click('@closeTab')
      },

      closeApprovedTechHub: function() {
        return this
        .waitForElementVisible('@closeApprovedTechhub')
        .click('@closeApprovedTechhub')
      },

      navigateToSearchInAllTechHub: function() {
        return this
            .waitForElementVisible('@allTechHubTab')
            .click('@allTechHubTab')
            .click('@allTechHubSearchBar')
      },

      searchInAllTechhub: function() {
        return this
        .setValue('@allTechHubSearchBar', "TestingTechHub")
        .pause(10000)
        .waitForElementVisible('@searchResultInAllTechhubTab')
      },

      navigateToPendingTechHub: function() {
        return this
        .waitForElementVisible('@pendingTab', 2000)
        .click('@pendingTab')
      },

      searchForTechhubInReview: function() {
        return this
        .waitForElementVisible('@inReviewTab')
        .click('@inReviewTab')
      },

      clearSearch: function() {
        return this
        .waitForElementVisible('@searchBar')
        .setValue('@searchBar', "")
      },

      navigateToGithubUrl: function() {
        return this
            .waitForElementVisible('@approvedTab')
            .click('@approvedTab')
            .waitForElementPresent('@githubUrl')
            .click('@githubUrl')
      },
           
      verifyGithubTitle: function() {
        return this
            .pause(2000)
            .getTitle(function name(title) {
                expect(title).to.contain('GitHub - NashTech-Labs/')
        })
      },
      
      allFieldsPendingPage: function() {
        return this
        .waitForElementVisible('@pendingTechhubRecords')
        .getText('@NoOfRecords', function totalRecords(records){
            expect(records.value).to.contain('Total Records:')
        })
        .pause(10000)
      },

      submitFirstTechhubInDraft: function() {
        return this
        .waitForElementVisible('@pendingTab', 2000)
        .click('@pendingTab')
        .click('@searchBar')
        .setValue('@searchBar', "test")
        .waitForElementPresent('@draftTab', 5000)
        .click('@draftTab')
        .pause(5000)
        .waitForElementVisible('@draftTechhub')
        .click('@draftTechhub')
        .waitForElementPresent('@submitTechhubPage')
        .waitForElementPresent('@submitTechhubCategory')
        .click('@submitTechhubCategory')
        .waitForElementVisible('@learningCategory')
        .click('@learningCategory')
        .click('@submitTechhubBaseLanguage')
        .waitForElementVisible('@baseLanguageJava')
        .click('@baseLanguageJava')
        .waitForElementVisible('@submitTechhubTitle')
        .click('@submitTechhubTitle')
        .setValue('@submitTechhubTitle', "TestAutomationPurpose")
        .click('@submitTechhubCaption')
        .setValue('@submitTechhubCaption', "TestingTechHubSubmission")
        .click('@submitTechhubDescription')
        .setValue('@submitTechhubDescription', "testingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting")
        .click('@submitTechhubBranch')
        .setValue('@submitTechhubBranch', "main")
        .click('@submitTechhubTags')
        .setValue('@submitTechhubTags', "tagForTesting")
        .click('body button.btn.btn-primary.text-white.mx-2')
        .waitForElementVisible('@submissionPopupAlert', 5000)
      },

      submitSecondTechhubInDraft: function() {
        return this
        .waitForElementVisible('@pendingTab', 5000)
        .click('@pendingTab')
        .waitForElementPresent('@draftTab', 5000)
        .click('@draftTab')
        .pause(5000)
        .waitForElementVisible('@draftTechhub')
        .click('@draftTechhub')
        .waitForElementPresent('@submitTechhubPage')
        .waitForElementPresent('@submitTechhubCategory')
        .click('@submitTechhubCategory')
        .waitForElementVisible('@learningCategory')
        .click('@learningCategory')
        .click('@submitTechhubBaseLanguage')
        .waitForElementVisible('@baseLanguageJava')
        .click('@baseLanguageJava')
        .waitForElementVisible('@submitTechhubTitle', 5000)
        .click('@submitTechhubTitle')
        .setValue('@submitTechhubTitle', "TestAutomationPurpose")
        .click('@submitTechhubCaption')
        .setValue('@submitTechhubCaption', "TestingTechHubSubmission")
        .click('@submitTechhubDescription')
        .setValue('@submitTechhubDescription', "testingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting")
        .click('@submitTechhubBranch')
        .setValue('@submitTechhubBranch', "main")
        .click('@submitTechhubTags')
        .setValue('@submitTechhubTags', "tagForTesting")
        .click('body button.btn.btn-primary.text-white.mx-2')
        .waitForElementVisible('@submissionPopupAlert', 5000)
      },

      techhubInreviewPage: function() {
        return this
        .waitForElementVisible('@pendingTab')
        .click('@pendingTab')
        .click('@searchBar')
        .setValue('@searchBar', "testing_title-repos")
        .waitForElementVisible('@searchResultInReview')
        .click('@searchResultInReview')
        .waitForElementNotPresent('@viewTechhub')
        .setValue('@searchBar', "")
      },

      openDetailsofApprovedTechHub: function() {
        return this
        .waitForElementVisible('@allTechHubTab')
        .click('@allTechHubTab')
        .waitForElementVisible('@approvedTab', 5000)
        .click('@approvedTab')
        .waitForElementPresent('@viewTechhub')
        .waitForElementPresent('@approvedStatusInTechhub')
        .click('@closeTab')
      },

      navigateToAllTechhub: function() {
        return this
        .waitForElementVisible('@allTechHubTab')
        .click('@allTechHubTab')
        .pause(5000)
      },

      clickOnapprovedTab: function() {
        return this
        .waitForElementVisible('@approvedTab', 5000)
        .click('@approvedTab')
      },

      verifyTechHubTitle: function() {
        return this
        .waitForElementVisible('@techhubInreviewAfterReview')
        .getText('@techhubInreviewAfterReview', function verifyName(name){
          expect(name.value).to.equal("TestAutomationPurpose");
        })
      },

      verifyTechHubDate: function() {
        return this
        .waitForElementVisible('@dateOfTechhubInreview')
        .getText('@dateOfTechhubInreview', function verifyDate(date){
          expect(date.value).to.equal("06 Nov 2023");
        })
      },

    }
  };
  