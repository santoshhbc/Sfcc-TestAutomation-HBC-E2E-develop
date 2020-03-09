const { client } = require('nightwatch-api');
// const { Given, When, Then, run } = require('../../utility/helper')
const { Given, When, Then, run } = require('../../../utility/helper')
const fs = require('fs');


module.exports = {
    main:
      function(data, ref) { 

        Then(/^Enter "(.*?)" field$/,(message)=>{
           switch(fields){
             case 'email id and mobile number in waitlist':
               client.setValue(ref.waitlist_email_address_field.selector,data.waitlist_email_id);
               client.setValue(ref.waitlist_phonenumber_field.selector, data.waitlist_phone_number);
               break;
           }

            return client
        });

      
  

      }
    }  