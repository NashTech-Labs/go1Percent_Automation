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

    headers : {
  
        'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
  
        'LanguageValue' : 'en',
  
        'Source': 'https://nashtechglobal.qa.go1percent.com',
  
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgyMzE4OTIsImlhdCI6MTY5ODIzMDA5MiwiYXV0aF90aW1lIjoxNjk4MjMwMDkxLCJqdGkiOiI0ZDgxMzRjZi0zMzdlLTRhMjAtOTYzOS0yZmQ3YTRkZWNjYjUiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiJhYjJjNzNkMy03NmU5LTQ3YmEtOTE1Ni0zNmMxY2RkZTgyNmMiLCJzZXNzaW9uX3N0YXRlIjoiY2MwNzk0ZTQtY2MwZS00OTE4LTkxYTItY2Q1YTRhYzUxNTAwIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiY2MwNzk0ZTQtY2MwZS00OTE4LTkxYTItY2Q1YTRhYzUxNTAwIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.ECcWnN0P-UfIuvzzNsg6aiXkBQz_VjPBV77-F8cr35IDdVMM8y9IRuRwDOaAh9-H02vEiq_KAZR2je22UGn_Yyvo83tkXC28lZWmV7ncoN47cOEW2nDfEpoPTJzXstRVNWnc_zpHP25tR63Zo-GHNsMImcrapzZyjnRWmBQVChmAlp-Ita2ZvAZb2iD2W5l1HIrPsnrbx1fFw1O_hhPP7FJ-0Fpzne20ORAJ4F3GYU9TRfHzNTRZ-3T0K9H-SuJNp8Gfxh_pW3BPKlzcDqUnXZY144mAQQYJC1vgn4ELWLchyPQx6mJVW6G1hlkf8WuVCsp_-763wEN7hQlfphobQw',
  
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
  
        'Accept':'application/json, text/plain, */*',
  
        'sec-ch-ua-platform': 'Linux',
  
        'host': 'backend.qa.go1percent.com'
  
    },

    baseurl : "https://backend.qa.go1percent.com"

};
