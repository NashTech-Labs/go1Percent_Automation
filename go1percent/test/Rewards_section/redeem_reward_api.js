const global = require('../../globals')
const headers = global.headers;


describe('Leaderboard-Rewards API Testing', function () {
  const baseUrl = 'https://backend.qa.go1percent.com';

  it('Should get all rewards', async function ({ supertest }) {
     const startTime = performance.now();
     await supertest
 
        .request(baseUrl)
        .get("/rewards/getAllRewards")
        .set(headers)
        .expect(200)
        .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

        .then(function(response){

          //The test then checks the response body for the presence of specific properties such as "name," "pointsNeededToRedeem," "description," "rewardType," 
         //"quantity," "expiryDate and" "active ."

            expect(Object.keys(response.body).length).to.be.greaterThan(0);
            expect(response.body.data).length.to.be.greaterThan(0);
            
            expect(response.body.data[1]).to.have.property("id").and.to.be.eq(290);
            expect(response.body.data[1]).to.have.property('name').and.to.be.eq('Poilk');
            expect(response.body.data[1]).to.have.property('pointsNeededToRedeem').and.to.be.eq(900);
            expect(response.body.data[1]).to.have.property('description').and.to.be.eq('testing');
            expect(response.body.data[1]).to.have.property('rewardType').and.to.be.eq('Studio');
            expect(response.body.data[1]).to.have.property('quantity').and.to.be.eq(6);
            expect(response.body.data[1]).to.have.property('expiryDate').and.to.be.eq('2023-10-28T00:00:00.0');
            expect(response.body.data[1]).to.have.property('active').and.to.be.eq(true);

            

        });

      const endTime = performance.now();
      const responseTime = endTime - startTime;
      expect(responseTime).to.be.lessThan(2000); // expect for checking the response time

    });


});
