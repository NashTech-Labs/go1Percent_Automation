const header = require('../globals')

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
      .set(headers)
      .send(requestData)
      .expect(200)
    console.log(response);
    accessToken = response._body.access_token;
    console.log(accessToken);
    header.headers['Authorization'] = 'Bearer ' + accessToken
  })

  // Verify Search Template
  it('should verify the search template endpoint', async function ({ supertest }) {
    await supertest
      .request("https://nashtechglobal.qa.go1percent.com")
      .get("/search/template?text=limit&page=2")
      .set(header.headers)
      .expect(200)
      .expect('Content-Type', "text/html")
  });

  //  Get Template
  it('should retrieve a specific template', async function ({ supertest }) {
    await supertest
      .request("https://nashtechglobal.qa.go1percent.com")
      .get("/template?tempId=employee")
      .set(header.headers)
      .expect(200)
      .expect('Content-Type', "text/html")
  });

  //  Get Template View Requested
  it('should get template view requested', async function ({ supertest }) {
    await supertest
      .request("https://nashtechglobal.qa.go1percent.com")
      .get("/template/viewRequested?page=two&limit=limit&date=three")
      .set(header.headers)
      .expect(200)
      .expect('Content-Type', "text/html")
  });

  // Get Trending Tags
  it('should retrieve trending tags', async function ({ supertest }) {
    await supertest
      .request("https://nashtechglobal.qa.go1percent.com")
      .get("/trending/tags")
      .set(header.headers)
      .expect(200)
      .expect('Content-Type', "text/html")
  });

  // Get API of Recent Templates
  it('should retrieve recent templates', async function ({ supertest }) {
    await supertest
      .request("https://nashtechglobal.qa.go1percent.com")
      .get("/recent/templates?count=Two")
      .set(header.headers)
      .expect(200)
      .expect('Content-Type', "text/html")
  });

  // Get API of Repos
  it('should get information about repositories', async function ({ supertest }) {
    await supertest
      .request("https://nashtechglobal.qa.go1percent.com")
      .get("/getRepos?date=Two&repoType=repo&pageNo=2&isTechHubRelated=true")
      .set(header.headers)
      .expect(200)
      .expect('Content-Type', "text/html")
  });

  // Get Trending Templates
  it('should retrieve trending templates', async function ({ supertest }) {
    await supertest
      .request("https://nashtechglobal.qa.go1percent.com")
      .get("/trending/templates")
      .set(header.headers)
      .expect(200)
      .expect('Content-Type', "text/html")
  });

  //  Draft Repo or Branch Submission
  it('should submit a draft repository or branch', async function ({ supertest }) {
    await supertest
      .request("https://techhub-backend.qa.go1percent.com")
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
      .set(header.headers)
      .expect(200)
      .expect('Content-Type', /json/)
  })
})
