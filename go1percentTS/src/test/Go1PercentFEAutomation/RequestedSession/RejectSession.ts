import { NightwatchBrowser, NightwatchTests } from 'nightwatch';
import { knolxRequestPage } from '../../../page-objects/RequestedSession/knolxRequestPage';

let requestPage = browser.page.RequestedSession.knolxRequestPage() as knolxRequestPage; 

describe('Test Automation', () => {

  it('should enter credentials', () => {
    requestPage
      .maximizeWindow()
      .navigate()
      .enterCredentials('testadmin', 'testadmin')
      .signIn()
      .assert.urlContains("my-dashboard");
  }),

  it('Should be able to reject session', () => {
    requestPage
      .clickAdmin()
      .ClickRemarks('Rejecting the session remarks')
      .waitForElementVisible('@rejectButton')
      .RejectingingSession()
      .pause(300)
    }),
    
});
