const { client } = require('nightwatch-api');
// const { Given, When, Then, run } = require('../../utility/helper')
const { Given, When, Then, run } = require('../../utility/helper')
var shopNav =  require('../common_definitions/shopNav.js');
var newRandomEmailId;
module.exports = {
    main:
      function(data, ref) {

        //  Then(/^logout of the account$/, () => {
        //     var loginLink = ref.sign_in_link_css.selector
        //     run(`Then I click on "Sign Out"`);
        //     run(`Then this ${loginLink} should say "Welcome, Sign In"`);
        //     return client;
        //  });


         

        // ***********************************************************************************
        // ***********************************************************************************
        // ******************************** NEW FUNCTIONS ************************************
        // ***********************************************************************************
        // ***********************************************************************************

        Then(/^logout of the account$/, () => {
            var loginLink = ref.user_account_text.selector
            run('When I hover on "signin link"');
            client.click(ref.header_signout_link.selector);
            run(`Then this ${loginLink} should say "Welcome, Sign In"`);
            client.pause(1000);
            client.isVisible(ref.accept_cookies_button.selector, function(result) 
            {
               client.click(ref.accept_cookies_button.selector);
               client.pause(2000);
            });
            return client;
         });

         Then(/^I navigate to login page$/, () => {
            // client.click(ref.signin_link_css.selector)
            run('When I hover on "signin link"');
            client.click(ref.signin_link.selector)
            client.pause(1000)
             return client
        });

         Then(/^I login to the application with valid credentials$/, () => {
            // client.click(ref.signin_link_css.selector)
            // run('When I hover on "signin link"');
            client.moveToElement(ref.signin_link_css.selector,10,10)
            client.click(ref.signin_link.selector);
            client.pause(1000);
            run('Signup for exclusive offer');
            client.clearValue(ref.hbc_email_textbox.selector);
            client.setValue(ref.hbc_email_textbox.selector, data.defaultEmail);
            client.pause(1000);
            client.clearValue(ref.hbc_password_textbox.selector);
            client.setValue(ref.hbc_password_textbox.selector, data.defaultPassword);
            client.pause(1000);
            client.click(ref.hbc_login_link);
            client.pause(5000);
            return client
        });

        Then(/^I login to the application with updated credentials$/, () => {
            // client.click(ref.signin_link_css.selector)
            // run('When I hover on "signin link"');
            client.moveToElement(ref.signin_link_css.selector,10,10)
            client.click(ref.signin_link.selector);
            client.pause(1000);
            run('Signup for exclusive offer');
            client.clearValue(ref.hbc_email_textbox.selector);
            client.setValue(ref.hbc_email_textbox.selector, data.defaultEmail);
            client.pause(1000);
            client.clearValue(ref.hbc_password_textbox.selector);
            client.setValue(ref.hbc_password_textbox.selector, data.changepassword);
            client.pause(1000);
            client.click(ref.hbc_login_link);
            client.pause(3000);
            return client
        });
        
            Then(/^Verify the product name in wishlist page$/,() => {
                client.getText(ref.wishlist_product_name_link.selector,function(result){
                    // var proNameInPLP = localStorage.getItem("prodNameInPLP");
                    // client.execute('document.getElementById(element).scrollIntoView()');
                    console.log("***************ACCOUNT JS proNameInPLP:-"+shopNav.productNameInPLP);
                    client.assert.equal(result.value, shopNav.productNameInPLP,"Verifying the product name in wishlist page");
                })
                return client
            });

           

        Then(/^Create new account with valid credentials$/, () => {
            client.pause(5000)
            // First name
            client.clearValue(ref.hbc_create_account_first_name_textbox.selector)
            client.setValue(ref.hbc_create_account_first_name_textbox.selector, data.create_account_first_name)
            //Last name
            client.clearValue(ref.hbc_create_account_last_name_textbox.selector)
            client.setValue(ref.hbc_create_account_last_name_textbox.selector, data.create_account_last_name)           
            //email id
            var newEmailId = getSystemDate();
            client.clearValue(ref.hbc_create_account_email_id_textbox.selector)
            client.setValue(ref.hbc_create_account_email_id_textbox.selector, newEmailId)
            // //Confirm email id
            // client.clearValue(ref.hbc_create_account_confirm_email_textbox.selector)
            // client.setValue(ref.hbc_create_account_confirm_email_textbox.selector, newEmailId)
            //Password
            client.clearValue(ref.hbc_create_account_password_textbox.selector)
            client.setValue(ref.hbc_create_account_password_textbox.selector, data.create_account_password)
            //Confirm password
            client.clearValue(ref.hbc_create_account_confirm_password_textbox.selector)
            client.setValue(ref.hbc_create_account_confirm_password_textbox.selector, data.create_account_confirm_password)
            //zipcode
            client.clearValue(ref.hbc_create_account_zipcode_textbox.selector)
            client.setValue(ref.hbc_create_account_zipcode_textbox, data.create_account_zipcode)
            //Phone number
            client.clearValue(ref.hbc_create_account_phone_number_textbox.selector)
            client.setValue(ref.hbc_create_account_phone_number_textbox.selector, data.create_account_phonenumber)
            client.pause(2000)
            client.click(ref.hbc_create_account_submit.selector)
            client.pause(5000)
            // client.assert.containsText(ref.hbc_user_account_text.selector, data.acc_profile_name);
            return client
        });

        function getSystemDate()
        {
          var today = new Date();
          // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var date = today.getDate()+""+(today.getMonth()+1)+""+today.getFullYear();
          console.log('****system date:- '+date)
          // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          var time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
          console.log('***** System time:- '+time)
          var dateTime = date+'_'+time;
          console.log('***** System date and time:- '+dateTime);
          newRandomEmailId = 'newemail'+dateTime+'@test.com'
          console.log('***** New Email ID:- '+newRandomEmailId);
          return newRandomEmailId
        };


        Then(/^Navigate to My Account "(.*?)" Page$/,(page)=>{
            client.pause(2000);
            client.click(ref.site_logo.selector);
            client.moveToElement(ref.user_account_text.selector,10,10);
            client.click(ref.header_myaccount_link.selector);
            client.pause(2000);
            client.elements('css selector', ref.my_account_all_links.selector, function(result){
                var elementsList = result.value;
                var count = result.value.length;
                console.log("****************Elements count :- "+count);
                for (let index = 0; index < elementsList.length; index++) {
                    const element = elementsList[index];
                    client.elementIdText(element.ELEMENT, function(result){
                        console.log("***********My Account Link Text:-"+result.value);
                        if(result.value === page){
                            console.log("*************NAvigating Page:- "+result.value);
                            client.elementIdClick(element.ELEMENT);
                            client.pause(3000);
                            return true;
                        }
                    })
                    
                }
            })    
        return client
        });

        Then(/^Navigate to My Account "(.*?)" Page from left nav$/,(page)=>{
            client.pause(2000);
            client.click(ref.site_logo.selector);
            client.moveToElement(ref.user_account_text.selector,10,10);
            client.click(ref.header_myaccount_link.selector);
            client.pause(2000);
            client.elements('css selector', ref.my_account_leftNav_all_links.selector, function(result){
                var elementsList = result.value;
                var count = result.value.length;
                console.log("****************Elements count :- "+count);
                for (let index = 0; index < elementsList.length; index++) {
                    const element = elementsList[index];
                    client.elementIdText(element.ELEMENT, function(result){
                        console.log("***********My Account Link Text:-"+result.value);
                        if(result.value === page){
                            console.log("*************NAvigating Page:- "+result.value);
                            client.elementIdClick(element.ELEMENT);
                            client.pause(3000);
                            return true;
                        }
                    })
                    
                }
            })    
        return client
        });


        Then(/^I enter "(.*?)" details in "(.*?)"$/,(type, page)=>{

            switch(page){
                case 'check gift card balance popup':
                    enterGiftCardDetails(type);
                    break;
                
                case 'Forgot password page':
                    enterEmailID(type);
                    break;
            }
            return client
        });

        function enterGiftCardDetails(type){
            var giftCardNumber;
            var giftCardPin;
            if(type==='gift card'){
                giftCardNumber = data.giftCardNumber;
                giftCardPin = data.giftCardAccessNumber;
            }

            if(type === 'invalid gift card'){
                giftCardNumber = data.invalidGiftCardNumber;
                giftCardPin = data.invalidGiftCardAccessNumber;
            }
            client.setValue(ref.gift_card_balance_card_number_field.selector, giftCardNumber);
            client.setValue(ref.gift_card_balance_pin_field.selector,giftCardPin);
            client.keys(data.tabKey);
            client.pause(2000);
        }

        function enterEmailID(type){
            if(type==='Forgot Password Email')
            {
                client.clearValue(ref.forgot_password_email_textbox.selector);
                client.setValue(ref.forgot_password_email_textbox.selector, data.defaultEmail);
            }

            else if(type==='Forgot Password Invalid Email')
            {
                client.clearValue(ref.forgot_password_invalid_email_textbox.selector);
                client.setValue(ref.forgot_password_invalid_email_textbox, data.invalid_email_id_textbox);
            }

            else if(type==='Forgot password format Email')
            {
                client.clearValue(ref.forgot_password_invalid_email_textbox.selector);
                client.setValue(ref.forgot_password_invalid_email_textbox, data.invalid_format_email_id);
            }
            
        }

        Then(/^Verify the "(.*?)" details in gift card balance section$/,(giftCard)=>{
            var giftCardNumber;
            var giftCardBalanceAmount;
            switch(giftCard){
                case 'gift card':
                    giftCardNumber = data.giftCardNumber;
                    giftCardBalanceAmount = data.giftCardAmount;
                    break;
            }
            client.assert.containsText(ref.gift_card_balance_card_number.selector, giftCardNumber);
            client.assert.containsText(ref.gift_card_balance_amount.selector, giftCardBalanceAmount);
            return client
        });
        
       //Added below function to navigate to the My Account page --**
       Then(/^I navigate to my account page$/, () => {
        var welcomelink = ref.header_my_account_link.selector
        run('When I hover on "Welcome user in header"');
        client.click(ref.myaccountlink_inside_overlay.selector);
        client.pause(1000);
        // client.isVisible(ref.accept_cookies_button.selector, function(result) 
        // {
        //    client.click(ref.accept_cookies_button.selector);
        //    client.pause(2000);
        // });
        return client;
     });

     Then(/^check order history$/, () => {
        // var loginLink = ref.user_account_text.selector
        run('When I hover on "signin link"');
        client.click(ref.order_history_Hover_Link.selector);
        client.pause(3000);
        return client;
    });
    }
}