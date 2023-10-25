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

    },



    urls: {
        token: "https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect",
        go1percentBase: "https://knolx-backend.qa.go1percent.com/v02/",
    },

    UpdateData:{
        "topic": "Knoldus",
        "sessionDescription": "Knolduskkkkkkkkkkkkkkhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
        "slideURL": "www.goggle.com",
        "sessionTag": [
          "Automation","Testing","FrontEnd"
        ]

    },

    after: function(done) {
        chromedriver.stop();
        done();
    }

}