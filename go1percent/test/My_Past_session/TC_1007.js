describe('api testing', function () {   

    it('redirect to the Attendance list', async function ({ supertest }) {

      const startTime = performance.now();
      const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgyMzcxMjEsImlhdCI6MTY5ODIzNTMyMSwiYXV0aF90aW1lIjoxNjk4MjM1MDM1LCJqdGkiOiJiYTNiMTAwNy0wNWE1LTQwZTktOTNkMy05YTRkYTk2ZDM1ODYiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiJmMDYyYmE1My1iMzhhLTQwODMtODFjZC04NGUwMDUzMmQ2YmMiLCJzZXNzaW9uX3N0YXRlIjoiZmYzZDNlZWMtMTQzNC00YjkyLTk4ODMtMzgxOWFiYzE1YjYzIiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiZmYzZDNlZWMtMTQzNC00YjkyLTk4ODMtMzgxOWFiYzE1YjYzIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.HALfQ8wBYWroPAOJoe5EgKOZD1jYg7QrRefOPaNGkYTKEMn6G3L4J_qxPw1aWnJ3Oa1Yv8DeCZiQKLNxRnDEXZley9f9EYGCxCivGab0Pr4QUHzjkxfnecbgQ7srI3gIwyVjWKfJY1jKcfJBIXPNmpQXWnXvi1mzj-LUsQQotM5o4bRqN6gE9FG2i3LZfPoMt5WYPW-uoYz6URKZe89nag8RqNtM1MA0IG2ZIKTTwc0beLyK9iCmBjk8DmpHOM1SvQKNcNJyLBfLScNqOMvCapYSufxDVgkcpRLlaGBbM_FM51FJ1aylhk4InIIPc2eegDaW-pCrRYYgrKlKA0sx1g';
      const knoldersOnly = 'true';
      const response = await supertest

        .request("https://knolx-backend.qa.go1percent.com")
        .get(`/v02/sessions/65364ed48555d37c0a4f8dc7/attendees?knoldersOnly=true`)
        .set('source', 'https://nashtechglobal.qa.go1percent.com')
        .set('Authorization', accessToken)

        .expect(200)
        .expect('Content-Type', 'application/json')

        .then((response)=>{
          console.log(response.body)
          const endTime = performance.now();
          const responseTime = endTime - startTime
          expect(responseTime).to.be.lessThan(2000)
        });
    });
});