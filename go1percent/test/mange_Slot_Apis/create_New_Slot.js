const newSlotPayload = {
    slotType:"Knolx",
    dateTime:1698237000000,
    "slotTitle":"Api Testing",
  };

  const data = {
    
        slotId: '653276978555d37c0a4f8da9',
        slotTitle: 'Api Testing',
        dateTime: 1698237000000,
        slotDuration: 45,
        bookable: true,
        createdBy: 'testadmin@nashtechglobal.com',
        createdOn: 1697805975586,
        slotType: 'Knolx'
      
  }
  
  describe('api testing', function () {
    it('create a new slot', async function ({ supertest }) {
        const startTime = performance.now();

      const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTc4MDc3MzAsImlhdCI6MTY5NzgwNTkzMCwianRpIjoiMTlkNGIyMjgtYmZjOS00ZTg4LWEwZTAtZDI0ZTI0ODEyMGY5IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmdvMXBlcmNlbnQuY29tL2F1dGgvcmVhbG1zL25hc2h0ZWNoIiwiYXVkIjpbImxlYWRlcmJvYXJkLXFhLXVpIiwibGVhZGVyYm9hcmQtZGV2LXVpIiwiYWNjb3VudCJdLCJzdWIiOiJhNzE5YTJiMi0zY2FjLTRjMTItOTQ1Yi1kNzMzMGE4MTkxMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJsZWFkZXJib2FyZC11aSIsInNlc3Npb25fc3RhdGUiOiJmZTU3YjI0NC1iMDkzLTQyMWQtOGM2My04YjZkZDJkMzQ0YTYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vbGVhZGVyYm9hcmQuZ28xcGVyY2VudC5jb20iLCJodHRwczovL3JlcG9ydC5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vbmFzaHRlY2hnbG9iYWwuZ28xcGVyY2VudC5jb20iLCJodHRwczovL2tub2xkdXMuZ28xcGVyY2VudC5jb20iLCJodHRwOi8vbG9jYWxob3N0OjgwODgiLCJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJodHRwczovL2xlYWRlcmJvYXJkLmtub2xkdXMuY29tIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtbmFzaHRlY2giLCJ1bWFfYXV0aG9yaXphdGlvbiIsImVtcGxveWVlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsibGVhZGVyYm9hcmQtcWEtdWkiOnsicm9sZXMiOlsiYWRtaW4iLCJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtdWkiOnsicm9sZXMiOlsiYWRtaW4iLCJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6ImZlNTdiMjQ0LWIwOTMtNDIxZC04YzYzLThiNmRkMmQzNDRhNiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3QgYWRtaW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0YWRtaW4iLCJnaXZlbl9uYW1lIjoidGVzdCIsImZhbWlseV9uYW1lIjoiYWRtaW4iLCJlbWFpbCI6InRlc3RhZG1pbkBuYXNodGVjaGdsb2JhbC5jb20ifQ.OTgh9EQJX08tTv4eGFGDzf-IG88LlMTo1PU4CmME8OkqAz0Bxe5Hg-63r_2aNow3zAI6cZrbkePgEpqEyuwrSNN31lzZ6UEg8CxV8GoS3A39Ye8PuhM12KmPm8WSOCjV-LYArseb8Seum07dhOCQ4dOiEfe4JasE-2r1uuxmunRQ7QE_rQ5fyoCLdMLn7KX5dWJs4Ggm_X9QhLVj34DFyJoJAeqNneHa_gIuABYDD3uOY6q-4opRZgSYofSxE6Qbs421ejOVR8fj4s4AKuSxQl0S0Ay-X3b0IwOU4RDsp-35kriOrUAzN82ZzB8YFY02ff4Z_hXeGDxKjfyIFI9ioA';
  
      const response = await supertest
        .request("https://knolx-backend.qa.go1percent.com")
        .post("/v02/slots") 
        .set('source', "https://nashtechglobal.qa.go1percent.com")
        .set('Authorization', accessToken)
        .send(newSlotPayload)
       
        .expect(200)
        .then((response)=>{
            console.log(response.body)
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(2000)

          expect(response.body.slotId).to.be.not.empty

        })
    });
  });
  