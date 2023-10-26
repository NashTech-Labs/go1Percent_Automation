//const chromedriver = require('chromedriver');

module.exports = {

    userName :"testemployee",
    password:"testemployee",


    before: function(done) {
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

    after: function(done) {
        chromedriver.stop();
        done();
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



    urls: {
        token: "https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect",
        go1percentBase: "https://knolx-backend.qa.go1percent.com/v02/",
    },

    UpdateData:{
        "topic": "Knoldus",
        "sessionDescription": "In addition to the assert namespace, the Nightwatch API supports out of the box a BDD-style expect assertion library which greatly improves the flexibility as well as readability of the assertions.The expect assertions use a subset of the Expect api from the Chai framework and at this point a available for elements, cookies, page title, and urlHere a basic example that uses various expect.element([...]) assertions:",
        "slideURL": "www.goggle.com",
        "sessionTag": [
          "Automation","Testing","FrontEnd"
        ]

    },

    
    after: function(done) {
        chromedriver.stop();
        done();
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


    baseurl:'https://backend.qa.go1percent.com'

}
};
