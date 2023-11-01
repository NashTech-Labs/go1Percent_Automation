const globalsData = require('../../globals')
const bookASessionPage = browser.page.bookASessionPage()

describe("KNolx|Sessions Page Frontend Automation", () => {
    before(function () {
        browser
            .maximizeWindow()
            .page.login()
            .navigate()
            .enterCredentials(browser.globals.userName, browser.globals.password)
            .signIn()
            .assert.urlContains("my-dashboard")

            bookASessionPage
            .clickOnKnolxButton()
            .clickbookASessionButton()
            .assert.urlContains("book-a-session")
    }),
    it('1. Verify that user unable to book a session if no open slot available',async function(){
        bookASessionPage
        .waitForPageLoad()
        .checkForAvailableSlots();  
    }),

    it('2. Verify that user unable to select the pre-booked slots to book a session',async function(){
        bookASessionPage
        .waitForPageLoad()
        .clickUnAvailableDateAndCheckAvailability();  
    }),

    it('3. Verify that in the calender the red color date indicates all slots are booked',async function(){
        bookASessionPage
        .waitForPageLoad()
        .clickUnAvailableDateAndCheckAvailability();

    }),
    it('4. Verify that user should not able to book a slot if the session brief is less that 250 words',async function(){
        bookASessionPage
        .waitForPageLoad()
        .fillLessDetails();

    }),
    it('5. Verify that user should not able to book a slot if the session brief more than 1000 words',async function(){
        bookASessionPage
        .waitForPageLoad()
        .fillMoreDetails();
    }),
    it('6.Verify that user fill all the mandatory fields in book a session',async function(){
        bookASessionPage
        .waitForPageLoad()
        .fillCorrectDetails();
    })
    it('7.Verify that user unable to book a slot if all the mandatory fields are not filled',async function(){
        bookASessionPage
        .waitForPageLoad()
        .fillWrongCorrectDetails();
    }),
    it('8. Verify that the session type should be highlighted according to the free slot type ',async function(){
        bookASessionPage
        .waitForPageLoad()
        .validateSesstionType();
    }),
    it('9. Verify that user should not be able to select the past date in the calender to book a slot ',async function(){
        bookASessionPage
        .waitForPageLoad()
        .validateDateTime();
    }),
    it('10.Verify that user unable to change the session type manually',async function(){
        bookASessionPage
        .waitForPageLoad()
        .validateDifferentSessions();
    }),
    // it('11. Verify that user can add the co-presenter name ',async function(){

//    12 . Verify that user can remove the co-presenter name
        it('13. Verify that user can reset the book a session page ',async function(){
            bookASessionPage
            .waitForPageLoad()
            .validateReset();
        }),

        it('14.Verify that user unable to select the sub-category without selecting category',async function(){
            bookASessionPage
            .waitForPageLoad()
            .validateSubCategoryDropdown();
        }),

        it('15. Verify that in the calender the open slots should be visible in the green color',async function(){
            bookASessionPage
            .waitForPageLoad()
            .verifyAvailableDatesGreenColor()
        }),

         it('16. Verify that the user should be able to book a session without co-presenter',async function(){
            bookASessionPage
            .waitForPageLoad()
            .fillCorrectDetails();
        }),

        // 17 .Verify that the user should be able to book a session with co-presenter
        //18. Verify category dropdown should show the result according to the selected category
        //19.Verify that user can unselect the slots 
        
        after(function (browser) {
            browser.end();
        })
});