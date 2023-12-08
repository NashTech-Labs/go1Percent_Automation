
module.exports = {
url: "",
elements: {
       profileSetting: {
       selector:"(//i[@class='material-icons user-icon'][normalize-space()='settings'])[1]",
       locateStrategy: 'xpath'
                 },
        editclickname:"div[class='left-div-button-div mt-1'] button[class='edit-detail-button']",
        updatemsggr:"#toast-container >div > div",
        clickonprofile:".d-flex.py-1.mt-1",
        clickonset:".tab-icon[src='../../../assets/Icons/Settings.svg']",
        seeallfield:".card.tab-card.py-4.px-5",
        fullName:"div.col-lg-8 app-my-settings div.float-container div:nth-child(1) div:nth-child(2) input",
        savebutt:"div[class='left-div-button-div mt-1'] button:nth-child(1)",
        errormsg:"div:nth-child(1) div.left-div-button-div.mt-1 span",
        updategithubid:"app-my-settings div:nth-child(5) > button",
        githubup:".my-4 input",
        githubsave: {
        selector: "//button[normalize-space(@class)='edit-detail-button' and normalize-space(text())='Save']",
        locateStrategy: 'xpath'
        },
         errormsggit: {
        selector: "//span[@class='error-span']",
        locateStrategy: 'xpath'
        },
        gitcancel:"div[class='card-gap'] button:nth-child(2)",
        wordpresssave: {
        selector:"//button[normalize-space()='Save']",
        locateStrategy: 'xpath'
            },
        textboxwordpress: {
        selector:"//input[contains(@class, 'session-input')]",
        locateStrategy: 'xpath'
        },
      updatewordpress: {
        selector: "//button[normalize-space()='Update Wordpress ID']",
        locateStrategy: 'xpath'
        },
        savedropdown:"div[class='mt-3 d-flex flex-column flex-md-row justify-content-between'] div:nth-child(2) button:nth-child(1)",
        selectdropdown:"option[value='11']",
        dropdownloc:"select[placeholder='Your studio ID']",
        updatecompetency: {
        selector: "//select[@placeholder='Your studio ID']",
        locateStrategy: 'xpath'
        },
        changecompetency:"div[class='mt-3 d-flex flex-column flex-md-row justify-content-between'] div:nth-child(2) button:nth-child(1)",
        changepractice: {
        selector: "//button[normalize-space()='Change Practice']",
        locateStrategy: 'xpath'
        },
        updatetextpractice:"select[placeholder='Your studio ID']",
        selectpractice:"option[value='Quality Solutions']",
        savebuttpractice: {
        selector: "//button[normalize-space()='Save']",
        locateStrategy: 'xpath'
        },
        updatelocation: {
        selector:"//button[normalize-space()='Change Location']",
        locateStrategy: 'xpath'
        },
         saveloc: {
         selector: "(//button[normalize-space()='Save'])[1]",
         locateStrategy: 'xpath'
         },
         errormsgwordpress: {
         selector: "//span[@class='error-span ng-star-inserted']",
         locateStrategy: 'xpath'
            },
         skilladdednot: {
         selector: "//span[@class='error-message mx-3']",
         locateStrategy: 'xpath'
            },   
         addskill: {
         selector: "//div[@class='youtube-url']//div[2]//input",
         locateStrategy: 'xpath'
             },   
    removeskill:"div.col-lg-8 app-my-settings ul li button i",
    selectdroploc:"select[placeholder='Your location']",
    locup:"option[value='India']",
    errorspe:".left-div-button-div.mt-1",
    errorMsg: '.error-message',
    updatemsggr:".toast-message",
    copyidgit:"#toast-container > div > div",
    grforwordpress:"div[aria-label='Profile updated successfully!']",
    gecomency:"div[aria-label='Profile updated successfully!']",
    grpract:"div[aria-label='Successfully Updated Practice Area']",
    upgrskill:"div[aria-label='Successfully Updated']",   
    grskillnot:"#toast-container>div",
    grlocation:"div[aria-label='Profile updated successfully!']",
    grnorblank:".error-span.ng-star-inserted",
    updatenotwordpr:"div[aria-label='Cannot update provided word_press Id, as it already belongs to other user']",
        
            
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
         clickOnProfileSetting(){
            return this
                 .clickOnElement('@profileSetting')
         },
         clickOnClickonProfile(){
            return this
                 .clickOnElement('@clickonprofile')
         },
         clickOnClickonSetting(){
            return this
                 .clickOnElement('@clickonset')
         },
         clickOnEditClickName(){
            return this
                 .clickOnElement('@editclickname')
         },
         clickOnUpdateGitHubId(){
            return this
                 .clickOnElement('@updategithubid')
         },
         clickOnUpdateWordPress(){
            return this
                 .clickOnElement('@updatewordpress')
         },
         clickOnChangePractice(){
            return this
                 .clickOnElement('@changepractice')
         },
         clickOnUpdateLocation(){
            return this
                 .clickOnElement('@updatelocation')
         },
         clickOnChangeCompetency(){
            return this
                 .clickOnElement('@changecompetency')
         },
         clickOnAddSkill(){
            return this
                 .clickOnElement('@addskill')
         },
         clickOnInterSkill(){
            return this
                 .clickOnElement('@interskill')
         },
         clickOnBegSkill(){
            return this
                 .clickOnElement('@begskill')
         },
         clickOnFullName(){
            return this
                 .clickOnElement('@fullName')
         },
             clickOn(){
                return this
                .clickOnElement("@profileSetting")
                .waitForElementVisible("@clickonprofile", 3000)  
                .clickOnElement("@clickonprofile")
                .waitForElementVisible("@clickonset", 8000)  
                .clickOnElement("@clickonset")
                .waitForPageLoad();
            
        },                         
        verifyChangesNot() {
                    this.clickOnElement('@editclickname');
                    try {
                        this.setValue('@fullName', 'Test Employee1');
                        console.log('Field edited without clicking change button. Test failed!');
                    } catch (error) {
                        
                        console.log('Expected behavior: Field is not editable without clicking change button');
                    }
                    return this;
                }, 
        verifyAlphabetsNotall() {
                    return this
                    .setValue('@fullName', '123') 
                    .click('@savebutt') 
                    .waitForElementVisible('@errormsg', 20000)                                     
                  }, 
        verifyAllGitandWordpress() {
        return this
        .setValue('@githubup',' ') 
        .click('@githubsave')
        .waitForElementVisible('@errormsggit', 10000)
        .assert.containsText('@errormsggit', 'GitHub Id cannot contain whitespaces'.trim())  
      
        },   
        verifyGit(newGITid) {
            return this
            .click('@githubup')
            .setValue('@githubup', newGITid)
            .waitForElementVisible('@githubsave', 10000)
            .click('@githubsave')            
    },
    verifyGitClone(newGITidclone) {
        return this
             .clickOnElement('@githubup')
             .setValue('@githubup', newGITidclone)
             .clickOnElement('@githubsave')           
},
verifyWordPress(newwordpress) {
    return this       
         .setValue('@textboxwordpress', newwordpress)
          .clickOnElement('@wordpresssave')        
},
verifyCompetencySelection() {
    return this
        .clickOnElement('@updatecompetency')
        .waitForElementVisible('@selectdropdown', 10000)
        .clickOnElement('@selectdropdown')
        .clickOnElement('@savedropdown')
},
verifyPracticeSelection() {
    return this
         .clickOnElement('@updatetextpractice') 
         .clickOnElement('@selectpractice')
         .clickOnElement('@savebuttpractice')
},
verifySkill(skill) {
    return this
        .setValue('@addskill', skill) 
         .setValue('@addskill', this.api.Keys.ENTER)       
},
verifyRemoveSkill() {
    return this
        .clickOnElement('@removeskill')       
},
verifyLocation() {
    return this 
        .clickOnElement('@selectdroploc') 
        .clickOnElement('@locup')
        .clickOnElement('@saveloc')
},
verifyLocinList(){
    return this
        .setValue('@updatelocation', 'Bangalore')
        .perform((done) => {
            this.api.getAlertText((result) => {
                const alertText = result.value;
                 if (alertText === 'Successfully Updated') {
                     console.log('Successfully Updated');
                 } else {
                     console.log('Profile update failed. Alert text:', " You should be able to select any component from location list only");
                 }
                 done();
            });
        })
        .waitForPageLoad()
        
},
verifyLocBlank(){
    return this
        .setValue('@updatelocation', '')
        .perform((done) => {
            this.api.getAlertText((result) => {
                const alertText = result.value;
                if (alertText === 'Successfully Updated') {
                    console.log('Successfully Updated');
                } else {
                    console.log('Profile update failed . Alert text:', "this field is not going to empty");
                }
                done();
            });
        })
        .waitForPageLoad()
     

},
verifyWhiteSpace(){
    return this
        .clearValue('@fullName') 
        .setValue('@fullName', '  test  ') 
        .click('@savebutt')           
        },    
verifyNameWithSpecialChar(){
            return this
                .clearValue('@fullName') 
                .setValue('@fullName', ' te&%st ') 
                .click('@savebutt')
                .waitForElementVisible('@errorspe', 5000)
                .assert.containsText('@errorspe', 'Name can only contain alphabets'.trim())  
                       
                },   
verifyNameWithBlankValue(newwordpreess){
return this
 .clearValue('@fullName')
 .setValue('@fullName', newwordpreess) 
 .click('@savebutt')      
     },   
verifyWordPressClone(newwordpreess) {
        return this
             .clickOnElement('@textboxwordpress')
             .setValue('@textboxwordpress',newwordpreess)
             .clickOnElement('@wordpresssave') 
},                       
}]
 };
