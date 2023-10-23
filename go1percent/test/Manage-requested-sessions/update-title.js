const accessToken = '';

describe('api testing', function () {
    it('Verify that admin should able to update the title ', async function({ supertest }) {
        const startTime = performance.now();
  
        const sessionID = '653254cf8555d37c0a4f8d9e';

      const payload = {
        topic: 'testing'
      };

      const response = await supertest
        .request("https://knolx-backend.qa.go1percent.com")  
        .put(`/v02/sessions/manage/update/${sessionID}`)
        .set('source','https://nashtechglobal.qa.go1percent.com')
        .set('Authorization', accessToken)
        .send(payload)

        .expect(200)
        .expect('Content-Type', 'application/json')
        .expect('Content-Length', '43')
        .then((response)=>{
          console.log(response.body)
          const endTime = performance.now();
          const responseTime = endTime - startTime
          expect(responseTime).to.be.lessThan(2000);
        });
    });
});