import { NightwatchBrowser } from 'nightwatch';

import { LoginPage } from '../../../page-objects/login';
import { ManageSlotPage } from '../../../page-objects/manageSlot/manageSlotPage'
let login: LoginPage;
let manageslotpage: ManageSlotPage;

describe("KNolx|Manage Slot Frontend Automation", () => {
    before(function () {
        login = browser.page.login() as LoginPage
        manageslotpage = browser.page.manageSlot.manageSlotPage() as ManageSlotPage

        browser.window.maximize()
        login.navigate()
            .enterCredentials(browser.globals.adminUserName, browser.globals.adminPassword)
            .signIn()
            .assert.urlContains("my-dashboard")
            //manageslotpage.waitForPageLoad()
            .pause(3000)
        manageslotpage.clickAdminButton()
            .clickKnolxButton()
            .clickOnManageSlot();
        manageslotpage.assert.urlContains("manage-slots");

    }),
/*
        it('Verify that admin should be able to create a slot', function (browser: NightwatchBrowser) {

            manageslotpage
                .pause(3000)
                .clickOnDateInCalendar()
            manageslotpage.clickKnolxButton()
                .createSlot('API Testing')
                .clickOnDownArrow()
            manageslotpage.clickSaveSlotButton()
                .pause(2000)
                .assert.containsText('@successfullyCreatedSlotMessage', 'Slot Created Successfully');
        }),

*/
        it("Verify admin cannot select a past time to create a slot", function (browser: NightwatchBrowser) {
            manageslotpage
                .waitForPageLoad()
                .clickOnPresentDate()
                .clickSlotTypeKnolx()
                .createSlot('API Testing')
                .clickOnDownArrow()
                .clickSaveSlotButton()
                .waitForPageLoad()
                .assert.containsText('@errorMessage', 'Please do not enter past time')
                .clickOnCancelButton();
        }),

        it('Verify that create a slot popup should display current date and time', async function (browser: NightwatchBrowser) {
            manageslotpage
                .waitForPageLoad()
                .clickOnDateInCalendar();
            const currentDate = new Date();
            const day = currentDate.getDate().toString().padStart(2, '0');
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const year = currentDate.getFullYear();

            const formattedDate = `${year}-${month}-${day}`;
            await manageslotpage.waitForPageLoad();
            const slotStartDateElement = await manageslotpage.getSlotStartDateElement();
            const slotStartTimeElement = await manageslotpage.getSlotStartTimeElement();
            manageslotpage.assert.equal(slotStartDateElement, formattedDate)
            manageslotpage.clickOnCancelButton();
        }),

        it("Verify that admin should not be able to create a slot without adding title and type", function (browser: NightwatchBrowser) {
            manageslotpage
                .waitForPageLoad()
                .clickOnDateInCalendar()
            manageslotpage
                .assert.attributeEquals("@saveSlotButton", "disabled", "true")
                .clickOnCancelButton();
        }),

        it("Verify that date and time is selected upon creating a slot", function (browser: NightwatchBrowser) {
            manageslotpage
                .waitForPageLoad()
                .clickOnPresentDate()
                //ManageSlotPages 
                .assert.elementPresent('@slotStartDateInput')
                .assert.elementPresent('@slotStartTimeInput')
                .clickOnCancelButton();
        }),

        it("Verify that admin should be able to automate slot", function (browser: NightwatchBrowser) {

            manageslotpage
                .waitForPageLoad()
                //.pause(3000)
                .clickOnAutomateSlot()
                .clickSlotTypeKnolx()
                .clickSelectSessionDropdown()
                .clickOnDropDownValue()
                .clickSaveSlotButton()
                .assert.elementPresent("@automateSlotCreationMessage");
        }),

        it("Verify that admin can select any session type", function (browser: NightwatchBrowser) {

            manageslotpage
                .waitForPageLoad()
                .clickOnDateInCalendar()
            manageslotpage
                .clickSlotTypeKnolx()
                .clickSlotTypeWebinr()
                .clickSlotTypeMeetup()
                .clickSlotTypeKnolmeet()
                .assert.containsText('@knolx', 'Knolx')
                .assert.containsText('@webinr', 'Webinar')
                .assert.containsText('@meetup', 'Meetup')
                .assert.containsText('@knolmeet', 'Knolmeet')
                .clickOnCancelButton();

        }),

        it("Verify that update, delete, and cancel buttons are visible on a free slot", function (browser: NightwatchBrowser) {
            manageslotpage
                .waitForPageLoad()
                .clickFreeSlot()
                .assert.elementPresent('@updateButton')
                .assert.elementPresent('@cancelButton')
                .assert.elementPresent('@deleteButton')
                .clickOnCancelButton();
        }),

        it("Verify that admin can delete a free slot session", function (browser: NightwatchBrowser) {
            manageslotpage
                .waitForPageLoad()
                .clickDeleteFreeSlot()
                .deleteButton()
                .deleteConfirmPopUpYesButton()
                .pause(2000)
                .assert.containsText('@successfullyDeletedMessage', 'Session Deleted Successfully');

        });

    it("Verify that admin can update free slot details", function (browser: NightwatchBrowser) {
        manageslotpage
            .waitForPageLoad()
            .clickFreeSlotToUpdate()
            .clickSlotTypeWebinr()
            .updateSlot('Automation Testing')
            .clickOnDownArrow()
            .clickOnUpArrow()
            .clickupdateButton()
            .pause(2000)
            .assert.containsText('@successfullyUpdateFreeSlot', 'Session Updated Successfully');

    }),

        it('Verify that upon clicking on Knolx session, it navigates to the approve page', function (browser: NightwatchBrowser) {
            manageslotpage.waitForPageLoad()
                .clickApproveKnolxSession()
                .assert.elementPresent('@approve');

        });





});