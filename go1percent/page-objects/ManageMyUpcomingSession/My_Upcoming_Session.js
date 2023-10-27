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
    },
commands:[{

        ClickOnUpcomingSession(){
        return this
        .waitForElementVisible('@UpcomingSession',3000)
        .click('@UpcomingSession')
        
        },

}]



}

















