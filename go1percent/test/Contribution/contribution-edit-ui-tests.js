const { assert } = require("chai");

module.exports = {

    before: (client) => {
        client
            .maximizeWindow()
            .page.login()
            .navigate()
            .setValue('@emailInput', 'testemployee')
            .setValue('@passwordInput', 'testemployee')
            .signIn()
            .click('@settings')
            .click('@profile')
     },
    
    "Verify that the save button should be disable if user add a title less than 15 words" : (browser) => {
        const editContribution = browser.page.Contribution.contribution_page_object();
        editContribution
            .navigate()
            .clickSettings()
            .clickProfile()    
            .clickContributions()
            .clickContribution()
            .clickEditButton()
            .editTitle()
            .pause(2000)
            .expect.element('@saveButton').to.have.attribute('disabled');

    },

    "Verify that the save button should be disable if user add a description less than 100 words" : (browser) => {
        const editContribution = browser.page.Contribution.contribution_page_object();
        editContribution
            .navigate()
            .clickSettings()
            .clickProfile()    
            .clickContributions()
            .clickContribution()
            .clickEditButton()
            .editDesciption()
            .pause(2000)
            .expect.element('@saveButton').to.have.attribute('disabled');

    },

    "Verify that the save button should not be enable if user add a invalid URL" : (browser) => {
        const editContribution = browser.page.Contribution.contribution_page_object();
        editContribution
            .navigate() 
            .clickSettings()
            .clickProfile()   
            .clickContributions()
            .clickContribution()
            .clickEditButton()
            .editUrl()
            .pause(2000)
            .expect.element('@saveButton').to.have.attribute('disabled');
    },

    "Verify that user should not be able to edit the contribution type of the added contribution" : (browser) => {
        const editContribution = browser.page.Contribution.contribution_page_object();
        editContribution
            .navigate()  
            .clickSettings()
            .clickProfile()  
            .clickContributions()
            .clickContribution()
            .clickEditButton()
            .expect.element('@contributionType').to.have.attribute('disabled');

    },

    "Verify that user should be able to edit the title of the added contribution" : (browser) => {
        const editContribution = browser.page.Contribution.contribution_page_object();
        editContribution
            .navigate() 
            .clickSettings()
            .clickProfile()   
            .clickContributions()
            .clickContribution()
            .clickEditButton()
            .expect.element('@title').to.not.have.attribute('disabled');

    },
    
    "Verify that user should be able to edit the details of pending contribution" : (browser) => {
        const editContribution = browser.page.Contribution.contribution_page_object();
        editContribution
            .navigate() 
            .clickSettings()
            .clickProfile()   
            .clickContributions()
            .clickContribution()
            .clickEditButton()
            .expect.element('@description').to.not.have.attribute('disabled');

    },

    "Verify that user should be able to edit the contribution date of the added contribution except online course" : (browser) => {
        const editContribution = browser.page.Contribution.contribution_page_object();
        editContribution
            .navigate()
            .clickSettings()
            .clickProfile()
            .clickContributions()
            .clickContribution()
            .clickEditButton()
            .expect.element('@contributionDate').to.not.have.attribute('disabled')

    },

    "Verify that save button should be disabled if user leaves any field blank" : (browser) => {
        const editContribution = browser.page.Contribution.contribution_page_object();
        editContribution
            .navigate()
            .clickSettings()
            .clickProfile()
            .clickContributions()
            .clickContribution()
            .clickEditButton()
            .clearValue('@url')
            .expect.element('@saveButton').to.have.attribute('disabled');

    },

    "Verify that date of the online course type contribution cannot be modified": (browser) => {
        const editContribution = browser.page.Contribution.contribution_page_object();
        editContribution
            .navigate()
            .clickSettings()
            .clickProfile()
            .clickContributions()
            .clickOnlineCourseContribution()
            .clickEditButton()
            .expect.element('@contributionDate').to.have.attribute('disabled')
            

    },
    
    "Verify that the title/description/url of the online course contribution cannot be modified": (browser) => {
        const editContribution = browser.page.Contribution.contribution_page_object();
        editContribution
            .navigate()
            .clickSettings()
            .clickProfile()
            .clickContributions()
            .clickOnlineCourseContribution()
            .clickEditButton()
            .expect.element('@saveButton').to.have.attribute('disabled')
    }
  
};