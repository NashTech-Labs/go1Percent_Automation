const globals = require('../globals')


describe('api testing', function () {
    const headers = globals.admin.headers;
  const tokenHeaders = globals.admin.tokenHeaders;
  const tokenBody = globals.admin.tokenBody;
  const urls = globals.urls;
    
    it('Post APi Test', async function ({ supertest }) {
        await supertest
            .request(urls.token)
            .post("/token")
            .set(tokenHeaders) // Set your custom headers here
            .send(tokenBody)
            .expect(200)
            .expect('Content-Type', /json/)

            .then(function (response) {

                const token = response._body.access_token;
                headers['Authorization'] = 'Bearer ' + token;
            });
    });

    it('get api test', async function ({ supertest }) {

        await supertest
            .request(urls.go1percentBase)
            .get("sessions/my?pageNumber=1&pageSize=1000&filter=upcoming")
            .set(headers) // Set your custom headers here
            .expect(200)
            .expect('Content-Type', /json/)
          .then(function (response) 
          {
            const startTime = performance.now();

        const endTime = performance.now();

        const responseTime = endTime - startTime;

        expect(responseTime).to.be.lessThan(2000);
     expect(response.body.sessions[0].id).to.be.equal("6526385058f83108585a4002"); // Use response.body to access the response body
          
        
        }) 
    });
    it('put api test', async function({supertest}) {
        await supertest
          .request(urls.go1percentBase)
          .put("user/session/652d257431dc787a6ee7679e")
          .set(headers)
          .send({
              "topic": "Knoldus",
              "sessionDescription": "Knolduskkkkkkkkkkkkkkhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
              "slideURL": "www.goggle.com",
              "sessionTag": [
                "Automation","Testing"
              ]
            })
          .expect(200)
          .expect('Content-Type', /json/)
          .then(function(response){
              expect(response._body.status).to.be.equal("652d257431dc787a6ee7679e");
              
              const startTime = performance.now();
  
          const endTime = performance.now();
  
          const responseTime = endTime - startTime;
  
          expect(responseTime).to.be.lessThan(2000);
          });
      });














});



