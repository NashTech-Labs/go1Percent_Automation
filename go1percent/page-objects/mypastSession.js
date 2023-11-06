module.exports = {
    url: "https://knolx-backend.qa.go1percent.com/",


    elements: {
       

        knolxButton: {
            selector: 'body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > aside:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(4) > div:nth-child(1) > h6:nth-child(2)',
        },
        mysession: {
            selector: "a[href='/knolx/my-sessions/my-upcoming-sessions']",
        },
        
        Mypastsession: {
            selector: "a[class='tabs']",
        },

        SelectiveSession: {
            selector: ' div:nth-child(6) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(3)',
        
        },

        BackButton: {
            selector: '.addTxt',
           
        },
        
        FeedbackButton: {
            selector: '.ms-2.fw-bold.text-sm.my-auto.text-white',
            
        },
        ViewAttandenceButton: {
            selector: "span[class='ms-2 fw-bold text-sm my-auto']",
            
        },
        ViewFeedbackButton: {
            selector: "div[class='page-wrapper justify-content-center mb-3 cursor-pointer overall-txt-color mx-2'] strong",
        }
       
     
       
    },
    commands: [{
        clickOnKnolxSession: function() {
            return this
                .waitForElementVisible('@knolxButton', 3000)
                .click("@knolxButton")
        },
        clickOnMysession() {
            return this
                .waitForElementVisible('@mysession', 3000)
                .click('@mysession')
        },
        clickOnMypastsession() {
            return this
                .waitForElementVisible('@Mypastsession',3000)
                .click('@Mypastsession')
        },
        clickOnSelectiveSession() {
            return this
                .waitForElementVisible('@SelectiveSession',3000)
                .click('@SelectiveSession')
        },
        
        clickOnBackButton() {
            return this
                .waitForElementVisible('@BackButton',3000)
                .click('@BackButton')
        },
        clickOnFeedbackButton() {
            return this
                .waitForElementVisible('@FeedbackButton',3000)
                .click('@FeedbackButton')
                
        },
        clickOnViewAttandenceButton() {
            return this
                .waitForElementVisible('@ViewAttandenceButton',3000)
                .click('@ViewAttandenceButton')
                
        },
        clickOnViewFeedbackButton() {
            return this
                .waitForElementVisible('@ViewFeedbackButton',3000)
                .click('@ViewFeedbackButton')
                
        },
        
        
    }]
};