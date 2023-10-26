// Import necessary modules
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Main test suite for API testing
describe('api testing', function () {
  // Test case for fetching data using a GET request
  it('get api test', async function() {
    // Define the access token for authorization
    const accessToken = '<Your Access Token>'; // Your access token here
    const start = new Date();
    // Sending a GET request to retrieve data
    const response = await supertest('https://knolx-backend.qa.go1percent.com')
      .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
      .set('source', 'https://nashtechglobal.qa.go1percent.com')
      .set('Authorization', accessToken);

    // Expecting a successful response with status code 200
    expect(response.status).to.equal(200);
    const end = new Date();
    const responseTime = end - start;
    // Expecting the response time to be less than 2000ms
    expect(responseTime).to.lessThan(2000);

    // Logging the response status code, response time, and the retrieved response body
    console.log("Response status code:", response.status);
    console.log("Response time:", responseTime);
    console.log("Response:", response.body);
  });
});
