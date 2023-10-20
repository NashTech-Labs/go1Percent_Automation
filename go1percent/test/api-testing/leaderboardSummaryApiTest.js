const global = require('../../globals');
const headers = global.headers;


describe('Leaderboard API Testing', function () {
  const baseUrl = 'https://backend.qa.go1percent.com';

  /**
  * Test case to retrieve Leading Practices Summary from API.
  * @param {Object} supertest - The supertest object for making HTTP requests.
  */

  it('should retrieve Leading Practices Summary', async function ({ supertest }) {

    const response = await supertest
      .request(baseUrl)
      .get('/studios')
      .set(headers)
      .expect(200) // Expect a successful response with HTTP status code 200
      .expect('Content-Type', /json/);
    const responseBody = response.body;
    expect(responseBody.length).to.be.greaterThan(0);

    for (let indexOfResponse = 0; indexOfResponse < responseBody.length; indexOfResponse++) {
      //assertion to check the properties of the response body
      expect(Object.keys(responseBody[indexOfResponse])).to.include('studioType');
      expect(Object.keys(responseBody[indexOfResponse])).to.include('name');
      expect(Object.keys(responseBody[indexOfResponse])).to.include('allTimeScore');
      expect(Object.keys(responseBody[indexOfResponse])).to.include('studioHeadEmail');
      expect(Object.keys(responseBody[indexOfResponse])).to.include('monthlyScore');
      expect(Object.keys(responseBody[indexOfResponse])).to.include('memberAvg');
      expect(Object.keys(responseBody[indexOfResponse])).to.include('studioHeadName');
    }
  });

 
});
