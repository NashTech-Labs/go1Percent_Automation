import { NightwatchTests, NightwatchBrowser } from "nightwatch";

const contribution = browser.page.contribution.reviewContribution.approvals();
const approvalPage: NightwatchTests = {
    before: (browser: NightwatchBrowser) => {
        browser
            .windowMaximize()
            .url('https://nashtechglobal.qa.go1percent.com/')
        const login = browser.page.contribution.login();
        login.navigate().enterCredentials('testadmin', 'testadmin')
        login.signIn()
    },

    'Verify Filter fields on Approvals Dashboard ': () => {
        contribution.approvalsPage()
        contribution.openApprovalsContributionPage()
        contribution.verifyAllFields()
    },

    'Approve a Contribution': () => {
        contribution.approvePendingContribution()
    },

    'Reject a Contribution': () => {
        contribution.rejectPendingContribution()
    },

    'Filter contributions by all competency filter': () => {
        contribution.competencyFilter();
    },

    'Filter by competency type': () => {
        contribution.contributionTypeFilter();
    },

}
export default approvalPage;