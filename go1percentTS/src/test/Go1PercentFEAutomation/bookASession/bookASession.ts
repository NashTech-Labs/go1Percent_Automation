import { NightwatchBrowser, NightwatchCallbackResult } from 'nightwatch';
import { LoginPage } from '../../../page-objects/login';
import { BookASessionPage } from '../../../page-objects/bookASession/bookASessionPage'

let login: LoginPage, bookPage: BookASessionPage;
describe("Upcoming Sessions Page Frontend Automation", () => {
    before(function () {
        login = browser.page.login() as LoginPage
        bookPage = browser.page.bookASession.bookASessionPage() as BookASessionPage
        browser.window.maximize()
        login.navigate()
            .enterCredentials(browser.globals.userName, browser.globals.password)
            .signIn()
            .assert.urlContains("my-dashboard")
        bookPage
            .clickOnKnolxButton()
            .clickbookASessionButton()
            .assert.urlContains("book-a-session")

    }),

    it('1. Verify that user unable to book a session if no open slot available',async function(){
        bookPage
        .waitForPageLoad()
        .checkForAvailableSlots()
        .expect.element('@availableSlots').to.not.be.present;
    }),

    it('2. Verify that user unable to select the pre-booked slots to book a session', async function() {
        bookPage
          .waitForPageLoad()
          .clickUnAvailableDateAndCheckAvailability()
          .assert.cssProperty('@unAvailableDates', 'background-color', 'rgba(249, 135, 135, 1)');
    }),

    it('3. Verify that in the calender the red color date indicates all slots are booked',async function(){
        bookPage
        .waitForPageLoad()
        .clickUnAvailableDateAndCheckAvailability()
        .assert.cssProperty('@unAvailableDates', 'background-color', 'rgba(249, 135, 135, 1)', )
    }),

    it('4. Verify that user should not able to book a slot if the session brief is less that 250 words',async function(){
        bookPage
        .waitForPageLoad()
        .fillDetails()
        .setValue('@sessionBrief', 'This is a test')
        .assert.containsText('@errorMessage',"Description should contain atleast 250 characters.");
    }),

    it('5. Verify that user should not able to book a slot if the session brief more than 1000 words',async function(){
        bookPage
        .waitForPageLoad()
        .fillDetails()
        .setValue('@sessionBrief', 'This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test ')
        .assert.containsText('@errorMessage',"Exceeded the maxlength");
    }),

    it('6.Verify that user fill all the mandatory fields in book a session',async function(){
        bookPage
        .waitForPageLoad()
        .fillDetails()
        .setValue('@sessionBrief', 'This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test ')
        .expect.element('@submitButton').to.be.enabled;
    }),

    it('7.Verify that user unable to book a slot if all the mandatory fields are not filled',async function(){
        bookPage
        .waitForPageLoad()
        .fillDetails()
        .clearValue('@sessionBrief')
        .expect.element('@submitButton').to.have.css('pointer-events').which.equals('auto');
    }),

    it('8. Verify that the session type should be highlighted according to the free slot type', async function() {
        bookPage
          .waitForPageLoad()
          .sessionType()
          .expect.element('@knolxLabel').to.have.css('background-color').which.matches(/rgba\(54, 143, 237, \d+(\.\d+)?\)/);
    }),

    it('9. Verify that user should not be able to select the past date in the calender to book a slot ',async function(){
        bookPage
        .waitForPageLoad()
        .validateDateTime()
        .expect.element('@selectDateTime').to.not.have.attribute('found');
    }),

    it('10. Verify that user unable to change the session type manually', async function() {
        bookPage
            .waitForPageLoad()
            .validateDifferentSessions()
            .assert.not.attributeEquals('@webinarLabel', 'found', 'Webinar label should not have the "found" attribute')
            .assert.not.attributeEquals('@meetupLabel', 'found', 'Meetup label should not have the "found" attribute');
    }),
    
    it('11. Verify that user can add the co-presenter name ',async function(){
        bookPage
        .waitForPageLoad()
        .validateCoPresenterEntry()
        .expect.element('body').text.to.contain('Mayank Verma');
    }),

    it('12. Verify that user can remove the co-presenter name', async function() {
           bookPage
            .waitForPageLoad()
            .validateCoPresenterRemoval();   
    }),

    it('13. Verify that user can reset the book a session page ',async function(){
        bookPage
        .waitForPageLoad()
        .fillDetails()
        .expect.element('@sessionBrief').to.have.value.that.equals('');
    }),  

    it('14.Verify that user unable to select the sub-category without selecting category',async function(){
        bookPage
        .waitForPageLoad()
        .validateSubCategoryDropdown()
        .expect.element('@subCategoryDropDown').to.not.have.attribute('found');            
    }),

    it('15. Verify that in the calender the open slots should be visible in the green color',async function(){
        bookPage
        .waitForPageLoad()
        .verifyAvailableDatesGreenColor()
        .assert.cssProperty('@availableDates', 'background-color', 'rgba(83, 203, 160, 1)',)
    }),
    
    it('16. Verify that the user should be able to book a session without co-presenter',async function(){
        bookPage
        .waitForPageLoad()
        .fillDetails()
        .setValue('@sessionBrief', 'This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test ')
        .expect.element('@submitButton').to.be.enabled;
    }),
      
    it('17 .Verify that the user should be able to book a session with co-presenter',async function(){
        bookPage
        .waitForPageLoad()
        .fillDetails()
        .validateCoPresenterEntry()
        .setValue('@sessionBrief', 'This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test ')
        .expect.element('@submitButton').to.be.enabled;
    }),

    it('18.Verify that user can unselect the slots ',async function(){
        bookPage
        .waitForPageLoad()
        .validateUnselect();
    }),

    it('19. Verify category dropdown should show the result according to the selected category',async function(){   
        const TEST_AUTOMATION = ["Lighthouse CI", "Test AI-based system", "Appium", "Perfecto", "Testim", "Playwright.dev", "Test Container Library", "Great Expectations", "OWASP ZAP (Zed Attack Proxy)", "NightwatchJS", "ReportPortal.io", "Selenium", "Robot Framework", "Cypress", "Playwright", "AI-based Testing", "Web Application Testing", "Mobile Application Testing", "Automation Testing", "Performance Testing", "Security Testing", "Agile Testing", "Static Application security Testing (SAST)", "Dynamic Application Security Testing (DAST)", "Jmeter", "axe DevTools", "Burp Suite", "Acunetix", "Azure Test Plan", "K6.io", "Healenium", "ReportPortal", "Others"];
        const dropdownValues = await bookPage
        .waitForPageLoad()
        .verifyDropDown()
        .perform((client: { execute: (arg0: () => string[], arg1: never[], arg2: (result: any) => void) => void; assert: any }, done: (arg0: string[]) => void) => {
            client.execute(function () {
                const dropdownOptions = Array.from(document.querySelectorAll('select[formcontrolname="subCategory"] option'));
                const dropdownValues = dropdownOptions.map(option => (option.textContent ?? '').trim());
                return dropdownValues;
            }, [], function (result: { value: string[] }) {
                done(result.value);
            });
        });

    const matchingValues = dropdownValues.filter(value => value !== '').filter(value => TEST_AUTOMATION.includes(value));

    bookPage.api.assert.deepEqual(matchingValues, TEST_AUTOMATION, 'Dropdown values match TEST_AUTOMATION');

}),    

        after(function (browser: NightwatchBrowser) {
            browser.end();
        })
});