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
      .expect('Content-Type', /json/); // Expect the response to have JSON content type

    const responseBody = response.body;
    expect(responseBody.length).to.be.greaterThan(0);

    for (let indexOfResponse = 0; indexOfResponse < responseBody.length; indexOfResponse++) {
      const object = responseBody[indexOfResponse];

      // Check if 'imageFile' is present in the object
      if ('imageFile' in object) {
        expect(object).to.have.all.keys(
          'allTimeScore',
          'id',
          'imageFile',
          'memberAllTimeAvg',
          'memberAvg',
          'memberCount',
          'monthlyScore',
          'name',
          'studioHeadEmail',
          'studioHeadName',
          'studioType'
        );
        expect(object.imageFile).to.be.a('string');
      } else {
        // If 'imageFile' is not present, assert without it
        expect(object).to.have.all.keys(
          'allTimeScore',
          'id',
          'memberAllTimeAvg',
          'memberAvg',
          'memberCount',
          'monthlyScore',
          'name',
          'studioHeadEmail',
          'studioHeadName',
          'studioType'
        );
      }

      // Assert the types of each property's value
      expect(object.studioType).to.be.a('string');
      expect(object.name).to.be.a('string');
      expect(object.allTimeScore).to.be.a('number');
      expect(object.studioHeadEmail).to.be.a('string');
      expect(object.monthlyScore).to.be.a('number');
      expect(object.memberAvg).to.be.a('number'); 
      expect(object.memberAllTimeAvg).to.be.a('number');
      expect(object.monthlyScore).to.be.a('number');
      expect(object.memberAvg).to.be.a('number'); 
      expect(object.memberCount).to.be.a('number'); 

      if (object.studioHeadName === null) {
        expect(object.studioHeadName).to.be.null;
      } else {
        expect(object.studioHeadName).to.be.a('string');
      }
    }
  });


  /**
   * Test case to retrieve Leading Nasher data for all times.
   * @param {Object} supertest - The supertest object for making HTTP requests.
   */
  it('should retrieve Leading Nasher data for all times', async function ({ supertest }) {
    const response = await supertest
      .request(baseUrl)
      .get('/summary?period=alltime')
      .set(headers)
      .expect(200) // Expect a successful response with HTTP status code 200
      .expect('Content-Type', /json/); // Expect the response to have JSON content type

    // Assert that the response body has data
    expect(response.body.length).to.be.greaterThan(0);

    const responseBody = response.body;

    for (let indexOfResponse = 0; indexOfResponse < responseBody.length; indexOfResponse++) {
      const object = responseBody[indexOfResponse];

      // Check if the object has the expected keys
      expect(object).to.have.all.keys(
        'knolderId',
        'KnolderName',
        'profilePic',
        'studioName',
        'score',
        'rank'
      );

      // Assert the types of each property's value
      expect(object.knolderId).to.be.a('number');
      expect(object.KnolderName).to.be.a('string');
      expect(object.profilePic).to.be.a('string');
      expect(object.studioName).to.be.a('string');
      expect(object.score).to.be.a('number');
      expect(object.rank).to.be.a('number');
    }
  });

});
