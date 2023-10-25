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
        
    "authority": "backend.qa.go1percent.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgyMTUyMTAsImlhdCI6MTY5ODIxMzQxMCwiYXV0aF90aW1lIjoxNjk4MjEzNDEwLCJqdGkiOiJiYjk1NGNlYy01MTUyLTQ1ZWQtYThkNi05MGEyMDM4ZDhjNDQiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiIzM2IyMTk3OS0yNTc2LTQ3MDgtOWMwNy1kODJmYzIzN2VkNTkiLCJzZXNzaW9uX3N0YXRlIjoiNTdkNTFhYWItZWYyZi00NDBkLTgzZTgtNWE4OGJiNjY1NGVjIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiNTdkNTFhYWItZWYyZi00NDBkLTgzZTgtNWE4OGJiNjY1NGVjIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.C2ziQ5F82ldKjfyUbE0tE1Issps97ED04YX10e6yjjzCMU23-F3jgYEC4msbo73799dSz-Wo6zPdWSMQhu3UMX8jO4aHhYRKJw7G-8l-K8uIhzTIWpDEZsRMU5-eBxW9jkjYv1HDtyLf5lJs2eBp_FjKJ7akeYz3-4QATafbaix2VFcb90Mb5dgryEj5L8iNoCt9__BJF3c1CTIlyO9Zau7ddzcMYmzxRE3NHSnVej_zmNCMugNrNeMRpLUhhCziO6z7jfNUiDVhjiSl71nTyXZ30zsy91wknfISgwhUjGcK8LbURbUecHJLeUul9rzCAveIolDSMPm0GKZp7GqTew",
    "languagevalue": "en",
    "origin": "https://nashtechglobal.qa.go1percent.com",
    "referer": "https://nashtechglobal.qa.go1percent.com/",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "source": "https://nashtechglobal.qa.go1percent.com",
    "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
  
  
}
};


