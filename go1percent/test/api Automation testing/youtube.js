// Import necessary modules
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Describe the API testing suite
describe('API testing', function () {
    // Test case for updating yturl
    it('verify that youtube URL should not be added or updated in the upcoming session', async function () {
        // Define the access token
        const accessToken = 'Bearer ...'; // Your access token here

        // Record the start time
        const start = new Date();

        // Define data to be updated
        const dataToUpdate = {
            youtubeURL: "https://www.youtube.com/watch?v=boz5BU1KdIw",
            saveOption: true
        };

        // Send a PUT request to update yturl
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
            .put('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
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

    // Test case for get api
    it('get api test', async function() {
        // Define the access token
        const accessToken = 'Bearer ...'; // Your access token here

        // Send a GET request to fetch data
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
          .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
          .set('Authorization', accessToken);
    
        // Check if the fetched youtubeURL matches the expected one
        expect(response.body.youtubeURL).to.equal("https://www.youtube.com/watch?v=boz5BU1KdIw");
    });
});
