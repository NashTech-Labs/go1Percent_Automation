const accessToken = 'Bearer '; 
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
  slotTitle: 'Api Testing',
  dateTime: 1698237000000,
  slotDuration: 45,
  bookable: true,
  createdBy: 'testadmin@nashtechglobal.com',
  createdOn: 1697805975586,
  slotType: 'Knolx'
};

describe('api testing', function () {
  let createdSlotId; 

  it('create a new slot and store the slotId', async function ({ supertest }) {
    const startTime = performance.now();

    const response = await supertest
      .request("https://knolx-backend.qa.go1percent.com")
      .post("/v02/slots")
      .set('source', "https://nashtechglobal.qa.go1percent.com")
      .set('Authorization', accessToken)
      .send(newSlotPayload)
      .expect(200)
      .then((response) => {
        console.log(response.body);
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(6000);
        expect(response.body.slotId).to.be.not.empty;

        createdSlotId = response.body.slotId;
      });
  }),

  
  it('delete the created slot', async function ({ supertest }) {
   
    if (createdSlotId) {
      const startTime = performance.now();

      const response = await supertest
        .request('https://knolx-backend.qa.go1percent.com')
        .delete(`/v02/slots/${createdSlotId}`) 
        .set('source', "https://nashtechglobal.qa.go1percent.com")
        .set('Authorization', accessToken)
        .expect(200)
        .then((response) => {
          console.log(response.body);
          const endTime = performance.now();
          const responseTime = endTime - startTime;
          expect(responseTime).to.be.lessThan(6000);
          expect(response.body.status).to.be.true;
        });
    } else {
      console.log('No slotId available to delete.');
    }
  }),

  it('verify that upon clicking on free slot title, session type, title, date, and time can be updated.', async function ({ supertest }) {
    const startTime = performance.now();
  
    const response = await supertest
      .request("https://knolx-backend.qa.go1percent.com")
      .post("/v02/slots/653649d78555d37c0a4f8dc3")
      .set('source', "https://nashtechglobal.qa.go1percent.com")
      .set('Authorization', accessToken)
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
      .request("https://knolx-backend.qa.go1percent.com")
      .post("/v02/slots/automateSlot/3/Knolx") 
      .set('source', "https://nashtechglobal.qa.go1percent.com")
      .set('Authorization', accessToken)
      .expect(200)
       console.log(response.body);

        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(6000);
        expect(response.body.status).to.be.true;
       
      });
  }),

  it('getFourMonths Slot', async function ({ supertest }) {
    const startTime = performance.now();
  
    const response = await supertest
      .request("https://knolx-backend.qa.go1percent.com")
      .get("/v02/slots/getFourMonths") 
      .set('source', "https://nashtechglobal.qa.go1percent.com")
      .set('Authorization', accessToken)
      .expect(200)
       console.log(response.body);

        const endTime = performance.now();
        const responseTime = endTime - startTime
        expect(responseTime).to.be.lessThan(6000);
             
      }),

      it('Verify when admin click on any slot it navigate to approved page', async function ({ supertest }) {
        const startTime = performance.now();
      
        const response = await supertest
          .request("https://knolx-backend.qa.go1percent.com")
          .get("/v02/getSession/650afe5cce8ba4439b1697ef") 
          .set('source', "https://nashtechglobal.qa.go1percent.com")
          .set('Authorization', accessToken)
          .expect(200)
           console.log(response.body);
    
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(6000);
                 
          });
      
  