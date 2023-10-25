//api-test.js
describe('api testing', function () {
    it('get api test', async function({supertest}) {
      await supertest
        .request("https://backend.qa.go1percent.com")
        .get("/profile/getProfilePic?email=testadmin@nashtechglobal.com")
        .set('source','https://nashtechglobal.qa.go1percent.com')

        .set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgwNDUyNjksImlhdCI6MTY5ODA0MzQ2OSwiYXV0aF90aW1lIjoxNjk4MDQzNDYyLCJqdGkiOiI1YjQ1ZjkxNi0wYzM0LTQxNDUtOTQ2Zi05YTg3ZDgzMmFhNjYiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiIzMjI5Y2Y3YS1lYTEyLTQ3YzUtODVjMi1kOTJkMDY4ZGY2NmMiLCJzZXNzaW9uX3N0YXRlIjoiMmEwZWJhMDAtNjMwZi00NTFkLTkyZGQtYThlMTM4YWNiYTc5IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMmEwZWJhMDAtNjMwZi00NTFkLTkyZGQtYThlMTM4YWNiYTc5IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.NMFwVUDX9z7kFPIHNyRnA9z95HqpfAF2GxiE_4lyiJH6P0p5nvgH25k7vk4mFkb4kPvm3VE-wa-L6ViUnjHr4OkhOqyaKS9skl1FM0skd9WLuwkPsynZ1rrYoMsd27wywpoHoRsYRQHd00Gb-bKW_TU5mT_ymvbZN3xKCsF9Wz-RyQiUEvWxJw0I_uHETsurLbCPA-20pOKyJv8Fv0lBHcBnd6HA3xvH5h95FwbZRJw7d4SdaGQSVQoLBwx9LBcNPEK5sCgTECWZNeNgwya7ZEdoGMueGEHn8GPl13CYy2nDEjzdKEGipPXvERGriLn2meq1Ea9LYV9bbm5q9-r7zw')

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