//const Login=browser.page.login() 
const DataSet = require('../../globals')
const Session = browser.page.MySessionPage()
const Upcoming = browser.page.My_Upcoming_Session()
const Update = browser.page.UpdateSomeElements()
const ExpectedTitle='TestAutomationTitle';
const Description='Description';
const SlideURL='Slide URL';



describe("Manage My Upcoming Session", () => {
    beforeEach((function (browser) {
        browser
            .maximizeWindow()
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

        //  it('verify that booked session should be visible in the my upcoming session (TC-177)', function () {

        //     Upcoming
        //         .ClickOnUpcomingSession()
        //         // .assert.containsText('@UpcomingSession', 'My Upcoming Session')
        //         // .assert.containsText('@StartingBox', 'testing')
        //         // .assert.containsText('@MiddleBox', 'Test Title 4892')
        //         // .assert.containsText('@LastBox', 'TestAutomationTitleNashtech')
        //         .assert.elementPresent('@ListPresent')


        //  }),

        //  it('Verify that user should able to update the title (TC-178) ', function () {

        //     Update
        //         .ClickOnAnySession()
        //         .assert.containsText('@ToastMessage', 'Successfully Updated')


        // }),

        it(' Verify that user should not able to save the session without title (TC-179)',function(){

              Update
              .WithoutTitle()
              browser.ensure.elementIsDisabled('@SaveButton')
         }),

    //     it('verify that user should able to add tags (TC-180)', function () {

    //         Update
    //             .AddNewTag()
    //             .assert.containsText('@ToastMessage', 'Successfully Updated')

    //      }),

    //     it(' verify that user should able to remove the added tags (TC-181)', function () {

    //         Update
    //             .RemoveNewTag()
    //             .assert.containsText('@ToastMessage', 'Successfully Updated')


    //      }),

    //     it('verify that user should able to update the description (TC-182)', function () {

    //         Update
    //             .UpdateDescriptionBox()
    //             .assert.containsText('@ToastMessage', 'Successfully Updated')



    //     }),

    //     it('verify that user should unable to update the description less than 250 words (TC-183)', function () {

    //         Update
    //             .UnableToUpdateDescription()
    //             .assert.containsText('@ValidationErrorMessage', 'Description should contain atleast 250 characters')
    //             .assert.attributeEquals('@DescriptionSaveButton', 'disabled', 'true')



    //     }),

    //     it('verify that user should not able to update the description more than 1000 words ', function () {

    //         Update
    //             .ExceedDescriptionLength()
    //             //.assert.attributeEquals('@DescriptionTextBox', 'value', INVALID_DESCRIPTION)
    //             .assert.containsText('@ErrorMessageExceedLength', 'Exceeded the maxlength')
    //             .assert.attributeEquals('@DescriptionSaveButton', 'disabled', 'true')



    //      }),

    //     it(' Verify that user should not able to save the session without description (TC-185) ',function(){

    //       Update
    //       .DisableDiscriptionTextBox()
    //       .assert.attributeEquals('@DescriptionSaveButton', 'disabled', 'true')
    //       }),

    //      it('Verify that user should able to add or update the slide URL (TC-186) ', function () {

    //         Update
    //             .UpdateSlideURLField()
    //             .assert.textContains('@ToastMessage', 'Successfully Updated')


    //     }),

    //       it('Verify that user should not able to save the session without slide URL (TC-187)',function(){

    //       Update
    //       .NotUpdateSlideURL()
    //       .assert.attributeEquals('.btn.btn-primary.ms-2.save', 'disabled', 'true')


    //       }),

    //       it('Verify that user should not able to save the session when enter invalid slide URL (TC-188) -',function(){

    //       Update
    //       .InvalideSlideURL()
    //       .assert.textContains('@InvalidURlMessage','Url is invalid')


    //       }),

    //     it('verify that back button should enabled when user is on the descriptive page (TC-190)', function () {

    //         Update
    //             .BackButtonEnable()
    //        Upcoming
    //             .assert.textContains('@UpcomingSession', 'My Upcoming Session')


    //     })

    //     it('verify that all details is shown when clicked on Approved Session (TC-191)', function () {

    //        Upcoming
    //        .ClickOnApprovedSession()
    //        .assert.textContains('@ApprovedPageTitle',ExpectedTitle)
    //         .assert.textContains('@ApprovedDescription',Description)
    //        .assert.textContains('@ApprovedSlideURL',SlideURL)
    //     }),

    //      it('verify that session should be visible with the session type, date, time, title and status (TC-189)',function(){

    //       Upcoming
    //       .SessionWithMultipleData()
    //       .pause(4000)
    //       .assert.textContains('@SessionType',DataSet.Session)
    //    //  .assert.textContains('@SessionDate',DataSet.SessionDetails.Date)
    //       .assert.textContains('@SessionTime',DataSet.Time)
    //       .assert.textContains('@SessionTitle',DataSet.Title)
    //       .assert.textContains('@SessionStatus',DataSet.Status)
    //     //   .getText('@ListPresent',function(result){

    //     //     const AllData=result.value;

    //     //     console.log(AllData);

    //     //})
    //    // browser.ensure.elementIsVisible(DataSet.SessionDetails)




    //      })




    afterEach(function (browser) {
       browser.end();
    })








}








)










