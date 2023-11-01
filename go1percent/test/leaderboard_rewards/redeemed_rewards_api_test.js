const globals = require('../../globals')

describe('Leaderboard : Reedemed Rewards API Testing', function () {
  const header = globals.admin.headers;
  const tokenHeaders = globals.admin.tokenHeaders;
  const tokenBody = globals.admin.tokenBody;
  const urls = globals.urls;
  const pageNumber = 1;
  const limit = 10;
  const startDate = "2023-10-23";
  const endDate = "2023-10-24";


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

  //GET all info about rewards redeemed by individuals
  it('Should get the list of employee names with all their details and with the the reward they got (limiting the results to 10 items per page)', async function ({ supertest }) {
    const startTime = Date.now();
    const rewardType = "Individual";
     await supertest
 
        .request(globals.Add_Configuration.BaseUrl)
        .get(`${globals.Redeemed_Reward.GetEndPoints}?rewardType=${rewardType}&pageNumber=${pageNumber}&limit=${limit}`)
        .set(header)
        .expect(200)
        .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

        .then(function(response){

          //checks if the response length is in the range 0 and 10
          
          expect(Object.keys(response.body).length).to.be.greaterThan(0);
          expect(Object.keys(response.body).length).to.be.lessThanOrEqual(10);

          //  checks the response body for the presence of specific properties such as "name,"
          //  "pointsNeededToRedeem," "description," "rewardType," "quantity," "expiryDate and" "active ."

          expect(response.body.data).length.to.be.greaterThan(0);
          expect(response.body.data[0]).to.have.property("redeemId");
          expect(response.body.data[0]).to.have.property("knolderName");
          expect(response.body.data[0]).to.have.property("userProfilePic");
          expect(response.body.data[0]).to.have.property("studio");
          expect(response.body.data[0]).to.have.property("rewardName");
          expect(response.body.data[0]).to.have.property("pointsNeededToRedeem");
          expect(response.body.data[0]).to.have.property("rewardImage");
          expect(response.body.data[0]).to.have.property("rewardType");
          expect(response.body.data[0]).to.have.property("redeemDate");
          expect(response.body.data[0]).to.have.property("processingStatus");
          expect(response.body.data[0]).to.have.property("knolderId");
          expect(response.body.data[0]).to.have.property("rewardId");

          //check if the reward type is individual
          expect(response.body.data[0].rewardType).to.be.equal(rewardType);

          commonExpectation(startTime, response);// expect for checking the response time

        });

    });

    //GET the list of rewards redeemed by studio
    it('Should get the list of information of redeemed rewards within a given time filter', async function ({ supertest }) {
      const startTime = Date.now();
      const rewardType = "Studio";
      await supertest
  
          .request(globals.Add_Configuration.BaseUrl)
          .get(`${globals.Redeemed_Reward.GetEndPoints}?rewardType=${rewardType}&pageNumber=${pageNumber}&limit=${limit}`)
          .set(header) 
          .expect(200)
          .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

          .then(function(response){

            //checks if the response length is in the range 0 and 10
        
            expect(Object.keys(response.body).length).to.be.greaterThan(0);
            expect(Object.keys(response.body).length).to.be.lessThanOrEqual(10);

            /**
             *  checks the response body for the presence of specific properties such as "name,"
             *  "pointsNeededToRedeem," "description," "rewardType," "quantity," "expiryDate and" "active ."
             */

            expect(response.body.data[0]).to.have.property("redeemId");
            expect(response.body.data[0]).to.have.property("knolderName");
            expect(response.body.data[0]).to.have.property("userProfilePic");
            expect(response.body.data[0]).to.have.property("studio");
            expect(response.body.data[0]).to.have.property("rewardName");
            expect(response.body.data[0]).to.have.property("pointsNeededToRedeem");
            expect(response.body.data[0]).to.have.property("rewardImage");
            expect(response.body.data[0]).to.have.property("rewardType");
            expect(response.body.data[0]).to.have.property("redeemDate");
            expect(response.body.data[0]).to.have.property("processingStatus");
            expect(response.body.data[0]).to.have.property("knolderId");
            expect(response.body.data[0]).to.have.property("rewardId");
            console.log(response.body.data[0].rewardType);

            // const studio = new String(response.body.data[0].rewardType);

            // //check if the reward type is individual
            expect(response.body.data[0].rewardType).to.be.equal(rewardType);

            commonExpectation(startTime, response);// expect for checking the response time

          });

      });


    //GET the redeemed rewards info in the given time filter
    it('Should get the list of information of redeemed rewards within a given time filter', async function ({ supertest }) {
      const startTime = Date.now();
      const rewardType = "Individual";
      await supertest
  
          .request(globals.Add_Configuration.BaseUrl)
          .get(`${globals.Redeemed_Reward.GetEndPoints}?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNumber}&limit=${limit}&rewardType=${rewardType}`)
          .set(header) 
          .expect(200)
          .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

          .then(function(response){

            //checks if the response length is in the range 0 and 10
          
            expect(Object.keys(response.body).length).to.be.greaterThan(0);
            expect(Object.keys(response.body).length).to.be.lessThanOrEqual(10);


            /**
             *  checks the response body for the presence of specific properties such as "name,"
             *  "pointsNeededToRedeem," "description," "rewardType," "quantity," "expiryDate and" "active ."
             */
            expect(response.body.data).length.to.be.greaterThan(0);
            expect(response.body.data[0]).to.have.property("redeemId");
            expect(response.body.data[0]).to.have.property("knolderName");
            expect(response.body.data[0]).to.have.property("userProfilePic");
            expect(response.body.data[0]).to.have.property("studio");
            expect(response.body.data[0]).to.have.property("rewardName");
            expect(response.body.data[0]).to.have.property("pointsNeededToRedeem");
            expect(response.body.data[0]).to.have.property("rewardImage");
            expect(response.body.data[0]).to.have.property("rewardType");
            expect(response.body.data[0]).to.have.property("redeemDate");
            expect(response.body.data[0]).to.have.property("processingStatus");
            expect(response.body.data[0]).to.have.property("knolderId");
            expect(response.body.data[0]).to.have.property("rewardId");

            // Check if redeemDate of first item in the list  lies in the range
            const redeemDate = new Date(response.body.data[0].redeemDate);
            const startRange = new Date(startDate);
            const endRange = new Date(endDate);

            expect(redeemDate).to.be.at.least(startRange);
            expect(redeemDate).to.be.at.most(endRange);

            commonExpectation(startTime, response);// expect for checking the response time

          });

      });

      

      

   
});