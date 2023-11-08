module.exports = {

    url: '',

    elements: {

        Knolx: {
            locateStrategy: 'xpath',
            selector: '(//div[@role="button"])[4]',
        
        },
        MySession: {

            locateStrategy: 'xpath',
            selector: '//a[@href="/knolx/my-sessions/my-upcoming-sessions"]',
        //a[href$="my-upcoming-sessions"].nav-link
        
        },


    },

    commands: [{

        ClickOnKnolx() {
            return this
                .waitForElementVisible('@Knolx', 10000)
               // .pause(3000)
                // .execute(function() {
                //     document.querySelector('@Knolx').scrollIntoView();
                //   })
               // .waitForElementClickable(5000)
                .click('@Knolx');

        },

        ClickOnMySession() {
            return this

                .waitForElementPresent('@MySession', 10000)
                .execute(function () {
                    document.querySelector('@MySession').scrollIntoView();
                })
                .click('@MySession')
        },



    }







    ]



}