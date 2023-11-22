var updateRewardsCommands = {

    openUpdateTab : function () {
        return this
        .waitForElementPresent('@editButton', 5000)
        .click('@editButton')
        .waitForElementPresent('@updateRewardTitle', 5000)
        .assert.textContains('@updateRewardTitle', 'Update Reward');
    },

    editAvailableFor : function () {
        return this
        .waitForElementPresent('@availableForButton', 5000)
        .isEnabled('@availableForButton', function(result) {
            this.assert.equal(result.value, false);
        })
    },

    closeUpdateTab : function () {
        return this
        .waitForElementPresent('@cancelButton', 5000)
        .click('@cancelButton')
        .expect.element('@updateRewardTitle').not.to.be.present;
    },

    changeExpiryDate : function () {
        return this
        .waitForElementPresent('@expiryDate', 5000)
        .setValue('@expiryDate', new Date('2027-10-08'))
        .click('@updateButton')
        //check prompt
        .assert.textContains('@alert', 'Reward was successfully updated!');
    },

    deleteReward : function () {
        return this
        .click('@deleteButton')
        .assert.textContains('@alert', 'Reward is disabled');
    },

    switchToCompetency : function () {
        return this
        .waitForElementPresent('@editButton', 5000)
        .waitForElementPresent('@competencyOption', 5000)
        .click('@competencyOption')
        .assert.cssProperty('@competencyOption','background-color','rgba(236, 64, 122, 1)');
    }
    
}

module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com',
    commands: [updateRewardsCommands],
    elements: {
        editButton : {
            selector: 'span[class="material-icons"]'
        },
        updateRewardTitle: {
            selector: 'h5.modal-title.pull-left.ms-2'
        },
        availableForButton: {
            selector: 'button.no-button.font-weight-light.bg-transparent'
        },
        expiryDate: {
            selector: '#expiryDate'
        }, 
        alert: {
            selector: "div[role = 'alert']"
        },
        updateButton: {
            selector: '#updateButton'
        }, 
        expiryDateOfReward: {
            selector: 'div.card-expiry.mb-4.exp-line-color > strong'
        }, 
        cancelButton: {
            selector: 'button.btn.btn-light'
        }, 
        deleteButton: {
            selector: '#disableButton'
        }, 
        competencyOption: {
            selector: 'li:nth-child(2) > a.cursor-pointer'
        },
        rewardName: {
            selector: 'input[formcontrolname="name"]'
        },
        currentButton: {
            selector: '.cursor-pointer.newTabs'
        }
    }
}

