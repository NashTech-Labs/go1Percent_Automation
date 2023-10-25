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

    apiheaders : {
        
        'authority': 'backend.qa.go1percent.com',

        'accept': 'application/json, text/plain, */*',

        'accept-language': 'en-US,en;q=0.9', 

        'authorization': '',

        'languagevalue': 'en',

        'origin': 'https://nashtechglobal.qa.go1percent.com',

        'referer': 'https://nashtechglobal.qa.go1percent.com/',

        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',

        'sec-ch-ua-mobile': '?0',

        'sec-ch-ua-platform': '"Linux"',

        'sec-fetch-dest': 'empty',

        'sec-fetch-mode': 'cors',

        'sec-fetch-site': 'same-site',

        'source': 'https://nashtechglobal.qa.go1percent.com',

        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',

    },
    baseUrl : "https://ticket-backend.qa.go1percent.com"

};
