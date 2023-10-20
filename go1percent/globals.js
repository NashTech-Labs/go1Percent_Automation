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
  
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTc4MDkzNjAsImlhdCI6MTY5NzgwNzU2MCwiYXV0aF90aW1lIjoxNjk3ODA3NTU5LCJqdGkiOiI3MmVmM2I1Zi1hYWNhLTQ1MGEtYTkwNS00NzYyYmQ2Y2U4ZTkiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiJkZDc5YzFhNC1jMDI4LTQ1NjItOTE3Yy02M2JlZTAyNmVkMGIiLCJzZXNzaW9uX3N0YXRlIjoiNTgyYWQzZjAtYmNkYy00MWU2LThjN2UtODk2OGI2ZThhN2VlIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiNTgyYWQzZjAtYmNkYy00MWU2LThjN2UtODk2OGI2ZThhN2VlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.dvJGE_6ryYhjFWzf1rSRWtNLZ0PSFfvNMDc2nkZ4DfiCoOmf3cYA3t8nGFKI_tofbwLp5M_MKqr2DFatlpCnKwDjYwDgNtpLsEjxoPy_72JYEuCGo-ZtL_fmvopcPD-h6LzmHHjyG5BMRHTJUZy4ToqicMRpnv87DY0SSQi2byqgf3Bz54JAy1XoqZOCPUT-saZ2KPnuQEBIw1Qq2Cud9BMjlLptxBgxDlSqlLp17cotq2e0y1qT9O5FKyYMBaMVJsUUaZsZsMUjGZhAjgQz_pw9VFZZvA-0spewepJyG5sm4nYZBPctUwu3veT-hNXdgKhPlpMDiML5UXalkBz5sQ',
  
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
  
        'Accept':'application/json, text/plain, */*',
  
        'sec-ch-ua-platform': 'Linux',
  
        'host': 'backend.qa.go1percent.com'
  
    },

    baseurl : "https://backend.qa.go1percent.com"

};
