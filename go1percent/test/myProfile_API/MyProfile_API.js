const globals = require('../../globals');
const headers = globals.admin.headers;
const token_body = globals.admin.tokenBody;
const token_urls = globals.urls;
const urls = globals.Add_Configuration.BaseUrl;
const token_headers = globals.admin.tokenHeaders;

describe('MyProfile API', function () {
    it('Configuring Bearer Token', async function ({ supertest }) {
        // const startTime = performance.now();
        await supertest
          .request(token_urls.token)
          .post("/token")
          .send(token_body)
          .set(token_headers)
          .expect(200)
          .expect('Content-Type', /json/)
          .then(function (response) {
            const token = response.body.access_token;
            headers['Authorization'] = 'Bearer ' + token;
          });
      });
    it('Check All Rewards Data', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
            .request(urls)
            .get('/rewards/getAllRewards')
            .set( headers)
            .expect(200)
            .expect('Content-Type', /json/);

        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(8000);

        const rewards = response.body.rewards;
        expect(rewards).to.satisfy((rewards) => {
            return rewards.every(reward => {
                return rewards.hasOwnProperty('name') && typeof rewards.name === 'string' &&
                rewards.hasOwnProperty('description') && typeof rewards.description === 'string';
            });
        }, 'All rewards should have "name" and "description" properties that are strings');
    });

    it('Check all Knolder ID', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
            .request(urls)
            .get('/get/knolderId?knolderEmail=testadmin@nashtechglobal.com')
            .set( headers)
            .expect(200)
            .expect('Content-Type', /json/);
            
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000, 'Expected response time to be less than 2000ms');

        const resources = response.body.data;
        expect(resources).to.satisfy((resource) => {
            return resources.every(reward => {
                return resources.hasOwnProperty('resource') && typeof resources.name === 'string';
            });
        }, 'All knolder ID should have resource property that is string');
    });

    it('Get Profile Pic', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
            .request(urls)
            .get('/profile/getProfilePic?email=testadmin@nashtechglobal.com')
            .set(headers)
            .expect(200);
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000);

        const resources = response.body.data;
        expect(resources).to.satisfy((resource) => {
            return resources.every(reward => {
                return resources.hasOwnProperty('resource') && typeof resources.name === 'string';
            });
        }, 'All Profile Picture should have rresource property that is string');
    });
});