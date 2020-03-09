const { client } = require('nightwatch-api');
// const { Given, When, Then, run } = require('../../utility/helper')
const { Given, When, Then, run } = require('../../utility/helper')

module.exports = {
    main:
      function(data, ref) { 

        Given(/^I am on the PAYPAL homepage$/, () => {
          var site = data.paypalUrl;
          run(`Given I open "${site}"`);
          return client;
      });

        // Given(/^I am on the website$/, () => {
        //     var site = data.qaUrl;
        //     var overlay = ref.homepage_overlay.selector;
        //     run(`Given I open "${site}"`);
        //     run(`Given I open "${site}"`);
        //     //run(`Then I click on "${overlay}"`);
        //     run(`Given verify the pagetitle`);       
        //     return client;
        // });
     

      Given(/^Close the popup$/, () => {
        closePopup();
        return client
      });

      function closePopup()
      {     
        client.pause(2000);
        client.isVisible(ref.homepage_popup_close_icon.selector)
        {
          
          client.click(ref.homepage_popup_close_icon.selector);
          client.pause(1000);
        }   
        client.pause(1000);
        client.isVisible(ref.accept_cookies_button.selector, function(result) 
        {
           client.click(ref.accept_cookies_button.selector);
        });      
      };
    

        Given(/^I am on the website as a CSR$/, () => {
          var site = data.qaCSRUrl;
          var overlay = ref.homepage_overlay.selector;
          run(`Given I open "${site}"`);
          run(`Given I open "${site}"`);
          //run(`Then I click on "${overlay}"`);
          run(`Given verify the pagetitle`);       
          return client;
        });
        
              Given(/^I open "${site}"$/, () => {
                var site = data.qaUrl;
                var site = data.paypalUrl;
                var site = data.qaCSRUrl;
                console.log("site");
              });

              Given(/^verify the pagetitle$/, () => {
                // move the title to globals data
                var homepageTitle = data.homepageTitle;
                return client.assert.title(`${homepageTitle}`);
              });
              //  e2e changes updated
              Then(/^click on home logo$/, () => {
                // click the home page logo
                client.pause(1000);
                client.click(ref.home_click.selector);
                client.pause(3000);
              });

              //  e2e changes updated
              Then(/^Click on Start Shopping button$/, () => {
                client.click(ref.start_shopping_button.selector);
                client.pause(3000);
              });

              //  e2e changes updated
              Then(/^Refresh current page$/, () => {
                client.refresh();
                client.pause(3000);
              });
              //  e2e changes updated
              Then(/^I click on French link$/, () => {
                client.click(ref.language_french_link.selector);
                client.pause(3000);
              });

      }
    }  