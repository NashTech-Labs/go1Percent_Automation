const globals = require('../../../globals')

describe('Leaderboard : Rewards API Testing', function () {
  const header = globals.admin.headers;
  const tokenHeaders = globals.admin.tokenHeaders;
  const tokenBody = globals.admin.tokenBody;
  const urls = globals.urls;
  const rewardId = "286";

  const commonExpectation = (startTimestamp, response) => {
    const endTimestamp = Date.now(); // Record the end time
    const responseTime = endTimestamp - startTimestamp; // Calculate response time in milliseconds
    expect(responseTime).to.be.below(5000); //Response time assertion 
  }

  it('get api token', async function ({ supertest }) {
    await supertest
      .request(urls.token)
      .post("/token")
      .send(tokenBody)
      .set(tokenHeaders)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function (response) {
        const token = response._body.access_token;
        header['Authorization'] = 'Bearer ' + token;
      });
  });

  //GET all rewards
  it('Should get all rewards both for competency and individual', async function ({ supertest }) {
    const startTime = Date.now();
     await supertest
 
        .request(globals.Add_Contribution.BaseUrl)
        .get(globals.Reward.GetEndPoints[0])
        .set(header)
        .expect(200)
        .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

        .then(function(response){

          /**
           *  checks the response body for the presence of specific properties such as "name,"
           *  "pointsNeededToRedeem," "description," "rewardType," "quantity," "expiryDate and" "active ."
           */
          for(let i = 0; i < response.body.data.length; i++){
            expect(response.body.data[i]).to.have.property("id");
            expect(response.body.data[i]).to.have.property('name');
            expect(response.body.data[i]).to.have.property('pointsNeededToRedeem');
            expect(response.body.data[i]).to.have.property('description');
            expect(response.body.data[i]).to.have.property('rewardType');
            expect(response.body.data[i]).to.have.property('quantity');
            expect(response.body.data[i]).to.have.property('expiryDate');
            expect(response.body.data[i]).to.have.property('active');
          }
          
          commonExpectation(startTime, response);// expect for checking the response time

        });

    });

    //GET a particular reward with id
    it('Should display update rewards page for a particular reward', async function ({ supertest }) {
      const startTime = Date.now();
      await supertest
  
          .request(globals.Add_Contribution.BaseUrl)
          .get(`${globals.Reward.GetEndPoints[1]}?rewardId=${rewardId}`)
          .set(header)
          .expect(200)
          .expect('Content-Type', 'application/json')  // Expect a response with JSON content type
  
          .then(function(response){
          
            expect(response.body.data).to.have.property('id').to.equal(286);
            expect(response.body.data).to.have.property('name').and.to.be.eq('Eardopes');
            expect(response.body.data).to.have.property('pointsNeededToRedeem').and.to.be.eq(700);
            expect(response.body.data).to.have.property('description').and.to.be.eq('Boat eardopes');
            expect(response.body.data).to.have.property('rewardType').and.to.be.eq('Individual');
            expect(response.body.data).to.have.property('quantity').and.to.be.eq(2);
            expect(response.body.data).to.have.property('expiryDate').and.to.be.eq('2025-10-30T00:00:00.0');
            expect(response.body.data).to.have.property('active').and.to.be.eq(true);

            commonExpectation(startTime, response);// expect for checking the response time

          });
      });
});