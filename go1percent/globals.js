const chromedriver = require('chromedriver');
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
};
