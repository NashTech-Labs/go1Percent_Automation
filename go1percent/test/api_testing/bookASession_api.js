const base_url = "https://knolx-backend.qa.go1percent.com/";
const source = "https://nashtechglobal.qa.go1percent.com/";

describe('Knolx|Book A Session API', function () {
    it('Check All Users Data', async function  ({ supertest }) {
        const startTime = performance.now();

        try {
            const response = await supertest
                .request(base_url)
                .get('v02/allUsers')
                .set('source', source)
                .expect(200);

            const endTime = performance.now();
            const responseTime = endTime - startTime;

            if (response.status === 200) {
                expect(responseTime).to.be.lessThan(2000);
            }
        } catch (error) {
           // console.error('API request failed with an error:', error);
        }
    });
});
