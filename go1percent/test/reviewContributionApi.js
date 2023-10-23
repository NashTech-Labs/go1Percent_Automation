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

    it('should retrieve the details of a specific contribution on click', async function ({ supertest }) {

        await supertest

            .request(headers.baseurl)

            .get("/contribution?contributionId=2702")

            .set(headers.headers)

            .expect(200)

            .then(function (response) {
                const responseBody = response.body.data;

                // Assert the keys and data types of the properties
                for (let i = 0; i < responseBody.length; i++) {
                    const responseObject = responseBody[i];

                    expect(responseObject).to.have.all.keys(
                        'contributionId',
                        'contributionType',
                        'title',
                        'contributionDate',
                        'technologyDetails',
                        'urlDetails',
                        'status',
                        'reviewer_name'
                    );

                    expect(responseObject.contributionId).to.be.a('number');
                    expect(responseObject.contributionType.name).to.be.a('string');
                    expect(responseObject.title).to.be.a('string');
                    expect(responseObject.contributionDate).to.be.a('string');
                    expect(responseObject.technologyDetails).to.be.a('string');
                    expect(responseObject.studioName).to.be.a('string');
                    expect(responseObject.reviewer_name).to.be.a('string');
                }

                // Assert that the status of every contribution can be "PENDING," "APPROVED," or "REJECTED"
                const responseData = response.body.data;
                for (let i = 0; i < responseData.length; i++) {
                    const status = responseData[i].status.name;
                    expect(status).to.be.oneOf(['PENDING', 'APPROVED', 'REJECTED']);
                }
            });

    });

});

