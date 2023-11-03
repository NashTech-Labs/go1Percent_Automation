const headers = require('../../globals')
const access_token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIRzk4ejl1eFN0T3VPaVg4a2RiYlNPblQ2a29OWUlCSENLeXM2LUhTYnlFIn0.eyJleHAiOjE2OTg5OTI1NTMsImlhdCI6MTY5ODk5MDc1MywianRpIjoiY2VlZGNmOWQtMGFkOC00ZjgzLWIwNWYtNDI2MjE3OTJkMTJiIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmdvMXBlcmNlbnQuY29tL2F1dGgvcmVhbG1zL25hc2h0ZWNoIiwiYXVkIjpbImxlYWRlcmJvYXJkLXFhLXVpIiwibGVhZGVyYm9hcmQtZGV2LXVpIiwiYWNjb3VudCJdLCJzdWIiOiJhNzE5YTJiMi0zY2FjLTRjMTItOTQ1Yi1kNzMzMGE4MTkxMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJsZWFkZXJib2FyZC11aSIsInNlc3Npb25fc3RhdGUiOiI1NjU4OGFkMC1jZTAwLTQ0MzktYjBlZS0yYjc3NWZmNjZhMjUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vbGVhZGVyYm9hcmQuZ28xcGVyY2VudC5jb20iLCJodHRwczovL3JlcG9ydC5xYS5nbzFwZXJjZW50LmNvbSIsImh0dHBzOi8vbmFzaHRlY2hnbG9iYWwuZ28xcGVyY2VudC5jb20iLCJodHRwczovL2tub2xkdXMuZ28xcGVyY2VudC5jb20iLCJodHRwOi8vbG9jYWxob3N0OjgwODgiLCJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJodHRwczovL2xlYWRlcmJvYXJkLmtub2xkdXMuY29tIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtbmFzaHRlY2giLCJ1bWFfYXV0aG9yaXphdGlvbiIsImVtcGxveWVlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsibGVhZGVyYm9hcmQtcWEtdWkiOnsicm9sZXMiOlsiYWRtaW4iLCJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtdWkiOnsicm9sZXMiOlsiYWRtaW4iLCJlbXBsb3llZSJdfSwibGVhZGVyYm9hcmQtZGV2LXVpIjp7InJvbGVzIjpbImFkbWluIiwiZW1wbG95ZWUiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjU2NTg4YWQwLWNlMDAtNDQzOS1iMGVlLTJiNzc1ZmY2NmEyNSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3QgYWRtaW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0YWRtaW4iLCJnaXZlbl9uYW1lIjoidGVzdCIsImZhbWlseV9uYW1lIjoiYWRtaW4iLCJlbWFpbCI6InRlc3RhZG1pbkBuYXNodGVjaGdsb2JhbC5jb20ifQ.RzQ5vM4i1r4jOcsN_64aHmmrN0dKuDHs0kDYN5f2dY46kFBG158BLyl689wotXVvcbrWRCFa2RLfkz0iW5eqz2ReZmZTak8-GjI1ClSVBWQTLydLRX9_h_tCFn-w3V4FIqkKco-LjyNizEWPUrm34fNLlDsPc2OUkJGa1gqTW1LKtTMdtUwaR2qF8Zga03DOyOOTpGm2GZK1DwhMyVyadjyqhLQ7RKvc-s5tCwNMaSzUfuoRMAtuk072DqxETtjLAwY2OD4P9tcCOsldWjTRCcYHZlglhyi0n-IGpV9gD8l65Tyx6jm5lPKcoRkKvbSGm678bUApvB5AWra3YLSl3Q';
const newSlotPayload = {
  "slotType": "Knolx",
  "dateTime": 1699967460000,
  "slotTitle": "API Automation slot"
};

const updatedSlotPayload = {
    "slotTitle": "Updated slot",
    "dateTime": 1699524480000,
    "slotType": "Meetup"
};

const data = {
  slotId: '65436f5e8555d37c0a4f8fcb',
  slotTitle: 'API Automation slot',
  dateTime: 1699967460000,
  slotDuration: 45,
  bookable: true,
  createdBy: 'testadmin@nashtechglobal.com',
  createdOn: 1698918238182,
  slotType: 'Knolx'
};

const approvePage ={
  
    "id": "650afe5cce8ba4439b1697ef",
    "presenterDetail": {
        "fullName": "test employee",
        "email": "testemployee@nashtechglobal.com"
    },
    "dateTime": 1698748740000,
    "sessionDurationInMins": 45,
    "topic": "Testing Title",
    "category": "AGILE COMPETENCY",
    "subCategory": "Remote and Hybrid working",
    "feedbackFormId": "6335c19e58a2ac25916a20e4",
    "feedbackExpriationDate": 1698949799000,
    "sessionType": "Knolx",
    "sessionState": "PendingForAdmin",
    "sessionDescription": "The error message indicates that the property 'topic' is not present in the response body, which is why the assertion is failing. This could be due to the structure of the response body or the way the API is handling the request. Please ensure that the API response structure matches the expected response format.Test Test Test Test Test Test NashTech",
    "youtubeURL": "",
    "slideshareURL": "",
    "slideURL": "www.amazon.com",
    "sessionTag": [],
    "remarks": "Testing",
    "isAttendanceUploaded": false,
    "isFeedbackAvailable": false,
    "isHighlightedAttendeeAvailable": false,
    "feedbackFormName": "Knolx - Share Your Experience",
    "presenterPic": "",
    "coPresenterPic": ""

}


describe('api testing', function () {
  let createdSlotid; 

  it('create a new slot and store the slotId', async function ({ supertest }) {
    const startTime = performance.now();

    const response = await supertest
      .request(headers.manageSlotBase_url)
      //.request("https://knolx-backend.qa.go1percent.com")
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

        createdSlotid = response.body.slotId;
      });
  });

  
  it('delete the created slot', async function ({ supertest }) {
   
    if (createdSlotid) {
      const startTime = performance.now();

      const response = await supertest
        .request(headers.manageSlotBase_url)
        .delete(`/v02/slots/${createdSlotid}`) 
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
  
   if (createdSlotid) {
    const startTime = performance.now();
    const response = await supertest
    .request(headers.manageSlotBase_url)
      .post(`/v02/slots/${createdSlotid}`)
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
    } else {
      console.log('No slotId available to Update.');
    }
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
  }),

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

      it('Verify when admin click on knolx slot it navigate to approved page', async function ({ supertest }) {
        const startTime = performance.now();
      
        const response = await supertest
          .request(headers.manageSlotBase_url)
          .get("/v02/getSession/6541fe998555d37c0a4f8f93") 
          .set('source', headers.source)
          .set('Authorization', access_token)
          .expect(200)
           console.log(response.body);
    
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(6000);
            expect(approvePage.presenterDetail.fullName).to.equal('test employee');
            expect(approvePage.topic).to.equal(approvePage.topic);
            expect(approvePage.feedbackExpriationDate).to.equal(approvePage.feedbackExpriationDate);
            expect(approvePage.isAttendanceUploaded).to.equal(approvePage.isAttendanceUploaded);
            expect(approvePage.presenterDetail).to.equal(approvePage.presenterDetail);
            expect(approvePage.sessionState).to.equal(approvePage.sessionState);
            expect(approvePage.sessionType).to.equal(approvePage.sessionType);
            expect(approvePage.slideURL).to.equal(approvePage.slideURL);
            expect(approvePage.approvePage).to.equal(approvePage.approvePage);
      });
          
    
    