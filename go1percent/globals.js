const chromedriver = require('chromedriver');
function startTime(){
    return new Date().getTime()
}


function startTime(){
    return new Date().getTime()
}

function startTime(){
    return new Date().getTime()
}

module.exports = {

    before: function(done) {
        chromedriver.start();
        done();
    },

    after: function(done) {
        chromedriver.stop();
        done();
<<<<<<< HEAD
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
    url : 'https://backend-radar.qa.go1percent.com/',

    baseurl:'https://backend.qa.go1percent.com',
    base_url : "https://knolx-backend.qa.go1percent.com",
    source : "https://nashtechglobal.qa.go1percent.com",
=======
    },
    
    baseURL : 'https://knolx-backend.qa.go1percent.com', // Base URL of the API
    accessToken : 'Bearer <Your Access Token>', // Your access token here
    source: 'https://nashtechglobal.qa.go1percent.com', 

>>>>>>> 37ad7bbcbcc721b6831b5651aa4f9ac23cc0ed6b
    dataToUpdate: {
        sessionTag: [],
        sessionDescription: "The error message indicates that the property 'topic' is not present in the response body, which is why the assertion is failing. This could be due to the structure of the response body or the way the API is handling the request. Please ensure that the API response structure matches the expected response format.",
        feedbackFormName: "sdv",
        sessionId: "653105778555d37c0a4f8d96",
        remarks: "have not updated the sessions",
        slideURL: "www.google.com",
        sessionTag: ["Python"],
        topic: "Updated Title",
        saveOption: true
    }


};

