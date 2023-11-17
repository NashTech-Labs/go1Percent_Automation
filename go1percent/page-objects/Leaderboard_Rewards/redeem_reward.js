var redeemRewardCommands = {

    openRewardReport : function () {
        return this
        .click('@rewardReportButton')
        .assert.urlContains('rewards/reward-reports');  
    },

    assertIndividualReport : function () {
        return this
        .assert.elementPresent('@employeeName') 
        .assert.elementPresent('@competencyName')
        .assert.elementPresent('@rewardName') 
        .assert.elementPresent('@redeemPoints') 
        .assert.elementPresent('@redeemedDate');
    },

    openRedeemRequestWindow : function () {
        return this
        .click('@employeeName')
        .waitForElementPresent('@RedeemRequestWindowTitle', 5000)
        .assert.textContains('@RedeemRequestWindowTitle', 'Process a Redeem Request');
    }, 


    openRedeemRequestWindowAndGetDetails: function (callback) {
        var rewardDetails = {};
        return this
            .click('@employeeName')
            .waitForElementPresent('@RedeemRequestWindowTitle', 5000)
            .assert.textContains('@RedeemRequestWindowTitle', 'Process a Redeem Request')
            .getText('@rewardOwner', function (result) {
                rewardDetails.owner = result.value;
            })
            // Add more getText calls for other details as needed
            .getText('@redeemedReward', function (result) {
                rewardDetails.reward = result.value;
            })
            .getText('@rewardOwnerCompetency', function (result) {
                rewardDetails.competency = result.value;
            })
            .getText('@redeemedOnDate', function (result) {
                rewardDetails.redeemedDate = result.value;
            })
            // Add more getText calls for other details as needed
            .perform(function () {
                // Pass the employee details back to the callback
                callback(rewardDetails);
            });
    },

    assertProcessedReward: function (rewardDetails) {
        return this
        .waitForElementPresent('@employeeName', 5000)
        .assert.textContains('@employeeName',rewardDetails.owner) 
        .assert.elementPresent('@competencyName', rewardDetails.competency)
        .assert.elementPresent('@rewardName', rewardDetails.reward) 
        .assert.elementPresent('@redeemPoints', rewardDetails.redeemedDate) 
        .assert.elementPresent('@statusButton', 'PROCESSED');
    },

    closeRedeemRequestWindow : function () {
        return this
        .waitForElementPresent('@closeButton', 5000)
        .click('@closeButton');
    },  

    processReward : function(){
        return this
        .waitForElementPresent('@processButton', 5000)
        .click('@processButton');
    },

    switchToCompetency : function(){
        return this
        .waitForElementPresent('@iconGrid')
        .waitForElementPresent('@competencyButton', 5000) 
        .click('@competencyButton');
    },

    assertCompetenecyReport : function(){
        return this
        .waitForElementPresent('@rewardReport', 5000) 
        .assert.textContains('@rewardReport', 'No Redeemed Reward Available');
    },


    switchToIndividual: function(){
        return this
        .waitForElementPresent('@individualButton', 5000) 
        .click('@individualButton');
    },

    setTimeFilterToToday: function(){
        return this
        .waitForElementPresent('@timeFilter', 5000) 
        .click('@timeFilter') 
        .waitForElementPresent('@todayOption', 5000)
        .click('@todayOption')
        .click('@timeFilter');
    },

    matchDate: function(date){
        return this
        .waitForElementPresent('@redeemedDate', 5000)
        .assert.textContains('@redeemedDate', date);
    }, 

    resetTimeFilter: function(){
        return this
        .waitForElementPresent('@timeFilter', 5000) 
        .click('@timeFilter') 
        .waitForElementPresent('@allTimeOption', 5000)
        .click('@allTimeOption')
        .click('@timeFilter');
    },

    setStatusFilterToProcessing: function(){
        return this
        .waitForElementPresent('@statusFilter', 5000) 
        .click('@statusFilter') 
        .waitForElementPresent('@processingOption', 5000)
        .click('@processingOption')
        .click('@statusFilter');
    },

    setStatusFilterToProcessed: function(){
        return this
        .waitForElementPresent('@statusFilter', 5000) 
        .click('@statusFilter') 
        .waitForElementPresent('@processedOption', 5000)
        .click('@processedOption')
        .click('@statusFilter');
    },

    resetStatusFilter: function(){
        return this
        .waitForElementPresent('@statusFilter', 5000) 
        .click('@statusFilter') 
        .waitForElementPresent('@allStatusOption', 5000)
        .click('@allStatusOption')
        .click('@statusFilter')
        .waitForElementPresent('@employeeName');
    },

    searchNasher: function(name){
        return this
        .waitForElementPresent('@searchFeild', 5000) 
        .setValue('@searchFeild', name);
    },

    /**
     * APPROACH : 
    * 1. set filter to processing, 
    * 2. check if there is any reward available to process
    * 3. if yes,  go to process window and store its details and process
    *   set filter to processed, assert the stored details
    * 4. if no, prompt error
    */
    checkAndProcessTheRequest: function(browser){
        browser.elements('css selector', 'button.btn.text-white.status-btn.mb-0.processingStatus', results => {
            if (results.value.length > 0) { 
              //open process window
              redeemedRewardsTab.openRedeemRequestWindowAndGetDetails(function (rewardDetails) {
                // process the request
                redeemedRewardsTab
                .processReward()
                //BUG : the window is not closing on its own
                .closeRedeemRequestWindow()
                .setStatusFilterToProcessed();
                //BUG : the page needs to be refreshed
                browser.refresh();
                //assert the stored details
                redeemedRewardsTab.assertProcessedReward(rewardDetails);
              });
            }
            else { 
              console.log('No Redeemed Reward Available'); 
            }
        });
    },

    assertFilteredResult: function(browser){
      //check if there is any reward available to process
      browser.elements('css selector', 'button.btn.text-white.status-btn.mb-0.processingStatus', results => {
        if (results.value.length > 0) { 
          browser.assert.textContains('button.btn.text-white.status-btn.mb-0.processingStatus', 'PROCESSING');
        }
        else { 
          console.log('No Redeemed Reward Available'); 
        }
      });
    }
    
}

