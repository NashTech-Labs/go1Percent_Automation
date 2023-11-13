var addRewardCommands = {

    openAddRewardTab : function () {
        return this
        .waitForElementPresent('@addRewardButton', 5000)
        .click('@addRewardButton')
        .waitForElementPresent('@addRewardTitle', 5000)
        .assert.textContains('@addRewardTitle', 'Add a new reward');
    },

    clickSaveButton : function () {
        return this
        .waitForElementPresent('@submitButton', 5000)
        .click('@submitButton');
    },

    assertAlert : function () {
        return this
        //check alert
        .getText('@alert', function (result) {
        let alertText = result.value;
        if (alertText !== null && alertText.includes('Successfully added reward!')) {
            this.assert.equal(result.value, 'Successfully added reward!');
        } 
        else if(alertText.includes('Reward with the same name and type already exist')){
            this.assert.equal(result.value, 'Reward with the same name and type already exist');
            addRewardTab.closeAddRewardTab();
        }
        else if(alertText.includes('Reward with the same name and type already exist')){
            this.assert.equal(result.value, 'Reward with the same name and type already exist');
            addRewardTab.closeAddRewardTab();
        }
        else if(alertText.includes('Reward expiry date and time must be greater than current date and time')){
            this.assert.equal(result.value, 'Reward expiry date and time must be greater than current date and time');
            addRewardTab.closeAddRewardTab();
        }
        else if(alertText.includes('Reward name should not contain special symbols and number')){
            this.assert.equal(result.value, 'Reward name should not contain special symbols and number');
            addRewardTab.closeAddRewardTab();
        }
        })
        .waitForElementNotPresent('@alert');
    },


    closeAddRewardTab : function () {
        return this
        .waitForElementPresent('@cancelButton', 5000)
        .click('@cancelButton')
        .expect.element('@addRewardTitle').not.to.be.present; // h5.modal-title.pull-left.ms-2
    },

    addARewardDetails : function(rewardName, description, pointsNeededToRedeem, quantity, expiryDate){
        return this

        //Reward name
        .waitForElementPresent('@nameField', 5000)
        .setValue('@nameField', rewardName)

        //Description
        .waitForElementPresent('@descriptionField', 5000)
        .setValue('@descriptionField', description)

        //Points needed to redeem
        .waitForElementPresent('@pointsNeededToRedeemField', 5000)
        .setValue('@pointsNeededToRedeemField', pointsNeededToRedeem)

        //Stock Quantity
        .waitForElementPresent('@quantityField', 5000)
        .setValue('@quantityField', quantity)

        //Expiry on
        .waitForElementPresent('@expiryDateField', 5000)
        .setValue('@expiryDateField', expiryDate);
        
    },

    setAvaiableForIndividual : function(){
        return this
        .waitForElementVisible('@individualButton', 5000)
        .click('@individualButton');

    },

    setAvaiableForCompetency : function(){
        return this
        .waitForElementVisible('@competencyButton', 5000)
        .click('@competencyButton');
    },

    enableReward : function(){
        return this
        .waitForElementPresent('@enableButton', 5000)
        .click('@enableButton');
    }
    
}

module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com',
    commands: [addRewardCommands],
    elements: {
        addRewardButton : {
            selector: 'button.btn.btn-primary.addRewardBtn.px-2'
        },
        cancelButton : {
            selector: 'button.btn.btn-light'
        },
        addRewardTitle: {
            selector: 'div.modal-header.ps-5'  
        },
        imageContainer: {
            selector: 'div.ImageMinWidthClass'
        },
        imageInput: {
            selector: 'div.ImageMinWidthClass > input'
        },
        imageCrossButton: {
            selector: 'i[title="Delete"]'
        }, 
        alert: {
            selector: "div[role = 'alert']"
        },
        submitButton: {
            selector: '#submitButton'
        },  
        errorMessage: {
            selector: 'span.errorMessage'
        }, 
        submitButton: {
            selector: '#submitButton'
        }, 
        nameField: {
            selector: 'input[formcontrolname="name"]'
        }, 
        descriptionField: {
            selector: 'textarea[formcontrolname="description"]'
        }, 
        pointsNeededToRedeemField: {
            selector: 'input[formcontrolname="pointsNeededToRedeem"]'
        },
        quantityField: {
            selector: 'input[formcontrolname="quantity"]'
        }, 
        expiryDateField: {
            selector: '#expiryDate'
        }, 
        individualButton: {
            selector: 'button.yes-button.font-weight-light.bg-transparent'  
        }, 
        competencyButton: {
            selector: 'button.no-button.font-weight-light.bg-transparent'
        }
        // enableButton: {
        //     selector: 'div:nth-child(5)  button.yes-button.font-weight-light.bg-transparent'
        // }
    }
}

