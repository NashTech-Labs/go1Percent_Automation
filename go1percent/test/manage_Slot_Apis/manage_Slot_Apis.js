const headers = require('../../globals')
const access_token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTg5MTA1NjEsImlhdCI6MTY5ODkwODc2MSwianRpIjoiOGI4MTNlNzItMTAyZi00ZDdhLWJiMDgtYjQ5NDA1ZTM3NmU0IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmdvMXBlcmNlbnQuY29tL2F1dGgvcmVhbG1zL25hc2h0ZWNoIiwiYXVkIjpbImxlYWRlcmJvYXJkLXFhLXVpIiwibGVhZGVyYm9hcmQtZGV2LXVpIiwiYWNjb3VudCJdLCJzdWIiOiJhNzE5YTJiMi0zY2FjLTRjMTItOTQ1Yi1kNzMzMGE4MTkxMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJsZWFkZXJib2FyZC11aSIsInNlc3Npb25fc3RhdGUiOiIzMGU4N2U2MC0wMTEwLTQ3NjktODQwMi02ODZlODAyZmY2OGIiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vbGVhZGVyYm9hcmQuZ28xcGVyY2VudC5jb20iLCJodHRwczovL3JlcG9ydC5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vbmFzaHRlY2hnbG9iYWwuZ28xcGVyY2VudC5jb20iLCJodHRwczovL2tub2xkdXMuZ28xcGVyY2VudC5jb20iLCJodHRwOi8vbG9jYWxob3N0OjgwODgiLCJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJodHRwczovL2xlYWRlcmJvYXJkLmtub2xkdXMuY29tIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtbmFzaHRlY2giLCJ1bWFfYXV0aG9yaXphdGlvbiIsImVtcGxveWVlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsibGVhZGVyYm9hcmQtcWEtdWkiOnsicm9sZXMiOlsiYWRtaW4iLCJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtdWkiOnsicm9sZXMiOlsiYWRtaW4iLCJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjMwZTg3ZTYwLTAxMTAtNDc2OS04NDAyLTY4NmU4MDJmZjY4YiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3QgYWRtaW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0YWRtaW4iLCJnaXZlbl9uYW1lIjoidGVzdCIsImZhbWlseV9uYW1lIjoiYWRtaW4iLCJlbWFpbCI6InRlc3RhZG1pbkBuYXNodGVjaGdsb2JhbC5jb20ifQ.dTQVLM11OdepoI0V_jqDik_fVkR7GcTJVMY9SRshAO5leqSV0-fl0odGVlgocpgGlkrGNj6FPg6ASqwGSpreP8fy5QgePu1sO3D_Hzt5gMnhjDHnqreImPxpIuF0B5y5kEZPOnWRJUTz6ULDLZAGC7TsWIr3E0VV7yJLBtskSa7g1eNEFT6tw2DUHGHSruhErVWvba-2wbwmDsxnMBSm9eJ7tYbQGBOM20pumyw9xONV82JJKElK7cGxCI_2repbq77r-Fpi5duFrbIE9Pc63cN26pW4QAI_TfQGNxaO_RNAXHgMrsoDjP11Y0w77LmnBgQVBelD6cZrUs5GDEHd5w';
const newSlotPayload = {
  "slotType": "Knolx",
  "dateTime": 1699534740000,
  "slotTitle": "API Testing Slot"
};

const updatedSlotPayload = {
    "slotTitle": "Updated Slot",
    "dateTime": 1699621200000,
    "slotType": "Webinar"
};

const data = {
  
    "slotId" : "65433aca8555d37c0a4f8fc5",
    "slotTitle" : "API Testing Slot",
    "dateTime" : 1699534740000,
    "slotDuration" : 45,
    "bookable" : true,
    "createdBy" : "testadmin@nashtechglobal.com",
    "createdOn" : 1698904778054,
    "slotType" : "Knolx"
  
};

const approvePage ={

  
    "id" : "6528af3545bc9a797dfbcb13",
    "presenterDetail" : {
      "fullName" : "test employee",
      "email" : "testemployee@nashtechglobal.com"
    },
    "dateTime" : 1699326600000,
    "sessionDurationInMins" : 45,
    "topic" : "Test Automation Title",
    "category" : "TEST AUTOMATION COMPETENCY",
    "subCategory" : "Cypress",
    "feedbackExpriationDate" : 1699554599000,
    "sessionType" : "Knolx",
    "sessionState" : "PendingForAdmin",
    "sessionDescription" : "                                                                                                                                                                                                                                                                                  Test Test Test Test Test Test ",
    "youtubeURL" : "",
    "slideshareURL" : "",
    "slideURL" : "www.amazon.com",
    "sessionTag" : [ ],
    "isAttendanceUploaded" : false,
    "isFeedbackAvailable" : false,
    "isHighlightedAttendeeAvailable" : false,
    "feedbackFormName" : "",
    "presenterPic" : "",
    "coPresenterPic" : ""
  }


