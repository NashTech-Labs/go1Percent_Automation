const globals = require('../../globals')

// ----------------------------------------------------------------------
//   >> using command npx nightwatch ./test/api-tests/ --env api_testing
// -------------------------------------------------------------------------
describe('Feedback form API tests', function () {

  const headers = globals.admin.headers;
  const token_headers = globals.admin.token_headers;
  const token_body = globals.admin.token_body;
  const urls = globals.urls;

  it('Configure Bearer Token', async function ({ supertest }) {
    await supertest
    .request(urls.token)
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

  it('GET all feedback forms', async function({supertest}) {
    await supertest
    .request(urls.feedback_form_url_base)
    .get("/fetch?pageNumber=1&pageSize=1000&search=")       
    .set(headers)                                                                                                                                                         
      .expect(200)
      .expect('Content-Type', /json/);
  });
});