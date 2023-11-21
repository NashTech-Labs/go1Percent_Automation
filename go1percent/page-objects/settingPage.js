
module.exports = {
    url: "",
    elements: {
        profileSetting:"ul[class='navbar-nav justify-content-end'] app-dropdown-wrapper div[class='position-relative'] div[class='pt-2'] li[class='icon nav-item dropdown px-2 d-flex align-items-center justify-content-center'] a[class='nav-link text-body p-0 text-white'] div i[class='material-icons user-icon']",
        clickonprofile:".d-flex.py-1.mt-1",
        clickonset:".tab-icon[src='../../../assets/Icons/Settings.svg']",
        seeallfield:".card.tab-card.py-4.px-5",
        editclickname:"div[class='left-div-button-div mt-1'] button[class='edit-detail-button']",
        fullName:"body > app-root > div > app-main > section > main > div > div > div > app-my-profile > div > div.col-lg-8 > div:nth-child(3) > app-my-settings > div > div.float-container > div > div.mt-3.d-flex.flex-column.flex-md-row.justify-content-between > div:nth-child(1) > div:nth-child(2) > input",
        fullname1:"body > app-root > div > app-main > section > main > div > div > div > app-my-profile > div > div.col-lg-8 > div:nth-child(3) > app-my-settings > div > div.float-container > div > div.mt-3.d-flex.flex-column.flex-md-row.justify-content-between > div:nth-child(1) > div.outline-div.div-item",
        savebutt:"div[class='left-div-button-div mt-1'] button:nth-child(1)",
        errormsg:".left-div-button-div.mt-1",
        updategithubid:"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(1)",
        githubup:"body > app-root > div > app-main > section > main > div > div > div > app-my-profile > div > div.col-lg-8 > div:nth-child(3) > app-my-settings > div > div.float-container > div > div.d-flex.flex-column.flex-md-row.my-4 > div:nth-child(1) > div:nth-child(2) > input",
        githubsave:"body > app-root > div > app-main > section > main > div > div > div > app-my-profile > div > div.col-lg-8 > div:nth-child(3) > app-my-settings > div > div.float-container > div > div.d-flex.flex-column.flex-md-row.my-4 > div:nth-child(1) > div.left-div-button-div.mt-2 > button:nth-child(1)",
        errormsggit:"body > app-root > div > app-main > section > main > div > div > div > app-my-profile > div > div.col-lg-8 > div:nth-child(3) > app-my-settings > div > div.float-container > div > div.d-flex.flex-column.flex-md-row.my-4 > div:nth-child(1) > div:nth-child(3) > span",
        gitcancel:"div[class='card-gap'] button:nth-child(2)",
    },
 
    commands: [{
        waitForPageLoad() {
            return this
                .waitForElementVisible('body', );
        },
 
        clickOnElement(element) {
            return this
                .waitForElementVisible(element,10000)
                .click(element)
                .waitForPageLoad();
        },

        clickOn(){
            return this
            .clickOnElement("@profileSetting")
            .pause(3000)
            .clickOnElement("@clickonprofile")
            .pause(8000)
            .clickOnElement("@clickonset")
            .waitForPageLoad();
        },
        verifyAllFieldsVisible() {
            return this
              .waitForPageLoad()
              .verify.visible('@seeallfield');            
          },
        verifyeditname(newFullName) {
             return this
                 .clickOnElement('@editclickname')
                 .pause(5000)
                 .clickOnElement('@fullName')
                  .setValue('@fullName', newFullName)
                  .pause(3000)
                  .clickOnElement('@savebutt') 
                  .pause(5000)
                  .perform((done) => {
                     this.api.getAlertText((result) => {
                         const alertText = result.value;
                         if (alertText === 'Profile updated successfully!') {
                             console.log('Profile updated successfully!');
                         } else {
                             console.log('Profile update failed. Alert text:', alertText);
                         }
                         done();
                     });
                 })
                   .waitForPageLoad() 
                   }, 
        verifyChangesNot() {
                    this.clickOnElement('@editclickname');
                    try {
                        // This will throw an error if the field is editable without clicking the change button
                        this.setValue('@fullName', 'Test Employee1');
                        console.log('Field edited without clicking change button. Test failed!');
                    } catch (error) {
                        // Catching the exception and logging a message
                        console.log('Expected behavior: Field is not editable without clicking change button');
                    }
                    return this;
                }, 
        verifyAlphabetsNotall() {
                    return this
                    .setValue('@fullName', '123') // Entering a number in the name field
                    .click('@savebutt') // Clicking the submit button
        
                    // Verifying that the error message is displayed
                    .waitForElementVisible('@errormsg', 5000)
                    .assert.containsText('@errormsg', 'Name can only contain alphabets')
                    .pause(5000);                  
                  }, 
        verifyAllGitandWordpress() {
        return this
        .clickOnElement('@updategithubid')
        .clearValue('@githubup') // Clear the input field before setting a new value
        .pause(5000)
        .setValue('@githubup', ' ') // Replace 'newGitHubId' with the actual GitHub ID you want to set
        .click('@githubsave')
        .pause(5000)
        .waitForElementVisible('@errormsggit', 5000)
        .assert.containsText('@errormsggit', 'GitHub Id cannot contain whitespaces'.trim())  // Applying trim to ignore whitespaces

        // .assert.containsText('@errormsggit', ' GitHub Id cannot be blank'.trim())
        // .pause(5000)
        // .clickOnElement('@gitcancel')
         .pause(5000);        
        },   
        verifyGit(newGITid) {
            return this
                .clickOnElement('@githubup')
                 .setValue('@githubup', newGITid)
                 .pause(3000)
                 .clickOnElement('@githubsave') 
                 .pause(5000)
                 .perform((done) => {
                    this.api.getAlertText((result) => {
                        const alertText = result.value;
                        if (alertText === 'Profile updated successfully!') {
                            console.log('Profile updated successfully!');
                        } else {
                            console.log('Profile update failed. Alert text:', alertText);
                        }
                        done();
                    });
                    
                })
                .waitForPageLoad() 
                .pause(5000)
    },
    verifyGitclone(newGITidclone) {
        return this
             .clickOnElement('@updategithubid')
             .pause(5000)
             .clickOnElement('@githubup')
             .setValue('@githubup', newGITidclone)
             .pause(3000)
             .clickOnElement('@githubsave') 
             .pause(5000)
             .perform((done) => {
                this.api.getAlertText((result) => {
                    const alertText = result.value;
                    if (alertText === 'Cannot update provided github id , as it already belongs to other user') {
                        console.log('Cannot update provided github id , as it already belongs to other user');
                    } else {
                        console.log('Profile update failed. Alert text:', alertText);
                    }
                    done();
                });
                
            })
            .waitForPageLoad() 
            .pause(5000)
},


}]
};
