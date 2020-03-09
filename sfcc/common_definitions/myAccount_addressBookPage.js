const { client } = require('nightwatch-api');
// const { Given, When, Then, run } = require('../../utility/helper')
const { Given, When, Then, run } = require('../../utility/helper')

module.exports = {
    main:
      function(data, ref) { 

      Then(/^Delete saved address in my account page$/,()=> { 
        // run('Navigate to My Account "Address Book" Page');
       client.pause(1000);
       client.isVisible(ref.delete__link_in_my_account_address_book_page.selector)
       {
         client.elements('css selector', ref.delete__link_in_my_account_address_book_page.selector, function(result){
           var elementsList = result.value
           console.log("*********Number of Delete links:- "+ elementsList.length);

           for (let index = 0; index < elementsList.length; index++) {
             const element = elementsList[index];
             client.click(ref.delete__link_in_my_account_address_book_page.selector);
             client.pause(1000);
             client.click(ref.confirm_link_delete_address_popup.selector);
             client.pause(2000);
            //  client.refresh();
           }
           run('And I should see ' + ref.empty_address_book.selector);

         })
       }
        return client
      });
      //e2e changes updated
      Then(/^Remove saved addresses from my account page$/,()=> { 
      client.pause(3000);
       client.click(ref.my_account_address_link.selector);
       client.pause(1000);
       client.isVisible(ref.delete__link_in_my_account_address_book_page.selector)
       {
         client.elements('css selector', ref.delete__link_in_my_account_address_book_page.selector, function(result){
           var elementsList = result.value
           console.log("*********Number of Delete links:- "+ elementsList.length);

           for (let index = 0; index < elementsList.length; index++) {
             const element = elementsList[index];
             client.click(ref.delete__link_in_my_account_address_book_page.selector);
             client.pause(1000);
             client.click(ref.confirm_link_delete_address_popup.selector);
             client.pause(2000);
            //  client.refresh();
           }
           run('And I should see ' + ref.empty_address_book.selector);

         })
       }
        return client
      });


      Then(/^Delete saved credit cards in my account page$/,()=> { 
        // run('Navigate to My Account "Payments" Page');
       client.pause(1000);
       client.isVisible(ref.delete_link_in_my_account_payment_page.selector)
       {
         client.elements('css selector', ref.delete_link_in_my_account_payment_page.selector, function(result){
           var elementsList = result.value
           console.log("*********Number of Delete links:- "+ elementsList.length);

           for (let index = 0; index < elementsList.length; index++) {
             console.log("******** DELETE CARD LOOP:- LOOP"+ index);
            client.click(ref.delete_link_in_my_account_payment_page.selector);
             client.pause(2000);
             client.click(ref.confirm_link_delete_payment_popup.selector);
             client.pause(2000);
            //  Currently deleting/adding credit card, page is not reloading. Hence reloading the page by clicking on payments link. 
            //  client.click(ref.payments_link_left_nav.selector);
             client.pause(2000);

           }
           run('And I should see ' + ref.empty_payment_methods.selector);

         })
       }
        return client
      });

      // e2e changes updated
      Then(/^Remove saved credit cards from my account page$/,()=> { 
        // run('Navigate to My Account "Payments" Page');
       client.pause(3000);
       client.click(ref.my_account_payment_link.selector);
       client.pause(1000);
       client.isVisible(ref.delete_link_in_my_account_payment_page.selector)
       {
         client.elements('css selector', ref.delete_link_in_my_account_payment_page.selector, function(result){
           var elementsList = result.value
           console.log("*********Number of Delete links:- "+ elementsList.length);

           for (let index = 0; index < elementsList.length; index++) {
             console.log("******** DELETE CARD LOOP:- LOOP"+ index);
            client.click(ref.delete_link_in_my_account_payment_page.selector);
             client.pause(2000);
             client.click(ref.confirm_link_delete_payment_popup.selector);
             client.pause(2000);
            //  Currently deleting/adding credit card, page is not reloading. Hence reloading the page by clicking on payments link. 
            //  client.click(ref.payments_link_left_nav.selector);
             client.pause(2000);

           }
           run('And I should see ' + ref.empty_payment_methods.selector);

         })
       }
        return client
      });

      Then(/^Save "(.*?)" in my account address book page$/,(address)=>{
  
        switch(address){
            case 'address':
            case 'Shipping address-1':
            case 'International address':
              client.click(ref.address_book_add_address_link.selector);
              client.pause(2000);
              enterAddress(address);
              client.click(ref.address_book_save_button.selector);
              client.pause(5000);
              client.waitForElementVisible(ref.address_book_saved_address.selector, 5000);
              break;
        }
        return client
      });


        Then(/^Edit "(.*?)" in my account address book page$/,(address)=>{  
          switch(address){
              case 'address':
              case 'Shipping address-1':
              case 'International address':
                enterAddress(address);
                client.click(ref.address_book_save_button.selector);
                client.pause(5000);
                client.waitForElementVisible(ref.address_book_saved_address.selector, 5000);
                break;
          }
        return client
      });

      function enterAddress(address) {
        if(address === 'address'){
        var nickName = data.save_address_nick_name
        var country = data.save_address_country
        var firstname = data.save_address_first_name
        var lastname = data.save_address_last_name
        var address_line1 = data.save_address_line_one
        var address_line2 = data.save_address_line_two
        var city = data.save_address_city
        var state = data.save_address_state
        var zipOrPostalCode = data.save_address_zip_code
        var phone = data.save_address_phone_number
        }
        else if(address === 'Shipping address-1'){
          var nickName = data.acc_address_nickname1
          var country = data.acc_address_country
          var firstname = data.acc_address_firstName1
          var lastname = data.acc_address_lastName1
          var address_line1 = data.acc_AddressStreetOption1
          var address_line2 = data.acc_AddressStreetTwoOption1
          var city = data.acc_CityOption1
          var state = data.acc_StateOrProvince1
          var zipOrPostalCode = data.acc_ZipOption1
          var phone = data.acc_PhoneOption1

        }

        else if(address === 'International address'){
          var nickName = data.international_address_nickname
          var country = data.international_address_country
          var firstname = data.international_address_first_name
          var lastname = data.international_address_last_name
          var address_line1 = data.international_address_line_one
          var address_line2 = data.international_address_line_two
          var city = data.international_address_city
          var state = data.international_address_state
          var zipOrPostalCode = data.international_address_zipcode
          var phone = data.international_address_phone_number

        }
        
        
        client.waitForElementVisible(ref.address_book_country_selectbox.selector)
        client.setValue(ref.address_book_country_selectbox.selector, country);
        client.pause(1000);
        client
        .clearValue(ref.address_book_address_nick_name_field.selector)
        .setValue(ref.address_book_address_nick_name_field.selector, nickName)

        .clearValue(ref.address_book_first_name_field.selector)
        .setValue(ref.address_book_first_name_field.selector, firstname)

        .clearValue(ref.address_book_last_name_field.selector)
        .setValue(ref.address_book_last_name_field.selector, lastname)

        .pause(200)
        .clearValue(ref.address_book_address_line_one.selector)
        .setValue(ref.address_book_address_line_one.selector, address_line1)
        .pause(1000)
        .keys(data.tabKey)

        .clearValue(ref.address_book_address_line_two.selector)
        .setValue(ref.address_book_address_line_two.selector, address_line2)

        .clearValue(ref.address_book_city_field.selector)
        .setValue(ref.address_book_city_field.selector, city)

        .setValue(ref.address_book_state_selectbox.selector, state)

        .clearValue(ref.address_book_postcode_field.selector)
        .setValue(ref.address_book_postcode_field.selector, zipOrPostalCode)

        .clearValue(ref.address_book_phone_number_field.selector)
        .setValue(ref.address_book_phone_number_field.selector, phone);
        
        client.keys(data.tabKey);

     }

      Then(/^Save "(.*?)" in My Account payment page$/,(card)=>{
        var cardNumber;
        switch(card){
            case 'Visa Card Details':
                cardNumber = data.visaCardNumber;
                break;
          }

          client.click(ref.myaccount_payment_page_add_new_payment_link.selector);
          client.pause(2000);
          client.setValue(ref.myaccount_payment_page_name_field.selector, data.creditCard_name);
          client.setValue(ref.myaccount_payment_card_number_field.selector, cardNumber);
          client.setValue(ref.myaccount_payment_page_expiry_date_field.selector, data.creditCard_exp_date);
          client.click(ref.myaccount_payment_page_make_default_payment_checkbox.selector);
          client.pause(1000);
          client.click(ref.myaccount_payment_page_save_button.selector);
          client.pause(4000);
          return client
      });


      Then(/^Verify the saved "(.*?)" in my account address book page$/,(address)=>{
        var actualAddress='';
        var expectedAddress;
        switch(address){
          case 'Shipping address-1':
            expectedAddress = data.address_format_in_address_book_page_1;
            break;

          case 'Shipping address-2':
            expectedAddress = data.address_format_in_address_book_page_2;
            break;

            case 'address':
              expectedAddress = data.full_address_format_2;
              break;
            
            case 'Edit Address Data':
              expectedAddress = data.edit_address_format;
              break;
        }

      //  client.elements('css selector', ref.address_book_saved_address_lines.selector, function(result){
      //    console.log("********** Number of address lines:-"+result.value.length);

      //    for (let index = 0; index < result.value.length; index++) {
      //      console.log("********** LINE:- "+ index);
      //       const element = result.value[index];
      //         client.elementIdText(element.ELEMENT, function(result){
      //         actualAddress = actualAddress+result.value+' ';
      //         console.log("*******actualAddress concate:-"+ actualAddress);
      //       })
           
         
      //    }
      //    console.log("******** actualAddress:- "+actualAddress);
      //    console.log("******** expectedAddress:- "+expectedAddress);

      //    client.assert.equal(actualAddress, expectedAddress);


      //  })


      client.getText(ref.address_book_saved_address.selector, function(result){
        var actualAddress = result.value.replace(/(?:\r\n|\r|\n)/g, ' ').replace(/, /g, ' ').replace('Edit','').replace('Default', '').replace('Delete', '').replace('  ', '').trim();
        console.log("****************:- "+ result.value.replace(/(?:\r\n|\r|\n)/g, ' ').replace(/, /g, ' '));
        console.log("***************expectedAddress:- "+ expectedAddress);
        console.log("***************actualAddress:- "+ actualAddress);
        client.assert.equal(actualAddress, expectedAddress);
    })

        return client
      })

      Then(/^Verify the pre-populated payment "(.*?)" data in the "(.*?)"$/,(payment, section)=>{
        switch(section){
            case 'Add new payment method form':
                    verifyPrePopulatedaddnewPayment(payment);
                    break;
            
            case 'Add New Address Form':
              verifyPrePopulatedaddnewAddress()

        }

        return client
     })

     function verifyPrePopulatedaddnewPayment(payment){
      if(payment === 'Add New Payment Method'){
         var cardname = ""; 
         var cardnumber = "";
         var cardexpirydate = "";       
                      
          }
      client.assert.attributeContains(ref.myaccount_payment_page_name_field.selector,'value',cardname);
      client.assert.attributeContains(ref.myaccount_payment_card_number_field.selector,'value',cardnumber);
      client.assert.attributeContains(ref.myaccount_payment_page_expiry_date_field.selector,'value',cardexpirydate); 
        }

      
        Then(/^Verify the pre-populated Address "(.*?)" data in the "(.*?)"$/,(address, section)=>{
          switch(section){
                            
              case 'Add New Address page':
              case 'old address':
                verifyPrePopulatedaddnewAddress(address)
  
          }
  
          return client
       })
  
       function verifyPrePopulatedaddnewAddress(address){
        if(address === 'Add New Address Form'){
          var addressname = ""; 
          var addressFname = "";
          var addressLname = "";   
          var address1 = "";   
          var address2 = "";   
          var addressCity = "";   
          var addressZipcode = "";   
          var PhoneNumber = "";                        
          }
          else if(address === 'old address'){
            var addressname = data.save_address_nick_name; 
            var addressFname = data.save_address_first_name;
            var addressLname = data.save_address_last_name;   
            var address1 = data.save_address_line_one;   
            var address2 = data.save_address_line_two;   
            var addressCity = data.save_address_city;   
            var addressZipcode = data.save_address_zip_code;   
            var PhoneNumber = data.save_address_phone_number; 
          }
        client.assert.attributeContains(ref.address_book_address_nick_name_field.selector,'value',addressname);
        client.assert.attributeContains(ref.address_book_first_name_field.selector,'value',addressFname);
        client.assert.attributeContains(ref.address_book_last_name_field.selector,'value',addressLname); 
        client.assert.attributeContains(ref.address_book_address_line_one.selector,'value',address1); 
        client.assert.attributeContains(ref.address_book_address_line_two.selector,'value',address2); 
        client.assert.attributeContains(ref.address_book_city_field.selector,'value',addressCity); 
        client.assert.attributeContains(ref.address_book_postcode_field.selector,'value',addressZipcode); 
        client.assert.attributeContains(ref.address_book_phone_number_field.selector,'value',PhoneNumber); 
        }

        Then(/^I enter my details "(.*?)" in the textbox$/, (event) => {
          switch(event) {
            case 'New payment details-1' :
            case 'New payment details-2' :
            case 'Expired credit card details':
                  addNewPaymentDetails(event);
                  break;
          }
          return client
        })

        function addNewPaymentDetails(event) {
                if(event === 'New payment details-1') {
                  var cardname=data.creditCard_name
                  var cardnumber=data.visaCardNumber
                  var cardexpiry=data.creditCard_exp_date
                } 
                else if(event === 'New payment details-2') {
                  var cardname=data.creditCard_name
                  var cardnumber=data.masterCardNumber
                  var cardexpiry=data.creditCard_exp_date
                }
                else if(event === 'Expired credit card details'){
                  var cardname=data.creditCard_name
                  var cardnumber=data.visaCardNumber
                  var cardexpiry=data.invalid_exp_date
                }
                client
                .clearValue(ref.myaccount_payment_page_name_field.selector)
                .setValue(ref.myaccount_payment_page_name_field.selector, cardname)
                .clearValue(ref.myaccount_payment_card_number_field.selector)
                .setValue(ref.myaccount_payment_card_number_field.selector, cardnumber)
                .clearValue(ref.myaccount_payment_page_expiry_date_field.selector)
                .setValue(ref.myaccount_payment_page_expiry_date_field.selector, cardexpiry)
            }

      }
    }  