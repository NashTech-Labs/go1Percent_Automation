const chromedriver = require('chromedriver');
function startTime(){
    return new Date().getTime()
}

function EndTime(){
    return new Date().getTime()
}

module.exports = {

    before: function (done) {
        chromedriver.start();
        done();
    },

    admin: {
        headers: {
            'Authorization': '',
            'Source': 'https://nashtechglobal.qa.go1percent.com'
        },
        tokenHeaders: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'source': 'https://nashtechglobal.qa.go1percent.com'
        },
        tokenBody: {
            client_id: 'leaderboard-ui',
            client_secret: '8090ed15-4cd1-483c-9fee-2a8b35941852',
            username: 'testadmin',
            password: 'testadmin',
            grant_type: 'password',
        },
    },

    employee: {
        headers: {
            "accept": "application/json, text/plain, */*",
            "Authorization": "",
            "content-type": "application/json",
            "source": "https://nashtechglobal.qa.go1percent.com",
        }
    },


    urls: {
        token: "https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect",
        go1percentBase: "https://techhub-backend.qa.go1percent.com",
    },

    after: function (done) {
        chromedriver.stop();
        done();
    }, 
    
    Add_Configuration:{
        BaseUrl:"https://backend.qa.go1percent.com",
        PostEndPoints:"/contribution/addContribution",
        GetEndPoints:"/contribution/getKnolderContribution?pageNumber=1&limit=10000"     

    },

    // Upcoming Page
    queryNasher: {
        'pageNumber': '1',
        'pageSize': '10',
        'filter': 'approved',
        'search': 'testadmin'
    },
    queryTestTitle: {
        'pageNumber': '1',
        'pageSize': '10',
        'filter': 'approved',
        'search': 'TestAutomationTitle'
    },
    // filter
    queryUsingCompetency: {
        'pageNumber': '1',
        'pageSize': '10',
        'filter': 'upcoming',
        'studio': 'testautomation'
    },
    queryUsingAllSessions: {
        'pageNumber': '1',
        'pageSize': '10',
        'filter': 'upcoming',
        'session': 'Knolx'
    },
    queryAllTime: {
        'pageNumber': '1',
        'pageSize': '10',
        'filter': 'upcoming',
        'time': '1698949800000'
    },
    // Past Sessions
    queryUsingTitlePast:{
        'pageNumber': '1',
        'pageSize': '10',
        'filter': 'past'
    },

    //filter
    queryUsingCompetencyPast:{
        'pageNumber': '1',
        'pageSize': '10',
        'filter': 'past',
        'studio': 'testautomation'
    },
    queryUsingAllSessionsPast:{
        'pageNumber': '1',
        'pageSize': '10',
        'filter': 'past',
        'session': 'Knolx'
    },
    queryAllTimePast:{
        'pageNumber': '1',
        'pageSize': '10',
        'filter': 'past',
        'time': '1697259310000'
    } ,
    
    base_url : "https://knolx-backend.qa.go1percent.com/",
    source : "https://nashtechglobal.qa.go1percent.com",
    sessionDescriptionInPast :"Testing TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting Ticket",
    access_token :"",


    dataToUpdate: {
        sessionDescription: "The error message indicates that the property 'topic' is not present in the response body, which is why the assertion is failing. This could be due to the structure of the response body or the way the API is handling the request. Please ensure that the API response structure matches the expected response format.",
        feedbackFormName: "sdv",
        sessionId: "653105778555d37c0a4f8d96",
        remarks: "have not updated the sessions",
        slideURL: "www.google.com",
        sessionTag: ["Python"],
        topic: "Updated Title",
        saveOption: true
    },



    url : 'https://backend-radar.qa.go1percent.com/',

    baseurl:'https://backend.qa.go1percent.com',
    	
    admin: {
        headers: {
        'Authorization': '',
        'Source': 'https://nashtechglobal.qa.go1percent.com'
        },
        tokenHeaders: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'source': 'https://nashtechglobal.qa.go1percent.com'
        },
        tokenBody: {
        client_id: 'leaderboard-ui',
        client_secret: '8090ed15-4cd1-483c-9fee-2a8b35941852',
        username: 'testadmin',
        password: 'testadmin',
        grant_type: 'password',

        },
    },
         
    urls: {
            token: "https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect",
            go1percentBase: "https://knolx-backend.qa.go1percent.com/v02/",

            }
};
