module.exports = {
    url: "",
    elements: {    
        MyActivity:{
        locateStrategy: 'xpath',
        selector: "//a[normalize-space()='My Activity']"},
        MyContribution:{
            locateStrategy: 'xpath',
            selector: "(//div)[121]"},
        ContributionPoints:{
            locateStrategy: 'xpath',
            selector: "//span[@class='px-2 feed-points']"},
            ContributionPointsSaveButton: "//div[@class='col-lg-8']//div[2]//div[1]//div[2]//div[1]",
            MyActivity: {
                locateStrategy: 'xpath',
                selector: 'body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)'
            },
            time: "//span[normalize-space()='156 DAYS AGO']",
            points: {
                locateStrategy: 'xpath',
                selector: "//span[@class='px-2 feed-points']"},
                Point: "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(3)",
                contribution: {
                    locateStrategy: 'xpath',
                    selector: "//h6[normalize-space()='You added a certification contribution']"},
                    Pointscontri:".nav-item.my-1.cursor-pointer.text-bold.p-2.newTabs",
                    Contributions:"input[placeholder='Select Month']",
                    Alltime:".mt-3.date-bar.button-class.allTime_class",
                    ContributionCircle:"canvas[data-zr-dom-id='zr_0']"
                    


           
       
    },
 
    commands: [{
        waitForPageLoad() {
            return this
                .waitForElementVisible('body', );
        },
        ContributionPoints() {
            this
                .waitForElementVisible('@ContributionPoints', 30000)
                .click('@ContributionPoints')
                .waitForElementVisible('@ContributionPointsSaveButton', 3000)
                .click('@ContributionPointsSaveButton')
            return this
        },
        ClickOnBadge() {
            this
                .waitForElementVisible('@Badge', 30000)
                .click('@Badge')
            return this
        },
        
    }]
}

