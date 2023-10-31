//const Login=browser.page.login() 
const DataSet = require('../../globals')
const Session = browser.page.MySessionPage()
const Upcoming = browser.page.My_Upcoming_Session()




describe("Manage My Upcoming Session", () => {
    beforeEach((function (browser) {
        browser
            .window.maximize()
            .page.login()
            .navigate()
            .enterCredentials(browser.globals.userName, browser.globals.password)
            .signIn()
        // browser.pause(30000)
        Session
            .ClickOnKnolx()
            .ClickOnMySession()
            .assert.urlContains('my-sessions')


    })),

        it('verify that booked session should be visible in the my upcoming session (TC-177)', function () {

            Upcoming
                .ClickOnUpcomingSession()
                .assert.elementPresent('@ListPresent')


        }),

        it('Verify that user should able to update the title (TC-178) ', function () {

            Upcoming
                .ClickOnAnySession()
                .assert.containsText('@ToastMessage', 'Successfully Updated')


        }),

        // it(' Verify that user should not able to save the session without title (TC-179)', function () {

        //     Upcoming
        //         .WithoutTitle()
        //     browser.ensure.elementIsDisabled('@SaveButton')
        // }),

        it('verify that user should able to add tags (TC-180)', function () {

            Upcoming
                .AddNewTag()
                .assert.containsText('@ToastMessage', 'Successfully Updated')

        }),

        it(' verify that user should able to remove the added tags (TC-181)', function () {

            Upcoming
                .RemoveNewTag()
                .assert.containsText('@ToastMessage', 'Successfully Updated')


        }),

        it('verify that user should able to update the description (TC-182)', function () {

            Upcoming
                .UpdateDescriptionBox()
                .assert.containsText('@ToastMessage', 'Successfully Updated')



        }),

        it('verify that user should unable to update the description less than 250 words (TC-183)', function () {

            Upcoming
                .UnableToUpdateDescription()
                .assert.containsText('@ValidationErrorMessage', 'Description should contain atleast 250 characters')
                .assert.attributeEquals('@DescriptionSaveButton', 'disabled', 'true')
        }),

        it('verify that user should not able to update the description more than 1000 words ', function () {

            Upcoming
                .ExceedDescriptionLength()
                .assert.containsText('@ErrorMessageExceedLength', 'Exceeded the maxlength')
                .assert.attributeEquals('@DescriptionSaveButton', 'disabled', 'true')

        }),

        // it(' Verify that user should not able to save the session without description (TC-185) ', function () {

        //     Upcoming
        //         .DisableDiscriptionTextBox()
        //         .assert.attributeEquals('@DescriptionSaveButton', 'disabled', 'true')
        // }),

        it('Verify that user should able to add or update the slide URL (TC-186) ', function () {

            Upcoming
                .UpdateSlideURLField()
                .assert.textContains('@ToastMessage', 'Successfully Updated')


        }),

        // it('Verify that user should not able to save the session without slide URL (TC-187)', function () {

        //     Upcoming
        //         .NotUpdateSlideURL()
        //         .assert.attributeEquals('.btn.btn-primary.ms-2.save', 'disabled', 'true')


        // }),

       // it('Verify that user should not able to save the session when enter invalid slide URL (TC-188) -', function () {

        //     Upcoming
        //         .InvalideSlideURL()
        //         .assert.textContains('@InvalidURlMessage', 'Url is invalid')


        // }),

        it('verify that back button should enabled when user is on the descriptive page (TC-190)', function () {

            Upcoming
                .BackButtonEnable()
                .assert.textContains('@UpcomingSession', 'My Upcoming Session')


        })

    it('verify that all details is shown when clicked on Approved Session (TC-191)', function () {

        Upcoming
            .ClickOnApprovedSession()
            .assert.textContains('@ApprovedPageTitle', DataSet.ExpectedTitle)
            .assert.textContains('@ApprovedDescription', DataSet.Description)
            .assert.textContains('@ApprovedSlideURL', DataSet.SlideURL)
    }),

        it('verify that session should be visible with the session type, date, time, title and status (TC-189)', function () {

            Upcoming
                .SessionWithMultipleData()
                .pause(4000)
                .assert.textContains('@SessionType', DataSet.Session)
                .assert.textContains('@SessionDate', DataSet.Date)
                .assert.textContains('@SessionTime', DataSet.Time)
                .assert.textContains('@SessionTitle', DataSet.SessionTitle)
                .assert.textContains('@SessionStatus', DataSet.SessionStatus)

        })




    afterEach(function (browser) {
        browser.end();
    })








}








)










