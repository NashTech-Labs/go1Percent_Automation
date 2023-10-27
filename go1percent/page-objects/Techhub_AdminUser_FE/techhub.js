module.exports = {
    url: "",

    elements: {
        Approvals: ".cursor-pointer.newTabs",
        Approvals_tab:".filter-left-section .nav .nav-item:first-child",
        All_techhubs: ".filter-left-section .nav .nav-item:nth-child(2)",
        Request: ".card:first-child",
        Filter_AllCompetency: ".form-control.cursor-pointer",
        Filter_AllStatus: ".filter-tab .select-status+select.form-control",
        AllStatus_Approved: '.filter-tab .select-status+select.form-control option:nth-child(2)',
        Filter_AllStatus_Approved: '.filter-tab .approvedStatus+select.form-control ',
        Approved_Request: '.report-card .card:first-child .row',
        Detail_Page: '.modal-dialog .modal-header .modal-title'

        


    },
    commands: [{

        All_Techhubs_page() {
            return this
                .waitForElementPresent('@All_techhubs')
                .click("@All_techhubs")

        },

        Filter_AllStatus_Approved() {

            return this
                .click("@Filter_AllStatus")
                .click('@AllStatus_Approved')

        },

        Navigate_to_detailsPage() {
            return this
            .click('@Approved_Request')
            // .click('@Approvals_tab')

        },


    }]
};