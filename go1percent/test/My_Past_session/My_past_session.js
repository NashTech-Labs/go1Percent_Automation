const headers = require('../../globals')
const accessToken =''

    const payloadData= {
          pageNumber: 1,
          pageSize: 1000,
          filter: 'past',
        };
    const noSession= {
      "sessions" : [ ],
      "count" : 0
    }

    const sessionlist= {
      "id" : "650afe5cce8ba4439b1697ef",
      "topic" : "Testing Ticket",
      "category" : "TEST AUTOMATION COMPETENCY",
      "subCategory" : "Cypress",
      "feedbackFormId" : "650faaccce8ba4439b1697fc",
      "feedbackExpriationDate" : 1697480999000,
      "sessionType" : "Knolx",
      "sessionState" : "Completed",
    };
    const descriptivepage= {
      "dateTime" : 1697284140000,
      "sessionDurationInMins" : 45,
      "topic" : "Testing Ticket",
      "category" : "TEST AUTOMATION COMPETENCY",
      "subCategory" : "Cypress",
      "feedbackFormId" : "650faaccce8ba4439b1697fc",
      "feedbackExpriationDate" : 1697480999000,
      "sessionType" : "Knolx",
      "sessionState" : "Completed",
    }

    const backButton={
      "dateTime" : 1698748740000,
      "sessionDurationInMins" : 45,
      "topic" : "Testing Title",
      "category" : "AGILE COMPETENCY",
      "subCategory" : "Remote and Hybrid working",
      "feedbackFormId" : "6335c19e58a2ac25916a20e4",
      "feedbackExpriationDate" : 1698949799000,
      "sessionType" : "Knolx",
      "sessionState" : "PendingForAdmin",
    }
    const AttendanceButton={
      "attendees" : [ "Lokeshwaran.Subramaniyan@nashtechglobal.com" ]
    }
     const feedbackButton={
      "sessionType" : "Knolx",
      "sessionTopic" : "Testing Ticket",
      "sessionDate" : 1697284140000,
      "npsScore" : 0,
      "attendees" : 3,
      "youtubeViews" : 0,
      "knolxScore" : 4
     }

