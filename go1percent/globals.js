const chromedriver = require('chromedriver');
const allureReporter = require('nightwatch-allure');
function startTime(){
    return new Date().getTime()
}


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
    reporter: (results,done)=>{
        const reporter = new allureReporter.NightwatchAllureReporter({});
        reporter.write(results,done);
      },

    before: function (done) {
        chromedriver.start();
        done();
    },
    
    reporter: (results,done)=>{
        const reporter = new allureReporter.NightwatchAllureReporter({});
        reporter.write(results,done);
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


    techhubUrls: {
        token: "https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect",
        go1percentBase: "https://techhub-backend.qa.go1percent.com",
    },


    after: function (done) {
        chromedriver.stop();
        done();
    },

    // Requested sessions
    queryRequested:{
        'pageNumber' : '1',
        'filter' : 'requested', 
        'pageSize' : '10',
        'search' : '',
    },

    base_url : "https://knolx-backend.qa.go1percent.com/",
    source : "https://nashtechglobal.qa.go1percent.com",
    access_token : '',
    
    Add_Contribution:{
        BaseUrl:"https://backend.qa.go1percent.com",
        PostEndPoints:"/contribution/addContribution",
        GetEndPoints:"/contribution/getKnolderContribution?pageNumber=1&limit=10000" ,
        Contribution_url:"www.cou.org"   

    },


    Reward:{
        PostEndPoints:"/rewards",
        PutEndPoints:"/rewards",
        GetEndPoints:["/rewards/getAllRewards" , "/rewards/getReward"]

    },

    Redeemed_Reward:{
        PostEndPoints:"/rewards",
        PutEndPoints:"/updateRedeemReward",
        GetEndPoints:"/get/redeemRewards"     
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
    backend_url : 'https://backend-radar.qa.go1percent.com/',

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
         
    urls: {
            token: "https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect",
            go1percentBase: "https://knolx-backend.qa.go1percent.com/v02/",

            },
            access_token :"",  
            // Upcoming Sessions Page Frontend Automation
            nasher : "employee",
            testAutomationCompetencyName: "TEST AUTOMATION COMPETENCY",
            badge:"KNOLX",
            date:"Nov 4, 2023",
            datePastSessions: "Oct 14, 2023",
            // allure report
            reporter: (results,done)=>{
                const reporter = new allureReporter.NightwatchAllureReporter({});
                reporter.write(results,done);
              },

            
              //My Past Session
                  
               queryMyPastSession: {
               'pageNumber': '1',
               'pageSize': '1000',
               'filter': 'past',
               'knolderOnly': 'true',
               'sessionId' : '6529144d45bc9a797dfbcb19',
            },

        };