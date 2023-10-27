const headers = require('../../globals')

describe('Leaderboard-Rewards API Testing', function () {

  it('Should get all rewards', async function ({ supertest }) {
    const startTime = performance.now();
     await supertest
 
        .request(headers.baseUrl)
        .get("/rewards/getAllRewards")
        .set('source', headers.source)
        .set('Authorization', headers.accessToken)
        .expect(200)
        .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

        .then(function(response){

          //The test then checks the response body for the presence of specific properties such as "name," "pointsNeededToRedeem," "description," "rewardType," 
         //"quantity," "expiryDate and" "active ."

            expect(Object.keys(response.body).length).to.be.greaterThan(0);
            expect(response.body.data).length.to.be.greaterThan(0);
            
            expect(response.body.data[1]).to.have.property("id");
            expect(response.body.data[1]).to.have.property('name');
            expect(response.body.data[1]).to.have.property('pointsNeededToRedeem');
            expect(response.body.data[1]).to.have.property('description');
            expect(response.body.data[1]).to.have.property('rewardType');
            expect(response.body.data[1]).to.have.property('quantity');
            expect(response.body.data[1]).to.have.property('expiryDate');
            expect(response.body.data[1]).to.have.property('active');

        });

      const endTime = performance.now();
      const responseTime = endTime - startTime;
      expect(responseTime).to.be.lessThan(2000); // expect for checking the response time

    });

    it('Should give message on redeeming reward', async function ({ supertest }) {
       const startTime = performance.now();
       await supertest
   
          .request(headers.baseUrl)
          .post("/rewards/redeemRewards")
          .set('source', headers.source)
          .send({
              "rewardId":287,"quantity":1
          })
          .set('Authorization', headers.accessToken)
          .expect(200)
          .expect('Content-Type', 'application/json')  // Expect a response with JSON content type
  
          .then(function(response){
              expect(response.body.errors[0].message).to.be.equal('No more quantity');
  
          });
  
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000); // expect for checking the response time
  
      });

      it('Should display update rewards page with particular reward', async function ({ supertest }) {
         const startTime = performance.now();
         await supertest
     
            .request(headers.baseUrl)
            .get("/rewards/getReward?rewardId=287")
            .set('source', headers.source)
            .set('Authorization', headers.accessToken)
            .expect(200)
            .expect('Content-Type', 'application/json')  // Expect a response with JSON content type
    
            .then(function(response){
             
              expect(response.body.data).to.have.property("id").and.to.be.eq(287);
              expect(response.body.data).to.have.property('name').and.to.be.eq('Eardopes');
              expect(response.body.data).to.have.property('pointsNeededToRedeem').and.to.be.eq(1);
              expect(response.body.data).to.have.property('description').and.to.be.eq('eardopes demo description for testing purpose');
              expect(response.body.data).to.have.property('rewardType').and.to.be.eq('Individual');
              expect(response.body.data).to.have.property('quantity').and.to.be.eq(0);
              expect(response.body.data).to.have.property('expiryDate').and.to.be.eq('2025-08-08T00:00:00.0');
              expect(response.body.data).to.have.property('active').and.to.be.eq(false);
  
            });
    
          const endTime = performance.now();
          const responseTime = endTime - startTime;
          expect(responseTime).to.be.lessThan(2000); // expect for checking the response time
    
        });

});
