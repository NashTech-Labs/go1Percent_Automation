const chromedriver = require('chromedriver');
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
    },

    // My Past Sessions
    queryMyPastSession:{
        'pageNumber': '1',
        'pageSize': '1000',
        'filter': 'past',
        'search': '',
        'knolderOnly': 'true',
        'sessionId' : '6529144d45bc9a797dfbcb19',
    },

    base_url : "https://knolx-backend.qa.go1percent.com/",
    source : "https://nashtechglobal.qa.go1percent.com",
    access_token : '',
};