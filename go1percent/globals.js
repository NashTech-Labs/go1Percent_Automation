// const chromedriver = require('chromedriver');

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

        'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTc5NzM5NTAsImlhdCI6MTY5Nzk3MjE1MCwiYXV0aF90aW1lIjoxNjk3OTcyMTQ5LCJqdGkiOiI2YTFkNGU5OC04ZWIxLTQwOTItODg5NS1hZjE4YTQzMWFjN2EiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiIwZWI1MTQ4OC05OTBhLTRmYTctOGUzOC05YmY1NjU4OGU3ZjgiLCJzZXNzaW9uX3N0YXRlIjoiMTY2NTU3ZWQtZTNmMC00Zjg0LTg2NDAtMjA0ODZkOTRlODQ4IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMTY2NTU3ZWQtZTNmMC00Zjg0LTg2NDAtMjA0ODZkOTRlODQ4IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.CxKnYVg20JYyWFvtFm_4IeBAWxg6QgvabUBHXCqcxDs0m5oYB_0beDdmhm0xhS_WA18SaHtX7-dHVEhY4Ol0S-7AtnsPlGgPX9J0lgWbbeGr27zhlYF9vN43XiqK49VdcIUAlD6Td6DnAcdODgRKGh-BiBrZ-3k4SM3I5RoiUoLG0stzvzvyQhXntGfGtOywwmERBbDSwf83MPO-E4Sc5EWo3hR047-PfL5wezcFhJcYSkiGTl0gfRvCRQ7TfuTzv6d9PRL6LxlobhFzFz3svT0Lgfx9OW0JnNCVR4E2CdvKKku8BeI93BoDT2vrSr86eyHu8CzO8ssOlg47_RvS4w',

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
