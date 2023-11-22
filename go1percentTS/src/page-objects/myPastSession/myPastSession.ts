import { PageObjectModel, EnhancedPageObject } from 'nightwatch';
const message = 'this is for testing purpose';
 
const Go1commands = {
    enterCredentials(this:EnhancedPageObject) {
        return this
        .setValue('@emailInput', 'testemployee')         
           .pause(1000)
            .setValue('@passwordInput', 'testemployee')
            .pause(1000)      
    },
    signInButton(this:LoginPage){
        return this
        .click('@signIn')
    },    
    clickOnKnolxButton(this: LoginPage){
        return this 
        .click('@knolxButton')
    },
    clickOnMysession(this: LoginPage){
        return this
        .click('@mysession')
    },
    clickOnMyPastSession(this: LoginPage){
        return this
        .click('@Mypastsession')
    },

    clickOnSelectiveSession(this: LoginPage){
        return this
                .waitForElementVisible(By.xpath("//span[normalize-space()='3']"))
                .click(By.xpath("//span[normalize-space()='3']"))
                .waitForElementVisible('@SelectiveSession')
               // .click('@devopsPage')
                .click('@SelectiveSession')
                .pause(2000)
    },
    clickOnBackButton(this: LoginPage){
        return this
        .click('@BackButton')
        .pause(2000)
    },
    clickOnFeedbackButton(this: LoginPage){
        return this
        .click('@FeedbackButton')
    },
    clickOnViewAttandenceButton(this: LoginPage){
        return this
        .click('@ViewAttandenceButton')
    },
    clickOnViewFeedbackButton(this: LoginPage){
        return this
        .click('@ViewFeedbackButton')
    },
    clickOnCompletedSessionButton(this: LoginPage){
        return this
           .waitForElementVisible('@completedSession')
           .click('@completedSession')
    }
 
};
 
const LoginPage: PageObjectModel = {
    url: "https://nashtechglobal.qa.go1percent.com/",
    commands: [Go1commands],
    elements: {
        emailInput: '#username',
        passwordInput: '#password',
        signIn: "#kc-login",
        knolxButton: {          
            selector: "//h6[normalize-space()='Knolx']",
               locateStrategy: 'xpath'
            },
            mysession: {
                selector: "a[href='/knolx/my-sessions/my-upcoming-sessions']",
            },           
            Mypastsession: {
                selector: "a[class='tabs']",
            },
            SelectiveSession: {
                selector: "//div[normalize-space()='devops']",
                locateStrategy: 'xpath'
            },
            BackButton: {
                selector: '.addTxt', 
            },
            FeedbackButton: {
                selector: '.ms-2.fw-bold.text-sm.my-auto.text-white',  
            },
            ViewAttandenceButton: {
                selector: "(//span[@class='ms-2 fw-bold text-sm my-auto'])[1]",
                locateStrategy: 'xpath'
            },
            ViewFeedbackButton: {
                selector: "div[class='page-wrapper justify-content-center mb-3 cursor-pointer overall-txt-color mx-2'] strong",
            },
            completedSession: {
                selector: "//span[@class='material-icons back-icon navigate-back-icon']",
                locateStrategy: 'xpath'
            },
             devopsPage:"(//div[@class='p-3'])[5]"
    },
 
};
 
export default LoginPage;
 
export interface LoginPage
  extends EnhancedPageObject<typeof Go1commands,
  typeof LoginPage.elements> { }