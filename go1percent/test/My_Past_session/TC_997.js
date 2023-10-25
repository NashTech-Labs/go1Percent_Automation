describe('api testing', function () {   

    it('No session is availble in my past session', async function ({ supertest }) {

      const startTime = performance.now();
      const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgyMjI5NTgsImlhdCI6MTY5ODIyMTE1OCwiYXV0aF90aW1lIjoxNjk4MjIxMTU3LCJqdGkiOiI1MjhhNzc0Zi1kNGQxLTQ2YTMtODExOS01MGJkMDBkOTkwN2QiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI4YTc4NTEwYi02OWViLTRlNzktOGE0YS0zMGJiYTIxMmNkNjYiLCJzZXNzaW9uX3N0YXRlIjoiNjVmNTJiYmQtYTc1Mi00NTgzLWEyZTctMGY2NDc2MDYwNzc4IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiNjVmNTJiYmQtYTc1Mi00NTgzLWEyZTctMGY2NDc2MDYwNzc4IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.DpTJHL7LXnv1VOWWHG2DmjiIsTJzVO1dQzEYZIuoWiEYAc_OFNirlIwNGmP85MEu47ERfdcrct9ztrpDZ_ihKERW5xZU7FdBTLCxbqDf3PbOr_aTDh7BlgHdghvv4yUEt2WHY_AhWxiNiOPkc54ow-RfYRaQ-nYLkWHuCeP9UHlVAj4N95LUSx_1AtFZ9_GZIzfbNncTDWq6YlMsDdDbJa8KF6svz4O-ILNHShey6W1raFY0-n-1hnWgV0GHPaua8MWfwHPaw3-JoKpLauihJnXo-nI0Xg4iqY2TDr_XOL6sQmRUwLPo5OUGjMQ0Jka5mwVDXC69kzKh7ovqJ1ZlDw';
      const pageNumber = 1;
      const pageSize = 1000;
      const filter = 'Past';
      const response = await supertest

        .request("https://knolx-backend.qa.go1percent.com")
        .get(`/v02/sessions/my?pageNumber=1&pageSize=1000&filter=past`)
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