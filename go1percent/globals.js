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
    headers:
    {
    
                'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
                'LanguageValue': 'en',
                'Source':'https://nashtechglobal.qa.go1percent.com',
                'Authorization': '',
                'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
                'Accept':'application/json, text/plain, */*',
                'sec-ch-ua-platform':'Linux',
                'host': 'backend.qa.go1percent.com'
              
        },

    Url:
    {
            
            BaseUrl:"https://backend.qa.go1percent.com",
            PostEndPoints:"/contribution/addContribution",
            GetEndPoints:"/contribution/getKnolderContribution?pageNumber=1&limit=10000"
        }

};
