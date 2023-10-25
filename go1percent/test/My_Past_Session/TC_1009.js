describe('api testing', function () {   

    it('admin should able to see the available requested sessions', async function ({ supertest }) {

      const startTime = performance.now();
      const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgwNzU2NTMsImlhdCI6MTY5ODA3Mzg1MywiYXV0aF90aW1lIjoxNjk4MDczODUxLCJqdGkiOiIxNWY2OWJkMi1iNjFhLTRkZjMtOGVkNC03MjU1MTk2YWMxNDAiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI4MTE2OTkyNi0yZWFkLTRkZDctODJkOS1jZDBjODM2MTk4YzciLCJzZXNzaW9uX3N0YXRlIjoiYjUxODNiMGYtMzZiZS00NGQxLTlkZDgtZmIwMDg1MGUzYjNjIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiYjUxODNiMGYtMzZiZS00NGQxLTlkZDgtZmIwMDg1MGUzYjNjIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.A90fgoKck3iRof0ZI90XXQrvjDm8QWyXNWoPmfCpBivLoWZ3AZIhcqcKKRaLC36Bkgn-eglNxTFnmhry7SS4R_ld8KRQz6kNcU25EBmeQjY0v4dPH6b7oh55YdyDL9WupzllBIqpl0-yDK_OxSZBIsGmc_pfvj7RF1yg_SzpDEWhD9xzoZOyAj5t1qiNYBJV-XR807sRo8LXwzW0k1kiS7k7pVkX7fYpRRkzTLELQtYjQHzvyibIMUUz75xq9kYCTO9js31HClUkc-FCOmKpTywZ-oh6TgQ4GLc_wXRN5RxhgU40TS05Xv1r2_fnlblKKYV4FWhPB3rtzsW6JJ5Tgg';
      const sessionId = '6529144d45bc9a797dfbcb19';

      const response = await supertest

        .request("https://knolx-backend.qa.go1percent.com")

        .get(`/v02/score/session?sessionId=6529144d45bc9a797dfbcb19`)

        .set('source', 'https://nashtechglobal.qa.go1percent.com')

        .set('Authorization', accessToken)

  

        .expect(200)

        .expect('Content-Type', 'application/json')

        

        .then((response)=>{

          console.log(response.body)

          const endTime = performance.now();

          const responseTime = endTime - startTime

          expect(responseTime).to.be.lessThan(2000)

 

          // console.log(`Elapsed time in milliseconds: ${responseTime}`);

        });

    });

});