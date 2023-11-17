var rewardsCommands = {


    goToRewards: function () {
        return this
        .click('@dropDownButton')
        .click('@rewardsOption')
        .assert.urlContains('rewards/list', 'Reward tab is opened');
    }

}

module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com',
   
    commands: [rewardsCommands],
    elements: {
        dropDownButton: {
            selector: 'li:nth-child(3) > div.nav-link.ps-0.text-white.collapsed',
        },
        rewardsOption: {
            selector: 'a.nav-link[href="/rewards/list"]',
        }

    }
}