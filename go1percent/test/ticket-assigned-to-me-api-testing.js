const { base } = require('mocha/lib/reporters');
const globals = require('../globals')
const accessToken = process.argv.indexOf('--token');

describe('Ticket assigned to me API testing', function () {
  const token = process.argv[accessToken + 1];

  const header = {
    'Source': 'https://nashtechglobal.qa.go1percent.com',
    'Authorization': 'Bearer ' + token
  }

  it('should test update api', async function ({ supertest }) {
    const startTime = performance.now();
    const payloadData = {
      assignedTo: 'testemployee@nashtechglobal.com',
      category: 'Knolx',
      priority: 'High',
      status: 'Open',
      ticketID: 837,
    };
    //https://ticket-backend.qa.go1percent.com/tickets/update
    await supertest
      .request(globals.helpDesk_base_Url)
      .put("/tickets/update")
      .set(header)
      .send(payloadData) // Send the payload data
      .expect(200)      // Expect a status code of 200
      .expect('Content-Type', 'application/json')       // Expect a response with JSON content type

      .then(function (response) {
        const endTime = performance.now()
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000);
        expect(response.body).to.have.property("resource").and.to.be.eq("updateTicketDetails");
        expect(response.body).to.have.property("status").and.to.be.true;
        expect(response.body).to.have.property("data").and.to.be.eq("Ticket Updated Successfully!");
      });
  });


  it('should test ticket assigned to me', async function ({ supertest }) {
    const startTime = performance.now();
    const ticketId = 875;
    //https://ticket-backend.qa.go1percent.com/tickets/assigned/me?status=Open&limit=10&pageNumber=1
    const response = await supertest
      .request(globals.helpDesk_base_Url)
      .get("/tickets/assigned/me?status=Open&limit=10&pageNumber=1")
      .set(header)
      .expect(200)    // Expect a status code of 200
      .expect('Content-Type', 'application/json')     // Expect a response with JSON content type

      .then(function(response){
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(3000);
        expect(response.body).to.have.property("resource").and.to.be.eq("getAssignedTickets");
        expect(response.body).to.have.property("status").and.to.be.true;
      });

  });


  it('should test comments api', async function ({ supertest }) {
    const startTime = performance.now();
    const ticketId = 875;
    //https://ticket-backend.qa.go1percent.com/tickets/875/comments
    await supertest
      .request(globals.helpDesk_base_Url)
      .get("/tickets/875/comments")
      .set(header)
      .expect(200)      // Expect a status code of 200
      .expect('Content-Type', 'application/json')       // Expect a response with JSON content type
      .then(function (response) {
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000);
        expect(response.body).to.have.property("resource").and.to.be.eq("getComments");
        expect(response.body).to.have.property("status").and.to.be.true;
      });
  });


  it('should test ticket 875 api', async function ({ supertest }) {
    const startTime = performance.now();
    //https://ticket-backend.qa.go1percent.com/tickets/ticket/875
    await supertest
      .request(globals.helpDesk_base_Url)
      .get("/tickets/ticket/875")
      .set(header)
      .expect(200)      // Expect a status code of 200
      .expect('Content-Type', 'application/json')       // Expect a response with JSON content type
      .then(function (response) {
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000);

        expect(response.body).to.have.property("resource").and.to.be.eq("getTicketDetails");
        expect(response.body).to.have.property("status").and.to.be.true;

        // Assert specific properties of the ticket, replace with actual data
        expect(response.body).to.have.property("data");
        const ticketData = response.body.data;
        expect(ticketData).to.have.property("userDetails");
        const userDetails = ticketData.userDetails;
        expect(userDetails).to.have.property("userName").and.to.be.eq("Testemployee");
        expect(userDetails).to.have.property("userEmail").and.to.be.eq("testemployee@nashtechglobal.com");
        // Add more assertions for userDetails as needed

        expect(ticketData).to.have.property("ticketDetails");
        const ticketDetails = ticketData.ticketDetails;
        expect(ticketDetails).to.have.property("ticketID").and.to.be.eq(875);
        expect(ticketDetails).to.have.property("title").and.to.be.eq("Test001");
      });
  });


  it('should test assignees API', async function ({ supertest }) {
    const startTime = performance.now();
    //https://ticket-backend.qa.go1percent.com/users/assignees
    await supertest
      .request(globals.helpDesk_base_Url)
      .get("/users/assignees")
      .set(header)
      .expect(200)      // Expect a status code of 200
      .expect('Content-Type', 'application/json')       // Expect a response with JSON content type
      .then(function (response) {
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000);
        expect(response.body).to.have.property("resource").and.to.be.eq("users/assignees");
        expect(response.body).to.have.property("status").and.to.be.true;

      });

  });


  it('should test categories API', async function ({ supertest }) {
    const startTime = performance.now();
    //https://ticket-backend.qa.go1percent.com/tickets/categories
    await supertest
      .request(globals.helpDesk_base_Url)
      .get("/tickets/categories")
      .set(header)
      .expect(200)    // Expect a status code of 200
      .expect('Content-Type', 'application/json')   // Expect a response with JSON content type
      .then(function (response) {
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        expect(responseTime).to.be.lessThan(2000);
        expect(response.body).to.have.property("resource").and.to.be.eq("getCategories");
        expect(response.body).to.have.property("status").and.to.be.true;

        // Assert the data array
        expect(response.body).to.have.property("data");
      });

  });

});