// Import necessary modules
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Describe the API testing suite
describe('API testing', function () {
    // Test case for updating title
    it('Verify that admin should able to update the title', async function () {
        // Define the access token
        const accessToken = 'Bearer ...'; // Your access token here

        // Record the start time
        const start = new Date();

        // Data to update
        const dataToUpdate = {
            topic: "Updated Title",
            saveOption: true
        };

        // Send a PUT request to update the title
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
            .put('/v02/sessions/manage/update/6530c8088555d37c0a4f8d93')
            .set('source', 'https://nashtechglobal.qa.go1percent.com')
            .set('Authorization', accessToken)
            .send(dataToUpdate);
        
        // Check if the response status is 200
        expect(response.status).to.equal(200);

        // Record the end time
        const end = new Date();

        // Calculate the response time
        const responseTime = end - start;

        // Check if the response time is less than 2000ms
        expect(responseTime).to.lessThan(2000);

        // Log the response status code and response time
        console.log("Response status code:", response.status);
        console.log("Response time:", responseTime);
    });

     // Test case for retrieving data from the API
     it('get api test', async function() {
        // Define the access token
        const accessToken = 'Bearer ...'; // Your access token here

        // Send a GET request to retrieve data
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
          .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
          .set('Authorization', accessToken);
    
        // Check if the topic in the response is "Updated Title"
        expect(response.body.topic).to.equal("Updated Title");
    });
});
