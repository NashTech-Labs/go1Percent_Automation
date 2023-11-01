module.exports = {
    url: "",
    elements: {
        knolxMenuOption: {
            selector: "(//div[@role='button'])[4]",
            locateStrategy: 'xpath'
        },
        unAvailableDates: {
            selector: '//span[@class="bg-unavailable text-white ng-star-inserted"]',
            locateStrategy: 'xpath'
        },
        availableSlots: {
            selector: '//div[@class="d-flex flex-row card ps-3 py-2 mt-3 available slot-not-clicked ng-star-inserted"]',
            locateStrategy: 'xpath'
        },
        availableDates: {
            selector: '//span[@class="bg-unavailable text-white bg-available ng-star-inserted"]',
            locateStrategy: 'xpath'
        },
        firstAvailableDate: {
            selector: '(//span[@class="bg-unavailable text-white bg-available ng-star-inserted"])[1]',
            locateStrategy: 'xpath'
        },
        bookASessionButton: ".nav-link.text-white[href='/knolx/book-a-session']",
        categoryDropDown: {
            selector: '//select[@formcontrolname="category"]',
            locateStrategy: 'xpath'
        },
        testAutomationOption: {
            selector: "//option[contains(text(),'TEST AUTOMATION COMPETENCY ')]",
            locateStrategy: 'xpath',
        },
        subCategoryDropDown: {
            selector: '//select[@formcontrolname="subCategory"]',
            locateStrategy: 'xpath'
        },
        cypressOption: {
            selector: "//option[contains(text(),' Cypress ')]",
            locateStrategy: 'xpath',
        },
        topicTileInput: {
            selector: '//input[@formcontrolname="topic"]',
            locateStrategy: 'xpath'
        },
        sessionBrief:{
            selector:'//textarea[@formcontrolname="sessionDescription"]',
            locateStrategy:'xpath'
        },
        errorMessage:{
            selector:'//span[@class="errorMessage ng-star-inserted"]',
            locateStrategy:'xpath'
        },
        submitButton:{
            selector:'//button[@type="submit"]',
            locateStrategy:'xpath'
        },
        knolxLabel:{
            selector:'//label[@for="knolx"]',
            locateStrategy:'xpath'
        },
        selectDateTime:{
            selector:'//input[@type="datetime-local"]',
            locateStrategy:'xpath'
        },
        webinarLabel:{
            selector:'//label[@for="webinar"]',
            locateStrategy:'xpath'
        },
        meetupLabel:{
            selector:'//label[@for="meetup"]',
            locateStrategy:'xpath'
        },
        coPresenterField:{
            selector:'//input[@placeholder="Search"]',
            locateStrategy:'xpath'
        },
        resetButton:{
            selector:'//button[@class="btn btn-primary bg-cancel text-black ms-2"]',
            locateStrategy:'xpath'
        },
        
    },
    commands: [{
        waitForPageLoad() {
            return this
                .waitForElementVisible('body', 10000);
        },

        clickOnElement(element) {
            return this
                .waitForElementVisible(element, 10000)
                .click(element)
                .waitForPageLoad();
        },

        clickOnKnolxButton() {
            return this
                .clickOnElement("@knolxMenuOption");
        },

        clickbookASessionButton() {
            return this
                .clickOnElement("@bookASessionButton");
        },

        clickOnUnavailableDates() {
            return this
                .clickOnElement("@unavailableDates");
        },

        checkForAvailableSlots: function () {
            this.api.execute(function () {
                window.scrollBy(0, 400);
            });
            this.expect.element('@availableSlots').to.not.be.present;

            return this;
        },

        clickUnAvailableDateAndCheckAvailability: function () {
            return this
                .waitForElementVisible('@unAvailableDates', 5000)
                .assert.cssProperty('@unAvailableDates', 'background-color', 'rgba(249, 135, 135, 1)', (result) => {
                    if (result.status === 0) {
                        console.log('Background color is correct.');
                    } else {
                        console.error('Background color is not correct.');
                    }
                });
        },

        fillLessDetails() {
            return this
              .clickOnElement('@firstAvailableDate')
              .execute(function () {
                window.scrollBy(0, 400);
              })
              .clickOnElement('@availableSlots')
              .clickOnElement("@categoryDropDown")
              .clickOnElement("@testAutomationOption")
              .clickOnElement("@subCategoryDropDown")
              .clickOnElement("@cypressOption")
              .clickOnElement("@topicTileInput")
              .clearValue('@topicTileInput') 
              .setValue('@topicTileInput', 'Automation Test')
              .clearValue('@sessionBrief')
              .setValue('@sessionBrief', 'This is a test')
              .assert.containsText('@errorMessage',"Description should contain atleast 250 characters.");

          },
          fillMoreDetails() {
            return this
              .clickOnElement('@firstAvailableDate')
              .execute(function () {
                window.scrollBy(0, 400);
              })
              .clickOnElement('@availableSlots')
              .clickOnElement("@categoryDropDown")
              .clickOnElement("@testAutomationOption")
              .clickOnElement("@subCategoryDropDown")
              .clickOnElement("@cypressOption")
              .clickOnElement("@topicTileInput")
              .clearValue('@topicTileInput') 
              .setValue('@topicTileInput', 'Automation Test')
              .clearValue('@sessionBrief')
              .setValue('@sessionBrief', 'This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test ')
              .assert.containsText('@errorMessage',"Exceeded the maxlength");

          },

          fillCorrectDetails() {
            return this
            .clickOnElement('@firstAvailableDate')
            .execute(function () {
              window.scrollBy(0, 400);
            })
            .clickOnElement('@availableSlots')
            .clickOnElement("@categoryDropDown")
            .clickOnElement("@testAutomationOption")
            .clickOnElement("@subCategoryDropDown")
            .clickOnElement("@cypressOption")
            .clickOnElement("@topicTileInput")
            .clearValue('@topicTileInput') 
            .setValue('@topicTileInput', 'Automation Test')
            .clearValue('@sessionBrief')
            .setValue('@sessionBrief', 'This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test ')
            .expect.element('@submitButton').to.be.enabled;
        
        },
        fillWrongCorrectDetails() {
            return this
            .clickOnElement('@firstAvailableDate')
            .execute(function () {
              window.scrollBy(0, 400);
            })
            .clickOnElement('@availableSlots')
            .clickOnElement("@categoryDropDown")
            .clickOnElement("@testAutomationOption")
            .clickOnElement("@subCategoryDropDown")
            .clickOnElement("@cypressOption")
            .clickOnElement("@topicTileInput")
            .clearValue('@topicTileInput') 
            .clearValue('@sessionBrief')
            .expect.element('@submitButton').to.have.css('pointer-events').which.equals('auto');
        
        },

        validateSesstionType() {
            return this
            .clickOnElement('@firstAvailableDate')
            .clickOnElement('@availableSlots')
            .expect.element('@knolxLabel').to.have.css('background-color').which.matches(/rgba\(54, 143, 237, \d+\.\d+\)/)
        },
        validateDateTime() {
            return this
            .clickOnElement('@firstAvailableDate')
            .clickOnElement('@availableSlots')
            .expect.element('@selectDateTime').to.not.have.attribute('found');
        },
        validateDifferentSessions() {
            return this
              .clickOnElement('@firstAvailableDate')
              .clickOnElement('@availableSlots')
              .assert.attributeEquals('@webinarLabel', 'found', null, 'Webinar label does not have the "found" attribute')
              .assert.attributeEquals('@meetupLabel', 'found', null, 'Meetup label does not have the "found" attribute');
          },

        //   validateCoPresenterEntry() {
        //     return this
        //       .clickOnElement('@firstAvailableDate')
        //       .execute(function () {
        //         window.scrollBy(0, 400);
        //       })
        //       .clickOnElement('@availableSlots')
        //       .clickOnElement("@categoryDropDown")
        //       .clickOnElement("@testAutomationOption")
        //       .clickOnElement("@subCategoryDropDown")
        //       .clickOnElement("@cypressOption")
        //       .clickOnElement("@coPresenterField")
        //       .setValue('@coPresenterField', 'Mayank')
        //       .click('/html[1]/body[1]/ng2-dropdown-menu[1]/div[1]/div[1]/ng2-menu-item[1]/div[1]/span[1]') // Click on the specific element
        //       .expect.element('body').text.to.contain('Mayank Verma'); // Assert if "Mayank Verma" is present in the page body
        //   },
          
          
        validateReset() {
            return this
            .clickOnElement('@firstAvailableDate')
            .execute(function () {
              window.scrollBy(0, 400);
            })
            .clickOnElement('@availableSlots')
            .clickOnElement("@categoryDropDown")
            .clickOnElement("@testAutomationOption")
            .clickOnElement("@subCategoryDropDown")
            .clickOnElement("@cypressOption")
            .clickOnElement("@topicTileInput")
            .clearValue('@topicTileInput') 
            .setValue('@topicTileInput', 'Automation Test')
            .clearValue('@sessionBrief')
            .setValue('@sessionBrief', 'This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test This is a Automation Test ')           
            .clickOnElement("@resetButton")
            .expect.element('@sessionBrief').to.have.value.that.equals('');
          },

          validateSubCategoryDropdown() {
            return this
              .clickOnElement('@firstAvailableDate')
              .clickOnElement('@availableSlots')
              .expect.element('@subCategoryDropDown').to.not.have.attribute('found');
          },

          verifyAvailableDatesGreenColor: function () {
            return this
                .waitForElementVisible('@availableDates', 10000)
                .clickOnElement("@availableDates")
                .assert.cssProperty('@availableDates', 'background-color', 'rgba(83, 203, 160, 1)', (result) => {
                    if (result.status === 0) {
                        console.log('Background color is correct.');
                    } else {
                        console.error('Background color is not correct.');
                    }
                });
        },
  
    }],
};