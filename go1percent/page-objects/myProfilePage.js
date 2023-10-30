module.exports={

    url:'',

    elements:{

        Setting:{
            locateStrategy: 'xpath',
            selector:'(//i[@class="material-icons user-icon"])[1]',
        },
        MyProfile:{
        
            locateStrategy: 'xpath',
            selector:"//span[text()='Profile']",
        },
    

},

commands:[{



ClickOnMyProfile(){
return this
.waitForElementVisible('@Setting',3000)
.click('@Setting')
.waitForElementVisible('@MyProfile',3000)
.click('@MyProfile');
},


}
]}