const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('api testing', function () {
  it('get api test', async function() {
    const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTc4MDA3NzUsImlhdCI6MTY5Nzc5ODk3NSwiYXV0aF90aW1lIjoxNjk3Nzk4OTc1LCJqdGkiOiI1ZGE2ZDQ5Yi00ODc1LTRhNmItYTZkNy04ZTZkZDFiMWU5ZmQiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI2NGMzZDVlMC1mZjkyLTQxZDYtOGNkOS01N2IyNGZhMjE1NTkiLCJzZXNzaW9uX3N0YXRlIjoiMTVhMTQyNjMtZDgzOS00NTRjLWIxZjktNTkxYjdmZTllNjdjIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMTVhMTQyNjMtZDgzOS00NTRjLWIxZjktNTkxYjdmZTllNjdjIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.gQcpNnxRuR-cVHyBtpUbnagp7K65ogO_pSVbPt015TqylLsY4mopbz1qwqJpd1VBbmVp-NUMrcs-b31rTW8jBRGtwhex65fIufHikwrIXHrgTLawrmZbNQFOjHv4HL2Mt_v-5sZ_98V4TGOrJi9Dt0KPt-CluJvWHXP6T5XD-nIEAJ-4mGsEYo6kYXMzjf-P0yCQ2hnzEH3IL7BIUmbfXfwR2aETv_DPHKVpNXJJZEf4LeZO4-kb7i0snZlJ7TxIv0u27dSBTbMZBkUgI_7x7wPXBqzIQQV4hlORdZ3E0ikOYWw3z-O8OqCqwmGMeRDC09OKD5sCbonQhuXO3n4gaA'; // Your access token here
    const start = new Date();
    const response = await supertest('https://knolx-backend.qa.go1percent.com')
      .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
      .set('source', 'https://nashtechglobal.qa.go1percent.com')
      .set('Authorization', accessToken);

      expect(response.status).to.equal(200);
      const end = new Date();
      const responseTime = end - start;
      expect(responseTime).to.lessThan(2000);
  
      console.log("Response status code:", response.status);
      console.log("Response time:", responseTime);
      console.log("Response:", response.body);
  });
});
