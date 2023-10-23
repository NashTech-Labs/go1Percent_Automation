const request = require('request');

describe('api testing', function () {
  let bearerToken;

  const formData = {
    client_id: 'leaderboard-ui',
    client_secret: '8090ed15-4cd1-483c-9fee-2a8b35941852',
    username: 'testadmin',
    password: 'testadmin',
    grant_type: 'password',
  };

  const customHeader = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  it('post api test', function (done) {
    request.post({
      url: 'https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect/token',
      headers: customHeader,
      form: formData,
    }, function (error, response, body) {
      if (error) {
        console.error('Error:', error);
        return done(error);
      }

      console.log('Response:', response);
      console.log('Body:', body);

      // Extract bearer token from the response body
      const token = JSON.parse(body).access_token;

      // Store the token for further use
      bearerToken = token;

      // Display the bearer token in the terminal
      console.log('Bearer Token:', bearerToken);

      done();
    });
  });

   
      
      it('get api test', async function ({ supertest })
       {  
        const customheader= {
            'Authorization':'Bearer Token: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgwNDQwNjEsImlhdCI6MTY5ODA0MjI2MSwianRpIjoiMzlkOWRhOWMtODFiOC00MGU4LWI3YzItZjVhMmNmNDA0OTgyIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmdvMXBlcmNlbnQuY29tL2F1dGgvcmVhbG1zL25hc2h0ZWNoIiwiYXVkIjpbImxlYWRlcmJvYXJkLXFhLXVpIiwibGVhZGVyYm9hcmQtZGV2LXVpIiwiYWNjb3VudCJdLCJzdWIiOiJhNzE5YTJiMi0zY2FjLTRjMTItOTQ1Yi1kNzMzMGE4MTkxMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJsZWFkZXJib2FyZC11aSIsInNlc3Npb25fc3RhdGUiOiIxOTM0ZThkZC02MDc4LTQwNDItYThkZS0yNzEzZTdjMzczZDUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vbGVhZGVyYm9hcmQuZ28xcGVyY2VudC5jb20iLCJodHRwczovL3JlcG9ydC5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vbmFzaHRlY2hnbG9iYWwuZ28xcGVyY2VudC5jb20iLCJodHRwczovL2tub2xkdXMuZ28xcGVyY2VudC5jb20iLCJodHRwOi8vbG9jYWxob3N0OjgwODgiLCJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJodHRwczovL2xlYWRlcmJvYXJkLmtub2xkdXMuY29tIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtbmFzaHRlY2giLCJ1bWFfYXV0aG9yaXphdGlvbiIsImVtcGxveWVlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsibGVhZGVyYm9hcmQtcWEtdWkiOnsicm9sZXMiOlsiYWRtaW4iLCJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtdWkiOnsicm9sZXMiOlsiYWRtaW4iLCJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjE5MzRlOGRkLTYwNzgtNDA0Mi1hOGRlLTI3MTNlN2MzNzNkNSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3QgYWRtaW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0YWRtaW4iLCJnaXZlbl9uYW1lIjoidGVzdCIsImZhbWlseV9uYW1lIjoiYWRtaW4iLCJlbWFpbCI6InRlc3RhZG1pbkBuYXNodGVjaGdsb2JhbC5jb20ifQ.Hb5hkcIVJHBCTcGA0AgAA0kprVTaekh9Gp9yXPaB3-r0_iLzRGivkkMYZp_BWc47KuVSwTCCWHX23xTdxACxf4Mlm_KgmAS6mcJwnXAOtlrnxVfFiiEwhQ1LTEIbQe_2JRx6CzeNp-jrQl04nhU_2h9QXGnu-T_F-HwypmW0pHPVUM1sa9p8FAyJ3NiW0mv0NDtjUoLrU85Fej_vw8okqqmJ9Bt-SZ9E-kXNbAuJIZO0YRELC31XTuZXTwsIZfzRIceTcbEzNnkiPj0HiBA4PMWA_3QEqub7Ne8r00M1C83c7pg42BdxPUx1nRJ9CSsYdm5y5zhQDjUtcETSKJRqZA',
            //'Content-Type': 'application/json',
            'source':'https://nashtechglobal.go1percent.com'
                 };

  
        await supertest
          .request("https://knolx-backend.qa.go1percent.com/v02/")
          .get("sessions/my?pageNumber=1&pageSize=1000&filter=upcoming")
          .set(customheader) // Set your custom headers here
          .expect(200)
          .expect('Content-Type', /json/)
        //   .then(function (response) 
        //   {
        //     expect(response.body.length).to.be.greaterThan(0); // Use response.body to access the response body
        //   }) 
        });

          























});




