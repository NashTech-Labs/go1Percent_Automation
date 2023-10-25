//api-test.js
describe('api testing', function () {
    it('get api test', async function({supertest}) {
      await supertest
        .request("https://backend.qa.go1percent.com")
        .get("/get/knolderId?knolderEmail=testadmin@nashtechglobal.com")
        .set('source','https://nashtechglobal.qa.go1percent.com')

        .set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTc5NjUwOTEsImlhdCI6MTY5Nzk2MzI5MSwiYXV0aF90aW1lIjoxNjk3OTYxMzQxLCJqdGkiOiJlNDdmM2YwYy03NTIzLTQ3YzAtODMyOS03Mjk3NWRmNTE2ODEiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI2ZmYxMGFmYi0xYTE4LTQ5MmItODU1YS1lMGViMGRhYTNlOWYiLCJzZXNzaW9uX3N0YXRlIjoiOGI0M2ZmZTktMjIwNS00MmIyLTkyNDUtOGFiNjBmZjY4ZTZhIiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiOGI0M2ZmZTktMjIwNS00MmIyLTkyNDUtOGFiNjBmZjY4ZTZhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.KLlGY4bYJGhs0mCsCb-GJnUObX_hgvZu3pNMeTW3oakCt33O8Ur0jKgrQGjyFzyloC9WOZgtl_KOSiupj7P_3Nm-oVm-EUCngdJ8Fx2XoTDMemk0rMV8_c0kV_RIONwuKCD8fPBcLDP2XLRP1bxSOPSYFVRxjGkMKh3FbsHr3e2QN0Nr3_fYiLojKW_5jQuRQSc4WDPiF4DykTohC6pQ_4vGIAPTKJDdVBkvDAng9nzIufSCimHpbjfraV8-kBEPbVGV-8GgLwEZtdlEM7oHH1hijcbo0B0SfoBBq3xnks0HtaUjzBfpiWW6lBTOHzk3stwPhoE0zrAIK7qTbUOfFw')

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