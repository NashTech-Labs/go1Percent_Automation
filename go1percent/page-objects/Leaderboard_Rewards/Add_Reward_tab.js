var addRewardCommands = {

    openAddRewardTab : function () {
        return this
        .waitForElementPresent('@addRewardButton', 5000)
        .click('@addRewardButton')
        .waitForElementPresent('@addRewardTitle', 5000)
        .assert.textContains('@addRewardTitle', 'Add a new reward');
    },

    addImage : function () {
        return this
        .waitForElementPresent('@imageContainer', 5000)
        .click('@imageContainer')
        .pause(5000)
        .waitForElementPresent('@imageCrossButton', 5000);
    },

    clickSaveButton : function () {
        return this
        .waitForElementPresent('@submitButton', 5000)
        .click('@submitButton');
    },

    closeAddRewardTab : function () {
        return this
        .waitForElementPresent('@cancelButton', 5000)
        .click('@cancelButton')
        .expect.element('@addRewardTitle ').not.to.be.present; // h5.modal-title.pull-left.ms-2
    },

    addARewardDetails : function(rewardName, description, pointsNeededToRedeem, quantity, expiryDate){
        return this
        //Image
        .waitForElementPresent('@imageContainer', 5000)
        .click('@imageContainer')
        .pause(5000)

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
        addRewardTitle: {
            selector: 'div.modal-header.ps-5'  
        },
        imageContainer: {
            selector: 'div.ImageMinWidthClass'
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
        },  
        enableButton: {
            selector: 'div:nth-child(5)  button.yes-button.font-weight-light.bg-transparent'
        }
    }
}

