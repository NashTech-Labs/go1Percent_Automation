

describe('Leaderboard-Rewards API Testing', function () {
    const baseUrl = 'https://backend.qa.go1percent.com';
  
    it('Should give message on redeeming reward', async function ({ supertest }) {
      const accessToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgyMzQ2MjgsImlhdCI6MTY5ODIzMjgyOCwiYXV0aF90aW1lIjoxNjk4MjMyODI4LCJqdGkiOiI2NGExZjZlYy0zMTAwLTQ3YTAtOTQyYi02NjM0ZjQyYmU4MjUiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI2ZmFmNzAwZi05ZTg2LTQwZDQtOTNhYi1lYTI2NGEyZGU0MzUiLCJzZXNzaW9uX3N0YXRlIjoiMDgwY2ZmMTUtODNlYS00YjJkLTkwMDEtOWVjODkxODM2MTgwIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMDgwY2ZmMTUtODNlYS00YjJkLTkwMDEtOWVjODkxODM2MTgwIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.SBVV21jJmvxgJgdPgm67EW03RPzw7nOeLmYS8y4hhLSUPRd85weAy7-FCEXE8ieLnNPPEWpOBKSOVxn8e33Z0TS0wZxATANsOrhQu7LLwLzrxDdoPspu9Vu6x-meFPVmPDjjUCR2Qo2HuVCqpdLjY1_i-5aB7TaSPEbLDnweP6ACJ9Ods3sZSmSRWBdN34NeoIonw4GZTNW0XZ3LFKYRx_ydTfcxhKe4rCkHhP9-cSNIARn8mFrzS31BLRPNieLcjQELZhXOzbmFmiXBtNcvPiL_bn2nAJYLKXfV2C1fBfu5bcjsWOGkh2jWE0ZQB44hYIjvjAhrgigiAoAQsZbZJw";
      const startTime = performance.now();
       await supertest
   
          .request(baseUrl)
          .post("/rewards/redeemRewards")
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
          .send({
              "rewardId":287,"quantity":1
          })
          .set('Authorization',accessToken)
          .expect(200)
          .expect('Content-Type', 'application/json')  // Expect a response with JSON content type
  
          .then(function(response){
              expect(response.body.errors[0].message).to.be.equal('No more quantity');
  
          });
  
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000); // expect for checking the response time
  
      });
  
  
  });
  