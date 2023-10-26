const headers = require('../../globals')
const access_token = ''
const newSlotPayload = {
  "slotType": "Knolx",
  "dateTime": 1699093800000,
  "slotTitle": "API Automation slot"
};

const updatedSlotPayload = {
    "slotTitle": "Updated Slot Title",
    "dateTime": 1699097400000,
    "slotType": "Webinar"
};

const data = {
  slotId: '653276978555d37c0a4f8da9',
  slotTitle: 'API Automation slot',
  dateTime: 1698237000000,
  slotDuration: 45,
  bookable: true,
  createdBy: 'testadmin@nashtechglobal.com',
  createdOn: 1697805975586,
  slotType: 'Knolx'
};

const approvePage ={

  id: '650afe5cce8ba4439b1697ef',
  presenterDetail: {
    fullName: 'test employee',
    email: 'testemployee@nashtechglobal.com'
  },
  dateTime: 1698748740000,
  sessionDurationInMins: 45,
  topic: 'testingqswqw',
  category: 'AGILE COMPETENCY',
  subCategory: 'Remote and Hybrid working',
  feedbackFormId: '6335c19e58a2ac25916a20e4',
  feedbackExpriationDate: 1698949799000,
  sessionType: 'Knolx',
  sessionState: 'PendingForUser',
  sessionDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test TestTest Test Test Test Test Test Test Test Test Test Test Test  ",
  youtubeURL: '',
  slideshareURL: '',
  slideURL: 'www.amazon.com',
  sessionTag: [],
  remarks: 'Testing',
  isAttendanceUploaded: false,
  isFeedbackAvailable: false,
  isHighlightedAttendeeAvailable: false,
  feedbackFormName: 'Knolx - Share Your Experience',
  presenterPic: '',
  coPresenterPic: ''

}


describe('api testing', function () {
  let createdSlotId; 

  it('create a new slot and store the slotId', async function ({ supertest }) {
    const startTime = performance.now();

    const response = await supertest
      .request(headers.base_url)
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
  }),

  
  it('delete the created slot', async function ({ supertest }) {
   
    if (createdSlotId) {
      const startTime = performance.now();

      const response = await supertest
        .request(headers.base_url)
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
    .request(headers.base_url)
      .post("/v02/slots/653649d78555d37c0a4f8dc3")
      .set('source', headers.source)
      .set('Authorization', access_token)
      .send(updatedSlotPayload) // Use the updated payload here
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
      .request(headers.base_url)
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
      .request(headers.base_url)
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
          .request(headers.base_url)
          .get("/v02/getSession/650afe5cce8ba4439b1697ef") 
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
      
  