const { client } = require('nightwatch-api');
// const { Given, When, Then, run } = require('../../utility/helper')
const { Given, When, Then, run } = require('../../../utility/helper')
const fs = require('fs');


module.exports = {
    main:
      function(data, ref) { 

        Given(/^I am on the website$/, () => {
            var site = data.qaUrl;
            run(`Given I open "${site}"`);
            // client.pause(2000);
            // client.refresh();
            run(`Signup for exclusive offer`);
            // client.pause(4000);
            // client.isVisible(ref.accept_cookies_button.selector, function(result) 
            // {
            //    client.click(ref.accept_cookies_button.selector);
            //    client.pause(6000);
            // });
            return client;
        });

        Then(/^Signup for exclusive offer$/,()=>{
          client.pause(2000);
            // client.waitForElementVisible(ref.homepage_popup_email_textbox.selector,2000,false,function(result) 
            // {
              // client.pause(3000);
              // client.setValue(ref.homepage_popup_email_textbox.selector, data.email_id_for_popup);
              // client.pause(1000);
              // client.click(ref.homepage_popup_submit_button.selector);
              client.pause(1000);
              client.click(ref.homepage_popup_close_icon.selector);
            // });
          return client
        })

        Given(/^I am on ChanelPage$/, ()=>{
          run('Given I am on the website')
            var qaChanelUrl = data.qaChanelUrl;
            run(`Given I open "${qaChanelUrl}"`);

        })
  

      }
    }  