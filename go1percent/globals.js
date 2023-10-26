// const chromedriver = require('chromedriver');

module.exports = {

    before: function (done) {
        chromedriver.start();
        done();
    },

    after: function (done) {
        chromedriver.stop();
        done();
    },
    headers: {
        
            "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/118.0",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br",
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgzMTUwOTAsImlhdCI6MTY5ODMxMzI5MCwiYXV0aF90aW1lIjoxNjk4MzEzMjg4LCJqdGkiOiIzNDJmNWY5Mi00YTJlLTQ1ZTgtOGFiNS02ZWYzZDIyOGE4MGIiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiIxZjg4MThlZC04NmI2LTQzMzctOTg2OC04YzU0MDAxYjViMGYiLCJzZXNzaW9uX3N0YXRlIjoiYzc2ZTdiZTgtNTY4OS00MmQzLWE3NWMtMmM4ODkxOTVjNzQ4IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiYzc2ZTdiZTgtNTY4OS00MmQzLWE3NWMtMmM4ODkxOTVjNzQ4IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.P7DpDUe-3pxK_QQlO2Yni6OK9b16JSITQ4m1ZN64PWpSEH_0b6-B77kWcd_HY4NMU6aiqL-ZgMRnCAw4KPGUVWo_yUDOMwyfMeOP0CUKtpk2jsbF5sFSCxmvlSOVNTrZBSh6AmDHRrmEHS5cZmqh9t_t1tMC1H02gXPXuIHu9sRU7xihfbIQEhTa5D5CgwN6PbQpO5FOesnW1P8_c5Ku4oJ8gvtgt_A7bhS58gxVyMvUvR7um2jO9tC0jdMrKvYs0a04MX-fr0JQJA71Cr1o6pzRt-cMghCNaQ19o25Jtrkt3xxW2k9NJmSACf2wEZJica8GyVycwpjuEyrAJHFsrA",
            "LanguageValue": "en",
            "Source": "https://nashtechglobal.qa.go1percent.com",
            "Origin": "https://nashtechglobal.qa.go1percent.com",
            "Connection": "keep-alive",
            "Referer": "https://nashtechglobal.qa.go1percent.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "TE": "trailers"          
          
    }



};
