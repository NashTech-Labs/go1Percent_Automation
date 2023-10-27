module.exports={

    url:'',

    elements:{

        Knolx:{
            locateStrategy: 'xpath',
            selector:'(//div[@role="button"])[4]',
        },
        MySession:{
        
            locateStrategy: 'xpath',
            selector:'//a[@href="/knolx/my-sessions/my-upcoming-sessions"]',//(//li[@class="nav-item"])[10]
        },
       

},

commands:[{

ClickOnKnolx(){
return this
.waitForElementVisible('@Knolx',3000)
.click('@Knolx')

},

ClickOnMySession(){
return this
.waitForElementVisible('@MySession',5000)
.click('@MySession')
},



}







]



}