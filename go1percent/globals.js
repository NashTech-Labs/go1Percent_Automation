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
    // headers:{
    //     'authority': 'backend.qa.go1percent.com',
    //     'accept': 'application/json, text/plain, */*',
    //     'accept-language': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTc4MjAyNjQsImlhdCI6MTY5NzgxODQ2NCwiYXV0aF90aW1lIjoxNjk3ODE4NDYzLCJqdGkiOiI4ZjJmYmViYy05NmEwLTQ2NjEtOWMyZS1jODc3NGI5YmY1NTkiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiIxMDk1YWY1YS04NjgzLTQ2MTMtODg3Mi1hNDU0OGJkMGMwYTgiLCJzZXNzaW9uX3N0YXRlIjoiZDFmY2VlZTAtZWE2Zi00ZTRjLWI4MTMtYzMyODg5ODlmMTgyIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiZDFmY2VlZTAtZWE2Zi00ZTRjLWI4MTMtYzMyODg5ODlmMTgyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.byGZr8XkgdbGUS7PItuApsldleAG3cdppRJWveL4jO8XVpExSA-uOAhcPfGZr2PEOv5ZJLHtMVJe8bpiC1Nb90yx1WfwmZBGIQHKf7yJUurngmWxtncwzPZHZOFmnrXldHO5TLs_SHEAwriz4QPHefTQV57msEOyLSQpVTn7O_rE4ZaCzh7AvYhS0_M7fpJt9saxdQ3ktyjAnv393T595In9jdsNcaHGwLBlAjTMt3FPiJ_ToMpTk7EzNyjpKFRsRQ3MqrT2AlNqoayoSmtwgBsQZp7GTzavwmtU0GFqsppbSbLxpjTY2k0cU_Blz7obs3Xfy5ujFWvwbMYefGgC2Q',
    //     'languagevalue': 'en',
    //     'origin': 'https://nashtechglobal.qa.go1percent.com',
    //     'referer': 'https://nashtechglobal.qa.go1percent.com/',
    //     'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    //     'sec-ch-ua-mobile': '?0',
    //     'sec-ch-ua-platform': '"Linux"',
    //     'sec-fetch-dest': 'empty',
    //     'sec-fetch-mode': 'cors',
    //     'sec-fetch-site': 'same-site',
    //     'source': 'https://nashtechglobal.qa.go1percent.com',
    //     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    //   }
      headers:{
        
            "authority": "backend.qa.go1percent.com",
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTc4MjU5NTMsImlhdCI6MTY5NzgyNDE1MywiYXV0aF90aW1lIjoxNjk3ODI0MTUyLCJqdGkiOiIxMjRjNDhhYy1jNWI2LTQ5YTItYTcwNi1lYmM3MWRmZWQ5ODQiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiJjMmY0OTZiYy05NjM5LTRhMDctOTY4MS05YjNjOGIzY2IzMDAiLCJzZXNzaW9uX3N0YXRlIjoiYjYwYzk0OTAtNzMwYi00Y2Q4LWJiZjktMjk1ZjQ3M2FkMDk1IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiYjYwYzk0OTAtNzMwYi00Y2Q4LWJiZjktMjk1ZjQ3M2FkMDk1IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.HmMrpZhta4s2kcAi3POQuxScDOF45gXCoPvARLe3tID3pq9UpnY1RLAHNEnEIUtG2dp7hYRh4_MtJVC71ssEy6TzppLL1CHQrU3lnc5hXGk0P26MtGwhZMWlxSS80lvQ7edjGf0hf7kGygr7esehhVb_BuWZhydimXdlywcVL91mo5736kF4AHCQr3n6r1nRYtPhUNQe_ZsOobvjddqF1nHWbdoZVrgU0cMwxVVXkueZ5OvLYi-EDJD9I3-S5FE-lAS_e4IKhK4wX5nAROVDC7SGq9ZWxkwphxE8vh9pDGHzp0oG8voLldmsFk-moMlAW5iE38zc3U9MTXcEyZdlAQ",
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
