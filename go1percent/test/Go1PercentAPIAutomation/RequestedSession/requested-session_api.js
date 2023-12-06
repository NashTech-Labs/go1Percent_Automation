const globals = require('../../../globals')

const addTag ={
  sessionTag: 'test'
};

const removeTag ={
  sessionTag: []
};

const title = {
  topic: 'testing'
};

describe('api testing', function () {
  let sessionID = '';

    const baseUrl = "https://nashtechglobal.qa.go1percent.com/my-dashboard";
    const header = globals.admin.headers;
    const tokenHeaders = globals.admin.tokenHeaders;
    const tokenBody = globals.admin.tokenBody;
  
    const commonExpectation = (startTimestamp, response) => {
      const endTimestamp = Date.now(); // Record the end time
      const responseTime = endTimestamp - startTimestamp; // Calculate response time in milliseconds
      console.log("time" + responseTime);
      expect(responseTime).to.be.below(2000); //Response time assertion
  }
    it('get api token', async function ({ supertest }) {
        await supertest
            .request("https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect")
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

    it('admin should able to see the available requested sessions', async function ({ supertest }) {
      const startTime = Date.now();  
      const response = await supertest
        .request(baseUrl)
        .get(`/v02/sessions/manage?pageNumber=${globals.queryRequested.pageNumber}&pageSize=${globals.queryRequested.pageSize}&filter=${globals.queryRequested.filter}&search=${globals.queryRequested.search}`)
        .set(header)
        .expect(200)
        .expect('Content-Type', 'application/json')
        .then((response)=>{
          expect(response.body).to.have.property('sessions').that.is.an('array');
          commonExpectation(startTime, response);
        });
    });


    it('admin should able to add tags', async function ({ supertest }) {
      const startTime = Date.now();
      const response = await supertest
        .request(baseUrl)
        .put(`/v02/sessions/manage/update/${sessionID}`)
        .set(header)
        .send(addTag)
        .expect(200)
        .expect('Content-Type', 'application/json')
        .then((response)=>{
          expect(response.body.sessionID).to.be.not.empty;
          expect(response.body).to.have.property('sessionTag').that.is.an('array');;
          expect(response.body.sessionTag).to.equal(addTag.sessionTag);
          expect(response.body.sessionTag).to.have.lengthOf.at.least(1);
          commonExpectation(startTime, response);
        });
    });


    it('admin should able to remove tags', async function ({ supertest }) {
      const startTime = Date.now();

      const response = await supertest
        .request(baseUrl)
        .put(`/v02/sessions/manage/update/${sessionID}`)
        .set(header)
        .send(removeTag)
        .expect(200)
        .expect('Content-Type', 'application/json')
        .then((response)=>{
          expect(response.body.sessionID).to.be.not.empty;
          expect(response.body.sessionTag).to.equal(removeTag.sessionTag);
          expect(response.body.sessionTag).to.be.empty;
          commonExpectation(startTime, response);
        });
  });


  it('admin should able to approve the session with feedback form', async function({supertest}) {
    const startTime = Date.now();

    const response = await supertest
      .request(baseUrl)  
      .put(`/v02/sessions/manage/approve/requested/${sessionID}`)
      .set(header)
      .expect(200)
      .expect('Content-Type', 'application/json')
      .then((response)=>{
        expect(response.body.sessionID).to.be.not.empty;
        expect(response.body).to.have.property('feedbackForm');
        commonExpectation(startTime, response);
      });
  });


  it('Verify that admin should able to update the title ', async function({ supertest }) {
    const startTime = Date.now();

    const response = await supertest
      .request(baseUrl)  
      .put(`/v02/sessions/manage/update/${sessionID}`)
      .set(header)
      .send(title)
      .expect(200)
      .expect('Content-Type', 'application/json')
      .expect('Content-Length', '42')
      .then((response)=>{
        expect(response.body.sessionID).to.be.not.empty;
        expect(response.body.topic).to.equal(title.topic);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal('Successfully updated');
        commonExpectation(startTime, response);
      });
  });


});
