module.exports = {
    url: "",

    elements: {
        knolxButton:"[src='../../../assets/Icons/knolx.svg']",
        sessionsButton: ".nav.subMenu li a[href='/knolx/upcoming-sessions']",
       
        // Upcoming Sessions Page 
        allCompetency: {
            selector: "//select[option[contains(text(),'All Competency')]]",
            locateStrategy: 'xpath'
        },
        allSessions: {
            selector: "//select[option[contains(text(),'All Session')]]",
            locateStrategy: 'xpath'
        },
        allTime: {
            selector: "//select[option[contains(text(),'All Time')]]",
            locateStrategy: 'xpath'
        },
        allLocation: {
            selector: "//select[option[contains(text(),'All Location')]]",
            locateStrategy: 'xpath'
        },
        addToCalaender:"button.add-btn",
        closePopUp:".material-icons.close-icon",
        bookmarkButton: ".book:first-of-type",
        nasher: ".text-bold",

        //Filter by All competency 
        testAutomationCompetency: "select > option:nth-child(18)",
        testAutomationCompetencyDashboard: ".topic-text.mb-n1 + .font-weight-bold",
        // Filter by All Sessions
        knolxSessions: "div:nth-child(2) > div:nth-child(2) > select > option:nth-child(2)",
        knolxSessionsDashboard:".knolxBadge",
        // Filter by Calender
        calender:"input[name='date']",
        nextCalenderButton: "button.next",
        fourNov:{
            selector:"(//span[text()='4'])[1]",
            locateStrategy:'xpath'
        },
      
        fourteenOctInPast:{
            selector:"(//span[text()='14'])",
            locateStrategy:'xpath'
        },
        dateDashboard: ".ms-md-0 > .mb-n1",

        //Past Sessions Page
        pastSessionTab: {
            selector: "//a[text()='Past Sessions']",
            locateStrategy: 'xpath'
        },
        testingTicket: {
            selector: "//h6[normalize-space()='Testing Ticket']",
            locateStrategy: 'xpath'
        },
        sessionDescription: ".description > .overall-txt-color",
        //Social Media Links in Past Sessions Page
        facebook: "img[alt='facebook']",
        twitter: "img[alt='twitter']",
        linkedin: "img[alt='linkedin']",

    },
    commands: [{
        waitForPageLoad() {
            return this
                .waitForElementVisible('body', 10000)
        },

        clickOnElement(element) {
            return this
                .waitForElementVisible(element, 10000)
                .click(element)
                .waitForPageLoad()
        },
        clickOnKnolxButton() {
            return this
                .clickOnElement("@knolxButton")
        },
        clickOnSessionsButton() {
            return this
                .clickOnElement('@sessionsButton')
        },
        // Upcoming Sessions Page 
        selectDateFromCalenderUpcomingSessions(){
            return this
                .clickOnElement('@calender')
                .clickOnElement('@nextCalenderButton')
                .clickOnElement('@fourNov')
        },
        selectDateFromCalenderPastSessions(){
            return this
                .clickOnElement('@calender')
                .clickOnElement('@fourteenOctInPast')
        },

    }]
};