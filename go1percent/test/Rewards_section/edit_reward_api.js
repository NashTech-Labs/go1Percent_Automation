
describe('Leaderboard-Rewards API Testing', function () {
    const baseUrl = 'https://backend.qa.go1percent.com';
  
    it('Should display update rewards page with particular reward', async function ({ supertest }) {
      const accessToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgyMzY0NjQsImlhdCI6MTY5ODIzNDY2NCwiYXV0aF90aW1lIjoxNjk4MjM0NjYzLCJqdGkiOiJmMjg0ZjJmZS1hYzZiLTQ3OTQtOGVlNS0xYWU4MWZlZTA2ZGQiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiJmYTUzYjY0OC1kMGU2LTQ4YWMtODIwZC1iNmUxNDEwNGRmYzkiLCJzZXNzaW9uX3N0YXRlIjoiOTJhZmJkM2YtMmMyZS00MWJhLTliZTItMjIzYWVhYmExNWUwIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiOTJhZmJkM2YtMmMyZS00MWJhLTliZTItMjIzYWVhYmExNWUwIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.aJK41qBnkPeDGV8Y5RSDWSN5ZGalrlzuRL-9n0pQOxwzdFL_t88-x_CMgwIYKEKZXiKDfBfuODwwZesSXYVXOL9AIdZD3ze-C1_VbNCHXtRD8rVguttssO0XM2S82fniYXp7V2L9dSSdR8aIaewHG-drp7vwaEyIL5GCIP27HRtwX1ZViiCxtcb7Tm7z52JeB-CfrJnJyne1pP2drG49PFb62Wr_QomiNXyMgKKRaEjpdytj5wYSLeBTJZfvYD5M_6hOyAefteI9V1kyo5UqWpz6TMOXvnQBnVD1hlCLJg62K5peGbEFrt_-ovKRdKdwNAHfQ9agMuyMQUd6Fys5DA";
      const startTime = performance.now();
       await supertest
   
          .request(baseUrl)
          .get("/rewards/getReward?rewardId=287")
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
        
          .set('Authorization',accessToken)
          .expect(200)
          .expect('Content-Type', 'application/json')  // Expect a response with JSON content type
  
          .then(function(response){
           
            expect(response.body.data).to.have.property("id").and.to.be.eq(287);
            expect(response.body.data).to.have.property('name').and.to.be.eq('Eardopes');
            expect(response.body.data).to.have.property('pointsNeededToRedeem').and.to.be.eq(1);
            expect(response.body.data).to.have.property('description').and.to.be.eq('eardopes');
            expect(response.body.data).to.have.property('rewardType').and.to.be.eq('Individual');
            expect(response.body.data).to.have.property('quantity').and.to.be.eq(0);
            expect(response.body.data).to.have.property('expiryDate').and.to.be.eq('2023-10-26T00:00:00.0');
            expect(response.body.data).to.have.property('active').and.to.be.eq(true);

          });
  
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000); // expect for checking the response time
  
      });
  
  
  });
  