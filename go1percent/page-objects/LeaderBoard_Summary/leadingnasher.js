const { assert } = require("nightwatch");
const randomNumber = Math.floor(Math.random() * 5) + 1;
const skillSectionCount = 3;
module.exports = {
    elements: {
        leadingnahser: {
            selector: 'div[class="d-flex justify-content-between align-items-center summary-tab cursor-pointer"]'
        },
        contibutionButton: {
            selector: "//a[text()='Contributions']",
            locateStrategy: 'xpath'
        },
        pointsButton: {
            selector: "//a[text()='My Points']",
            locateStrategy: 'xpath'
        },
        allContributions: {
            selector: 'div[class="studio-member-card cursor-pointer my-4 px-2 py-3"]',
        },
        rewrordSection: {
            selector: "div[class='d-flex flex-column align-items-center mt-5'] div div:nth-child(1)",
        },
        rewordSectionDate:{
            selector:'span[class="text-bold"]'
        },
        rewordSectionPoints:{
            selector:'p[class="text-center"]'
        },
        noRewordNasher: {
            selector: "(//div[@class='d-flex justify-content-between align-items-center summary-tab cursor-pointer'])[3]",
            locateStrategy: "xpath"
        },
        norewordSection: {
            selector: 'span[class="mt-5 text-center"]'
        },

        viewRwordsButton: {
            selector: 'button[class="btn add-button reedeem-btn mt-5"]'
        },
        rewords: {
            selector: 'div[class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-3 card rewrdlist d-flex justify-content-center align-items-center"]'
        },
        badge: {
            selector: 'div[class="material-symbols-outlined hexagon cursor-pointer"]'
        },
        badgPopup: {
            selector: 'div[class="d-flex justify-content-between align-items-center"]'
        },
        badgePopUpDetails: {
            selector: `(//div[@class='info-div d-flex flex-column justify-content-center'])[${randomNumber}]`,
            locateStrategy: 'xpath'
        },
        noBadgeFound: {
            selector: "div[class='d-flex flex-column align-items-center my-auto'] p"
        },
        pointSection: {
            selector: 'div[class="col-6 current-month"]'
        },
        calander: {
            selector: "input[placeholder='Select Month']"
        },
        selectMonth: {
            selector: 'td:nth-child(1)'
        },
        graph: {
            selector: "canvas[data-zr-dom-id='zr_0']"
        },
        graphData1: {
            selector: "app-profile-pie-chart div:nth-of-type(2) > div > div > span:nth-of-type(2)"
        },
        graphData2: {
            selector: "//span[text()='400']",
            locateStrategy: 'xpath'
        },
        exanContribution: {
            selector: 'div[class="accordion mb-3 br spanText"]'
        },
        contributionsTyes: {
            selector: 'div[class="detail-row row pt-3 ml-0 ml-xl-1 p-0"]'
        },
        skillButton: {
            selector: 'li[class="nav-item my-1 cursor-pointer text-bold p-2"]'
        },
        noSkillSection: {
            selector: 'div[class="skill-outline-div w-100 h-40"]'
        },

        nasherWithSkill: {
            selector: "(//div[@class='d-flex justify-content-between align-items-center summary-tab cursor-pointer'])[2]",
            locateStrategy: 'xpath'
        },
        skillabel1: {
            selector: "(//div[@class='mb-4 mt-3'])[1]",
            locateStrategy: 'xpath'
        },
        skillForLable1: {
            selector: "(//div[@class='skill-outline-div w-100 h-40'])[2]",
            locateStrategy: 'xpath'
        },
        skillabel2: {
            selector: "(//div[@class='mb-4 mt-3'])[2]",
            locateStrategy: 'xpath'
        },
        skillForLable2: {
            selector: "(//div[@class='skill-outline-div w-100 h-40'])[3]",
            locateStrategy: 'xpath'
        },
        skillabel3: {
            selector: "(//div[@class='mb-2 mt-3'])",
            locateStrategy: 'xpath'
        },
        skillForLable3: {
            selector: "(//div[@class='skill-outline-div w-100 h-40'])[4]",
            locateStrategy: 'xpath'
        },
    },
    commands: [
        {
            leadingNasherProfilePage() {
                return this
                    .click('@leadingnahser')
            },
            verifyLeadingNasherProfilepage() {
                return this
                    .getText('div[class="d-flex flex-column align-items-center"]', function name(text) {
                        console.log(text)
                    })
            },
            leadingNasherALlCOntribution() {
                let regexPattern1="^.*\d+.*$"
                let contributionText='';
                return this
                    .waitForElementVisible('@contibutionButton')
                    .click('@contibutionButton')
                    .waitForElementPresent('@allContributions', function name(text) {
                        console.log(text)
                    })
                    .waitForElementVisible('@allContributions')
                    .getText('@allContributions', function name(text) {
                        browser.assert.textContains('div[class="studio-member-card cursor-pointer my-4 px-2 py-3"]',text.value)
                    })
                                      
            },
            
            allContibutionList() {
                browser.waitForElementVisible('div[class="studio-member-card cursor-pointer my-4 px-2 py-3"]')
                browser.elements('css selector', 'div[class="studio-member-card cursor-pointer my-4 px-2 py-3"]', function (result) {
                    const elementCount = result.value.length;
                    browser.assert.ok(elementCount > 0, 'contribuions list of  should be greater than 0');
                });

            },
            rewordSection() {
                dateRegex='[A-Za-z]+ [0-9]+, [0-9]+'
                return this
                    .assert.textContains('@rewordSectionPoints', 'pts', 'asserting points ont reworing section')
                    .assert.textMatches('@rewordSectionDate',dateRegex)
                    //.assert.containsText('@rewordSectionDate', 'On', 'asserting the date on the reword section')
            },
            noRewordSection() {
                return this
                    .click('@noRewordNasher')
                    .waitForElementVisible('@norewordSection')
                    .assert.containsText('@norewordSection', 'You have not redeemed any rewards yet', 'no rewords redeemed yet')
            },
            viewRewords() {
                return this
                    .click('@viewRwordsButton')
                    .waitForElementVisible('@rewords')
                    .assert.containsText('@rewords', 'pts', 'asserting points ont reworing section')
                    .assert.containsText('@rewords', 'Expiry', 'asserting the date of Expiry the reword section')
            },
            badgeSection() {
                let regexPattern = /^[A-Z]+ \d{4}\nScore: \d+$/; // Use a regex without quotes
                return this
                    .click('@badge')
                    .waitForElementVisible('@badgPopup')
                    .assert.textMatches('@badgePopUpDetails', regexPattern);
            },
            nobadgeSection() {
                return this
                    .click('@noRewordNasher')
                    .assert.containsText('@noBadgeFound', 'No Badges Earned')
            },
            pointsSection() {
                regexPattern = '^[A-Z][a-z]+ Score$';
                return this
                    .click('@pointsButton')
                    .getText('@pointSection', function name(text) {
                        console.log(text);
                    })
                    .assert.textMatches('@pointSection', regexPattern)
            },
            selectDate() {
                return this
                    .waitForElementVisible('@calander')
                    .click('@calander')
                    .waitForElementVisible('@selectMonth')
                    .click('@selectMonth')
                   
            },
            hoverOnGraph() {
                return this
                    .waitForElementVisible('@graph')
                    .moveToElement('@graph', 10, 10, function () {
                        this
                            .waitForElementVisible('@graphData1')
                        // .assert.containsText('@graphData1', 'Book')
                        // .assert.containsText('@graphData2', '400') // Use the second selector from graphData
                        // You can pause as needed
                    });
            },

            //we expand our configuration here
            expandContribution() {
                regexPattern = '[A-Za-z]+ [A-Za-z]+ [0-9]+-[A-Za-z]+-[0-9]+';
                return this
                    .waitForElementVisible('@exanContribution')
                    .click('@exanContribution')
                    .getText('@contributionsTyes', function name(text) {
                    })
                    .assert.containsText('@contributionsTyes', 'test', 'contains test as prifix or suffix of contibution')
            },
            nasherWithSkill() {
                //conatais skill with lebels 
                return this
                    .click('@nasherWithSkill')
                    .click('@skillButton')
                    .waitForElementVisible('@skillabel1')
                    .assert.containsText('@skillabel1', 'Proficient', 'contains the skill lebel Proficient')
                    .waitForElementVisible('@skillabel2')
                    .assert.containsText('@skillabel2', 'Intermediate', 'contains the skill lebel Intermediate')
                    .waitForElementVisible('@skillabel3')
                    .assert.containsText('@skillabel3', 'Beginner', 'contains the skill lebel Beginner')

                    //asserting skill for allt he labels
                    .getText('@skillForLable1', function name(text) {
                        if (text.value == 'No Skills') {
                            assert.equal(text.value, 'No Skills', "contains no skill");
                        }
                        else {
                            console.log('contains some skill')
                        }
                    })
                    .getText('@skillForLable2', function name(text) {
                        if (text.value == 'No Skills') {
                            assert.equal(text.value, 'No Skills', "contains no skill");
                        }
                        else {
                            console.log('contains some skill')
                        }
                    })
                    .getText('@skillForLable3', function name(text) {
                        if (text.value == 'No Skills') {
                            assert.equal(text.value, 'No Skills', "contains no skill");
                        }
                        else {
                            console.log('contains some skill')
                        }
                    })
            }

        }
    ]
};
