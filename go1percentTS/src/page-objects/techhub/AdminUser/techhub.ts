import { PageObjectModel, EnhancedPageObject } from "nightwatch";

const techhubElements = {
    Approvals: ".cursor-pointer.newTabs",
    Approvals_tab: ".filter-left-section .nav .nav-item:first-child",
    All_techhubs: ".filter-left-section .nav .nav-item:nth-child(2)",
    Request: ".card:first-child",
    Filter_AllCompetency: ".form-control.cursor-pointer",
    Filter_AllStatus: ".filter-tab .select-status+select.form-control",
    AllStatus_Approved: '.filter-tab .select-status+select.form-control option:nth-child(2)',
    AllStatus_Review: '.filter-tab .select-status+select.form-control option:nth-child(3)',
    Filter_AllStatus_Approved: '.filter-tab .approvedStatus+select.form-control ',
    Filter_AllStatus_Review: '.filter-tab .pendingStatus+select.form-control',
    Filter_AllCompetency_Frontend: '.approv .filterDiv .form-control option:nth-child(9)',
    Approved_Request: '.report-card .card:first-child .row',
    Detail_Page: '.modal-dialog .modal-header .modal-title',
    Search: '.search',
    Total_Records: '.pager>span',
    FilterName_AllCompetency_onRequest: '.report-card .card:first-child .row .user-icon + div > small',
    Request_Container: '.report-card div[infinitescroll]',
    Request_Cards: '.report-card div[infinitescroll] .card',
    Request_Cards_Last_Child: '.report-card div[infinitescroll] .card:last-child',
};

const techhubCommands = {
    All_Techhubs_page(this: EnhancedPageObject) {
        return this
            .waitForElementPresent('@All_techhubs')
            .click("@All_techhubs")
    },

    Filter_AllStatus_Approved(this: EnhancedPageObject) {
        return this
            .click("@Filter_AllStatus")
            .click('@AllStatus_Approved')
    },

    Filter_AllStatus_Review(this: EnhancedPageObject) {
        return this
            .click("@Filter_AllStatus")
            .click('@AllStatus_Review')
    },

    Filter_All_Competency(this: EnhancedPageObject) {
        return this
            .click("@Filter_AllCompetency")
    },

    Filter_FrontendCompetency(this: EnhancedPageObject) {
        return this
            .click("@Filter_AllCompetency_Frontend")
    },

    Navigate_to_detailsPage(this: EnhancedPageObject) {
        return this
            .click('@Approved_Request')
    },

    Search_Nasher(this: EnhancedPageObject) {
        return this
            .setValue('@Search', 'Test Employee')
    },

    async scrollToElement(this: EnhancedPageObject) {
        this.waitForElementPresent('@Total_Records', 10000)
        this.getText('@Total_Records', result => {
            const str = result.value as string;
            const matches = str.match(/\d+/) || [''];
            const record = parseInt(matches[0], 10);
            const pages = Math.ceil(record / 10);
            this.pause(5000);
            for (let i = 0; i < pages; i++) {
                this.pause(2000);
                const el = this.element.find('@Request_Container');
                this.getLocationInView(el.getLastElementChild());
            }
        })
        return this;
    },
};

const techhubPage: PageObjectModel = {
    url: "",
    elements: techhubElements,
    commands: [techhubCommands]
};

export default techhubPage;
export interface TechhubPage
    extends EnhancedPageObject<
        typeof techhubCommands,
        typeof techhubElements
    > { }