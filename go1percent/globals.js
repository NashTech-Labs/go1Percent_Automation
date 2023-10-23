module.exports = {

    admin: {
        headers: {
            'Authorization': '',
            'Source': 'https://nashtechglobal.qa.go1percent.com'
        },    
        token_headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'source': 'https://nashtechglobal.qa.go1percent.com'
        },
        token_body: {
            client_id: 'leaderboard-ui',
            client_secret: '8090ed15-4cd1-483c-9fee-2a8b35941852',
            username: 'testadmin',
            password: 'testadmin',
            grant_type: 'password',
        },
    },

    urls: {
        token: "https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect",
        feedback_form_url_base: "https://knolx-backend.qa.go1percent.com/v02/feedback-form",
    }

};