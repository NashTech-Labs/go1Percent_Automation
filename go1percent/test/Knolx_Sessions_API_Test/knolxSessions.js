const base_url = "https://knolx-backend.qa.go1percent.com/";
const source = "https://nashtechglobal.qa.go1percent.com";
const access_token = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTgwNTMxMDcsImlhdCI6MTY5ODA1MTMwNywianRpIjoiNDYyMDAxYzMtZTk0OC00NDU2LTk0YTYtZGU5NGZiYjkwZTVjIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmdvMXBlcmNlbnQuY29tL2F1dGgvcmVhbG1zL25hc2h0ZWNoIiwiYXVkIjpbImxlYWRlcmJvYXJkLXFhLXVpIiwibGVhZGVyYm9hcmQtZGV2LXVpIiwiYWNjb3VudCJdLCJzdWIiOiJhNzE5YTJiMi0zY2FjLTRjMTItOTQ1Yi1kNzMzMGE4MTkxMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJsZWFkZXJib2FyZC11aSIsInNlc3Npb25fc3RhdGUiOiI2ZTE2OGViZS02YzVjLTRjNzctOWMwNC1iNTE2MTFkMDI3ZjgiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vbGVhZGVyYm9hcmQuZ28xcGVyY2VudC5jb20iLCJodHRwczovL3JlcG9ydC5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vbmFzaHRlY2hnbG9iYWwuZ28xcGVyY2VudC5jb20iLCJodHRwczovL2tub2xkdXMuZ28xcGVyY2VudC5jb20iLCJodHRwOi8vbG9jYWxob3N0OjgwODgiLCJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJodHRwczovL2xlYWRlcmJvYXJkLmtub2xkdXMuY29tIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtbmFzaHRlY2giLCJ1bWFfYXV0aG9yaXphdGlvbiIsImVtcGxveWVlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsibGVhZGVyYm9hcmQtcWEtdWkiOnsicm9sZXMiOlsiYWRtaW4iLCJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtdWkiOnsicm9sZXMiOlsiYWRtaW4iLCJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjZlMTY4ZWJlLTZjNWMtNGM3Ny05YzA0LWI1MTYxMWQwMjdmOCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3QgYWRtaW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0YWRtaW4iLCJnaXZlbl9uYW1lIjoidGVzdCIsImZhbWlseV9uYW1lIjoiYWRtaW4iLCJlbWFpbCI6InRlc3RhZG1pbkBuYXNodGVjaGdsb2JhbC5jb20ifQ.UV1MR-hzxuUk0SXGJIjb0m6T_-XWGmJF4KokYE5EaHdIfCJyCFc3MN1m4hkIrugAmBkvmryTmb-MOXpz_lQj2SZZzK2osmlpTXSxptvznYpHM3pqfdI272pNNpMGL2xOYGR-ZaEOnGXxM7Z6ifd7bv6dU3w4qJslkr4g_eyU9RPdkRvyKl6Fz0lUg0RhRgWwbWVrOrFAbXXn2Wzvkh5rRbBO-fLvyzXkLMEJ65DYjmcvvbgtXS_j7o4Gr7duTh4tT48WxF8wAgjy2yUyBDVNYMGIWech4SZVFTlrXAr2LRhEkbMIxj44phde84kLAaZyv95nbRrCJLRPBsz2gDY1Qg"
const sessionDescriptionInPast = "Testing TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting TicketTesting Ticket";

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
            .set('source',source)
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
    }),
    it('Search session using Session Title as TestAutomationTitle in Upcoming Sessions Page', async function ({ supertest }) {
        const startTime = performance.now();
        await supertest
            .request(base_url)
            .get('v02/sessions')
            .query({
                'pageNumber': '1',
                'pageSize': '10',
                'filter': 'approved',
                'search': 'TestAutomationTitle'
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
                expect(response.body.knolx[0].topic).to.be.eq('TestAutomationTitle')
            })

    }),
    it('Filter Session using Competency as TEST AUTOMATION COMPETENCY in Upcoming Sessions Page', async function ({ supertest }) {
        const startTime = performance.now();
        await supertest
            .request(base_url)
            .get('v02/sessions/filters')
            .query({
                'pageNumber': '1',
                'pageSize': '10',
                'filter': 'upcoming',
                'studio': 'testautomation'
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
                expect(response.body.knolx[0].category).to.be.eq('TEST AUTOMATION COMPETENCY')
            })

    }),
    it('Filter Session using All Sessions as Knolx in Upcoming Sessions Page', async function ({ supertest }) {
        const startTime = performance.now();
        await supertest
            .request(base_url)
            .get('v02/sessions/filters')
            .query({
                'pageNumber': '1',
                'pageSize': '10',
                'filter': 'upcoming',
                'session': 'Knolx'
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
                expect(response.body.knolx[0].sessionType).to.be.eq('Knolx')
            })

    }),
    it('Filter Session using All Time as 1698949800000 in Upcoming Sessions Page', async function ({ supertest }) {
        const startTime = performance.now();
        await supertest
            .request(base_url)
            .get('v02/sessions/filters')
            .query({
                'pageNumber': '1',
                'pageSize': '10',
                'filter': 'upcoming',
                'time': '1698949800000'
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
                expect(response.body.knolx[0].dateTime).to.be.eq(1699008300000)
            })

    }),
    it('GET session Details about test employee in Past Sessions Page', async function ({ supertest }) {
        const startTime = performance.now();
        await supertest
            .request(base_url)
            .get('v02/getSession/6529144d45bc9a797dfbcb19')
            .set('source', source)
            .set('authorization', access_token)
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
                expect(response.body.sessionDescription).to.be.eq(sessionDescriptionInPast)
            })


    }),
    it('Search session using Session Title as Testing Ticket in Past Sessions Page', async function ({ supertest }) {
        const startTime = performance.now();
        await supertest
            .request(base_url)
            .get('v02/sessions?search=Testing%20Ticket')
            .query({
                'pageNumber': '1',
                'pageSize': '10',
                'filter': 'past'
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
                expect(response.body.knolx[0].topic).to.be.eq('Testing Ticket')
            })

    }),
    it('Filter Session using Competency as TEST AUTOMATION COMPETENCY in Past Sessions Page', async function ({ supertest }) {
        const startTime = performance.now();
        await supertest
            .request(base_url)
            .get('v02/sessions/filters')
            .query({
                'pageNumber': '1',
                'pageSize': '10',
                'filter': 'past',
                'studio': 'testautomation'
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
                expect(response.body.knolx[0].category).to.be.eq('TEST AUTOMATION COMPETENCY')
            })

    }),
    it('Filter Session using All Sessions as Knolx in Past Sessions Page', async function ({ supertest }) {
        const startTime = performance.now();
        await supertest
            .request(base_url)
            .get('v02/sessions/filters')
            .query({
                'pageNumber': '1',
                'pageSize': '10',
                'filter': 'past',
                'session': 'Knolx'
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
                expect(response.body.knolx[0].sessionType).to.be.eq('Knolx')
            })

    }),
    it('Filter Session using All Time as 1697259310000 in Past Sessions Page', async function ({ supertest }) {
        const startTime = performance.now();
        await supertest
            .request(base_url)
            .get('v02/sessions/filters')
            .query({
                'pageNumber': '1',
                'pageSize': '10',
                'filter': 'past',
                'time': '1697259310000'
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
                expect(response.body.knolx[0].dateTime).to.be.eq(1697284140000)
            })

    })
});