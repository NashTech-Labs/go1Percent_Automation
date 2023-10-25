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
 
    base_url : "https://knolx-backend.qa.go1percent.com",
    source : "https://nashtechglobal.qa.go1percent.com",
    access_token :"", 



};
