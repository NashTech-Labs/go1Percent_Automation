const My_Upcoming_Session = require('./My_Upcoming_Session')

require('./My_Upcoming_Session')

const Startingbox=My_Upcoming_Session.elements.StartingBox

module.exports={

elements:{

     EditButton:{
  
        locateStrategy: 'xpath',
        selector:'(//button[text()=" Edit "])[1]',

     },

TextBox:{

//locateStrategy:'Xpath',
selector:'textarea[type="text"]',


},

SaveButton:{

locateStrategy:'Xpath',
selector:'(//button[text()=" Save "])[1]'

},

ToastMessage:{

    locateStrategy:'Xpath',
    selector:'//div[@aria-label="Successfully Updated"]'


}

},

commands:[{

ClickOnAnySession(){

return this
.waitForElementVisible(Startingbox,3000)
.click(Startingbox)
.waitForElementVisible('@EditButton',3000)
.click('@EditButton')
.waitForElementPresent('@TextBox',5000)
.click('@TextBox')
.pause(2000)
.setValue('@TextBox','New Session')
.waitForElementPresent('@SaveButton',3000)
.click('@SaveButton')
.waitForElementVisible('@ToastMessage',3000)

}







}]

















}