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

    headers: {
        'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'LanguageValue' : 'en',
        'Source': 'https://nashtechglobal.qa.go1percent.com',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTc4MDU4MTEsImlhdCI6MTY5NzgwNDAxMSwiYXV0aF90aW1lIjoxNjk3ODA0MDExLCJqdGkiOiJiM2IwYTYxZi03ZGFiLTQ2ZTMtYWEwZi02Y2Q2MDhkMDk0MzIiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI4YWYwOTRmNy0wZGNkLTQ2YTQtYTk4OS05M2VmYzlhNmZiOTMiLCJzZXNzaW9uX3N0YXRlIjoiZGI4NTBiM2QtNmE4OC00ZWZiLTk5YmItYjA3NDI4MWQ2MDIxIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiZGI4NTBiM2QtNmE4OC00ZWZiLTk5YmItYjA3NDI4MWQ2MDIxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.dLcrSuAI4xTIm-So-hNr-ga7siavNeeNlME0uxdKH4xh0gYRenN_uXOGYT6J-CDu5B-Rr9Lfw9e4GCAs7ftITZEILtMO2FC6sYS8CJGsdjuloYiRgLR-xq6wRf6oAqIW-bp-tdWwtley0WG00Uw8uo3XSlLfIUQbYNjG3Of2rxK5rAfakmii_YYLZVS9stDBUvgoSkFBnB-nMUt8qxgkqKy4GZZXv1ScWZ3TIycfC4TdZAzdClgknLPqOan9a6xMLSE1iG_FQMf8KR3vkrK_GCiISWlI2VMjbiqH8Hgj7e83MX-cNU-6I-95tjxipk_D-E3m3CL8RYUliN0SeOaXbA',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'Accept':'application/json, text/plain, */*',
        'sec-ch-ua-platform': 'Linux',
        'host': 'backend.qa.go1percent.com'
    },

    baseurl:'https://backend.qa.go1percent.com'

};
