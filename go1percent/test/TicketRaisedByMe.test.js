const assert = require('assert')
const globals = require('../globals')
describe('Ticket Raised By Me Api testing', function () {

    /**
     * Test function for token generation.
     *
     * @param {Object} supertest - The SuperTest object for making HTTP requests.
     */
    it('token generation', async function ({ supertest }) {
        const url = "https://auth.go1percent.com";
        const headers = {
            'accept': '*/*',
            'source': 'https://nashtechglobal.qa.go1percent.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const tokenRequestData = {
            'client_id': 'leaderboard-ui',
            'client_secret': '8090ed15-4cd1-483c-9fee-2a8b35941852',
            'username': 'testadmin',
            'password': 'testadmin',
            'grant_type': 'password'
        }
        const response = await supertest

            .request(url)
            .post('/auth/realms/nashtech/protocol/openid-connect/token')
            .set(headers)
            .send(tokenRequestData)
            .expect(200)
        accessToken = response._body.access_token;
        globals.apiheaders['authorization'] = 'Bearer ' + accessToken;

        console.log(accessToken);
    })

    /**
     * Test case to verify the retrieval of open tickets.
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */
    it('should retrieve open tickets', async function ({ supertest }) {

        const startTimestamp = Date.now();
        await supertest
            .request(globals.baseUrl)
            .get("/tickets/my?status=Open&limit=10&page=1")
            .set(globals.apiheaders)

            // assert the status code of response
            .expect(200)
            .then(function (response) {

                let responseBody = response.body.data;

                // assert the response body attributes.
                expect(responseBody[0]).to.have.property('ticketID');
                expect(responseBody[0]).to.have.property('title');
                expect(responseBody[0]).to.have.property('status');
                expect(responseBody[0]).to.have.property('createdAt');
                expect(responseBody[0]).to.have.property('category');

                // assert the types of each attributes.

                expect(responseBody[0].ticketID).to.be.a('number')
                expect(responseBody[0].title).to.be.a('string')
                expect(responseBody[0].status).to.be.an('object')
                expect(responseBody[0].createdAt).to.be.an('number')
                expect(responseBody[0].category).to.be.an('object')

                for (let index = 0; index < responseBody.length; index++) {

                    // verifying the status of all the tickets should be "Open"
                    expect(responseBody[index].status.name).to.equal('Open')
                }
                verifyResponseTime(startTimestamp, response);
            })

    });

    /**
     * Test case to verify the retrieval of closed tickets.
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */
    it('get api test 2', async function ({ supertest }) {

        const startTimestamp = Date.now();
        await supertest
            .request(globals.baseUrl)
            .get("/tickets/my?status=Closed&limit=10&page=1")
            .set(globals.apiheaders)

            // assert the status code of response
            .expect(200)
            .then(function (response) {

                let responseBody = response.body.data;

                expect(responseBody[0]).to.have.property('ticketID');
                expect(responseBody[0]).to.have.property('title');
                expect(responseBody[0]).to.have.property('status');
                expect(responseBody[0]).to.have.property('createdAt');
                expect(responseBody[0]).to.have.property('category');

                // verifying the status of all the tickets should be "Closed"
                for (let index = 0; index < responseBody.length; index++) {

                    expect(responseBody[index].status.name).to.equal('Closed')
                }
                verifyResponseTime(startTimestamp, response);
            })

    });

    /**
     * Test case to retrieve details of a specific ticket.
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */
    it('should retrieve details of a specific ticket', async function ({ supertest }) {

        const startTimestamp = Date.now();
        await supertest
            .request(globals.baseUrl)
            .get("/tickets/ticket/1162")
            .set(globals.apiheaders)
            .expect(200)
            .then(function (response) {
                let responseBody = response.body.data;

                expect(responseBody.userDetails.userName).to.equal('Testemployee')

                expect(responseBody.ticketDetails).to.have.property('ticketID')
                expect(responseBody.ticketDetails).to.have.property('title')
                expect(responseBody.ticketDetails).to.have.property('status')
                expect(responseBody.ticketDetails).to.have.property('category')
                expect(responseBody.ticketDetails).to.have.property('assignedTo')

                // assert the types of each property in ticketDetails.
                expect(responseBody.ticketDetails.ticketID).to.be.a('number')
                expect(responseBody.ticketDetails.title).to.be.a('string')
                expect(responseBody.ticketDetails.status).to.be.an('object')
                expect(responseBody.ticketDetails.category).to.be.an('object')
                expect(responseBody.ticketDetails.assignedTo).to.be.an('array')

                verifyResponseTime(startTimestamp, response);
            })


    });

    /**
     * Test case to retrieve comments for a specific ticket.
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */
    it('should retrieve comments for a specific ticket', async function ({ supertest }) {

        const startTimestamp = Date.now();
        await supertest
            .request(globals.baseUrl)
            .get("/tickets/1137/comments")
            .set(globals.apiheaders)
            .expect(200)

            .then(function (response) {
                let responseBody = response.body.data;

                // assert the response body attributes
                expect(responseBody[0].comment).to.have.property('userEmail')
                expect(responseBody[0].comment).to.have.property('note')
                expect(responseBody[0].comment).to.have.property('createdAt')
                expect(responseBody[0].comment).to.have.property('file')

                // assert the type of each property in "comment"
                const comments = responseBody[0].comment;
                expect(comments.userEmail).to.be.a('string');
                expect(comments.note).to.be.a('string');
                expect(comments.createdAt).to.be.a('number');
                expect(comments.file).to.be.a('object');

                verifyResponseTime(startTimestamp, response);
            })


    });
    /**
     * Test case to retrieve ticket categories.
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */
    it('get Categories', async function ({ supertest }) {

        const startTimestamp = Date.now();
        await supertest
            .request(globals.baseUrl)
            .get("/tickets/categories")
            .set(globals.apiheaders)
            .expect(200)

            .then(function (response) {
                let responseBody = response.body.data;

                // assert all the expected categories in response.
                const expectedCategoryTypeNames = [
                    'Certification', 'Open source', 'PMO Template', 'Tech hub', 'Proposal', 'Book', 'Webinar', 'Conference',
                    'Other', 'Knolx', 'Process Document', 'Blog', 'Meetup', 'Research paper'
                ]
                for (let index = 0; index < responseBody.length; index++) {
                    expect(responseBody[index].categoryType.name).to.be.oneOf(expectedCategoryTypeNames);
                }
                verifyResponseTime(startTimestamp, response);
            })

    });
    
    /**
     * Verifies the response time and status of an API request.
     *
     * @param {number} startTimestamp - The timestamp when the request was sent.
     * @param {Object} response - The response object from the API request.
     */
    const verifyResponseTime = (startTimestamp, response) => {
        const endTimestamp = Date.now();
        const responseTime = endTimestamp - startTimestamp;
        expect(responseTime).to.be.below(10000);
        expect(response._body.status).to.be.equal(true);
    }

});