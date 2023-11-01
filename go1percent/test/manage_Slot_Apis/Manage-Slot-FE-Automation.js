const globalsData = require('../../globals');
const ManageSlotPages= browser.page.ManageSlotPages();

describe("KNolx|Manage Slot Frontend Automation", () => {
before(async function (done) {
await browser
.window.maximize()
.page.login()
.navigate()
.enterCredentials(browser.globals.userName, browser.globals.password)
.signIn()
.pause(3000)
.assert.urlContains("my-dashboard")
.pause(3000)
try {
await ManageSlotPages.clickAdminButton();
await ManageSlotPages.clickKnolxButton();
await ManageSlotPages.clickOnManageSlot();
await ManageSlotPages.assert.urlContains("manage-slots");
} catch (error) {
done.fail(error);
return;
}
}),
it ('Verify that admin should be able to create a slot ', function () { 

ManageSlotPages
.pause(3000)
.clickOnDateInCalendar()
browser.pause(3000)
ManageSlotPages.clickSlotTypeKnolx()
.pause(3000)
ManageSlotPages.createSlot('API Testing')
.pause(3000)
ManageSlotPages.clickSaveSlotButton()
.pause(3000)

.assert.containsText('@successfullyCreatedSlotMessage','Slot Created Successfully')

}),

it('Verify that create a slot popup should display current date and time', async function() {
ManageSlotPages
.pause(3000)
.clickOnDateInCalendar()
browser.pause(3000)
const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
const year = currentDate.getFullYear();

const formattedDate = `${year}-${month}-${day}`;
const formattedTime = currentDate.toLocaleTimeString();

await ManageSlotPages.pause(3000);
const slotStartDateElement = await ManageSlotPages.getSlotStartDateElement();
const slotStartTimeElement = await ManageSlotPages.getSlotStartTimeElement();
ManageSlotPages.assert.equal(slotStartDateElement, formattedDate)
//ManageSlotPages.assert.equal(slotStartTimeElement, formattedTime)

ManageSlotPages.clickOnCancelButton();
}),

it("Verify that admin should not be able to create a slot without adding title and type", function () {
ManageSlotPages
.pause(3000)
.clickOnDateInCalendar()
browser.pause(3000)

ManageSlotPages.assert.attributeEquals("@saveSlotButton", "disabled", "true"); // Adjust the selector based on your project
ManageSlotPages.clickOnCancelButton();
}),

it("Verify that date and time is selected upon creating a slot", async function () {
ManageSlotPages
.pause(3000)
.clickOnpastDate()
browser.pause(3000)
ManageSlotPages 
.assert.elementPresent('@slotStartDateInput')
.assert.elementPresent('@slotStartTimeInput') 
}),

it("Verify admin cannot select a past time to create a slot", function () {
ManageSlotPages
.pause(3000)
.clickOnpastDate()
browser.pause(3000)
ManageSlotPages.clickSlotTypeKnolx()
.pause(3000)
ManageSlotPages.createSlot('API Testing')
.pause(3000)
ManageSlotPages.clickOnDownArrow()
.pause(3000)

ManageSlotPages.clickSaveSlotButton();
ManageSlotPages.assert.containsText('@errorMessage','Please do not enter past time')
.clickOnCancelButton()
}),

it("Verify that admin should be able to automate slot", async function () {

ManageSlotPages
.pause(3000)
.clickOnAutomateSlot()
ManageSlotPages.clickSlotTypeKnolx()

ManageSlotPages.clickSelectSessionDropdown();
ManageSlotPages.clickOnDropDownValue();

ManageSlotPages.clickSaveSlotButton();

ManageSlotPages.assert.elementPresent("@automateSlotCreationMessage");
}),

it("Verify that admin can select any session type", function () {

ManageSlotPages
.pause(3000)
.clickOnDateInCalendar()
browser.pause(3000)
ManageSlotPages.clickSlotTypeKnolx()
.pause(3000)
.clickSlotTypeWebinr()
.pause(3000)
.clickSlotTypeMeetup()
.pause(3000)
.clickSlotTypeKnolmeet()
.pause(3000)
ManageSlotPages
.assert.containsText('@knolx', 'Knolx')
.assert.containsText('@webinr', 'Webinar')
.assert.containsText('@meetup', 'Meetup')
.assert.containsText('@knolmeet', 'Knolmeet')
.clickOnCancelButton()

}),

it("Verify that update, delete, and cancel buttons are visible on a free slot", function () {
ManageSlotPages
.pause(3000)
.clickFreeSlot()
.pause(3000)
.assert.elementPresent('@updateButton')
.assert.elementPresent('@cancelButton')
.assert.elementPresent('@deleteButton')
.clickOnCancelButton()
}),

it("Verify that admin can delete a free slot session", function () {
ManageSlotPages
.pause(3000)
.clickDeleteFreeSlot()
.pause(3000)
.deleteButton()
.pause(3000)
.deleteConfirmPopUpYesButton()
.pause(3000)

.assert.containsText('@successfullyDeletedMessage','Session Deleted Successfully')

});

it("Verify that admin can update free slot details", function () {
ManageSlotPages
.pause(3000)
.clickFreeSlotToUpdate()
.pause(3000)
.clickSlotTypeWebinr()
.pause(3000)
.updateSlot('Automation Testing')
.pause(2000)
.clickupdateButton()
ManageSlotPages.assert.containsText('@successfullyUpdateFreeSlot','Session Updated Successfully')

}),

it('Verify that upon clicking on Knolx session, it navigates to the approve page', function (browser) {
ManageSlotPages
.pause(3000)
.clickApproveKnolxSession()
.pause(3000)
.assert.elementPresent('@approve')
.pause(3000)

});

after(function (done) {
browser.end(); 
done; 
})

});