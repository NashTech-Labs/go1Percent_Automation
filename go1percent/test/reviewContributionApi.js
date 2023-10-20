const headers = require('../globals')
describe('Review Contribution API Testing', function () {

    /**
 * Test case to retrieve all the pending contributions for approval
 * @param {object} supertest - The supertest object for making HTTP requests.
 */

    it('should retrieve all the pending contributions for approval', async function ({ supertest }) {

        await supertest

            .request(headers.baseurl)

            .get("/contribution/allContribution?pageNumber=1&limit=10")

            .set(headers.headers)

            .expect(200)

            // Assertions to check the structure and properties of the response
            .then(function (response) {

                expect(Object.keys(response.body.data).length).to.be.greaterThan(0);
                expect(response.body.data._1[0]).to.have.property('contributionId');
                expect(response.body.data._1[0]).to.have.property('knolderName');
                expect(response.body.data._1[1]).to.have.property('title');
                expect(response.body.data._1[1]).to.have.property('status');

                // Assert that the status of every contribution should be "PENDING"
                const responseData = response.body.data._1;
                for (let i = 0; i < response.body.data._1.length; i++) {
                    expect(responseData[i].status.name).to.equal('PENDING');
                }

            });

    });

    /**
     * Test case to approve or reject a contribution
     * @param {object} supertest - The supertest object for making HTTP requests.
     */

    it('approving/rejecting a contribution', async function ({ supertest }) {

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

});

