import request from 'supertest';
import { assert, expect } from 'chai';
import { admin } from '../../../globals'
import { baseURL } from '../../../globals';

describe('Leaderboard-Rewards API Testing', function () {
    const headers = admin.headers;    
    const tokenHeaders = admin.tokenHeaders;
    const tokenBody = admin.tokenBody;
    const token_urls = admin.techhubUrls;
    const urls = baseURL;

    const commonExpectation = (startTimestamp: number, response: any) => {
        const endTimestamp = Date.now(); // Record the end time
        const responseTime = endTimestamp - startTimestamp; // Calculate response time in milliseconds
        expect(responseTime).to.be.below(120000); //Response time assertion 
    }

    //Generate Bearer Token
    before(async function () {
      const response: any = await request(token_urls.token)
        .post("/token")
        .set(tokenHeaders) // Set your custom headers here
        .send(tokenBody)
        .expect(200)
        .expect('Content-Type', /json/)
        .then(function (response: any) {
          const token = response.body.access_token;
          headers['Authorization'] = 'Bearer ' + token;
        });
    });
    it('Check All Rewards Data', async function () {
        const startTime = Date.now();
        request(urls.base_url)
            .get("/rewards/getAllRewards")
            .set(headers)
            .expect(200)
            .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

            .then((response) => {

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

                commonExpectation(startTime, response);// expect for checking the response time

            });

    });
        it('Check all Knolder ID', async function () {
            const startTime = performance.now();
            const response = await request(urls.base_url)
                .get('/get/knolderId?knolderEmail=testadmin@nashtechglobal.com')
                .set(headers)
                .expect(200)
                .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

                .then( (response) => {

                    //The test then checks the response body for the presence of specific properties such as "name," "pointsNeededToRedeem," "description," "rewardType," 
                    //"quantity," "expiryDate and" "active ."

                  

                    expect(response.body).to.have.property("resource");
                    expect(response.body).to.have.property('status');
                    expect(response.body).to.have.property('data');

                    commonExpectation(startTime, response);// expect for checking the response time

        });
    });

    it('Get Profile Pic', async function () {
        const startTime = performance.now();
        const response = await request(urls.base_url)
            .get('/profile/getProfilePic?email=testadmin@nashtechglobal.com')
            .set(headers)
            .expect(200)
            .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

            .then( (response) => {

                //The test then checks the response body for the presence of specific properties such as "name," "pointsNeededToRedeem," "description," "rewardType," 
                //"quantity," "expiryDate and" "active ."

               


                expect(response.body).to.have.property("resource");
                expect(response.body).to.have.property('status');


                commonExpectation(startTime, response);// expect for checking the response time

            });
    });
});
