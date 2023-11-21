import { NightwatchBrowser, NightwatchTests } from 'nightwatch';
import { knolxRequestPage } from '../../../page-objects/RequestedSession/knolxRequestPage';

let requestPage = browser.page.RequestedSession.knolxRequestPage() as knolxRequestPage; 

const RequestedSessionsTest: NightwatchTests = {

  'Login': (browser: NightwatchBrowser) => {

    requestPage
      .maximizeWindow()
      .navigate()
      .enterCredentials('testadmin', 'testadmin')
      .signIn()
      .assert.urlContains("my-dashboard");
  },

  'Should be able to see the available requested sessions': (browser: NightwatchBrowser) => {

    requestPage
      .clickAdmin()
      .waitForElementVisible('@adminLink')
      .clickKnolx()
      .waitForElementVisible('@knolx')
      .clickmanageSession()
      .waitForElementVisible('@manageSessions')
      .clickRequested()
      .waitForElementVisible('@requested')
      .assert.visible('@totalrecords')
      .assert.urlContains("requested-sessions");
  },

  'Should be able to update the title': (browser: NightwatchBrowser) => {

    requestPage
      .clickSession()
      .waitForElementVisible('@titleEdit')

      .clickEditButton()
      .waitForElementVisible('@inputTitle')

      .editTitle('Sample Text Title Update')
      .waitForElementVisible('@saveButton')

      .clickSaveButton()
      .waitForElementVisible('@titleEdit')
      .assert.containsText('@titleMessage', 'Successfully Updated')
  },

  'Should be able to add tags': (browser: NightwatchBrowser) => {

    requestPage
      .addingTag('new tag')
      .waitForElementVisible('@tagInput')

      .saveTag()
      .assert.visible('@addTag')
  },

  'Should be able to remove tags': (browser: NightwatchBrowser) => {

    requestPage
      .RemovingTag()
      .assert.visible('@addTag')

  },

  'Should be able to update description': (browser: NightwatchBrowser) => {

    requestPage
      .clickEditDesc()
      .waitForElementVisible('@descriptionInput')

      .DescriptionEdit("Description update")
      .waitForElementVisible('@descriptionSave')

      .SavingDescription()
      .waitForElementVisible('@titleEdit')
      .assert.visible('@describeEdit')
  },

  'Should be able to update Feedback form': (browser: NightwatchBrowser) => {

    requestPage
      .clickDropdown('Knolx - Share Your Experience')
      .waitForElementVisible('@feedbackUpdate')

      .UpdatingFeedback()
      .assert.containsText('@dropdown', 'Knolx - Share Your Experience')
  },


  'Should be able to approve session': (browser: NightwatchBrowser) => {

    requestPage
      .ClickRemarks('Approving the session remarks')
      .waitForElementVisible('@approveButton')

      .ApprovingSession()

  },

  'Should be able to reject session': (browser: NightwatchBrowser) => {

    requestPage
      .ClickRemarks('Rejecting the session remarks')
      .waitForElementVisible('@rejectButton')

      .RejectingingSession()
  },

  'Add or update SlideURL': (browser: NightwatchBrowser) => {

    requestPage
      .clickSlideEdit()
      .waitForElementVisible('@slideInput')

      .SlideEdit('www.google.com')
      .waitForElementVisible('@slideSave')

      .savingSlide()
  },

  after: (browser: NightwatchBrowser) => {
    browser.end();
  },
};

export default RequestedSessionsTest;

