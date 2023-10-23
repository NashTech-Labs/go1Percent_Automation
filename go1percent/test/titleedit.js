const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('API testing', function () {
    it('title update', async function () {
        const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTc4MDc0MDgsImlhdCI6MTY5NzgwNTYwOCwiYXV0aF90aW1lIjoxNjk3ODA0NzYyLCJqdGkiOiJjZjFiNzM1NS0zZDY4LTQ3OTEtOTQyYi1hZmI1NDAxZjdkNWEiLCJpc3MiOiJodHRwczovL2F1dGguZ28xcGVyY2VudC5jb20vYXV0aC9yZWFsbXMvbmFzaHRlY2giLCJhdWQiOlsibGVhZGVyYm9hcmQtdWkiLCJsZWFkZXJib2FyZC1kZXYtdWkiLCJhY2NvdW50Il0sInN1YiI6ImE3MTlhMmIyLTNjYWMtNGMxMi05NDViLWQ3MzMwYTgxOTEwNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxlYWRlcmJvYXJkLXFhLXVpIiwibm9uY2UiOiJkNTgwMWMwNS0yNjQ1LTRhNTAtODc4Mi0xZDQ3MzU3MTQ1NzAiLCJzZXNzaW9uX3N0YXRlIjoiMzdiMWM0M2EtZTA1Ny00MWExLWE5OGYtYzE3MTdhNjgzNTc1IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL25hc2h0ZWNoZ2xvYmFsLnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5rbm9sZHVzLmNvbSIsImh0dHBzOi8va25vbGR1cy5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vcmVwb3J0LnFhLmdvMXBlcmNlbnQuY29tIiwiaHR0cHM6Ly9sZWFkZXJib2FyZC1xYS5nbzFwZXJjZW50LmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OCIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW5hc2h0ZWNoIiwidW1hX2F1dGhvcml6YXRpb24iLCJlbXBsb3llZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImxlYWRlcmJvYXJkLXFhLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImxlYWRlcmJvYXJkLWRldi11aSI6eyJyb2xlcyI6WyJhZG1pbiIsImVtcGxveWVlIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMzdiMWM0M2EtZTA1Ny00MWExLWE5OGYtYzE3MTdhNjgzNTc1IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCBhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3RhZG1pbiIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoidGVzdGFkbWluQG5hc2h0ZWNoZ2xvYmFsLmNvbSJ9.MmhOhjZuAOi5v3vICBcxNCUFp7qkDGukXU6h8k-MkIuUz8j-RchVR-rmuqv1EO8KqVMnQNn8quZ1NtqRBnJmsPQhjNkJXCeLj-578fZ5MzEFVwUmvyqNTweWN3VkireoeAx166r88KSZ9Fmx7pL1Kqr8vw2KuDiyP_Cyf43lil12rE4tXYZVljceBTtLtweV2lgXmdz1PVnXARiXbYZ2hcE1P-M_6F0QNynF7ccekRv6XmqAVxxlwgHToHqsVcv2RXGxoijo-JH1OmwPdkdx1em4BqBVUvsJeb1214nGb7fbqrGPkb3QhIltYvefBWRK8ngWq4ZWeBuOuYislqlnrw'; // Your access token here
        const start = new Date();
        const dataToUpdate = {
            topic: "Updated Title",
            saveOption: true
        };
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
            .put('/v02/sessions/manage/update/6530c8088555d37c0a4f8d93')
            .set('source', 'https://nashtechglobal.qa.go1percent.com')
            .set('Authorization', accessToken)
            .send(dataToUpdate);
        
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        expect(responseTime).to.lessThan(2000);
        console.log("Response status code:", response.status);
        console.log("Response time:", responseTime);
    });
});
