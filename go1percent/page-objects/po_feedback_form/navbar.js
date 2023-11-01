// const searchCommands = {
//     submit() {
//         this.waitForElementVisible('@submitButton', 1000)
//             .click('@submitButton');

//         this.pause(1000);

//         return this; // for command-chaining
//     }
// };
const cmd = {
    goToFeedbackFormSection() {
        this
            .waitForElementVisible("@navbar")
            .click('@admins_link')

            .waitForElementVisible("@admin_options")
            .click('@knolx_link')

            .waitForElementVisible('@knolx_options')
            .click('@feedback_form_link')

        this.pause(1000);

        return this; // for command-chaining
    },

    inputUsername(username) {
        this
            .waitForElementVisible('@usernameField')
            .setValue('@usernameField', username);

        return this;
    },

    inputPassword(password) {
        this
            .waitForElementVisible('@passwordField')
            .setValue('@passwordField', password);

        return this;
    },

    loginAndMaximizeWindow() {
        this

            .waitForElementVisible('@loginButton')
            .click('@loginButton');

        return this;

    }
};


module.exports = {
    // url: 'https://google.no',

    commands: [
        cmd
    ],

    elements: {
        usernameField: {
            selector: '#username'
        },
        passwordField: {
            selector: '#password'
        },
        loginButton: {
            selector: '#kc-login'
        },
        navbar: {
            selector: '#sidenav-main'
        },

        admins_link: {
            selector: 'ul[class="navbar-nav"] li:nth-of-type(8)'
        },

        admin_options: {
            selector: "ul[class='navbar-nav'] li:nth-of-type(8) [class='nav subMenu']"
        },

        knolx_link: {
            selector: "ul[class='navbar-nav'] li:nth-of-type(8) li:nth-of-type(3)"
        },

        knolx_options: {
            selector: "ul[class='navbar-nav'] li:nth-of-type(8) li:nth-of-type(3)  li:nth-of-type(3)"
        },

        feedback_form_link: {
            selector: "ul[class='navbar-nav'] li:nth-of-type(8) li:nth-of-type(3)  li:nth-of-type(3)"
        }

    }



};