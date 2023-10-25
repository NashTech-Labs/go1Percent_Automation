
describe('APIs testing', function () {   
    it('Employee should able to use tags', async function ({ supertest }) {
      const startTime = performance.now();
      
      const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgwNzM2MTEsImlhdCI6MTY5ODA3MTgxMSwiYXV0aF90aW1lIjoxNjk4MDcxODExLCJqdGkiOiI4MzQ1ODhlZS04M2MwLTQ5ZjYtOTRmMC1jYjM2ZTQ4MjI4NjgiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI4OWQ0MjI1My04NGYzLTQyYWQtYmNmMC1jNjMwZDI3NmI3MTMiLCJzZXNzaW9uX3N0YXRlIjoiZjRlYTc1YTItMDM2NC00ZDM4LWIzZDctZDI1Nzg1MDJhMGUwIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiZjRlYTc1YTItMDM2NC00ZDM4LWIzZDctZDI1Nzg1MDJhMGUwIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.OPkSVLZWnn1YQJOSYbf1bwTzpG54eNiu3ysV8peKiKqNGXwWzJohjF9Z48E8iJe1NiFS87bJ08_N9BahC7MjwGX0n2XxcrC_JiYkQFQNyp5AGPjwqzVeN6OqJ9oROM0LRkvseoPHgWGfFrk1jeCm82huvVHEgGjsotwyp-rL_ZSGdW2bUlw6P9NuuZvrrzEjrhqvlsDjMJ_kJ6u4uZYQVpQQtyZco6jofj21tG2ndAz8GD7htuoA02uiOCyCqqbHfJAtMEQiP74LqxeNIMyenjOMYiPK2-FRkNIgfhPEYgx7O3FL0QB2EGH3AN4yQXg_jKndAqLys4dM_nd0bov3mg';
      const response = await supertest
        .request("https://knolx-backend.qa.go1percent.com")
        .get('/v02/getSession/6529144d45bc9a797dfbcb19')
        .set('source', 'https://nashtechglobal.qa.go1percent.com')
        .set('Authorization', accessToken)
        
        .expect(200)
        .expect('Content-Type', 'application/json')

        .then((response)=>{
          console.log(response.body)
          const endTime = performance.now();
          const responseTime = endTime - startTime
          expect(responseTime).to.be.lessThan(5000);
        });
    });
  });
  
