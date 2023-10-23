describe('api testing', function () {
    const headers = {
      "authority": "ticket-backend.qa.go1percent.com",
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      //Providing ticket 
      "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgwNjI4NjEsImlhdCI6MTY5ODA2MTA2MSwiYXV0aF90aW1lIjoxNjk4MDYxMDU5LCJqdGkiOiI1NDJhYzkyZS1iMDc5LTQzNGEtYmJhZi1mZmY5MmRjY2Q4YWIiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI3YzUzZjJlZS0wNGIxLTQzY2MtOGYzYS00N2IxNzkwOTM1MzYiLCJzZXNzaW9uX3N0YXRlIjoiM2EzYmUyYTUtY2E2OS00OTUwLWIyODctMzM2MGIxOTIwMzNlIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiM2EzYmUyYTUtY2E2OS00OTUwLWIyODctMzM2MGIxOTIwMzNlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.MgoJ-L-ory76f_8vgIXTATBpQn2ld637tExEwGGefaaL859ZaqQti7HJFXQZf5xFyekBApVC9xzFjeEARKnCeznJbi_Qd4n2d2_v7EWHFcXVGO4PRtL-uKve_7dafvsSbM9Z2da3QhUDu7oC4uQLpePFr4YrUehHD6GPtjCqTdiqpyEnWM2TCe--sbXiPLX381v7emiuq3reMdsorgmR4ck15vX-JzUrdCD1GmBwEf-PVSMCqhGG0cMLxMQRPP48CWa59IFNazzrWhNbnI6xUFvo7-YMIdqK4PaopB_bEf6QFvZAuv-Bp9D1BTBB9Sw2abt0ugXiBW3DLwrAkPSDxg",
      "languagevalue": "en",
      "origin": "https://nashtechglobal.qa.go1percent.com",
      "referer": "https://nashtechglobal.qa.go1percent.com/",
      "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "source": "https://nashtechglobal.qa.go1percent.com",
      "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"
    };

    it('testing update button api', async function ({ supertest }) {
        const payloadData = {
            assignedTo: 'testemployee@nashtechglobal.com',
            category: 'Knolx',
            priority: 'High',
            status: 'Open',
            ticketID: 875,
          };
    //https://ticket-backend.qa.go1percent.com/tickets/update
    await supertest
      .request("https://ticket-backend.qa.go1percent.com")
      .put("/tickets/update")
      .set(headers)
      .send(payloadData) // Send the payload data
      .expect(200)      // Expect a status code of 200
      .expect('Content-Type', 'application/json')       // Expect a response with JSON content type
    });

});