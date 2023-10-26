// Import necessary modules
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Main test suite
describe('Session API', function () {
    const baseURL = 'https://knolx-backend.qa.go1percent.com'; // Base URL of the API
    const accessToken = 'Bearer <Your Access Token>'; // Your access token here

    // Test case for updating tags
    describe('Tags Update', function () {
        it('verify that user should able to remove the added tags', async function () {
            // Data to be sent in the request body for updating tags
            const dataToUpdate = {
                sessionTag: [],
                saveOption: true
            };

            // Sending a PUT request to update the tags
            const response = await supertest(baseURL)
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
    });

    // Test case for fetching sessions
    describe('Get API Test', function () {
        it('should retrieve sessions', async function () {
            // Sending a GET request to retrieve sessions
            const response = await supertest(baseURL)
                .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
                .set('source', 'https://nashtechglobal.qa.go1percent.com')
                .set('Authorization', accessToken);

            // Expecting a successful response with status code 200
            expect(response.status).to.equal(200);
            // Expecting the response body to have the property 'sessionTag'
            expect(response.body).to.have.property('sessionTag');
        });
    });
});
