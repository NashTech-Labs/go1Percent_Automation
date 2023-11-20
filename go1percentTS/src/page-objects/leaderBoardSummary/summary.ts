import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const commands = {
    dashboardIsVisible(this: SummaryPage) {
        return this
            .waitForElementVisible('@dashboard')
            .assert.containsText('@dashboard', 'DASHBOARD')
    },
    isLeaderboardVisible(this: SummaryPage) {
        return this
            .waitForElementVisible('@leaderboard')
            .click('@leaderboard')
            .assert.containsText('@summary', 'Summary')
    },
    SummaryWithAllTheDetails(this: SummaryPage) {
        return this
            .click('@summary')
            .waitForElementVisible('@welcomeToSummaryPage')
    },
    allContributionSectionIsVisible(this: SummaryPage) {
        return this
            .waitForElementVisible('@contributionTypes_1')
    },
    clickOnNavigationArrow(this: SummaryPage) {
        return this.click('@navigationArrow')
    },
    leadingNasher: function (this: SummaryPage) {
        return this
            .assert.visible('@leadingNashers')
    },

    switchBetweenAlltimeandThisMonth(this: SummaryPage) {
        return this
            .click('@allTime')
    },

    containsLeadingnasherList(this: SummaryPage) {
        const elementValues: any[] = [];
        this.waitForElementVisible('@leadingNasherList')
        browser.elements('css selector', 'div[class="d-flex justify-content-between align-items-center summary-tab cursor-pointer"]', function (result) {
            elementValues.push(result.value)
            this.assert.ok(elementValues.length > 0, 'elementCount should be greater than 0')
        });
        return this
    }

};

const summaryPage: PageObjectModel = {
    url: "https://nashtechglobal.qa.go1percent.com/",
    commands: [commands],
    elements: {
        leaderboard: {
            selector: '//h6[text()=" LEADERBOARD "]',
            locateStrategy: 'xpath'
        },
        dashboard: { selector: 'div h6[class="ms-3 mb-n1 text-uppercase text-sm text-white font-weight-bold"]' },
        summary: { selector: 'a[class="nav-link text-white"]' },
        welcomeToSummaryPage: { selector: 'div[class="ml-1 mt-4 text-div"]' },
        navigationArrow: { selector: "div:nth-child(2) button.btn.sy" },
        contributionTypes_1: { selector: "div[class='row section'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) p:nth-child(1)" },
        contributionTypes_2: { selector: "div[class='row section'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) p:nth-child(1)" },
        contributionTypes_3: { selector: "div[class='row section'] div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(2) p:nth-child(1)" },
        contributionTypes_4: { selector: "div[class='row section'] div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(2) p:nth-child(1)" },
        leadingNashers: { selector: 'div[class="leading mt-3"]' },
        leadingNasherList: { selector: 'div[class="d-flex justify-content-between align-items-center summary-tab cursor-pointer"]' },
        thismonth: { selector: 'a[class="mx-2 tabs cursor-pointer overall-txt-color"]' },
        allTime: { selector: "app-leading-knolder div[class='card leading-card p-4'] a[class='mx-2 tabs cursor-pointer overall-txt-color']" },
    }
};

export default summaryPage;

export interface SummaryPage
    extends EnhancedPageObject<typeof commands,
        typeof summaryPage.elements> { }