
module.exports = {

  // An array of folders (excluding subfolders) where your tests are located;

  // If this is not specified, the test source must be passed as the second argument to the test runner.

  src_folders: ['tests'],

 

  // Page Object Model (POM) path

  
  // See https://nightwatchjs.org/guide/concepts/page-object-model.html

  page_objects_path: ['node_modules/nightwatch/examples/pages/'],

 

  // Custom commands path

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
<<<<<<< HEAD
  
  //custom_commands_path: ['nightwatch/custom-commands'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html

   // custom_assertions_path: ['nightwatch/custom-assertions'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html

     plugins: ['@nightwatch/apitesting'],

    //plugins: ['@nightwatch/react'],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  //globals_path: './globals.js',
    globals: {
      "userName": "testemployee", // this is placeholder username, make sure to update.
      "password": "testemployee" // this is placeholderPassword, Make sure to update.
    },

  vite_dev_server: {
    start_vite: true,
    port: 5173
  },
  
  webdriver: {},

  //Test Worker Configuration
  test_workers: {
    enabled: true,
    workers: 'auto'
  },

=======

  custom_commands_path: ['node_modules/nightwatch/examples/custom-commands/'],

 

  // Custom assertions path

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html

  custom_assertions_path: '',

 

  // Plugins configuration

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html

  plugins: ['@nightwatch/apitesting'],

 

  // Global test variables path

  // See https://nightwatchjs.org/guide/concepts/test-globals.html#external-test-globals

  globals_path: '',

 

  // Webdriver settings

  webdriver: {},

 

  // Test workers configuration

  test_workers: {

    enabled: true,

    workers: 'auto',

  },

 

  // API Testing settings

  "@nightwatch/apitesting": {

    log_responses: true,

  },

 

  // Test settings
>>>>>>> fbd86af5e4674a1e980e183c8c93a1b8c85b0b65

  test_settings: {

    default: {

      disable_error_log: false,

      launch_url: 'https://nightwatchjs.org',

 

      screenshots: {

        enabled: false,

        path: 'screens',

        on_failure: true,

      },

 

      desiredCapabilities: {
<<<<<<< HEAD
        browserName: 'chrome'
      // 'goog:chromeOptions': {
      //   ...
      //   // specify the locateStrategy as xpath
      //   locateStrategy: 'xpath',
        
      // },
      
      
=======

        browserName: 'firefox',

>>>>>>> fbd86af5e4674a1e980e183c8c93a1b8c85b0b65
      },

 

      webdriver: {

        start_process: true,
<<<<<<< HEAD
        server_path: 'node_modules/.bin/chromedriver'

      },

      
      
    },
    "qa": {
      "globals": {
        "userName": "testadmin", // this is placeholder username, make sure to update.
        "password": "testadmin" // this is placeholderPassword, Make sure to update.
      },

      "employee":{
        "userName": "testemployee", // this is placeholder username, make sure to update.
        "password": "testemployee" // this is placeholderPassword, Make sure to update.
      }
    },

    
    
=======

        server_path: '',

      },

    },

 
>>>>>>> fbd86af5e4674a1e980e183c8c93a1b8c85b0b65

    firefox: {

      desiredCapabilities: {

        browserName: 'firefox',

        acceptInsecureCerts: true,

        'moz:firefoxOptions': {

          args: [

            // '-headless',

            // '-verbose'

          ],

        },

      },

      webdriver: {

        start_process: true,

        server_path: '',

        cli_args: [

          // very verbose geckodriver logs

          // '-vv'

        ],

      },

    },
