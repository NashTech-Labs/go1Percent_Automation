// Import necessary modules
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Main test suite for API testing
describe('API testing', function () {
    // Test case for updating instructions
    it('verify that admin should able to click on send instructions', async function () {
        // Define the access token for authorization
        const accessToken = '<Your Access Token>'; // Your access token here
        const start = new Date();
        // Data to be updated
        const dataToUpdate = {
            sessionId: "653105778555d37c0a4f8d96",
            saveOption: true
        };
        // Sending a POST request to update data
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
            .post('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
            .set('source', 'https://nashtechglobal.qa.go1percent.com')
            .set('Authorization', accessToken)
            .send(dataToUpdate);
        
        // Expecting a successful response with status code 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Expecting the response time to be less than 2000 milliseconds
        expect(responseTime).to.lessThan(2000);
        // Logging the response status code and response time
        console.log("Response status code:", response.status);
        console.log("Response time:", responseTime);
    });

});
