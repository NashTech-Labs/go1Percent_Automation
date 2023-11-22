describe('Admin Profile Test Cases', ()=>{
    const dashboardPage = browser.page.admin_profile.goOneDashboard();
    before ((browser) => {
        const loginPage = browser.page.loginGo1();

        loginPage
        .maximizeWindow()
            .navigate()
            .enterCredentials(browser.globals.userName, browser.globals.password)
            .waitForElementVisible('@signIn', 2000)
            .signIn();
    }),

    it('Verify that login is successful and we are on dashboard page', ()=>{
        browser.assert.urlContains('my-dashboard');
    })

    it('Verify that user is able to open the admin profile from dasboard page' , (browser) => {
        
        dashboardPage.clickImage();
        browser.assert.urlContains('my-profile');
        dashboardPage.assert.visible('@badgeText');
    })

}) 
    