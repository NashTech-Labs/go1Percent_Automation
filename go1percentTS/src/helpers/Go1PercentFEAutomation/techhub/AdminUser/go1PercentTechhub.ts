import { NightwatchTests, NightwatchBrowser } from "nightwatch";
import { TechhubPage } from '../../../../page-objects/techhub/AdminUser/techhub';
import { TechhubDetailPage } from '../../../../page-objects/techhub/AdminUser/techhubDetail';


describe('Go1percent Techhub', () => {

    it("Navigate to All Techhubs page",(browser: NightwatchBrowser)=> {
        browser
            .page.techhub.AdminUser.techhub()
            .All_Techhubs_page(browser)
    }),

    it("Apply Approved status filter", (browser: NightwatchBrowser)=> {
        browser
            .page.techhub.AdminUser.techhub()
            .Filter_AllStatus_Approved(browser)
            .assert.elementPresent("@Filter_AllStatus_Approved")
            .pause(2000)
    }),

    it("Apply Review status filter", (browser: NightwatchBrowser)=> {
        browser
            .page.techhub.AdminUser.techhub()
            .Filter_AllStatus_Review(browser)
            .assert.elementPresent("@Filter_AllStatus_Review")
            .pause(2000)
    }),

    it("All competency filter", (browser: NightwatchBrowser)=> {
        browser
            .page.techhub.AdminUser.techhub()
            .Filter_All_Competency(browser)
            .pause(2000)
    }),

    it("Apply any Competency filter and verify", (browser: NightwatchBrowser)=> {
        browser
            .page.techhub.AdminUser.techhub()
            .Filter_FrontendCompetency(browser)
            .pause(2000)
            .assert.textEquals('@FilterName_AllCompetency_onRequest', 'Frontend Competency');
    }),

    it("Navigate to request detail page", (browser: NightwatchBrowser)=> {
        browser
            .page.techhub.AdminUser.techhub()
            .Navigate_to_detailsPage(browser)
    }),

    it("Verify detail page", (browser: NightwatchBrowser)=> {
        browser
            .page.techhub.AdminUser.techhub()
            .assert.textEquals('@Detail_Page', 'View TechHub');
    }),

    it("Approve techhub request and verify",(browser: NightwatchBrowser)=>{
        browser
            .page.techhub.AdminUser.techhubDetail()
            .Approve_Request(browser)
            .assert.elementPresent('@Approve_Toast')
    }),

    it("Reject techhub request and verify",(browser: NightwatchBrowser)=>{
        browser
            .page.techhub.AdminUser.techhubDetail()
            .Reject_Request(browser)
            .assert.elementPresent('@Approve_Toast')
    }),

    it("Reject Techhub request without Reviewer Comment and verify unsuccessful",(browser: NightwatchBrowser)=>{
        browser
            .page.techhub.AdminUser.techhubDetail()
            .Reject_Request_Without_Reviewer_Comment(browser)
            .assert.textContains("@Reviewer_Comment_error_message", "If Rejected, above field is mandatory. *");
    }),

    it("Search a Nasher",(browser: NightwatchBrowser)=>{
        browser
            .page.techhub.AdminUser.techhub()
            .Search_Nasher(browser)
            .pause(2000)
    }),

    it("Approve second request of same person on same day and check",(browser: NightwatchBrowser)=>{
        browser
            .page.techhub.AdminUser.techhubDetail()
            .Approve_Request(browser)
            .assert.elementPresent('@Approve_Toast', 'Can approve two techhubs of a person on same day')
    }),

    it("Total_records", async (browser: NightwatchBrowser)=>{
        const techhubPage = browser.page.techhub.AdminUser.techhub();

        await techhubPage.scrollToElement(browser);
        const cardElements = techhubPage.element.findAll('@Request_Cards');
        const elements = await cardElements;
        const totalRecordsString = 'Total Records: ' + elements.length;
        techhubPage
            .assert.textEquals('@Total_Records', totalRecordsString);
    }),

    it("Navigate to Github URL and verify", async (browser: NightwatchBrowser)=>{
        const url = await browser
            .page.techhub.AdminUser.techhubDetail()
            .element('@GitHub_Url')
            .getText()

        await browser
            .page.techhub.AdminUser.techhubDetail()
            .Navigate_to_GitHUb_URL(browser)

        browser.pause(3000);
        browser
            .windowHandles(async function (result) {
                const windowHandles = await browser.windowHandles() as string[];
                await browser.switchToWindow(windowHandles[1]);
            })
    
            .assert.urlContains(url);
    })
});