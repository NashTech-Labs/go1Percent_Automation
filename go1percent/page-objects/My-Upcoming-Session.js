module.exports={

    url:'',

    elements:{

        Knolx:{
            locateStrategy: 'xpath',
            selector:'(//div[@role="button"])[4]',
        },
        MySession:{
        
            locateStrategy: 'xpath',
            selector:'(//li[@class="nav-item"])[10]',
        },
        UpcomingSession:{

            locateStrategy: 'xpath',
            selector:'//a[text()="My Upcoming Session "]',
            
            }

},

commands:[{

ClickOnKnolx(){
return this
.waitForElementVisible('@Knolx',3000)
.click('@Knolx')

},

ClickOnMySession(){
return this
.waitForElementVisible('@MySession',3000)
.click('@MySession')
},

ClickOnUpcomingSession(){
return this
.waitForElementVisible('@UpcomingSession',3000)
.click('@UpcomingSession')

}

}







]



}