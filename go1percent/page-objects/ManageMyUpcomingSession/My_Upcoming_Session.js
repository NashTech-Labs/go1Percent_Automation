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
            //locateStrategy: 'xpath',
            selector: '.pending-badge'
            //span[contains(text(),"Pending for Approval")]',


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
            selector: '//span[text()=" 01 Dec 2023"]',
            locateStrategy: 'xpath'

        },
        SessionTime: {

            selector: '//span[text()=" 4:15 - 5:00 PM IST"]',
            locateStrategy: 'xpath'
        },

        SessionTitle: {
            selector: '//div[text()=" Testing Automation "]',
            locateStrategy: 'xpath'

        },

        // SessionStatus: {
        //     selector: '(//span[text()=" Pending for Approval "])[1]',
        //     locateStrategy: 'xpath'

        // },
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
        },

    },

    commands: [{

        ClickOnListedSession() {

            this
                .waitForElementVisible('@ListPresent', 10000)
                .execute(function () {
                    const g = document.querySelector('.pending-badge');
                    console.log()
                    if (g.textContent.trim()=== 'Pending for Approval') {
                        g.click();
                    }
                });
                
       return this
        },

        ClickOnUpcomingSession() {
            return this
                .waitForElementVisible('@UpcomingSession', 10000)
                .click('@UpcomingSession')
                .waitForElementVisible('@ListPresent', 10000)
        },

        ClickOnApprovedSession() {
            Title = '';
            return this
                .waitForElementVisible('@UpcomingSession', 10000)
                .click('@UpcomingSession')
                .waitForElementVisible('@ListPresent', 10000)
                .click('@ApprovedTemplate')
                .getText('@ApprovedPageTitle', function (result) {
                    let Title = result.value;
                    //  console.log(Title);
                    
                })

        },

        SessionWithMultipleData() {

            return this
                .waitForElementVisible('@UpcomingSession', 10000)
                .click('@UpcomingSession')
                .waitForElementVisible('@ListPresent', 10000)
                .getText('@ListPresent', function (result) {
                    const AllData = result.value;
                    // console.log(AllData);
                });

        },

        ClickOnAnySession(NewTitle) {

            return this

                .waitForElementVisible('@EditButton', 5000)
                .click('@EditButton')
                .waitForElementPresent('@TextBox', 10000)
                .click('@TextBox')
                .setValue('@TextBox',NewTitle )
                .waitForElementPresent('@SaveButton', 10000)
                .click('@SaveButton')
                .waitForElementVisible('@ToastMessage', 10000)

        },

        WithoutTitle() {

            return this
             
                .waitForElementVisible('@EditButton', 10000)
                .click('@EditButton')
                .waitForElementPresent('@TextBox', 10000)
                .click('@TextBox')
                .sendKeys('@TextBox', [browser.Keys.CONTROL, 'a'])
                .sendKeys('@TextBox', browser.Keys.BACK_SPACE)


        },

        AddNewTag() {

            return this

                .waitForElementPresent('@Tags', 10000)
                .click('@Tags')
                .waitForElementVisible('@AddTagTextBox', 10000)
                .pause(3000)
                .setValue('@AddTagTextBox', 'Python')
                .click('@SaveNewTag')
                .pause(3000)

        },

        RemoveNewTag() {

            return this

                .waitForElementPresent('@RemoveTag', 10000)
                .pause(5000)
                .click('@RemoveTag')

        },

        UpdateDescriptionBox() {

            return this

                .waitForElementPresent('@DescriptionEditButton', 10000)
                .click('@DescriptionEditButton')
                .waitForElementVisible('@DescriptionTextBox', 10000)
                .getAttribute('@DescriptionTextBox', 'value', function (result) {
                    var attributeValue = result.value;
                    // console.log(attributeValue);

                    this.setValue('textarea[type="text"]', attributeValue + 'NashTech')
                })
                .waitForElementPresent('@DescriptionSaveButton', 10000)
                .click('@DescriptionSaveButton')


        },

        UnableToUpdateDescription() {
            return this

                .waitForElementPresent('@DescriptionEditButton', 10000)
                .click('@DescriptionEditButton')
                .waitForElementVisible('@DescriptionTextBox', 10000)
                .click('@DescriptionTextBox')
                .setValue('@DescriptionTextBox', 'Hii EveryOne')

        },

        ExceedDescriptionLength() {
            const MAX_DESCRIPTION_LENGTH = 1000; 0
            const INVALID_DESCRIPTION = 'Hi To All I Am Here'.repeat(MAX_DESCRIPTION_LENGTH + 1);

            return this

                .waitForElementPresent('@DescriptionEditButton', 10000)
                .click('@DescriptionEditButton')
                .waitForElementVisible('@DescriptionTextBox', 10000)
                .click('@DescriptionTextBox')
                .setValue('@DescriptionTextBox', INVALID_DESCRIPTION)

        },

        DisableDiscriptionTextBox() {

            return this
               
                .waitForElementPresent('@DescriptionEditButton', 10000)
                .click('@DescriptionEditButton')
                .waitForElementVisible('@DescriptionTextBox', 10000)
                .click('@DescriptionTextBox')
                .sendKeys('@DescriptionTextBox', [browser.Keys.CONTROL, 'a'])
                .sendKeys('@DescriptionTextBox', browser.Keys.BACK_SPACE)

        },

        UpdateSlideURLField(newvalue) {

            return this

                .waitForElementVisible('@SlideURlBox', 10000)
                .click('@SlideURlBox')
                .setValue('@AfterClickingURLBox', newvalue)
                .waitForElementVisible('@URLSaveButton', 10000)
                .click('@URLSaveButton')

        },

        NotUpdateSlideURL() {

            return this

                .waitForElementVisible('@SlideURlBox', 10000)
                .click('@SlideURlBox')
                .pause(3000)
                .click('@AfterClickingURLBox')
                .sendKeys('@AfterClickingURLBox', [browser.Keys.CONTROL, 'a'])
                .sendKeys('@AfterClickingURLBox', browser.Keys.BACK_SPACE)
                .pause(6000)


            // .clearValue('@AfterClickingURLBox')
            // .waitForElementVisible('@URLSaveButton', 10000)
            // .click('@URLSaveButton')

        },

        InvalideSlideURL(entervalue) {

            return this

                .waitForElementVisible('@SlideURlBox', 10000)
                .click('@SlideURlBox')
                .setValue('@AfterClickingURLBox', entervalue)
                .waitForElementVisible('@URLSaveButton', 10000)
                .click('@URLSaveButton')
        },

        BackButtonEnable() {

            return this
                .waitForElementVisible('@BackButton', 10000)
                .click('@BackButton')

        }



    }]



}

















