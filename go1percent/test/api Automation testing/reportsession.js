// Import necessary modules
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Main test suite for API testing
describe('API testing', function () {
    // Test case for updating a session
    it('verify that admin should able to report the session only if the approve button is enabled', async function () {
        // Define the access token for authorization
        const accessToken = '<Your Access Token>'; // Your access token here
        const start = new Date();
        // Data to be updated
        const dataToUpdate = {
            remarks: "have not updated the sessions",
            saveOption: true
        };
        // Sending a PUT request to update data
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
            .put('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
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

    // Test case for fetching data via API
    it('get api test', async function() {
        // Define the access token for authorization
        const accessToken = '<Your Access Token>'; // Your access token here
        // Sending a GET request to fetch data
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
          .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
          .set('Authorization', accessToken);
    
        // Expecting the fetched data's remarks to match the specified value
        expect(response.body.remarks).to.equal("have not updated the sessions");
      
    });
});
