//api-test.js
describe('api testing', function () {

    it('get api test', async function({supertest}) {
      await supertest
        .request("https://backend.qa.go1percent.com")
        .put("/profile/updateProfilePic")
        .set('source','https://nashtechglobal.qa.go1percent.com')        

        .set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgxNjYzOTYsImlhdCI6MTY5ODE2NDU5NiwiYXV0aF90aW1lIjoxNjk4MTY0NTQ3LCJqdGkiOiI0OGVjNDNiMy1iZjQ2LTQyY2MtOGRhZS00YTZmZjQwMGVkZGEiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI2ZmUyOWMyZC02MTRiLTRiMjQtYmM3MS03ZmZjNTE4NmRlMDciLCJzZXNzaW9uX3N0YXRlIjoiZGM1MGQ2YzgtMDBkMC00YjY5LTk3ZDYtMDU3MjUxNGMzOWI4IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiZGM1MGQ2YzgtMDBkMC00YjY5LTk3ZDYtMDU3MjUxNGMzOWI4IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.N3bOS3we7SeSkMg1tvlp8OIugMYWQ4rx2xZ6fyIrVmbQMi76pW6WqqqLS9OgFXq22brKdXqIubV3L78mUT1mCx5HAIeq_I9tiuw7nA_Ya1ozII5lbZyS7e06_GK5DfYgvVVyTarObxvJXYJwLVZtbVv4OWB5-N2h2rlGScb2LcHya64EfJBBmCxSPO66g6yWVL2GA7zB784mvM6NP_2JbRR6SlaLgE2BB3Xev-mNp2rR_Zuyl4GpKdnKIlgAqTM9xN0FXeH2bxsDDpoRE--l1kJbq9WyGnZ34FhWCJd64hUU0C1XOxbs87JZDOA65dmkfC3SSXmHscM0066RJ4gy6A')

        .setValue('input[type="file"]', require('path').resolve('/home/knoldus/nightwatch-api-automation/KnoldusLogo.png'))
        .send('emailId','testadmin@nashtechglobal.com')
        .expect(200)
        .expect('Content-Type', /json/)
        const startTime = performance.now();

        const endTime = performance.now();

        const responseTime = endTime - startTime;

        expect(responseTime).to.be.lessThan(2000);
        //.then(function(response){
            //expect(response._body.length).to.be.greaterThan(0);
        //});
    });
  });