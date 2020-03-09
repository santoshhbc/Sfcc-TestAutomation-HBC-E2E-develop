const { client } = require('nightwatch-api');
const { Given, When, Then, run } = require('../../utility/helper')


module.exports = {
    main:
      function(data, ref) {

        When(/^I click on - "(.*)"$/, (action) => {
            var element;
            client.pause(200)
            switch(action) {
                
                case 'checkout shipping save and continue button':
                    element = ref.checkout_shipping_save_button.selector
                    break;
                    
                // e2e changes updated
                    case 'Add_new_shipping_address_in_checout_page':
                        element = ref.checkout_shipping_add_new_address_link.selector
                        break;

                case 'checkout save shipping address button':
                    element = ref.checkout_save_shipping_address_button.selector
                    break;    
                
                case 'checkout payment section save and continue button':
                    element = ref.checkout_billing_payment_save_and_continue_button.selector
                    break;
                case 'checkout place order button':
                    element = ref.checkout_place_order_button.selector
                    break;
                case 'order confirmation create account button':
                    element = ref.order_confirmation_page_create_account_button.selector
                    break;    

                case 'different billing address checkbox':
                    element = ref.checkout_different_billing_address_checkbox.selector
                    break;

                case 'edit payment link in checkout order review':
                    element = ref.checkout_edit_payment_link.selector
                    break;

                case 'paypal radio button':
                    element = ref.checkout_paypal_radio_button.selector
                    break; 
                
                case 'credit card radio button':
                    element = ref.checkout_credit_card_radio_button.selector
                    break;
                    
                case 'add gift card label':
                    element = ref.checkout_giftcard_label.selector
                    break;  
                //e2e changes updated
                case 'add gift card button':
                    element = ref.checkout_add_giftcard.selector
                    break;
                 
                case 'giftcard apply button':
                    element = ref.checkout_gift_card_apply_button.selector
                    break;

                case 'add new shipping address link':
                    element = ref.checkout_shipping_add_new_address_link.selector
                    break;    

                case 'apply promo code link':
                    element = ref.apply_promo_code_link.selector
                    break;
                case 'apply promo code button':
                    element = ref.promo_code_apply_button_in_checkout.selector
                    break;
                    // e2e chages
                case 'click promo code button':
                    element = ref.collapsed_promo_code_section_in_checkout.selector
                    break;
                case 'add billing address link in checkout':
                    element = ref.checkout_add_new_billing_address_link.selector
                    break;  
                    
                case 'edit shipping address link in checkout':
                    element = ref.checkout_shipping_address_edit_link.selector
                    break;

                case 'checkout change link in shipping address section':
                    element = ref.order_review_change_shipping_address_link.selector    
                    break;

                case 'cancel button in checkout shipping address section':
                    element = ref.checkout_shipping_address_cancel_button.selector
                    break;

                case 'Continue Shopping button in order confirmation page':
                    element = ref.order_confirmation_page_continue_shopping_button.selector
                    break;   
                    
                case 'back to cart link in checkout page':
                    element = ref.checkout_back_to_cart_link.selector
                    break;

                case 'Checkout edit shopping bag link':
                    element = ref.order_review_edit_cart_link.selector
                    break;    

                case 'checkout add new credit card link':
                    element= ref.checkout_add_credit_card_link.selector
                    break;    

                case 'checkout shipping instore pickup save and continue button':
                    element=ref.checkout_shipping_instore_pickup_save_and_continue_button.selector
                    break;

                case 'set as default address checkbox in checkout shipping section':
                    element = ref.checkout_sipping_set_as_default_address_checkbox.selector
                    break;    

// ********************************** MY ACCOUNT ********************
                case 'view link in order history page':
                    element = ref.order_history_view_link.selector
                    break;
                
                    case 'Click X on bag':
                        element = ref.cart_remove_product_link.selector
                        break;
                    
                    case 'Click + on bag':
                        element = ref.cart_increase_link.selector
                        break;
                    
                    case 'Click - on bag':
                        element = ref.cart_decrease_link.selector
                        break;


                
                //MINIBAG
                case 'MINIBAG CHECKOUT BUTTON' :
                    element = ref.minicart_checkout_btn_css.selector
                    break;
                case 'MINIBAG HEADER BUTTON' :
                    element = ref.minicart_headerbag_css.selector
                    break;
                    
                    case 'Add new payment method' :
                        element = ref.myaccount_payment_page_add_new_payment_link.selector
                        break;
                    
                    case 'Payment Save button' :
                        element = ref.myaccount_payment_page_save_button.selector
                        break;
                    
                    case 'Payment make default':
                        element = ref.payment_make_default_link.selector
                        break;
                    
                    case 'Payment Delete link':
                        element = ref.delete_link_in_my_account_payment_page.selector
                        break;
                    
                    case 'Payment cancel button':
                        element = ref.payment_delete_cancel_button.selector
                        break;
                    
                    case 'Payment delete button':
                        element = ref.payment_delete_yes_button.selector
                        break;
                    
                    case 'Add new address link':
                        element = ref.address_book_add_address_link.selector
                        break;
               
            }
            console.log(element);
            client.waitForElementVisible(element, 20000);
            /* Check to see that element is visible before clicking */
            run('Then I should see ' + element);
            client
            .click(element, function(result) {
                if (result.status === -1) {
                    console.log('Click failed! Retrying...')
                    client
                    .pause(data.timeout_min)
                    .waitForElementVisible(element, data.timeout_max)
                    .moveToElement(element, 100, 100)
                    .click(element, function(result) {
                        if (result.status === -1) {
                        throw new Error('Failed to click again!')
                        console.log(result)
                        }
                    })
                }
            })
            client.pause(2000);
            return client
        })
          


        Then(/^I add "(.*?)" to bag$/, (action) => {
            client.pause(200)
            var productId;
            switch(action) {
                case 'product-1' :
                    productId = data.product_ID_item1;
                    addItemToBag(productId);
                    run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item1}"`)
                    break;

                    case 'product-2' :
                            productId = data.product_ID_item2;
                            addItemToBag(productId);
                            run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item2}"`)
                            break;

                    case 'promo product-1' :
                        productId = data.promo_product_ID_item1;
                        addItemToBag(productId);
                        run(`Then this ${ref.minicart_product_name.selector} should say "${data.promo_product_name_item1}"`)
                        break;

                    case 'promo product-2' :
                        productId = data.promo_product_ID_item2;
                        addItemToBag(productId);
                        run(`Then this ${ref.minicart_product_name.selector} should say "${data.promo_product_name_item2}"`)
                        break;

                case 'Gift Card Product':
                        productId = data.gift_card_product_id;
                        addItemToBag(productId);
                        // run(`Then this ${ref.minicart_product_name.selector} should say "${data.gift_card_product_name}"`)
                        break;                  

                    case 'product with less price' :
                            productId = data.product_ID_with_less_price;
                            addItemToBag(productId);
                            run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_with_less_price}"`)
                            break;

                    case 'BOPIs product':
                        productId = data.bopis_product_category;
                        addItemToBag(productId);
                        run(`Then this ${ref.minicart_product_name.selector} should say "${data.bopis_product_name}"`)
                        break;   
                
                case 'gwp-Product' :
                    productId = data.gwp_product;
                    addItemToBag(productId);
                    run(`Then this ${ref.minicart_product_name.selector} should say "${data.gwp_product_name}"`)
                    break;
                case 'Bogo-promo-product' :
                    productId = data.bogo_promo_product;
                    addItemToBag(productId);
                    run(`Then this ${ref.minicart_product_name.selector} should say "${data.bogo_promo_product}"`)
                    break
                case 'product-9' :
                    productId = data.product_ID_item9;
                    addItemToBag(productId);
                    run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item9}"`)
                    break;
                case 'product-12' :
                    productId = data.product_ID_item12;
                    addItemToBag(productId);
                    run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item12}"`)
                    break;

                    case 'free product' :
                        productId = '90796464';
                        addItemToBag(productId);
                        break;

                case 'endtoend-bopis-item1' :
                    productId = data.endtoend_bopis_product1;
                    addItemToBag(productId);
                    break;

                case 'endtoend-bopis-item2' :
                    productId = data.endtoend_bopis_product1;
                    addItemToBag(productId);
                    break;
                //     // e2e changes updated  for no size items/colour
                // case  'Product with No Size' :
                //         productId="mobile";
                //         addItemWithNoSizeToBag(productId);
                //         break;
                    
                     // e2e changes updated
                case 'Product1 New Data 4582' :
                    productId = data.Product1_SFDEV4582;
                    addItemToBagNewProduct1SFDEV4582(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2597' :
                    productId = data.Product1_SFDEV2597;
                    addItemToBagNewProduct1SFDEV2597(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2641' :
                    productId = data.Product1_SFDEV2641;
                    addItemToBagNewProduct1SFDEV2641(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 2641' :
                    productId = data.Product2_SFDEV2641;
                    addItemToBagNewProduct2SFDEV2641(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2563' :
                    productId = data.Product1_SFDEV2563;
                    addItemToBagNewProduct1SFDEV2563(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 2563' :
                    productId = data.Product2_SFDEV2563;
                    addItemToBagNewProduct2SFDEV2563(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2629' :
                    productId = data.Product1_SFDEV2629;
                    addItemToBagNewProduct1SFDEV2629(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 2629' :
                    productId = data.Product2_SFDEV2629;
                    addItemToBagNewProduct2SFDEV2629(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2630' :
                    productId = data.Product1_SFDEV2630;
                    addItemToBagNewProduct1SFDEV2630(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 3306' :
                    productId = data.Product1_SFDEV3306;
                    addItemToBagNewProduct1SFDEV3306(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 3306' :
                    productId = data.Product2_SFDEV3306;
                    addItemToBagNewProduct2SFDEV3306(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2646' :
                    productId = data.Product1_SFDEV2646;
                    addItemToBagNewProduct1SFDEV2646(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2632' :
                    productId = data.Product1_SFDEV2632;
                    addItemToBagNewProduct1SFDEV2632(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 2632' :
                    productId = data.Product2_SFDEV2632;
                    addItemToBagNewProduct2SFDEV2632(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2656' :
                    productId = data.Product1_SFDEV2656;
                    addItemToBagNewProduct1SFDEV2656(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 2656' :
                    productId = data.Product2_SFDEV2656;
                    addItemToBagNewProduct2SFDEV2656(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 4589' :
                    productId = data.Product1_SFDEV4589;
                    addItemToBagNewProduct1SFDEV4589(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 4589' :
                    productId = data.Product2_SFDEV4589;
                    addItemToBagNewProduct2SFDEV4589(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2590' :
                    productId = data.Product1_SFDEV2590;
                    addItemToBagNewProduct1SFDEV2590(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2591' :
                    productId = data.Product1_SFDEV2591;
                    addItemToBagNewProduct1SFDEV2591(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2588' :
                    productId = data.Product1_SFDEV2588;
                    addItemToBagNewProduct1SFDEV2588(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2624' :
                    productId = data.Product1_SFDEV2624;
                    addItemToBagNewProduct1SFDEV2624(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 4582' :
                    productId = data.Product2_SFDEV4582;
                    addItemToBagNewProduct2SFDEV4582(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2640' :
                    productId = data.Product1_SFDEV2640;
                    addItemToBagNewProduct1SFDEV2640(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 2640' :
                    productId = data.Product2_SFDEV2640;
                    addItemToBagNewProduct2SFDEV2640(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2598' :
                    productId = data.Product1_SFDEV2598;
                    addItemToBagNewProduct1SFDEV2598(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2594' :
                    productId = data.Product1_SFDEV2594;
                    addItemToBagNewProduct1SFDEV2594(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2582' :
                    productId = data.Product1_SFDEV2582;
                    addItemToBagNewProduct1SFDEV2582(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2634' :
                    productId = data.Product1_SFDEV2634;
                    addItemToBagNewProduct1SFDEV2634(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2651' :
                    productId = data.Product1_SFDEV2651;
                    addItemToBagNewProduct1SFDEV2651(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 2651' :
                    productId = data.Product2_SFDEV2651;
                    addItemToBagNewProduct2SFDEV2651(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2583' :
                    productId = data.Product1_SFDEV2583;
                    addItemToBagNewProduct1SFDEV2583(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2584' :
                    productId = data.Product1_SFDEV2584;
                    addItemToBagNewProduct1SFDEV2584(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2585' :
                    productId = data.Product1_SFDEV2585;
                    addItemToBagNewProduct1SFDEV2585(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2595' :
                    productId = data.Product1_SFDEV2595;
                    addItemToBagNewProduct1SFDEV2595(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 2595' :
                    productId = data.Product2_SFDEV2595;
                    addItemToBagNewProduct2SFDEV2595(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2596' :
                    productId = data.Product1_SFDEV2596;
                    addItemToBagNewProduct1SFDEV2596(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 2596' :
                    productId = data.Product2_SFDEV2596;
                    addItemToBagNewProduct2SFDEV2596(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2638' :
                    productId = data.Product1_SFDEV2638;
                    addItemToBagNewProduct1SFDEV2638(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 2638' :
                    productId = data.Product2_SFDEV2638;
                    addItemToBagNewProduct2SFDEV2638(productId);
                    break;
                    // e2e changes updated
                case 'Product1 New Data 2642' :
                    productId = data.Product1_SFDEV2642;
                    addItemToBagNewProduct1SFDEV2642(productId);
                    break;
                    // e2e changes updated
                case 'Product2 New Data 2642' :
                    productId = data.Product2_SFDEV2642;
                    addItemToBagNewProduct2SFDEV2642(productId);
                    break;
                
                    // e2e changes updated
                case 'BOPIS Item1 SFDEV-4582' :
                    productId = data.BOPIS_Item1_SFDEV4582;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated
                case 'BOPIS Item2 SFDEV-4582' :
                    productId = data.BOPIS_Item2_SFDEV4582;
                    addItemToBagSFDEV4582(productId);
                    break;
                    // e2e changes updated
                case 'BOPIS Item2 SFDEV-2595' :
                    productId = data.BOPIS_Item2_SFDEV2595;
                    addItemToBagSFDEV4582(productId);
                    break;
                     // e2e changes updated
                case 'BOPIS Item1 SFDEV-2580' :
                    productId = data.BOPIS_Item1_SFDEV2580;
                    addItemToBag1SFDEV2580(productId);
                    break;
                    // e2e changes updated
                case 'BOPIS Item2 SFDEV-2580' :
                    productId = data.BOPIS_Item2_SFDEV2580;
                    addItemToBag2SFDEV2580(productId);
                    break;
                   // e2e changes updated
                case 'BOPIS Item1 SFDEV-2594' :
                    productId = data.BOPIS_Item1_SFDEV2594;
                    addItemToBag1SFDEV2580(productId);
                    break;
                    // e2e changes updated
                case 'Product with less15$' :
                        productId = data.item1_SFDEV2620;
                        addItemToBag(productId);
                        break;
                    // e2e changes updated
                case 'Product2 SFDEV-2620' :
                    productId = data.item2_SFDEV2620;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated
                case 'Product1 SFDEV-2585' :
                    productId = data.item1_SFDEV2585;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated
                case 'Product1 SFDEV-2582' :
                    productId = data.item1_SFDEV2582;
                    addItemToBagS2582(productId);
                    break;
                    // e2e changes updated
                case 'Product1 SFDEV-2623' :
                    productId = data.item1_SFDEV2623;
                    addItemToBagSFDEV4582(productId);
                    break;
                    // e2e changes updated
                case 'Product3 SFDEV-2623' :
                    productId = data.BOPIS_Item2_SFDEV4582;
                    addItemToBagSFDEV2623(productId);
                    break;
                    // e2e changes updated
                case 'Product2 SFDEV-2623' :
                    productId = data.item1_SFDEV2623;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated
                case 'Product1 SFDEV-2625' :
                    productId = data.item1_SFDEV2625;
                    addItemToBagSFDEV4582(productId);
                    break;
                    // e2e changes updated
                case 'Product2 SFDEV-2625' :
                    productId = data.item2_SFDEV2625;
                    addItemToBagSFDEV4582(productId);
                    break;
                     // e2e changes updated
                case 'Product3 SFDEV-2620' :
                    productId = data.item3_SFDEV2620;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated
                case 'Product1 SFDEV-2635' :
                    productId = data.item1_SFDEV2635;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated
                case 'Product1 SFDEV-2643' :
                    productId = data.item1_SFDEV2643;
                    add6monthsItemToBag(productId);
                    break;
                    // e2e changes updated
                case 'Product with eco fee' :
                        productId = '86225724';
                        addecofeeItemToBag(productId);
                        break;
                   // e2e changes updated     
                case 'Product workaround' :
                            productId = '0600091278097';
                            addecofeeItemToBag(productId);
                            break;
                // e2e changes updated     
                case 'Product SFDEV-2634' :
                    productId = data.item_SFDEV2634;
                    addItemToBag(productId);
                    break;
                // e2e changes updated     
                case 'Product SFDEV-2652' :
                    productId = data.Green_SFDEV2652;
                    addItemToBag(productId);
                    break;    
                // e2e changes updated     
                case 'Product1 SFDEV-4586' :
                    productId = data.item1_SFDEV4586;
                    addItemToBag(productId);
                    break;
                // e2e changes updated     
                case 'Product2 SFDEV-4586' :
                    productId = data.item2_SFDEV4586;
                    addItemToBag(productId);
                    break;
                // e2e changes updated     
                case 'Product2 SFDEV-2561' :
                    productId = data.item2_SFDEV2561;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated     
                case 'Product3 SFDEV-2561' :
                    productId = data.item3_SFDEV2561;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated     
                case 'Product1 SFDEV-4585' :
                    productId = data.item1_SFDEV4585;
                    addItemToBag(productId);
                    break;
                // e2e changes updated     
                case 'Product2 SFDEV-4585' :
                    productId = data.item2_SFDEV4585;
                    addItemToBag(productId);
                    break;
                // e2e changes updated     
                case 'Product2 SFDEV-3227' :
                    productId = data.item2_SFDEV3227;
                    addItemToBag(productId);
                    break;
                // e2e changes updated     
                case 'Product1 SFDEV-3307' :
                    productId = data.item1_SFDEV3307;
                    addItemToBag(productId);
                    break;
                   // e2e changes updated          
                case 'Product SFDEV-2618' :
                    productId = data.item1_SFDEV2618;
                    addItemToBag(productId);
                    break;
                   // e2e changes updated          
                case 'Product SFDEV-2617' :
                    productId = data.item1_SFDEV2617;
                    add9monthsItemToBag(productId);
                    break; 
                  // e2e changes updated          
                case 'Product1 SFDEV-3813' :
                    productId = data.item1_SFDEV3813;
                    addItemToBag(productId);
                    break; 
                // e2e changes updated          
                case 'Product1 SFDEV-3308' :
                    productId = data.item1_SFDEV3308;
                    add6monthsItemToBag(productId);
                    break; 
                // e2e changes updated          
                case 'Product2 SFDEV-3308' :
                    productId = data.item2_SFDEV3308;
                    addItemToBag(productId);
                    break; 
                  // e2e changes updated          
                case 'Product1 SFDEV-2616' :
                    productId = data.item1_SFDEV2616;
                    addItemToBag1SFDEV2616(productId);
                    break;  
                 // e2e changes updated
                case 'Product2 SFDEV-2616' :
                    productId = data.item2_SFDEV2616;
                    addItemToBag2SFDEV2616(productId);
                    break; 
                // e2e changes updated
                case 'Product2 SFDEV-3751' :
                    productId = data.item2_SFDEV3751;
                    addeItemToBagSFDEV2559(productId);
                    break; 
                // e2e changes updated
                case 'Product2 SFDEV-2584' :
                    productId = data.item2_SFDEV2584;
                    addItemToBag(productId);
                    break; 
                // e2e changes updated          
                case 'Product1 SFDEV-4581' :
                    productId = data.item1_SFDEV4581;
                    addItemToBagWithColorAndSize(productId);
                    break;  
                 // e2e changes updated
                case 'Product2 SFDEV-4581' :
                    productId = data.item2_SFDEV4581;
                    addItemToBagSFDEV4582(productId);
                    break; 
                // e2e changes updated
                case 'Product2 SFDEV-4588' :
                    productId = data.BOGO_SFDEV4588;
                    addeItemToBagSFDEV4588(productId);
                    break;   
                // e2e changes updated          
                    case 'Product SFDEV-2644' :
                    productId = data.SFDEV2644;
                    add6monthsItemToBag(productId);
                    break;  
                      // e2e changes updated
                case 'Product1 SFDEV-2661' :
                    productId = data.item1_SFDEV2661;
                    addItemToBag(productId);
                    break;
                      // e2e changes updated
                case 'Product2 SFDEV-2661' :
                    productId = data.item2_SFDEV2661;
                    add6monthsItemToBag(productId);
                    break; 
                    
                case 'Product1 SFDEV-2642' :
                    productId = data.Red_SFDEV2642;
                    addItemToBagWithColorRed(productId);
                    break; 

                    // e2e changes updated          
                case 'Product2 SFDEV-2642' :
                    productId = data.Green_SFDEV2642;
                    addItemToBagWithColorGreen(productId);
                    break; 
                     // e2e changes updated          
                case 'Product1 New Data 2633' :
                    productId = data.Product1_SFDEV2633;
                    addItemToBagNewProduct1SFDEV2633(productId);
                    break;
                    // e2e changes updated          
                case 'Product2 New Data 2633' :
                    productId = data.Product2_SFDEV2633;
                    addItemToBagNewProduct2SFDEV2633(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 3817' :
                    productId = data.Product1_SFDEV3817;
                    addItemToBagNewProduct1SFDEV3817(productId);
                    break;
                    // e2e changes updated          
                case 'Product2 New Data 3817' :
                    productId = data.Product2_SFDEV3817;
                    addItemToBagNewProduct2SFDEV3817(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 3751' :
                    productId = data.Product1_SFDEV3751;
                    addItemToBagNewProduct1SFDEV3751(productId);
                    break;
                    // e2e changes updated          
                case 'Product2 New Data 3751' :
                    productId = data.Product2_SFDEV3751;
                    addItemToBagNewProduct2SFDEV3751(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 2625' :
                    productId = data.Product1_SFDEV2625;
                    addItemToBagNewProduct1SFDEV2625(productId);
                    break;
                    // e2e changes updated          
                case 'Product2 New Data 2625' :
                    productId = data.Product2_SFDEV2625;
                    addItemToBagNewProduct2SFDEV2625(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 2623' :
                    productId = data.Product1_SFDEV2623;
                    addItemToBagNewProduct1SFDEV2623(productId);
                    break;
                    // e2e changes updated          
                case 'Product2 New Data 2623' :
                    productId = data.Product2_SFDEV2623;
                    addItemToBagNewProduct2SFDEV2623(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 2619' :
                    productId = data.Product1_SFDEV2619;
                    addItemToBagNewProduct1SFDEV2619(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 2617' :
                    productId = data.Product1_SFDEV2617;
                    addItemToBagNewProduct1SFDEV2617(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 2616' :
                    productId = data.Product1_SFDEV2616;
                    addItemToBagNewProduct1SFDEV2616(productId);
                    break;
                    // e2e changes updated          
                case 'Product2 New Data 2616' :
                    productId = data.Product2_SFDEV2616;
                    addItemToBagNewProduct2SFDEV2616(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 2580' :
                    productId = data.Product1_SFDEV2580;
                    addItemToBagNewProduct1SFDEV2580(productId);
                    break;
                    // e2e changes updated          
                case 'Product2 New Data 2580' :
                    productId = data.Product2_SFDEV2580;
                    addItemToBagNewProduct2SFDEV2580(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 2560' :
                    productId = data.Product1_SFDEV2560;
                    addItemToBagNewProduct1SFDEV2560(productId);
                    break;
                    // e2e changes updated          
                case 'Product2 New Data 2560' :
                    productId = data.Product2_SFDEV2560;
                    addItemToBagNewProduct2SFDEV2560(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 2566' :
                    productId = data.Product1_SFDEV2566;
                    addItemToBagNewProduct1SFDEV2566(productId);
                    break;
                    // e2e changes updated          
                case 'Product2 New Data 2566' :
                    productId = data.Product2_SFDEV2566;
                    addItemToBagNewProduct2SFDEV2566(productId);
                    break;
                    // e2e changes updated          
                case 'Product3 New Data 2566' :
                    productId = data.Product3_SFDEV2566;
                    addItemToBagNewProduct3SFDEV2566(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 2644' :
                    productId = data.Product1_SFDEV2644;
                    addItemToBagNewProduct1SFDEV2644(productId);
                    break;
                    // e2e changes updated          
                case 'Product2 New Data 2644' :
                    productId = data.Product2_SFDEV2644;
                    addItemToBagNewProduct2SFDEV2644(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 2643' :
                    productId = data.Product1_SFDEV2643;
                    addItemToBagNewProduct1SFDEV2643(productId);
                    break;
                     // e2e changes updated          
                case 'Product1 New Data 2592' :
                    productId = data.Product1_SFDEV2592;
                    addItemToBagNewProduct1SFDEV2592(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 New Data 2589' :
                    productId = data.Product1_SFDEV2589;
                    addItemToBagNewProduct1SFDEV2589(productId);
                    break;
                    // e2e changes updated          
                case 'Product1 SFDEV-3817' :
                    productId = data.item1_SFDEV3817;
                    addItemToBagSFDEV4582(productId);
                    break;
                       // e2e changes updated          
                case 'Product2 SFDEV-3817' :
                    productId = data.item2_SFDEV3817;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated
                case 'Product1 SFDEV-2596' :
                    productId = data.item1_SFDEV2596;
                    addItemToBagWithColorBlack(productId);
                    break;
                    // e2e changes updated
                case 'Product1 SFDEV-2651' :
                    productId = data.item1_SFDEV2651;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated
                case 'Product2 SFDEV-2651' :
                    productId = data.item2_SFDEV2651;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated
                case 'Product2 SFDEV-2637' :
                    productId = data.item2_SFDEV2637;
                    addItemToBagWithColorSFDEV2562(productId);
                    break;
                    // e2e changes updated
                case 'Product3 SFDEV-2637' :
                    productId = data.item3_SFDEV2637;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated
                case 'Product4 SFDEV-2637' :
                    productId = data.item4_SFDEV2637;
                    addItemToBagWithColorAndSize(productId);
                    break;
                    // e2e changes updated          
                case 'Product3 SFDEV-3817' :
                    productId = data.item3_SFDEV3817;
                    addItemToBag(productId);
                    break;
                    // e2e changes updated          
                case 'Product SFDEV-2657' :
                    productId = data.item1_SFDEV2657;
                    addItemToBagWithColorblue(productId);
                    break;   
                    // e2e changes updated          
                case 'Product SFDEV-2562' :
                    productId = data.item1_SFDEV2562;
                    addItemToBagWithColorSFDEV2562(productId);
                    break;  
                    // e2e changes updated          
                case 'Product1 SFDEV-2559' :
                    productId = data.item1_SFDEV2559;
                    addeItemToBagSFDEV2559(productId);
                    break;  
                    // e2e changes updated          
                case 'Product1 SFDEV-3756' :
                    productId = data.item1_SFDEV3756;
                    addItemToBag(productId);
                    break;  
            }
            return client
        });

        function addItemToBag(productId) {
            client
            // .waitForElementVisible(ref.header_search_box.selector,data.timeout_max)
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            //if product has color
            // client.waitForElementNotVisible(ref.pdp_selectable_color_swatch.selector, 60000, false, function(result) {  // color css selector
            //     console.log("****************COLOR result.status:- "+ result.status);
            //     if (result.status === 0){
            //         console.log("**************** IF condition COLOR result.status:- "+ result.status);
            //         client
            //         .click(ref.pdp_selectable_color_swatch.selector) //select color
            //     }
            // })
            // client.pause(2000);
            // // if product has size
            // client.waitForElementNotPresent(ref.pdp_selected_size.selector, 60000, false, function(result) {  // size css selector
            //     console.log("**************** SIZE result.status:- "+ result.status);
            //     if (result.status === 0){
            //         console.log("****************if condition SIZE result.status:- "+ result.status);
            //         client
            //         .click(ref.pdp_size_links.selector) //select color
            //         .pause(2000)
            //     }
            // });
            // client.execute('document.getElementById(ref.pdp_add_to_cart_button.selector).scrollIntoView()');
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2616(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2580(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2580(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2560(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2560(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_item_size_available.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2646(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV3306(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_item_size_available.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV3306(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_size_6_Months_selection.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2629(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_size_6_Months_selection.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2629(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_size_3_Months_selection.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
         //e2e changes updated
         function addItemToBagNewProduct1SFDEV2592(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_item_size_available.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2589(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2566(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2566(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_item_size_available.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct3SFDEV2566(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_color_red_selection.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2630(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_color_red_selection.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2596(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2596(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_size_6_Months_selection.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV4589(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_size_6_Months_selection.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV4589(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }

        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2598(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_size_6_Months_selection.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2594(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_size_6_Months_selection.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2582(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {   client.pause(3000);
                client.click(ref.search_result_page_product_link.selector);
                client.pause(1000);
                client.click(ref.pdp_size_large_selection.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
         //e2e changes updated
         function addItemToBagNewProduct1SFDEV2634(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {   client.pause(3000);
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2651(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {   client.pause(3000);
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2651(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {   client.pause(3000);
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
         //e2e changes updated
         function addItemToBagNewProduct1SFDEV2583(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2584(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2585(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2595(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_item_size_available.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
         //e2e changes updated
         function addItemToBagNewProduct2SFDEV2595(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2638(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2638(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2640(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2640(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_color_red_selection.selector);
                client.pause(1000);
                client.click(ref.pdp_size_large_selection.selector);
                client.pause(2000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2642(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_color_red_selection.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2642(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_color_green_selection.selector);
                client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2643(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2644(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2644(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2616(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV4582(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2597(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.pause(1000);
               client.click(ref.search_result_page_product_link.selector);
               client.pause(3000);
               client.click(ref.pdp_size_18_24_Months_selection.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2563(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
         //e2e changes updated
         function addItemToBagNewProduct2SFDEV2563(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2632(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
         //e2e changes updated
         function addItemToBagNewProduct2SFDEV2632(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2656(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2656(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2590(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
         //e2e changes updated
         function addItemToBagNewProduct1SFDEV2588(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2591(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
         //e2e changes updated
         function addItemToBagNewProduct1SFDEV2624(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV4582(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_item_size_available.selector);
                client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2633(productId) {
            client
                .setValue(ref.header_search_box.selector, productId)
                .click(ref.header_searchBar_button.selector) // search bar submit
                .isVisible(ref.search_result_page_product_link.selector, function(result)
                {
                    client.click(ref.search_result_page_product_link.selector);
                    client.pause(4000);
                    client.click(ref.pdp_color_black_selection.selector);
                    client.pause(4000);
                    client.click(ref.pdp_item_size_available.selector);
                    client.pause(1000);
        
                });
                run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
                run('Then I scroll down')
                client.pause(2000);
                client.click(ref.pdp_add_to_bag); // add to cart click using xpath
                client.pause(1000);
                run('And I should see ' + ref.minicart_product_name.selector);
                return client
            }
         //e2e changes updated
         function addItemToBagNewProduct2SFDEV2633(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_item_size_available.selector);
                client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV3817(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(2000);
                client.click(ref.pdp_item_size_available.selector);
                client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
         //e2e changes updated
         function addItemToBagNewProduct2SFDEV3817(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV3751(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV3751(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(4000);
               client.click(ref.pdp_color_black_selection.selector);
               client.pause(4000);
               client.click(ref.pdp_size_6_Months_selection.selector);
               client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2641(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(4000);
               client.click(ref.pdp_color_black_selection.selector);
               client.pause(4000);
               client.click(ref.pdp_size_large_selection.selector);
               client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
         //e2e changes updated
         function addItemToBagNewProduct2SFDEV2641(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(4000);
               client.click(ref.pdp_size_large_selection.selector);
               client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2625(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(4000);
               client.click(ref.pdp_size_6_Months_selection.selector);
               client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2623(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(4000);
               client.click(ref.pdp_size_6_Months_selection.selector);
               client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2619(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(4000);
               client.click(ref.pdp_size_6_Months_selection.selector);
               client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct1SFDEV2617(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(4000);
               client.click(ref.pdp_size_9_Months_selection.selector);
               client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2623(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(4000);
               client.click(ref.pdp_size_6_Months_selection.selector);
               client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagNewProduct2SFDEV2625(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(4000);
               client.click(ref.pdp_size_6_Months_selection.selector);
               client.pause(1000);

            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes eco fee
        function addecofeeItemToBag(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(2000);
               client.click(ref.pdp_color_dropdown_button.selector);
               client.pause(5000);
               client.click(ref.pdp_color_dropdown_data_selection.selector);
               client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes eco fee
        function addItemToBagS2582(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(2000);
               client.click(ref.pdp_color_dropdown_button.selector);
               client.pause(5000);
               client.click(ref.pdp_color_dropdown_S2582.selector);
               client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addeItemToBagSFDEV4588(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(4000);
               client.click(ref.pdp_color_dropdown_button.selector);
               client.pause(4000);
               client.click(ref.pdp_color_selection_red.selector);
               client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }

        //e2e changes updated
        function addeItemToBagSFDEV2559(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(4000);
               client.click(ref.pdp_color_black_selection.selector);
               client.pause(4000);
               client.click(ref.pdp_size_6_Months_selection.selector);
               client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }

        //e2e changes updated
        function addItemToBagWithColorBlack(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(3000);
               client.click(ref.pdp_color_black_selection.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagWithColorSFDEV2562(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(3000);
               client.click(ref.pdp_color_black_selection_s2562.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }

        //e2e changes updated  - red without dropdown
        function addItemToBagWithColorRed(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(3000);
               client.click(ref.pdp_color_red_selection.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBagWithColorGreen(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(3000);
               client.click(ref.pdp_color_green_selection.selector);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }

        //e2e changes with 9 momths
        function add9monthsItemToBag(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(2000);
               client.click(ref.pdp_size_9_Months_selection.selector);
               client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes with 9to24 months
        function add9to24monthsItemToBag(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(2000);
               client.click(ref.pdp_size_9_Months_selection.selector);
               client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes 
        function addItemToBagSFDEV4582(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(2000);
               client.click(ref.pdp_item_size_available.selector);
               client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes 
        function addItemToBagSFDEV2623(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(2000);
               client.click(ref.pdp_item_size_available.selector);
               client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }

        //e2e changes with 6 momths
        function add6monthsItemToBag(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(5000);
               client.click(ref.pdp_size_6_Months_selection.selector);
               client.pause(1000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }

        //e2e changes updated
        function addItemToBag1SFDEV2616(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(2000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated
        function addItemToBag1SFDEV2580(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(4000);
            });
                run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
                run('Then I scroll down')
                client.pause(2000);
                client.click(ref.pdp_add_to_bag); // add to cart click using xpath
                client.pause(1000);
                run('And I should see ' + ref.minicart_product_name.selector);
                return client
                }     
        //e2e changes updated
        function addItemToBag2SFDEV2580(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
                client.click(ref.search_result_page_product_link.selector);
                client.pause(4000);
            });
                run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
                run('Then I scroll down')
                client.pause(2000);
                client.click(ref.pdp_add_to_bag); // add to cart click using xpath
                client.pause(1000);
                run('And I should see ' + ref.minicart_product_name.selector);
                return client
                }
        //e2e changes updated
        function addItemToBag2SFDEV2616(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(2000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated  - Default blue without dropdown
        function addItemToBagWithColorblue(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(3000);
               client.click(ref.pdp_color_blue_selection.selector);
               client.pause(3000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }
        //e2e changes updated  
        function addItemToBagWithColorAndSize(productId) {
            client
            .setValue(ref.header_search_box.selector, productId)
            .click(ref.header_searchBar_button.selector) // search bar submit
            .isVisible(ref.search_result_page_product_link.selector, function(result)
            {
               client.click(ref.search_result_page_product_link.selector);
               client.pause(3000);
               client.click(ref.pdp_color_blue_selection.selector);
               client.pause(3000);
               client.click(ref.pdp_size_6_Months_selection.selector);
               client.pause(3000);
            });
            run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
            run('Then I scroll down')
            client.pause(2000);
            client.click(ref.pdp_add_to_bag); // add to cart click using xpath
            client.pause(1000);
            run('And I should see ' + ref.minicart_product_name.selector);
            return client
        }

        // // e2e changes updated  for no size items/colour
        // function addItemWithNoSizeToBag(productId) {
        //     client
        //     .setValue(ref.header_search_box.selector, productId)
        //     .click(ref.header_searchBar_button.selector)
        //     client.pause(2000);
        //      // search bar submit
        //      client
        //     .moveToElement(ref.search_result_page_product_name_nosize.selector,10,10)
        //     .click(ref.pa_tile_add_to_bag.selector)
        //     return client
        // }
        //e2e changes updated
//          Then(/^I am adding color$/,()=>{
//            client.pause(2000);
//            client.click(ref.pdp_color_dropdown_button.selector);
//            client.pause(2000);
//            client.click(ref.pdp_color_dropdown_data_selection.selector);
//            client.pause(1000);
  
//   return client
//   });

            Then(/^I add "(.*?)" to wishlist$/, (action) => {
                client.pause(200)
                var productId;
                switch(action) {
                    case 'product-1' :
                        productId = data.product_ID_item1;
                        addItemToWishList(productId);
                        break;
    
                        case 'product-2' :
                                productId = data.product_ID_item2;
                                addItemToWishList(productId);
                                //run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item2}"`)
                                break;
    
                        case 'promo product-1' :
                            productId = data.promo_product_ID_item1;
                            addItemToWishList(productId);
                            //run(`Then this ${ref.minicart_product_name.selector} should say "${data.promo_product_name_item1}"`)
                            break;
    
                        case 'promo product-2' :
                            productId = data.promo_product_ID_item2;
                            addItemToWishList(productId);
                           /// run(`Then this ${ref.minicart_product_name.selector} should say "${data.promo_product_name_item2}"`)
                            break;
    
                    case 'Gift Card Product':
                            productId = data.gift_card_product_id;
                            addItemToWishList(productId);
                            // run(`Then this ${ref.minicart_product_name.selector} should say "${data.gift_card_product_name}"`)
                            break;    
                             
                        case 'product with less price' :
                                productId = data.product_ID_with_less_price;
                                addItemToWishList(productId);
                               // run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_with_less_price}"`)
                                break;
    
                        case 'BOPIs product':
                            productId = data.bopis_product_category;
                            addItemToWishList(productId);
                            //run(`Then this ${ref.minicart_product_name.selector} should say "${data.bopis_product_name}"`)
                            break;   
                    
                    case 'product-3' :
                        productId = data.product_ID_item3;
                        addItemToWishList(productId);
                        //run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item3}"`)
                        break;
                    case 'product-4' :
                        productId = data.product_ID_item4;
                        addItemToWishList(productId);
                       // run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item4}"`)
                        break;
                    case 'product-9' :
                        productId = data.product_ID_item9;
                        addItemToWishList(productId);
                        //run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item9}"`)
                        break;
                    case 'product-12' :
                        productId = data.product_ID_item12;
                        addItemToWishList(productId);
                       // run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item12}"`)
                        break;
                }
                return client
            });
    
                function addItemToWishList(productId) {
                    client
                    .waitForElementVisible(ref.header_search_box.selector,data.timeout_max)
                    .setValue(ref.header_search_box.selector, productId)
                    .click(ref.header_searchBar_button.selector) // search bar submit
                    .isVisible(ref.search_result_page_product_link.selector, function(result) 
                    {
                       client.click(ref.search_result_page_product_link.selector);
                    });
                    run('And I should see ' + ref.pdp_product_name.selector); // give product page name css
                    client.pause(2000);
                    client.click(ref.wishlist_icon_product_page.selector); // click on wishlist 
                    client.pause(1000);
                    client.click(ref.header_wishlist_link.selector); //click on header wishlist
                    
                    return client

                }
    

                Then(/^I add "(.*?)" to cart from wishlist$/, (action) => {
                    client.pause(200)

                    var productId;
                    switch(action) {
                        case 'product-1' :
                            productId = data.product_ID_item1;
                            addItemToCartFromWishlist(productId);
                            break;
        
                            case 'product-2' :
                                    productId = data.product_ID_item2;
                                    addItemToCartFromWishlist(productId);
                                    run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item2}"`)
                                    break;
        
                            case 'promo product-1' :
                                productId = data.promo_product_ID_item1;
                                addItemToCartFromWishlist(productId);
                                run(`Then this ${ref.minicart_product_name.selector} should say "${data.promo_product_name_item1}"`)
                                break;
        
                            case 'promo product-2' :
                                productId = data.promo_product_ID_item2;
                                addItemToCartFromWishlist(productId);
                                run(`Then this ${ref.minicart_product_name.selector} should say "${data.promo_product_name_item2}"`)
                                break;
        
                        case 'Gift Card Product':
                                productId = data.gift_card_product_id;
                                addItemToCartFromWishlist(productId);
                                // run(`Then this ${ref.minicart_product_name.selector} should say "${data.gift_card_product_name}"`)
                                break;    
        
                            
        
                            case 'product with less price' :
                                    productId = data.product_ID_with_less_price;
                                    addItemToCartFromWishlist(productId);
                                    run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_with_less_price}"`)
                                    break;
        
                            case 'BOPIs product':
                                productId = data.bopis_product_category;
                                addItemToCartFromWishlist(productId);
                                run(`Then this ${ref.minicart_product_name.selector} should say "${data.bopis_product_name}"`)
                                break;   
                        
                        case 'product-3' :
                            productId = data.product_ID_item3;
                            addItemToCartFromWishlist(productId);
                            run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item3}"`)
                            break;
                        case 'product-4' :
                            productId = data.product_ID_item4;
                            addItemToCartFromWishlist(productId);
                            run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item4}"`)
                            break
                        case 'product-9' :
                            productId = data.product_ID_item9;
                            addItemToCartFromWishlist(productId);
                            run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item9}"`)
                            break;
                        case 'product-12' :
                            productId = data.product_ID_item12;
                            addItemToCartFromWishlist(productId);
                            run(`Then this ${ref.minicart_product_name.selector} should say "${data.product_name_item12}"`)
                            break;
                    }
                    return client


                });



                function addItemToCartFromWishlist(productId) {
                    client.moveToElement(ref.wishlist_quick_View.selector,10,10);
                    client.click(ref.wishlist_quick_View.selector);
                     //run('When I hover on "wishlslist icon page"');
                    client.waitForElementNotVisible(ref.pdp_selectable_color_swatch.selector, 3000, false, function(result) {  // color css selector
                        console.log("****************COLOR result.status:- "+ result.status);
                        if (result.status === 0){
                             console.log("**************** IF condition COLOR result.status:- "+ result.status);
                             client.click(ref.pdp_selectable_color_swatch.selector) //select color
                        }
                   })
                     client.pause(2000);
                     // if product has size
                     client.waitForElementNotPresent(ref.pdp_selected_size.selector, 3000, false, function(result) {  // size css selector
                         console.log("**************** SIZE result.status:- "+ result.status);
                         if (result.status === 0){
                    console.log("****************if condition SIZE result.status:- "+ result.status);
                             client .click(ref.pdp_size_links.selector) //select color
                             .pause(2000)
                         }
                     });
                    
                     client.click(ref.wishlist_quickview_add_to_bag.selector); // add to cart click
                     run('And I should see ' + ref.minicart_product_name.selector);
                     client.pause(1000);
                    // //run('And I should see ' + ref.wishlist_shopagain_link.selector);
                    return client

                }

       

        Then(/^I proceed with guest checkout$/, () => {
            run(`I click on - "BAG CHECKOUT BUTTON"`)
            run(`I click on - "CHECKOUT AS GUEST BUTTON"`)
            return client
        })
        
        Then(/^I proceed with registered "(.*?)" checkout$/, (event) => {
            run(`I click on - "BAG CHECKOUT BUTTON"`)
                var email;
                var password = data.defaultPassword;
                switch(event) {
                    case 'ACCOUNT1' :
                        email = data.registered_ACCOUNT1;
                        break;
                    case 'ACCOUNT2' :
                        email = data.registered_ACCOUNT2;
                        break;
                    case 'ACCOUNT3' :
                        email = data.registered_ACCOUNT3;
                        break;
                    case 'ACCOUNT4' :
                        email = data.registered_ACCOUNT4;
                        break;
                    case 'ACCOUNT5' :
                        email = data.registered_ACCOUNT5;
                        break;
                    case 'ACCOUNT6' :
                        email = data.registered_ACCOUNT6;
                        break;
                    case 'ACCOUNT7' :
                        email = data.registered_ACCOUNT7;
                        break;
                    case 'ACCOUNT8' :
                        email = data.registered_ACCOUNT8;
                        break;
                    case 'ACCOUNT9' :
                        email = data.registered_ACCOUNT9;
                        break;
                }
                client
                .waitForElementVisible(ref.bag_login_emailEntry_css.selector,data.timeout_max)
                .setValue(ref.bag_login_emailEntry_css.selector, email)
                .setValue(ref.bag_login_passwordEntry_css.selector, password)
                run(`I click on - "SIGN IN & CHECKOUT - REGISTERED USER"`)
                return client
            });

        When(/^I enter my "(.*?)" and (.*?) info$/, (event, paymentType) => {
            switch(event) {
                case 'address-1' :
                    run(`Then I enter my "Shipping address-1" in the textbox`)
                    break;
                case 'address-2' :
                    run(`Then I enter my "Shipping address-2" in the textbox`)
                    break;
                case 'addressINTL-1' :
                    run(`Then I enter my "addressINTL-1" in the textbox`)
                    break;

                 // e2e shipping address
                 case 'address-SFDEV-2638' :
                    run(`Then I enter my "Shipping address-French" in the textbox`)
                    break;

                // e2e shipping address
                case 'address-SFDEV-2638' :
                    run(`Then I enter my "Shipping address-SFDEV-2638" in the textbox`)
                    break;
                    // e2e shipping address
                case 'address-SFDEV-2592' :
                    run(`Then I enter my "Shipping address-SFDEV-2592" in the textbox`)
                    break;

                     // e2e shipping address
                case 'address-SFDEV-2642' :
                    run(`Then I enter my "Shipping address-SFDEV-2642" in the textbox`)
                    break;
                    // e2e shipping address
                case 'address-SFDEV-4589' :
                    run(`Then I enter my "Shipping address-SFDEV-4589" in the textbox`)
                    break;
                    // e2e shipping address
                case 'address-SFDEV-2559' :
                    run(`Then I enter my "Shipping address-SFDEV-2559" in the textbox`)
                    break;
                     // e2e shipping address
                case 'address-SFDEV-2625' :
                    run(`Then I enter my "Shipping address-SFDEV-2625" in the textbox`)
                    break;
                    // e2e shipping address
                case 'address-SFDEV-2623' :
                    run(`Then I enter my "Shipping address-SFDEV-2623" in the textbox`)
                    break;
                    // e2e shipping address
                case 'address-SFDEV-2596' :
                    run(`Then I enter my "Shipping address-SFDEV-2596" in the textbox`)
                    break;
                    // e2e shipping address
                case 'address-SFDEV-2620' :
                    run(`Then I enter my "Shipping address-SFDEV-2620" in the textbox`)
                    break;
                    // e2e shipping address
                case 'address-SFDEV-2561' :
                    run(`Then I enter my "Shipping address-SFDEV-2561" in the textbox`)
                    break;
                    // e2e shipping address
                case 'address-SFDEV-2619' :
                    run(`Then I enter my "Shipping address-SFDEV-2619" in the textbox`)
                    break;
                    // e2e shipping address
                case 'address-SFDEV-2618' :
                    run(`Then I enter my "Shipping address-SFDEV-2618" in the textbox`)
                    break;
                    // e2e shipping address
                case 'address-SFDEV-2652' :
                    run(`Then I enter my "Shipping address-SFDEV-2652" in the textbox`)
                    break;
                  // e2e shipping address
                case 'address-SFDEV-2617' :
                    run(`Then I enter my "Shipping address-SFDEV-2617" in the textbox`)
                    break; 
                // e2e shipping address
                case 'address-SFDEV-2626' :
                    run(`Then I enter my "Shipping address-SFDEV-2626" in the textbox`)
                    break; 
                // e2e shipping address
                case 'address-SFDEV-2622' :
                    run(`Then I enter my "Shipping address-SFDEV-2622" in the textbox`)
                    break; 
                // e2e shipping address
                case 'address-SFDEV-2616' :
                    run(`Then I enter my "Shipping address-SFDEV-2616" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-4588' :
                    run(`Then I enter my "Shipping address-SFDEV-4588" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-3227' :
                    run(`Then I enter my "Shipping address-SFDEV-3227" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-3817' :
                    run(`Then I enter my "Shipping address-SFDEV-3817" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-3756' :
                    run(`Then I enter my "Shipping address-SFDEV-3756" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-3307' :
                    run(`Then I enter my "Shipping address-SFDEV-3307" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-3310' :
                    run(`Then I enter my "Shipping address-SFDEV-3310" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-3308' :
                    run(`Then I enter my "Shipping address-SFDEV-3308" in the textbox`)
                    break;
                    // e2e shipping address
                case 'address-SFDEV-3813' :
                    run(`Then I enter my "Shipping address-SFDEV-3813" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-2616' :
                    run(`Then I enter my "Shipping address-SFDEV-4585" in the textbox`)
                    break;
                    
                    // e2e shipping address
                case 'address-SFDEV-2584' :
                    run(`Then I enter my "Shipping address-SFDEV-2584" in the textbox`)
                    break;
                 // e2e shipping address
                case 'address-SFDEV-2644' :
                    run(`Then I enter my "Shipping address-SFDEV-2644" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-2583' :
                    run(`Then I enter my "Shipping address-SFDEV-2583" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-2644' :
                    run(`Then I enter my "Shipping address-SFDEV-2594" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-2598' :
                    run(`Then I enter my "Shipping address-SFDEV-2598" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-2566' :
                    run(`Then I enter my "Shipping address-SFDEV-2566" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-2644' :
                    run(`Then I enter my "Shipping address-SFDEV-2585" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-2661' :
                    run(`Then I enter my "Shipping address-SFDEV-2661" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-2582' :
                    run(`Then I enter my "Shipping address-SFDEV-2582" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-2657' :
                    run(`Then I enter my "Shipping address-SFDEV-2657" in the textbox`)
                    break;
                // e2e shipping address
                case 'address-SFDEV-2648' :
                    run(`Then I enter my "Shipping address-SFDEV-2648" in the textbox`)
                    break;
            }
            run(`I click on - "SUBMIT ADDRESS BUTTON"`)
            client
            .waitForElementVisible(ref.checkout_shipping_addressLine1_css.selector,data.timeout_max)
            .pause(2000)
            switch(paymentType) {
                case 'payment' :
                    run(`Then I enter my "Payment details-1" in the textbox`)
                    break;
                case 'payment-2' :
                    run(`Then I enter my "payment-2" in the textbox`)
                    break;
                case 'associate payment' :
                    run(`Then I enter my "associate payment" in the textbox`)
                    break;
            }
            run(`I click on - "SUBMIT PAYMENT BUTTON"`)
            client.pause(2000)
            .waitForElementVisible(ref.checkout_payment_masked_card_css.selector,data.timeout_median)
            return client
        });

        Then(/^I enter my "(.*?)" in the textbox$/, (event) => {
            switch(event) {
                case 'Shipping address-1' :
                case 'addressINTL-1' :
                case 'Shipping address-2' :
                case 'Shipping address-4' :
                case 'APO Address':
                case 'Shipping address-French':
                case 'Shipping address-SFDEV-2638':
                case 'Shipping address-SFDEV-2592':
                case 'Shipping address-SFDEV-2642':
                case 'Shipping address-SFDEV-4589':
                case 'Shipping address-SFDEV-2559':
                case 'Shipping address-SFDEV-2625':
                case 'Shipping address-SFDEV-2623':
                case 'Shipping address-SFDEV-2620':
                case 'Shipping address-SFDEV-2561':
                case 'Shipping address-SFDEV-2619':
                case 'Shipping address-SFDEV-2618':
                case 'Shipping address-SFDEV-2652':
                case 'Shipping address-SFDEV-2617':
                case 'Shipping address-SFDEV-2626':
                case 'Shipping address-SFDEV-2622':
                case 'Shipping address-SFDEV-2616':
                case 'Shipping address-SFDEV-2644': 
                case 'Shipping address-SFDEV-2598':
                case 'Shipping address-SFDEV-2566':
                case 'Shipping address-SFDEV-2584': 
                case 'Shipping address-SFDEV-4588':
                case 'Shipping address-SFDEV-4585':
                case 'Shipping address-SFDEV-2594': 
                case 'Shipping address-SFDEV-2585':
                case 'Shipping address-SFDEV-2582':
                case 'Shipping address-SFDEV-3813':
                case 'Shipping address-SFDEV-3310':
                case 'Shipping address-SFDEV-3308':
                case 'Shipping address-SFDEV-3307':
                case 'Shipping address-SFDEV-3227':
                case 'Shipping address-SFDEV-2661':
                case 'Shipping address-SFDEV-3817':
                case 'Shipping address-SFDEV-3756':
                case 'Shipping address-SFDEV-2596':
                case 'Shipping address-SFDEV-2583':
                case 'Shipping address-SFDEV-2657':
                case 'Shipping address-SFDEV-2648':    
                    
                  
                    addAddress(event)
                    break;
                case 'Billing address intl-1' :
                    //e2e changes updated
                case 'Billing address-SFDEV-2591' :
                case 'Billing address-SFDEV-2632' :
                case 'Billing address-SFDEV-3751' :
                case 'Billing address-SFDEV-2636' :
                case 'Billing address-SFDEV-3756' :
                case 'Billing address-1' :
                case 'Billing address':   
                case 'International Billing Address': 
                    addBillingAddress(event)
                    break  
                //PAYMENT      
                case 'Payment details-1' :
                case 'Visa Card Details' :
                case 'Discover Card Details': 
                case 'Master Card Details':
                case 'Amex Card Details':
                case 'PLCC Card Details':   
                case 'New payment-2 details' :
                case 'Invalid Card Details': 
                case 'CoBrand Store Details':
                case 'HBC Card':
                case 'Loyalty Card Details' :
                    addPayment(event)
                    break;   
                case 'associate payment' :
                    addAssociatePayment(event)
                    break;
                case 'Credit Card CVC' :
                    client 
                    .setValue('input[name=cvc]', data.checkout_CVC3digits)
                    break;
                //PAYPAL    
                case 'PAYPAL USERNAME1' :
                    client 
                    .waitForElementVisible('input[name=login_email]',data.timeout_max)
                    .clearValue('input[name=login_email]')
                    .setValue('input[name=login_email]', data.paypalEmailOptionA)
                    break;
                case 'PAYPAL USERNAME2' :
                    client 
                    .waitForElementVisible('input[name=login_email]',data.timeout_max)
                    .clearValue('input[name=login_email]')
                    .setValue('input[name=login_email]', data.paypalEmailOptionB)
                    break;
                case 'PAYPAL PASSWORD' :
                    client 
                    .waitForElementVisible('input[name=login_password]',data.timeout_max)
                    .clearValue('input[name=login_password]')
                    .setValue('input[name=login_password]', data.paypalPassword)
                    break;
                //SHOPRUNNER    
                case 'SHOPRUNNER USERNAME' :
                    client
                    .setValue(ref.shoprunnerEmail_css.selector, data.shoprunnerEmail)
                    break;
                case 'SHOPRUNNER PASSWORD' :
                    client 
                    .pause(200)
                    .clearValue(ref.shoprunnerPassword_css.selector)
                    .setValue(ref.shoprunnerPassword_css.selector, data.shoprunnerPassword)
                    break;
                //GIFT CARD    
                case 'GC ACCOUNT NUMBER' :
                    client 
                    .waitForElementVisible(ref.checkout_giftcard_accountNum_textfield_css.selector)
                    .setValue(ref.checkout_giftcard_accountNum_textfield_css.selector, data.giftcard_accountNum)                    
                    break;
                case 'GC PIN NUMBER' :
                    client
                    .waitForElementVisible(ref.checkout_giftcard_pinNum_textfield_css.selector)
                    .setValue(ref.checkout_giftcard_pinNum_textfield_css.selector, data.giftcard_pinNum)
                    break;
                
                
                case 'Gift Card Number': 
                case 'Gift Card Number-2': 
                case 'Gift Card Number-1':
                case 'Gift Card Number-1-SFDEV-4589':
                case 'Gift Card Number-1-SFDEV-2590':
                case 'Gift Card Number-2-SFDEV-4589':  
                case 'Gift Card Number-1-SFDEV-2651': 
                case 'Gift Card Number-1-SFDEV-2624': 
                case 'Gift Card Number-1-SFDEV-2769': 
                case 'Gift Card Number-1-SFDEV-2598':
                case 'Gift Card Number-2-SFDEV-2598':
                case 'Gift Card Number-1-SFDEV-3751': 
                case 'Gift Card Number-2-SFDEV-3751':
                case 'Gift Card Number-1-SFDEV-3756':
                case 'Gift Card Number-1-SFDEV-2566': 
                case 'Gift Card Number-1-SFDEV-2560':
                case 'Gift Card Number-2-SFDEV-2566':
                case 'Gift Card Number-1-SFDEV-2640': 
                case 'Gift Card Number-1-SFDEV-2595': 
                case 'Gift Card Number-1-SFDEV-2593':
                case 'Gift Card Number-1-SFDEV-2586':
                case 'Gift Card Number-1-SFDEV-2587':
                case 'Gift Card Number-2-SFDEV-2587':
                case 'Gift Card Number-1-SFDEV-2653':
                case 'Gift Card Number-2-SFDEV-2653':
                case 'Gift Card Number-1-SFDEV-2654':
                case 'Gift Card Number-1-SFDEV-2650':
                case 'Gift Card Number-1-SFDEV-2636':

                case 'Invalid Gift card Number':
                case 'Invalid Gift card access number':
                    addGiftCardInCheckout(event);
                    break;

                case 'Order Level promo code':
                case 'Order Level promo code S2624':
                case 'Order Level promo code S2661':
                case 'Order Level promo code S3306':
                case 'Order Level promo code S2646':
                case 'Invalid promo code':    
                    addPromoCodeInCheckout(event); 
                    break;   

                case 'Gift Message':
                    addGiftMessageInCheckout(event);
                    break;                
              
                case 'In-Store Pickup Person details' :
                    bopisPickUpPersonInfo(event)   
                    break;
                
                case 'Change Password details':
                case 'Reset Password Details':
                    addnewpassword(event)
                    break;

                    case 'email id and mobile number in waitlist':
                        client.setValue(ref.waitlist_email_address_field.selector,data.waitlist_email_id);
                        client.setValue(ref.waitlist_phonenumber_field.selector, data.waitlist_phone_number);
                        break;
            }
            return client
        })
        function addPromoCodeInCheckout(event){
            var promoCode;
            if(event === 'Order Level promo code'){
                promoCode = data.orderLevelCode;
            }
            //e2e changes updated
            else if(event === 'Order Level promo code S2661'){
                promoCode = data.orderLevelCodeS2661;
            }
            //e2e changes updated
            else if(event === 'Order Level promo code S2624'){
                promoCode = data.orderLevelCodeS2624;
            }
            //e2e changes updated
            else if(event === 'Order Level promo code S3306'){
                promoCode = data.orderLevelCodeS3306;
            }
            //e2e changes updated
            else if(event === 'Order Level promo code S2646'){
                promoCode = data.orderLevelCodeS2646;
            }
            else if(event==='Invalid promo code'){
                promoCode = data.invalidPromoCode;
            }
            client.clearValue(ref.promo_code_textbox_in_checkout.selector);
            client.pause(2000);
            client.setValue(ref.promo_code_textbox_in_checkout.selector,promoCode);
            client.pause(2000);
            client.click(ref.promo_code_apply_button_in_checkout.selector);
        }
        function addAddress(event) {
            if(event === 'addressINTL-1'){
                var firstname = data.acc_address_firstName1
                var lastname = data.acc_address_lastName1
                var address_line1 = data.acc_Intl_AddressStreetOptionA
                var city = data.acc_Intl_CityOptionA
                var zipOrPostalCode = data.acc_Intl_ZipOptionA
                var stateOrProvinceSelector = ref.checkout_stateINTL_optionA_css.selector
                var phone = data.acc_PhoneOptionA
            } else if (event === 'Shipping address-1'){
                var firstname = data.acc_address_firstName1
                var lastname = data.acc_address_lastName1
                var address_line1 = data.acc_AddressStreetOption1
                var address_line2 = data.acc_AddressStreetTwoOption1
                var city = data.acc_CityOption1
                var zipOrPostalCode = data.acc_ZipOption1
                var state = data.acc_StateOrProvince1
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1
                var emailId = generateRandomEmailId();           
            } 
            //e2e shipping changes
            else if (event === 'Shipping address-French'){
                var firstname = data.acc_address_nickname1_S2634
                var lastname = data.acc_address_lastName1_S2634
                var address_line1 = data.acc_AddressStreetOption1_S2634
                var address_line2 = data.acc_AddressStreetTwoOption1_S2634
                var city = data.acc_CityOption1_S2634
                var zipOrPostalCode = data.acc_ZipOption1_S2634
                var state = data.acc_StateOrProvince1_S2634
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2634
                var emailId = generateRandomEmailId();                
            } 
             //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2638'){
                var firstname = data.acc_address_firstName1_S2638
                var lastname = data.acc_address_lastName1_S2638
                // var address_line1 = data.acc_AddressStreetOption1_S2638
                var address_line2 = data.acc_AddressStreetTwoOption1_S2638
                var city = data.acc_CityOption1_S2638
                var zipOrPostalCode = data.acc_ZipOption1_S2638
                var state = data.acc_StateOrProvince1_S2638
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2638
                var emailId = generateRandomEmailId();
                var address_line1 = data.acc_AddressStreetOption1_S2638                
            } 
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2592'){
                var firstname = data.acc_address_firstName1_S2592
                var lastname = data.acc_address_lastName1_S2592
                var address_line1 = data.acc_AddressStreetOption1_S2592  
                var address_line2 = data.acc_AddressStreetTwoOption1_S2592
                var city = data.acc_CityOption1_S2592
                var zipOrPostalCode = data.acc_ZipOption1_S2592
                var state = data.acc_StateOrProvince1_S2592
                var phone = data.acc_PhoneOption1_S2592
                var emailId = generateRandomEmailId();
                          
            } 
            
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2642'){
                var firstname = data.acc_address_firstName1_S2642
                var lastname = data.acc_address_lastName1_S2642
                var address_line1 = data.acc_AddressStreetOption1_S2642
                var address_line2 = data.acc_AddressStreetTwoOption1_S2642
                var city = data.acc_CityOption1_S2642
                var zipOrPostalCode = data.acc_ZipOption1_S2642
                var state = data.acc_StateOrProvince1_S2642
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2642
                var emailId = generateRandomEmailId();              
            } 
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-4589'){
                var firstname = data.acc_address_firstName1_S4589
                var lastname = data.acc_address_lastName1_S4589
                var address_line1 = data.acc_AddressStreetOption1_S4589
                var address_line2 = data.acc_AddressStreetTwoOption1_S4589
                var city = data.acc_CityOption1_S4589
                var zipOrPostalCode = data.acc_ZipOption1_S4589
                var state = data.acc_StateOrProvince1_S4589
                var phone = data.acc_PhoneOption1_S4589
                var emailId = generateRandomEmailId();              
            } 
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2559'){
                var firstname = data.acc_address_firstName1_S2559
                var lastname = data.acc_address_lastName1_S2559
                var address_line1 = data.acc_AddressStreetOption1_S2559
                var address_line2 = data.acc_AddressStreetTwoOption1_S2559
                var city = data.acc_CityOption1_S2559
                var zipOrPostalCode = data.acc_ZipOption1_S2559
                var state = data.acc_StateOrProvince1_S2559
                var phone = data.acc_PhoneOption1_S2559
                var emailId = generateRandomEmailId();              
            } 
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2625'){
                var firstname = data.acc_address_firstName1_S2625
                var lastname = data.acc_address_lastName1_S2625
                var address_line1 = data.acc_AddressStreetOption1_S2625
                var address_line2 = data.acc_AddressStreetTwoOption1_S2625
                var city = data.acc_CityOption1_S2625
                var zipOrPostalCode = data.acc_ZipOption1_S2625
                var state = data.acc_StateOrProvince1_S2625
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2625
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2585'){
                var firstname = data.acc_address_firstName1_S2585
                var lastname = data.acc_address_lastName1_S2585
                var address_line1 = data.acc_AddressStreetOption1_S2585
                var address_line2 = data.acc_AddressStreetTwoOption1_S2585
                var city = data.acc_CityOption1_S2585
                var zipOrPostalCode = data.acc_ZipOption1_S2585
                var state = data.acc_StateOrProvince1_S2585
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2585
                var emailId = generateRandomEmailId();              
            }
             //e2e shipping changes
             else if (event === 'Shipping address-SFDEV-2661'){
                var firstname = data.acc_address_firstName1_S2661
                var lastname = data.acc_address_lastName1_S2661
                var address_line1 = data.acc_AddressStreetOption1_S2661
                var address_line2 = data.acc_AddressStreetTwoOption1_S2661
                var city = data.acc_CityOption1_S2661
                var zipOrPostalCode = data.acc_ZipOption1_S2661
                var state = data.acc_StateOrProvince1_S2661
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2661
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2623'){
                var firstname = data.acc_address_firstName1_S2623
                var lastname = data.acc_address_lastName1_S2623
                var address_line1 = data.acc_AddressStreetOption1_S2623
                var address_line2 = data.acc_AddressStreetTwoOption1_S2623
                var city = data.acc_CityOption1_S2623
                var zipOrPostalCode = data.acc_ZipOption1_S2623
                var state = data.acc_StateOrProvince1_S2623
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2623
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2596'){
                var firstname = data.acc_address_firstName1_S2596
                var lastname = data.acc_address_lastName1_S2596
                var address_line1 = data.acc_AddressStreetOption1_S2596
                var address_line2 = data.acc_AddressStreetTwoOption1_S2596
                var city = data.acc_CityOption1_S2596
                var zipOrPostalCode = data.acc_ZipOption1_S2596
                var state = data.acc_StateOrProvince1_S2596
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2596
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2620'){
                var firstname = data.acc_address_firstName1_S2620
                var lastname = data.acc_address_lastName1_S2620
                var address_line1 = data.acc_AddressStreetOption1_S2620
                var address_line2 = data.acc_AddressStreetTwoOption1_S2620
                var city = data.acc_CityOption1_S2620
                var zipOrPostalCode = data.acc_ZipOption1_S2620
                var state = data.acc_StateOrProvince1_S2620
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2620
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2561'){
                var firstname = data.acc_address_firstName1_S2561
                var lastname = data.acc_address_lastName1_S2561
                var address_line1 = data.acc_AddressStreetOption1_S2561
                var address_line2 = data.acc_AddressStreetTwoOption1_S2561
                var city = data.acc_CityOption1_S2561
                var zipOrPostalCode = data.acc_ZipOption1_S2561
                var state = data.acc_StateOrProvince1_S2561
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2561
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2619'){
                var firstname = data.acc_address_firstName1_S2619
                var lastname = data.acc_address_lastName1_S2619
                var address_line1 = data.acc_AddressStreetOption1_S2619
                var address_line2 = data.acc_AddressStreetTwoOption1_S2619
                var city = data.acc_CityOption1_S2619
                var zipOrPostalCode = data.acc_ZipOption1_S2619
                var state = data.acc_StateOrProvince1_S2619
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2619
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2582'){
                var firstname = data.acc_address_firstName1_S2582
                var lastname = data.acc_address_lastName1_S2582
                var address_line1 = data.acc_AddressStreetOption1_S2582
                var address_line2 = data.acc_AddressStreetTwoOption1_S2582
                var city = data.acc_CityOption1_S2582
                var zipOrPostalCode = data.acc_ZipOption1_S2582
                var state = data.acc_StateOrProvince1_S2582
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2582
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2618'){
                var firstname = data.acc_address_firstName1_S2618
                var lastname = data.acc_address_lastName1_S2618
                var address_line1 = data.acc_AddressStreetOption1_S2618
                var address_line2 = data.acc_AddressStreetTwoOption1_S2618
                var city = data.acc_CityOption1_S2618
                var zipOrPostalCode = data.acc_ZipOption1_S2618
                var state = data.acc_StateOrProvince1_S2618
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2618
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2652'){
                var firstname = data.acc_address_firstName1_S2652
                var lastname = data.acc_address_lastName1_S2652
                var address_line1 = data.acc_AddressStreetOption1_S2652
                var address_line2 = data.acc_AddressStreetTwoOption1_S2652
                var city = data.acc_CityOption1_S2652
                var zipOrPostalCode = data.acc_ZipOption1_S2652
                var state = data.acc_StateOrProvince1_S2652
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2652
                var emailId = generateRandomEmailId();              
            }
           //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2617'){
                var firstname = data.acc_address_firstName1_S2617
                var lastname = data.acc_address_lastName1_S2617
                var address_line1 = data.acc_AddressStreetOption1_S2617
                var address_line2 = data.acc_AddressStreetTwoOption1_S2617
                var city = data.acc_CityOption1_S2617
                var zipOrPostalCode = data.acc_ZipOption1_S2617
                var state = data.acc_StateOrProvince1_S2617
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2617
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2626'){
                var firstname = data.acc_address_firstName1_S2626
                var lastname = data.acc_address_lastName1_S2626
                var address_line1 = data.acc_AddressStreetOption1_S2626
                var address_line2 = data.acc_AddressStreetTwoOption1_S2626
                var city = data.acc_CityOption1_S2626
                var zipOrPostalCode = data.acc_ZipOption1_S2626
                var state = data.acc_StateOrProvince1_S2626
                var phone = data.acc_PhoneOption1_S2626
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2622'){
                var firstname = data.acc_address_firstName1_S2622
                var lastname = data.acc_address_lastName1_S2622
                var address_line1 = data.acc_AddressStreetOption1_S2622
                var address_line2 = data.acc_AddressStreetTwoOption1_S2622
                var city = data.acc_CityOption1_S2622
                var zipOrPostalCode = data.acc_ZipOption1_S2622
                var state = data.acc_StateOrProvince1_S2622
                var phone = data.acc_PhoneOption1_S2622
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2616'){
                var firstname = data.acc_address_firstName1_S2616
                var lastname = data.acc_address_lastName1_S2616
                var address_line1 = data.acc_AddressStreetOption1_S2616
                var address_line2 = data.acc_AddressStreetTwoOption1_S2616
                var city = data.acc_CityOption1_S2616
                var zipOrPostalCode = data.acc_ZipOption1_S2616
                var state = data.acc_StateOrProvince1_S2616
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2616
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-4588'){
                var firstname = data.acc_address_firstName1_S4588
                var lastname = data.acc_address_lastName1_S4588
                // var address_line2 = data.acc_AddressStreetTwoOption1_S4588
                var city = data.acc_CityOption1_S4588
                var zipOrPostalCode = data.acc_ZipOption1_S4588
                var state = data.acc_StateOrProvince1_S4588
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S4588
                var emailId = generateRandomEmailId();  
                var address_line1 = data.acc_AddressStreetOption1_S4588            
            }
             //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2657'){
                var firstname = data.acc_address_firstName1_S2657
                var lastname = data.acc_address_lastName1_S2657
                // var address_line2 = data.acc_AddressStreetTwoOption1_S2657
                var city = data.acc_CityOption1_S2657
                var zipOrPostalCode = data.acc_ZipOption1_S2657
                var state = data.acc_StateOrProvince1_S2657
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2657
                var emailId = generateRandomEmailId();  
                var address_line1 = data.acc_AddressStreetOption1_S2657           
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2648'){
                var firstname = data.acc_address_firstName1_S2648
                var lastname = data.acc_address_lastName1_S2648
                // var address_line2 = data.acc_AddressStreetTwoOption1_S2657
                var city = data.acc_CityOption1_S2648
                var zipOrPostalCode = data.acc_ZipOption1_S2648
                var state = data.acc_StateOrProvince1_S2648
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2648
                var emailId = generateRandomEmailId();  
                var address_line1 = data.acc_AddressStreetOption1_S2648          
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-3227'){
                var firstname = data.acc_address_firstName1_S3227
                var lastname = data.acc_address_lastName1_S3227
                // var address_line2 = data.acc_AddressStreetTwoOption1_S4588
                var city = data.acc_CityOption1_S3227
                var zipOrPostalCode = data.acc_ZipOption1_S3227
                var state = data.acc_StateOrProvince1_S3227
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S3227
                var emailId = generateRandomEmailId();  
                var address_line1 = data.acc_AddressStreetOption1_S3227           
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-3817'){
                var firstname = data.acc_address_firstName1_S3817
                var lastname = data.acc_address_lastName1_S3817
                var address_line2 = data.acc_AddressStreetTwoOption1_S4588
                var city = data.acc_CityOption1_S3817
                var zipOrPostalCode = data.acc_ZipOption1_S3817
                var state = data.acc_StateOrProvince1_S3817
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S3817
                var emailId = generateRandomEmailId();  
                var address_line1 = data.acc_AddressStreetOption1_S3817          
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-3756'){
                var firstname = data.acc_address_firstName1_S3756
                var lastname = data.acc_address_lastName1_S3756
                var address_line2 = data.acc_AddressStreetTwoOption1_S3756
                var city = data.acc_CityOption1_S3756
                var zipOrPostalCode = data.acc_ZipOption1_S3756
                var state = data.acc_StateOrProvince1_S3756
                var phone = data.acc_PhoneOption1_S3756
                var emailId = generateRandomEmailId();  
                var address_line1 = data.acc_AddressStreetOption1_S3756
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-3307'){
                var firstname = data.acc_address_firstName1_S3307
                var lastname = data.acc_address_lastName1_S3307
                var address_line2 = data.acc_AddressStreetTwoOption1_S4588
                var city = data.acc_CityOption1_S3307
                var zipOrPostalCode = data.acc_ZipOption1_S3307
                var state = data.acc_StateOrProvince1_S3307
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S3307
                var emailId = generateRandomEmailId();  
                var address_line1 = data.acc_AddressStreetOption1_S3307            
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-3308'){
                var firstname = data.acc_address_firstName1_S3308
                var lastname = data.acc_address_lastName1_S3308
                // var address_line2 = data.acc_AddressStreetTwoOption1_S4588
                var city = data.acc_CityOption1_S3308
                var zipOrPostalCode = data.acc_ZipOption1_S3308
                var state = data.acc_StateOrProvince1_S3308
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S3308
                var emailId = generateRandomEmailId();  
                var address_line1 = data.acc_AddressStreetOption1_S3308            
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-3813'){
                var firstname = data.acc_address_firstName1_S3813
                var lastname = data.acc_address_lastName1_S3813
                // var address_line2 = data.acc_AddressStreetTwoOption1_S4588
                var city = data.acc_CityOption1_S3813
                var zipOrPostalCode = data.acc_ZipOption1_S3813
                var state = data.acc_StateOrProvince1_S3813
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S3813
                var emailId = generateRandomEmailId();  
                var address_line1 = data.acc_AddressStreetOption1_S3813        
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-3310'){
                var firstname = data.acc_address_firstName1_S3310
                var lastname = data.acc_address_lastName1_S3310
                // var address_line2 = data.acc_AddressStreetTwoOption1_S4588
                var city = data.acc_CityOption1_S3310
                var zipOrPostalCode = data.acc_ZipOption1_S3310
                var state = data.acc_StateOrProvince1_S3310
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S3310
                var emailId = generateRandomEmailId();  
                var address_line1 = data.acc_AddressStreetOption1_S3310      
            }
             //e2e shipping changes
             else if (event === 'Shipping address-SFDEV-4585'){
                var firstname = data.acc_address_firstName1_S4585
                var lastname = data.acc_address_lastName1_S4585
                // var address_line2 = data.acc_AddressStreetTwoOption1_S4588
                var city = data.acc_CityOption1_S4585
                var zipOrPostalCode = data.acc_ZipOption1_S4585
                var state = data.acc_StateOrProvince1_S4585
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S4585
                var emailId = generateRandomEmailId();  
                var address_line1 = data.acc_AddressStreetOption1_S4585          
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2584'){
                var firstname = data.acc_address_firstName1_S2584
                var lastname = data.acc_address_lastName1_S2584
                var address_line1 = data.acc_AddressStreetOption1_S2584
                var address_line2 = data.acc_AddressStreetTwoOption1_S2584
                var city = data.acc_CityOption1_S2584
                var zipOrPostalCode = data.acc_ZipOption1_S2584
                var state = data.acc_StateOrProvince1_S2584
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2584
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2644'){
                var firstname = data.acc_address_firstName1_S2644
                var lastname = data.acc_address_lastName1_S2644
                var address_line1 = data.acc_AddressStreetOption1_S2644
                var address_line2 = data.acc_AddressStreetTwoOption1_S2644
                var city = data.acc_CityOption1_S2644
                var zipOrPostalCode = data.acc_ZipOption1_S2644
                var state = data.acc_StateOrProvince1_S2644
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2644
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2598'){
                var firstname = data.acc_address_firstName1_S2598
                var lastname = data.acc_address_lastName1_S2598
                var address_line1 = data.acc_AddressStreetOption1_S2598
                var address_line2 = data.acc_AddressStreetTwoOption1_S2598
                var city = data.acc_CityOption1_S2598
                var zipOrPostalCode = data.acc_ZipOption1_S2598
                var state = data.acc_StateOrProvince1_S2598
                var phone = data.acc_PhoneOption1_S2598
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2566'){
                var firstname = data.acc_address_firstName1_S2566
                var lastname = data.acc_address_lastName1_S2566
                var address_line1 = data.acc_AddressStreetOption1_S2566
                var address_line2 = data.acc_AddressStreetTwoOption1_S2566
                var city = data.acc_CityOption1_S2566
                var zipOrPostalCode = data.acc_ZipOption1_S2566
                var state = data.acc_StateOrProvince1_S2566
                var phone = data.acc_PhoneOption1_S2566
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2583'){
                var firstname = data.acc_address_firstName1_S2583
                var lastname = data.acc_address_lastName1_S2583
                var address_line1 = data.acc_AddressStreetOption1_S2583
                var address_line2 = data.acc_AddressStreetTwoOption1_S2583
                var city = data.acc_CityOption1_S2583
                var zipOrPostalCode = data.acc_ZipOption1_S2583
                var state = data.acc_StateOrProvince1_S2583
                var phone = data.acc_PhoneOption1_S2583
                var emailId = generateRandomEmailId();              
            }
            //e2e shipping changes
            else if (event === 'Shipping address-SFDEV-2594'){
                var firstname = data.acc_address_firstName1_S2594
                var lastname = data.acc_address_lastName1_S2594
                var address_line1 = data.acc_AddressStreetOption1_S2594
                var address_line2 = data.acc_AddressStreetTwoOption1_S2594
                var city = data.acc_CityOption1_S2594
                var zipOrPostalCode = data.acc_ZipOption1_S2594
                var state = data.acc_StateOrProvince1_S2594
                // var stateOrProvinceSelector = ref.checkout_shipping_state1.selector
                var phone = data.acc_PhoneOption1_S2594
                var emailId = generateRandomEmailId();              
            }

            else if (event === 'Shipping address-2'){
                var firstname = data.shipping_address_firstName
                var lastname = data.shipping_address_lastName
                var address_line1 = data.shipping_address_line1
                var address_line2 = data.shipping_address_line2
                var city = data.shipping_city
                var zipOrPostalCode = data.shipping_zip_code
                var state = data.shipping_state
                // var stateOrProvinceSelector = ref.checkout_shipping_state2.selector
                var phone = data.shipping_phone_number
                var emailId = data.shipping_email_id;

            } else if (event === 'Shipping address-4'){
                var firstname = data.acc_address_firstName1
                var lastname = data.acc_address_lastName1
                var address_line1 = data.acc_AddressStreetOptionD
                var city = data.acc_CityOptionD
                var zipOrPostalCode = data.acc_ZipOptionD
                var stateOrProvinceSelector = ref.checkout_state_optionD_css.selector
                var phone = data.acc_PhoneOptionA
            }
            else if(event === 'APO Address'){
                var firstname = data.apo_address_firstName
                var lastname = data.apo_address_lastName
                var address_line1 = data.apo_address_line1
                var address_line2 = data.apo_address_line2
                var city = data.apo_city
                var zipOrPostalCode = data.apo_zip_code
                var state = data.apo_state
                // var stateOrProvinceSelector = ref.checkout_shipping_state2.selector
                var phone = data.apo_phone_number
                var emailId = generateRandomEmailId();
            }
            
            client.pause(1000);
            client.waitForElementVisible(ref.checkout_shipping_first_name_textbox.selector)
            client.clearValue(ref.checkout_shipping_first_name_textbox.selector);
            client.setValue(ref.checkout_shipping_first_name_textbox.selector, firstname);
            client.clearValue(ref.checkout_shipping_last_name_textbox.selector);
            client.setValue(ref.checkout_shipping_last_name_textbox.selector, lastname);
            client.clearValue(ref.checkout_shipping_address1_textbox.selector);
            client.setValue(ref.checkout_shipping_address1_textbox.selector, address_line1);
            client.clearValue(ref.checkout_shipping_address2_textbox.selector);
            client.setValue(ref.checkout_shipping_address2_textbox.selector, address_line2);
            client.clearValue(ref.checkout_shipping_city_textbox.selector);
            client.setValue(ref.checkout_shipping_city_textbox.selector, city);
            client.setValue(ref.checkout_shipping_state_selectbox.selector, state);
            client.clearValue(ref.checkout_shipping_postcode_textbox.selector);
            client.pause(1000)
            client.setValue(ref.checkout_shipping_postcode_textbox.selector, zipOrPostalCode);
            client.pause(2000)
            client.clearValue(ref.checkout_shipping_phone_number_textbox.selector);
            client.setValue(ref.checkout_shipping_phone_number_textbox.selector, phone);
            client.clearValue(ref.checkout_shipping_email_textbox.selector);
            client.setValue(ref.checkout_shipping_email_textbox.selector, emailId);
            client.keys(data.tabKey);
           
        }


        function addBillingAddress(event) {
            if(event === 'Billing address intl-1'){
                var firstname = data.acc_address_firstName1
                var lastname = data.acc_address_lastName1
                var country = ref.checkout_country_optionA_css.selector
                var address_line1 = data.acc_Intl_AddressStreetOptionA
                var city = data.acc_Intl_CityOptionA
                var zipOrPostalCode = data.acc_Intl_ZipOptionA
                var stateOrProvinceSelector = ref.checkout_stateINTL_optionA_css.selector
                var phone = data.acc_PhoneOptionA
            }
             //e2e changes updated
            else if(event === 'Billing address-SFDEV-3751'){
                var firstname = data.acc_billing_address_firstName_S3751
                var lastname = data.acc_billing_address_lastName_S3751
                var country = data.acc_billing_CountryOption_S3751
                var address_line1 = data.acc_billing_AddressLineOne_S3751
                var address_line2 = data.acc_billing_AddressLineTwo_S3751
                var city = data.acc_billing_CityOption_S3751
                var zipOrPostalCode = data.acc_billing_ZipOption_S3751
                var stateOrProvinceSelector = data.acc_billing_StateOption_S3751
            }
             //e2e changes updated
             else if(event === 'Billing address-SFDEV-2591'){
                var firstname = data.acc_billing_address_firstName_S2591
                var lastname = data.acc_billing_address_lastName_S2591
                var country = data.acc_billing_CountryOption_S2591
                var address_line1 = data.acc_billing_AddressLineOne_S2591
                var address_line2 = data.acc_billing_AddressLineTwo_S2591
                var city = data.acc_billing_CityOption_S2591
                var zipOrPostalCode = data.acc_billing_ZipOption_S2591
                var stateOrProvinceSelector = data.acc_billing_StateOption_S2591
            }
            //e2e changes updated
            else if(event === 'Billing address-SFDEV-2632'){
                var firstname = data.acc_billing_address_firstName_S2632
                var lastname = data.acc_billing_address_lastName_S2632
                var country = data.acc_billing_CountryOption_S2632
                var address_line1 = data.acc_billing_AddressLineOne_S2632
                var address_line2 = data.acc_billing_AddressLineTwo_S2632
                var city = data.acc_billing_CityOption_S2632
                var zipOrPostalCode = data.acc_billing_ZipOption_S2632
                var stateOrProvinceSelector = data.acc_billing_StateOption_S2632
            }
             //e2e changes updated
             else if(event === 'Billing address-SFDEV-2636'){
                var firstname = data.acc_billing_address_firstName_S2636
                var lastname = data.acc_billing_address_lastName_S2636
                var country = data.acc_billing_CountryOption_S2636
                var address_line1 = data.acc_billing_AddressLineOne_S2636
                var address_line2 = data.acc_billing_AddressLineTwo_S2636
                var city = data.acc_billing_CityOption_S2636
                var zipOrPostalCode = data.acc_billing_ZipOption_S2636
                var stateOrProvinceSelector = data.acc_billing_StateOption_S2636
            }
            //e2e changes updated
            else if(event === 'Billing address-SFDEV-3756'){
                var firstname = data.acc_billing_address_firstName_S3756
                var lastname = data.acc_billing_address_lastName_S3756
                var country = data.acc_billing_CountryOption_S3756
                var address_line1 = data.acc_billing_AddressLineOne_S3756
                var address_line2 = data.acc_billing_AddressLineTwo_S3756
                var city = data.acc_billing_CityOption_S3756
                var zipOrPostalCode = data.acc_billing_ZipOption_S3756
                var stateOrProvinceSelector = data.acc_billing_StateOption_S3756
            }
            else if(event === 'International Billing Address'){
                var country = data.international_address_country 
                var firstname = data.international_address_first_name
                var lastname = data.international_address_last_name
                var address_line1 = data.international_address_line_one
                var address_line2 = data.international_address_line_two
                var city = data.international_address_city
                var zipOrPostalCode = data.international_address_zipcode
                var stateOrProvinceSelector = data.international_address_state
                var phone = data.international_address_phone_number

            }
            else{
            // var country = ref.checkout_billing_country.selector 
            var firstname = data.acc_billing_address_firstName1
            var lastname = data.acc_billing_address_lastName1
            var country = data.acc_billing_CountryOption1
            var address_line1 = data.acc_billing_AddressLineOne1
            var address_line2 = data.acc_billing_AddressLineTwo1
            var city = data.acc_billing_CityOption1
            var zipOrPostalCode = data.acc_billing_ZipOption1
            var stateOrProvinceSelector = data.acc_billing_StateOption1
            var phone = data.acc_billing_PhoneOption1
            }
          
            client.setValue(ref.checkout_billing_country_selectbox.selector, country);
            client.pause(1000);
            client
            .waitForElementVisible(ref.checkout_billing_first_name_textbox.selector)
            .clearValue(ref.checkout_billing_first_name_textbox.selector)
            .setValue(ref.checkout_billing_first_name_textbox.selector, firstname)
            .pause(500)
            .clearValue(ref.checkout_billing_last_name_textbox.selector)
            .setValue(ref.checkout_billing_last_name_textbox.selector, lastname)
            .pause(500)
            // .click(countrySelector)
            .clearValue(ref.checkout_billing_address_line_one_textbox.selector)
            .setValue(ref.checkout_billing_address_line_one_textbox.selector, address_line1)
            .pause(500)
            .clearValue(ref.checkout_billing_address_line_two_textbox.selector)
            .setValue(ref.checkout_billing_address_line_two_textbox.selector, address_line2)
            .pause(500)
            .clearValue(ref.checkout_billing_city_textbox.selector)
            .setValue(ref.checkout_billing_city_textbox.selector, city)
            .pause(500)
            .setValue(ref.checkout_billing_state_selectbox.selector, stateOrProvinceSelector)
            .pause(500)
            .clearValue(ref.checkout_billing_zipcode_textbox.selector)
            .setValue(ref.checkout_billing_zipcode_textbox.selector, zipOrPostalCode)
            .pause(500);
            client.keys(data.tabKey);
        }
        function addPayment(event) {
            if(event === 'Payment details-1') {
                var cardNum = data.cardNumber
                var nameOnCard = data.creditCard_name
                var expDate = data.creditCard_exp_date
                var cvc = data.checkout_CVC3digits
            } 

             //e2e changes updated
            else if (event === 'HBC Card'){
                var cardNum = data.HBCCard
                var nameOnCard = data.creditCard_name
                var expDate = data.creditCard_exp_date
                var cvc = data.checkout_CVC3digits
            }
            //e2e changes updated
            else if (event === 'Loyalty Card Details'){
                var cardNum = data.LoyaltyCardNumber
                var nameOnCard = data.creditCard_name
                var expDate = data.creditCard_exp_date
                var cvc = data.checkout_CVC3digits
            }
            
            else if (event === 'Visa Card Details'){
                var cardNum = data.visaCardNumber
                var nameOnCard = data.creditCard_name
                var expDate = data.creditCard_exp_date
                var cvc = data.checkout_CVC3digits
            }
            
            else if (event === 'Discover Card Details'){
                var cardNum = data.discoverCardNumber
                var nameOnCard = data.creditCard_name
                var expDate = data.creditCard_exp_date
                var cvc = data.checkout_CVC3digits
            }
            else if (event === 'Master Card Details'){
                var cardNum = data.masterCardNumber
                var nameOnCard = data.creditCard_name
                var expDate = data.creditCard_exp_date
                var cvc = data.checkout_CVC3digits
            }
            else if (event === 'Amex Card Details'){
                var cardNum = data.amexCardNumber
                var nameOnCard = data.creditCard_name
                var expDate = data.creditCard_exp_date
                var cvc = data.checkout_CVC4digits
            }
            
            else if (event === 'PLCC Card Details'){
                var cardNum = data.plccCardNumber
                var nameOnCard = data.creditCard_name
                var expDate = data.creditCard_exp_date
                var cvc = data.checkout_CVC3digits
            }
            
            else if(event === 'Invalid Card Details'){
                var cardNum = data.invalidCardNumber
                var nameOnCard = data.creditCard_name
                var expDate = data.invalid_exp_date
                var cvc = data.invalid_cvv_number
            }
         
            else if (event === 'payment-2'){
                var cardNum = data.creditCard_4
                var expMonth = data.creditCard_exp_month
                var expYear = data.creditCard_exp_year
                var cvc = data.checkout_CVC3digits
                var nameOnCard = data.creditCard_name
            } else if(event === 'CoBrand Store Details'){
                var cardNum = data.cobrandcardNumber
                var nameOnCard = data.creditCard_name
                var expDate = data.creditCard_exp_date
                var cvc = data.checkout_CVC3digits
            }else {
                var cardNum = data.creditCard_1
                var expMonth = data.creditCard_exp_month
                var expYear = data.creditCard_exp_year
                var cvc = data.checkout_CVC3digits
                var nameOnCard = data.creditCard_name
            }
            client.pause(3000);
            client.isVisible(ref.checkout_credit_card_collapsed_section.selector, function(result){
                client.click(ref.checkout_add_credit_card_link.selector);
            });
            client
            .setValue(ref.checkout_card_name_text_box.selector, nameOnCard)
            .setValue(ref.checkout_card_number_textbox.selector, cardNum)
            // enterCreditCardNumber(cardNum, ref.checkout_card_number_textbox.selector)
            .setValue(ref.checkout_expiry_date_textbox.selector, expDate)
            .setValue(ref.checkout_cvv_textbox.selector, cvc);
            client.keys(data.tabKey);
            client.pause(2000);
        }

        function addGiftCardInCheckout(event){
            var giftCardNumber;
            var giftCardAccessNumber;
            if(event === 'Gift Card Number'){
                giftCardNumber = data.giftCardNumber;
                giftCardAccessNumber = data.giftCardAccessNumber;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1'){
                giftCardNumber = data.giftCardNumber_1;
                giftCardAccessNumber = data.giftCardAccessNumber_1;
            }

            //e2e changes updated
            else if(event === 'Gift Card Number-2'){
                giftCardNumber = data.giftCardNumber_2;
                giftCardAccessNumber = data.giftCardAccessNumber_2;
            }

            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-3751'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_3751;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_3751;
            }

            //e2e changes updated
            else if(event === 'Gift Card Number-2-SFDEV-3751'){
                giftCardNumber = data.giftCardNumber_2_SFDEV_3751;
                giftCardAccessNumber = data.giftCardAccessNumber_2_SFDEV_3751;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2651'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2651;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2651;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2590'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2590;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2590;
            }
             //e2e changes updated
             else if(event === 'Gift Card Number-1-SFDEV-4589'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_4589;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_4589;
            }
             //e2e changes updated
             else if(event === 'Gift Card Number-2-SFDEV-4589'){
                giftCardNumber = data.giftCardNumber_2_SFDEV_4589;
                giftCardAccessNumber = data.giftCardAccessNumber_2_SFDEV_4589;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2624'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2624;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2624;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2769'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2769;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2769;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2653'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2653;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2653;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-2-SFDEV-2653'){
                giftCardNumber = data.giftCardNumber_2_SFDEV_2653;
                giftCardAccessNumber = data.giftCardAccessNumber_2_SFDEV_2653;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2654'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2654;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2654;
            }
             //e2e changes updated
             else if(event === 'Gift Card Number-1-SFDEV-2598'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2598;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2598;
            }
             //e2e changes updated
             else if(event === 'Gift Card Number-2-SFDEV-2598'){
                giftCardNumber = data.giftCardNumber_2_SFDEV_2598;
                giftCardAccessNumber = data.giftCardAccessNumber_2_SFDEV_2598;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2586'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2586;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2586;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-3756'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_3756;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_3756;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2650'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2650;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2650;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2636'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2636;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2636;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2587'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2587;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2587;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-2-SFDEV-2587'){
                giftCardNumber = data.giftCardNumber_2_SFDEV_2587;
                giftCardAccessNumber = data.giftCardAccessNumber_2_SFDEV_2587;
            }
             //e2e changes updated
             else if(event === 'Gift Card Number-1-SFDEV-2566'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2566;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2566;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2560'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2560;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2560;
            }
             //e2e changes updated
             else if(event === 'Gift Card Number-2-SFDEV-2566'){
                giftCardNumber = data.giftCardNumber_2_SFDEV_2566;
                giftCardAccessNumber = data.giftCardAccessNumber_2_SFDEV_2566;
            }
             //e2e changes updated
             else if(event === 'Gift Card Number-1-SFDEV-2640'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2640;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2640;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2595'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2595;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2595;
            }
            //e2e changes updated
            else if(event === 'Gift Card Number-1-SFDEV-2593'){
                giftCardNumber = data.giftCardNumber_1_SFDEV_2593;
                giftCardAccessNumber = data.giftCardAccessNumber_1_SFDEV_2593;
            }

            else if(event === 'Invalid Gift card Number'){
                giftCardNumber = '1234567890';
                giftCardAccessNumber = data.giftCardAccessNumber_1;
            }

            else if(event === 'Invalid Gift card access number'){
                giftCardNumber = data.giftCardNumber_1;
                giftCardAccessNumber = '0000';
            }
                
                client.pause(1000);
                client.clearValue(ref.checkout_gift_card_textbox.selector);
                client.setValue(ref.checkout_gift_card_textbox.selector,giftCardNumber);
                client.pause(1000);
                client.clearValue(ref.checkout_gift_card_access_number_textbox.selector);
                client.setValue(ref.checkout_gift_card_access_number_textbox.selector, giftCardAccessNumber);
                client.pause(1000);
                client.click(ref.checkout_gift_card_apply_button.selector);
                client.pause(2000);
        }
       function addAssociatePayment(event) { 
            var cardNum = data.creditCard_associate
            var nameOnCard = data.creditCard_name
            client
            .waitForElementVisible('input[name=ccnumber]',data.timeout_median)
            .setValue('input[name=ccnumber]', cardNum)
            .setValue('input[name=nameoncard]', nameOnCard)
        };

        function addGiftMessageInCheckout(event){
            client.waitForElementVisible(ref.checkout_add_gift_message_link.selector, 20000);
            client.click(ref.checkout_add_gift_message_link.selector);
            client.setValue(ref.checkout_gift_recipient_name_textbox.selector, data.gift_recipient_name);
            client.setValue(ref.checkout_gift_message_textbox.selector, data.gift_message);
            client.pause(2000);
            client.keys(data.tabKey);
        }
        
        function bopisPickUpPersonInfo(event) {
            client.waitForElementVisible(ref.checkout_shipping_instore_pickup_full_name_textbox.selector,data.timeout_median);
            client.clearValue(ref.checkout_shipping_instore_pickup_full_name_textbox.selector);
            client.setValue(ref.checkout_shipping_instore_pickup_full_name_textbox.selector, data.instore_pickup_person_name);
            client.clearValue(ref.checkout_shipping_instore_pickup_phone_number_textbox.selector);
            client.setValue(ref.checkout_shipping_instore_pickup_phone_number_textbox.selector, data.instore_pickup_person_number);
            client.clearValue(ref.checkout_shipping_instore_pickup_email_textbox.selector);
            client.setValue(ref.checkout_shipping_instore_pickup_email_textbox.selector, data.instore_pickup_person_email_id);
            client.keys(data.tabKey);
        };

        function addnewpassword(event){
            if(event === 'Change Password details'){
                var oldPWD = data.defaultPassword
                var newPWD = data.changepassword
                var confirmPWD = data.changepassword
            }            
            else if(event === 'Reset Password Details'){
                var oldPWD = data.changepassword
                var newPWD = data.defaultPassword
                var confirmPWD = data.defaultPassword
            }
            client.pause(2000);
            client.clearValue(ref.profile_editpwd_oldpwd_box.selector);
            client.setValue(ref.profile_editpwd_oldpwd_box.selector, oldPWD);
            client.clearValue(ref.profile_editpwd_newPWD_box.selector);
            client.setValue(ref.profile_editpwd_newPWD_box.selector, newPWD);
            client.clearValue(ref.profile_editpwd_newPWD_confirm_box.selector);
            client.setValue(ref.profile_editpwd_newPWD_confirm_box.selector, confirmPWD);
            client.keys(data.tabKey);


        }

        function generateRandomEmailId()
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

        Then(/^Do not enter any value in checkout credit card fields$/,()=>{
            
            client.setValue(ref.checkout_card_name_text_box.selector, '');
            client.keys(data.tabKey);
            client.setValue(ref.checkout_card_number_textbox.selector, '')
            client.keys(data.tabKey);
            client.setValue(ref.checkout_expiry_date_textbox.selector, '')
            client.keys(data.tabKey);
            client.setValue(ref.checkout_cvv_textbox.selector, '');
            client.keys(data.tabKey);
            client.pause(2000);
            return client
        });

        Then(/^Do not enter any value in saved credit card field in checkout payment page$/,()=>{
            client.pause(2000);
            client.setValue(ref.checkout_saved_card_cvv_textbox.selector, '');
            client.keys(data.tabKey);
            return client
        });

        // When(/^I type "(.*?)" into this "(.*?)" field$/, (text, element) => {
        //     switch(element) {
        //         case 'CREDIT CARD NUMBER TEXT' :
        //             client
        //             .waitForElementVisible('input[name=ccnumber]')
        //             .setValue('input[name=ccnumber]', data.creditCard_3)
        //             break
        //         case 'EXP DATE TEXT' :
        //             client
        //             .waitForElementVisible('input[name=month]')
        //             .clearValue('input[name=month]')
        //             .setValue('input[name=month]', data.creditCard_exp_month)
        //             .setValue('input[name=year]', data.creditCard_invalid_exp_year_option1)
        //             break
        //         case 'CVC TEXT' :
        //             client
        //             .waitForElementVisible('input[name=cvc]')
        //             .clearValue('input[name=cvc]')
        //             .setValue('input[name=cvc]', data.checkout_CVC3digits_invalid)
        //             .setValue('input[name=nameoncard]', data.creditCard_name)
        //             break
        //     }
        //     return client
        // })

        When(/^I edit "(.*?)" info$/, (event) => {
            switch(event) {
                case 'Existing card' :
                    editCreditCardInfo()
                    break
                case 'Existing address' :
                    editAddressInfo()
                    break
            }
            return client
        })
            function editCreditCardInfo() {
                client
                .pause(500)
                .waitForElementVisible('input[name=month]')
                .clearValue('input[name=month]')
                .setValue('input[name=month]', data.creditCard_exp_month_option1)
                .clearValue('input[name=year]')
                .setValue('input[name=year]', data.creditCard_exp_year_option1)
                .setValue('input[name=cvc]', data.checkout_CVC3digits)
            }
            function editAddressInfo() {
                client
                .waitForElementVisible('input[name=address1]')
                // .clearValue('input[name=first_name]')
                // .setValue('input[name=first_name]', data.acc_address_firstName1)
                // .clearValue('input[name=last_name]')
                // .setValue('input[name=last_name]', data.acc_address_lastName1)
                .clearValue('input[name=address1]')
                .setValue('input[name=address1]', data.acc_AddressStreetOptionA)
                // .clearValue('input[name=city]')
                // .setValue('input[name=city]', data.acc_CityOptionA)
                // .click(ref.checkout_state_optionA_css.selector)
                // .clearValue('input[name=zip]')
                // .setValue('input[name=zip]', data.acc_ZipOptionA)
                // .clearValue('input[name=phone]')
                // .setValue('input[name=phone]', data.acc_PhoneOptionA)
                .pause(500)
            }

        //****INTERNATIONAL CONTEXT CHOOSER */
        When(/^I change the flag to "(.*?)" via context chooser$/, (event) => {
            run(`I click on - "THE FLAG IN THE HEADER"`);
            run ('Then verify "ContextChoose COUNTRY DROPDOWN" is displayed');
            switch(event) {
                case 'country-1' :
                    run(`I click on - "Canada from the contextchooser dropdown"`)
                    run(`I click on - "SAVE & CONTINUE SHOPPING - CONTEXCHOOSER"`)
                    run ('Then verify "INTL WELCOMEMAT" is displayed')
                    run(`I click on - "CONTINUE SHOPPING - intl welcomemat"`)
                    break;
                case 'country-2' :
                    run(`I click on - "Spain from the contextchooser dropdown"`)
                    run(`I click on - "UScurrency from the contextchooser dropdown"`)
                    run(`I click on - "SAVE & CONTINUE SHOPPING - CONTEXCHOOSER"`)
                    run ('Then verify "INTL WELCOMEMAT - Spain" is displayed')
                    run(`I click on - "CONTINUE SHOPPING - intl welcomemat"`)
                   
                    break;
            }
            return client
        })
        //Currency validation 
        Then(/^validate "(.*)" on the "(.*)"$/, (country ,page) => {
            if(country === 'country-1 currency') {
                var currency = data.countrycurrency_optionA
            } else if(country === 'country-2 currency') {
                var currency = data.countrycurrency_optionB
            }
            switch(page) {
                case 'bag page' :
                case 'checkout page' :
                    client.assert.containsText(ref.orderSummary_total_css.selector, currency) 
                    break          
            }
            return client
        })
        //PAYPAL
        When(/^I login with my "(.*?)" username and password$/, (event) => {
            switch(event) {
                case 'PAYPAL-1' :
                    run('I enter my "PAYPAL USERNAME1" in the textbox')
                    break;
                case 'PAYPAL-2' :
                    run('I enter my "PAYPAL USERNAME2" in the textbox')
                    break;
                }
            run(`I click on - "NEXT - PAYPAL LOGIN PAGE"`)
            run('I enter my "PAYPAL PASSWORD" in the textbox')
            run(`I click on - "LOGIN - PAYPAL LOGIN PAGE"`)
            client.waitForElementNotPresent(ref.paypalSandbox_oneTouch_btn_css.selector, 3000, false, function(result) {  // Turn On One Touch
                if (result.status === 0){
                    client
                    .click(ref.paypalSandbox_oneTouch_btn_css.selector)
                }
            })
            .waitForElementVisible(ref.paypalSandbox_saveContinue_btn_css.selector, data.timeout_max)
            run(`I click on - "AGREE&CONTINUE - PAYPAL LOGIN PAGE"`)
            client.pause(2000) 
            return client
        })
        //SHOPRUNNER
        When(/^I login with my SHOPRUNNER username and password$/, () => {
            run('I enter my "SHOPRUNNER PASSWORD" in the textbox')
            run('I enter my "SHOPRUNNER PASSWORD" in the textbox')
            run('I enter my "SHOPRUNNER USERNAME" in the textbox')
            run(`I click on - "SECURE SIGN IN BUTTON - SHOPRUNNER OVERLAY"`)
            client.pause(5000)
            return client
        })
        //BOPIS
        When(/^I enter my BOPIS "(.*?)" and payment and billing info$/, (event) => {
            switch(event) {
                case 'IN-STORE PICKUP PERSON' :
                    run(`Then I enter my "IN-STORE PICKUP PERSON" in the textbox`)
                    run(`I click on - "IN-STORE PICKUP PERSON FORM SUBMIT BUTTON"`)
                    break;
            }
            run(`Then I enter my "Payment details-1" in the textbox`)
            client.waitForElementVisible(ref.checkout_guest_payment_submit_css.selector, data.timeout_max)
            run(`I click on - "SUBMIT PAYMENT BUTTON"`)
            client.pause(2000)
            run('And I click on - "ADD NEW ADDRESS - ENTER PAYMENT METHOD"')
            run('And I enter my "Billing address-1" in the textbox')
            run('And I click on - "ADD ADDRESS - SUBMIT BUTTON"')
            run('And I click on - "SAVE&CONTINUE - ENTER PAYMENT METHOD"')
            run('And verify "CREDIT CARD INFO UNDER PAYMENT METHOD" is displayed')
            return client
            });
        When(/^I check BOPIS store inventory using a "(.*?)" zip code$/, (zipCodeStatus) => {
            client
            .execute('scrollTo(0, 0)')
            // if product has color
            .waitForElementNotVisible(ref.pdp_color_optionA_item1_css.selector, 3000, false, function(result) {  // color css selector
                console.log("**************** COLOR result.status:- "+ result.status);
                if (result.status === 0){
                    client
                    .click(ref.pdp_color_optionA_item1_css.selector) //select color
                }
            })
            // if product has size
            .waitForElementNotPresent(ref.pdp_size_optionA_item1_css.selector, 3000, false, function(result) {  // size css selector
                console.log("**************** SIZE result.status:- "+ result.status);
                if (result.status === 0){
                    console.log("**************** IF condition SIZE result.status:- "+ result.status);
                    client
                    .click(ref.pdp_size_optionA_item1_css.selector) //select color
                }
            })
            .clearValue(ref.pdp_bopis_zipcodeEntry_css.selector)
            .pause(1000)
            switch(zipCodeStatus) {
                case 'incorrect' :
                    client
                    .setValue(ref.pdp_bopis_zipcodeEntry_css.selector, data.bopis_incorrect_zip)
                    .pause(1000)
                break
                case 'correct' :
                    client
                    .setValue(ref.pdp_bopis_zipcodeEntry_css.selector, data.bopis_correct_zip)
                    .pause(1000)
                break
            }
            client.click(ref.pdp_bopis_checkStores_btn_css.selector)
            return client
        });

        Then(/^Verify "(.*?)" is disabled$/,(action)=>{
            var element;
            switch(action){
                case 'gift card number in checkout page':
                    element = ref.checkout_gift_card_textbox.selector
                    break;

                case 'gift card access number in checkout page':
                    element = ref.checkout_gift_card_access_number_textbox.selector
                    break;

                case 'gift card apply button in checkout page':
                    element = ref.checkout_gift_card_apply_button.selector
                    break;

                case 'credit card name field in checkout payment page':
                    element = ref.checkout_card_name_text_box.selector
                    break;
                    
                case 'credit card number field in checkout payment page':
                    element = ref.checkout_card_number_textbox.selector
                    break;
                    
                case 'credit card expiry date field in checkout payment page':
                    element = ref.checkout_expiry_date_textbox.selector
                    break;

                case 'credit card cvv field in checkout payment page':
                    element = ref.checkout_cvv_textbox.selector
                    break;

                case 'save and continue button in checkout payment page':
                element = ref.checkout_billing_payment_save_and_continue_button.selector
                break;
                
                case 'save pick up location button':
                    element = ref.pdp_select_store_button.selector
                    break;

            }
            client.assert.attributeContains(element,'disabled','true');
            return client
        });
        

        Then(/^I see "(.*?)" count is (\d+)$/, (action, count)=>{
            var element;
            switch(action){
                case 'applied gift card':
                    element = ref.checkout_applied_gift_card.selector
                    break;

                case 'total number of orders in order history page':
                element = ref.order_history_page_order_number.selector
                break;    
            }

            client.elements('css selector', element, function(result){
                client.assert.equal(result.value.length, count);
            })

            return client
        });

        Then(/^I Verify the "(.*?)" in "(.*?)" page$/, (creditCardType, page)=>{
            var cardNumberElement;
            var cardTypeElement;
            var lastFourDigitCardNumber;
            var cardTypeText;
            switch(creditCardType){
                case 'Visa Card Details':
                        lastFourDigitCardNumber = data.visaCardLastFourDigit;
                        cardTypeText = 'Visa';
                        cardType= 'VISA'
                        break;

                case 'Master Card Details':
                        lastFourDigitCardNumber = data.masterCardLastFourDigit;
                        cardTypeText = 'Master';
                        cardType= 'MASTER'
                        break;
                        
            }

            switch(page){
                case 'payment section in order review':
                        cardNumberElement = ref.order_review_credit_card_number.selector
                        cardTypeElement = ref.order_review_card_type.selector
                    break;

                case 'order summary section in order revie':
                        cardNumberElement = ref.order_review_card_number_in_order_summary_section.selector
                        cardTypeElement = ref.order_review_cart_type_in_order_summary_section.selector
                    break;    
                
                case 'my account order details':
                        cardNumberElement = ref.order_details_card_number.selector
                        cardTypeElement = ref.order_details_card_type.selector
                    break;

                    case 'my account payment page':
                        cardNumberElement = ref.payment_card_last_digit.selector
                        cardTypeElement = ref.payment_card_type.selector
                    break;
     
            }
            if(page === 'my account payment page')
            {
                client.assert.containsText(cardNumberElement, lastFourDigitCardNumber);
                client.assert.containsText(cardTypeElement, cardType); 
            }else{
                client.assert.containsText(cardNumberElement, lastFourDigitCardNumber);
                client.assert.containsText(cardTypeElement, cardTypeText);
            }            

            return client
        });


  Then(/^Verify the applied "(.*?)" in "(.*?)" page$/,(giftCard, page)=>{
    var giftCardNumberLastFourDigit;
    var giftCardNumberElement;
    switch(giftCard){
        case 'Gift Card Number':
                giftCardNumberLastFourDigit = data.giftCardLastFourDigits;
                break;
    }

    switch(page){
        case 'checkout order review':
            giftCardNumberElement = ref.order_review_gift_card_number.selector
            break;

        case 'order summary section in checkout order review':
                giftCardNumberElement = order_review_giftcard_number_in_order_summary_section.selector
                break;
    }
    client.assert.containsText(giftCardNumberElement, giftCardNumberLastFourDigit);

    return client
  });

        Then(/^Verify the billing address is different from shipping checkbox is unchecked$/, ()=>{
            client.assert.attributeContains(ref.checkout_billing_address_checkbox_status.selector,'class','d-none');
            return client
        });

    //    -------------------- Verify Address in different pages


    // -------------------------------------------

         Then(/^Verify the pre-populated "(.*?)" data in the "(.*?)"$/,(address, section)=>{
            switch(section){
                case 'checkout shipping address fields':
                        verifyPrePopulatedShippingForm(address);
                        break;

            }

            return client
         })

         function verifyPrePopulatedShippingForm(address){
             if(address === 'Shipping address-1'){
                var firstName = data.acc_address_firstName1; 
                var lastName = data.acc_address_lastName1;
                var addressLine1 = data.acc_AddressStreetOption1;
                var addressLine2 = data.acc_AddressStreetTwoOption1;
                var city = data.acc_CityOption1;
                var state = data.acc_StateOrProvince1;
                var zipCode = data.acc_ZipOption1;
                var phoneNumber = data.acc_PhoneOption1;
                             
             }
             client.assert.attributeContains(ref.checkout_shipping_first_name_textbox.selector,'value',firstName);
             client.assert.attributeContains(ref.checkout_shipping_last_name_textbox.selector,'value',lastName);
             client.assert.attributeContains(ref.checkout_shipping_address1_textbox.selector,'value',addressLine1);
             client.assert.attributeContains(ref.checkout_shipping_address2_textbox.selector,'value',addressLine2);
             client.assert.attributeContains(ref.checkout_shipping_city_textbox.selector,'value',city);
             client.assert.attributeContains(ref.checkout_shipping_postcode_textbox.selector,'value',zipCode);
             client.assert.attributeContains(ref.checkout_shipping_phone_number_textbox.selector,'value',phoneNumber);

         }

         Then(/^I clear the "(.*?)"$/,(page)=>{
            switch(page){
                case 'Billing address fields in checkout page':
                        clearBillingAddressInCheckout();
                        break;

                case 'Shipping address fields in checkout page':      
                clearCheckoutShippingAddressFields();
                break;

            }

            return client
         });

         function clearBillingAddressInCheckout(){
            client
            .waitForElementVisible(ref.checkout_billing_first_name_textbox.selector)
            .clearValue(ref.checkout_billing_first_name_textbox.selector)
            .clearValue(ref.checkout_billing_last_name_textbox.selector)
            .pause(200)
            .clearValue(ref.checkout_billing_address_line_one_textbox.selector)
            .clearValue(ref.checkout_billing_address_line_two_textbox.selector)
            .clearValue(ref.checkout_billing_city_textbox.selector)
            .clearValue(ref.checkout_billing_zipcode_textbox.selector);
            client.keys(data.tabKey);
         }
         function clearCheckoutShippingAddressFields(){
             
             client.pause(2000)
             client.clearValue(ref.checkout_shipping_email_textbox.selector);
             client.clearValue(ref.checkout_shipping_phone_number_textbox.selector);
             client.clearValue(ref.checkout_shipping_postcode_textbox.selector);
             client.clearValue(ref.checkout_shipping_city_textbox.selector);
             client.clearValue(ref.checkout_shipping_address2_textbox.selector);
             client.clearValue(ref.checkout_shipping_address1_textbox.selector);
             client.clearValue(ref.checkout_shipping_last_name_textbox.selector);
             client.clearValue(ref.checkout_shipping_first_name_textbox.selector);
             client.waitForElementVisible(ref.checkout_shipping_first_name_textbox.selector)
             // client.keys(data.tabKey);
             client.pause(1000);
        }



         Then(/^Verify the checkout billing address fields error message$/,()=>{

            client.assert.containsText(ref.checkout_billing_first_name_field_error_message.selector, 'This field is required.');
            client.assert.containsText(ref.checkout_billing_last_name_field_error_message.selector, 'This field is required.');
            client.assert.containsText(ref.checkout_billing_address_line_one_field_error_message.selector, 'This field is required.');
            client.assert.containsText(ref.checkout_billing_city_field_error_message.selector, 'This field is required.');
            client.assert.containsText(ref.checkout_billing_zipcode_field_error_message.selector, 'This field is required.');
            
            return client
        })


        // ############################################################
        Then(/^Verify the "(.*?)" address in "(.*?)"$/, (address, page)=> {
            client.pause(3000);
            var element;
            var expectedAddress;
            var phoneNumber;
            // For Address
            switch(address){
                case 'Shipping address-1':
                        expectedAddress = data.completeAddress_format_1;
                        phoneNumber = data.acc_PhoneOption1;
                        break;
                case 'Shipping address-2':
                        expectedAddress = data.address_format_1;
                        phoneNumber = data.shipping_phone_number;
                        break;

                    case 'address':
                            expectedAddress = data.complete_save_address;
                            phoneNumber = data.save_address_phone_number;
                            break;
                    case 'Billing address-1':
                    case 'Billing address':
                            expectedAddress = data.acc_billing_full_address;
                            phoneNumber = data.acc_billing_PhoneOption1;
                            break;
            }

            // Address section/page
            switch(page){
                    case 'checkout shipping address page':
                        element = ref.checkout_saved_shipping_address.selector
                        expectedAddress = expectedAddress +' '+ phoneNumber;
                        break;

                    case 'checkout payment page shipping address section':
                        element = ref.checkout_payment_page_shipping_address.selector
                        expectedAddress = expectedAddress +' '+ phoneNumber;
                        break;

                    case 'checkout billing address page':
                        element = ref.checkout_saved_billing_address.selector
                        break;

                    case 'checkout order review page shipping address section':
                        element = ref.order_review_shipping_address.selector
                        break;

                    case 'checkout order review page billing address section':
                        element = ref.order_review_billing_address.selector
                        break;

                    case 'shipping address in order details page':
                        element=ref.order_details_shipping_address.selector
                        break;
                        
                    case 'billing address in order details page':
                        element = ref.order_details_billing_address.selector
                        break;

                    case 'saved address in my account address book page':
                        element=ref.address_book_saved_address.selector
                        break;

            }

             client.getText(element, function(result){
                var actualAddress = result.value.replace(/(?:\r\n|\r|\n)/g, ' ').replace(/, /g, ' ').replace('Edit','').trim();
                console.log("***************expectedAddress:- "+ expectedAddress);
                console.log("***************actualAddress:- "+ actualAddress);
                client.assert.equal(actualAddress, expectedAddress);
            })
          

            return client
        });


        Then(/^Remove applied gift cards in checkout payment section$/,()=>{
            client.elements('css selector',ref.checkout_gift_card_remove_icon.selector, function(result){
                console.log("******** NUMBER OF APPLIED GIFT CARDS:- "+ result.value.length);

                for (let index = 0; index < result.value.length; index++) {
                    const element = result.value[index];
                    client.click(ref.checkout_gift_card_remove_icon.selector);
                    client.pause(2000);                        
                }
            })

            

            return client
        });


    Then(/^Enter Credit card$/,()=>{
        var cardNum = data.visaCardNumber;
        var element = ref.header_search_box.selector;
        enterCreditCardNumber(cardNum, element);
        return client
    });

    function enterCreditCardNumber(cardNumber, element){
        var ary = cardNumber.split('');
        console.log("************ary length:- "+ ary.length);

        for (let index = 0; index < ary.length; index++) {
            const num = ary[index];
            console.log('*********NUMBER:- '+ num);
            client.setValue(element, num);

        }

    }

    Then(/^Navigate back to previous page$/,()=>{
        client.execute(function () {
            window.history.back()
        })
        return client
    });

    Then(/^Refresh the page$/,()=>{
        client.refresh();
        return client
    });

    // Then(/^Select "(.*?)" shipping method$/,(shippingMethod)=>{

    //     client.elements('css selector', ref.checkout_shipping_methods_name_list.selector, function(result){
    //         console.log("******* Number of shipping methods:- "+ result.value.length);
    //         for (let index = 0; index < result.value.length; index++) {
    //             const element = result.value[index];
    //             client.elementIdText(element.ELEMENT, function(result){
    //                 console.log("************ Shipping Method name:- "+ result.value);

    //                     if(result.value.includes(shippingMethod)){
    //                         client.elementIdClick(element.ELEMENT);
    //                         client.pause(4000);
    //                     }
    //             })
                
    //         }
    //     })

    //     return client
    // });

    Then(/^Select "(.*?)" shipping method$/,(shippingMethod)=>{
        client.elements('css selector', ref.checkout_shipping_methods_name_list.selector, function(result){
            console.log("******* Number of shipping methods:- "+ result.value.length);
            for (let index = 0; index < result.value.length; index++) {
                const element = result.value[index];
                client.elementIdText(element.ELEMENT, function(result){
                    console.log("************ Shipping Method name:- "+ result.value);
                        if(result.value==shippingMethod){
                            client.elementIdClick(element.ELEMENT);
                            client.pause(4000);
                        }
                })
            }
        })
        return client
    });
//e2e changes updated
    Then(/^I select size$/,()=>{
        // client.pause(2000);
        client.click(ref.pdp_selected_size.selector);
        client.pause(2000);
        client.click(ref.pdp_pickup_in_store_radio_button_label.selector);
        // client.pause(8000);
        return client
});

Then(/^I select Shipping Method$/,()=>{
    // client.pause(2000);
    client.click(ref.pdp_selected_size.selector);
    client.pause(2000);
    client.click(ref.pdp_pickup_in_store_radio_button_label.selector);
    // client.pause(8000);
    return client
});

//e2e changes updated
Then(/^I Select Product Size "(.*?)" from PDP Page$/,(size)=>{
    client.pause(2000);
    client.elements('css selector', ref.pdp_item_size_available.selector, function(result){
        var elementsList = result.value;
        var count = result.value.length;
        console.log("****************Elements count :- "+count);
        for (let index = 0; index < elementsList.length; index++) {
            const element = elementsList[index];
            client.elementIdText(element.ELEMENT, function(result){
                console.log("***********My Account Link Text:-"+result.value);
                if(result.value === size){
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

    }
   
} 