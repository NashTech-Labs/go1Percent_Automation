const header = require('../globals')
let approval_req = [];

describe('TechHub Api Testing', function () {
  // Token Generation
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
      .set(header.admin.tokenHeaders)
      .send(requestData)
      .expect(200)
      .then(function (response) {
        const token = response._body.access_token;
        header.employee.headers['Authorization'] = 'Bearer ' + token;
      });
  
  })

  //Verify Search Template
  it('should verify the search template endpoint', async function ({ supertest }) {
    await supertest
      .request(header.urls.go1percentBase)
      .get("/search/template?text=tags&page=2")
      .set(header.employee.headers)
      .expect(200)
      .expect('Content-Type', /json/)
  });

  //  Get Template
  it('should retrieve a specific template', async function ({ supertest }) {
    await supertest
      .request(header.urls.go1percentBase)
      .get("/template?tempId="+approval_req[0]._id)
      .set(header.employee.headers)
      .expect(200)
      .expect('Content-Type', /json/)
  });

  // Get Trending Tags
  it('should retrieve trending tags', async function ({ supertest }) {
    await supertest
      .request(header.urls.go1percentBase)
      .get("/trending/tags")
      .set(header.employee.headers)
      .expect(200)
      .expect('Content-Type', /json/)
  });

  // Get API of Recent Templates
  it('should retrieve recent templates', async function ({ supertest }) {
    await supertest
      .request(header.urls.go1percentBase)
      .get("/recent/templates?count=Two")
      .set(header.employee.headers)
      .expect(200)
      .expect('Content-Type', /json/)
  });

  // Get Trending Templates
  it('should retrieve trending templates', async function ({ supertest }) {
    await supertest
      .request(header.urls.go1percentBase)
      .get("/trending/templates")
      .set(header.employee.headers)
      .expect(200)
      .expect('Content-Type', /json/)
  });

  //  Draft Repo or Branch Submission
  it('should submit a draft repository or branch', async function ({ supertest }) {
    await supertest
      .request(header.urls.go1percentBase)
      .post("/user/submit")
      .send({
        "id": "65321d9c3400003b269cc6bd",
        "repoName": "TestTechHubAutomationShra",
        "title": "SomeTestingTesting",
        "caption": "SomeTestingTesting",
        "description": ["sredtryugioyjgfhgchjklkgyfgchjuytfgcvhjbkuytfgchjbkuyfgchjkyutfgcvbnhjkuygtfgcvbnhjkyugtfhbjygfcvbnhjgfcvbnhjgfcvbnhjg"],
        "branch": "main",
        "tags": ["tags"],
        "baseLanguage": "kafka",
        "otherLanguages": [{ "tempId": "", "langName": "" }],
        "category": "learning", "infoUrl": ""
      })
      .set(header.employee.headers)
      .expect(200)
      .expect('Content-Type', /json/)
  });

  // Performs a GET request to test the 'All TechHub' API of a TechHub Module.
  it('Get API test for All TechHubs Button in TechHub', async function ({ supertest }) {
    await supertest
        .request(header.urls.go1percentBase)
        .get("/templates/my?state=approvedAndRejected&limit=10000&page=1")
        .set(header.employee.headers)
        .expect(200)
        .expect('Content-Type', /json/)
        .then(function (response) {
          approval_req = response.body.data.templates        //Response body template list
        });
  });

  //Performs a GET request to test the 'Pending' API of a TechHub Module.
  it('Get API test for Pending Button in TechHub', async function ({ supertest }) {
    await supertest
        .request(header.urls.go1percentBase)
        .get("/templates/my?state=draftAndReview&limit=10000&page=1")
        .set(header.employee.headers)
        .expect(200)
        .expect('Content-Type', /json/)
  });

  // Performs a GET request to test the 'Pending' API of a TechHub Module.
  it('Get API test for Pending Button in TechHub', async function ({ supertest }) {
    await supertest
        .request(header.urls.go1percentBase)
        .get("/templates/my?state=draftAndReview&limit=10000&page=1")
        .set(header.employee.headers)
        .expect(200)
        .expect('Content-Type', /json/)
  });

  //Performs a GET request to test the 'Other Technologies' API of a TechHub Module.
  it('Get API for other Technologies in TechHub', async function ({ supertest }) {
    await supertest
        .request(header.urls.go1percentBase)
        .get("/other/technologies?id=101")
        .set(header.employee.headers)
        .expect(200)
        .expect('Content-Type', /json/)
  });

  //Performs a GET request to test the 'Trending Technology' API of a TechHub Module.
  it('Get API to Get Trending Technology', async function ({ supertest }) {
    await supertest
        .request(header.urls.go1percentBase)
        .get("/trending/technologies")
        .set(header.employee.headers)
        .expect(200)
        .expect('Content-Type', 'application/json')
  });

  //Performs a GET request to test the 'Github URL' API of a TechHub Module.
  it('Get API for the github url present in approved TechHub', async function ({ supertest }) {
    await supertest
        .request("https://github.com")
        .get("/NashTech-Labs/TestingRepoForDemo")
        .expect(200)
        .expect('Content-Type', 'text/html; charset=utf-8')
  });

  //Performs a GET request to test the 'All templates' API of a TechHub Module.
  it('Get API To Get All templates of TechHub', async function ({ supertest }) {
    await supertest
        .request(header.urls.go1percentBase)
        .get("/templates?technology=Java&category=Kafka&page=1")
        .set(header.employee.headers)
        .expect(200)
        .expect('Content-Type', 'application/json')
  });

  //Performs a POST request to test the 'New Repo Branch Submission' API of a TechHub Module.
  it('New Repo Branch Submission', async function ({ supertest }) {
    const uniqueName = `TestingNightwatchTestcase1-${Math.floor(Math.random() * 1000000)}`;
    await supertest
      .request(header.urls.go1percentBase)
      .post("/user/request")
      .send({
        "name": uniqueName,
        "description": "gfdrtfyguhijoihubhgvfctvghbjnbhvgyfcvghbjnbgvcftvgbhjnhbygvfctvghbjnbgvftcgvhbjgvfcgvycftxdrctfygvhbjbgcftxdrfcgvhbjnbgfcx",
        "technology": "angular",
        "branch": false
      })
      .set(header.employee.headers)
      .expect(200)
      .expect('Content-Type', /json/)
  })
})