// Import necessary modules
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const headers = require('../../globals')

// Test case for updating tags
describe('Manage upcoming sessions', function () {
    it('verify that user should able to remove the added tags', async function () {
        const start = new Date();
        // Sending a PUT request to update the tags
        const response = await supertest(headers.base_url)
            .put('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
            .set('source', headers.source)
            .set('Authorization', headers.access_token)

        // Expecting a successful response with status code 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Expecting the response time to be less than 2000ms
        expect(responseTime).to.lessThan(2000);
        // response status should not be empty
        expect(response.body.status).to.greaterThan(0);
        // Expect the 'Content-Type' header to be of type JSON
        expect(response.headers['content-type']).to.include('application/json');
    });

    it(' verify that admin should able to update the description', async function () {
        const start = new Date();
        // Sending a PUT request to update the session description
        const response = await supertest(headers.base_url)
            .put('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
            .set('source', headers.source)
            .set('Authorization', headers.access_token)
            .send(dataToUpdate.sessionDescription);
        
        // Expecting a successful response with status code 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Expecting the response time to be less than 2000ms
        expect(responseTime).to.lessThan(2000);
        expect(response.body.status).to.greaterThan(0);
        // response status should not be empty
        expect(response.body.status).to.greaterThan(0);
        // Expect the 'Content-Type' header to be of type JSON
        expect(response.headers['content-type']).to.include('application/json');
    });

    it('verify that Admin should be able to change & update the feedback form', async function () {
        const start = new Date();
        // Sending a PUT request to update data
        const response = await supertest(headers.base_url)
            .put('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
            .set('source', headers.source)
            .set('Authorization', headers.access_token)
            .send(dataToUpdate.feedbackFormName);

        // Expecting a successful response with status code 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Expecting the response time to be less than 2000ms
        expect(responseTime).to.lessThan(2000);
        // response status should not be empty
        expect(response.body.status).to.greaterThan(0);
        // Expect the 'Content-Type' header to be of type JSON
        expect(response.headers['content-type']).to.include('application/json');
    });

    it('verify that admin should able to click on send instructions', async function () {
        const start = new Date();
        // Sending a POST request to update data
        const response = await supertest(headers.base_url)
            .post('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
            .set('source', headers.source)
            .set('Authorization', headers.access_token)
        
        // Expecting a successful response with status code 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Expecting the response time to be less than 2000 milliseconds
        expect(responseTime).to.lessThan(2000);
        // response status should not be empty
        expect(response.body.status).to.greaterThan(0);
        // Expect the 'Content-Type' header to be of type JSON
        expect(response.headers['content-type']).to.include('application/json');
    });

    it('verify that admin should able to report the session only if the approve button is enabled', async function () {
        const start = new Date();
        // Sending a PUT request to update data
        const response = await supertest(headers.base_url)
            .put('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
            .set('source', headers.source)
            .set('Authorization', headers.access_token)
            .send(dataToUpdate.remarks);
        
        // Expecting a successful response with status code 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Expecting the response time to be less than 2000 milliseconds
        expect(responseTime).to.lessThan(2000);
        // response status should not be empty
        expect(response.body.status).to.greaterThan(0);
        // Expect the 'Content-Type' header to be of type JSON
        expect(response.headers['content-type']).to.include('application/json');
    });

    it('Verify that admin should able to update the slide URL', async function () {
        const start = new Date();
        // Send a PUT request to update the slide URL
        const response = await supertest(headers.base_url)
            .put('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
            .set('source', headers.source)
            .set('Authorization', headers.access_token)
            .send(dataToUpdate.slideURL);
        
        // Assert the response status code to be 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Expecting the response time to be less than 2000 milliseconds
        expect(responseTime).to.lessThan(2000);
        // response status should not be empty
        expect(response.body.status).to.greaterThan(0);
        // Expect the 'Content-Type' header to be of type JSON
        expect(response.headers['content-type']).to.include('application/json');
    });

    it('verify that admin should able to add tags', async function () {
        const start = new Date();
        // Send a PUT request to update tags
        const response = await supertest(headers.base_url)
            .put('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
            .set('source', headers.source)
            .set('Authorization', headers.access_token)
            .send(dataToUpdate.sessionTag);

        // Check if the response status is 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Check if the response time is less than 2000ms
        expect(responseTime).to.be.lessThan(2000);
        // response status should not be empty
        expect(response.body.status).to.greaterThan(0);
        // Expect the 'Content-Type' header to be of type JSON
        expect(response.headers['content-type']).to.include('application/json');
    });

    it('Verify that admin should able to update the title', async function () {
        const start = new Date();
        // Send a PUT request to update the title
        const response = await supertest(headers.base_url)
            .put('/v02/sessions/manage/update/6530c8088555d37c0a4f8d93')
            .set('source', headers.source)
            .set('Authorization', headers.access_token)
            .send(dataToUpdate.topic);
        
        // Check if the response status is 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Check if the response time is less than 2000ms
        expect(responseTime).to.lessThan(2000);
        // response status should not be empty
        expect(response.body.status).to.greaterThan(0);
        // Expect the 'Content-Type' header to be of type JSON
        expect(response.headers['content-type']).to.include('application/json');
    });

    it('Verify that admin should able to see the available upcoming sessions', async function() {
        const start = new Date();
        // Sending a GET request to retrieve data
        const response = await supertest(headers.base_url)
            .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
            .set('source', headers.source)
            .set('Authorization', headers.access_token)

        // Check if the response status is 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Expecting the response time to be less than 2000ms
        expect(responseTime).to.lessThan(2000);
        // response status should not be empty
        expect(response.body.count).to.greaterThan(0);
        // Expect the 'Content-Type' header to be of type JSON
        expect(response.headers['content-type']).to.include('application/json');

    });

    it('verify that youtube URL should not be added or updated in the upcoming session', async function () {
        const start = new Date();
        // Send a PUT request to update yturl
        const response = await supertest(headers.base_url)
            .put('/v02/sessions/manage/update/653113198555d37c0a4f8d97')
            .set('source', headers.source)
            .set('Authorization', headers.access_token)
            .send(dataToUpdate.youtubeURL);
        
        // Check if the response status is 200
        expect(response.status).to.equal(200);
        const end = new Date();
        const responseTime = end - start;
        // Check if the response time is less than 2000ms
        expect(responseTime).to.lessThan(2000);
        // response status should not be empty
        expect(response.body.status).to.greaterThan(0);
        // Expect the 'Content-Type' header to be of type JSON
        expect(response.headers['content-type']).to.include('application/json');
        
    });

//assertions to verify the properties of the response body for the dataToUpdate
    it('should retrieve sessions', async function () {
        // Sending a GET request to retrieve sessions
        const response = await supertest(headers.base_url)
            .get('/v02/sessions/manage?pageNumber=1&pageSize=10&filter=upcoming&search=')
            .set('source', headers.base_url)
            .set('Authorization', headers.access_token);

        // Expecting the response body to have the property 'sessionTag'
        expect(response.body).to.have.property('sessionTag');
        expect(response.body.sessionDescription).to.equal("The error message indicates that the property 'topic' is not present in the response body, which is why the assertion is failing. This could be due to the structure of the response body or the way the API is handling the request. Please ensure that the API response structure matches the expected response format.");
        expect(response.body.feedbackFormName).to.equal("sdv");
        expect(response.body.sessionId).to.equal("653105778555d37c0a4f8d96");
        expect(response.body.remarks).to.equal("have not updated the sessions");
        expect(response.body.slideURL).to.equal("www.google.com");
        expect(response.body.sessionTag).to.equal("Python");
        expect(response.body.topic).to.equal("Updated Title");
        expect(response.body.youtubeURL).to.equal("https://www.youtube.com/watch?v=boz5BU1KdIw");
        // Expect the 'Content-Type' header to be of type JSON
        expect(response.headers['content-type']).to.include('application/json');
    });
});