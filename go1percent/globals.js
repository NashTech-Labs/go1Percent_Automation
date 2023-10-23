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

    headers : {
  
        'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
  
        'LanguageValue' : 'en',
  
        'Source': 'https://nashtechglobal.qa.go1percent.com',
  
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgwNjU2NTMsImlhdCI6MTY5ODA2Mzg1MywiYXV0aF90aW1lIjoxNjk4MDYzODUyLCJqdGkiOiJlOTIxMzNkYy02ZjJlLTRlZDctOWNlYy0yZDQ2ZTc2MmMyY2QiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiJkYWFhZDBlNi0yOWQyLTQ0MWYtODRiNC0xOWYxMDMwMTliMjQiLCJzZXNzaW9uX3N0YXRlIjoiODBlMmE1ZTQtODZmMS00Yjg3LTkwNGMtYWE0MDYxZDY2ZTljIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiODBlMmE1ZTQtODZmMS00Yjg3LTkwNGMtYWE0MDYxZDY2ZTljIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.VoMZMtdbc8yLRvWmwTzENhov_J_WTtEC_5ZY2IKqgwFiA6Jh7qDLFuCreN1zbcoUHzTat5IiriuS-Fu_tewmRFY7ZkEcF493FwlqiyhsVCpZl5e5QQ6FYaJP0XaQaR6ilNdf2nWwPR-VO-B1B2shhHQ5ejKYl0dDEQuKib5bGt56NQn-Wcrtpe6wQYNl_-95sHfb-7ahB75HVvrAwGlILJVVQiwEXHc7w7KxDnKAxrHudSdSidVAxeb3HpESym2wrU_iQ_93AjjlrGBqdHFNL9GyN6bn3YCYq-J7ucRPnHLWISrRX1_vj9ej3IH1nQneESBIUkWG2pFoK_LHYZERVQ',
  
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
  
        'Accept':'application/json, text/plain, */*',
  
        'sec-ch-ua-platform': 'Linux',
  
        'host': 'backend.qa.go1percent.com'
  
    },

    baseurl : "https://backend.qa.go1percent.com"

};
