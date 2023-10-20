const headers = require('../globals')
describe('api testing', function () {

    //This test sends a GET request to retrieve details of a specific contribution using the contribution ID.

    it('click on a certain contribution and see the details', async function({supertest}) {
      await supertest
        .request(headers.baseurl)
        .get("/contribution?contributionId=2729")
        .set(headers.headers)
        
        .expect(200)
        .expect('Content-Type', /json/)
        .then(function(response){

          //The test then checks the response body for the presence of specific properties such as "contributionId," "knolderName," "title," and "status."
            expect(Object.keys(response.body).length).to.be.greaterThan(0);
            expect(response.body.data).to.have.property('contributionId');
            expect(response.body.data).to.have.property('knolderName');
            expect(response.body.data).to.have.property('title');
            expect(response.body.data).to.have.property('status');

        });
    });

    //This test sends a GET request to retrieve knolder contributions with pagination and a limit.
    it('on saving changes for a contribution', async function({supertest}) {
        await supertest

          .request(headers.baseurl)
          .get("/contribution/getKnolderContribution?pageNumber=1&limit=10000")
          .set(headers.headers)
          
          .expect(200)
          .expect('Content-Type', /json/)
          .then(function(response){

            //The test then checks the response body for the presence of specific properties for the first contribution, such as "contributionId," "knolderName," "title," "status," and "contributionType."
            expect(Object.keys(response.body).length).to.be.greaterThan(0);
            expect(response.body.data._1[0]).to.have.property('contributionId');
            expect(response.body.data._1[0]).to.have.property('knolderName');
            expect(response.body.data._1[0]).to.have.property('title');
            expect(response.body.data._1[0]).to.have.property('status');
            expect(response.body.data._1[0]).to.have.property('contributionType');

        });
          
      });

      //This test sends a PUT request to edit a contribution with updated data.
      it('on editing a contribution', async function({supertest}) {
        await supertest
          .request("https://backend.qa.go1percent.com")
          .put('/contribution/editContribution')
          .set(headers.headers)
          .send({"title":"fbgdhgnbgfndgnngfjdgj","contributionType":"Conference","contributionDate":"2023-10-11 00:00:00","urlDetails":"www.cou.org","technologyDetails":"dsfnwejkfewhfuiehfioejwfoijcoiwndoweifnencvdvejdsncdjdsklwedjknhcfudsiefewhrtoihjfoivdhsjnvdjsnfvdkjsnvkjdsnvkj","contributionId":2729})
          
          .expect(200)
          .expect('Content-Type', /json/)
          .then(function(response){

            //The test then checks the response body for the presence of specific properties, such as "resource," "status," and "data," and verifies that the "data" property contains the expected message, indicating that the contribution was updated successfully.
            expect(Object.keys(response.body).length).to.be.greaterThan(0);
            expect(response.body).to.have.property('resource')
            expect(response.body).to.have.property('status')
            expect(response.body).to.have.property('data')
            expect(response.body.data).to.be.equal('contribution Updated Successfully!')
            
        });
          
      });





  });
  