const globals = require('../globals')
describe('api testing', function () {

    /**
     * Generates a dynamic bearer token for API authentication.
     *
     * @param {string} username - The username for authentication.
     * @param {string} password - The password for authentication.
     * @returns {string} accessToken - The dynamically generated bearer token.
     */
    it('token generation', async function ({ supertest }) {
        const tokenURl = "https://auth.go1percent.com";
        const requestData = {
            'client_id': 'leaderboard-ui',
            'client_secret': '8090ed15-4cd1-483c-9fee-2a8b35941852',
            'username': 'testemployee',
            'password': 'testemployee',
            'grant_type': 'password'
        }
        const headers = {
            'accept': '*/*',
            'source': 'https://nashtechglobal.qa.go1percent.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const response = await supertest
            .request(tokenURl)
            .post('/auth/realms/nashtech/protocol/openid-connect/token')
            .set(headers)
            .send(requestData)
            .expect(200)
        console.log(response);
        accessToken = response._body.access_token;
        console.log(accessToken);
        globals.global.headers['Authorization'] = 'Bearer ' + accessToken
    })

    /**
     * Performs a GET request to test the 'technologies' endpoint of an API of TechHub Module.
    **/
    it('Get API test for technologies in TechHub', async function ({ supertest }) {
        await supertest
            .request(globals.global.baseURL)
            .get("/technologies")
            .set(globals.global.headers)
            .expect(200)
            .expect('Content-Type', /json/)
    });

    /**
     * Performs a GET request to test the 'All TechHub' API of a TechHub Module.
    **/
    it('Get API test for All TechHubs Button in TechHub', async function ({ supertest }) {
        await supertest
            .request(globals.global.baseURL)
            .get("/templates/my?state=approvedAndRejected&limit=10000&page=1")
            .set(globals.global.headers)
            .expect(200)
            .expect('Content-Type', /json/)
    });

    /**
     * Performs a GET request to test the 'Pending' API of a TechHub Module.
    **/
    it('Get API test for Pending Button in TechHub', async function ({ supertest }) {
        await supertest
            .request(globals.global.baseURL)
            .get("/templates/my?state=draftAndReview&limit=10000&page=1")
            .set(globals.global.headers)
            .expect(200)
            .expect('Content-Type', /json/)
    });

    /**
     * Performs a GET request to test the 'Other Technologies' API of a TechHub Module.
    **/
    it('Get API for other Technologies in TechHub', async function ({ supertest }) {
        await supertest
            .request(globals.global.baseURL)
            .get("/other/technologies?id=101")
            .set(globals.global.headers)
            .expect(200)
            .expect('Content-Type', /json/)
    });

    /**
     * Performs a GET request to test the 'Trending Technology' API of a TechHub Module.
    **/
    it('Get API to Get Trending Technology', async function ({ supertest }) {
        await supertest
            .request(globals.global.baseURL)
            .get("/trending/technologies")
            .set(globals.global.headers)
            .expect(200)
            .expect('Content-Type', 'application/json')
    });

    /**
     * Performs a GET request to test the 'Github URL' API of a TechHub Module.
    **/
    it('Get API for the github url present in approved TechHub', async function ({ supertest }) {
        await supertest
            .request("https://github.com")
            .get("/NashTech-Labs/TestingRepoForDemo")
            .expect(200)
            .expect('Content-Type', 'text/html; charset=utf-8')
    });

    /**
     * Performs a GET request to test the 'All templates' API of a TechHub Module.
    **/
    it('Get API To Get All templates of TechHub', async function ({ supertest }) {
        await supertest
            .request(globals.global.baseURL)
            .get("/templates?technology=Java&category=Kafka&page=1")
            .set(globals.global.headers)
            .expect(200)
            .expect('Content-Type', 'application/json')
    });

    /**
     * Performs a POST request to test the 'New Repo Branch Submission' API of a TechHub Module.
    **/
    it('New Repo Branch Submission', async function ({ supertest }) {
        const uniqueName = `TestingNightwatchTestcase1-${Math.floor(Math.random() * 1000000)}`;
        await supertest
          .request("https://techhub-backend.qa.go1percent.com")
          .post("/user/request")
          .send({
            "name": uniqueName,
            "description": "gfdrtfyguhijoihubhgvfctvghbjnbhvgyfcvghbjnbgvcftvgbhjnhbygvfctvghbjnbgvftcgvhbjgvfcgvycftxdrctfygvhbjbgcftxdrfcgvhbjnbgfcx",
            "technology": "angular",
            "branch": false
          })
          .set(globals.global.headers)
          .expect(200)
          .expect('Content-Type', /json/)
      })

});


