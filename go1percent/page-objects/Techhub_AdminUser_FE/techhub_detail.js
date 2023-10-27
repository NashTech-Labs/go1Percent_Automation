module.exports = {
    url: "",

    elements: {
        Approve_Button: '.modal-footer .btn.success-color',
        Reject_Button: '.modal-footer .btn.btn-danger',
        Approve_Toast: '#toast-container',
        Reviewer_Comment: '.modal-body textarea.reward-controls'

    },
    commands: [{

        Approve_Request() {
            return this

                .click("@Approve_Button")

        },
        Reject_Request(browser) {
            return this
                .setValue('@Reviewer_Comment', 'Rejected')
                .click("@Reject_Button")
        }
    }]
};