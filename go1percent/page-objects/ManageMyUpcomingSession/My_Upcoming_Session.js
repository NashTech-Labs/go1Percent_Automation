module.exports={


elements:{

    UpcomingSession:{

        //locateStrategy: 'xpath',
        selector:'.tabs.newTabs.active',
        
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
        },

        ApprovedTemplate:{

            selector:'.approved-badge'
        },

        ApprovedPageTitle:{

            selector:'.pb-2.pt-3.mb-n2.page-title'
        },

        ApprovedDescription:{

selector:'div[class="mt-5"] h4'

        },

        ApprovedSlideURL:{

            selector:'.pb-3.mt-2.slideContent'
        },

        SessionType:{
selector:'(//div[text()=" Knolx "])[1]',
locateStrategy: 'xpath'

        },

        SessionDate:{
selector:'//span[text()=" 31 Oct 2023"]',
locateStrategy: 'xpath'

        },
        SessionTime:{

            selector:'//span[text()=" 4:09 - 4:54 PM IST"]',
            locateStrategy: 'xpath'
        },

        SessionTitle:{
            selector:'//div[text()=" Testing Title "]',
            locateStrategy: 'xpath'

        },

        SessionStatus:{
            selector:'(//span[text()=" Pending for Approval "])[1]',
            locateStrategy: 'xpath'

        },
    
    
    },





commands:[{

        ClickOnUpcomingSession(){
        return this
        .waitForElementVisible('@UpcomingSession',3000)
        .click('@UpcomingSession')
        .waitForElementVisible('@ListPresent',3000)
        },

        ClickOnApprovedSession(){
            //const Expected='TestAutomationTitle';
            Title='';
            return this
            .waitForElementVisible('@UpcomingSession',3000)
            .click('@UpcomingSession')
            .waitForElementVisible('@ListPresent',3000)
            .pause(4000)
            .click('@ApprovedTemplate')
            .pause(5000)
            .getText('@ApprovedPageTitle',function(result){
                      let Title=result.value;
                     console.log(Title);
                //  return { Expected, Title };

            })
        
        },

        SessionWithMultipleData(){

            return this
        .waitForElementVisible('@UpcomingSession',3000)
        .click('@UpcomingSession')
        .waitForElementVisible('@ListPresent',3000)
        .pause(3000)
        // .getText('@ListPresent',function(result){

        //     const AllData=result.value;

        //     console.log(AllData);



        // })



        }

        
}]



}

















