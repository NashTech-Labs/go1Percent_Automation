//const chromedriver = require('chromedriver');

module.exports = {

    before: function (done) {
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

    employee: {},


    urls: {
        token: "https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect",
        go1percentBase: "https://techhub-backend.qa.go1percent.com",
    },

    after: function (done) {
        chromedriver.stop();
        done();
    }

};
