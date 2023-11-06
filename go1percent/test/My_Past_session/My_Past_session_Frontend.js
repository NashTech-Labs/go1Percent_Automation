const { assert } = require("chai");
const mypastSession = browser.page.mypastSession();
const globals = require('../../globals');

describe("My Past Session Frontend Automation", () => {

    before(async function(done) {
        await browser
        .window.maximize()
               .page.login()
               .navigate()
               .enterCredentials(browser.globals.userName, browser.globals.password)
               .signIn()
               .pause(2000)
               .assert.urlContains("my-dashboard")
               .pause(2000)
    }),

  
    
        it("Should be able to see mySession on expanding Knolx and clicking mySession button for user", () => {
            
            mypastSession
                .clickOnKnolxSession()
                .pause(2000)
                .clickOnMysession()
                .pause(2000)
                .assert.urlContains("/knolx/my-sessions/my-upcoming-sessions")
                
        })

        it("Should be able to see my past Session on expanding my sessions and clicking mySession button for user", () => {
            mypastSession
            .pause(3000)
                .clickOnMypastsession()
                .pause(3000)
                .assert.urlContains("knolx/my-sessions/my-past-sessions");
        }),

        it("Should be able to see my past Session on expanding to selective sessions and clicking my past Session button for user", () => {
            mypastSession
            .pause(3000)
                .clickOnSelectiveSession()
                .assert.urlContains("knolx/my-sessions/my-past-sessions/65364ed48555d37c0a4f8dc7");
        }),

      0

        it("Should be able to see back button from  descriptive page. clicking backbutton session button for user", () => {
            mypastSession
            .pause(3000)
                .clickOnBackButton()
                .assert.urlContains("/knolx/my-sessions/my-past-sessions");
        }),

        it("Should be able to see the feedback button. clicking feedback button for user", () => {
            mypastSession
            .pause(3000)
                .clickOnSelectiveSession()
                .clickOnFeedbackButton()
                .assert.urlContains("knolx/feedback-report?id=65364ed48555d37c0a4f8dc7");
        }),

        it("Should be able to see the attendenve button button. clicking attendence button for user", () => {
            mypastSession
            .pause(3000)
                .clickOnViewFeedbackButton()
                .clickOnSelectiveSession()
                .pause(3000)
                .clickOnViewAttandenceButton()
                .assert.urlContains("knolx/spotlight-knolder?id=65364ed48555d37c0a4f8dc7");
        }),

        after(function (browser) {
            browser.end();
        })
});