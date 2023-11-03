const headers = require('../../globals');

describe('MyProfile API', function () {
    it('Check All Rewards Data', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
            .request(headers.base_url)
            .get('/rewards/getAllRewards')
            .set('source', headers.source)
            .expect(200);

        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000);

        const rewards = response.body.rewards;
        expect(rewards).to.satisfy((rewards) => {
            return rewards.every(reward => {
                return rewards.hasOwnProperty('name') && typeof rewards.name === 'string' &&
                rewards.hasOwnProperty('description') && typeof rewards.description === 'string';
            });
        }, 'All rewards should have "name" and "description" properties that are strings');
    });

    // it('Check all Knolder ID', async function ({ supertest }) {
    //     const startTime = performance.now();
    //     const response = await supertest
    //         .request(headers.url)
    //         .get('/get/knolderId?knolderEmail=testadmin@nashtechglobal.com')
    //         .expect(200);
    //         const expectedStudioIds = [
    //             'ALL_STUDIO',
    //             'AGILE_COMPETENCY',
    //             'AI_ML_COMPETENCY',
    //             'DEVOPS_COMPETENCY',
    //             'FRONTEND_COMPETENCY',
    //             'JAVA_COMPETENCY',
    //             'SCALA_COMPETENCY',
    //             'TEST_AUTOMATION_COMPETENCY'
    //         ];
    //     const endTime = performance.now();
    //     const responseTime = endTime - startTime;
    //     expect(responseTime).to.be.lessThan(2000, 'Expected response time to be less than 2000ms');

    //     const studios = response.body.data;

    //     const missingCompetencies = studios.filter(studio => !studio.studioId || !expectedStudioIds.includes(studio.studioId));
    //     expect(missingCompetencies.length, 'All competencies should match the expected values').to.equal(0);
    // });

    // it('Get Profile Pic', async function ({ supertest }) {
    //     const startTime = performance.now();
    //     const response = await supertest
    //         .request(headers.base_url)
    //         .get('/profile/getProfilePic?email=testadmin@nashtechglobal.com')
    //         .set('source', headers.source)
    //         .set('authorization', headers.access_token)
    //         .expect(200);
    //     const endTime = performance.now();
    //     const responseTime = endTime - startTime;
    //     expect(responseTime).to.be.lessThan(2000);

    //     const slots = response.body.slots;

    //     const expectedDataTypes = {
    //         id: 'string',
    //         message: 'string'
    //     };

    //     const dataTypesMatch = slots.every(slot => {
    //         return Object.keys(expectedDataTypes).every(field => {
    //             return typeof slot[field] === expectedDataTypes[field];
    //         });
    //     });

    //     expect(dataTypesMatch, 'All fields have correct data types').to.be.true;
    // });
});