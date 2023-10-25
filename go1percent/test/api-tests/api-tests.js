const globals = require('../../globals')
// ----------------------------------------------------------------------
//   >> using command "npx nightwatch ./test/api-tests/ --env api_testing"
// -------------------------------------------------------------------------
describe('Feedback-form API tests', function () {

  const headers = globals.admin.headers;
  const token_headers = globals.admin.token_headers;
  const urls = globals.urls;
  const token_body = globals.admin.token_body;
  const new_form_id = globals.admin;



  // CONFIGURATION OF BEARER TOKEN
  it('Configuring Bearer Token', async function ({ supertest }) {
    const startTime = performance.now();
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
    const endTime = performance.now();
    const responseTime = endTime - startTime;
    expect(responseTime).to.be.lessThan(2000);

  });


  // GET ALL FEEDBACK FORM
  it('GET - all feedback forms', async function ({ supertest }) {
    const startTime = performance.now();
    await supertest
      .request(urls.feedback_form_url_base)
      .get("/fetch?pageNumber=1&pageSize=1000&search=")
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/);
    const endTime = performance.now();
    const responseTime = endTime - startTime;
    expect(responseTime).to.be.lessThan(2000);
  });

  // https://knolx-backend.qa.go1percent.com/v02/feedback-form/create-feedback-form


  // CREATE A NEW FEEDBACK-FORM
  it('POST - Create a new feedback forms', async function ({ supertest }) {
    const startTime = performance.now();
    await supertest
      .request(urls.feedback_form_url_base)
      .post("/create-feedback-form")
      .send(
        {
          "name": "new form 3",
          "questions": [
            {
              "question": "hello",
              "questionType": "NPS",
              "mandatory": true,
              "options": [
                "0"
              ]
            }
          ]
        }
      )
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000);
        new_form_id['created_form_id'] = res.body.id;
      })


    await supertest
      .request(urls.feedback_form_url_base)
      .delete("/delete" + "/" + new_form_id['created_form_id'])
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/);
  });


  // UPDATE AN EXISTING FORM
  it('PUT a new feedback form', async function ({ supertest }) {

    // creating a new form to update 
    await supertest
      .request(urls.feedback_form_url_base)
      .post("/create-feedback-form")
      .send(
        {
          "name": "new form 3",
          "questions": [
            {
              "question": "hello",
              "questionType": "NPS",
              "mandatory": true,
              "options": [
                "0"
              ]
            }
          ]
        }
      )
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        console.log(res.body.id);
        new_form_id['created_form_id'] = res.body.id;

      });

    // updating an existing form
    const startTime = performance.now();

    await supertest
      .request(urls.feedback_form_url_base)
      .put("/" + new_form_id['created_form_id'])
      .send(
        {
          "name": "new form 3",
          "questions": [
            {
              "question": "hello 2",
              "questionType": "NPS",
              "mandatory": true,
              "options": [
                "0"
              ]
            }
          ]
        }
      )
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/);
    const endTime = performance.now();
    const responseTime = endTime - startTime;
    expect(responseTime).to.be.lessThan(2000);

    //deleting the form
    await supertest
      .request(urls.feedback_form_url_base)
      .delete("/delete" + "/" + new_form_id['created_form_id'])
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/);
  });

  // DELETE AN EXISTING FORM
  it('DELETE an existing feedback form', async function ({ supertest }) {

    // creating a form to delete
    await supertest
      .request(urls.feedback_form_url_base)
      .post("/create-feedback-form")
      .send(
        {
          "name": "new form 3",
          "questions": [
            {
              "question": "hello",
              "questionType": "NPS",
              "mandatory": true,
              "options": [
                "0"
              ]
            }
          ]
        }
      )
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        console.log(res.body.id);
        new_form_id['created_form_id'] = res.body.id;

      });

    // deleting the form
    const startTime = performance.now();

    await supertest
      .request(urls.feedback_form_url_base)
      .delete("/delete" + "/" + new_form_id['created_form_id'])
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/);
    const endTime = performance.now();
    const responseTime = endTime - startTime;
    expect(responseTime).to.be.lessThan(2000);

  });

});