module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com',
    commands: [redeemRewardCommands],
    elements: {
        rewardReportButton : {
            selector: 'button.btn.reportRewardBtn.px-2.me-2'
        },
        iconGrid: {
            selector: '#icon-grid'
        }, 
        employeeName: {
            selector: '#icon-grid div:nth-child(1)  h6'
        }, 
        competencyName: {
            selector: 'small.font-weight-bold'  
        },
        rewardName: {
            selector: 'h6.mb-n1.me-1'
        },
        redeemPoints: {
            selector: 'div.col-xxl-4.d-flex small'
        }, 
        redeemedDate: {
            selector: 'div.ms-md-0.ms-sm-6 > small'  
        }, 
        RedeemRequestWindowTitle: {
            selector: 'h5.modal-title.pull-left.ms-2'
        }, 
        closeButton: {
            selector: 'span.material-icons-outlined.cancel-modal'
        }, 
        processButton: {
            selector: '#submitButton'
        },  
        competencyButton: {
            selector: 'app-reward-reports li:nth-child(2) > a'
        },
        individualButton: {
            selector: 'app-reward-reports li:nth-child(1) > a'
        },
        rewardReport: {
            selector: 'div.card.text-center.m-3.py-10 > h5'
        }, 
        showMoreCard: {
            selector: 'div.report-card-footer > div'
        }, 
        timeFilter: {
            selector: '#rewardType'
        }, 
        todayOption: {
            selector: '#rewardType > option:nth-child(2)'
        }, 
        allTimeOption: {
            selector: 'option.pb-3'
        }, 
        allStatusOption: {
            selector: 'select.form-control.cursor-pointer.py-3.px-2.mb-2 > option.pb-3'
        }, 
        statusFilter: {
            selector: 'select.form-control.cursor-pointer.py-3.px-2.mb-2'
        }, 
        processingOption: {
            selector: 'select.form-control.cursor-pointer.py-3.px-2.mb-2 > option:nth-child(2)'
        },  
        processedOption: {
            selector: 'select.form-control.cursor-pointer.py-3.px-2.mb-2 > option:nth-child(3)'
        }, 
        statusButton: {
            selector: '#icon-grid button'
        }, 
        searchFeild: {
            selector: 'div:nth-child(2) > input'
        }, 
        rewardOwner: {
            selector: 'h5.mb-n1'
        }, 
        redeemedReward: {
            selector: 'h5.mt-3.mb-0'
        }, 
        rewardOwnerCompetency: {
            selector: 'small.font-weight-bold.ms-0'
        }, 
        redeemedOnDate: {
            selector: 'div.my-4.ms-4 > strong'
        }
    }
}

