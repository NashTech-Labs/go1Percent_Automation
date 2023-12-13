const requestPage = browser.page.knolxRequestPage();

describe("Requested session Frontend Automation", () => {

  before(function () {
    browser
      .window.maximize()
    requestPage
      .navigate()
      .enterCredentials('testadmin', 'testadmin')
      .signIn()
      .assert.urlContains("my-dashboard")

  }),

 it("Should be able to see the available requested sessions", () => {
      requestPage
        .clickAdmin()
        .waitForElementVisible('@adminLink')
        .clickKnolx()
        .waitForElementVisible('@knolx')
        .clickmanageSession()
        .waitForElementVisible('@manageSessions')
        .clickRequested()
        .waitForElementVisible('@requested')
        .pause(500)
        .assert.visible('@totalrecords')
        .assert.urlContains("requested-sessions")

    }),

    after(function (browser) {
      browser.end();
    })
})
