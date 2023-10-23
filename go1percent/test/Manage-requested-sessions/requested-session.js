const accessToken = '';

describe('api testing', function () {   
    it('admin should able to see the available requested sessions', async function ({ supertest }) {
      const startTime = performance.now();

      const pageNumber = 1; 
      const pageSize = 10; 
      const filter = 'requested'; 
      const search = '';
  
      const response = await supertest
        .request("https://knolx-backend.qa.go1percent.com")
        .get(`/v02/sessions/manage?pageNumber=${pageNumber}&pageSize=${pageSize}&filter=${filter}&search=${search}`)
        .set('source', 'https://nashtechglobal.qa.go1percent.com')
        .set('Authorization', accessToken)
  
        .expect(200)
        .expect('Content-Type', 'application/json')
        
        .then((response)=>{
          console.log(response.body)
          const endTime = performance.now();
          const responseTime = endTime - startTime
          expect(responseTime).to.be.lessThan(2000)

          console.log(`Elapsed time in milliseconds: ${responseTime}`);
        });
    });
});
