const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('api testing', function () {
  it('records test', async function() {
    const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTc3OTg5NzAsImlhdCI6MTY5Nzc5NzE3MCwiYXV0aF90aW1lIjoxNjk3Nzk3MTY5LCJqdGkiOiJjOTIxOWU1Ny03MTViLTQxNGYtODhjMi01MjFlMjhmZDBiODgiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiIwYTFkOWZkYS1jNTY2LTQxMGQtOTA0ZC1mZTI3YWQ1ZjY2ZDgiLCJzZXNzaW9uX3N0YXRlIjoiNjQxOTVhMWYtMTQ1Mi00ZTJhLThhZWEtYWE4ZjgxMWNmMjk1IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiNjQxOTVhMWYtMTQ1Mi00ZTJhLThhZWEtYWE4ZjgxMWNmMjk1IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.WAU_nmT9Fl3QMsDI7uJgRjHExZUXmmJcAFoifHZpDQSy3kGNv6eBqeLzvseVqmR89PpFIfWrkyIxF1S5-7KmdZyi4JQKIp7hxuriKqOxt6S9qr3UqS2ywvCGleUYD0yiq7xH6bMmZrrrf46eU6eGBaQLqbJMnhKTreIfaBHa2LtMyr8IA6vkKvbZ3zUnIJWxfoW8tX3vwT4giQS2aIYjNZaHuXVzopLKcFXB2t3JfUSxMoGg-8vPlXXCjBX3AJjRbAQ13C_uKJpdtgv9zwtljnS6tMBkDKTNR9QmEqfasl1-Pg9690jylMuKlYqOzRR55EG9WYOKE43zFjc8PKPskw'; // Your access token here
    const start = new Date();
    const response = await supertest('https://knolx-backend.qa.go1percent.com')
      .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
      .set('source', 'https://nashtechglobal.qa.go1percent.com')
      .set('Authorization', accessToken);

      const end = new Date();
      const responseTime = end - start;
  
      console.log("Response status code:", response.status);
      console.log("Response time:", responseTime);
      console.log("Response count for page:", response.body.count);
  
      expect(response.status).to.equal(200);
      expect(responseTime).to.lessThan(2000);
  
  });
});
