const headers = require('../globals')


describe('Review Contribution API Testing', function () {

    /**
     * Test case to retrieve all the pending contributions for approval or rejection on Approvals page.
     * @param {object} supertest - The supertest object for making HTTP requests.
     */

    it('should retrieve all the pending contributions on approvals page', async function ({ supertest }) {

        await supertest

            .request(headers.baseurl)

            .get("/contribution/allContribution?pageNumber=1&limit=10")

            .set(headers.headers)

            .expect(200)

            // Assertions to check the structure and properties of the response
            .then(function (response) {

                let responseBody = response.body.data._1;
                expect((responseBody).length).to.be.greaterThan(0);
                expect(responseBody[0]).to.have.property('contributionId');
                expect(responseBody[0]).to.have.property('knolderName');
                expect(responseBody[1]).to.have.property('title');
                expect(responseBody[1]).to.have.property('status');

                // Assert that the status of every contribution should be "PENDING"
                for (let i = 0; i < responseBody.length; i++) {
                    expect(responseBody[i].status.name).to.equal('PENDING');
                }

            });

    });

    /**
     * Test case to approve or reject a contribution -- PUT method call.
     * @param {object} supertest - The supertest object for making HTTP requests.
     */

    it('should approve/reject a contribution', async function ({ supertest }) {

        await supertest

            .request(headers.baseurl)

            .put('/contribution')

            .set(headers.headers)

            .send({ "contributionId": 2718, "status": "APPROVED", "remark": "" })

            // Expect a successful response with HTTP status code 200
            .expect(200)

            .expect('Content-Type', /json/)

            .then(function (response) {

                expect(Object.keys(response.body).length).to.be.greaterThan(0);
                expect(response.body.resource).to.equal('contribution');
                expect(response.body).to.have.property('status');
                expect(response.body).to.have.property('data');
                expect(response.body.data).to.equal('Status Already Updated!');

            });

    });

    /**
    * Test case to retrieve a list of the contributions on "All contributions" page.
    * and validates the structure of the response and checks that the status of each contribution
    * falls within the allowed values: "PENDING," "APPROVED," or "REJECTED."
    */

    it('should retrieve list of the contributions on "all contributions" page', async function ({ supertest }) {

        await supertest
            .request(headers.baseurl)
            .get("/contribution/getApprovedContributionsForAll?pageNumber=1&limit=10")
            .set(headers.headers)
            .expect(200)

            // Assertions to check the structure and properties of the response
            .then(function (response) {

                let responseBody = response.body.data._1;
                expect((responseBody).length).to.be.greaterThan(0);
                expect(responseBody[0]).to.have.property('contributionId');
                expect(responseBody[0]).to.have.property('knolderName');
                expect(responseBody[1]).to.have.property('title');
                expect(responseBody[1]).to.have.property('status');

                // Assert that the status of every contribution can be "PENDING," "APPROVED," or "REJECTED"
                for (let i = 0; i < responseBody.length; i++) {
                    const status = responseBody[i].status.name;
                    expect(status).to.be.oneOf(['PENDING', 'APPROVED', 'REJECTED']);
                }

            });
    });

    /**
     * This test case sends a GET request to fetch details of a specific contribution
     * and validates the structure of the response and checks that the status of each contribution
     * falls within the allowed values: "PENDING," "APPROVED," or "REJECTED."
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */

    it('should retrieve the details of a specific contribution', async function ({ supertest }) {

        await supertest

            .request(headers.baseurl)

            .get("/contribution?contributionId=2702")

            .set(headers.headers)

            .expect(200)

            .then(function (response) {
                let responseBody = response.body.data;

                // Assert the keys and data types of the properties
                for (let i = 0; i < responseBody.length; i++) {
                    const responseObject = responseBody[i];

                    expect(responseObject).to.have.all.keys(
                        'contributionId',
                        'contributionType',
                        'title',
                        'contributionDate',
                        'technologyDetails',
                    );
                }

                // Assert that the status of every contribution can be "PENDING," "APPROVED," or "REJECTED"
                for (let i = 0; i < responseBody.length; i++) {
                    const status = responseBody[i].status.name;
                    expect(status).to.be.oneOf(['PENDING', 'APPROVED', 'REJECTED']);
                }
            });

    });

    /**
    
    * This test case sends a GET request to retrieve contributions from a specific date
        and validates the structure of the response and checks that the status of each contribution
     * falls within the allowed values: "PENDING," "APPROVED," or "REJECTED."
     * @param {Object} supertest - The supertest object for making HTTP requests.
     */

    it('should retrieve the contributions on the basis of date', async function ({ supertest }) {
        await supertest
            .request(headers.baseurl)
            .get("/contribution/allContribution?pageNumber=1&limit=10&date=2023-10-16")
            .set(headers.headers)
            .expect(200)

            .then(function (response) {
                const responseBody = response.body.data;

                // Assert the keys of the properties in the response for each contribution
                for (let i = 0; i < responseBody.length; i++) {
                    const responseObject = responseBody[i];

                    expect(responseObject).to.have.all.keys(
                        'contributionId',
                        'contributionType',
                        'title',
                        'contributionDate',
                        'technologyDetails',
                    );
                }

                // Assert that the status of every contribution can be "PENDING," "APPROVED," or "REJECTED"
                for (let i = 0; i < responseBody.length; i++) {
                    const status = responseBody[i].status.name;
                    expect(status).to.be.oneOf(['PENDING', 'APPROVED', 'REJECTED']);
                }
            });

    });

});