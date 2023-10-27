const My_Upcoming_Session = require('./My_Upcoming_Session')

require('./My_Upcoming_Session')

const Startingbox = My_Upcoming_Session.elements.ListPresent
//var newText = existingText + " Your new information here"

module.exports = {

    elements: {

        EditButton: {

            // locateStrategy: 'Xpath',
            selector: '.btn.btn-primary.title',

        },

        TextBox: {

            //locateStrategy:'Xpath',
            selector: 'textarea[type="text"]',


        },

        SaveButton: {

            //locateStrategy:'Xpath',
            selector: '.btn.btn-primary.saveBtn.mt-3',

        },

        ToastMessage: {

            //locateStrategy:'Xpath',
            selector: 'div[aria-label="Successfully Updated"]'
        },

        Tags: {

            selector: 'a[role="button"]'
        },

        AddTagTextBox: {

            selector: 'input[type="text"]',

        },

        SaveNewTag: {

            selector: 'button[type="submit"]',
        },

        RemoveTag: {

            selector: '.fa.fa-times',

        },

        DescriptionEditButton: {

            selector: '.btn.btn-primary.edit',

        },

        DescriptionTextBox: {

            selector: 'textarea[type="text"]',

        },

        DescriptionSaveButton: {

            selector: '.btn.btn-primary.saveBtn.m-2',

        },




    },


    commands: [{

        ClickOnAnySession() {

            return this
                .pause(5000)
                .waitForElementVisible(Startingbox, 5000)
                .click(Startingbox)
                .pause(5000)
                //.waitForElementVisible('@EditButton',5000)
                .click('@EditButton')
                .waitForElementPresent('@TextBox', 5000)
                .click('@TextBox')
                .pause(2000)
                .setValue('@TextBox', 'New Session')
                .waitForElementPresent('@SaveButton', 5000)
                .click('@SaveButton')
                .waitForElementVisible('@ToastMessage', 5000)

        },

        WithoutTitle() {

            return this
                .pause(4000)
                .waitForElementVisible(Startingbox, 3000)
                .click(Startingbox)
                .pause(4000)
                .waitForElementVisible('@EditButton', 3000)
                .click('@EditButton')
                .waitForElementPresent('@TextBox', 5000)
                .click('@TextBox')
                .clear()

        },

        AddNewTag() {

            return this

                .pause(4000)
                .waitForElementVisible(Startingbox, 3000)
                .click(Startingbox)
                .waitForElementPresent('@Tags', 4000)
                .click('@Tags')
                .waitForElementVisible('@AddTagTextBox', 4000)
                .setValue('@AddTagTextBox', 'Automation')
                .click('@SaveNewTag')

        },

        RemoveNewTag() {

            return this

                .pause(4000)
                .waitForElementVisible(Startingbox, 3000)
                .click(Startingbox)
                .waitForElementVisible('@RemoveTag', 3000)
                .click('@RemoveTag')

        },

        UpdateDescriptionBox() {
            var existingText
            var newText
            return this
                .pause(4000)
                .waitForElementVisible(Startingbox, 3000)
                .click(Startingbox)
                .waitForElementPresent('@DescriptionEditButton', 3000)
                .pause(5000)
                .click('@DescriptionEditButton')
                .pause(5000)
                .waitForElementVisible('@DescriptionTextBox', 3000)
                .click('@DescriptionTextBox')
                .pause(10000)
                .getText('@DescriptionTextBox', function(result) {
                    existingText = result.value; 
                     newText = existingText + " Your new information here";
                  })
                  .setValue('@DescriptionTextBox', newText)
                  
                //  .setValue('@DescriptionTextBox', newText)
                 .pause(10000)

                // .waitForElementPresent('@DescriptionSaveButton', 3000)
                // .click('@DescriptionSaveButton')
        }





    }]

















}