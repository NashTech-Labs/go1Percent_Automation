const headers = require('../../globals')

describe('Knolx|Sessions APIs', function () {
    it('Search session using Nasher as testadmin in Upcoming Sessions Page', async function ({ supertest }) {
        const startTime = new Date().getTime();
        await supertest
            .request(headers.base_url)
            .get('v02/sessions')
            .query(headers.queryNasher)
            .set('source', headers.source)
            .expect(200)
            .expect('Content-Type', /json/)

            .then((response) => {
                endTime = new Date().getTime();
                const responseTime = endTime - startTime;
                //asserting response time.
                expect(responseTime).to.be.lessThan(2000);
                // then checks the response body for the presence of specific properties such as "id," "presenter details," "co presenter details", "date", "time" etc.
                expect(Object.keys(response.body).length).to.be.greaterThan(0);
                expect(response.body.knolx).length.to.be.greaterThan(0);
                expect(response.body.knolx[0]).to.have.property("id");
                expect(response.body.knolx[0]).to.have.property("presenterDetail");
                expect(response.body.knolx[0]).to.have.property("dateTime");
                expect(response.body.knolx[0]).to.have.property("sessionDurationInMins");
                expect(response.body.knolx[0]).to.have.property("topic");
                expect(response.body.knolx[0]).to.have.property("category");
                expect(response.body.knolx[0]).to.have.property("subCategory");
                expect(response.body.knolx[0]).to.have.property("feedbackExpriationDate");
                expect(response.body.knolx[0]).to.have.property("sessionType");
                expect(response.body.knolx[0]).to.have.property("sessionState");
                expect(response.body.knolx[0]).to.have.property("sessionDescription");
                expect(response.body.knolx[0]).to.have.property("contentAvailable");
                expect(response.body.knolx[0]).to.have.property("content");

                expect(response.body.knolx[0].presenterDetail.fullName).to.be.eq('test admin')
            })


    }),
        it('Search session using Session Title as TestAutomationTitle in Upcoming Sessions Page', async function ({ supertest }) {
            const startTime = new Date().getTime();
            await supertest
                .request(headers.base_url)
                .get('v02/sessions')
                .query(headers.queryTestTitle)
                .set('source', headers.source)
                .expect(200)
                .expect('Content-Type', /json/)
                .then((response) => {
                    endTime = new Date().getTime();
                    const responseTime = endTime - startTime;
                    //asserting response time.
                    expect(responseTime).to.be.lessThan(2000);
                    expect(Object.keys(response.body).length).to.be.greaterThan(0);
                    expect(response.body.knolx).length.to.be.greaterThan(0);
                    expect(response.body.knolx[0]).to.have.property("id");
                    expect(response.body.knolx[0]).to.have.property("presenterDetail");
                    expect(response.body.knolx[0]).to.have.property("dateTime");
                    expect(response.body.knolx[0]).to.have.property("sessionDurationInMins");
                    expect(response.body.knolx[0]).to.have.property("topic");
                    expect(response.body.knolx[0]).to.have.property("category");
                    expect(response.body.knolx[0]).to.have.property("subCategory");
                    expect(response.body.knolx[0]).to.have.property("feedbackExpriationDate");
                    expect(response.body.knolx[0]).to.have.property("sessionType");
                    expect(response.body.knolx[0]).to.have.property("sessionState");
                    expect(response.body.knolx[0]).to.have.property("sessionDescription");
                    expect(response.body.knolx[0]).to.have.property("contentAvailable");
                    expect(response.body.knolx[0]).to.have.property("content");

                    expect(response.body.knolx[0].topic).to.contains('TestAutomationTitle')
                })

        }),
        it('Filter Session using Competency as TEST AUTOMATION COMPETENCY in Upcoming Sessions Page', async function ({ supertest }) {
            const startTime = new Date().getTime();
            await supertest
                .request(headers.base_url)
                .get('v02/sessions/filters')
                .query(headers.queryUsingCompetency)
                .set('source', headers.source)
                .expect(200)
                .expect('Content-Type', /json/)
                .then((response) => {
                    endTime = new Date().getTime();
                    const responseTime = endTime - startTime;
                    //asserting response time.
                    expect(responseTime).to.be.lessThan(2000);
                    expect(Object.keys(response.body).length).to.be.greaterThan(0);
                    expect(response.body.knolx).length.to.be.greaterThan(0);
                    expect(response.body.knolx[0]).to.have.property("id");
                    expect(response.body.knolx[0]).to.have.property("presenterDetail");
                    expect(response.body.knolx[0]).to.have.property("dateTime");
                    expect(response.body.knolx[0]).to.have.property("sessionDurationInMins");
                    expect(response.body.knolx[0]).to.have.property("topic");
                    expect(response.body.knolx[0]).to.have.property("category");
                    expect(response.body.knolx[0]).to.have.property("subCategory");
                    expect(response.body.knolx[0]).to.have.property("feedbackExpriationDate");
                    expect(response.body.knolx[0]).to.have.property("sessionType");
                    expect(response.body.knolx[0]).to.have.property("sessionState");
                    expect(response.body.knolx[0]).to.have.property("sessionDescription");
                    expect(response.body.knolx[0]).to.have.property("contentAvailable");
                    expect(response.body.knolx[0]).to.have.property("content");

                    expect(response.body.knolx[0].category).to.be.eq('TEST AUTOMATION COMPETENCY')
                })

        }),
        it('Filter Session using All Sessions as Knolx in Upcoming Sessions Page', async function ({ supertest }) {
            const startTime = new Date().getTime();
            await supertest
                .request(headers.base_url)
                .get('v02/sessions/filters')
                .query(headers.queryUsingAllSessions)
                .set('source', headers.source)
                .expect(200)
                .expect('Content-Type', /json/)

                .then((response) => {
                    endTime = new Date().getTime();
                    const responseTime = endTime - startTime;
                    //asserting response time.
                    expect(responseTime).to.be.lessThan(2000);
                    expect(Object.keys(response.body).length).to.be.greaterThan(0);
                    expect(response.body.knolx).length.to.be.greaterThan(0);
                    expect(response.body.knolx[0]).to.have.property("id");
                    expect(response.body.knolx[0]).to.have.property("presenterDetail");
                    expect(response.body.knolx[0]).to.have.property("dateTime");
                    expect(response.body.knolx[0]).to.have.property("sessionDurationInMins");
                    expect(response.body.knolx[0]).to.have.property("topic");
                    expect(response.body.knolx[0]).to.have.property("category");
                    expect(response.body.knolx[0]).to.have.property("subCategory");
                    expect(response.body.knolx[0]).to.have.property("feedbackExpriationDate");
                    expect(response.body.knolx[0]).to.have.property("sessionType");
                    expect(response.body.knolx[0]).to.have.property("sessionState");
                    expect(response.body.knolx[0]).to.have.property("sessionDescription");
                    expect(response.body.knolx[0]).to.have.property("contentAvailable");
                    expect(response.body.knolx[0]).to.have.property("content");

                    expect(response.body.knolx[0].sessionType).to.be.eq('Knolx')
                })

        }),
        it('Filter Session using All Time as 1698949800000 in Upcoming Sessions Page', async function ({ supertest }) {
            const startTime = new Date().getTime();
            await supertest
                .request(headers.base_url)
                .get('v02/sessions/filters')
                .query(headers.queryAllTime)
                .set('source', headers.source)
                .expect(200)
                .expect('Content-Type', /json/)

                .then((response) => {
                    endTime = new Date().getTime();
                    const responseTime = endTime - startTime;
                    //asserting response time.
                    expect(responseTime).to.be.lessThan(2000);
                    expect(Object.keys(response.body).length).to.be.greaterThan(0);
                    expect(response.body.knolx).length.to.be.greaterThan(0);
                    expect(response.body.knolx[0]).to.have.property("id");
                    expect(response.body.knolx[0]).to.have.property("presenterDetail");
                    expect(response.body.knolx[0]).to.have.property("dateTime");
                    expect(response.body.knolx[0]).to.have.property("sessionDurationInMins");
                    expect(response.body.knolx[0]).to.have.property("topic");
                    expect(response.body.knolx[0]).to.have.property("category");
                    expect(response.body.knolx[0]).to.have.property("subCategory");
                    expect(response.body.knolx[0]).to.have.property("feedbackExpriationDate");
                    expect(response.body.knolx[0]).to.have.property("sessionType");
                    expect(response.body.knolx[0]).to.have.property("sessionState");
                    expect(response.body.knolx[0]).to.have.property("sessionDescription");
                    expect(response.body.knolx[0]).to.have.property("contentAvailable");
                    expect(response.body.knolx[0]).to.have.property("content");

                    expect(response.body.knolx[0].dateTime).to.be.eq(1699008300000)
                })

        }),
        it('GET session Details about test employee in Past Sessions Page', async function ({ supertest }) {
            const startTime = new Date().getTime();
            await supertest
                .request(headers.base_url)
                .get('v02/getSession/6529144d45bc9a797dfbcb19')
                .query(headers.queryAllTime)
                .set('source', headers.source)
                .set('authorization', headers.access_token)
                .expect(200)
                .expect('Content-Type', /json/)

                .then((response) => {
                    endTime = new Date().getTime();
                    const responseTime = endTime - startTime;
                    //asserting response time.
                    expect(responseTime).to.be.lessThan(2000);
                    expect(Object.keys(response.body).length).to.be.greaterThan(0);
                    expect(response.body).to.have.property("id");
                    expect(response.body).to.have.property("presenterDetail");
                    expect(response.body).to.have.property("dateTime");
                    expect(response.body).to.have.property("sessionDurationInMins");
                    expect(response.body).to.have.property("topic");
                    expect(response.body).to.have.property("category");
                    expect(response.body).to.have.property("subCategory");
                    expect(response.body).to.have.property("feedbackExpriationDate");
                    expect(response.body).to.have.property("sessionType");
                    expect(response.body).to.have.property("sessionState");
                    expect(response.body).to.have.property("sessionDescription");
                    expect(response.body).to.have.property("youtubeURL");
                    expect(response.body).to.have.property("slideshareURL");
                    expect(response.body).to.have.property("slideURL");
                    expect(response.body).to.have.property("sessionTag");
                    expect(response.body).to.have.property("isAttendanceUploaded");
                    expect(response.body).to.have.property("isFeedbackAvailable");
                    expect(response.body).to.have.property("isHighlightedAttendeeAvailable");
                    expect(response.body).to.have.property("feedbackFormName");
                    expect(response.body).to.have.property("presenterPic");
                    expect(response.body).to.have.property("coPresenterPic");

                    expect(response.body.sessionDescription).to.be.eq(headers.sessionDescriptionInPast)
                })


        }),
        it('Search session using Session Title as Testing Ticket in Past Sessions Page', async function ({ supertest }) {
            const startTime = new Date().getTime();
            await supertest
                .request(headers.base_url)
                .get('v02/sessions?search=Testing%20Ticket')
                .query(headers.queryUsingTitlePast)
                .set('source', headers.source)
                .expect(200)
                .expect('Content-Type', /json/)

                .then((response) => {
                    endTime = new Date().getTime();
                    const responseTime = endTime - startTime;
                    //asserting response time.
                    expect(responseTime).to.be.lessThan(2000);
                    expect(Object.keys(response.body).length).to.be.greaterThan(0);
                    expect(response.body.knolx).length.to.be.greaterThan(0);
                    expect(response.body.knolx[0]).to.have.property("id");
                    expect(response.body.knolx[0]).to.have.property("presenterDetail");
                    expect(response.body.knolx[0]).to.have.property("dateTime");
                    expect(response.body.knolx[0]).to.have.property("sessionDurationInMins");
                    expect(response.body.knolx[0]).to.have.property("topic");
                    expect(response.body.knolx[0]).to.have.property("category");
                    expect(response.body.knolx[0]).to.have.property("subCategory");
                    expect(response.body.knolx[0]).to.have.property("feedbackExpriationDate");
                    expect(response.body.knolx[0]).to.have.property("sessionType");
                    expect(response.body.knolx[0]).to.have.property("sessionState");
                    expect(response.body.knolx[0]).to.have.property("sessionDescription");
                    expect(response.body.knolx[0]).to.have.property("contentAvailable");
                    expect(response.body.knolx[0]).to.have.property("content");

                    expect(response.body.knolx[0].topic).to.be.eq('Testing Ticket')
                })

        }),
        it('Filter Session using Competency as TEST AUTOMATION COMPETENCY in Past Sessions Page', async function ({ supertest }) {
            const startTime = new Date().getTime();
            await supertest
                .request(headers.base_url)
                .get('v02/sessions/filters')
                .query(headers.queryUsingCompetencyPast)
                .set('source', headers.source)
                .expect(200)
                .expect('Content-Type', /json/)

                .then((response) => {
                    endTime = new Date().getTime();
                    const responseTime = endTime - startTime;
                    //asserting response time.
                    expect(responseTime).to.be.lessThan(2000);
                    expect(Object.keys(response.body).length).to.be.greaterThan(0);
                    expect(response.body.knolx).length.to.be.greaterThan(0);
                    expect(response.body.knolx[0]).to.have.property("id");
                    expect(response.body.knolx[0]).to.have.property("presenterDetail");
                    expect(response.body.knolx[0]).to.have.property("dateTime");
                    expect(response.body.knolx[0]).to.have.property("sessionDurationInMins");
                    expect(response.body.knolx[0]).to.have.property("topic");
                    expect(response.body.knolx[0]).to.have.property("category");
                    expect(response.body.knolx[0]).to.have.property("subCategory");
                    expect(response.body.knolx[0]).to.have.property("feedbackExpriationDate");
                    expect(response.body.knolx[0]).to.have.property("sessionType");
                    expect(response.body.knolx[0]).to.have.property("sessionState");
                    expect(response.body.knolx[0]).to.have.property("sessionDescription");
                    expect(response.body.knolx[0]).to.have.property("contentAvailable");
                    expect(response.body.knolx[0]).to.have.property("content");

                    expect(response.body.knolx[0].category).to.contains('TEST AUTOMATION COMPETENCY')
                })

        }),
        it('Filter Session using All Sessions as Knolx in Past Sessions Page', async function ({ supertest }) {
            const startTime = new Date().getTime();
            await supertest
                .request(headers.base_url)
                .get('v02/sessions/filters')
                .query(headers.queryUsingAllSessionsPast)
                .set('source', headers.source)
                .expect(200)
                .expect('Content-Type', /json/)

                .then((response) => {
                    endTime = new Date().getTime();
                    const responseTime = endTime - startTime;
                    //asserting response time.
                    expect(responseTime).to.be.lessThan(2000);
                    expect(Object.keys(response.body).length).to.be.greaterThan(0);
                    expect(response.body.knolx).length.to.be.greaterThan(0);
                    expect(response.body.knolx[0]).to.have.property("id");
                    expect(response.body.knolx[0]).to.have.property("presenterDetail");
                    expect(response.body.knolx[0]).to.have.property("dateTime");
                    expect(response.body.knolx[0]).to.have.property("sessionDurationInMins");
                    expect(response.body.knolx[0]).to.have.property("topic");
                    expect(response.body.knolx[0]).to.have.property("category");
                    expect(response.body.knolx[0]).to.have.property("subCategory");
                    expect(response.body.knolx[0]).to.have.property("feedbackExpriationDate");
                    expect(response.body.knolx[0]).to.have.property("sessionType");
                    expect(response.body.knolx[0]).to.have.property("sessionState");
                    expect(response.body.knolx[0]).to.have.property("sessionDescription");
                    expect(response.body.knolx[0]).to.have.property("contentAvailable");
                    expect(response.body.knolx[0]).to.have.property("content");

                    expect(response.body.knolx[0].sessionType).to.be.eq('Knolx')
                })

        }),
        it('Filter Session using All Time as 1697259310000 in Past Sessions Page', async function ({ supertest }) {
            const startTime = new Date().getTime();
            await supertest
                .request(headers.base_url)
                .get('v02/sessions/filters')
                .query(headers.queryAllTimePast)
                .set('source', headers.source)
                .expect(200)
                .expect('Content-Type', /json/)

                .then((response) => {
                    endTime = new Date().getTime();
                    const responseTime = endTime - startTime;
                    //asserting response time.
                    expect(responseTime).to.be.lessThan(2000);
                    expect(Object.keys(response.body).length).to.be.greaterThan(0);
                    expect(response.body.knolx).length.to.be.greaterThan(0);
                    expect(response.body.knolx[0]).to.have.property("id");
                    expect(response.body.knolx[0]).to.have.property("presenterDetail");
                    expect(response.body.knolx[0]).to.have.property("dateTime");
                    expect(response.body.knolx[0]).to.have.property("sessionDurationInMins");
                    expect(response.body.knolx[0]).to.have.property("topic");
                    expect(response.body.knolx[0]).to.have.property("category");
                    expect(response.body.knolx[0]).to.have.property("subCategory");
                    expect(response.body.knolx[0]).to.have.property("feedbackExpriationDate");
                    expect(response.body.knolx[0]).to.have.property("sessionType");
                    expect(response.body.knolx[0]).to.have.property("sessionState");
                    expect(response.body.knolx[0]).to.have.property("sessionDescription");
                    expect(response.body.knolx[0]).to.have.property("contentAvailable");
                    expect(response.body.knolx[0]).to.have.property("content");

                    expect(response.body.knolx[0].dateTime).to.be.eq(1697284140000)
                })

        })
});