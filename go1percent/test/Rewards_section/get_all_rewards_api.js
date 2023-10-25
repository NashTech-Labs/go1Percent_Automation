const global = require('../../globals')
const headers = global.headers;


describe('Leaderboard-Rewards API Testing', function () {
  const baseUrl = 'https://backend.qa.go1percent.com';

  it('Should get all rewards', async function ({ supertest }) {
     const accessToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgyMzE2ODYsImlhdCI6MTY5ODIyOTg4NiwiYXV0aF90aW1lIjoxNjk4MjI5ODg1LCJqdGkiOiJmMzdiZWI4Yi0yZTFhLTQ0ZmUtYTM2OC02MTMxYTY4OGEwNDkiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiJlNGE1ZGZmOS0yYzc1LTQ1ZmUtYTVjZi0yMTU5MmJlZWNhOGIiLCJzZXNzaW9uX3N0YXRlIjoiYzVlNWZhNTQtZjA4NC00N2Y2LWFkYzUtNzQ5MTQwNmQ5ZGMyIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiYzVlNWZhNTQtZjA4NC00N2Y2LWFkYzUtNzQ5MTQwNmQ5ZGMyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.WY4vw4WOOSueBpEfIw1X-_hyxBDOfvNDmHg7EPgbybi8af0p1vO_qdDliUfOOSc5hT4FbfFKSEPtlmAE6IPn_SbZkcNHLqV7IL7CXLS_U0GdyF235Hcl5SOIABS8XT411YZRNhRUfAIMJbKXt7F7Z8MyLHJeVCz8kYs_U5N4j-KdjsTAJs9CBQ8Nf35GDswQ8ktunQXkA565Q4Yyl-m4tpMhycfeJPbYVwjYfFE5UhFI9gM0R6EfE0eIrHpfKHe8Tr0mh6PpnXrQgsN9-uzU33HhH_AnHsi-JPB4uY51cBnTT4n9_I3SNHyp2aQEd4tmSFhCqdTwupyxRbBb9YhR-w";
     const startTime = performance.now();
     await supertest
 
        .request(baseUrl)
        .get("/rewards/getAllRewards")
        .set('source', 'https://nashtechglobal.qa.go1percent.com')
        .set('Authorization',accessToken)
        .expect(200)
        .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

        .then(function(response){

          //The test then checks the response body for the presence of specific properties such as "name," "pointsNeededToRedeem," "description," "rewardType," 
         //"quantity," "expiryDate and" "active ."

            expect(Object.keys(response.body).length).to.be.greaterThan(0);
            expect(response.body.data).length.to.be.greaterThan(0);
            
            expect(response.body.data[1]).to.have.property("id").and.to.be.eq(290);
            expect(response.body.data[1]).to.have.property('name').and.to.be.eq('Poilk');
            expect(response.body.data[1]).to.have.property('pointsNeededToRedeem').and.to.be.eq(900);
            expect(response.body.data[1]).to.have.property('description').and.to.be.eq('testing');
            expect(response.body.data[1]).to.have.property('rewardType').and.to.be.eq('Studio');
            expect(response.body.data[1]).to.have.property('quantity').and.to.be.eq(6);
            expect(response.body.data[1]).to.have.property('expiryDate').and.to.be.eq('2023-10-28T00:00:00.0');
            expect(response.body.data[1]).to.have.property('active').and.to.be.eq(true);

            

        });

      const endTime = performance.now();
      const responseTime = endTime - startTime;
      expect(responseTime).to.be.lessThan(2000); // expect for checking the response time

    });


});
