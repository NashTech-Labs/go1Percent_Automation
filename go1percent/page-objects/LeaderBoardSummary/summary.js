const { assert } = require("nightwatch");

module.exports = {
    elements: {
        leaderboard: {
            selector: '//h6[text()=" LEADERBOARD "]',
            locateStrategy: 'xpath'
        },
        dashboard: 'div h6[class="ms-3 mb-n1 text-uppercase text-sm text-white font-weight-bold"]',
        summary: 'a[class="nav-link text-white"]',
        welcomeToSummaryPage: 'div[class="ml-1 mt-4 text-div"]',
        navigationArrow: "div:nth-child(2) button.btn.sy",
        contributionTypes_1: "div[class='row section'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) p:nth-child(1)",
        contributionTypes_2: "div[class='row section'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) p:nth-child(1)",
        contributionTypes_3: "div[class='row section'] div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(2) p:nth-child(1)",
        contributionTypes_4: "div[class='row section'] div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(2) p:nth-child(1)",
        leadingNashers: 'div[class="leading mt-3"]',
        leadingNasherList:'div[class="d-flex justify-content-between align-items-center summary-tab cursor-pointer"]',
        thismonth: 'a[class="mx-2 tabs cursor-pointer overall-txt-color"]',
        allTime: "app-leading-knolder div[class='card leading-card p-4'] a[class='mx-2 tabs cursor-pointer overall-txt-color']",
    },
    commands: [


        {
            dashboardIsVisible() {
                return this
                    .waitForElementVisible('@dashboard')
                    .assert.containsText('@dashboard', 'DASHBOARD')
            },
            isLeaderboardVisible() {
                return this
                    .waitForElementVisible('@leaderboard')
                    .click('@leaderboard')
                    .assert.containsText('@summary', 'Summary')
            },
            SummaryWithAllTheDetails() {
                return this
                    .click('@summary')
                    .waitForElementVisible('@welcomeToSummaryPage')
            },
            allContributionSectionIsVisible() {
                return this
                    .waitForElementVisible('@contributionTypes_1')
            },
            clickOnNavigationArrow(){
                return this.click('@navigationArrow')
            },

            leadingNasher: function () {
                return this
                    .assert.visible('@leadingNashers')
            },

            switchBetweenAlltimeandThisMonth() {
                return this
                    .click('@allTime')
            },

            containsLeadingnasherList() {
                this.waitForElementVisible('@leadingNasherList')
                browser.elements('css selector', this.elements.leadingNasherList, function (result) {
                    const elementCount = result.value.length;
                    this.assert.ok(elementCount > 0, 'elementCount should be greater than 0')
                });
                return this
            }

        }
    ]
};