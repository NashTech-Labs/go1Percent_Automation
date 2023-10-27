//api-test.js
describe('api testing', function () {
    it('get api test', async function({supertest}) {
      await supertest
        .request("https://backend.qa.go1percent.com")
        .get("/get/knolderId?knolderEmail=testadmin@nashtechglobal.com")
        .set('source','https://nashtechglobal.qa.go1percent.com')

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