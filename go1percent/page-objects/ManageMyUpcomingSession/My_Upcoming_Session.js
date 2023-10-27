module.exports={


elements:{

    UpcomingSession:{

        locateStrategy: 'xpath',
        selector:'//a[normalize-space()="My Upcoming Session"]',
        
        },

        StartingBox:{
            locateStrategy: 'xpath',
            selector:'//div[normalize-space()="testing"]',     
        },

        MiddleBox:{
            locateStrategy: 'xpath',
            selector:'//div[normalize-space()="Test Title 4892"]', 

        },

        LastBox:{
            locateStrategy: 'xpath',
            selector:'//div[normalize-space()="TestAutomationTitleNashtech"]',


        },

        ListPresent:{

            selector:'body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-sessions:nth-child(2) > div:nth-child(2) > app-my-upcoming-sessions:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
        }
    },
commands:[{

        ClickOnUpcomingSession(){
        return this
        .waitForElementVisible('@UpcomingSession',3000)
        .click('@UpcomingSession')
        .waitForElementVisible('@ListPresent',3000)
        },

}]



}

















