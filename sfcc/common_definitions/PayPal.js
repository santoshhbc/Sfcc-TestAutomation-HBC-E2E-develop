const { client } = require('nightwatch-api');
const { Given, When, Then, run } = require('../../utility/helper')


module.exports = {
    main:
      function(data, ref) { 

      Then(/^Login to paypal$/,()=>{
        client.pause(2000); 
        // Switch to paypal button frame
        client.frame(1); 
                
        // client.frame(ref.checkout_payment_continue_to_payment_button_frame.selector); 
        client.pause(2000);
        
                //Cart Page - Express paypal
                client.isVisible('css selector',ref.cart_paypal_button.selector, function(result) 
                {
                    //Click on Paypal button in cart page
                    console.log("*************** CLICKING ON CART PAGE EXPRESS PAYPAL");
                    client.click(ref.cart_paypal_button.selector);
                });

                //Checkout - Normal Paypal 
                client.isVisible('css selector',ref.checkout_continue_to_paypal_button.selector, function(result) 
                {
                    //Click on Paypal button Checkout page
                    console.log("*************** CLICKING ON CHECKOUT PAGE PAYPAL");
                    client.click(ref.checkout_continue_to_paypal_button.selector);
                });

        client.pause(40000);    
        // Switch to paypal window
            client.windowHandles(function(result){
                console.log("**** NUmber of tabs:- "+result.value.length); 
                // client.url(function(result){
                //     console.log("********** URL: "+result.value);
                // });
                client.switchWindow(result.value[1]);   
                // client.maximizeWindow();            
                client.url(function(result){
                    console.log("********** URL: "+result.value);
                });
                client.pause(3000);
                // Click on login button
                client.waitForElementVisible(ref.paypal_firstlogin_button.selector, 10000, false);
                client.click(ref.paypal_firstlogin_button.selector);
                console.log("First wait");
               //  client.pause(10000);
                //Enter Email ID
                client.waitForElementVisible(ref.paypal_email_textbox.selector, 20000, false);
                client.clearValue(ref.paypal_email_textbox.selector);
                client.setValue(ref.paypal_email_textbox.selector, data.paypal_email_id);
                client.isVisible('css selector',ref.paypal_next_button.selector, function(result) 
                  {
                client.click(ref.paypal_next_button.selector);
                  });
                
                // client.pause(2000);
                // client.clearValue(ref.paypal_password_textbox.selector);
                // client.pause(2000);
                client.waitForElementVisible(ref.paypal_password_textbox.selector, 10000,false);
                client.setValue(ref.paypal_password_textbox.selector, data.paypal_password);
                client.click(ref.paypal_login_button.selector);
                // client.pause(15000);
                // client.pause(15000);
                // client.waitForElementVisible(ref.paypal_continue_button.selector, 30000);
                client.click(ref.paypal_continue_button.selector);
                client.pause(2000);
                // client.pause(5000);
                // client.click(ref.paypal_continue_button_loaded_state.selector);
                // client.isVisible('css selector',ref.paypal_continue_button.selector, function(result) 
                // {
                //     client.click(ref.paypal_continue_button.selector);
                // });

                client.switchWindow(result.value[0]);
                client.click(ref.paypal_continue_button_loaded_state.selector);
               
          
            })
        client.frameParent();
        
        return client;
      });

     
      }

    }  