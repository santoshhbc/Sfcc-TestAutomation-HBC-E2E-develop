const { client } = require('nightwatch-api');
// const { Given, When, Then, run } = require('../../utility/helper')
const { Given, When, Then, run } = require('../../../utility/helper')
const fs = require('fs');


module.exports = {
    main:
      function(data, ref) { 

        Then(/^Save Order ID - "(.*?)"$/,(message)=>{
            client.getText(ref.order_confirmation_page_order_number.selector, function(result){
                console.log("*********** Order ID:- "+result.value);
                var filePath = 'sfcc/off5th/data/OrderId.txt';
                fs.appendFileSync(filePath, 'Order ID:-');
                fs.appendFileSync(filePath, result.value);
                fs.appendFileSync(filePath,' ('+message+') - ');
                fs.appendFileSync(filePath, getSystemDate());
                fs.appendFileSync(filePath, '\n');
            })
            return client
        });

         function getSystemDate()
         {
           var today = new Date();
           var date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
           var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
           var dateTime = date+'-'+time;
           console.log('***** System date and time:- '+dateTime);
           return dateTime
         };
  

      }
    }  