const chromedriver = require('chromedriver');
const base_url = "https://knolx-backend.qa.go1percent.com/";
const source = "https://nashtechglobal.qa.go1percent.com/";
const url = 'https://backend-radar.qa.go1percent.com/';

const access_token = "";

const expectedStudioIds = [
    'ALL_STUDIO',
    'AGILE_COMPETENCY',
    'AI_ML_COMPETENCY',
    'DEVOPS_COMPETENCY',
    'FRONTEND_COMPETENCY',
    'JAVA_COMPETENCY',
    'SCALA_COMPETENCY',
    'TEST_AUTOMATION_COMPETENCY'
];



module.exports = {
    base_url,
    source,
    url,
    expectedStudioIds,
    access_token,
    
    before: function(done) {
        chromedriver.start();
        done();
    },

    after: function(done) {
        chromedriver.stop();
        done();
    }

};