describe('api testing', function () {
  let createdSlotId; 

  it('create a new slot and store the slotId', async function ({ supertest }) {
    const startTime = performance.now();

    const response = await supertest
      .request(headers.manageSlotBase_url)
     //.request('https://knolx-backend.qa.go1percent.com')
      .post("/v02/slots")
      .set('source', headers.source)
      .set('Authorization', access_token)
      .send(newSlotPayload)
      .expect(200)
      .then((response) => {
        console.log(response.body);
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(6000);
        expect(response.body.slotTitle).to.equal(data.slotTitle);
        expect(response.body.slotDuration).to.equal(data.slotDuration);
        expect(response.body.bookable).to.be.true; 
        expect(response.body.createdBy).to.equal(data.createdBy);
        expect(response.body.slotType).to.equal(newSlotPayload.slotType);
        expect(response.body.slotId).to.be.not.empty

        createdSlotId = response.body.slotId;
      });
  });

});

  it('delete the created slot', async function ({ supertest }) {
   
    if (createdSlotId) {
      const startTime = performance.now();

      const response = await supertest
        .request(headers.manageSlotBase_url)
        .delete(`/v02/slots/${createdSlotId}`) 
        .set('source', headers.source)
        .set('Authorization', access_token)
        .expect(200)
        .then((response) => {
          console.log(response.body);
          const endTime = performance.now();
          const responseTime = endTime - startTime;
          expect(responseTime).to.be.lessThan(6000);
          expect(response.body.status).to.be.true;
          expect(response.body.slotTitle).to.not.equal(data.slotTitle);
          expect(response.body.slotDuration).to.not.equal(data.slotDuration);
          expect(response.body.bookable).to.not.be.true; 
          expect(response.body.createdBy).to.not.equal(data.createdBy);
          expect(response.body.slotType).to.not.equal(newSlotPayload.slotType);
        });
    } else {
      console.log('No slotId available to delete.');
    }
  }),

  it('verify that upon clicking on free slot title, session type, title, date, and time can be updated.', async function ({ supertest }) {
    const startTime = performance.now();
  
    const response = await supertest
    .request(headers.manageSlotBase_url)
      .post("/v02/slots/64887aa78b97c34bbe72fa0e")
      .set('source', headers.source)
      .set('Authorization', access_token)
      .send(updatedSlotPayload) 
      .expect(200)
      .then((response) => {
        console.log(response.body);
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(6000);
        expect(response.body.slotId).to.be.not.empty;
        expect(response.body.slotTitle).to.equal(updatedSlotPayload.slotTitle);
        expect(response.body.dateTime).to.equal(updatedSlotPayload.dateTime);
        expect(response.body.slotType).to.equal(updatedSlotPayload.slotType);
      });
  }),

  it('Automate Slot', async function ({ supertest }) {
    const startTime = performance.now();
  
    const response = await supertest
      .request(headers.manageSlotBase_url)
      .post("/v02/slots/automateSlot/3/Knolx") 
      .set('source', headers.source)
      .set('Authorization', access_token)
      .expect(200)
       console.log(response.body);

        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(6000);
        expect(response.body.status).to.be.true;
        expect(response.type).to.equal('application/json');


       
      });
  

  it('getFourMonths Slot', async function ({ supertest }) {
    const startTime = performance.now();
  
    const response = await supertest
      .request(headers.manageSlotBase_url)
      .get("/v02/slots/getFourMonths") 
      .set('source', headers.source)
      .set('Authorization', access_token)
      .expect(200)
       console.log(response.body);

        const endTime = performance.now();
        const responseTime = endTime - startTime
        expect(responseTime).to.be.lessThan(6000);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('slots').to.be.an('array');
        expect(response.body).not.to.have.property('months');
             
      }),

      it('Verify when admin click on any slot it navigate to approved page', async function ({ supertest }) {
        const startTime = performance.now();
      
        const response = await supertest
          .request(headers.manageSlotBase_url)
          .get("/v02/getSession/6528af3545bc9a797dfbcb13") 
          .set('source', headers.source)
          .set('Authorization', access_token)
          .expect(200)
           console.log(response.body);
    
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(6000);
            expect(approvePage.presenterDetail.fullName).to.equal('test employee');
            expect(approvePage.topic).to.equal('testingqswqw');
            expect(approvePage.feedbackExpriationDate).to.equal(approvePage.feedbackExpriationDate);
            expect(approvePage.isAttendanceUploaded).to.equal(approvePage.isAttendanceUploaded);
            expect(approvePage.presenterDetail).to.equal(approvePage.presenterDetail);
            expect(approvePage.sessionState).to.equal(approvePage.sessionState);
            expect(approvePage.sessionType).to.equal(approvePage.sessionType);
            expect(approvePage.slideURL).to.equal(approvePage.slideURL);
            expect(approvePage.approvePage).to.equal(approvePage.approvePage);
                
      });
      
  