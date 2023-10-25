const chromedriver = require('chromedriver');

module.exports = {

    before: function(done) {
        chromedriver.start();
        done();
    },

    after: function(done) {
        chromedriver.stop();
        done();
    },
   

    Url:
    {
            
            BaseUrl:"https://backend.qa.go1percent.com",
            PostEndPoints:"/contribution/addContribution",
            GetEndPoints:"/contribution/getKnolderContribution?pageNumber=1&limit=10000"
        }

};
