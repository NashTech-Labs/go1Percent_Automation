// Import necessary modules
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Describe the API testing suite
describe('api testing', function () {
  // Test case for recording test
  it('records test', async function() {
    // Define the access token
    const accessToken = 'Bearer ...'; // Your access token here

    // Record the start time
    const start = new Date();

    // Send a GET request to fetch records
    const response = await supertest('https://knolx-backend.qa.go1percent.com')
      .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
      .set('source', 'https://nashtechglobal.qa.go1percent.com')
      .set('Authorization', accessToken);

    // Record the end time
    const end = new Date();

    // Calculate the response time
    const responseTime = end - start;
  
    // Log the response status code, response time, and response count
    console.log("Response status code:", response.status);
    console.log("Response time:", responseTime);
    console.log("Response count for page:", response.body.count);
  
    // Check if the response status is 200
    expect(response.status).to.equal(200);
    
    // Check if the response time is less than 2000ms
    expect(responseTime).to.lessThan(2000);
  });
});
