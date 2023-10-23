const accessToken = '';

describe('api testing', function () {
    it('admin should able to approve the session with feedback form', async function({supertest}) {
      const startTime = performance.now();
      const sessionID = '6535de0c8555d37c0a4f8dbf';

    await supertest
        .request('https://knolx-backend.qa.go1percent.com/')  
        .put(`/v02/sessions/manage/approve/requested/${sessionID}`)
        .set('source','https://nashtechglobal.qa.go1percent.com/')
        .set('Authorization',accessToken)

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