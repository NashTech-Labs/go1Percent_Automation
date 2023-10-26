const DataSet=require('../../globals')
const Login=browser.page.login()

describe("Manage My Upcoming Session",() =>
{
    beforeEach:(function(browser)
     {
        Login
            .navigate()
            .enterCredentials(browser.globals.userName, browser.globals.password)
            .signIn()
       // browser.pause(30000)
           var Upcoming=browser.page.My-Upcoming-sessionStorage()
           Upcoming
           .ClickOnKnolx()
           .ClickOnMySession()
           .ClickOnUpcomingSession()
           .assert.contains('@UpcomingSession','My Upcoming Session')
    
        
    }),


    after(function (browser) {
        browser.end();
    })














}

















)



