<<<<<<< HEAD
    api_testing: {
      start_session: false,
      webdriver: {
        start_process: false,
      }
   },

   },

    

    api_testing: {
      start_session: false,
      webdriver: {
        start_process: false,
      }
    },

  


   chrome: {
=======

 

    api_testing: {

      start_session: false,

      webdriver: {

        start_process: false,

      },

    },

 

    chrome: {
>>>>>>> fbd86af5e4674a1e980e183c8c93a1b8c85b0b65

      desiredCapabilities: {

        browserName: 'chrome',

        'goog:chromeOptions': {

          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/

          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)

          w3c: true,

          args: [

            //'--no-sandbox',

            //'--ignore-certificate-errors',

            //'--allow-insecure-localhost',

            //'--headless'

          ],

        },

      },

      webdriver: {

        start_process: true,

        server_path: '',

        cli_args: [

          // --verbose

        ],

      },

    },

 

    edge: {

      desiredCapabilities: {

        browserName: 'MicrosoftEdge',

        'ms:edgeOptions': {

          w3c: true,

          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options

          args: [

            //'--headless'

          ],

        },

      },

      webdriver: {

        start_process: true,

        // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/

        // and set the location below:

        server_path: '',

        cli_args: [

          // --verbose

        ],

      },

    },

 

    'cucumber-js': {

      src_folders: ['examples/cucumber-js/features/step_definitions'],

      test_runner: {

        // Set cucumber as the runner

        type: 'cucumber',

        options: {

          // Set the feature path

          feature_path: 'node_modules/nightwatch/examples/cucumber-js/*/*.feature',

          // Start the webdriver session automatically (enabled by default)

          // auto_start_session: true

          // Use parallel execution in Cucumber

          // workers: 2 // Set the number of workers to use (can also be defined in the CLI as --workers=2)

        },

      },

    },

 

    // BrowserStack configuration

    browserstack: {

      selenium: {

        host: 'hub.browserstack.com',

        port: 443,

      },

      // More info on configuring capabilities can be found on:

      // https://www.browserstack.com/automate/capabilities?tag=selenium-4

      desiredCapabilities: {

        'bstack:options': {

          userName: '${BROWSERSTACK_USERNAME}',

          accessKey: '${BROWSERSTACK_ACCESS_KEY}',

        },

      },

      disable_error_log: true,

      webdriver: {

        timeout_options: {

          timeout: 15000,

          retry_attempts: 3,

        },

        keep_alive: true,

        start_process: false,

      },

    },

 

    'browserstack.local': {

      extends: 'browserstack',

      desiredCapabilities: {

        'browserstack.local': true,

      },

    },

 

    'browserstack.chrome': {

      extends: 'browserstack',

      desiredCapabilities: {

        browserName: 'chrome',

        chromeOptions: {

          w3c: true,

        },

      },

    },

 

    'browserstack.firefox': {

      extends: 'browserstack',

      desiredCapabilities: {

        browserName: 'firefox',

      },

    },

 

    'browserstack.ie': {

      extends: 'browserstack',

      desiredCapabilities: {

        browserName: 'internet explorer',

        browserVersion: '11.0',

      },

    },

 

    'browserstack.safari': {

      extends: 'browserstack',

      desiredCapabilities: {

        browserName: 'safari',

      },

    },

 

    'browserstack.local_chrome': {

      extends: 'browserstack.local',

      desiredCapabilities: {

        browserName: 'chrome',

      },

    },

 

    'browserstack.local_firefox': {

      extends: 'browserstack.local',

      desiredCapabilities: {

        browserName: 'firefox',

      },

    },

 

    // SauceLabs configuration

    saucelabs: {

      selenium: {

        host: 'ondemand.saucelabs.com',

        port: 443,

      },

      // More info on configuring capabilities can be found on:

      // https://docs.saucelabs.com/dev/test-configuration-options/

      desiredCapabilities: {

        'sauce:options': {

          username: '${SAUCE_USERNAME}',

          accessKey: '${SAUCE_ACCESS_KEY}',

          screenResolution: '1280x1024',

          // https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/#--region

          // region: 'us-west-1',

          // https://docs.saucelabs.com/dev/test-configuration-options/#tunnelidentifier

          // parentTunnel: '',

          // tunnelIdentifier: '',

        },

      },

 

      disable_error_log: false,

 

      webdriver: {

 

        start_process: false

 

      }

 

    },

 

    'saucelabs.chrome': {

 

      extends: 'saucelabs',

 

      desiredCapabilities: {

 

        browserName: 'chrome',

 

        browserVersion: 'latest',

 

        javascriptEnabled: true,

 

        acceptSslCerts: true,

 

        timeZone: 'London',

 

        chromeOptions: {

 

          w3c: true

 

        }

 

      }

 

    },

 

    'saucelabs.firefox': {

 

      extends: 'saucelabs',

 

      desiredCapabilities: {

 

        browserName: 'firefox',

 

        browserVersion: 'latest',

 

        javascriptEnabled: true,

 

        acceptSslCerts: true,

 

        timeZone: 'London'

 

      }

 

    },
<<<<<<< HEAD
    "@nightwatch/apitesting" : {
      "log_responses": true
    }
  };

  

  


=======

 

    //////////////////////////////////////////////////////////////////////////////////

 

    // Configuration for when using the Selenium service, either locally or remote,  |

 

    //  like Selenium Grid                                                           |

 

    //////////////////////////////////////////////////////////////////////////////////

 

    selenium_server: {

 

      // Selenium Server is running locally and is managed by Nightwatch

 

      // Install the NPM package @nightwatch/selenium-server or download the selenium server jar file from https://github.com/SeleniumHQ/selenium/releases/, e.g.: selenium-server-4.1.1.jar

 

      selenium: {

 

        start_process: true,
        port: 4444,
       server_path: '', // Leave empty if @nightwatch/selenium-server is installed

        command: 'standalone', // Selenium 4 only
        cli_args: {
    //'webdriver.gecko.driver': '',

          //'webdriver.chrome.driver': ''
     }
     },
  webdriver: {
    start_process: false,
    default_path_prefix: '/wd/hub'
  }
 },
 'selenium.chrome': {
 extends: 'selenium_server',
 desiredCapabilities: {
        browserName: 'chrome',
 chromeOptions: {
  w3c: true
        }
      }
  },

    'selenium.firefox': {

      extends: 'selenium_server',

      desiredCapabilities: {

        browserName: 'firefox',

        'moz:firefoxOptions': {

          args: [

            // '-headless',

            // '-verbose'

          ],

        },

      },

    },
  }
};

 

 

 
>>>>>>> fbd86af5e4674a1e980e183c8c93a1b8c85b0b65
