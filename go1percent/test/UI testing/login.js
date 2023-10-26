module.exports = {
    'Automate API testing with Nightwatch.js': function (browser) {
      const apiURL = 'https://nashtechglobal.qa.go1percent.com/knolx/requested-sessions';
  
      // Store the starting time for calculating response time
      const start = new Date().getTime();
      const username = browser.globals.username;
      const password = browser.globals.password;
  
      browser.url(apiURL)
        .waitForElementVisible('body')
        .pause(2000)
  
        // Perform the login operation
        .setValue('input[name="username"]', username)
        .setValue('input[name="password"]', password)
        .click('input[type="submit"]')
  
        .pause(2000)

    }
  };
  