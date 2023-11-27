import { NightwatchBrowser, PageObjectModel } from "nightwatch";

const cmd = {
    inputUsername(this:NightwatchBrowser, username:string) {
        this
            .waitForElementVisible('@usernameField')
            .setValue('@usernameField', username);

        return this;
    },

    inputPassword(this:NightwatchBrowser, password:string) {
        this
            .waitForElementVisible('@passwordField')
            .setValue('@passwordField', password);

        return this;
    },

    login(this:NightwatchBrowser) {
        this

            .waitForElementVisible('@loginButton')
            .click('@loginButton');

        return this;

    },

    goToFeedbackFormSection(this:NightwatchBrowser) {
        this
            .waitForElementVisible("@navbar")
            .click('@admins_link')

            .waitForElementVisible("@admin_options")
            .click('@knolx_link')

            .waitForElementVisible('@knolx_options')
            .click('@feedback_form_link');


        return this; // for command-chaining
    },

};


const loginPage:PageObjectModel = {
    
    url: 'https://nashtechglobal.qa.go1percent.com/',

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

export default loginPage;