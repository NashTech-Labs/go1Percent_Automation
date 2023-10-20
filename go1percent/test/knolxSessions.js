const base_url = "https://knolx-backend.qa.go1percent.com/";
const source = "https://nashtechglobal.qa.go1percent.com";

describe('Knolx|Sessions APIs', function () {
    it('Search session using Nasher as testadmin in Upcoming Sessions Page', async function ({ supertest }) {
        const startTime = performance.now();
        await supertest
            .request(base_url)
            .get('v02/sessions')
            .query({
                'pageNumber': '1',
                'pageSize': '10',
                'filter': 'approved',
                'search': 'testadmin'
            })
            .set('source', source)
            .expect(200)
            .then((response) => {
                try {
                    const endTime = performance.now();
                    const responseTime = endTime - startTime;
                    if (response.status === 200) {
                        expect(responseTime).to.be.lessThan(2000);
                    } else {
                        console.error('API request failed');
                    }
                } catch (error) {
                    console.error('API request failed with an error:', error);
                }
                expect(response.body.knolx[0].presenterDetail.fullName).to.be.eq('test admin')
            })
    })
});