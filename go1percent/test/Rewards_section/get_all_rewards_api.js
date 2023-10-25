const global = require('../../globals')
const headers = global.headers;


describe('Leaderboard-Rewards API Testing', function () {
  const baseUrl = 'https://backend.qa.go1percent.com';

  it('should get all rewards', async function ({ supertest }) {

    await supertest

        .request(baseUrl)
        .get("/rewards/getAllRewards")
        .set(headers)
        .expect(200)
        .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

    });


});
