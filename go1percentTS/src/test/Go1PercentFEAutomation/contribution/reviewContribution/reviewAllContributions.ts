import { NightwatchTests, NightwatchBrowser } from "nightwatch";

const contribution = browser.page.contribution.reviewContribution.allContribution();
const allContributions: NightwatchTests = {
    before: (browser: NightwatchBrowser) => {
        browser
            .windowMaximize()
            .url('https://nashtechglobal.qa.go1percent.com/')
        const login = browser.page.contribution.login();
        login.navigate().enterCredentials('testadmin', 'testadmin')
        login.signIn()
    },

    'Verify Filter fields on All Contributions Dashboard': () => {
        contribution.approvalsPage()
        contribution.navigateToAllContributions()
        contribution.verifyAllFields()
    },

    'Approve a Contribution': () => {
        contribution.approveContribution()
    },

    'Reject a Contribution': () => {
        contribution.rejectContribution()
    },

    'Filter a contribution by status': () => {
        contribution.allStatus();
    },

    'Search a Nasher by name': () => {
        contribution.searchNasher();
    },

    'Filter contributions by competency': () => {
        contribution.competencyFilter();
    },

    'Filter contributions by comptency type': () => {
        contribution.contributionTypeFilter();
    },

}
export default allContributions;