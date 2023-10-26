// Import necessary modules
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Main test suite
describe('API testing', function () {
    // Test case for updating the session description
    it(' verify that admin should able to update the description', async function () {
        // Define the access token for authorization
        const accessToken = '<Your Access Token>'; // Your access token here
        const start = new Date();
        // Data to be sent in the request body for updating the description
        const dataToUpdate = {
            sessionDescription: "The error message indicates that the property 'topic' is not present in the response body, which is why the assertion is failing. This could be due to the structure of the response body or the way the API is handling the request. Please ensure that the API response structure matches the expected response format.",
            saveOption: true
        };
        // Sending a PUT request to update the session description
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
            .put('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
            .set('source', 'https://nashtechglobal.qa.go1percent.com')
            .set('Authorization', accessToken)
            .send(dataToUpdate);
        
        // Expecting a successful response with status code 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Expecting the response time to be less than 2000ms
        expect(responseTime).to.lessThan(2000);
        // Logging the response status code and response time
        console.log("Response status code:", response.status);
        console.log("Response time:", responseTime);
    });

    // Test case for fetching data using GET request
    it('get api test', async function() {
        // Define the access token for authorization
        const accessToken = '<Your Access Token>'; // Your access token here
        // Sending a GET request to retrieve data
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
          .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
          .set('Authorization', accessToken);
    
        // Expecting the retrieved data's session description to match the expected value
        expect(response.body.sessionDescription).to.equal("The error message indicates that the property 'topic' is not present in the response body, which is why the assertion is failing. This could be due to the structure of the response body or the way the API is handling the request. Please ensure that the API response structure matches the expected response format.");
    });
});
