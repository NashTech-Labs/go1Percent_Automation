module.exports = {

    before: function(done) {
        chromedriver.start();
        done();
    },
    
    global: {
        headers: {
            'sec-ch-ua': '?0',
            'LanguageValue' : 'en',
            'Source': 'https://nashtechglobal.qa.go1percent.com',
            'Authorization' : '',
            'User-Agent' : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
            'Accept' : 'application/json, text/plain, */*',
            'sec-ch-ua-platform' : '"Linux"',
            'host' : 'techhub-backend.qa.go1percent.com'
            },
            baseURL: "https://techhub-backend.qa.go1percent.com"
    },

    after: function(done) {
        chromedriver.stop();
        done();
    }
,

headers:{
    "authority": "techhub-backend.qa.go1percent.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "Authorization": "",
    "content-type": "application/json",
    "languagevalue": "en",
    "origin": "https://nashtechglobal.qa.go1percent.com",
    "referer": "https://nashtechglobal.qa.go1percent.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Linux",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "source": "https://nashtechglobal.qa.go1percent.com",
    "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
    }
};
