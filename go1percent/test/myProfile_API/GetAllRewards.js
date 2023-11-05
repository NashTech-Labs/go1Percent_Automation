//api-test.js
describe('api testing', function () {
    it('get All Rewards', async function({supertest}) {
      await supertest
        .request("https://backend.ntprod.go1percent.com")
        .get("/rewards/getAllRewards")
        .set('source','https://nashtechglobal.qa.go1percent.com')
        .set('Origin','https://nashtechglobal.go1percent.com')

        .set('Authorization', '')

        .expect(200)
        .expect('Content-Type', /json/)
        const startTime = performance.now();

        const endTime = performance.now();

        const responseTime = endTime - startTime;

        expect(responseTime).to.be.lessThan(2000);
        //.then(function(response){
            //expect(response._body.length).to.be.greaterThan(0);
        //});
    });
  });