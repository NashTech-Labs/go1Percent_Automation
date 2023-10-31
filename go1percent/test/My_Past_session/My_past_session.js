const headers = require('../globals')
const accessToken =''

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
   let sessionId ='';
    it('No session is availble in my past session', async function ({ supertest }) {
    const startTime = performance.now();
      
      const response = await supertest

        .request("https://knolx-backend.qa.go1percent.com")
        .get(`/v02/sessions/my?pageNumber=1&pageSize=1000&filter=past`)
        .set('source', 'https://nashtechglobal.qa.go1percent.com')
        .set('Authorization', accessToken)

        .expect(200)
        .expect('Content-Type', 'application/json')
        .then((response)=>{
          console.log(response.body)
          const endTime = performance.now();
          const responseTime = endTime - startTime
          expect(responseTime).to.be.lessThan(2000)

          
        });
    });

    it('No session is availble in my past session', async function ({ supertest }) {
      const startTime = performance.now();
      const response = await supertest

        .request("https://knolx-backend.qa.go1percent.com")
        .get(`/v02/sessions/my?pageNumber=1&pageSize=1000&filter=past`)
        .set('source', 'https://nashtechglobal.qa.go1percent.com')
        .set('Authorization', accessToken)

        .expect(200)
        .expect('Content-Type', 'application/json')
        .then((response)=>{
          console.log(response.body)
          const endTime = performance.now();
          const responseTime = endTime - startTime
          expect(responseTime).to.be.lessThan(2000)
        });
    });

    it('Descriptive page should be visible on opening a session', async function ({ supertest }) {
        const startTime = performance.now();        
        const response = await supertest
          .request("https://knolx-backend.qa.go1percent.com")
          .get('/v02/getSession/6529144d45bc9a797dfbcb19')
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
          .set('Authorization', accessToken)
          
          .expect(200)
          .expect('Content-Type', 'application/json')
          .then((response)=>{
            console.log(response.body)
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(5000);
          });
      });

      it('Back buttom is enable ', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
  
          .request("https://knolx-backend.qa.go1percent.com")
          .get(`/v02/sessions/my?pageNumber=1&pageSize=1000&filter=past`)
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
          .set('Authorization', accessToken)
  
          .expect(200)
          .expect('Content-Type', 'application/json')
          .then((response)=>{
            console.log(response.body)
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(2000)
  
          });
      });


      it('redirect to the Attendance list', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
  
          .request("https://knolx-backend.qa.go1percent.com")
          .get(`/v02/sessions/65364ed48555d37c0a4f8dc7/attendees?knoldersOnly=true`)
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
          .set('Authorization', accessToken)
  
          .expect(200)
          .expect('Content-Type', 'application/json')
          .then((response)=>{
            console.log(response.body)
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(2000)
          });
      });

      it('Redirect to feedback report page', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
  
          .request("https://knolx-backend.qa.go1percent.com")
          .get(`/v02/score/session?sessionId=6529144d45bc9a797dfbcb19`)
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
          .set('Authorization', accessToken)
  
          .expect(200)
          .expect('Content-Type', 'application/json') 
          .then((response)=>{
            console.log(response.body)
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(2000)
  
          });
      });
    });