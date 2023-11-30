
module.exports = {
    url: "",
    elements: {
        profileSetting: {
           selector:"(//i[@class='material-icons user-icon'][normalize-space()='settings'])[1]",
            locateStrategy: 'xpath'
        },
        clickonprofile:".d-flex.py-1.mt-1",
        clickonset:".tab-icon[src='../../../assets/Icons/Settings.svg']",
        seeallfield:".card.tab-card.py-4.px-5",
        editclickname:"div[class='left-div-button-div mt-1'] button[class='edit-detail-button']",
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
        wordpresssave:"div:nth-child(3) div.left-div-button-div.mt-2 div button:nth-child(1)",
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
        addskill:"app-my-profile > div > div.col-lg-8 > div:nth-child(3) > app-my-settings > div > div.url-div.mt-3.d-flex.mb-4 > div:nth-child(1) > form > div > div > div:nth-child(2) > input",
        removeskill:"div.col-lg-8 app-my-settings ul li button i",
        updatelocation: {
            selector: "/html/body/app-root/div/app-main/section/main/div/div/div/app-my-profile/div/div[2]/div[3]/app-my-settings/div/div[1]/div/div[2]/div[3]/div[2]/button",
            locateStrategy: 'xpath'
        },
        selectdroploc:"select[placeholder='Your location']",
        locup:"option[value='India']",
        errorspe:".left-div-button-div.mt-1",
        errorMsg: '.error-message',
         saveloc: {
         selector: "(//button[normalize-space()='Save'])[1]",
             locateStrategy: 'xpath'
         },
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
                .waitForElementVisible("@clickonprofile", 3000)  
                .clickOnElement("@clickonprofile")
                .waitForElementVisible("@clickonset", 8000)  
                .clickOnElement("@clickonset")
                .waitForPageLoad();
            
        },
        verifyAllFieldsVisible() {
            return this
              .waitForPageLoad()
              .verify.visible('@seeallfield')
              .waitForPageLoad();           
          },
        verifyeditname(newFullName) {
             return this
                 .clickOnElement('@editclickname')
                 
                 .clickOnElement('@fullName')
                  .setValue('@fullName', newFullName)
                 
                  .clickOnElement('@savebutt') 
                 
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
                    .assert.containsText('@errormsg', 'Name can only contain alphabets')
                                     
                  }, 
        verifyAllGitandWordpress() {
        return this
        .clickOnElement('@updategithubid')
        .clearValue('@githubup') 
        .setValue('@githubup', ' ') 
        .click('@githubsave')
        .waitForElementVisible('@errormsggit', 10000)
        .assert.containsText('@errormsggit', 'GitHub Id cannot contain whitespaces'.trim())          
        },   
        verifyGit(newGITid) {
            return this
                .clickOnElement('@githubup')
                 .setValue('@githubup', newGITid)
                
                 .clickOnElement('@githubsave') 
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
    verifyGitclone(newGITidclone) {
        return this
             .clickOnElement('@updategithubid')
             .clickOnElement('@githubup')
             .setValue('@githubup', newGITidclone)
             .clickOnElement('@githubsave') 
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
           
},
verifywordpress(newwordpress) {
    return this
        .clickOnElement('@updatewordpress')
         .setValue('@textboxwordpress', newwordpress)
          .clickOnElement('@wordpresssave') 
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
verifyCompetencySelection() {
    return this
    .clickOnElement('@changecompetency')
        .waitForElementVisible('@updatecompetency', 10000)
        .clickOnElement('@updatecompetency')
        .waitForElementVisible('@selectdropdown', 10000)
        .clickOnElement('@selectdropdown')
        .clickOnElement('@savedropdown')
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
verifyPracticeSelection() {
    return this
        .clickOnElement('@changepractice')
         .clickOnElement('@updatetextpractice') 
         .clickOnElement('@selectpractice')
         .clickOnElement('@savebuttpractice')
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
verifyskill(skill) {
    return this
        .clickOnElement('@addskill')
        .setValue('@addskill', skill) 
         .setValue('@addskill', this.api.Keys.ENTER)
            .perform((done) => {
               this.api.getAlertText((result) => {
                   const alertText = result.value;
                   if (alertText === 'Successfully Updated') {
                       console.log('Successfully Updated');
                   } else {
                       console.log('Profile update failed. Alert text:', alertText);
                   }
                   done();
               });
        
           })
         .waitForPageLoad() 
        
},
verifySkillcopy(Skillcopy) {
    return this
         .clickOnElement('@addskill')
         .setValue('@addskill', Skillcopy) 
         .setValue('@addskill', this.api.Keys.ENTER)
         .perform((done) => {
            this.api.getAlertText((result) => {
                const alertText = result.value;
                if (alertText === 'Skill already added') {
                    console.log('Skill already added');
                } else {
                    console.log('Profile update failed. Alert text:', alertText);
                }
                done();
            });
            
        })
        .waitForPageLoad() 
      
},
verifyremoveskill() {
    return this
        .clickOnElement('@removeskill')
            .perform((done) => {
               this.api.getAlertText((result) => {
                   const alertText = result.value;
                   if (alertText === 'Successfully Updated') {
                       console.log('Successfully Updated');
                   } else {
                       console.log('Profile update failed. Alert text:', alertText);
                   }
                   done();
               });
        
           })
         .waitForPageLoad() 
        
},
verifyLocation() {
    return this
        .clickOnElement('@updatelocation')
        .waitForPageLoad() 
        .clickOnElement('@selectdroploc') 
        .clickOnElement('@locup')
        .clickOnElement('@saveloc')
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
verifylocinlist(){
    return this
    .clickOnElement('@updatelocation')
        .setValue('@updatelocation', 'Bangalore')
        .perform((done) => {
            this.api.getAlertText((result) => {
                const alertText = result.value;
                if (alertText === 'Successfully Updated') {
                    console.log('Successfully Updated');
                } else {
                    console.log('Profile update failed. Alert text:', alertText);
                }
                done();
            });
        })
        .waitForPageLoad()
        
},
verifylocblank(){
    return this
    .clickOnElement('@updatelocation')
        .setValue('@updatelocation', '')
        .perform((done) => {
            this.api.getAlertText((result) => {
                const alertText = result.value;
                if (alertText === 'Successfully Updated') {
                    console.log('Successfully Updated');
                } else {
                    console.log('Profile update failed . Alert text:', alertText);
                }
                done();
            });
        })
        .waitForPageLoad()
     

},
verifynamecantblank(){
    return this
        .clickOnElement('@editclickname')
        .clearValue('@fullName') 
        .setValue('@fullName', ' test ') 
        .click('@savebutt')
        
        .waitForElementVisible('@errormsg', 5000)
        .assert.containsText('@errormsg', 'Name can not contain whitespaces'.trim())  
               
        },   
verifynamewithspecialchar(){
            return this
                .clickOnElement('@editclickname')
                .clearValue('@fullName') 
                .setValue('@fullName', ' te&%st ') 
                .click('@savebutt')
                .waitForElementVisible('@errorspe', 5000)
                .assert.containsText('@errorspe', 'Name can only contain alphabets'.trim())  
                       
                },   
verifynamewithblankvalue(){
return this
.clickOnElement('@editclickname')
 .click('@savebutt')
 .waitForElementVisible('@errormsg', 5000)
 .assert.containsText('@errormsg', 'Name can not contain whitespaces'.trim())          
                       },   
verifywordpressclone(newwordpreess) {
        return this
             .clickOnElement('@updatewordpress')
             .clickOnElement('@textboxwordpress')
             .setValue('@textboxwordpress', newwordpreess)
             .clickOnElement('@wordpresssave') 
             .perform((done) => {
                this.api.getAlertText((result) => {
                    const alertText = result.value;
                    if (alertText === 'Cannot update provided Wordpressid id , as it already belongs to other user') {
                        console.log('Cannot update provided Wordpressid id  , as it already belongs to other user');
                    } else {
                        console.log('Profile update failed. Alert text:', alertText);
                    }
                    done();
                });
                
            })
            .waitForPageLoad()
},                       
}]
 };
