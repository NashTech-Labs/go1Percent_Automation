import { EnhancedPageObject } from 'nightwatch';

const customCommands = {
    approvalsPage(this: EnhancedPageObject) {
        return this
            .navigate()
            .assert.urlEquals('https://nashtechglobal.qa.go1percent.com/my-dashboard')
            .waitForElementVisible('@dashboard')
            .waitForElementVisible('@approvals')
            .click('@approvals')
            .waitForElementVisible('@contribution')
            .click('@contribution')
    },

    navigateToAllContributions(this: EnhancedPageObject) {
        return this
            .assert.visible('@allContributionsPage')
            .click('@allContributionsPage')
            .waitForElementVisible('@filterSection')
            .pause(5000)
    },

    verifyAllFields(this: EnhancedPageObject) {
        return this
            .waitForElementVisible('@filterSection')
            .waitForElementPresent('@filterText')
            .waitForElementPresent('@allFilterFields')
            .assert.visible('@filterSection')
            .assert.visible('@filterText')
            .assert.visible('@allFilterFields')

    },

    approveContribution(this: EnhancedPageObject) {
        return this
            .waitForElementPresent('@pendingButton')
            .click('@pendingButton')
            .assert.containsText('h5.modal-title.pull-left', 'Approve/Reject Contribution')
            .waitForElementVisible('@writeComment')
            .setValue('@writeComment', 'Testing purpose')
            .assert.visible('@pendingStatus')
            .assert.visible('@approveButton')
            .click('@approveButton')
            .assert.visible('div[aria-label="Successfully Approved"]')
    },


    rejectContribution(this: EnhancedPageObject) {
        return this
            .waitForElementPresent('@pendingButton')
            .click('@pendingButton')
            .assert.containsText('h5.modal-title.pull-left', 'Approve/Reject Contribution')
            .waitForElementVisible('@writeComment')
            .setValue('@writeComment', 'Testing purpose')
            .assert.visible('@pendingStatus')
            .assert.visible('@rejectButton')
            .click('@rejectButton')
            .assert.visible('div[aria-label="Successfully Rejected"]')
    },

    allStatus(this: EnhancedPageObject) {
        return this
            .pause(2000)
            .waitForElementPresent('@allStatus')
            .click('@allStatus')
            .waitForElementPresent('@approvedStatus')
            .click('@approvedStatus')
            .waitForElementPresent('@approvedButton')
            .pause(5000)
            .getText('@approvedButton', function (textResult) {
                console.log('Text retrieved from @approvedStatus: ' + textResult.value);
                this.assert.equal(textResult.value, 'APPROVED');
            });

    },

    searchNasher(this: EnhancedPageObject) {
        return this
            .waitForElementVisible('@search')
            .click('@search')
            .setValue('@search', 'test employee')
            .waitForElementVisible('@searchedNasher')
    },

    competencyFilter(this: EnhancedPageObject) {
        return this
            .assert.visible('@frontendCompetency')
            .click('@frontendCompetency')
            .getText('small[class="font-weight-bold"]', function (result) {
                let resultFinal: string[] = [String(result.value)];
                if (resultFinal !== null && resultFinal.includes('Frontend Competency')) {
                    console.log('contains "Frontend Competency"');
                } else {
                    console.log('does not contain Frontend Competency');
                }
                console.log(result.value)
                this.assert.equal(result.value, 'Frontend Competency');
            });
    },

    contributionTypeFilter(this: EnhancedPageObject) {
        return this
        .pause(3000)
        .click('@contributionCertificationType')
        .getText('#icon-grid > div > div.col-xxl-5.col-xl-5.col-lg-5.d-flex > div > small', function (result) {
            let filteredResult: string[] = [String(result.value)];
            if (filteredResult !== null && filteredResult.includes('Online Course')) {
                this.assert.equal(result.value, 'Online Course');
            } else {
                this.assert.notEqual(result.value, 'Online Course');
            }
        });

    }

}
const approvalPage = {
    url: "https://nashtechglobal.qa.go1percent.com/my-dashboard",

    elements: {

        approvals: {
            selector: '#sidenav-collapse-main > ul > li:nth-child(4)',
        },

        dashboard: {
            selector: 'a.nav-link.ps-0.active[href="/my-dashboard"]',
        },

        contribution: {
            selector: 'a.nav-link.text-white[href="/contribution/view"]',
        },

        allContributionsPage: {
            selector: 'div.filter-left-section > ul > li:nth-child(2) > a',
        },

        filterSection: {
            selector: 'div.filter-right-section'
        },

        filterText: {
            selector: 'h6.fiterText'
        },

        allFilterFields: {
            selector: 'select.form-control.cursor-pointer'
        },

        allStatus: {
            selector: 'div.filter-right-section > div > div:nth-child(2)'
        },

        approvedStatus: {
            selector: 'div.filter-right-section > div > div:nth-child(2) > select > option:nth-child(2)'
        },

        approvedButton: {
            selector: 'div.col-xxl-2.col-xl-2.col-lg-2.d-flex.justify-content-sm-center button.approvedStatus'
        },

        pendingButton: {
            selector: 'div.col-xxl-2.col-xl-2.col-lg-2.d-flex.justify-content-sm-center button.pendingStatus'
        },

        approveRejectText: {
            selector: 'h5.modal-title.pull-left'
        },

        writeComment: {
            selector: 'textarea[placeholder="Please write the reason"]',
        },

        pendingStatus: {
            selector: 'span.status.text-capitalize.pendingStatus'
        },

        approveButton: {
            selector: 'button.btn.btn-sm.success-color.text-white.btn-margin'
        },

        rejectButton: {
            selector: 'button.btn.btn-sm.btn-danger.text-white'
        },

        search: {
            selector: '#Search',
        },

        searchedNasher: {
            selector: 'div.search-names',
        },

        contributionCertificationType: {
            selector: 'div.filter-right-section > div > div:nth-child(3) > select > option:nth-child(9)'
        },

        frontendCompetency: {
            selector: 'app-contribution select option:nth-child(9)'
        },

        timeSelector: {
            selector: 'span.selected[bsdatepickerdaydecorator]'
        },

        filteredListSelector: {
            selector: '#icon-grid > div > div.col-xxl-5.col-xl-5.col-lg-5.d-flex > div > small'
        }
    },

    commands: [customCommands]
}
export default approvalPage;
export interface ApprovalPage
    extends EnhancedPageObject<typeof customCommands,
        typeof approvalPage.elements> { }



