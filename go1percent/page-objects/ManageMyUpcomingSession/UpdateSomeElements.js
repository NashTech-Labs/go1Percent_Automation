const My_Upcoming_Session = require('./My_Upcoming_Session')

require('./My_Upcoming_Session')

const Startingbox = My_Upcoming_Session.elements.ListPresent
//var newText = existingText + " Your new information here"

//My_Upcoming_Session.commands.

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

        ValidationErrorMessage: {

            selector: '.error-message.mt-1'
            //Description should contain atleast 250 characters

        },

        ErrorMessageExceedLength: {

            selector: '.error-message.mt-1'
            //Exceeded the maxlength
        },

        SlideURlBox: {

            selector: '.py-1.px-2.slide.studio-logo'

        },

        URLSaveButton: {

            selector: '.btn.btn-primary.ms-2.save'
        },

        InvalidURlMessage: {

            selector: '.error-message'

        },

        AfterClickingURLBox: {


            selector: 'textarea[type="text"]'
        },

        BackButton: {

            selector: '.btn.backBtn.overall-txt-color.card.addIcon'
        }





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
              //  .click('@TextBox')
                .pause(6000)
                .setValue('@TextBox',"") // simulating backspace
                .pause(4000)
                .sendKeys('@TextBox',"Testing Title")

                .pause(4000)
                //.clearValue('@TextBox')
                .click('@SaveButton')
                .pause(5000)
                //.clearValue('@TextBox')

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

            return this
                .pause(4000)
                .waitForElementVisible(Startingbox, 3000)
                .click(Startingbox)
                .waitForElementPresent('@DescriptionEditButton', 3000)
                .pause(5000)
                .click('@DescriptionEditButton')
                .pause(5000)
                .waitForElementVisible('@DescriptionTextBox', 3000)
                .pause(5000)
                .getAttribute('@DescriptionTextBox', 'value', function (result) {
                    var attributeValue = result.value;
                    console.log(attributeValue);

                    this.setValue('textarea[type="text"]', attributeValue + 'NashTech')
                })
                .pause(5000)
                .waitForElementPresent('@DescriptionSaveButton', 3000)
                .click('@DescriptionSaveButton')


        },

        UnableToUpdateDescription() {
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
                .setValue('@DescriptionTextBox', 'Hii EveryOne')
                .pause(4000)

        },

        ExceedDescriptionLength() {
            const MAX_DESCRIPTION_LENGTH = 1000; 0
            const INVALID_DESCRIPTION = 'Hi To All I Am Here'.repeat(MAX_DESCRIPTION_LENGTH + 1);

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
                .pause(5000)
                .setValue('@DescriptionTextBox', INVALID_DESCRIPTION)
                .pause(4000)

        },

        DisableDiscriptionTextBox() {

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
                .pause(3000)
                // Get the current value of the description box
                .clearValue('@DescriptionTextBox')
                //.click('@DescriptionTextBox')
                // .pause(5000)
                // .setValue('@DescriptionTextBox','')
                .pause(4000)
        },

        UpdateSlideURLField() {

            return this
                .pause(4000)
                .waitForElementVisible(Startingbox, 3000)
                .click(Startingbox)
                .pause(3000)
                .waitForElementVisible('@SlideURlBox', 3000)
                .click('@SlideURlBox')
                .waitForElementVisible('@URLSaveButton', 3000)
                .click('@URLSaveButton')

        },

        NotUpdateSlideURL() {

            return this
                .pause(4000)
                .waitForElementVisible(Startingbox, 3000)
                .click(Startingbox)
                .pause(3000)
                .waitForElementVisible('@SlideURlBox', 3000)
                .click('@SlideURlBox')
                .pause(5000)
                .clearValue('@AfterClickingURLBox')
                .pause(10000)
                .waitForElementVisible('@URLSaveButton', 3000)
                .click('@URLSaveButton')

        },

        InvalideSlideURL() {

            return this
                .pause(4000)
                .waitForElementVisible(Startingbox, 3000)
                .click(Startingbox)
                .pause(3000)
                .waitForElementVisible('@SlideURlBox', 3000)
                .click('@SlideURlBox')
                .pause(5000)
                .setValue('@AfterClickingURLBox', 'GoodEvening')
                .pause(5000)
                .waitForElementVisible('@URLSaveButton', 3000)
                .click('@URLSaveButton')




        },

        BackButtonEnable() {

            return this
                .pause(4000)
                .waitForElementVisible(Startingbox, 3000)
                .click(Startingbox)
                .pause(4000)
                .waitForElementVisible('@BackButton', 3000)
                .click('@BackButton')
                .pause(4000)



        }



    }]


}