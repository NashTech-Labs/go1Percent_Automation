module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com/my-dashboard',
    elements: {
        approvals: {
            selector: '#sidenav-collapse-main > ul > li:nth-child(4)',
        },

        dashboard: {
            selector: 'a.nav-link.ps-0.active[href="/my-dashboard"]',
        },

        allContributionsPage: {
            selector: 'li.nav-item a.cursor-pointer.newTabs',
        },

        allContributionsPage: {
            selector: 'li.nav-item a.cursor-pointer.newTabs',
        },

        contribution: {
            selector: 'a.nav-link.text-white[href="/contribution/view"]',
        },

        approvalsPage: {
            selector: 'a.cursor-pointer.newTabs',
        },

        approve: {
            selector: '#icon-grid > div > div.col-xxl-2.col-xl-2.col-lg-2.d-flex.justify-content-sm-center > img.ms-n2',
        },

        writeComment: {
            selector: 'textarea[placeholder="Please write the reason"]',
        },

        approveButton: {
            selector: 'button.btn.btn-sm.success-color.text-white.btn-margin',
        },

        reject: {
            selector: '#icon-grid > div > div.col-xxl-2.col-xl-2.col-lg-2.d-flex.justify-content-sm-center > img.ms-2',
        },

        rejectButton: {
            selector: 'button.btn.btn-sm.btn-danger.text-white',
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

        search: {
            selector: '#Search',
        },

        searchedNasher: {
            selector: 'div.search-names',
        },

        frontendCompetency: {
            selector: 'app-contribution select option:nth-child(9)'
        },

        contributionOnlineCourseType: {
            selector: 'div.filter-right-section > div > div:nth-child(3) > select > option:nth-child(9)'
        },

    },

    commands: {

        approvalsPage: function () {
            return this
                .navigate()
                .assert.urlEquals('https://nashtechglobal.qa.go1percent.com/my-dashboard')
                .waitForElementVisible('@dashboard')
                .waitForElementVisible('@approvals')
                .click('@approvals')
                .waitForElementVisible('@contribution')
                .click('@contribution')
        },

        openApprovalsContributionPage: function () {
            return this
                .assert.urlEquals('https://nashtechglobal.qa.go1percent.com/contribution/view')
                .click('@allContributionsPage')
                .waitForElementVisible('@approvalsPage')
                .click('@approvalsPage')
                .pause(5000)

        },

        verifyAllFields: function () {
            return this
                .waitForElementVisible('@filterSection')
                .waitForElementPresent('@filterText')
                .waitForElementPresent('@allFilterFields')
                .assert.visible('@filterSection')
                .assert.visible('@filterText')
                .assert.visible('@allFilterFields')

        },

        approvePendingContribution: function () {
            return this
                .pause(20000)
                .waitForElementVisible('@approve')
                .click('@approve')
                .pause(4000)
                .assert.containsText('h5.modal-title.pull-left', 'Approve/Reject Contribution')
                .waitForElementVisible('@writeComment')
                .click('@writeComment')
                .setValue('@writeComment', 'Testing purpose')
                .click('@approveButton')
                .waitForElementVisible('div[aria-label="Successfully Approved"]')
        },


        rejectPendingContribution: function () {
            return this
                .waitForElementVisible('@reject')
                .click('@reject')
                .pause(4000)
                .assert.containsText('h5.modal-title.pull-left', 'Approve/Reject Contribution')
                .waitForElementVisible('@writeComment')
                .click('@writeComment')
                .setValue('@writeComment', 'Testing purpose')
                .click('@rejectButton')
                .waitForElementVisible('div[aria-label="Successfully Rejected"]')
        },

        searchNasher: function () {
            return this
                .waitForElementVisible('@search')
                .click('@search')
                .setValue('@search', 'test employee')
                .waitForElementVisible('@searchedNasher')

        },

        competencyFilter: function () {
            return this
                .assert.visible('@frontendCompetency')
                .click('@frontendCompetency')
                .getText('small[class="font-weight-bold"]', function (result) {
                    let resultFinal = result.value;
                    if (resultFinal !== null && resultFinal.includes('Frontend Competency')) {
                        console.log('contains "Frontend Competency"');
                    } else {
                        console.log('does not contain');
                    }
                    console.log(result.value)
                    this.assert.equal(result.value, 'Frontend Competency');
                });
        },


        timeFilter : function () {
            return this
            .assert.visible('input[bsdatepicker][name="date"]')
            .click('input[bsdatepicker][name="date"]')
            .waitForElementPresent('@timeSelector')
            .click('@timeSelector')

        }
    }
};