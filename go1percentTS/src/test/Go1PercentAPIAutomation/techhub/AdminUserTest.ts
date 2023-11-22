import request from 'supertest';
import {expect} from 'chai';
import {admin} from '../../../../globals'

describe('api testing', function () {

  const headers = admin.headers;
  const tokenHeaders = admin.tokenHeaders;
  const tokenBody = admin.tokenBody;
  const urls = admin.techhubUrls;

  let approval_req: any = [];

  const commonExpectation = (startTimestamp: number, response: any) => {
    const endTimestamp = Date.now(); // Record the end time
    const responseTime = endTimestamp - startTimestamp; // Calculate response time in milliseconds
    expect(responseTime).to.be.below(5000); //Response time assertion 
    expect(response.body.status).to.be.equal('success'); //Response attribute assertion
  }

  it('get api token', async function () {

    const response = await request(urls.token)
      .post("/token")
      .send(tokenBody)
      .set(tokenHeaders)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function (response) {
        const token = response.body.access_token;
        headers['Authorization'] = 'Bearer ' + token;
      });
  });

  it('Fetch Approval Requests', async function () {
    const startTimestamp = Date.now();
    const response = await request(urls.go1percentBase + "/template")
      .get("/viewRequested?limit=10&page=1")
      .set(headers) //Authorisation Token and Source   
      .expect(200) //Response code
      .expect('Content-Type', /json/)
      .then(function (response) {
        commonExpectation(startTimestamp, response);
        approval_req = response.body.data.templates //Response body template list
      });
  });

  it('Fetch All TechHubs Requests', async function () {
    const startTimestamp = Date.now();
    const response = await request(urls.go1percentBase + "/templates")
      .get("/orgWide?limit=10&page=1")
      .set(headers) //Authorisation Token and Source   
      .expect(200) //Response code
      .expect('Content-Type', /json/)
      .then(function (response) {
        commonExpectation(startTimestamp, response);
      });
  });

  it ('Approves Request', async function () {
    const startTimestamp = Date.now();
    const response = await request(urls.go1percentBase + "/template")
      .post("/approve")
      .send(
        { "templateId": approval_req[0].templateId, "status": "approved", "description": "" } //Template Id
      )
      .set(headers) //Authorisation Token and Source  
      .expect(200) //Response code           
      .expect('Content-Type', /json/)
      .then(function (response) {
        commonExpectation(startTimestamp, response);
      });
  });

  it ('Rejects Request', async function () {
    const startTimestamp = Date.now();
    const response = await request(urls.go1percentBase + "/template")
      .post("/approve")
      .set(headers) //Authorisation Token and Source
      .send(
        { "templateId": approval_req[1].templateId, "status": "reject", "description": "REJECTED" } //Template ID
      )
      .expect(200) //Response code
      .expect('Content-Type', /json/)
      .then(function (response) {
        commonExpectation(startTimestamp, response);
      });
  });
});