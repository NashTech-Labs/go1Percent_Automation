const globals = require('../../../globals')
const headers = globals.admin.headers;
const token_headers = globals.admin.tokenHeaders;
const urls = globals.urls;
const token_body = globals.admin.tokenBody;
describe('api testing', function () {
  
  const backendUrl = globals.baseurl;
  it('get api token', async function ({ supertest }) {
    await supertest
        .request("https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect")
        .post("/token")
        .send(token_body)
        .set(token_headers)
        .expect(200)
        .expect('Content-Type', /json/)
        .then(function (response) {
            const token = response._body.access_token;
            headers['Authorization'] = 'Bearer ' + token;
        });
}); 
  it(' location', async function ({ supertest }) {
    await supertest
      .request(backendUrl)  
      .get("/locations")
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function (response) {
        expect(Object.keys(response.body).length).to.be.greaterThan(0);
        expect(response.body.status).to.be.true; 
        expect(response.body.data).to.be.an('array').that.is.not.empty; 

      
        const firstDataItem = response.body.data[0];
         expect(firstDataItem).to.have.property('id').that.is.a('string');
         expect(firstDataItem).to.have.property('name').that.is.a('string');
      })
  })
  it('Update user full name', async function ({ supertest }) {
    const startTime = Date.now();
    await supertest

      .request(backendUrl)
      .post("/profile/updateProfile")
      .send({ "name": "Test Employeeet", "email": "testemployee@nashtechglobal.com" })
      .set(headers)
      .expect(200)
      .expect('Content-Type', 'application/json')  // Expect a response with JSON content type

      .then(function (response) {
        expect(response.body).to.have.property("resource");
        //  commonExpectation(startTime, response);// expect for checking the response time

      });
  })
  it(' getprofile', async function ({ supertest }) {
    await supertest
      .request(backendUrl)  
      .get("/profile/getProfilePic?email=testemployee@nashtechglobal.com")
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function (response) {
        expect(Object.keys(response.body).length).to.be.greaterThan(0);
        expect(response.body.status).to.be.false; 
        expect(response.body.errors).to.be.an('array').that.is.not.empty; 

    
        const firstError = response.body.errors[0];
        expect(firstError).to.have.property('id', 'PFU_013');
        expect(firstError).to.have.property('message', 'profile pic not exist');
      })

  });
  it(' area', async function ({ supertest }) {
    await supertest
      .request(backendUrl)  // Fix the import statement here
      .get("/practice/areas")
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function (response) {
        expect(Array.isArray(response.body)).to.be.true; // Checking if the response is an array

        // Optionally, you can check specific properties of the first item in the array
        const firstDataItem = response.body[0];
        expect(firstDataItem).to.have.property('id').that.is.a('string');
        expect(firstDataItem).to.have.property('name').that.is.a('string');
      })


  })
  it(' studioname', async function ({ supertest }) {
    await supertest
      .request(backendUrl)  
      .get("/studioName")
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function (response) {
        
        expect(Array.isArray(response.body)).to.be.true;

        
        const firstDataItem = response.body[0];
        expect(firstDataItem).to.have.property('studioId').that.is.a('number');
        expect(firstDataItem).to.have.property('studioName').that.is.a('string');
      })


  })
  it(' skill', async function ({ supertest }) {
    await supertest
      .request(backendUrl)  
      .get("/skills?knolderid=666")
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function (response) {
        
        expect(Array.isArray(response.body)).to.be.true;

       
        if (response.body.length > 0) {
          const firstDataItem = response.body[0];
          expect(firstDataItem).to.be.an('object');
          expect(firstDataItem).to.have.property('id').that.is.a('string');
          expect(firstDataItem).to.have.property('name').that.is.a('string');
        }
      })

  })
})
