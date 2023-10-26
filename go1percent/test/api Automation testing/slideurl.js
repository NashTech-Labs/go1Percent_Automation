// Import required modules
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Test suite for API testing
describe('API testing', function () {
    
    // Test case for updating slide URL
    it('Verify that admin should able to update the slide URL', async function () {
        
        // Define the access token
        const accessToken = 'Bearer ...'; // Your access token here
        
        // Initialize the start time for measuring response time
        const start = new Date();
        
        // Define the data to be updated
        const dataToUpdate = {
            slideURL: "www.google.com",
            saveOption: true
        };
        
        // Send a PUT request to update the slide URL
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
            .put('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
            .set('source', 'https://nashtechglobal.qa.go1percent.com')
            .set('Authorization', accessToken)
            .send(dataToUpdate);
        
        // Assert the response status code to be 200
        expect(response.status).to.equal(200);
        
        // Calculate the response time and ensure it's less than 2000 milliseconds
        const end = new Date();
        const responseTime = end - start;
        expect(responseTime).to.lessThan(2000);
        
        // Print the response status code and response time to the console
        console.log("Response status code:", response.status);
        console.log("Response time:", responseTime);
    });

    // Test case for fetching data from the API
    it('get api test', async function() {
        
        // Define the access token
        const accessToken = 'Bearer ...'; // Your access token here
        
        // Send a GET request to retrieve data from the API
        const response = await supertest('https://knolx-backend.qa.go1percent.com')
          .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
          .set('Authorization', accessToken);
    
        // Assert that the retrieved slide URL is equal to "www.google.com"
        expect(response.body.slideURL).to.equal("www.google.com");
      
    });
});
