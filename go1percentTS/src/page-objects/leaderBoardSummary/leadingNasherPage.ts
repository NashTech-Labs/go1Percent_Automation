import { Assertion } from 'chai';
import { PageObjectModel, EnhancedPageObject } from 'nightwatch';
const { assert } = require("nightwatch");
const randomNumber = Math.floor(Math.random() * 5) + 1;
const skillSectionCount = 3;

const commands = {
    leadingNasherProfilePage(this: LeadingNasherPage) {
        return this
            .click('@leadingnahser')
    },
    verifyLeadingNasherProfilepage(this: LeadingNasherPage) {
        return this
            .getText('div[class="d-flex flex-column align-items-center"]', function name(text) {
                console.log(text)
            })
    },

    leadingNasherAllContribution(this: LeadingNasherPage) {
        const regexPattern1 = '/^.*\d+.*$/';
        let contributionText: any = '';

        return this
            .waitForElementVisible('@contibutionButton') // Make sure '@contibutionButton' is a valid selector
            .click('@contibutionButton')
            .waitForElementPresent('@allContributions')
            .waitForElementVisible('@allContributions')
            .getText('@allContributions', function name(result) {
                contributionText = result.value; // Save the text for further use if needed
                console.log(result.value);
                // Verify that the fetched text meets your expectations
            });
        // You might need to add additional assertions or return statements here
        // depending on what you want to achieve.
    },

    allContibutionList(this: LeadingNasherPage) {
        const elementValues: any[] = [];
        browser.waitForElementVisible('div[class="studio-member-card cursor-pointer my-4 px-2 py-3"]')
        browser.elements('css selector', 'div[class="studio-member-card cursor-pointer my-4 px-2 py-3"]', function (result) {
            elementValues.push(result.value)
            this.assert.ok(elementValues.length > 0, 'elementCount should be greater than 0')
        });

    },
    verifyRewordSectionContainsPointAndDate(this: LeadingNasherPage) {
        const dateRegex = '[A-Za-z]+ [0-9]+, [0-9]+'
        return this
            .assert.textContains('@rewordSectionPoints', 'pts', 'asserting points ont reworing section')
            .assert.textMatches('@rewordSectionDate', dateRegex)
    },
    noRewordSection(this: LeadingNasherPage) {
        return this
            .click('@noRewordNasher')
            .waitForElementVisible('@norewordSection')
            .assert.containsText('@norewordSection', 'You have not redeemed any rewards yet', 'no rewords redeemed yet')
    },
    viewRewords(this: LeadingNasherPage) {
        return this
            .click('@viewRwordsButton')
            .waitForElementVisible('@rewords')
            .assert.containsText('@rewords', 'pts', 'asserting points ont reworing section')
            .assert.containsText('@rewords', 'Expiry', 'asserting the date of Expiry the reword section')
    },
    contaisBadgeSectionWithPopUpDetails(this: LeadingNasherPage) {
        let regexPattern = /^[A-Z]+ \d{4}\nScore: \d+$/; // Use a regex without quotes
        return this
            .click('@badge')
            .waitForElementVisible('@badgPopup')
            .assert.textMatches('@badgePopUpDetails', regexPattern);
    },
    contaisNoBadgeSection(this: LeadingNasherPage) {
        return this
            .click('@noRewordNasher')
            .assert.containsText('@noBadgeFound', 'No Badges Earned')
    },
    pointsSectionWithScore(this: LeadingNasherPage) {
        const regexPattern = '^[A-Z][a-z]+ Score$';
        return this
            .click('@pointsButton')
            .getText('@pointSection', function name(text) {
                console.log(text);
            })
            .assert.textMatches('@pointSection', regexPattern)
    },
    selectDate(this: LeadingNasherPage) {
        return this
            .waitForElementVisible('@calander')
            .click('@calander')
            .waitForElementVisible('@selectMonth')
            .click('@selectMonth')

    },
    hoverOnGraph(this: LeadingNasherPage) {
        let graphDetail1sRegex = '[A-Za-z]+';
        let graphDetail2sRegex = '[0-9]+';

        return this
            .waitForElementVisible('@graph', 3000)
            .moveToElement('@graph', 10, 10)
            .pause(5000)
            .moveToElement('@graph', 60, 60)
            .pause(5000)
            .moveToElement('@graph', 60, 60, function name(params) {
            })
            .waitForElementVisible('@graphData1')
            .assert.textMatches('@graphData1', new RegExp(graphDetail1sRegex))
            .assert.textMatches('@graphData2', new RegExp(graphDetail2sRegex))
    },

    // we expand our configuration here
        expandContribution(this: LeadingNasherPage) {
            
            let wordRegex = '[A-Za-z]+ [A-Za-z]+';
            let dateRegex='[0-9]+-[A-Za-z]+-[0-9]+';

            return this
                .waitForElementVisible('@exanContribution')
                .click('@exanContribution')
                .getText('@contributionsTyesTwo', function name(text) {
                console.log('-----------------------------------',text.value) 
                })
                .assert.textMatches('@contributionsTyesOne', new RegExp(wordRegex))
                .assert.textMatches('@contributionsTyesTwo', new RegExp(dateRegex))
        },
   
    nasherWithSkillAndWithoutSkill(this: LeadingNasherPage) {
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

};

const leadingNasher: PageObjectModel = {
    url: "https://nashtechglobal.qa.go1percent.com/",
    commands: [commands],
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
        rewordSectionDate: {
            selector: 'span[class="text-bold"]'
        },
        rewordSectionPoints: {
            selector: 'p[class="text-center"]'
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
            selector: 'div[class*="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-3 card"]'
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
            selector: 'canvas'
        },
        graphData1: {
            selector: "app-profile-pie-chart div:nth-of-type(2) > div > div > span:nth-of-type(2)"
        },
        graphData2: {
            selector: "app-profile-pie-chart div:nth-of-type(2) > div > div > span:nth-of-type(3)",
        },
        exanContribution: {
            selector: 'div[class="accordion mb-3 br spanText"]'
        },
        contributionsTyesOne: {
            selector: "div[class*='pb-3 mt-4'] div div:nth-child(1) div:nth-child(1)"
        },
        contributionsTyesTwo:{
            selector:'div[class="col-4 col-md-4 text-right text-xl-center"]'
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
    }
};

export default leadingNasher;

export interface LeadingNasherPage
    extends EnhancedPageObject<typeof commands,
        typeof leadingNasher.elements> { }