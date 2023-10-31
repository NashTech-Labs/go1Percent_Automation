const { assert } = require("chai");

module.exports = {

    before: (browser) => {
        browser
            .maximizeWindow()
            .page.login()
            .navigate()
            .setValue('@emailInput', 'testemployee')
            .setValue('@passwordInput', 'testemployee')
            .signIn()
            
     },

    "Verify that user is able to click on the search bar": (browser) => {
        const searchContribution = browser.page.Contribution.contribution_page_object();
        searchContribution
            .navigate()
            .clickSettings()
            .clickProfile()  
            .clickContributions()
            .clickSearchBar()
    },

    "Verify that user should be able to filter any certain contribution from the list": (browser) => {
        const searchContribution = browser.page.Contribution.contribution_page_object();
        searchContribution
            .navigate()
            .clickSettings()
            .clickProfile()
            .clickContributions()
            .clickSearchBar()
            .searchContribution('test contribution')

            browser.elements('css selector', 'div.studio-member div > div > div.col-xxl-3.col-lg-3.col-md-3.col-sm-6.d-flex.flex-column.text-center', function(result) {
                expect(result.value.length).to.be.greaterThan(0);
            })
    },

    "Verify that user should see a blank screen when they enter invalid character that is not present": (browser) => {
        const searchContribution = browser.page.Contribution.contribution_page_object();
        searchContribution
            .navigate()
            .clickSettings()
            .clickProfile()
            .clickContributions()
            .clickSearchBar()
            .searchContribution('app')  

            browser.elements('css selector', 'div.studio-member div > div > div.col-xxl-3.col-lg-3.col-md-3.col-sm-6.d-flex.flex-column.text-center', function(result) {
                expect(result.value.length).to.be.equal(0);
            })  
    }
}