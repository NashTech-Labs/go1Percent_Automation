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

        'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTc4MDY4NzAsImlhdCI6MTY5NzgwNTA3MCwiYXV0aF90aW1lIjoxNjk3ODA1MDY4LCJqdGkiOiI4NDJlMDAyMC01ZWZlLTQzNTEtOTViMS1lNDRlMWQ1ZjMxODEiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiJhMTcxYmRiZC1mN2Q3LTRmOTItOGQyNy04MWJhNjUwMjNlOGIiLCJzZXNzaW9uX3N0YXRlIjoiNTc1NzEzYjUtNzFhMS00NjkzLTliNzYtNjk3OGYwMjYzOWZhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiNTc1NzEzYjUtNzFhMS00NjkzLTliNzYtNjk3OGYwMjYzOWZhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.GVbE31SRgXiWEJ5V4RQwp2Q2rN9o1CL7lCOxNbSbPU6BczHHi2oFq7d_G2ndygxlS9R2OsXM_fo6Y32SBPpoCYngNzXbW090_6QMt45aanTqanW6qFSuCGWFoEsMjVIGG_4n0adawHutK3wzBf3PoXyThZ1pFlSCAnrybGb84DbdM5dwj1M-5De2Nu5osjmAM4qpnQFcwdRaHnWP5stz3HhVJ-Ct86kCV8v_NMJeESWMwOJ99LedIOKAlV8c6b-bzbKa9w8BSJKcAHknDgnnzsSdRQCZKQfxkDpcWEh6b8hlguduVS6arb39t1aJ8IjFyJlYgk2aZo3-_y4jvcEFkQ',

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
