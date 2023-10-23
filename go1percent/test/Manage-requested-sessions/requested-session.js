describe('api testing', function () {   
    it('admin should able to see the available requested sessions', async function ({ supertest }) {
      const startTime = performance.now();

      const accessToken ='Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgwNDU1NjUsImlhdCI6MTY5ODA0Mzc2NSwiYXV0aF90aW1lIjoxNjk4MDQzNzY0LCJqdGkiOiJjMWE1NTBmMy05NGIzLTRiZWUtYTBjYi1kNmFjMzdmZmZkMDQiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiJjMmE4Mzc4OS1iNWE4LTQ1MDItOGUyNC1kNTk1ODA4MDlmOTYiLCJzZXNzaW9uX3N0YXRlIjoiZWRmYTMwY2UtMmFjNC00YjM1LWIwZjUtMDc5OGU0ZTJiNDY4IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiZWRmYTMwY2UtMmFjNC00YjM1LWIwZjUtMDc5OGU0ZTJiNDY4IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.JCUZT-athwgeG1riKCxA_oxplzQOsH0EYHwaTPEpsTswDSGkc4eZb6TO50dYRo0_ytSBf0vlGpycD-Re0_WKcIlV03QzoLA4NmE2g86g4L5u6kU0XtsMdzc49N-Pe4PZmt5TOq3SlUbP8wBPCwEgdx2Sh7eTKyS_UY8ZIFr0BJmVcGY-o-zercVDxCvNP5dsv3qFtamSTLb1lOwUtbz5elquikwGUAvpB5VRStro1d9w4lDFs2ziRvDIjqDQqf3CqF7kmiGADskNTTNo5C7NtmQPICHV81aOA0niprZhM_hrvR7UXyD1jNAfWodfLdqNxA-qRIvBJ1Dm8l11dBiAJA';
      const pageNumber = 1; 
      const pageSize = 10; 
      const filter = 'requested'; 
      const search = '';
  
      const response = await supertest
        .request("https://knolx-backend.qa.go1percent.com")
        .get(`/v02/sessions/manage?pageNumber=${pageNumber}&pageSize=${pageSize}&filter=${filter}&search=${search}`)
        .set('source', 'https://nashtechglobal.qa.go1percent.com')
        .set('Authorization', accessToken)
  
        .expect(200)
        .expect('Content-Type', 'application/json')
        
        .then((response)=>{
          console.log(response.body)
          const endTime = performance.now();
          const responseTime = endTime - startTime
          expect(responseTime).to.be.lessThan(2000)

          console.log(`Elapsed time in milliseconds: ${responseTime}`);
        });
    });
});