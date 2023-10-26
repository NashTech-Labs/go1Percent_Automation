const { forEach } = require('lodash');
const globals = require('../../globals')
// ----------------------------------------------------------------------
//   >> using command "npx nightwatch ./test/Feedback-form-automation/ --env api_testing"
// -------------------------------------------------------------------------
describe('Feedback-form API tests', function () {

  const feedbackForm = globals.feedbackform_cred;

  const headers = feedbackForm.admin.headers;
  const token_headers = feedbackForm.admin.token_headers;
  const urls = feedbackForm.urls;
  const token_body = feedbackForm.admin.token_body;
  const new_form_id = feedbackForm.admin;



  // CONFIGURATION OF BEARER TOKEN
  it('Configuring Bearer Token', async function ({ supertest }) {
    // const startTime = performance.now();
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


  // ==================================================  GET ALL FEEDBACK FORM
  it('GET - all feedback forms', async function ({ supertest }) {

    const startTime = performance.now();  //capturing timestamp before calling API

    const response = await supertest
      .request(urls.feedback_form_url_base)
      .get("/fetch?pageNumber=1&pageSize=1000&search=")
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/);


    const endTime = performance.now(); //capturing time after getting API response

    const responseTime = endTime - startTime;  //total Time taken

    expect(responseTime).to.be.lessThan(2000);


    const formData = response.body;  // storing response body in formData

    // expected GET body attributes and their types
    const expectedGetFields = {
      "forms": 'object',
      "count": "number",
      "pages": "number"
    };


    //Assertion for GET body
    Object.keys(expectedGetFields).forEach(field => {

      // assertion for attribute
      expect(formData).to.have.property(field);
      if (formData[field] || 0) {

        // assertion for field type
        expect(typeof formData[field]).to.be.eq(expectedGetFields[field]);

      }

    });


    //Assertion for GET body --> form attribute
    const formAttributesFields = {
      "id": "string",
      "name": "string"
    };


    if (formData['forms'].length > 0) {
      formData['forms'].forEach(form => {
        Object.keys(formAttributesFields).forEach(field => {

          // assertion for formAttribute -> attributes
          expect(form).to.have.property(field);
          if (form[field] || 0) {

            // assertion for formAttribute -> attributes types
            expect(typeof form[field]).to.be.eq(formAttributesFields[field]);
          };
        })
      });
    }

  });


  // ==================> CREATE A NEW FEEDBACK-FORM =====================================
  it('POST - Create a new feedback forms', async function ({ supertest }) {

    const startTime = performance.now(); // capturing timestamp before calling API

    const response = await supertest
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

        const endTime = performance.now(); // capturing timestamp after getting response

        const responseTime = endTime - startTime;  //total time taken

        expect(responseTime).to.be.lessThan(2000);

        // storing created data id to delete the created data
        new_form_id['created_form_id'] = res.body.id;

        const responseBody = res.body;

        // expect response body attributes
        const expected_responseBodyAttributes = {
          "id": "string",
          "name": "string",
          "questions": "object",
          "active": "boolean",
          "previewLink": "string"
        };

        // assertion for response body
        Object.keys(expected_responseBodyAttributes)
          .forEach(expectedField => {
            expect(responseBody).to.have.property(expectedField);
            expect(typeof responseBody[expectedField]).to.be.eq(expected_responseBodyAttributes[expectedField]);
          });

        // expected response.body.attributes
        const expected_questionsAttributes = {
          "question": "string",
          "options": "object",
          "questionType": "string",
          "mandatory": "boolean"
        }

        // assertions for response.body.attributes
        if (responseBody['questions'].length > 0) {

          responseBody['questions']
            .forEach(question => {

              Object.keys(expected_questionsAttributes)
                .forEach(expectedField => {
                  expect(question).to.have.property(expectedField);
                  expect(typeof question[expectedField]).to.be.eq(expected_questionsAttributes[expectedField]);
                });
            })
        }


      });

    //  deleting created data
    await supertest
      .request(urls.feedback_form_url_base)
      .delete("/delete" + "/" + new_form_id['created_form_id'])
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/)
  });

// ==========================UPDATE ========================
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
      .expect('Content-Type', /json/)
      .then(response => {

        //ending timestamp
        const endTime = performance.now();

        // total timetaken
        const responseTime = endTime - startTime;

        //response time assertion
        expect(responseTime).to.be.lessThan(2000);

        const responseBody = response.body;

        //expected response attributes
        const expected_responseBody_attributes = {
          "id":"string"
        };

        //assertion for response attributes
        Object.keys(expected_responseBody_attributes)
        .forEach(expectedField => {
          expect(responseBody).to.have.property(expectedField);
          expect(typeof responseBody[expectedField]).to.be.eq(expected_responseBody_attributes[expectedField]);
        });
      });

    //deleting the form
    await supertest
      .request(urls.feedback_form_url_base)
      .delete("/delete" + "/" + new_form_id['created_form_id'])
      .set(headers)
      .expect(200)
      .expect('Content-Type', /json/);
  });

  // ===========================DELETE AN EXISTING FORM===================
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
      .expect('Content-Type', /json/)
      .then(response => {

        // ending timestamp
        const endTime = performance.now();

        // total response time
        const responseTime = endTime - startTime;

        // assertion for timestamp
        expect(responseTime).to.be.lessThan(2000);

        const responseBody = response.body;

        // expected response attributes
        const expected_responseBody_attributes = {
          "id":"string"
        };


        //assertion for response attributes
        Object.keys(expected_responseBody_attributes)
        .forEach(expectedField => {
          expect(responseBody).to.have.property(expectedField);
          expect(typeof responseBody[expectedField]).to.be.eq(expected_responseBody_attributes[expectedField]);
        });

      })

  });

});