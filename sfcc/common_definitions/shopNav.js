const { client } = require('nightwatch-api');
// const { Given, When, Then, run } = require('../../utility/helper')
const { Given, When, Then, run } = require('../../utility/helper')
// var productNameInPLP;
module.exports = {
    main:
      function(data, ref) {  
        // var productNameInPLP;
        

        Given(/^Collect the product price in search result page$/, () => {
          
          collectProductPriceInSearchResultPage(client);
          return client
        });


        function collectProductPriceInSearchResultPage(client)
        {
          client.elements('css selector',ref.homepage_popup_close_icon.selector, function(result) 
          {
            console.log("***** Total elements:- "+result.value);
          });
        }

        
        Given (/^I see "(.*?)" refinement is expanded in search result page$/,(action) =>{
          var element;
          switch(action) {

                case 'category':   
                element = ref.search_result_page_refinement_category_heading.selector
                break;

                case 'color':   
                element = ref.search_result_page_refinement_color_heading.selector
                break;

                case 'price':   
                element = ref.search_result_page_refinement_price_heading.selector
                break;
                
                case 'brand':   
                element = ref.search_result_page_refinement_brand_heading.selector
                break;

                case 'size':   
                element = ref.search_result_page_refinement_size_heading.selector
                break;

              }
              client.pause(1000);
              client.getAttribute(element, 'aria-expanded',function(result){
              this.assert.equal(result.value,"true");
              })
              return client
        });


        Given (/^I see "(.*?)" refinement is collapsed in search result page$/,(action) =>{
         var element;
          switch(action) {

              case 'category':   
                element = ref.search_result_page_refinement_category_heading.selector
                break;

              case 'color':   
                element = ref.search_result_page_refinement_color_heading.selector
                break;

              case 'price':   
                element = ref.search_result_page_refinement_price_heading.selector
                break;
                
              case 'brand':   
                element = ref.search_result_page_refinement_brand_heading.selector
                break;

              case 'size':   
                element = ref.search_result_page_refinement_size_heading.selector
                break;

              }
              client.pause(1000);
              client.getAttribute(element, 'aria-expanded',function(result){
                this.assert.equal(result.value,"false");
              });
              return client;
        });

        Given (/^I see "(.*?)" refinement is collapsed bydefault in search result page$/,(action) =>{
          var element;
          switch(action) {

              case 'category':   
                element = ref.search_result_page_refinement_category_heading.selector
                break;

              case 'color':   
                element = ref.search_result_page_refinement_color_heading.selector
                break;

              case 'price':   
                element = ref.search_result_page_refinement_price_heading.selector
                break;
                
              case 'brand':   
                element = ref.search_result_page_refinement_brand_heading.selector
                break;

              case 'size':   
                element = ref.search_result_page_refinement_size_heading.selector
                break;

              }
              client.pause(1000);
              client.getAttribute(element, 'aria-expanded',function(result){
                this.assert.equal(result.value,null);
              });
              return client;
        });


        Given(/^Select "(.*?)" filter and verify the selected filter$/, (action) => {
          var element;
          // var filterValue;
          var attribute;
          switch(action) {

            case 'category':   
              run('Then I click on "category refinement link in search result page"');
              element = ref.search_result_page_category_title.selector;
              attribute='title';
              break;

            case 'color':
              run('I scroll to the "color refinement section"');
              run('Then I click on "color refinement link in search result page"');
              element = ref.search_result_page_color_title.selector;
              attribute='title';   
              break;

            case 'available promotion':
                run('Then I click on "promotion refinement in search result page"');
                element = ref.search_result_page_promotion_name.selector;
                attribute='title';
                break;

            case 'price':
                // client.waitForElementVisible()
                client.isVisible(ref.search_result_page_refinement_price_expanded.selector, function(result){
                  console.log("************* result.status:- "+ result.statue);
                  client.click(ref.search_result_page_refinement_price_heading.selector);
                })
                client.click(ref.search_result_page_price_range_link.selector);
                client.pause(1000);
                element =ref.search_result_page_price_range_value.selector;
                attribute='innerText';
                break;

                case 'designer':
                  element = ref.search_result_page_promotion_name.selector;
                  attribute='title';
                  break;

            }

          // client.getAttribute(element,attribute, function(result){
          //     filterValue = result.value;
          //     console.log("*************selected filter: "+ filterValue);
          //     // Verify the refinement name in selected filter section in top
          //     // client.assert.containsText(ref.search_result_page_selected_filter_link.selector, filterValue);
          //     client.assert.containsText(ref.search_result_page_selected_filters.selector, filterValue);
              
          //   })

          client.execute('window.scrollTo(0,0)');  
            client.getText(element, function(result){
              var filterValue = result.value;
              console.log("*************selected filter: "+ filterValue);
              client.assert.containsText(ref.search_result_page_selected_filters.selector, filterValue);
              
            })

            // client.getText(ref.search_result_page_selected_filters.selector, function(result){
            //   console.log("*************selected filter in breadcrumb: "+ result.value);
            //   client.assert.equal(result.value, filterValue);
            // })



          return client
        });
              
        Then(/^I verify the (.*?) has "(.*?)"$/, (action, text)=> {
          var element;
          var attribute;
          switch(action){
              case 'header search box place holder':
                element = ref.header_search_box.selector
                attribute = 'placeholder';
                break;

              case 'product quantity in cart page':
                element = ref.cart_product_quantity.selector
                attribute = 'value';
                break;

              case 'size variant in pdp'  :
              element = ref.pdp_size_list.selector;
              attribute = 'selected';
              break;

              case 'quantity box in pdp':
              element = ref.pdp_selected_quantity_pdp.selector;
              attribute = 'innerText';
              break;

              case 'credit card number field in checkout page':
              element = ref.checkout_card_number_textbox.selector;
              attribute = 'value';
              break;

              case 'cvv field in checkout page':
              element = ref.checkout_cvv_textbox.selector;
              attribute = 'value';
              break;
              
  
          }
          client.getAttribute(element,attribute, function(result){
            console.log("*************attributeValue:- "+ result.value);
          })
          client.assert.attributeContains(element,attribute,text);
      
        return client

        });


        Then(/^Select filter in search result page and verify the updated search result count$/,()=> {
        var searchCount;
        client.pause(2000);         
        client.getText(ref.search_result_total_product_count.selector, function(result){
          searchCount = result.value;
          console.log("*********Result count before selecting filter:- "+ searchCount);
         });

           // run('Given Select "color" filter and verify the selected filter');
          // run('Then I scroll to the "color refinement section"');
          // run('Then I click on "color refinement link in search result page"');
          client.isVisible(ref.search_result_page_refinement_price_expanded.selector, function(result){
            console.log("************* result.status:- "+ result.statue);
            client.click(ref.search_result_page_refinement_price_heading.selector);
          })
          run('Then I click on "price refinement link in search result page"');
          
          client.pause(5000); 
          //Verify the search count after selecting the filter
          client.getText(ref.search_result_total_product_count.selector, function(result){
          var searchCountAfterFilterSelect = result.value;
            console.log("************search count after filter select:- "+ searchCountAfterFilterSelect);
            client.assert.notEqual(searchCountAfterFilterSelect, searchCount,"Search result count updating after selecting refinement");
          });
         
          

          return client
        });


        Then(/^Click on product name in PLP and verify the PDP$/,() => {
            // var productNameInPLP;
            client.getText(ref.search_result_page_product_name_link.selector,function(result){
                productNameInPLP = result.value;
                console.log("**************Product name in plp:- "+productNameInPLP);

                // search_result_page_product_name_link
                run('Then I click on "product name in PLP"');
                client.click(ref.search_result_page_product_link.selector);
                // Verify the product name in PDP
                client.getText(ref.pdp_product_name.selector,function(result){
                console.log("***************PRODUCT NAME IN PDP:- "+ result.value);
                client.assert.equal(productNameInPLP, productNameInPLP,"Verify the product name in PDP");
              })
            })
          
          return client
        });


        Then(/^Collect the product details in plp$/, () => {
          
          client.getText(ref.search_result_page_product_name_link.selector,function(result){
           var productNameInPLP = result.value;
            console.log("*********** Product name in search result page:- "+ productNameInPLP);
            // Storage.setItem("prodNameInPLP", productNameInPLP);
            // var proNameInPLP = localStorage.getItem("prodNameInPLP");
            // client.execute('localStorage.setItem("prodNameInPLP", productNameInPLP)');
          })
          return client
        });



      // Then(/^Select size variant in PLP$/,() =>{
      //   run('I hover on "product tile in search result page"')
      //   client.isVisible(ref.search_result_page_size_links.selector)
      //   {
      //     client.click(ref.search_result_page_size_links.selector);
      //     client.pause(2000);
      //   } 
      //   return client
      // });

      Then(/^Navigate to PDP and verify the selected size$/,()=>{
        client.getText(ref.search_result_page_product_selected_size.selector, function(result){
          var selectedSize = result.value;
          console.log("*****************selectedSize:- "+selectedSize);
          // client.moveToElement(ref.site_logo.selector,10,10);
          // client.pause(2000);
          client.click(ref.search_result_page_product_tile.selector);
          client.pause(2000);
          run('verify "PDP" page elements are displayed');
          client.assert.containsText(ref.pdp_selected_size.selector, selectedSize,"Verify the delected size");
        })

        return client
      })

      Then(/^Add product to cart from PLP$/,()=>{
        run('Then Select size variant in PLP');
        run('I hover on "product tile in search result page"');
        run('I click on "add to cart button in plp"')
        return client
      });

      Then(/^Select size variant in (.*?)$/,(page)=>{
        var element;
        switch(page){

            case 'quickview popup':
                element = ref.search_result_page_selectable_size_in_quickview.selector;
                break;

            case 'PDP':
              element = ref.pdp_size_links.selector;
              break;

            case 'PLP':
              run('I hover on "product tile in search result page"');
              element = ref.search_result_page_size_links.selector;
              break;   
              
            case 'wishlist page':
              run('I hover on "product image in wishlist page"');
              element = ref.wishlist_page_selectable_sizes.selector;
              break;
              

        }

        client.isVisible(element, function(result){
          client.click(element);
          client.pause(2000);

        });
        // client.pause(2000);
        // // Select different size if its unavailable
        // client.isVisible(ref.pdp_selected_size_is_unavailable.selector, function(result){
        //   client.click(element);
        //   client.pause(2000);
        // });
    

        return client
      });

      Then(/^Select color variant in (.*?)$/,(page)=>{
        var element;
        switch(page){
          case 'PDP':
            element = ref.pdp_selectable_color_swatch.selector
            break;

        }
        client.waitForElementVisible(element, 6000);
        client.pause(2000);
        client.isVisible(element, function(result){
          client.click(element);
          client.pause(2000);
          console.log("*********** SELECTING COLOR Variant")
        });
        
        return client
      });

      Then(/^Select variants in PDP$/,()=>{
        run('Select color variant in PDP');
        client.pause(2000);
        run('Select size variant in PDP');
        return client
      })

      Then(/^Collect the elements$/,()=> {
        //  client.elements('css selector', 'li.dropdown span.nav-link', function(result){
          client.elements('css selector',ref.root_cat_one.selector, function(result){
          var elementsList = result.value;
          console.log("****************Elements :- "+elementsList);
          var count = result.value.length;
          console.log("****************Elements :- "+count);

          for (let index = 0; index < elementsList.length; index++) {
            const element = elementsList[index];
            
            client.elementIdText(element.ELEMENT, function(result){
              console.log("***********TEXT:-"+result.value);
              client.elementIdClick(element.ELEMENT );
              client.pause(2000);
            })
            
          }
      
        })
        return client
      });

      Then(/^Verify the product price arranged high to low$/,()=>{
        var temp=0;
        run('Scroll to the bottom of the page');
        client.pause(3000);
        client.elements('css selector', ref.search_result_page_sales_price.selector, function(result){
          var elementsList = result.value;
          var count = elementsList.length;
          console.log("****************Product Count:- "+count);

          for (let index = 0; index < elementsList.length; index++) {
              const element = elementsList[index];
        
              client.elementIdAttribute(element.ELEMENT,'content', function(result){
              //"temp" contains first product price and "productPrice" contains next product price */
              // Product1 price = temp  ||  Product2 price = productPrice */ 
              // expected is "temp > productPrice"  || if "temp < productPrice" execution should fail
              var proPriceVal = result.value;
              var productPrice = Number(proPriceVal.replace(',',''));
              console.log("***********Product price:-"+productPrice);
              if(productPrice>temp && index!=0){
                     client.assert.ok(false);
                }
                temp=productPrice;
              })
          }

        })
  
        return client
      });

    

      Then(/^Verify the product price arranged low to high$/,()=>{
        run('Scroll to the bottom of the page');
        var temp=0;
        client.pause(3000);
        client.elements('css selector', ref.search_result_page_sales_price.selector, function(result){
          var elementsList = result.value;
          var count = elementsList.length;
          console.log("****************Elements:- "+count);

          for (let index = 0; index < elementsList.length; index++) {
              const element = elementsList[index];
        
              client.elementIdAttribute(element.ELEMENT,'content', function(result){
              var productPrice = Number(result.value.replace(',',''));
              console.log("***********Product price:-"+productPrice);
              //"temp" contains first product price and "productPrice" contains next product price */
              // Product1 price = temp  ||  Product2 price = productPrice */ 
              // expected is "temp < productPrice"  || if "temp > productPrice" execution should fail
                if(productPrice<temp){
                     client.assert.ok(false);
                }
                temp=productPrice;
              })
          }

        })
  
        return client
      });

      Then(/^verify the search result product price should be within "(.*?)" to "(.*?)"$/,(minimum, maximum)=>{
        run('Scroll to the bottom of the page');
        client.elements('css selector', ref.search_result_page_sales_price.selector, function(result){
          var elementsList = result.value;
          console.log("*************elementsList"+elementsList.length);
          for (let index = 0; index < elementsList.length; index++) {
            const element = elementsList[index];
            client.elementIdAttribute(element.ELEMENT,'content', function(result){
              var productPrice = Number(result.value.replace(',',''));
              var minimumPrice = Number(minimum);
              var maximumPrice = Number(maximum);
              console.log("************index:- "+index);
              console.log("************productPrice:-"+productPrice);
              if((minimumPrice > productPrice) || (maximumPrice < productPrice)){
                client.assert.ok(false);
              }

            })
            
          }
        })

        return client
      });

      Then(/^Verify the search result products price$/,()=>{
        client.pause(2000);
        client.getText(ref.search_result_page_price_range_value.selector, function(result){
          var selectedPriceRange = result.value;
          console.log("***********selectedPriceRange:-"+selectedPriceRange);
          var minimum = selectedPriceRange.split('-')[0].trim();
          var maximum = selectedPriceRange.split('-')[1].trim();
          console.log("**********minimum:-"+ minimum);
          console.log("**********maximum:-"+ maximum);
          run(`verify the search result product price should be within "${minimum}" to "${maximum}"`);
        })


        return client
      })

      Then(/^verify the search result products price should be less than "(.*?)"$/,(maximum)=>{
        run('Scroll to the bottom of the page');
        client.elements('css selector', ref.search_result_page_sales_price.selector, function(result){
          var elementsList = result.value;
          console.log("*************elementsList:- "+elementsList.length);
          for (let index = 0; index < elementsList.length; index++) {
            const element = elementsList[index];
            client.elementIdAttribute(element.ELEMENT,'content', function(result){
              var productPrice = Number(result.value);      
              var maximumPrice = Number(maximum);
              if(maximumPrice < productPrice){
                console.log("************* LOOP:- "+ index);
                console.log("************productPrice:-"+productPrice);
                console.log("************maximum:-"+maximum);
                console.log("******************IF CONDITION EXECUTING");
                client.assert.ok(false);
              }

            })
            
          }
        })

        return client
      });


      Then(/^verify the search result products price should be more than "(.*?)"$/,(minimum)=>{
        run('Scroll to the bottom of the page');
        client.elements('css selector', ref.search_result_page_sales_price.selector, function(result){
          var elementsList = result.value;
          console.log("*************elementsList"+elementsList.length);
          for (let index = 0; index < elementsList.length; index++) {
            const element = elementsList[index];
            client.elementIdAttribute(element.ELEMENT,'content', function(result){
              var productPrice = Number(result.value.replace(',',''));
              var minimumPrice = Number(minimum); 
              console.log("************productPrice:-"+productPrice);
              console.log("************minimum:-"+minimum);
              
              if(minimumPrice > productPrice){
                client.assert.ok(false);
              }

            })
            
          }
        })

        return client
      });


      Then(/^I select "(.*?)" from sortby dropdown$/, (option)=>{
        var sortOption;
        switch(option){
          case 'Price Low to High':
            sortOption = 'Price Low to High'
            break;

            case 'Price High to Low':
              sortOption='Price High to Low'
              break;
        }
        client.setValue(ref.sortby_selectbox.selector, sortOption);
        client.pause(3000);
        return client
      })

      // #########################################################################
      // #################### PDP STEM DEFINITION ################################
      // #########################################################################

      Then(/^I am on "(.*)" search result page$/, (action) => {
        switch(action){

            case 'available promotion products':
            action = data.promotions_available_product
            console.log("******************action:-"+action);
            break;

            case 'product set':
              action = data.product_set_searchkey
              break;
            
            case 'Brand Page':
              action = data.brandName
              break;
              
            default:
              break;
  
        }

        search(action);
            return client
    });

    function search(keywords) { 
        run('And I should see ' + ref.header_search_box.selector); // search bar css
        client.setValue(ref.header_search_box.selector, keywords);
        client.pause(2000);
        client.click(ref.header_searchBar_button.selector); // search bar submit
        
    };


      Then(/^Verify the "(.*?)" is expanded$/,(action)=>{
        var element;
        switch(action){
             case 'details tab in pdp':
                element = ref.pdp_details_tab.selector;
                break;
                case 'shopping and return tab in pdp':
                element = ref.pdp_shopping_and_details_tab.selector;
                  break; 
        }

        client.getAttribute(element,'aria-expanded', function(result){
          client.assert.equal(result.value, 'true', "Verify the expanded area");
        })
        return client
      });

      Then(/^Verify the "(.*?)" is collapsed$/,(action)=>{
        var element;
        switch(action){
             case 'details tab in pdp':
                element = ref.pdp_details_tab.selector;
                break;
               
              case 'shopping and return tab in pdp':
                element = ref.pdp_shopping_and_details_tab.selector;
                break;  
        }
        // client.assert.attributeContains(element,'class', 'active');

        client.getAttribute(element,'aria-expanded', function(result){
          client.assert.equal(result.value, 'false',"Verify the collapsed area");
        })
        return client
      });

      Then(/^Verify the "(.*?)" popup is closed$/,(page)=>{
        client.pause(1000);
        var element;
        var attribute;
        var value;

        switch(page){
            case'quick view':
            element = ref.search_result_page_quickview_modal.selector;
            attribute =  'style';
            value = 'display: none';
            break;

            case 'cart signup flyout':
            element = ref.cart_page_signup_flyout_style.selector;
            attribute =  'style';
            value = 'display: none';
            break;
        }
        client.assert.attributeContains(element,attribute,value);
        
        return client
      })


      Then(/^I navigate to PDP from "(.*?)" search result page$/,(action)=>{
        var searchKey;
        switch(action){
          case 'BOPIs product':
              searchKey = data.bopis_product_category;
              break;

            case 'BOPIs master product':
              searchKey = data.bopis_master_product_id;
              break;

            case 'product with single color variant':
              productId = data.single_color_variant_product_id;
              break;

            case 'selected variant product':
              productId = data.selected_variant_product_id;
              break;

          case 'color variants product':
            searchKey=data.product_with_color_variants;
            break;
          
          case 'product with less price':
              searchKey = data.product_ID_with_less_price
              break;

          case 'Gift Card Product':
              searchKey = data.gift_card_product_id
              break;
            
          case 'GWP Product':
            searchKey = data.gwp_product_ID
            break;
          
          case 'product id with space':
            searchKey = data.product_ID_withSPace;
            break;
            
          case 'product id':
            searchKey = data.product_ID_item1;
            break;

          case 'Promo Product':
            searchKey = data.product_id_withPromo;
            break;

            case 'waitlist product'  :
            searchKey = data.waitlist_product_id;
            break;

          case 'brand category product':
            searchKey = data.brand_category_product_id;
            break;  
            
          case 'size guide configured product':
            searchKey = data.size_guide_configured_product;
            break;

          case 'home appliance':
            searchKey = data.home_appliance_product_id;
            break; 

          case 'normal product':
            searchKey = data.product_ID_item1;
            break; 

          case 'product set':
             productId = data.product_set_id;
             break;
          // e2e changes updated
          case 'BOPIS_Item1_89645871':
             searchKey = data.e2e_product_set_id;
              break;
         // e2e changes updated
          case 'BOPIS Item1 SFDEV-2580':
              searchKey = data.BOPIS_Item1_SFDEV2580;
              break;
         // e2e changes updated
         case 'BOPIS Item2 SFDEV-2580':
          searchKey = data.BOPIS_Item2_SFDEV2580;
          break;

              default:
                  searchKey=action;
                  break;
        }


        search(searchKey);
        // run('I click on "product name in plp"');
        // client.click(ref.search_result_page_product_image.selector);
        client.isVisible(ref.search_result_page_product_image.selector, function(result) 
        {
           client.click(ref.search_result_page_product_image.selector);
        });
        client.pause(2000);
        return client
      });
      
      Then(/^Verify the "(.*?)" id in details tab in PDP$/,(product)=>{
        switch(product){
          case 'normal product':
            pId = data.product_ID_item1;
            break;

        }

        client.assert.containsText(ref.pdp_details_tab_style_code.selector, pId);
          return client
      });

      //&&&&&&&&&&&&&&&&&&
      Then(/^I navigate to PLP from "(.*?)" search result page$/,(action)=>{
        var searchKey;
        switch(action){

          case 'BOPIS product name':
            searchKey=data.bopis_product_name;
            break;

            default: 
                  searchKey=action;
                  break;

        }

        search(searchKey);
        client.isVisible(ref.search_result_brandName.selector,function(result)
        {
          client.click(ref.search_result_brandName.selector);
        });
        client.pause(2000);
        return client
      });

    //&&&&&&&&&&&&&&&&&&&  

      Given(/^I navigate to "(.*?)" PDP$/, (action) => {        
         var productId;
        switch(action){
          case 'normal product':
            productId=data.normal_product_id;
            break;

            case 'product with single color variant':
              productId = data.single_color_variant_product_id;
              break;
             
            case 'selected variant product':
              productId = data.selected_variant_product_id;
              break;
              
            case 'product set':
              productId = data.product_set_id;
              break;

              default:
                  productId = action;
                  break;
        }     
        
        
        var site = data.qaUrl;
        var splitUrl = site.split('home');
        var pdpUrl = splitUrl[0]+productId+'.html'+splitUrl[1];
        console.log('*************pdpUrlURLS:- '+pdpUrl);
        run(`Given I open "${pdpUrl}"`);
        client.isVisible(ref.homepage_popup_close_icon.selector, function(result) 
        {
           client.click(ref.homepage_popup_close_icon.selector);
        });
        client.pause(1000);
        client.isVisible(ref.accept_cookies_button.selector, function(result) 
        {
           client.click(ref.accept_cookies_button.selector);
           client.pause(1000);
        });

        
        return client;
    });


    Then(/^Select color swatch and verify the selected color name$/,()=>{

        // Collect the color name of selectable color swatch
        client.getAttribute(ref.pdp_selectable_color_swatch.selector, 'aria-label',function(result){
        var selectableColorName = result.value.replace('Select Color ','');
        console.log("**************selectableColorName:-"+selectableColorName);
        // Select color
        run(`Then I click on "selectable color swatch in pdp"`);

      //Verify the selected color name
      client.assert.containsText(ref.pdp_selected_color_name.selector, selectableColorName);
      })

      return client
    });


    Then(/^Click on "(.*?)" and verify the navigated product PDP$/,(action)=>{
      var productName;
      var clickableElement;

      switch(action){

        case 'view full details link in product set':
          productName=ref.product_set_first_product_name_link.selector;
          clickableElement =ref.product_set_first_product_view_full_details_link.selector; 
          break;

      }


      client.getText(productName, function(result){
        var productName = result.value;
        console.log("*************Product Name:- "+productName);
        client.click(clickableElement);
        client.pause(2000);
        client.assert.containsText(ref.pdp_product_name.selector, productName, "Verify the product name");
        
      })
      
      return client 
    });


    Then(/^Click on product name in recommendation section and verify the new tab opened$/,()=>{

      client.getText(ref.pdp_shop_the_look_recommendation_section_product_name.selector, function(result){
        var recommendationProductName = result.value;
        console.log("**********recommendationProductName:-"+ recommendationProductName);

        client.click(ref.pdp_shop_the_look_recommendation_section_product_name.selector);
        client.pause(2000);
            // Collect the window handels
            client.windowHandles(function(tabs){
              console.log("**** NUmber of tabs:- "+tabs.value.length); 
             client.switchWindow(tabs.value[1]);
             client.pause(2000);

              // Verify the product name in PDP
              client.assert.containsText(ref.pdp_product_name.selector, recommendationProductName,"Verify the product name");
              //Close the new window
              client.closeWindow();
              client.pause(2000);
              //Switch to main window
              client.switchWindow(tabs.value[0]);

            })
      })


      return client
    });
 

    Then(/^Hover on "(.*?)" in root categories$/,(category)=>{
      client.elements('css selector',ref.root_categories.selector, function(result){
        var categoryList = result.value;
        console.log("***********NUMBER OF ROOT CAT:- "+categoryList.length);
        for (let index = 0; index < categoryList.length; index++) {
          console.log("********INDEX:- "+ index);
          const element = categoryList[index];
          client.elementIdText(element.ELEMENT, function(result){
            console.log("********** root cat name:-"+result.value);
            if(result.value == category){
              client.moveTo(element.ELEMENT, 10, 10);
              // client.elementIdClick(element.ELEMENT);
              client.pause(1000);
              // break;
            }
          })
          
        }
      })

      return client
    });

    // client.elementIdText(element.ELEMENT, function(result){
    //   console.log("***********TEXT:-"+result.value);
    //   client.elementIdClick(element.ELEMENT );
    //   client.pause(2000);
    // })

Then (/^I click on "(.*?)" sub categories$/,(subCat)=>{

  client.pause(2000);
  client.elements('css selector','ul.show ul.cat-level2 a.dropdown-link', function(result){
    var subCatLinks = result.value;
    console.log("**************subCatLinks count:- "+ result.value.length);
      for (let index = 0; index < subCatLinks.length; index++) {
        const element = subCatLinks[index];
          client.elementIdText(element.ELEMENT, function(result){
            console.log("************ sub category links:- "+ result.value);
            if(result.value == subCat){
              client.elementIdClick(element.ELEMENT);
              client.pause(5000);
            }

          })
        
      }
  })
  return client
});


Then(/^Verify the increase and decrease functionality of quantity in PDP$/,()=>{
  var qty=1;
  for (let index = 0; index < 5; index++) {
    console.log("***********QTY:- "+ qty);
    
    client.assert.attributeContains(ref.pdp_selected_quantity_pdp.selector,'innerText',qty);

    client.click(ref.pdp_quantity_increase_link.selector);
    client.pause(2000);
    qty++;
    
  }
console.log("******DECREASE FUNCTIONALITY");
  for (let index = 0; index < 5; index++) {
    
    console.log("***********QTY:- "+ qty);
    client.assert.attributeContains(ref.pdp_selected_quantity_pdp.selector,'innerText',qty);
    client.click(ref.pdp_quantity_decrease_button.selector);
    client.pause(2000);
    qty--;

  }


  return client
});


Then(/^Select BOPIS store in (.*?)$/,(page)=>{
  if(page==='cart page'){
    console.log("********* CART PAGE CONDITION EXECUTING");
    client.click(ref.pdp_pickup_in_store_radio_button.selector);
  }
  client.pause(2000);
  client.setValue(ref.pdp_city_postal_code_textbox.selector, data.bopis_postcode);
  client.setValue(ref.pdp_radius_selectbox.selector, data.bopis_radius);
  client.click(ref.pdp_check_store_button.selector);
  client.pause(3000);
  // clickONBopisStors();
  client.click(ref.pdp_instock_store.selector);
  client.pause(2000);
  client.click(ref.pdp_select_store_button.selector);
  client.pause(5000);  
  if(page==='PDP'){
    console.log("********* PDP CONDITION EXECUTING");
    client.click(ref.pdp_pickup_in_store_radio_button.selector);
  }
    
  return client
})

  // e2e changes updated
Then(/^Select BOPIS "(.*?)" SFDEV2580 store in (.*?)$/,(store,page)=>{
  // if(page==='PDP'){
  //   console.log("********* PDP CONDITION EXECUTING");
  client.click(ref.pdp_pickup_in_store_radio_button.selector);
  // }
  client.pause(2000);
  client.setValue(ref.pdp_city_postal_code_textbox.selector, data.bopis_postcode);
  client.setValue(ref.pdp_radius_selectbox.selector, data.bopis_radius);
  client.click(ref.pdp_check_store_button.selector);
  client.pause(3000);
  client.click(ref.pdp_instock_store.selector);
  client.pause(2000);
  client.click(ref.pdp_select_store_button.selector);
  client.pause(5000);  

  // client.elements('css selector','div.available', function(result){
  //   var subStore = result.value;
  //   console.log("**************subStore count:- "+ result.value.length);
  //     for (let index = 0; index < subStore.length; index++) {
  //       const element = subStore[index];
  //         client.elementIdText(element.ELEMENT, function(result){
  //           console.log("************ sub category links:- "+ result.value);
  //           if(result.value === store){
  //             client.pause(5000);
  //             // client.moveToElement(ref.pdp_instock_store.selector,10,10)
  //             // client.elementIdClick(element.ELEMENT);
  //             client.click(ref.pdp_instock_store.selector);     
  //             client.pause(5000);
  //           }

  //         })
        
  //     }
  // })
  // // client.click(ref.pdp_instock_store.selector);
  // client.pause(5000);
  // client.click(ref.pdp_select_store_button.selector);
  // // client.pause(5000);
  return client
})

   function clickONBopisStors(){
     var inStockStore = false;
     client.elements('css selector', 'div.in-store-inventory-dialog div.store-result input', function(result){
       console.log("********** number of stors:- "+ result.value.length);
       for (let index = 0; index < result.value.length; index++) {
         const element = result.value[index];
         client.elementIdClick(element.ELEMENT);
        //  client.pause(1000);
        //  client.elementIdAttribute(element.ELEMENT,'data-store-info', function(result){
        //   console.log("*********** STORE Attribute:- "+result.value);
        //   if(result.value.includes('In Stock'))
        //     {
        //       console.log("********** FOUND IN-STOCK store**************");
        //       return true;
              
        //     }
        // })
       }
     })
   }


   Then(/^Update the product quantity to (\d+) in PDP$/,(quantity)=>{
    // client.clearValue(ref.pdp_quantity_box.selector);
    // client.setValue(ref.pdp_quantity_box.selector, quantity);
    // client.keys(data.tabKey);
    // pdp_quantity_increase_button
    for (let index = 1; index < quantity; index++) {
      client.pause(3000);
      client.click(ref.pdp_quantity_increase_button.selector);
      client.pause(3000);
      
    }
    client.pause(3000);
    return client
   });

//    Then(/^Verify brand name in search result page$/,()=>{
//       client.elements('css selector', ref.search_result_brandName.selector, function(result){
//         var elementsList = result.value;
//         var count = result.value.length;
//         console.log("****************Elements count :- "+count);
//         for (let i = 0; i < elementsList.length; i++) {
//             const element = elementsList[i];
//             client.elementIdText(element.ELEMENT, function(result){
//                 console.log("***********brand name:-"+result.value);
//             client.assert.equal(result.value,data.brandName)
//             })            
//         }
//     })  
//     return client  
// });

Then(/^Verify brand name in search result page$/,()=>{
  client.pause(3000);
  client.elements('css selector', ref.search_result_brandName.selector, function(result){
      var elementsList = result.value;
      var count = result.value.length;
      console.log("****************Elements count :- "+count);
      for (let index = 0; index < elementsList.length; index++) {
          const element = elementsList[index];
          client.elementIdText(element.ELEMENT, function(result){
            console.log("***********Brand Text loop:- "+index +" - "+result.value);
              client.assert.equal(result.value,data.brandName)
          })
          
      }
  })    
return client
});

Then(/^Click on product name in "(.*?)" section and verify the navigated pdp$/,(section)=>{
  switch(section){
    case 'recently viewed':
      element = ref.pdp_recently_viewed_product_name_link.selector;
      break;

     case 'you may alse like':
       element = ref.pdp_you_may_also_like_product_name_link.selector;
       break; 
  }

  client.getText(element, function(result){
    var proNameInRecSection = result.value;
    console.log("*********** PRODUCT NAME in CURREENT PAGE:- "+ proNameInRecSection);
    client.click(element);
      client.getText(ref.pdp_product_name.selector, function(result){
        console.log("********* PRODUCT NAME IN NAVIGATED PDP:-"+result.value);
        client.assert.equal(proNameInRecSection, result.value);
      })
  })
  
  return client
});


Then(/^Verify the newly opened storelocator tab$/,()=>{

        client.pause(2000);
        // Collect the window handels
        client.windowHandles(function(tabs){
          console.log("**** NUmber of tabs:- "+tabs.value.length); 
          client.assert.equal(tabs.value.length, 2);
         client.switchWindow(tabs.value[1]);
         client.pause(2000);

          try {
              // Verify the product name in PDP
              
              client.assert.containsText(ref.store_locator_heading.selector, 'Store Locator');
              //Close the new window
              client.closeWindow();
              client.pause(2000);
              //Switch to main window
              client.switchWindow(tabs.value[0]);
              console.log('*************** TRY BLOCK ENDED');
          } 
          catch (e){
            console.log("********** ERROR MESSAGE:- "+e);
            console.log('*************** CATCH BLOCK STARTED ***************');
              client.windowHandles(function(result){
              if(result.value===2)
                {
                  client.closeWindow();
                }
               //Switch to main window
              client.switchWindow(tabs.value[0]);
              client.assert.ok(false,"Failed to verify the store locator page");
            })
            console.log('*************** CATCH BLOCK STARTED ***************');
            // throw e;
          }

        })

  return client
});



Then(/^Click on Facebook link and verify the newly opened tab$/,()=>{

    client.click(ref.facebook.selector);
    var socialMedia = 'facebook.com';
    verifyNewWindow(socialMedia);


  return client
});

//e2e changes updated
Then(/^I am adding quantity$/,()=>{
  client.pause(2000);
  client.click(ref.pdp_quantity_increase_button.selector);
return client
});



Then(/^Click on Pinterest link and verify the newly opened tab$/,()=>{

  client.click(ref.pinterest.selector);
  var socialMedia = 'pinterest.com';
  verifyNewWindow(socialMedia);


return client
});

Then(/^Click on Instagram link and verify the newly opened tab$/,()=>{

  client.click(ref.instagram.selector);
  var socialMedia = 'instagram.com';
  verifyNewWindow(socialMedia);


return client
});

function verifyNewWindow(socialMedia){

  client.windowHandles(function(tabs){
    console.log("**** NUmber of tabs:- "+tabs.value.length); 
   client.switchWindow(tabs.value[1]);
   client.pause(2000);

    // Verify the product name in PDP
    client.url(function(result){
      console.log("****************URL:- "+ result.value);
      console.log('**************Social Media Type:- '+ socialMedia);
      if(!result.value.includes(socialMedia)){
        client.assert.ok(false);

      }
    })
    //Close the new window
    client.closeWindow();
    client.pause(2000);
    //Switch to main window
    client.switchWindow(tabs.value[0]);

  })
}

Then(/^Search "(.*?)" in designer filter and verify the search result$/,(designerName)=>{
var text;
  switch (designerName) {
    case 'designer name':
      text = data.designer_filter_search_keyword;
      break;
  
    default:
      break;
  }


  client.setValue(ref.search_result_page_designer_filter_search_box.selector,text);
  client.click(ref.search_result_page_designer_filter_search_icon.selector);
  client.pause(2000);
  client.assert.containsText(ref.search_result_page_designer_filter_search_result.selector, text);

  return client
});


Then(/^Collect the product name$/,()=>{

  
})

        // Then(/^I expand color filter in search result page$/, ()=>{
          
        // })
        

       


            // function verifyPriceIsWithinTheRange(min, max)
            // {
            //     client
            // }

      }
    }  