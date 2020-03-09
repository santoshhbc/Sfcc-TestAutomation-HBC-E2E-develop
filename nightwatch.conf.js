const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

var driverpath = chromedriver.path;
var browser= 'chrome';

module.exports = {
  silent: !process.env.NIGHTWATCH_VERBOSE,

    
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        start_session: true,
        server_path: driverpath,
        port: 4444,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: browser,
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
                   args : ['incognito', 'ignore-ssl-errors','start-maximized', 'disable-gpu']
                //  args : ["--no-sandbox","--headless", "--window-size=1366,768", "--ignore-ssl-errors=true", "start-maximized", "test-type", "disable-gpu"]
                 }
        
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    },
    chrome: {
      webdriver: {
        server_path: chromedriver.path,
        start_session: true,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          //  args : ['incognito','window-size=1366,768', 'start-maximized', 'disable-gpu']
          args : ['incognito','start-maximized', 'disable-gpu']
        }
      }
    },
    firefox: {
      webdriver: {
        server_path: geckodriver.path,
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
      
      }
    },
  }

   
};