describe('api testing', function () {      
    it('No session is availble in my past session', async function ({ supertest }) {
      
    const startTime = performance.now();   
    const payloadData= {
      pageNumber: 1,
      pageSize: 1000,
      filter: 'past',
    }; 
      const response = await supertest

        .request(headers.base_url)
        .get(`/v02/sessions/my?pageNumber=${headers.queryMyPastSession.pageNumber}&pageSize=${headers.queryMyPastSession.pageSize}&filter=${headers.queryMyPastSession.filter}`)
        .set('source', headers.source )
        .set('Authorization', accessToken)
        .send(payloadData)
         .expect(200)
         .expect('Content-Type', 'application/json')
        .then((response)=>{
          console.log(response.body)
          const endTime = performance.now();
          const responseTime = endTime - startTime
          expect(responseTime).to.be.lessThan(2000)
          expect(response.body.sessions).to.equal(noSession.sessions); 
          expect(response.body.count).to.equal(noSession.count); 


        });
    });

    it(' Can see my availble in my past session', async function ({ supertest }) {
      const startTime = performance.now();  
    
          
      const response = await supertest

        .request(headers.base_url)
        .get(`/v02/sessions/my?pageNumber=${headers.queryMyPastSession.pageNumber}&pageSize=${headers.queryMyPastSession.pageSize}&filter=${headers.queryMyPastSession.filter}`)
        .set('source', headers.source )
        .set('Authorization', accessToken)
        .send(payloadData)
  
      
       .expect(200)
       .expect('Content-Type', 'application/json')
        .then((response)=>{
          console.log(response.body)
          const endTime = performance.now();
          const responseTime = endTime - startTime
          expect(responseTime).to.be.lessThan(2000)
          expect(response.body.topic).to.equal(descriptivepage.topic);
          expect(response.body.category).to.equal(descriptivepage.category);
          expect(response.body.subCategory).to.equal(descriptivepage.subCategory);
          expect(response.body.feedbackFormId).to.equal(descriptivepage.feedbackFormId);
          expect(response.body.feedbackExpriationDate).to.equal(descriptivepage.feedbackExpriationDate);
          expect(response.body.sessionType).to.equal(descriptivepage.sessionType);
          expect(response.body.sessionState).to.equal(descriptivepage.sessionState);    
            
        });
     });

     it('Descriptive page should be visible on opening a session', async function ({ supertest }) {
        const startTime = performance.now();        
        const response = await supertest
          .request(headers.base_url)
          .get('/v02/getSession/6529144d45bc9a797dfbcb19')
          .set('source', headers.source)
          .set('Authorization', accessToken)
          
          .expect(200)
          .expect('Content-Type', 'application/json')
          .then((response)=>{
            console.log(response.body)
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(5000);
      
               expect(response.body.dateTime).to.equal(sessionlist.dateTime);
               expect(response.body.sessionDurationInMins).to.equal(sessionlist.sessionDurationInMins);
               expect(response.body.topic).to.equal(sessionlist.topic);
               expect(response.body.category).to.equal(sessionlist.category);
               expect(response.body.subCategory).to.equal(sessionlist.subCategory);
               expect(response.body.feedbackFormId).to.equal(sessionlist.feedbackFormId);
               expect(response.body.feedbackExpriationDate).to.equal(sessionlist.feedbackExpriationDate);
               expect(response.body.sessionType).to.equal(sessionlist.sessionType);
               expect(response.body.sessionState).to.equal(sessionlist.sessionState); 

          });
      });

      it('Back buttom is enable ', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
  
          .request(headers.base_url)
          .get(`/v02/sessions/my?pageNumber=${headers.queryMyPastSession.pageNumber}&pageSize=${headers.queryMyPastSession.pageSize}&filter=${headers.queryMyPastSession.filter}`)
          .set('source', headers.source)
          .set('Authorization', accessToken)
  
          .expect(200)
          .expect('Content-Type', 'application/json')
          .then((response)=>{
            console.log(response.body)
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(2000)

             expect(response.body.dateTime).to.equal(backButton.dateTime);
               expect(response.body.sessionDurationInMins).to.equal(backButton.sessionDurationInMins);
               expect(response.body.topic).to.equal(backButton.topic);
               expect(response.body.category).to.equal(backButton.category);
               expect(response.body.subCategory).to.equal(backButton.subCategory);
               expect(response.body.feedbackFormId).to.equal(backButton.feedbackFormId);
               expect(response.body.feedbackExpriationDate).to.equal(backButton.feedbackExpriationDate);
               expect(response.body.sessionType).to.equal(backButton.sessionType);
               expect(response.body.sessionState).to.equal(backButton.sessionState); 

  
          });
      });


      it('redirect to the Attendance list', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
  
          .request(headers.base_url)
          .get(`/v02/sessions/65364ed48555d37c0a4f8dc7/attendees?knoldersOnly=${headers.queryMyPastSession.knolderOnly}`)
          .set('source', headers.source)
          .set('Authorization', accessToken)
  
          //.expect(200)
          .expect('Content-Type', 'application/json')
          .then((response)=>{
            console.log(response.body)
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(2000)
            expect(response.body.attendees).to.equal(AttendanceButton.attendees); 

          });
      });

      it('Redirect to feedback report page', async function ({ supertest }) {
        const startTime = performance.now();
        const response = await supertest
  
          .request(headers.base_url)
          .get(`/v02/score/session?sessionId=${headers.queryMyPastSession.sessionId}`)
          .set('source', headers.source)
          .set('Authorization', accessToken)
  
          .expect(200)
          .expect('Content-Type', 'application/json') 
          .then((response)=>{
            console.log(response.body)
            const endTime = performance.now();
            const responseTime = endTime - startTime
            expect(responseTime).to.be.lessThan(2000)

    expect(response.body.sessionType).to.equal(feedbackButton.sessionType);
    expect(response.body.sessionTopic).to.equal(feedbackButton.sessionTopic);
    expect(response.body.sessionDate).to.equal(feedbackButton.sessionDate);
    expect(response.body.npsScore).to.equal(feedbackButton.npsScore);
    expect(response.body.attendees).to.equal(feedbackButton.attendees);
    expect(response.body.youtubeViews).to.equal(feedbackButton.youtubeViews);
    expect(response.body.knolxScore).to.equal(feedbackButton.knolxScore);
  
  
          });
      });
    });