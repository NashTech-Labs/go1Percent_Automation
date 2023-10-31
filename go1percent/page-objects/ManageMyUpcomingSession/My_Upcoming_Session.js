module.exports = {


    elements: {

        UpcomingSession: {

            //locateStrategy: 'xpath',
            selector: '.tabs.newTabs.active',

        },

        StartingBox: {
            locateStrategy: 'xpath',
            selector: '//div[normalize-space()="testing"]',
        },

        MiddleBox: {
            locateStrategy: 'xpath',
            selector: '//div[normalize-space()="Test Title 4892"]',

        },

        LastBox: {
            locateStrategy: 'xpath',
            selector: '//div[normalize-space()="TestAutomationTitleNashtech"]',


        },

        ListPresent: {
            locateStrategy: 'xpath',
            selector: '(//div[@class="p-3"])[7]',
        },

        ApprovedTemplate: {

            selector: '.approved-badge'
        },

        ApprovedPageTitle: {

            selector: '.pb-2.pt-3.mb-n2.page-title'
        },

        ApprovedDescription: {

            selector: 'div[class="mt-5"] h4'

        },

        ApprovedSlideURL: {

            selector: '.pb-3.mt-2.slideContent'
        },

        SessionType: {
            selector: '(//div[text()=" Knolx "])[1]',
            locateStrategy: 'xpath'

        },

        SessionDate: {
            selector: '(//span[text()=" 07 Nov 2023"])[4]',
            locateStrategy: 'xpath'

        },
        SessionTime: {

            selector: '(//span[text()=" 8:40 - 9:25 AM IST"])[4]',
            locateStrategy: 'xpath'
        },

        SessionTitle: {
            selector: '//div[text()=" Testing Title "]',
            locateStrategy: 'xpath'

        },

        SessionStatus: {
            selector: '(//span[text()=" Pending for Approval "])[1]',
            locateStrategy: 'xpath'

        },
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

        ClickOnUpcomingSession() {
            return this
                .waitForElementVisible('@UpcomingSession', 6000)
                .click('@UpcomingSession')
                .waitForElementVisible('@ListPresent', 6000)
        },

        ClickOnApprovedSession() {
            //const Expected='TestAutomationTitle';
            Title = '';
            return this
                .waitForElementVisible('@UpcomingSession', 6000)
                .click('@UpcomingSession')
                .waitForElementVisible('@ListPresent', 6000)
                .click('@ApprovedTemplate')
                .getText('@ApprovedPageTitle', function (result) {
                    let Title = result.value;
                  //  console.log(Title);
                    //  return { Expected, Title };

                })

        },

        SessionWithMultipleData() {

            return this
                .waitForElementVisible('@UpcomingSession', 6000)
                .click('@UpcomingSession')
                .waitForElementVisible('@ListPresent', 6000)
            .getText('@ListPresent',function(result){
                const AllData=result.value;
                console.log(AllData);
            });

        },

        ClickOnAnySession() {

            return this
                .waitForElementVisible('@ListPresent', 5000)
                .click('@ListPresent')
                //.waitForElementVisible('@EditButton',5000)
                .click('@EditButton')
                .waitForElementPresent('@TextBox', 5000)
                .click('@TextBox')
                .setValue('@TextBox', 'Testing Title')
                .waitForElementPresent('@SaveButton', 5000)
                .click('@SaveButton')
                .waitForElementVisible('@ToastMessage', 5000)

        },

        WithoutTitle() {

            return this
                .waitForElementVisible('@ListPresent', 5000)
                .click('@ListPresent')
                .waitForElementVisible('@EditButton', 3000)
                .click('@EditButton')
                .waitForElementPresent('@TextBox', 5000)
                //  .click('@TextBox')
                .pause(6000)
                .setValue('@TextBox', "") // simulating backspace
                .pause(4000)
                .sendKeys('@TextBox', "Testing Title")

                .pause(4000)
                //.clearValue('@TextBox')
                .click('@SaveButton')
                .pause(5000)
            //.clearValue('@TextBox')

        },

        AddNewTag() {

            return this

                .waitForElementVisible('@ListPresent', 5000)
                .click('@ListPresent')
                .waitForElementPresent('@Tags', 6000)
                .click('@Tags')
                .waitForElementVisible('@AddTagTextBox', 6000)
                .pause(3000)
                .setValue('@AddTagTextBox', 'Python')
                .click('@SaveNewTag')
                .pause(3000)

        },

        RemoveNewTag() {

            return this

                .waitForElementVisible('@ListPresent', 5000)
                .click('@ListPresent')
                .waitForElementPresent('@RemoveTag', 6000)
                .pause(5000)
                .click('@RemoveTag')

        },

        UpdateDescriptionBox() {

            return this
                .waitForElementVisible('@ListPresent', 6000)
                .click('@ListPresent')
                .waitForElementPresent('@DescriptionEditButton', 6000)
                .click('@DescriptionEditButton')
                .waitForElementVisible('@DescriptionTextBox', 6000)
                .getAttribute('@DescriptionTextBox', 'value', function (result) {
                    var attributeValue = result.value;
                    console.log(attributeValue);

                    this.setValue('textarea[type="text"]', attributeValue + 'NashTech')
                })
                .waitForElementPresent('@DescriptionSaveButton', 6000)
                .click('@DescriptionSaveButton')


        },

        UnableToUpdateDescription() {
            return this
                .waitForElementVisible('@ListPresent', 5000)
                .click('@ListPresent')
                .waitForElementPresent('@DescriptionEditButton', 6000)
                .click('@DescriptionEditButton')
                .waitForElementVisible('@DescriptionTextBox', 6000)
                .click('@DescriptionTextBox')
                .setValue('@DescriptionTextBox', 'Hii EveryOne')

        },

        ExceedDescriptionLength() {
            const MAX_DESCRIPTION_LENGTH = 1000; 0
            const INVALID_DESCRIPTION = 'Hi To All I Am Here'.repeat(MAX_DESCRIPTION_LENGTH + 1);

            return this
                .waitForElementVisible('@ListPresent', 5000)
                .click('@ListPresent')
                .waitForElementPresent('@DescriptionEditButton', 6000)
                .click('@DescriptionEditButton')
                .waitForElementVisible('@DescriptionTextBox', 6000)
                .click('@DescriptionTextBox')
                .setValue('@DescriptionTextBox', INVALID_DESCRIPTION)

        },

        DisableDiscriptionTextBox() {

            return this
                .waitForElementVisible('@ListPresent', 5000)
                .click('@ListPresent')
                .waitForElementPresent('@DescriptionEditButton', 6000)
                .click('@DescriptionEditButton')
                .waitForElementVisible('@DescriptionTextBox', 6000)
                .click('@DescriptionTextBox')
                // Get the current value of the description box
                .clearValue('@DescriptionTextBox')
            //.click('@DescriptionTextBox')
            // .pause(5000)
            // .setValue('@DescriptionTextBox','')
        },

        UpdateSlideURLField() {

            return this
                .waitForElementVisible('@ListPresent', 5000)
                .click('@ListPresent')
                .waitForElementVisible('@SlideURlBox', 6000)
                .click('@SlideURlBox')
                .waitForElementVisible('@URLSaveButton', 6000)
                .click('@URLSaveButton')

        },

        NotUpdateSlideURL() {

            return this
                .waitForElementVisible('@ListPresent', 5000)
                .click('@ListPresent')
                .waitForElementVisible('@SlideURlBox', 6000)
                .click('@SlideURlBox')
                .clearValue('@AfterClickingURLBox')
                .waitForElementVisible('@URLSaveButton', 6000)
                .click('@URLSaveButton')

        },

        InvalideSlideURL() {

            return this
                .waitForElementVisible('@ListPresent', 5000)
                .click('@ListPresent')
                .waitForElementVisible('@SlideURlBox', 6000)
                .click('@SlideURlBox')
                .setValue('@AfterClickingURLBox', 'GoodEvening')
                .waitForElementVisible('@URLSaveButton', 6000)
                .click('@URLSaveButton')
        },

        BackButtonEnable() {

            return this
                .waitForElementVisible('@ListPresent', 5000)
                .click('@ListPresent')
                .waitForElementVisible('@BackButton', 6000)
                .click('@BackButton')

        }



    }]



}

















