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
    
    baseURL : 'https://knolx-backend.qa.go1percent.com', // Base URL of the API
    accessToken : 'Bearer <Your Access Token>', // Your access token here
    source: 'https://nashtechglobal.qa.go1percent.com', 

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
