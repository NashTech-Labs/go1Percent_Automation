import { NightwatchBrowser } from 'nightwatch';
import {LoginPage } from '../../../page-objects/login';
import {manageSlotPage} from '../../../page-objects/manageSlot/manageSlotPage' 
let login: LoginPage;
let manageslotpage: manageSlotPage;

describe("KNolx|Manage Slot Frontend Automation", () => {
    before(function () {
        

browser.window.maximize()
        login.navigate()
            .enterCredentials(browser.globals.userName, browser.globals.password)
            .signIn()
            .assert.urlContains("my-dashboard")
            manageslotpage.waitForPageLoad()
       
    });

    it('Verify that admin should be able to create a slot', function () {
        console.log("hi");
        // manageslotpage
        //     .pause(3000)
        //     .clickOnDateInCalendar()
        //     .clickSlotTypeKnolx()
        //     .createSlot('API Testing')
        //     .clickOnDownArrow()
        //     .clickSaveSlotButton()
        //     .pause(2000)
        //     .assert.containsText('@successfullyCreatedSlotMessage', 'Slot Created Successfully');
    });

    



});