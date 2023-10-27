describe('API testing', function () {
  it('token generation', async function ({ supertest }) {
    const tokenURl = "https://auth.go1percent.com";
    const requestData = {
      'client_id': 'leaderboard-ui',
      'client_secret': '8090ed15-4cd1-483c-9fee-2a8b35941852',
      'username': 'testemployee',
      'password': 'testemployee',
      'grant_type': 'password'
    }
    const headers = {
      'accept': '*/*',
      'source': 'https://nashtechglobal.qa.go1percent.com',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    const response = await supertest
      .request(tokenURl)
      .post('/auth/realms/nashtech/protocol/openid-connect/token')
      .set(header.admin.tokenHeaders)
      .send(requestData)
      .expect(200)
      .then(function (response) {
        const token = response._body.access_token;
        header.employee.headers['Authorization'] = 'Bearer ' + token;
      });
    it('get api test', async function({supertest}) {
        await supertest
          .request("https://backend.ntprod.go1percent.com")
          .get("/rewards/getAllRewards")
          .set('source','https://nashtechglobal.qa.go1percent.com')
          .set('Origin','https://nashtechglobal.go1percent.com')
  
          .set('Authorization', '')
  
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
      it('get api test', async function({supertest}) {
        await supertest
          .request("https://backend.qa.go1percent.com")
          .get("/get/knolderId?knolderEmail=testadmin@nashtechglobal.com")
          .set('source','https://nashtechglobal.qa.go1percent.com')
  
          .set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgyMTE1MzYsImlhdCI6MTY5ODIwOTczNiwiYXV0aF90aW1lIjoxNjk4MjA5NzM2LCJqdGkiOiIzZDcxMDRjNS05MjlmLTQ0MDQtOTZmMy0zZDRiOTNjYTA0MmYiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI3ZWI2YzYzNS0yOWZjLTQ0NDAtODM5Mi03NDkxZjc0MGE5OWIiLCJzZXNzaW9uX3N0YXRlIjoiODM4MmZmNjItODA4Ni00MzRkLWFkZjItNmQ2MTNmOGQyOGZkIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiODM4MmZmNjItODA4Ni00MzRkLWFkZjItNmQ2MTNmOGQyOGZkIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.GkBnH8xvMSU4hJYtoPV_-7xaA3JWcQq0cuSr2pViDZa9CIjLIJf9X_pTUPbEP4Oa4Tq4DQZt1t60U7mLa4SL_x87Pn07yLPDHT_r7pLB30YaA1UkrVKbzjdFm-xtFqKGtHDON89ZPqmnaK_StjV2CMJR7DLvPZiCYxiIKyiZNQ5sfelifYvywayHLehF6S_HV62tTUnNP3KAdaXDsAT0tNdsYdeFHOk2_win4OnlX8QFdiRQ_dZVj8i5dl4UiPUbqD83vBxbHomrGVtsUUNdfFJ3jj8rhLpyVtsJUj6B8Mp5PJ-QRkjRF7f6abWuGQlFM_oZeR4-poefoAQYnHN0QA')
  
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
      it('get api test', async function({supertest}) {
        await supertest
          .request("https://backend.qa.go1percent.com")
          .get("/profile/getProfilePic?email=testadmin@nashtechglobal.com")
          .set('source','https://nashtechglobal.qa.go1percent.com')
  
          .set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgyMTE1MzYsImlhdCI6MTY5ODIwOTczNiwiYXV0aF90aW1lIjoxNjk4MjA5NzM2LCJqdGkiOiIzZDcxMDRjNS05MjlmLTQ0MDQtOTZmMy0zZDRiOTNjYTA0MmYiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI3ZWI2YzYzNS0yOWZjLTQ0NDAtODM5Mi03NDkxZjc0MGE5OWIiLCJzZXNzaW9uX3N0YXRlIjoiODM4MmZmNjItODA4Ni00MzRkLWFkZjItNmQ2MTNmOGQyOGZkIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiODM4MmZmNjItODA4Ni00MzRkLWFkZjItNmQ2MTNmOGQyOGZkIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.GkBnH8xvMSU4hJYtoPV_-7xaA3JWcQq0cuSr2pViDZa9CIjLIJf9X_pTUPbEP4Oa4Tq4DQZt1t60U7mLa4SL_x87Pn07yLPDHT_r7pLB30YaA1UkrVKbzjdFm-xtFqKGtHDON89ZPqmnaK_StjV2CMJR7DLvPZiCYxiIKyiZNQ5sfelifYvywayHLehF6S_HV62tTUnNP3KAdaXDsAT0tNdsYdeFHOk2_win4OnlX8QFdiRQ_dZVj8i5dl4UiPUbqD83vBxbHomrGVtsUUNdfFJ3jj8rhLpyVtsJUj6B8Mp5PJ-QRkjRF7f6abWuGQlFM_oZeR4-poefoAQYnHN0QA')
  
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
  });