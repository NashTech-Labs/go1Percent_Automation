const { assert } = require("chai");
import { NightwatchTests, NightwatchBrowser } from "nightwatch";
import { EditSearchContribution } from '../../../../page-objects/contribution/editSearchContribution/editSearchContribution';

const editSearchContributionTest: NightwatchTests = {
    

    before: (browser: NightwatchBrowser) => {

        // Perform actions before running test cases, such as maximizing the browser window and logging in.
        browser
            .maximizeWindow()
            .page.contribution.login()
            .navigate()
            .setValue('@emailInput', 'testemployee')
            .setValue('@passwordInput', 'testemployee')
            .signIn()   
     },

     // This test case verifies that search bar is clickable.
    "Verify that user is able to click on the search bar": (browser: NightwatchBrowser) => {
        const search = browser.page.contribution.editSearchContribution.editSearchContribution();
        search
            .navigate()
            .clickSettings()
            .clickProfile()  
            .clickContributions()
            .clickSearchBar()
    },

    // This test case verifies that we are able to filter out contributions based on a keyword entered.
    "Verify that user should be able to filter any certain contribution from the list": (browser: NightwatchBrowser) => {
        const search = browser.page.contribution.editSearchContribution.editSearchContribution();
        search
            .navigate()
            .clickSettings()
            .clickProfile()
            .clickContributions()
            .clickSearchBar()
            .searchContribution('test contribution')

            // Use browser.elements to find elements and check if there are more than 0 of them.
            browser.elements('css selector', 'div.studio-member div div div.col-xxl-3.col-lg-3.col-md-3.col-sm-6.d-flex.flex-column.text-center', function(result: any){
                
                const numberOfResults: number = result.value.length;
                console.log('Number of results found:', numberOfResults);
                expect(numberOfResults).to.be.greaterThan(0);
            })
    },

    // This test case verifies that if a wrong keyword is entered it gives no results.
    "Verify that user should see a blank screen when they enter invalid character that is not present": (browser: NightwatchBrowser) => {
        const search = browser.page.contribution.editSearchContribution.editSearchContribution();
        search
            .navigate()
            .clickSettings()
            .clickProfile()
            .clickContributions()
            .clickSearchBar()
            .searchContribution('app')  

            // Use browser.elements to find elements and check if there are no elements.
            browser.elements('css selector', 'div.studio-member div div div.col-xxl-3.col-lg-3.col-md-3.col-sm-6.d-flex.flex-column.text-center', function(result: any) {
                
                const numberOfResults: number = result.value.length;
                console.log('Number of results found:', numberOfResults);
                expect(numberOfResults).to.be.equal(0);
            })  
    }
}

export default editSearchContributionTest;