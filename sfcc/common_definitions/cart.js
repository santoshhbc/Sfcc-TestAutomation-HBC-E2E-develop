const { client } = require('nightwatch-api');
// const { Given, When, Then, run } = require('../../utility/helper')
const { Given, When, Then, run } = require('../../utility/helper')


module.exports = {
    main:
      function(data, ref) { 

        

        Then(/^Verify the product name in cart page$/, () => {
            client.getText(ref.cart_product_name.selector, function(result){
                var productNameInCart = result.value;
                console.log("*********Product name in cart page:- "+ productNameInCart);
                // var proNameInPLP = localStorage.getItem("prodNameInPLP");
                // console.log("***********cart page proNameInPLP:-"+proNameInPLP)
                    // client.execute('document.getElementById(element).scrollIntoView()');
                client.assert.equal(productNameInCart,'Update it',"Verify the product name");
               })

          return client
      });


      Then(/^Remove products from cart page$/,()=> { 
      run('I click on "minicart link"');
      client.pause(1000);
       client.isVisible(ref.cart_remove_product_link.selector)
       {
         client.elements('css selector', ref.cart_remove_product_link.selector, function(result){
           var elementsList = result.value
           console.log("*********Number of remove links:- "+ elementsList.length);

           for (let index = 0; index < elementsList.length; index++) {
             const element = elementsList[index];
             console.log("************element.ELEMENT:-"+ element.ELEMENT);
            //  client.elementIdClick(element.ELEMENT);
             client.click(ref.cart_remove_product_link.selector);
             client.pause(3000);
             console.log("*****************Index Loop:- "+ index);
           }
           run('And I should see ' + ref.empty_cart_content.selector);

         })
       }
        return client
      });


      Then(/^Remove products from wishlist section in cart page$/,()=> { 
        run('I click on "minicart link"');
        client.pause(1000);
       client.isVisible(ref.cart_wishlist_product_remove_link.selector)
       {
         client.elements('css selector', ref.cart_wishlist_product_remove_link.selector, function(result){
           var elementsList = result.value
           console.log("*********Number of remove links:- "+ elementsList.length);

           for (let index = 0; index < elementsList.length; index++) {
             const element = elementsList[index];
             client.click(ref.cart_wishlist_product_remove_link.selector);
             client.pause(2000);
           }
           run('And I should not see ' + ref.cart_wishlist_count.selector);
            
         })
       }
        return client
      });

      Then(/^Remove products from wishlist page$/,()=> { 
        client.click(ref.header_wishlist_link.selector);
        client.pause(1000);
       client.isVisible(ref.wishlist_page_deselect_icon.selector)
       {
         client.elements('css selector', ref.wishlist_page_deselect_icon.selector, function(result){
           var elementsList = result.value
           console.log("*********Number of remove links:- "+ elementsList.length);

           for (let index = 0; index < elementsList.length; index++) {
             const element = elementsList[index];
             client.click(ref.wishlist_page_deselect_icon.selector);
             client.pause(2000);
           }
          
          // run('And I should see ' + ref.empty_wishlist_page.selector);
          run('Verify "wishlist deselect icon" is not displayed');        
            
         })
       }
        return client
      }); 
    

        Then(/^Select free product in cart page$/,()=>{
              client.click(ref.gwp_bonusproduct_select_link.selector);
              client.pause(2000);
 
              client.click(ref.gwp_bonus_promo_link.selector);
              client.pause(8000);
 
              client.click(ref.gwp_bonus_promo_product.selector);
              client.pause(10000);
 
              return client
      });



      }
    }  