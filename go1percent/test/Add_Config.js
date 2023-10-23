const globals = require('../globals')

describe('api testing', function () {

  const ResponseTime = (startTime)=>{ // Function to check Response Time
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
    console.log(`Response Time: ${responseTime}ms`);
    expect(responseTime).to.be.lessThan(2000); 
    
  }
    
    
    it('POST api test', async function({supertest}) { //POST Call
      const startTime = new Date().getTime();
        await supertest
        
          .request(globals.Url.BaseUrl)
          .post(globals.Url.PostEndPoints)
          .set(globals.headers)
          .send({
            "title":"Test employee contribution",
            "contributionType":"Research paper",
            "contributionDate":"2023-10-19 00:00:00",
            "urlDetails":"www.coursgbcxdf.org",
            "technologyDetails":"ddcscdcmjjicjdjc hdfiwic jocdjoicwd fcdiocd chojvwofeefhevdvhvhnvjvjdwehuihefkjcnjkvnwbrihfuvbhjbdjfre"
          })
          .expect(200) //Asserting Response Code
          .then(function(response){
            expect(response.body.status).to.be.equal(true)// Asserting Response Attribute
          });

          ResponseTime(startTime); // Asserting Response Time
      });

      it('GET api test', async function({supertest}) { // GET Call
        const startTime = new Date().getTime();
        await supertest
        
          .request(globals.Url.BaseUrl)
          .get(globals.Url.GetEndPoints)
          .set(globals.headers)
          .expect(200) //Asserting Response Code
         .then(function(response){
           expect(response.body.status).to.be.equal(true)// Asserting Response Attribute
         });

         ResponseTime(startTime);// Asserting Response Time
      });
          
  });
  