//api-test.js
describe('api testing', function () {
    it('get All Rewards', async function({supertest}) {
      await supertest
        .request("https://backend.ntprod.go1percent.com")
        .get("/rewards/getAllRewards")
        .set('source','https://nashtechglobal.qa.go1percent.com')
        .set('Origin','https://nashtechglobal.go1percent.com')

        .set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgxNjY5OTEsImlhdCI6MTY5ODE2NTE5MSwiYXV0aF90aW1lIjoxNjk4MTY1MTU4LCJqdGkiOiJhNGUwYjNjMS00ZTBiLTQwNDYtOGM0MS1hYzFiZDRkOTk3YWIiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtcWEtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjEyY2U5NTRkLWE2NzUtNDRmYi1hNDZkLTk2NjM2MTI2ZTc5MiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXVpIiwibm9uY2UiOiI5MDFmY2E3My1kZjE5LTQwNzctODViMy1kZWE0MjVhMjA2MmYiLCJzZXNzaW9uX3N0YXRlIjoiY2MxNjExNDItNjA0ZS00MDdjLTg2YjItNDYyMjYzMWNhZGY2IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2xlYWRlcmJvYXJkLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9yZXBvcnQucWEuZ28xcGVyY2VudC5jb20iLCJodHRwczovL25hc2h0ZWNoZ2xvYmFsLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9rbm9sZHVzLmdvMXBlcmNlbnQuY29tIiwiaHR0cDovL2xvY2FsaG9zdDo4MDg4IiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC5rbm9sZHVzLmNvbSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiY2MxNjExNDItNjA0ZS00MDdjLTg2YjItNDYyMjYzMWNhZGY2IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBvbmUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0ZW1wbG95ZWUxIiwiZ2l2ZW5fbmFtZSI6InRlc3QiLCJmYW1pbHlfbmFtZSI6Im9uZSIsImVtYWlsIjoidGVzdGVtcGxveWVlMUBuYXNodGVjaGdsb2JhbC5jb20ifQ.Ip0B1MdzxqY0W44Mx6gWdZCRnYwMl3LRNbHHJ0600vqoFClF5NtS_FTcJDoePuDWhrZIuEqJ8AZdkiwIOAEoEiWNRO9k7Rj_MnJZ9APVINdERJmGR3zCPcetya3yjnjaNE0e8vOqZhbRRuhxkcAyR4zI8A5Nrwb15rou6kJQYOzfFW6RD6f4MoqiiRbabgLAI_J6gxQ5NpGnzjk5lI5C_VSg-aeXzDcDnLWnA3kiF1oBGDKKpDeqvRNJP_wtoHPnsMTyHwDqAYw9b_4txWRPnWLjCkH8Ddu9eeURLhMHo5F3F439ST5hi1wjTMBGprPHuYf-PjJijU2dHZmP8r_G-w')

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