var signInCommands = {

    signIn: function () {
        return this
        
        .assert.urlContains('go1percent', 'Go1percent website is opened')
        //sign in
        .sendKeys('@usernameField', 'testadmin')
        .sendKeys('@passwordField', 'testadmin')
        .click('@signInButton') 
        .assert.urlContains('my-dashboard', 'Dashboard is opened')
    },

    goToRewards: function () {
        return this
        .click('@dropDownButton')
        .click('@rewardsOption')
        .assert.urlContains('rewards/list', 'Reward tab is opened');
    }

}

module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com',
   
    commands: [signInCommands],
    elements: {
        usernameField: {
            selector: '#username'
        },
        passwordField: {
            selector: '#password'
        },
        signInButton: {
            selector: '#kc-login'
        },
        dropDownButton: {
            selector: 'li:nth-child(3) > div.nav-link.ps-0.text-white.collapsed',
        },
        rewardsOption: {
            selector: 'a.nav-link[href="/rewards/list"]',
        }

    }
}