const globals = require('../../globals')
const urls = globals.urls;
const baseUrl = globals.Add_Contribution.BaseUrl;

describe('Setting API Testing', function () {
    const header = globals.admin.headers;
    const tokenHeaders = globals.admin.tokenHeaders;
    const tokenBody = globals.admin.tokenBody;


    const commonExpectation = (startTimestamp, response) => {
        const endTimestamp = Date.now(); // Record the end time
        const responseTime = endTimestamp - startTimestamp; // Calculate response time in milliseconds
        expect(responseTime).to.be.below(200000); //Response time assertion 
    }


    it('get api token', async function ({ supertest }) {
        await supertest
            .request(urls.token)
            .post("/token")
            .send(tokenBody)
            .set(tokenHeaders)
            .expect(200)
            .expect('Content-Type', /json/)
            .then(function (response) {
                const token = response._body.access_token;
                header['Authorization'] = 'Bearer ' + token;
            });
    });
    it('Check knolderId API', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
            .request(baseUrl)
            .get("/get/knolderId?knolderEmail=testemployee@nashtechglobal.com")
            .set(header)
            .expect(200)
            .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

            .then(function (response) {

                //The test then checks the response body for the presence of specific properties such as "resource," "status," "data,".

                expect(Object.keys(response.body).length).to.be.greaterThan(0);

                expect(response.body).to.have.property("resource");
                expect(response.body).to.have.property('status');
                expect(response.body).to.have.property('data');

                //    commonExpectation(startTime, response);// expect for checking the response time

            });

    });
    it('Get Profile', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
            .request(baseUrl)
            .get('/profile/getProfile?email=testemployee@nashtechglobal.com')
            .set(header)
            .expect(200)
            .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

            .then(function (response) {

                //The test then checks the response body for the presence of specific properties such as "name," "email," "knolderId," "role," 

                expect(response.body.data).to.have.property("email");
                expect(response.body.data).to.have.property('knolderId');
                expect(response.body.data).to.have.property("name");
                expect(response.body.data).to.have.property('role');


                // commonExpectation(startTime, response);// expect for checking the response time

            });
    });

    it('Update user full name', async function ({ supertest }) {
        const startTime = Date.now();
        await supertest

            .request(baseUrl)
            .post("/profile/updateProfile")
            .send({ "name": "Test Employeeet", "email": "testemployee@nashtechglobal.com" })
            .set(header)
            .expect(200)
            .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

            .then(function (response) {
                expect(response.body).to.have.property("resource");
                commonExpectation(startTime, response);// expect for checking the response time

            });
    });

    it('Update user competency', async function ({ supertest }) {
        const startTime = Date.now();
        await supertest

            .request(baseUrl)
            .post("/profile/updateProfile")
            .send({ "studioID": 1, "email": "testemployee@nashtechglobal.com", "wordPressId": "Dummy2022", "githubId": "Go1PercentUser1", "practiceName": "Unassociated Practice", "location": "India" })
            .set(header)
            .expect(200)
            .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

            .then(function (response) {
                expect(response.body).to.have.property("resource");
                expect(response.body).to.have.property("status");
                expect(response.body).to.have.property("data");
                commonExpectation(startTime, response);// expect for checking the response time

            });
    });

    it('Get Skills', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
            .request(baseUrl)
            .get('/skills?skill=selenium')
            .set(header)
            .expect(200)
            .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

            .then(function (response) {

                expect(response.body[0]).to.have.property('skillId');
                expect(response.body[0]).to.have.property('skill');

                // commonExpectation(startTime, response);// expect for checking the response time

            });
    });

    it('Add skills', async function ({ supertest }) {
        const startTime = Date.now();
        await supertest

            .request(baseUrl)
            .put("/skills")
            .send({"knolder_id":666,"studio":7,"skillId":"","skill":"selenium","status":"ADD","competency":3})
            .set(header)
            .expect(200)
            .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

            .then(function (response) {
                expect(response.body[0]).to.have.property('id');
                expect(response.body[0]).to.have.property('knolder_id');
                expect(response.body[0]).to.have.property('skillId');
                expect(response.body[0]).to.have.property('skill');
                expect(response.body[0]).to.have.property('studio');
                expect(response.body[0]).to.have.property('competency');
                commonExpectation(startTime, response);// expect for checking the response time

            });
    });

    it('Remove skills', async function ({ supertest }) {
        const startTime = Date.now();
        await supertest

            .request(baseUrl)
            .put("/skills")
            .send({"knolder_id":666,"studio":7,"skillId":"","skill":"01GVZGMEB2NA4FGS09TSAG1WEG","status":"REMOVE","competency":3})
            .set(header)
            .expect(200)
            .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

            .then(function (response) {
                commonExpectation(startTime, response);// expect for checking the response time

            });
    });




});
