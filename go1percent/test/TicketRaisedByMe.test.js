const assert = require('assert')
const globals = require('../globals')
describe('api testing', function () {

    /**
     * Test case to verify the retrieval of open tickets.
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */
    it('should retrieve open tickets', async function ({ supertest }) {
        await supertest
            .request(globals.baseUrl)
            .get("/tickets/my?status=Open&limit=10&page=1")
            .set(globals.apiheaders)
            .expect(200)
            .then(function (response) {

                expect(response.body.data[0]).to.have.property('ticketID');
                expect(response.body.data[0]).to.have.property('title');
                expect(response.body.data[0]).to.have.property('status');
                expect(response.body.data[0]).to.have.property('createdAt');
                expect(response.body.data[0]).to.have.property('category');

                for (let i = 0; i < response.body.data.length; i++) {
                    expect(response.body.data[i].status.name).to.equal('Open')
                }
            })

    });

    /**
     * Test case to verify the retrieval of closed tickets.
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */
    it('get api test 2', async function ({ supertest }) {

        await supertest
            .request(globals.baseUrl)
            .get("/tickets/my?status=Closed&limit=10&page=1")
            .set(globals.apiheaders)
            .expect(200)
            .then(function (response) {

                expect(response.body.data[0]).to.have.property('ticketID');
                expect(response.body.data[0]).to.have.property('title');
                expect(response.body.data[0]).to.have.property('status');
                expect(response.body.data[0]).to.have.property('createdAt');
                expect(response.body.data[0]).to.have.property('category');

                for (let i = 0; i < response.body.data.length; i++) {
                    expect(response.body.data[i].status.name).to.equal('Closed')
                }
            })

    });

    /**
     * Test case to retrieve details of a specific ticket.
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */
    it('should retrieve details of a specific ticket', async function ({ supertest }) {

        await supertest
            .request(globals.baseUrl)
            .get("/tickets/ticket/1137")
            .set(globals.apiheaders)
            .expect(200)

    });
    /**
     * Test case to retrieve comments for a specific ticket.
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */
    it('should retrieve comments for a specific ticket', async function ({ supertest }) {

        await supertest
            .request(globals.baseUrl)
            .get("/tickets/1137/comments")
            .set(globals.apiheaders)
            .expect(200)

    });
    /**
     * Test case to retrieve ticket categories.
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */
    it('get Categories', async function ({ supertest }) {

        await supertest
            .request(globals.baseUrl)
            .get("/tickets/categories")
            .set(globals.apiheaders)
            .expect(200)

    });

});