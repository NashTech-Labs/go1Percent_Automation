describe('api testing', function () {
    const headers = {
      "authority": "ticket-backend.qa.go1percent.com",
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      //Providing token
      "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgwNTYzNDMsImlhdCI6MTY5ODA1NDU0MywiYXV0aF90aW1lIjoxNjk4MDU0NTQyLCJqdGkiOiJkNjA0NjQwMC00ZDdhLTQwZGUtODI2Ni0xY2UyZjhkZDVmMzEiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6IjgzYjAzNGY1LTg2NzUtNGQ5NC04NDQ0LTg3ZjZlYTk4YzlhYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiI0YjFhZjg4NC0wOTczLTQxODQtODRkMS1iZTBjOTA4YWFkOWUiLCJzZXNzaW9uX3N0YXRlIjoiZmFlYzFhMDctMzMyNy00YWQwLTk5N2YtYzM0NzdmZTk4NmI2IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJsZWFkZXJib2FyZC11aSI6eyJyb2xlcyI6WyJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiZmFlYzFhMDctMzMyNy00YWQwLTk5N2YtYzM0NzdmZTk4NmI2IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBlbXBsb3llZSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RlbXBsb3llZSIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJlbXBsb3llZSIsImVtYWlsIjoidGVzdGVtcGxveWVlQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.X-tm2eeshrWA7o2ryCBCiqf_2o1q5--o55DFD1VnZfvUF8bbut7fWUkl_9Kctnscndf5y06ZxmAnq_1fsez8JuwfN9oRkmAyBuJJGB8EeN8ERIhlF_fsa_Qzea2nReRQEd8PhuPy2u39VqhOWc54waxIg633gHbtbvEcF0nQjoKiYg2M50UCQCUNNrhpir4z9BCVAd9zCV1FRfa7XGfEOfKKvL45c66iusVzp3zw-wJtUixwL8BLf3FkYnjAZ_bFl08sje5k4l7NMGQUjMBFQPqZApPqacX7equ2v-mkHv91qnHJ3-hTTFMSFlYB8zCYxJ3OisNK_HqarZ6lRnxinw",
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
      it('testing 875 api', async function ({ supertest }) {
    //https://ticket-backend.qa.go1percent.com/tickets/ticket/875
    await supertest
      .request("https://ticket-backend.qa.go1percent.com")
      .get("/tickets/ticket/875")
      .set(headers)
      .expect(200)      // Expect a status code of 200
      .expect('Content-Type', 'application/json')       // Expect a response with JSON content type
    });


});