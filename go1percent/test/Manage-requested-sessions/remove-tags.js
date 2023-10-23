const accessToken = '';

describe('api testing', function () {   
    it('admin should able to remove tags', async function ({ supertest }) {
        const startTime = performance.now();
        const sessionID = '653254cf8555d37c0a4f8d9e';

        const tag ={
            sessionTag: []
        };

        const response = await supertest
          .request("https://knolx-backend.qa.go1percent.com")
          .put(`/v02/sessions/manage/update/${sessionID}`)
          .set('source', 'https://nashtechglobal.qa.go1percent.com')
          .set('Authorization', accessToken)
          .send(tag)

          .expect(200)
          .expect('Content-Type', 'application/json')
          .then((response)=>{
            console.log(response.body)
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(5000);
          });
    });
});
  