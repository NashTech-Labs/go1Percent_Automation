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

    // headers: {
    //     'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
    //     'LanguageValue' : 'en',
    //     'Source': 'https://nashtechglobal.qa.go1percent.com',
    //     'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgwNTcwMzYsImlhdCI6MTY5ODA1NTIzNiwiYXV0aF90aW1lIjoxNjk4MDU1MjM2LCJqdGkiOiJhNzE0MDIxNS0xY2Q4LTRhNWUtOWY1ZC1hZWY5ZWI4YzBmNWIiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiJiNGFjMzVkYi0wMzY3LTQwMjctODJlNS1mYTMwZDIyYjAwMmEiLCJzZXNzaW9uX3N0YXRlIjoiMTI0OGViNTQtZjhjYS00YjZmLTg0ODgtNjFlM2M0OGMyZTU2IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMTI0OGViNTQtZjhjYS00YjZmLTg0ODgtNjFlM2M0OGMyZTU2IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.SRzY7ghGjKSsQx0CY8I5KgMq0oY9nSISFDuEt7-bFK7Lqt85H56-jlCg_JB-7BI0hs1483t8Yxvz0pAeh8tCqe_9tvEri7VQfgGnS_Rr8JOqRfpDPmuDJavG37G6bj2-Pl9jr1Zm5xHlDX71EGFWC6SGxoyokAVTCeu-IKXTAiCWydgUUgoqyNZRWhnCiVm1CTixnFUHGCgLqwyXYlcdukeghkxQVunXN-c0qMM0_2r9GNIjIEPEYF47ZrUfMPNXMXPJVsbDb8xpQIjgXrny9lliOa-Gu1C9c5z23rC8Qe0E3uDmCdWFkqFpwcuWSEj5z67gGVn87psEi4ZE7NhfbQ',
    //     'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    //     'Accept':'application/json, text/plain, */*',
    //     'sec-ch-ua-platform': 'Linux',
    //     'host': 'backend.qa.go1percent.com'
    // },

    baseurl:'https://backend.qa.go1percent.com'

};
