var redeemRewardCommands = {

    openRewardReport : function () {
        return this
        .click('@rewardReportButton')
        .assert.urlContains('rewards/reward-reports');  
    },

    assertRewardReportDetails : function (employeeName, competencyName, rewardName, redeemPoints, expiryDate) {
        return this
        .assert.textContains('@employeeName', employeeName) 
        .assert.textContains('@competencyName', competencyName)
        .assert.textContains('@rewardName', rewardName) 
        .assert.textContains('@redeemPoints', redeemPoints) 
        .assert.textContains('@expiryDate', expiryDate);
    },

    openRedeemRequestWindow : function () {
        return this
        .click('@employeeName')
        .waitForElementPresent('@RedeemRequestWindowTitle', 5000)
        .assert.textContains('@RedeemRequestWindowTitle', 'Process a Redeem Request');
    }, 

    closeRedeemRequestWindow : function () {
        return this
        .waitForElementPresent('@closeButton', 5000)
        .click('@closeButton');
    },  

    changeStatusOfReward : function(rewardName, description, pointsNeededToRedeem, quantity, expiryDate){
        return this
        .waitForElementPresent('@processButton', 5000)
        .click('@processButton')
        // .waitForElementPresent('@processedStatus', 5000)
        // .assert.textContains('@processedStatus', 'PROCESSED');
    },

    switchToCompetency : function(){
        return this
        .waitForElementPresent('@competencyButton', 5000) 
        .click('@competencyButton') 
        .waitForElementPresent('@competencyRewardReport', 5000) 
        .assert.textContains('@competencyRewardReport', 'No Redeemed Reward Available');
    },

    switchToIndividual: function(){
        return this
        .waitForElementPresent('@individualButton', 5000) 
        .click('@competencyButton') 
        .waitForElementPresent('@competencyRewardReport', 5000) 
        .assert.textContains('@competencyRewardReport', 'No Redeemed Reward Available');
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
        .waitForElementPresent('@expiryDate', 5000)
        .assert.textContains('@expiryDate', date);
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
        .click('@statusFilter') ;
    },

    matchStatus: function(status){
        return this
        .waitForElementPresent('@processingStatus', 5000)
        .assert.textContains('@processingStatus', 'PROCESSING');
    },

    resetStatusFilter: function(){
        return this
        .waitForElementPresent('@statusFilter', 5000) 
        .click('@statusFilter') 
        .waitForElementPresent('@allStatusOption', 5000)
        .click('@allStatusOption')
        .click('@statusFilter');
    },

    searchNasher: function(name){
        return this
        .waitForElementPresent('@searchFeild', 5000) 
        .setValue('@searchFeild', name);
    }
    
}

module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com',
    commands: [redeemRewardCommands],
    elements: {
        rewardReportButton : {
            selector: 'button.btn.reportRewardBtn.px-2.me-2'
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
        expiryDate: {
            selector: 'div.ms-md-0.ms-sm-6 > small'  
        }, 
        RedeemRequestWindowTitle: {
            selector: 'h5.modal-title.pull-left.ms-2'
        }, 
        closeButton: {
            selector: 'span.material-icons-outlined.cancel-modal'
        }, 
        processButton: {
            selector: 'div.me-3 > #submitButton'
        }, 
        processedStatus: {
            selector: 'button.btn.text-white.status-btn.mb-0.processedStatus'
        }, 
        competencyButton: {
            selector: 'app-reward-reports li:nth-child(2) > a'
        },
        individualButton: {
            selector: 'app-reward-reports li:nth-child(1) > a'
        },
        competencyRewardReport: {
            selector: 'div.card.text-center.m-3.py-10 > h5'
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
        processingStatus: {
            selector: 'button.btn.text-white.status-btn.mb-0.processingStatus'
        },
        searchFeild: {
            selector: 'div:nth-child(2) > input'
        } 
    }
}

