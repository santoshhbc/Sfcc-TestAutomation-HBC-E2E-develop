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
            // Click on Continue button in shopping popup in Off5Th Site
              client.pause(5000);
              client.waitForElementVisible(ref.off5Th_shipping_popup_click_here_link.selector, 2000);
              client.isVisible(ref.off5Th_shipping_popup_click_here_link.selector, function(result){
              client.click(ref.off5Th_shipping_popup_click_here_link.selector);
              console.log('***** click on CLICK HERE link in shipping country popup');
              client.pause(1000);
              client.click(ref.off5Th_shipping_popup_us_country_option.selector);
              console.log("*************** Selecting united states country");
              client.pause(1000);
              //client.click(ref.off5Th_shipping_popup_ok_button.selector);
              client.pause(2000);
            });

        // Click on Continue Button
          //   client.pause(2000);
          //   client.waitForElementVisible(ref.off5th_shipping_popup_continue_button.selector, 2000);
          //   client.isVisible(ref.off5th_shipping_popup_continue_button.selector, function(result){
          //   client.pause(1000);
          //   client.click(ref.off5th_shipping_popup_continue_button.selector);
          //   client.pause(1000);
          // });
         
          // Sign up for OFF 5th emails today to receive an exclusive offer on your next purchase.
            run('Signup for exclusive offer');
            // Accept Cookies
            client.pause(1000);
            client.isVisible(ref.accept_cookies_button.selector, function(result) 
            {
               client.click(ref.accept_cookies_button.selector);
               
            });

            // client.pause(5000);
            // client.waitForElementVisible(ref.off5Th_header_country_link.selector, 5000);
            // client.click(ref.off5Th_header_country_link.selector);
            // client.pause(1000);
             client.click(ref.off5Th_shipping_popup_us_country_option.selector);
            client.pause(5000);


            return client;
        });

       
        Then(/^Signup for exclusive offer$/,()=>{
          client.isVisible(ref.homepage_popup_close_icon.selector, function(result) 
          {
            console.log("************** EXECUTING Signup for exclusive offer");
            console.log("************result.value"+ result.value);
            console.log("************result.status"+ result.status);
            client.setValue(ref.homepage_popup_email_textbox.selector, data.email_id_for_popup);
            client.pause(1000);
            client.click(ref.homepage_popup_submit_button.selector);
            client.pause(1000);
            client.click(ref.homepage_popup_close_icon.selector);
            client.pause(2000);
            client.click(ref.off5Th_shipping_popup_ok_button.selector);
          });
          return client
        })
  

      }
    }  