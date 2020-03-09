const { client } = require('nightwatch-api');
const { Given, When, Then, run } = require('../../utility/helper')

module.exports = {
  main: function(data, ref) {


    When(/^I open "(.*)"$/, url => {
        console.log(url);
        client.deleteCookies();
        client.maximizeWindow();
        client.url(url);
    })


    /*When(/^I click on "(.*?)" in the "(.*?)"$/, (element, placeholder) => {
      console.log(element);
      console.log(placeholder);
      run('Then I should see ' + element);
      run('Then I click on ' + element);
      return client
    })*/

    Then(/^I should be taken to "(.*?)" page$/, (pagetitle) => {
      console.log(pagetitle);
      return client.assert.title(pagetitle);
    });



    Then(/^I click on "(.*)"$/, (action) => {
      var element;
      client.pause(200)
      switch(action) {

        //------------------------------------------------
        case 'Sign In link' :
            element = ref.signin_link_css.selector
            break;        
           
        case 'SignInLink' :
            element = ref.signin_link.selector
            break;
            
        case 'Header create account link' :
            element = ref.header_create_account_link.selector
            break;                      
    
        case 'Order Status Link' :
            element = ref.header_orderstatus_link.selector
            break;

        case 'site logo' :
              element = ref.site_logo.selector
              break;

        case 'minicart link':
          element = ref.minicart_link.selector
          break;

        case 'women category link' :
            element = ref.women_root_category_link.selector
            break;

        case 'search icon in header search bar' :
            element=ref.header_searchBar_button.selector
            break; 

        case 'header country selector link' :
            element = ref.header_country_selector.selector
            client.pause(1000);
            break;
              
        case 'header myaccount link' :
             element = ref.header_my_account_link.selector
            break;   

        case 'header store locator icon':
              element = ref.store_locator_icon.selector
            break;
             
        case 'header wishlist link':
            element = ref.header_wishlist_link.selector
            break; 
            
            //product page wishlist icon---------------------------------------------
         case 'wishlist icon product page':
            element = ref.wishlist_icon_product_page.selector
            break;  

        case 'header signout link':
            element = ref.header_signout_link.selector     
            break;

        case 'search suggestion link':
            element = ref.search_result_page_did_you_mean_link.selector
            break;    

        case 'back to top button' :
            element = ref.back_to_top_active_button.selector
            break;

        case 'home link in breadcrumb' :
            element = ref.first_link_in_breadcrumb.selector
            break;    

        case 'expanded category section in search result page' :
            element = ref.search_result_page_category_expanded.selector
            break;

        case 'collapsed category section in search result page' :
            element = ref.search_result_page_category_collapsed.selector
            break;

        case 'category refinement in search result page' :
            element = ref.search_result_page_refinement_category_heading.selector
            break; 
            
        case 'color refinement in search result page' :
            element = ref.search_result_page_refinement_color_heading.selector
            break; 
                    
        case 'size refinement in search result page' :
                element = ref.search_result_page_refinement_size_heading.selector
                break; 

        case 'price refinement in search result page':
                element = ref.search_result_page_refinement_price_heading.selector
                break; 
        case 'brand refinement in search result page' :
                element = ref.search_result_page_refinement_brand_heading.selector
                break; 
        case 'promotion refinement in search result page' :
            element = ref.search_result_page_promotion_filter_heading.selector
            break;
        
            case 'designer refinement in search result page':
                element=ref.search_result_page_designer_filter.selector
                break;

        case 'category refinement link in search result page':
                element = ref.search_result_page_category_swatch.selector
                break;

        case 'color refinement link in search result page':
            element = ref.search_result_page_color_swatch.selector
            break;    
            
        case 'price refinement link in search result page':
            element = ref.search_result_page_price_range_link.selector
            break;   
            
        case 'selected refinement close link':
            element = ref.search_result_page_selected_filter_link.selector
            break; 
            
        case 'clear all link in selected filter section' :
            element = ref.search_result_page_clearall_link.selector
            break;    

        case 'price refinement go button':
            element = ref.search_result_page_price_refinement_go_button.selector
            break;    

        case 'available promotion link in search result page':
            element = ref.search_result_page_promotion_link.selector
            break;
        
        case 'product name in PLP':
            element = ref.search_result_page_products_link.selector
            break;
        case 'product image in PLP':
            element = ref.search_result_page_product_image.selector
            break;    

        case 'wishlist icon in search result page':
            client.pause(1000);
            element = ref.search_result_page_product_wishlist_icon.selector
            break;    
         
        case 'add to cart button in plp':
            element = ref.search_result_page_add_to_cart_button.selector
            break;

        case 'product name in plp':
            element = ref.search_result_page_product_name_link.selector
            break;
        
        case 'product detail tab':
            element = ref.pdp_details_tab.selector
            break;    

        case 'shopping and return tab in pdp':
            element =ref.pdp_shopping_and_details_tab.selector
            break;

        case 'add to cart button in pdp':
            element = ref.pdp_add_to_cart_button.selector
            break;

        case 'Buy Online & Pick Up button':
            element = ref.pdp_add_to_cart_button.selector
            break; 

        case 'selectable color swatch in pdp':
            element = ref.pdp_selectable_color_swatch.selector
            break;    

        case 'pickup in store radio button in pdp':
            element = ref.pdp_pickup_in_store_radio_button.selector
            break;

        case 'pdp view wishlist link':
            element = ref.pdp_view_wishlist_link.selector
            break;    

        case 'pdp choose a store link':
            element = ref.pdp_choose_a_store_links.selector
            break; 

            //&&&&&&&&&&&&&&&
        case 'plp choose a store link':
            element=ref.plp_choose_a_store_links.selector
            break;

        case 'store name link in PLP':
            element=ref.store_name_link_plp.selector
            break;

//&&&&&&&&&&&&&&&7
        
            case 'add to waitlist button':
                element = ref.add_to_waitlist_button.selector
                break;    
    
            case 'brand name link in pdp':
                element = ref.pdp_product_brand_name.selector
                break;    
    
            case 'size guide link in pdp':
                element = ref.pdp_size_guide_link.selector
                break;    
             
            case 'size guide popup close icon':
                element = ref.pdp_size_guide_modal_popup_close_icon.selector
                break;
    
            case 'find a location in pdp':
                element = ref.pdp_find_location_button.selector
                break;
    
            case 'pdp check stor button':
                element = ref.pdp_check_store_button.selector;
                client.pause(2000);
                break;  
    
            case 'pdp chose store tray close icon':
                element = ref.pdp_chose_store_tray_close_icon.selector
                break  

// ############# CART PAGE Started ##############
        case 'paypal button in cart page':
            element = ref.cart_paypal_button.selector
            break;    
        case 'checkout button in cart page':
            element = ref.cart_checkout_button.selector
            break;

        case 'close icon in cart signup flyout':
            element = ref.cart_signup_flyout_close_icon.selector
            break;

        case 'intermediate signin button':
            element = ref.intermediate_login_signin_button.selector
            break;

        case 'forgot password link inintermediate section':
        case 'forgot password link in sigin page':
            element = ref.intermediate_login_forgot_password_link.selector
            break;
        case 'checkout as guest button in cart page':
            element = ref.intermediate_login_guest_checkout_button.selector
            break;    

        case 'apply promo code link in cart page':
            element=ref.apply_promo_code_link_in_cart_page.selector
            break;
            
        case 'apply promo code button in cart page':
            element = ref.promo_code_apply_button_in_cart_page.selector
            break;    

            case 'pick up in store radio button in cart page':
                element = ref.cart_pickup_in_store_radio_button.selector
                break;
// ############# CART PAGE ENDED ##############

        case 'search result page quickview link':
            element=ref.search_result_page_quickview_link.selector
            break;

        case 'add to cart button in quickview':
            element = ref.search_result_page_quickview_addtocart_button.selector    
            break;

        case 'view more details link in quickview popup':
            element = ref.search_result_page_quickview_view_details_link.selector
            break;    

        case 'close icon in quick view popup':
            element = ref.search_result_page_quickview_close_icon.selector
            break;

        case 'more color swatch link in search result page':
            element = ref.search_result_page_more_color_swatch_link.selector
            break;    

        case 'sort by dropdown box':
            element = ref.sortby_dropdown.selector
            break;    
        case 'sort by price high to low':
            element = ref.sortby_price_high_to_low.selector
            break;
            
        case 'sort by price low to high':
            element=ref.sortby_price_low_to_high.selector
            break;

        case 'sort by top sellers':
            element = ref.sortby_top_sellers.selector
            break;    

        case 'sort by sale first':
            element =ref.sortby_sale_first.selector
            break;

        case 'sort by newest':
            element=ref.sortby_newest.selector
            break;     
            
        case 'breadcrumb last link':
            element = ref.breadcrumb_last_link.selector
            break;    

        case 'wishlist icon in pdp':
            element = ref.pdp_product_wishlist_icon.selector
            break;

        case 'product name in search suggestion overlay':
            element = ref.search_suggestion_first_product_name.selector
            break;    

        case 'product image in search suggestion overlay':
            element = ref.search_suggestion_first_product_image.selector
            break;
            
            
        //   *******************FOOTER LINKS STARTED ***********************

                case 'footr email offer link':
                element = ref.footer_email_offer_link.selector
                break;
                
                case 'footer download the app link':
                element = ref.footer_download_the_app_link.selector
                break;
                
                case 'footer store locator and events link':
                element = ref.footer_store_locator_and_events.selector
                break;
                
                case 'footer hbc rewards link':
                element = ref.footer_hbc_rewards.selector
                break;

                case 'footer contact us link':
                element = ref.footer_contact_us_link.selector
                break;

                case 'footer help and faq link':
                element = ref.footer_help_and_faq_link.selector
                break;

                case 'footer Shipping and returns link':
                element = ref.footer_Shipping_and_returns_link.selector
                break;

                case 'footer order status link':
                element = ref.footer_order_status_link.selector
                break;

                case 'footer order history link':
                element = ref.footer_order_history_link.selector
                break;

                case 'footer gift cards link':
                element = ref.footer_gift_cards_link.selector
                break;

                case 'footer product protection link':
                element = ref.footer_product_protection_link.selector
                break;

                //*************OFF5TH FOOTER STARTED********************* */

                case 'off5th footer gift cards link':
                element = ref.off5th_footer_gift_cards_link.selector
                break;

                case 'footer More insider Access link':
                element = ref.footer_More_insider_Access_link.selector
                break;

                case 'footer Create A More Account link':
                element = ref.footer_Create_A_More_Account_link.selector
                break;

                case 'footer Shipping Policy link':
                element = ref.footer_Shipping_Policy_link.selector
                break;

                case 'footer Returns Exchanges link':
                element = ref.footer_Returns_Exchanges_link.selector
                break;

                case 'footer Order Status Tracking link':
                element = ref.footer_Order_Status_Tracking_link.selector
                break;

                case 'footer International link':
                element = ref.footer_International_link.selector
                break;

                case 'footer About SaksFirst link':
                element = ref.footer_About_SaksFirst_link.selector
                break;

                case 'footer Pay Bills Manage link':
                element = ref.footer_Pay_Bills_Manage_link.selector
                break;

                case 'footer Apply for the SaksFirst Store Card link':
                element = ref.footer_Apply_for_the_SaksFirst_Store_Card_link.selector
                break;
                
                case 'footer Location Events link':
                element = ref.footer_Location_Events_link.selector
                break;

                case 'footer Privacy Policy link':
                element = ref.footer_Privacy_Policy_link.selector
                break;

                case 'footer Website Terms of Use link':
                element = ref.footer_Website_Terms_of_Use_link.selector
                break;
                
                case 'off5th footer Careers link':
                element = ref.off5th_footer_Careers_link.selector
                break;

//*************OFF5TH FOOTER ENDS********************* */


                case 'footer personal shopping link':
                element = ref.footer_personal_shopping_link.selector
                break;

                case 'footer sms updates link':
                element = ref.footer_sms_updates_link.selector
                break;

                case 'footer title Kleinfelds bridal link':
                element = ref.footer_title_Kleinfelds_bridal_link.selector
                break;  

                case 'footer topshop link':
                element = ref.footer_topshop_link.selector
                break;

                case 'footer topman link':
                element = ref.footer_topman_link.selector
                break;

                case 'footer hbc credit link':
                element = ref.footer_hbc_credit_link.selector
                break;

                case 'footer insurance link':
                element = ref.footer_insurance_link.selector
                break;

                case 'footer home protecton plans link':
                element = ref.footer_home_protecton_plans_link.selector
                break;

                case 'footer mortgages link':
                element = ref.footer_mortgages_link.selector
                break;

                case 'footer total guard product protection link':
                element = ref.footer_total_guard_product_protection_link.selector
                break;

                case 'footer investor relations link':
                element = ref.footer_investor_relations_link.selector
                break;

                case 'footer careers link':
                element = ref.footer_careers_link.selector
                break;

                case 'footer services link':
                element = ref.footer_services_link.selector
                break;


                case 'footer become an affiliate':
                element = ref.footer_become_an_affiliate.selector
                break;

        //   *******************FOOTER LINKS ENDED ***********************   
        
        // ************** PROFILE LINKS ***********************
        case 'my account order history link':
            element = ref.myaccount_order_history_link.selector
            break;
        
            case 'gift card balance link':
                element = ref.myaccount_gift_card_balance_link_first.selector
                break;
        
        case 'my account gift card balance link':
            element = ref.myaccount_gift_card_balance_link.selector
            break;
        case 'gift card balance check balance button':
            element = ref.gift_card_balance_check_balance_button.selector
            break;    

        case 'keep shopping button in gift card balance popup':
            element = ref.gift_card_balance_keep_shopping.selector
            break;    
        case 'where are the gift codes link':
            element = ref.where_are_the_gift_codes_link.selector
            break;
        
            case 'GWP PDP shop link':
                element = ref.gwp_pdp_shop_button.selector
                break;
        
        case 'Create account submit':
            element = ref.hbc_create_account_submit.selector
            break;
        
        case 'Forgot Password Submit':
            element = ref.forgot_password_submit_button.selector
            break;

        case 'Profile pwd Edit Link':
            element = ref.profile_password_editLink.selector
            break;
        
        case 'Edit password cancel button':
            element = ref.profile_editpwd_cancel_button.selector
            break;
        
        case 'Edit password save button':
            element = ref.profile_editpwd_save_button.selector
                break;
        
        case 'Login CreateAccount link':
            element = ref.loginpage_create_account_link.selector
            break;

        case 'Address Make default link':
            element = ref.address_makedefault_link.selector
            break;

        case 'Edit Address':
            element = ref.address_edit_link.selector
            break;
        
            case 'add to cart button in wishlist page':
                element = ref.wishlist_page_add_to_cart_button.selector
                break;
        
            case 'Keep Shopping':
                element = ref.cart_keep_shopping_button.selector
                break;
            
            case 'Sign In Create Account':
                element = ref.signin_page_createAccount_link.selector
                break;

            case 'GWP Select link':
                element = ref.gwp_bonusproduct_select_link.selector
                break;

            case 'Bonus products option':
                element = ref.gwp_bonus_promo_link.selector
                break;

            case 'Select bonus product':
                element = ref.gwp_bonus_promo_product.selector
                break;
            
            case 'Add Bonus Product to cart':
                element = ref.gwp_add_to_bag.selector
                break;

                 //&&&&&&&&&&&&&&&&&&& The bay links started &&&&&&&&&&&&&&&&&&&&//

        case 'footer facebook icon link':
            element=ref.footer_facebook_icon_link.selector
            break;
         case 'footer pinterest icon link':
             element=ref.footer_pinterest_icon_link.selector
             break;
         case 'footer Instagram icon link':
            element=ref.footer_instagram_icon_link.selector
            break;
         case 'footer twitter icon link':
            element=ref.footer_twitter_icon_link.selector
            break;
         case 'footer youtube icon link':
            element=ref.footer_youtube_icon_link.selector
            break;
         case 'footer privacy policy link':
            element=ref.footer_privacy_policy_link.selector
            break;
         case 'footer Terms And Conditions link':
            element=ref.footer_Terms_And_conditions_link.selector
            break;
         case 'footer Site Feedback link':
            element=ref.footer_Site_Feedback_link.selector
            break;

                //&&&&&&&&&&&&&
        case 'hbc login button':
            element =ref.hbc_login_button.selector;
            break;
    
    
            case 'Add to wishlist link in cart page':
            element=ref.add_to_wishlist_link_cart_page.selector;
            break;
    
            case 'Start Shopping link in wishlist':
            element=ref.Start_Shopping_link_wishlist.selector;
            break;
    
            case 'Order History in account menu':
            element=ref.Order_History_account_menu.selector;
            break;
    
            case 'wishlist in account menu':
            element=ref.wishlist_account_menu.selector;
            break;
    
            case 'Profile in account menu':
            element=ref.Profile_account_menu.selector;
            break;
    
            case 'Wishlist icon in wishlist landing page':
            element=ref.Wishlist_icon_wishlist_landing_page.selector;
            break;
    
    
            case 'Share icon in wishlist landing page':
            element=ref.Share_icon_wishlist_landing_page.selector;
            break;
    
            case 'cancel button in Add new address page':
            element=ref.address_book_cancel_button.selector;
            break;
    
            case 'save pick up location button in PDP':
                element = ref.pdp_select_store_button.selector;
                break;

                case 'order status submit button':
                    element=ref.order_status_submit_button.selector;
                    break;
    
    
    //&&&&&&&&&&&&&
    
    
    //&&&&&&&&&&&&&&&&&&&&&&&&& the bay links ended    &&&&&&&&&&&&&&&&&&&&&&&&//

      }
      console.log(element);
      /* Check to see that element is visible before clicking */
      client.waitForElementVisible(element, 4000);
      run('Then I should see ' + element);
      return client
      .click(element, function(result) 
      {
        if (result.status === -1) {
          console.log('Click failed! Retrying...')
          client.pause(data.timeout_min);
          client.waitForElementVisible(element, data.timeout_median);
          client.moveToElement(element, 100, 100);
          client.click(element, function(result) {
            if (result.status === -1) {
              throw new Error('Failed to click again!')
              console.log(result)
            }
          })
        }
        client.pause(1000)
      })
    })

    /**************************************************************************/
    /*
    Description: Use this step for any simple waitFor step
    Parameter(s): selector
    Acceptable Use:
        I should see thankyou_orderNumber_css
        
    */
    /**************************************************************************/

    Then(/^I should see (\S*?)$/, (element) => {
      console.log("element -- > " + element)
      return client
        .waitForElementVisible(element, data.timeout_max, true, function(result) {
          if (result.status === -1)
            console.log(result)
        })
    })

    /**************************************************************************/
    /*
    Description: Use this step for any step where you want to make sure an element
    is not visible
    Parameter(s): selector
    Acceptable Use:
        I should not see thankyou_orderNumber_css
        
    */
    /**************************************************************************/

    Then(/^I should not see (\S*?)$/, (element) => {
      console.log("element -- > " + element)
        return client
        .waitForElementNotPresent(element, data.timeout_median, true,function(result){
            if (result.status === 0)
            console.log(result)
        })
    })

    /**************************************************************************/
    /*
    Description: Use this step to setup your test with any specific data. Please
    use the correct name of the specific variable, otherwise this won't work.
    Parameter(s): Table of data
    Acceptable Use:
      this data:
      |checkout_firstName|Joey|
      |checkout_lastName|Votto|
      |defaultEmail|myTestAccount@test.com|
      |defaultPassword|myTestPassword123!|
        
    */
    /***************************************************************************/

    Given(/^this data:((.|\n)*)$/, (throwAwayArgument, requestedData) => {
      requestedData = requestedData.rawTable

      for (var i = 0; i < requestedData.length; i++) {
        data[requestedData[i][0]] = requestedData[i][1]
      }

      return
    })

    /**************************************************************************/
    /*
    Description: Use this test to assert text on a pre-defined element.
    Parameter(s): element and text
    Acceptable Use:
      this leftNavTitle_text should say "WOMEN'S APPAREL"
        
    */
    /**************************************************************************/
    Then(/^this (.*?) should say "(.*?)"$/, (element, text) => {
      /* Check to see that element is visible */
      client.pause(500)
      run('And I should see ' + element)
      return client
      .assert.containsText(element, text)
    })

    Then(/^this (.*?) should not say "(.*?)"$/, (element, text) => {
      /* Check to see that element is visible */
      run('And I should see ' + element)
      return client
      .expect.element(element).text.to.not.equal(text);
    })
    

    When(/^I type "(.*?)" into this "(.*?)" field$/, (text, element) => {
        switch(element) {

            case 'minimum price value':
                client
                .setValue(ref.search_result_page_minimum_price_box.selector, text)
                break;
                
            case 'maximum price value' :
                client.setValue(ref.search_result_page_maximum_price_box.selector,text)
                break;    
            
            case 'header text box':
                //client.clearValue()
                client.clearValue(ref.header_search_box.selector); // added the locator into clearValue(). it was blank earlier --**
                client.setValue(ref.header_search_box.selector,text)
                break;

                //&&&&&&&&&&&&&&&&
            case 'hbc login email textbox':
                client.clearValue(ref.hbc_login_email_textbox.selector);
                client.setValue(ref.hbc_login_email_textbox.selector,data.invalid_email_id_textbox);
                // client.pause(4000);
                // client.clearValue(ref.hbc_login_email_textbox.selector);
                // client.setValue(ref.hbc_login_email_textbox.selector,data.invalid_format_email_id);
                 break;

            case 'hbc login password textbox':
                client.clearValue(ref.hbc_login_password_textbox);
                 client.setValue(ref.hbc_login_password_textbox,data.invalid_password_textbox);
                 break;
    
            
            case 'hbc login email id format textbox':
                client.clearValue(ref.hbc_login_email_textbox.selector);
                client.setValue(ref.hbc_login_email_textbox.selector,data.invalid_format_email_id);
                break;
            
            case 'hbc login valid email textbox':
                client.clearValue(ref.hbc_login_email_textbox.selector)
                client.setValue(ref.hbc_login_email_textbox.selector,data.defaultEmail);
           
            case 'hbc login password format textbox':
                client.clearValue(ref.hbc_login_password_textbox)
                client.setValue(ref.hbc_login_password_textbox,data.invalid_password_constraint);
                break;

            
//&&&&&&&&&&&&                

            case 'Intermediate login email textbox':
                client.setValue(ref.intermediate_login_email_textbox.selector, data.invalid_email_id);
                break;
            case 'Intermediate login password textbox':
                client.setValue(ref.intermediate_login_password_textbox.selector, data.invalid_password);
                break;
            case 'Intermediate login':
                client.setValue(ref.intermediate_login_email_textbox.selector, data.defaultEmail);
                client.setValue(ref.intermediate_login_password_textbox.selector, data.defaultPassword);
                break;

                case 'Intermediate new user login':
                    client.setValue(ref.intermediate_login_email_textbox.selector, data.new_email_id);
                    client.setValue(ref.intermediate_login_password_textbox.selector, data.new_password);
                    break;

                    case 'Order Status':
                //client.clearValue(ref.order_number_textfield.selector);
                client.setValue(ref.order_number_textfield.selector,data.order_number);
                client.pause(2000);
                //client.clearValue(ref.Billing_postcode_textfield.selector);
                client.setValue(ref.Billing_postcode_textfield.selector,data.Billing_postcode);
                break;
   

            case 'order confirmation create account':
                client
                .setValue(ref.order_confirmation_page_password_field.selector, data.defaultPassword)
                .setValue(ref.order_confirmation_page_confirm_password_field.selector, data.defaultPassword)
                .keys(data.tabKey);
                break;
            case 'cart page promo code':
            case 'checkout page promo code':    
                applyPromoCodeInCartPage(text);
                break;

            case 'CREDIT CARD NUMBER TEXT' :
                client
                .setValue('input[name=ccnumber]', data.acc_NewPaymentCardNumber3)
                .setValue('input[name=month]', data.creditCard_exp_month)
                .setValue('input[name=year]', data.creditCard_exp_year)
                .setValue('input[name=cvc]', data.checkout_CVC3digits)
                .setValue('input[name=nameoncard]', data.acc_NewPaymentCardName)
                break
            case 'EXP DATE TEXT' :
                client
                .clearValue('input[name=year]')
                .setValue('input[name=year]', data.creditCard_invalid_exp_year_option1)
                break
            case 'CVC TEXT' :
                client
                .clearValue('input[name=cvc]')
                .setValue('input[name=cvc]', data.checkout_CVC3digits_invalid)
                break;

            case 'checkout card holder name' :
                    client.setValue(ref.checkout_card_name_text_box.selector,text)
                    break;    
            case 'checkout card number' :
                    client.setValue(ref.checkout_card_number_textbox.selector,text)
                    break;   
                    
            case 'checkout expiry date' :
                    client.setValue(ref.checkout_expiry_date_textbox.selector,text)
                    break;   

            case 'checkout cvv' :
                    client.setValue(ref.checkout_cvv_textbox.selector,text)
                    break;   

            case 'saved card cvv':
                    client.waitForElementVisible(ref.checkout_saved_card_cvv_textbox, 8000);
                    client.setValue(ref.checkout_saved_card_cvv_textbox.selector,text);
                    client.keys(data.tabKey);
                    break; 

                    case 'pdp chose store postcode':
                        if(text==='valid postcode')
                        text = data.bopis_postcode;
                        client.setValue(ref.pdp_city_postal_code_textbox.selector, text);
                        break;     
            
        }
        return client

    //   /* Check to see that element is visible */
    //   run('And I should see ' + element)
    //   var selector = ref[element].selector
    //   return client
    //   .setValue(selector, text)
    });

    function applyPromoCodeInCartPage(text){
        var promoCode;
        if(text === 'Order Level promo'){
            promoCode = data.orderLevelCode;
        }
        else if(text === 'Product Level promo'){
            promoCode = data.productLevel;
        }
        else if(text==='Shipping Level promo'){
            promoCode = data.shippingLevel;
        }
        else if(text==='Invalid PromoCode'){
            promoCode = data.invalidPromoCode;
        }
        else if(text==='Free Shipping'){
            promoCode = data.free_shipping_promo_code;
        }
        else if(text==='Doller PromoCode'){
            promoCode = data.dollerPromo
        }



        client.clearValue(ref.promo_code_text_box_in_cart_page.selector);
        client.setValue(ref.promo_code_text_box_in_cart_page.selector,promoCode);
        client.click(ref.promo_code_apply_button_in_cart_page.selector);
    }


    When(/^I hover on "(.*?)"$/, (link) => {
        client.pause(2000);
        switch(link) {
            case 'Welcome user in header' :
                console.log("****** Welcome user in header");
                run('And I should see ' + ref.header_my_account_link.selector)
                client
                .moveToElement(ref.header_my_account_link.selector,10,10)
                break;

            case 'Women category' :
                run('And I should see ' + ref.women_root_category_link.selector)
                client
                .moveToElement(ref.women_root_category_link.selector,10,10)
                break;

                
// &&&&&&&&&&&&&
            case 'wishlslist icon page' :
                run('And I should see ' + ref.wishlist_icon_page.selector)
                client.moveToElement(ref.wishlist_icon_page.selector,0,0)
                break;


            case 'minicart icon link' :
                 //run('And I should see ' + ref.minicart_link.selector)
                 client.moveToElement(ref.minicart_link.selector,0,0)
                 run('And I should not see ' + ref.minicart_product_name.selector);
                 break;

//&&&&&&&&&&&&
    

            case 'signin link' :
                run('And I should see ' + ref.signin_link_css.selector)
                client.moveToElement(ref.signin_link_css.selector,10,10)
                break;

            case 'product tile in search result page':
                run('And I should see ' + ref.search_result_page_product_tile.selector)
                client.moveToElement(ref.search_result_page_product_tile.selector,10,10)
                break;

                case 'product name in search result page':
                    run('And I should see ' + ref.search_result_page_product_name_link.selector)
                    client.moveToElement(ref.search_result_page_product_name_link.selector,10,10)
                    break;

            case 'site logo':
                    run('And I should see ' + ref.site_logo.selector)
                    client.moveToElement(ref.site_logo.selector,10,10)
                    client.pause(2000);
                    break;
                
            case 'root cat one' :
                run('And I should see ' + ref.root_cat_one.selector)
                client.moveToElement(ref.root_cat_one.selector,10,10)
                client.pause(2000);
                break;

            case 'root cat two':
                run('And I should see ' + ref.root_cat_two.selector)
                client.moveToElement(ref.root_cat_two.selector,10,10)
                client.pause(2000);
                break;

                case 'product image in wishlist page':
                run('And I should see ' + ref.wishlist_page_product_image.selector)
                client.moveToElement(ref.wishlist_page_product_image.selector,10,10)
                client.pause(2000);
                break; 

                // &&&&&&&&&&&&&
            case 'wishlslist icon page' :
                run('And I should see ' + ref.wishlist_icon_page.selector)
                client.moveToElement(ref.wishlist_icon_page.selector,0,0)
                break;


            case 'minicart icon link' :
                 //run('And I should see ' + ref.minicart_link.selector)
                 client.moveToElement(ref.minicart_link.selector,0,0)
                 run('And I should not see ' + ref.minicart_product_name.selector);
                 break;

//&&&&&&&&&&&&
                  
                
        }
        return client
    });

    Then(/^verify "(.*)" page elements are displayed$/, (pageName) => {
      
      switch(pageName) {

        case 'HOME' :
          verifyHomePageElements();
          break;

        case 'Login' :
           verifyLoginPageElements();
           break;
        case 'MY ACCOUNT':
            verifyMyAccountPageElements();
            break;  

        case 'STORE LOCATOR':
            verifyStoreLocatorPageElements();
            break;

        case 'EMPTY CART' :
            verifyTheEmptyCartPageElements();   
            break;
        case 'Cart':
            verifyCartPageElements();
            break;    

        case 'REGISTERED USER WISHLIST PAGE':
            verifyTheRegisteredWishlistPageElements();
            break;

        case 'GUEST USER WISHLIST PAGE':
            verifyTheGuestUserWishlistPageElements();
            break;

        case 'Account Landing' :
          verifyAccountLandingPageElements();
          break;
        case 'Account Summary' :
          verifyAccountSummaryPageElements();
          break;
        
        case 'Sign in guest overlay' :
            verifysigninguestOverlayelements();
            break;
        
        case 'My account overlay' :
            verifyMyaccountOverlayelements();
            break;
        
        case 'Create Account page' :
            verifyCreateAccountPageElements()
            break;
    
        case 'Order Status page' :
                verifyOrderStatusPageElements()
                break;

        case 'quick view popup' :
            verifyQuickviewPopupElements()
            break;    
        
        case 'PDP':
            verifyPDPElements()
            break;
        case 'Product Set':
            verifyProductSetPageElements()
            break;
        case 'PLP':
            verifyPLPElements()
            break;    
        case 'Forgot Password':
            verifyForgotPasswordPageElements()
            break;
        case 'Reset Password':
            verifyResetPasswordElements()
            break;   
        case 'Checkout Shipping Address':
            verifyCheckoutShippingSectionElements()
            break; 
            
            case 'Profile Payment Page':
                verifyProfilePaymentPage()
                break;
        
            case 'Add New Payment error fileds':
                verifyaddnewpaymenterrorfields()
                break;
            
            case 'GWP PDP':
                verifyGWPPDPpage()
                break;   
            
            case 'Chanel Page':
                verifyChanelPage()
                break;

            case 'No Search Page':
                verifyNosearchpage()
                break;

            case 'Promo message in PDP':
                verifyPromoMsgInPDP()
                break;
            
            case 'Profile Page':
                verifyProfilePage()
                break;

            case 'edit password page':
                verifyEditPwdPage()
                break;
            
            case 'Address book page':
                verifyAddressbookPage()
                break;
            
            case 'Add new address page':
                verifyAddnewaddressPage()
                break;

                 //Added below lines of code for footer link click and verify --**
            case 'CONTACT US':
                verifyContactUsPageElements()
                break;
            case 'HBC Rewards':
                verifyHBCRewardsPageElements()
                break;
            case 'HELP & FAQ':
                verifyHelpAndFAQPageElements()
                break;
            case 'Shipping and Returns':
                verifyShippingandReturnsPageElements()
                break;

            case 'Order History':
                verifyOrderHistoryPageElements()
                break;

             //*************************OFF5TH FOOTER STARTED******* */ 
             case 'Off5th Gift Card':
                verifyoff5thGiftCardPageElements()
                break;

                case 'International':
                    verifyInternationalPageElements()
                    break;
    
                case 'About SaksFirst':
                    verifyAboutSaksFirstPageElements()
                    break;
    
                case 'Pay Bills & Manage':
                    verifyPayBillAndManagePageElements()
                    break;
    
                case 'Apply for the SaksFirst  Store Card':
                    verifyApplyfortheSaksFirstStorecardPageElements()
                    break;
    
                case 'Location & Events':
                    verifyLocationAndEventsPageElements()
                    break;
    
                case 'Privacy Policy':
                    verifyPrivacypolicyPageElements()
                    break;
    
                case 'Website Terms of Use':
                    verifyWebsiteTermsofUsePageElements()
                    break;
    
                case 'Careers':
                    verifyoff5thCareersPageElements()
                    break;
    
                    
      /*************************OFF5TH FOOTER ENDS******* */    
            
            case 'More insider Access':
                verifyMoreinsiderAcessPageElements()
                break;

            case 'Create A More! Account':
                verifyCreateAMoreAccountPageElements()
                break;

            case 'Shipping Policy':
                 verifyShippingPolicyPageElements()
                 break;

            case 'Returns & Exchanges':
                verifyReturnsAndExchangePageElements()
                break;

            case 'Order Status & Tracking':
                verifyOrderStatusAndTrackingPageElements()
                break;
            
            case 'Gift Card' :
                verifyGiftCardPageElements()
                break;

            case 'Personal Shopping' :
                verifyPersoanlShoppingPageElements()
                break;
            case 'SMS Update':
                verifySMSUpdatePageElements()
                break;
            case 'Kleinfeld’s Bridal':
                verifykleinfeldsPageElements()
                break;
            case 'TopShop':
                verifyTopShopPageElements()
                break;
            case 'TopMan':
                verifyTopManPageElements()
                break;
            case 'HBC Credit':
                verifyHBCCreditPageElements()
                break;
            case 'HBC Insurance':
                verifyHBCInsurancePageElements()
                break;
            case 'Home Protection Plans':
                verifyHomeProtectionPlanPageElements()
                break;

            case 'Total Guard Product Protection':
                verifyTotalGuardProductProtectionPageElements()
                break;

            case 'Services':
                verifyServicesPageElements()
                break;
            case 'Investors':
                verifyInvestorsPageElements()
                break;
            case 'HBC Careers':
                verifyCareersPageElements()
                break;
            case 'Become Affiliate':
                verifyBecomeAffiliatePageElements()
                break;
            case 'Email Offers':
                verifyEmailOffersPageElements()
                break;
            case 'App Download':
                verifyAppDownloadPageElements()
                break;
            case 'STORE LOCATOR in new tab':
                verifyStoreLocatorInNewTabPageElements()
                break;  
            case 'Free Shipping Details':
                verifyFreeShippingDetails()
                break;
            
            case 'Percentage promo details':
                verifypercentagePromoDetails()
                break;
            
            case 'ORP perentage promo details':
                verifyORPpercentagePromoDetails()
                break;
            
            case 'Doller promo details':
                verifyDollerPromoDetails()
                break;
                
            case 'ORP Doller promo details':
                verifyORPDollerPromoDetails()
                break;

            case 'Bogo promo details':
                verifyBogoPromoDetails()
                break;
                    
            case 'ORP Bogo promo details':
                verifyBogoPromoDetails()
                break;

                // &&&&&& The bay Footer started &&&&&&&&&&-----------//

           case 'Facebook':
            verifyFacebookPageElements()
            break;

      case 'Pinterest':
            verifyPinterestPageElements()
            break;

       case 'Instagram':
             verifyInstagramPageElements()
             break;

       case 'Twitter':
             verifyTwitterPageElements()
             break;

       case 'YouTube':
             verifyYouTubePageElements()
             break;

       case 'The Bay Privacy Policy':
             verifythebayPrivacyPolicyPageElements()
             break;
                       
        case 'Terms and Conditions':
             verifyTermsandConditionsPageElements()
             break;

        case 'Site Feedback':
             verifySiteFeedbackPageElements()
             break;

                //&&&&&&&&&&&&&&&&&&&
            case 'Forgot password error message page':
                verifyForgotPassworderrormesagePageElements()
                break;

           case 'Forgot password format error message page':
                 verifyForgotPasswordformaterrormessagePageElements()
                 break;

           case 'Shoppers temporary wishlist':
               verifyShoppersTemporarywishlistPageElements()
               break;

           case 'no of items in cart page':
                verifyNoofItemscartPageElements()
                break;


           case 'Welcome signin for guest user':
               verifywelcomesigninPageElements()
               break;


           case 'Welcome signin for reg user':
               verifywelcomesigninreguserPageElements()
               break;

           case 'wishlist page in account menu':
                verifywishlistpageaccountmenuPageElements()
                break;

           case 'Profile page in account menu':
               verifyProfilepageaccountmenuPageElements()
               break;

           case 'Empty wishlist':
                verifyEmptywishlistPageElements()
                break;


           case 'no of items in wishlist landing page':
               verifynoofitemswishlistlandingPageElements()
               break;

           case 'estimated rewards point':
                 verifyestimatedrewardspointPageElements()
                 break;



           case 'share your wishlist popup window':
                 verifyshareyourwishlistpopupwindowPageElements()
                  break;
                 

           case 'store tray':
                verifystoretrayPageElements()
                break;




//&&&&&&&&&&&&&&&&&&

      }

      return client
    })
    function verifyBogoPromoDetails(){
        run('And I should see ' + ref.per_promo_cost.selector);    
        run(`Then I notice Percentage offer should say "${data.bogo_promo_discount}"`);
        run('And I should see ' + ref.discount_row_in_cart_page.selector);  
        run(`Then I notice Discount price should say "${data.bogo_promo_discount}"`); 
        
    }

    function verifyBogoPromoDetails(){
        run('And I should see ' + ref.order_review_percenatge_cost.selector);    
        run(`Then I notice Order Review Page Percentage offer should say "${data.bogo_promo_discount}"`);
        run('And I should see ' + ref.discount_row_in_cart_page.selector);  
        run(`Then I notice Discount price should say "${data.bogo_promo_discount}"`); 
    }

    function verifyDollerPromoDetails(){
        run('And I should see ' + ref.per_promo_cost.selector);    
        run(`Then I notice Percentage offer should say "${data.doller_promo_cost}"`);
    }

    function verifyORPDollerPromoDetails(){
        run('And I should see ' + ref.order_review_percenatge_cost.selector);    
        run(`Then I notice Order Review Page Percentage offer should say "${data.doller_promo_cost}"`);
    }

    function verifypercentagePromoDetails(){
        run('And I should see ' + ref.per_promo_cost.selector);    
        run(`Then I notice Percentage offer should say "${data.per_promo_cost}"`);
    }

    function verifyORPpercentagePromoDetails(){
        run('And I should see ' + ref.order_review_percenatge_cost.selector);    
        run(`Then I notice Order Review Page Percentage offer should say "${data.per_promo_cost}"`);
    }

    function verifyFreeShippingDetails(){
        run('And I should see ' + ref.order_review_shipping_cost.selector);
        run('And I should see ' + ref.order_review_shipping_cost.selector);
        run(`Then I notice Free Shipping Text should say "${data.free_shipping_details}"`);
        run(`Then I notice Total order Cost should say "${data.free_shipping_total_cost}"`);
        
    }
    
    function verifyForgotPasswordPageElements(){
        run('And I should see ' + ref.forgot_password_page.selector);
        run('And I should see ' + ref.forgot_password_page_title.selector);
        run('And I should see ' + ref.forgot_password_email_textbox.selector);
        run('And I should see ' + ref.forgot_password_submit_button.selector);
        run(`Then I notice forgot password page title should say "Forgot Password"`);
    }

        function verifyResetPasswordElements(){
        run('And I should see ' + ref.reset_password_heading.selector);
        run('And I should see ' + ref.reset_password_message.selector);
        run('And I should see ' + ref.continue_shopping.selector);
        run(`Then I notice Reset password page title should say "Reset Password"`);

        }

    function verifyPDPElements()
    {
        run('And I should see ' + ref.pdp_product_name.selector)
        run('And I should see ' + ref.pdp_product_details_section.selector)
    }

    function verifyPLPElements(){
        run('And I should see ' + ref.search_product_grid_section.selector)
        run('And I should see ' + ref.search_result_content.selector)
    }

    function verifyQuickviewPopupElements(){
        run('And I should see ' + ref.search_result_page_quickview_modal.selector)
        run('And I should see ' + ref.search_result_page_quickview_popup.selector)
        run('And I should see ' + ref.search_result_page_quickview_close_icon.selector)
        
    }

    function verifyTheRegisteredWishlistPageElements(){
        run(`Then I notice wishlist page title for registered user should say "${data.acc_profile_name}"`)
        run(`Then I notice current page name in breadcrumb should say "Wishlist"`)
    }

    function verifyTheGuestUserWishlistPageElements(){
        run(`Then I notice wishlist page title for registered user should say "Wishlist"`)
        run(`Then I notice current page name in breadcrumb should say "Wishlist"`)
    }

    function verifyStoreLocatorPageElements(){
        run('And I should see ' + ref.store_locator_container.selector)
        run('And I should see ' + ref.store_locator_postal_code_textbox.selector)
        
    }

    function verifyTheEmptyCartPageElements(){
        run('And I should see ' + ref.empty_cart_heading.selector);
        run('And I should see ' + ref.empty_cart_message.selector);
        run('And I should see ' + ref.cart_keep_shopping_button.selector);
    }

    function verifyCartPageElements(){
        run('And I should see ' + ref.cart_order_summary_section.selector);
        run('And I should see ' + ref.cart_header.selector);
        run('And I should see ' + ref.cart_product_line_item.selector);
        run('And I should see ' + ref.cart_checkout_button.selector);
    }

    function verifyMyAccountPageElements(){
            run('And I should see ' + ref.myaccount_page_title.selector)
            run(`Then I notice myaccount page title should say "${data.acc_page_title}"`)
            // run(`Then I notice ${ref.myaccount_page_title.selector} should say "${data.acc_page_title}"`)  
            
        }
    function verifyLoginPageElements(){
            run('And I should see ' + ref.login_form.selector)
            var pageTitle = client.getText(ref.login_page_title.selector);
            console.log("********pageTitle:- "+ pageTitle);
            // run('And I should see ' + ref.login_page_track_order_form.selector)

        }
    function verifyHomePageElements() {
            run('And I should see ' + ref.home_page.selector)
        }

        function verifyAccountLandingPageElements() {
            run('And I should see ' + ref.account_landing_sign_in_css.selector)
            run('And I should see ' + ref.account_landing_check_order_css.selector)
        }
        function verifyAccountSummaryPageElements() {
            run('And I should see ' + ref.account_summary_account_profile_css.selector);
            run('And I should see ' + ref.account_summary_loyalty_program_summary_css.selector);
            run('And I should see ' + ref.account_summary_account_summary_order_history_css.selector);
        }

        function verifysigninguestOverlayelements() {
            run('And I should see ' + ref.signin_link.selector);
            run('And I should see ' + ref.header_create_account_link.selector);
            run('And I should see ' + ref.header_orderstatus_link.selector);
        }

        function verifyMyaccountOverlayelements() {
            run('And I should see ' + ref.header_myaccount_link.selector);
            run('And I should see ' + ref.header_orderhistory_link.selector);
            run('And I should see ' + ref.header_signout_link.selector);
        }

        function verifyCreateAccountPageElements(){
            run('And I should see ' + ref.create_account_form.selector)
            var pageTitle = client.getText(ref.create_page_title.selector);
            console.log("********pageTitle:- "+ pageTitle);
            // run('And I should see ' + ref.login_page_track_order_form.selector)

        }

       

        //&&&&&&&&&&&&&&&&
        function verifyOrderStatusPageElements(){
            // run('And I should see ' + ref.create_account_form.selector)
             //var pageTitle = client.getText(ref.create_page_title.selector);
            // console.log("********pageTitle:- "+ pageTitle);
             // run('And I should see ' + ref.login_page_track_order_form.selector)
             run('And I should see'+ ref.order_number_order_status_page.selector)
             run('And I should see'+ ref.order_status_header.selector)
 
         }
 //&&&&&&&&&&&&&&

        function verifyProductSetPageElements(){
            run('And I should see ' + ref.product_set_page.selector);
            run('And I should see ' + ref.product_set_items.selector);
        }

        function verifyCheckoutShippingSectionElements(){
            run('And I should see ' + ref.checkout_shipping_section.selector);
            run('And I should see ' + ref.checkout_shipping_add_new_address_link.selector);
        }

        function verifyProfilePaymentPage(){
            run('And I should see ' + ref.payment_page_header.selector)
            run('Then I notice my account payment page should say ' + data.payment_header);
        }

        function verifyaddnewpaymenterrorfields(){
            run('And I should see ' + ref.payment_page_cardowner_error.selector)
            run('And I should see ' + ref.payment_page_cardnumber_error.selector)
            run('And I should see ' + ref.payment_page_cardexpiry_error.selector)            

        }
    
        function verifyGWPPDPpage(){
            run('And I should see ' + ref.pdp_product_name.selector)
            run('And I should see ' + ref.pdp_product_details_section.selector)
            run('And I should see ' + ref.gwp_pdp_shop_button.selector)
        }

        function verifyChanelPage(){
            run('And I should see ' + ref.chanel_header.selector)
            run('And I should see ' + ref.chanel_contentSlot.selector)
            run(`Then I notice Chanel Page Header should say "CHANEL"`)
        }
    
        function verifyNosearchpage(){
            run('And I should see ' + ref.no_search_result.selector)
            run(`Then I notice no search result should say "Check the spelling, try a new search term."`)
        }

        function verifyPromoMsgInPDP(){
            run('And I should see ' + ref.product_promo_message.selector)
            run(`Then I notice pdp promo message should say "${data.product_promoMSG}"`)
        }

        function verifyProfilePage(){
            run('And I should see ' + ref.profile_username.selector)
            run(`Then I notice Profile User Name should say "${data.createaccount_profileName}"`)
        }

        function verifyEditPwdPage(){
            run('And I should see ' + ref.profile_editpwd_heading.selector)
            run('And I should see ' + ref.profile_editpwd_oldpwd_box.selector)
            run('And I should see ' + ref.profile_editpwd_newPWD_box.selector)
            run('And I should see ' + ref.profile_editpwd_newPWD_confirm_box.selector)
            run('And I should see ' + ref.profile_editpwd_save_button.selector)
            run('And I should see ' + ref.profile_editpwd_cancel_button.selector)
            run(`Then I notice Edit Password Heading should say "Edit Password"`)
        }

        function verifyAddressbookPage(){
            run('And I should see ' + ref.addressbook_header.selector)
            run(`Then I notice Address Book Heading should say "Address Book"`)
        }

        function verifyAddnewaddressPage(){
            run('And I should see ' + ref.add_address_heading.selector)
            run(`Then I notice Add New Address Heading should say "Add New Address"`)
        }

        //&&&&&&&&&&&&&&
          
       function verifyForgotPassworderrormesagePageElements(){
        run('And I should see ' + ref.forgot_password_error_message.selector)
        //run('Then I notice ForgotPassworderrormesage should say "We are sorry"')
    }

    function verifyForgotPasswordformaterrormessagePageElements(){
     run('And I should see ' + ref.forgot_password_format_error_message.selector)
    // run('Then I notice ForgotPasswordformaterrormesage should say "A part following "')
    }


    function verifyShoppersTemporarywishlistPageElements(){
        run('And I should see ' + ref.shopping_bag_wishlist.selector)
        run('And I should see' + ref.wishlist_product_name.selector)
        run('And I should see' + ref.shopping_bag_count_wishlist.selector)
    }


    function  verifyNoofItemscartPageElements(){
        run('And I should see'+ref.shopping_bag_count_wishlist.selector)

    }


    function verifywelcomesigninPageElements(){
        run('And I should see'+ ref.signin_link_css.selector)
        run('And I should see '+ ref.header_create_account_link.selector)
        run('And I should see'+ref.header_orderstatus_link)
    }

    function verifywelcomesigninreguserPageElements(){
        run('And I should see'+ ref.header_myaccount_link.selector)
        run('And I should see'+ref.header_orderhistory_link.selector)
        run('And I should see'+ref.header_signout_link.selector)
    }

    function verifywishlistpageaccountmenuPageElements(){
        run('And I should see'+ref.wishlist_page_account_menu.selector)
        run('And I should see'+ref.Start_Shopping_link_wishlist.selector)
    }

    function verifyProfilepageaccountmenuPageElements(){
        run('And I should see'+ref.profile_account_menu_page_title.selector)
    }

    function verifyEmptywishlistPageElements(){
        run('And I should see'+ ref.Wishlist_Empty_Cart_page.selector)
    }

   // function verifynoofitemswishlistlandingPageElements(){
      //  run('count number of elements')
    //}


    function verifyestimatedrewardspointPageElements(){
        run('And I should see'+ ref.estimated_rewards_point_text.selector)
        run('And I should see'+ ref.estimated_rewards_point_value.selector)

    }

    function verifyshareyourwishlistpopupwindowPageElements(){
        run('And I should see '+ ref.share_your_wishlist_popup_window.selector)

        run('And I should see '+ ref.share_your_wishlist_popup_Copy_button.selector)
        
    }


    function verifystoretrayPageElements(){
        run ('And I should see'+ ref.store_tray_PLP.selector)
    }
//&&&&&&&&&&&&&



     
     

        //Added below funtions to verify the footer link page elements --**
        function verifyContactUsPageElements(){
            client.pause(5000)
            client.windowHandles(function(tabs){
                client.switchWindow(tabs.value[1]);
                client.pause(8000);
  
                run('And I should see ' + ref.footer_navigation_contactus_askmequestion_text.selector);
                run('And I should see ' + ref.footer_navigation_contactus_input_email.selector);
                //Close the new window
                client.closeWindow();
                client.pause(2000);
                //Switch to main window
                client.switchWindow(tabs.value[0]);
              })
        }

        function verifyHBCRewardsPageElements(){
            client.pause(5000)
            client.windowHandles(function(tabs){
                client.switchWindow(tabs.value[1]);
                client.pause(5000);
  
                run('And I should see ' + ref.footer_navigation_hbcrewards_page_logo.selector);
            run('And I should see ' + ref.footer_navigation_hbcrewards_topnav_link.selector);
                //Close the new window
                client.closeWindow();
                client.pause(2000);
                //Switch to main window
                client.switchWindow(tabs.value[0]);
              })
            
        }
        function verifyHelpAndFAQPageElements(){
            
            client.pause(5000)
            client.windowHandles(function(tabs){
                client.switchWindow(tabs.value[1]);
                client.pause(4000);
  
                run('And I should see ' + ref.footer_navigation_helpandfaq_askyourquestionshere.selector);
            run('And I should see ' + ref.footer_navigation_hbcrewards_topnav_link.selector);
                //Close the new window
                client.closeWindow();
                client.pause(2000);
                //Switch to main window
                client.switchWindow(tabs.value[0]);
              })
            
        }
        function verifyShippingandReturnsPageElements(){
            client.pause(1000);
            run(`Then Page URL contains "Shipping And Returns"`)      // reads the URL and checks for substring. can be anyway better?
        }
       //&&&&&&&&&&
       function verifyOrderHistoryPageElements(){
        client.pause(1000);
        //run(`Then Page URL contains "Order History"`) 
        run('And I should see' +ref.order_History_acccount_menu_Page_Title.selector)
    }

//&&&&&&
        function verifyGiftCardPageElements(){
            client.pause(1000);
            run('And I should see ' + ref.footer_navigation_gift_card_page_title_text.selector);
        }
  //*********************AFTER CLICKING FOOOTER LINKS LANDING PAGES START  &&&&& *************************/
        function verifyMoreinsiderAcessPageElements(){
            client.pause(2000);
            run('Then Page URL contains "off5th More insider Access"');
       }

        function verifyCreateAMoreAccountPageElements(){
            client.pause(2000);
            run('And I should see' +ref.footer_navigation_create_account_link.selector);
        
        }

        function verifyShippingPolicyPageElements(){
            client.pause(2000);
            run('Then Page URL contains "Shipping Policy"');
        }

        function verifyReturnsAndExchangePageElements(){
            client.pause(2000);
            run('Then Page URL contains "oof5th Returns And Exchanges"');
        }

        function verifyOrderStatusAndTrackingPageElements(){
            client.pause(2000);
            run('Then Page URL contains "off5th Order Status And Tracking"');
        }

        function verifyInternationalPageElements() {
            client.pause(2000);
            run('Then Page URL contains "off5th International"');
        }

        function verifyAboutSaksFirstPageElements() {
            client.pause(2000);
            run('Then Page URL contains "off5th About SaksFirst"');
            
        }

        function verifyPayBillAndManagePageElements() {
            client.pause(2000);
            client.pause(2000);
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
            
            run('And I should see'+ref.footer_navigation_Pay_Bills_And_Manage_page_title.selector);
            client.closeWindow();
            client.pause(2000);
            client.switchWindow(tabs.value[0]);
        })
        }

        function  verifyApplyfortheSaksFirstStorecardPageElements(){
            client.pause(2000);
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
            
               run('And I should see'+ref.footer_navigation_Apply_for_the_SaksFirst_Store_Card_page_title.selector);
               client.closeWindow();
                client.pause(2000);
                client.switchWindow(tabs.value[0]);
            })
        }

        function verifyLocationAndEventsPageElements(){
            client.pause(2000);
            client.pause(2000);
            client.pause(5000)
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  

            run('And I should see' +ref.footer_navigation_store_locator_page_title.selector);
            client.closeWindow();
                client.pause(2000);
                client.switchWindow(tabs.value[0]);
              })

            }

        
        


        function verifyPrivacypolicyPageElements(){
            client.pause(2000);
            run('And I should see' +ref.footer_navigation_privacy_policy_link.selector);
        }

        function verifyWebsiteTermsofUsePageElements(){
            client.pause(2000);
            run(`Then Page URL contains "off5th Website Terms of Use"`);
        }



        function verifyoff5thCareersPageElements(){
            client.pause(2000);
            client.pause(5000);
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in PDP
                run(`Then Page URL contains "Careers"`); 
                client.closeWindow();
                client.pause(2000);
                client.switchWindow(tabs.value[0]);
            })
        }
            
        
 //*********************AFTER CLICKING FOOOTER LINKS LANDING PAGES END*************** */
        function verifyPersoanlShoppingPageElements(){
            client.pause(1000);
            run(`Then Page URL contains "Personal Shopping"`)
        }

        function verifySMSUpdatePageElements(){
            client.pause(5000)
            client.windowHandles(function(tabs){
                client.switchWindow(tabs.value[1]);
                client.pause(3000);
  
                run('And I should see ' + ref.footer_navigation_sms_alerts_join_now_button.selector);
                run('And I should see ' + ref.footer_navigation_sms_alerts_on_mobile.selector);
                //Close the new window
                client.closeWindow();
                client.pause(2000);
                //Switch to main window
                client.switchWindow(tabs.value[0]);
              })
        }
        function verifykleinfeldsPageElements(){
            run(`Then Page URL contains "Kleinfelds"`); 
            run('And I should see ' + ref.footer_navigation_kleinfeld_page_header.selector);
        }
        function verifyTopShopPageElements(){
            run(`Then Page URL contains "TopShop"`); 
            run('And I should see ' + ref.footer_navigation_topshop_page_header.selector);
        }
        function verifyTopManPageElements(){
            run(`Then Page URL contains "TopMan"`); 
            client.pause(4000);
            run('And I should see ' + ref.footer_navigation_topman_page_header.selector);
        }
        
        function verifyHBCCreditPageElements(){
            client.pause(5000)
            client.windowHandles(function(tabs){
                client.switchWindow(tabs.value[1]);
                client.pause(3000);
  
                run('And I should see ' + ref.footer_navigation_hbc_credit_page_logo.selector);
                //Close the new window
                client.closeWindow();
                client.pause(2000);
                //Switch to main window
                client.switchWindow(tabs.value[0]);
              })
            
        }
        function verifyHBCInsurancePageElements(){
            client.pause(5000)
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in PDP
                run('And I should see ' + ref.footer_navigation_hbc_financial_page_logo.selector);
               // client.assert.containsText(ref.pdp_product_name.selector, recommendationProductName,"Verify the product name");
                //Close the new window
                client.closeWindow();
                client.pause(2000);
                //Switch to main window
                client.switchWindow(tabs.value[0]);
  
              })
        }

        function verifyHomeProtectionPlanPageElements(){
            client.pause(5000)
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in PDP
                run(`Then Page URL contains "Home Protection Plans"`); 
               // client.assert.containsText(ref.pdp_product_name.selector, recommendationProductName,"Verify the product name");
                //Close the new window
                client.closeWindow();
                client.pause(2000);
                //Switch to main window
                client.switchWindow(tabs.value[0]);
  
              })
        }
        function verifyTotalGuardProductProtectionPageElements(){
            client.pause(4000);
            run(`Then Page URL contains "Total Guard Product Protection"`); 
        }

        function verifyServicesPageElements(){
            client.pause(2000);
            run(`Then Page URL contains "Services"`); 
        }
        
        function verifyInvestorsPageElements(){
            client.pause(5000)
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in PDP
                run(`Then Page URL contains "Investor"`); 
                run('And I should see ' + ref.footer_navigation_hbc_investor_page_link.selector);
                client.closeWindow();
                client.pause(2000);
                client.switchWindow(tabs.value[0]);
  
              })
            
        }
        function verifyCareersPageElements(){
            client.pause(5000)
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in PDP
                run(`Then Page URL contains "Careers"`); 
                client.closeWindow();
                client.pause(2000);
                client.switchWindow(tabs.value[0]);
  
              })
        }
        function verifyBecomeAffiliatePageElements(){
            client.pause(2000);
            run(`Then Page URL contains "Become Affiliate"`);
        }
        function verifyEmailOffersPageElements(){
            client.pause(5000)
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in PDP
                run(`Then Page URL contains "Email Offers"`);
                client.closeWindow();
                client.pause(2000);
                client.switchWindow(tabs.value[0]);
  
              })
        }
        function verifyAppDownloadPageElements(){
            client.pause(5000)
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in PDP
                run(`Then Page URL contains "App Download"`);
                client.closeWindow();
                client.pause(2000);
                client.switchWindow(tabs.value[0]);
  
              })
        }
        
        function verifyStoreLocatorInNewTabPageElements(){
            client.pause(5000)
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(4000);
  
                // Verify the product name in PDP
                run('And I should see ' + ref.store_locator_container.selector)
                run('And I should see ' + ref.store_locator_postal_code_textbox.selector)
                client.closeWindow();
                client.pause(2000);
                client.switchWindow(tabs.value[0]);
  
              })
        }

        //&&&&&&&&&&&&& After clicking Thebay landing footer pages started &&&&&&&&&&&&&//

        function verifyFacebookPageElements(){
            client.pause(2000);
            client.pause(5000);
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in facebook
                run(`Then Page URL contains "facebook"`); 
                client.closeWindow();
                client.pause(2000);
                client.switchWindow(tabs.value[0]);
            })
        }
        function verifyPinterestPageElements(){
            client.pause(2000);
            client.pause(5000);
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in Pintrest
                run(`Then Page URL contains "Pinterest"`); 
                client.closeWindow();
                client.pause(2000);
                client.switchWindow(tabs.value[0]);
            })
        }
        function verifyInstagramPageElements(){
            client.pause(9000);
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(9000);
  
                // Verify the product name in instagram
                run(`Then Page URL contains "Instagram"`); 
                client.closeWindow();
                client.pause(4000);
                client.switchWindow(tabs.value[0]);
                client.pause(4000);
            })
        }
        function verifyTwitterPageElements(){
            client.pause(9000);
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in twitter
                run(`Then Page URL contains "Twitter"`); 
                client.closeWindow();
                client.pause(4000);
                client.switchWindow(tabs.value[0]);
                client.pause(4000);
            })
        }
        function verifyYouTubePageElements(){
            client.pause(9000);
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in youtube
                run(`Then Page URL contains "Youtube"`); 
                client.closeWindow();
                client.pause(4000);
                client.switchWindow(tabs.value[0]);
                client.pause(4000);
            })
        }
        
        function verifythebayPrivacyPolicyPageElements(){
            client.pause(9000);
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in youtube
                run(`Then Page URL contains "Youtube"`); 
                client.closeWindow();
                client.pause(4000);
                client.switchWindow(tabs.value[0]);
                client.pause(4000);
            })

        }
        function verifyTermsandConditionsPageElements(){
            client.pause(9000);
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in youtube
                run(`Then Page URL contains "Youtube"`); 
                client.closeWindow();
                client.pause(4000);
                client.switchWindow(tabs.value[0]);
                client.pause(4000);
            })

        }
        function verifySiteFeedbackPageElements(){
            client.pause(9000);
            client.windowHandles(function(tabs){
                console.log("**** NUmber of tabs:- "+tabs.value.length); 
               client.switchWindow(tabs.value[1]);
               client.pause(8000);
  
                // Verify the product name in youtube
                run(`Then Page URL contains "Youtube"`); 
                client.closeWindow();
                client.pause(4000);
                client.switchWindow(tabs.value[0]);
                client.pause(4000);
            })

        }

    Then(/^click "(.*?)" to confirm (.*?)$/, (event, changes) => {
      client
      .pause(1000)
      run(`Then I click on "${event}"`);
      switch(event) {
        case 'Submit payment' :
          run(`Then this ${ref.account_new_payment_name_verify_css.selector} should say "${data.acc_NewPaymentCardName}"`)
          break;
        case 'Submit payment + default' :
          run(`Then this ${ref.account_defaultPayment_name_css.selector} should say "${data.acc_NewPaymentCardName}"`)
          break;
        case 'Submit shipping' :
          run(`Then this ${ref.account_new_shipping_address1_verify_css.selector} should say "${data.acc_AddressStreetOptionA}"`)
          break;
        case 'Submit billing' :
          run(`Then this ${ref.account_Address2_street_css.selector} should say "${data.acc_AddressStreetOptionA}"`)
          break;
        case 'Submit International address' :
          run(`Then this ${ref.account_default_address1_css.selector} should say "${data.acc_Intl_AddressStreetOptionA}"`)
          break;
      }
      return client
    })

    // function addNewPaymentMethod(event) {
    //   run(`Then I click on "${event}"`);
    //   run(`Then this ${ref.account_new_payment_name_verify_css.selector} should say "${data.acc_NewPaymentCardName}"`)
    // }

    // function addNewShippingAddress(event) {
    //   run(`Then I click on "${event}"`);
    //   run(`Then this ${ref.account_new_payment_name_verify_css.selector} should say "${data.acc_NewPaymentCardName}"`)
    // }

    // function addNewBillingAddress(event) {
    //   run(`Then I click on "${event}"`);
    //   run(`Then this ${ref.account_new_payment_name_verify_css.selector} should say "${data.acc_NewPaymentCardName}"`)
    // }

    Then(/^I click on "(.*?)" for an existing (.*?)$/, (event, type) => {
      var eventName;
      client.pause(200)
      switch(event) {
        case 'Edit payment' :
          eventName = ref.account_edit_payment_link_css.selector
          break;
        case 'Delete payment' :
          eventName = ref.account_delete_payment_link_css.selector
          break;
        case 'Edit shipping' :
          eventName = ref.account_edit_shipping_address_link_css.selector
          break;
        case 'Delete shipping' :
          eventName = ref.account_delete_shipping_addres_link_css.selector
          break;
        case 'Edit billing' :
          eventName = ref.account_edit_billing_address_link_css.selector
          break;
        case 'Delete billing' :
          eventName = ref.account_delete_billing_address_link_css.selector
          break;
        case 'EDIT PAYMENT BUTTON' :
          eventName = ref.account_delete_billing_address_link_css.selector
          break;
      }
      return client
      .waitForElementVisible(eventName, data.timeout_median)
      .moveToElement(eventName,20,20)
      .click(eventName)
      .pause(5000)

    })

    Then(/^I notice (.*?) should say "(.*?)"$/, (action, text) => {
      /* Check to see that element is visible */
      client.pause(500)
      // run('And I should see ' + element)
      var element;
      switch(action) 
      {
        case 'myaccount page title' :
            element = ref.myaccount_page_title.selector
            break;
        case 'myaccount first name' :
            element = ref.myaccount_first_name.selector
            break;
        case 'myaccount last name' :
            element = ref.myaccount_last_name.selector
            break;
        case 'myaccount email id' :
              element = ref.myaccount_email_id.selector
            break;
        case 'myaccount phone number' :
              element = ref.myaccount_phone_number.selector
            break;

        case 'my account signin link' :
                element = ref.signin_link_css.selector
            break;
        case 'header minicart quantity' :
            element = ref.header_minicart_quantity.selector
            break;

        case 'search keyword in search result page':
            element=ref.search_result_page_search_keyword.selector
            break;

        case 'no search heading':
            element=ref.search_result_page_search_keyword.selector
            break;
              
        case 'header country selector':
            element = ref.header_country_selector.selector
            break;

        case 'login page title':
            element=ref.login_page_title.selector
            break;

        case 'search suggestion keyword':
            element = ref.search_result_page_did_you_mean_link.selector
            break;

        case 'search suggestion text':
            element = ref.search_result_page_recommended_search_text.selector
            break;


         case 'wishlist page title for registered user':
             element = ref.whislist_page_heading_registered.selector
             break;
             
         case 'current page name in breadcrumb':
             element = ref.breadcrumb_current_page.selector
             break;

        case 'products count in wishlist page':
            element = ref.wishlist_page_products_count.selector
            break;
        
        case 'product style code in details tab of PDP':
            element =ref.pdp_details_tab_style_code.selector
            break;

         case 'select variant error message in pdp':
             element = ref.pdp_select_variant_error_message.selector
             break;  
             
             case 'brand name in pdp':
                element = ref.pdp_product_brand_name.selector;
                break;

         case 'wishlist count in cart page':
             element = ref.cart_wishlist_count.selector
             break;    

        case 'selected sortby option':
            element=ref.sortby_dropdown_selected.selector
            break;     

        case 'intermediate login error message':
            element=ref.intermediate_login_error_message.selector
            break;

        case 'forgot password page title':
            element = ref.forgot_password_page_title.selector
            break;
            
   
        case 'applied promocode heading':
            element = ref.apply_promo_code_link_in_cart_page.selector
            break;    
         
        case 'product count heading in cart page':
            element = ref.cart_product_count_heading.selector
            break; 
            
            case 'product name in pdp':
                element = ref.pdp_product_name.selector
                break;    
    
    
            case 'added to waitlist message':
                element = ref.added_to_waitlist_message.selector
                break;
    
            case 'store locator heading':
                element = ref.store_locator_heading.selector
                break;    
    
            case 'shipto radio button label':
                element = ref.pdp_shipto_radio_button_label.selector
                break;
    
            case 'pickup in store radio button label':
                element = ref.pdp_pickup_in_store_radio_button_label.selector
                break;  
                
            case 'select variants to see the store availability message':
                element = ref.pdp_select_variant_to_see_the_store_availability.selector
                break;    
                
    
            case 'pdp add to cart CTA':
                element = ref.pdp_add_to_cart_button.selector
                break;  
             
            case 'no stores available':
                element = ref.pdp_no_stores_available_message.selector
                break;    

            // ############### PROFILE
            case 'empty gift card number field error message':
                element = ref.empty_gift_card_number_field_error_message.selector
                break;

            case 'empty gift card pin field error message':
                element = ref.empty_gift_card_pin_field_error_message.selector
                break;

            case 'invalid gift card error message':
                element = ref.invalid_gift_card_details_error_message.selector
                break;



            // ############### CHECKOUT 
        case 'order confirmation page thank you message':
            element = ref.order_confirmation_thank_you_message.selector
            run('Signup for exclusive offer');
            break;  
            
        case 'order confirmation page what happens next heading':
            element = ref.order_confirmation_page_what_happens_next_heading.selector
            break;    

        case 'selected country in checkout billing section':
            element = ref.checkout_billing_address_selected_country.selector
            break;    

        case 'promo code section heading in checkout':
            element = ref.apply_promo_code_link.selector
            break;

        case 'checkout saved card empty cvv field error message':
            element = ref.checkout_saved_cvv_textbox_error_message.selector
            break;
        
        case 'my account payment page':
            element = ref.payment_page_header.selector
            break;  
        
        case 'Chanel Page Header':
            element = ref.chanel_header.selector
            break;
        
        case 'no search result':
            element = ref.no_search_result.selector
            break;
        
        case 'pdp promo message':
            element = ref.product_promo_message.selector
            break;
        
        case 'Reset password page title':
            element = ref.reset_password_heading.selector
            break;
        
        case 'Profile User Name':
            element = ref.profile_username.selector
            break;

        case 'Edit Password Heading':
            element = ref.profile_editpwd_heading.selector
            break;

        case 'Address Book Heading':
            element = ref.addressbook_header.selector
            break;

        case 'Add New Address Heading':
            element = ref.add_address_heading.selector
            break;
        
        case 'Free Shipping Text':
            element =ref.order_review_shipping_cost.selector
            break;

        case 'Total order Cost':
            element =ref.order_review_order_total_cost.selector
            break;
        
        case 'Percentage offer':
            element = ref.per_promo_cost.selector
            break;
        
        case 'Order Review Page Percentage offer':
            element = ref.order_review_percenatge_cost.selector
            break;
        
        case 'Discount price':
            element = ref.discount_row_in_cart_page.selector
            break;

            //&&&&&&&&&&&&&&

        case 'login error message':
            element=ref.hbc_login_error_message.selector
            break;

        case 'email textfield error message':
            element=ref.hbc_email_textfield_error_message.selector
            break;

        case 'password textfield error message':
            element=ref.hbc_passsword_textfield_error_message.selector
            break;

    //&&&&&&&&&&&

      }
      //   client.pause(1000);
      client.waitForElementVisible(element, 10000);
      run('Then I should see ' + element);
      return client
      .assert.containsText(element, text)
    });

   

    // Verify the applied Order level promo code in cart page
    Then(/^Verify the "(.*?)" in (.*?)$/, (type, page)=>{

        switch(page){

            case 'cart page':
            case 'checkout page promo section':    
                verifyAppliedPromoCodeInCartPage(type);
                break;



            case 'checkout page':
                verifyTheGiftMessage(type);
                break;   
                
            case 'Wishlist page':
                var element = ref.wishlist_product_name_link.selector
                verifyTheProductName(element, type);
                break; 
                
            case 'checkout shipping instore pickup person section':
                verifyInStorePickupPersonDetails();
                break;    

        }
        return client
    });

    function verifyAppliedPromoCodeInCartPage(type){
        var promoCode;
        if(type==='applied Order level promo code'){
            promoCode = data.orderLevelCode;
        }
        else if(type==='applied product level promo code'){
            promoCode = data.productLevel;
        }

        else if(type==='applied shipping level promo code'){
            promoCode = data.shippingLevel;
        }

        else if(type=== 'applied Doller promo code'){
            promoCode = data.dollerPromo;
        }
        var message = promoCode+' - APPLIED';
        client.pause(2000);
        client.assert.containsText(ref.applied_promo_codes_section.selector, message);

    }

    function verifyTheGiftMessage(type){
        var giftMessage = data.gift_message;
        client.assert.containsText(ref.order_review_gift_message.selector, giftMessage);
    }

    function verifyTheProductName(element, type){
        var productName;
        if(type ==='Gift Card Product'){
            productName = data.gift_card_product_name;
        }

        client.assert.containsText(element, productName);
    }

    function verifyInStorePickupPersonDetails(){
        client.assert.containsText(ref.checkout_shipping_instore_pickup_name.selector, data.instore_pickup_person_name);
        client.assert.containsText(ref.checkout_shipping_instore_pickup_phone_number.selector, data.instore_pickup_person_number);
        client.assert.containsText(ref.checkout_shipping_instore_pickup_email_id.selector, data.instore_pickup_person_email_id);
    }

    Then(/^Verify "(.*?)" is displayed$/, (event) => {

      switch(event) {

          case 'STORE LOCATOR ICON IN HEADER' :
              run('And I should see ' + ref.store_locator_icon.selector)
              break;

          case 'GIFT REGISTORY LINK IN HEADER' :
                run('And I should see ' + ref.gift_registery_text.selector)
                break;

                case 'ROOT CATEGORIES IN HEADER' :
                    //run('And I should see ' + ref.root_category_link.selector)
                    run('And I should see ' + ref.homepage_root_categories.selector) // updated with new locator --**
                    break;
                
                //added below piece of verification for 'The Flyer' link in the header --**
                case 'The Flyer' :
                    run('And I should see ' + ref.the_flyer.selector)
                    break;
    
                //added below piece of verification for 'Country selector' link in the header --**
                case 'header country selector link' :
                    run('And I should see ' + ref.header_country_selector.selector)
                    break;
                break;
                
            case 'EXPANDED CATEGORY SECTION IN SEARCH RESULT PAGE' :
                    run('And I should see ' + ref.search_result_page_category_expanded.selector)
                    break;        
            case 'COLLAPSED CATEGORY SECTION IN SEARCH RESULT PAGE' :
                    run('And I should see ' + ref.search_result_page_category_collapsed.selector)
                    break;        
            case 'back to top arrow':
                    run('And I should see ' + ref.back_to_top_active_button.selector)
                    break; 
            case 'search suggestion keyword':
                run('And I should see ' + ref.search_result_page_did_you_mean_link.selector)
                    break;        

            case 'search suggestion overlay':
                    run('And I should see ' + ref.search_suggestion_overlay.selector)
                    break;  
                    
                    // ----------
            case 'product tile in search result page':
                    run('And I should see ' + ref.search_result_page_products_link.selector)
                    break;      
            case 'product image in search result page':
                    run('And I should see ' + ref.search_result_page_product_image.selector)
                    break;
            case 'product brand in search result page':
                    run('And I should see ' + ref.search_result_page_product_breand.selector)
                    break;

            case 'product name in search result page':
                    run('And I should see ' + ref.search_result_page_product_name_link.selector)
                    break;
            case 'product price in search result page':
                    run('And I should see ' + ref.search_result_page_product_price.selector)
                    break;
            case 'product rating in search result page':
                    run('And I should see ' + ref.search_result_page_product_ratings.selector)
                    break;
            case 'product wishlist icon in search result page':
                    run('And I should see ' + ref.search_result_page_product_wishlist_icon.selector)
                    break;
            case 'selected refinement link' :
                    run('And I should see ' + ref.search_result_page_selected_filter_link.selector)
                    break;
            case 'color filter list':
                    run('And I should see ' + ref.search_result_page_color_filter_list.selector)
                    break;

            case 'selected color refinement':
                    run('And I should see ' + ref.search_result_page_color_swatch_selected.selector)
                    break;

                    case 'selected price refinement':
                        run('And I should see ' + ref.search_result_page_price_swatch_selected.selector)
                        break;

            case 'header search icon':
                    run('And I should see ' + ref.header_searchBar_button.selector)
                    break;
                
            case 'price filter error field' :
                    run('And I should see ' + ref.search_result_page_price_filter_error_form.selector)
                    break;
                    
            case 'available promotion filter list':
                    run('And I should see ' + ref.search_result_page_available_promotions_refinement_list.selector)
                    break; 

            case 'search result page selected wishlist icon':
                    run('And I should see ' + ref.search_result_page_wishlist_icon_selected.selector)
                    break; 

            case 'added to your wishlist':
                    run('And I should see ' + ref.search_result_product_added_to_your_wishlist.selector)
                    break; 
                     
            case 'Want to save your wishlist':
                    run('And I should see ' + ref.search_result_want_to_save_your_wishlist.selector)
                        break;
            
            case 'Sign In link in product tile':
                    run('And I should see ' + ref.search_result_signin_link.selector)
                    break;

            case 'view wishlist':
                    run('And I should see ' + ref.search_result_page_view_wishlist_button.selector)
                    break;

            case 'selected color name in PDP':
                    run('And I should see ' + ref.pdp_selected_color_name.selector)
                    break;

            case 'shipping methods section in pdp':
                run('And I should see ' + ref.pdp_shipping_option_section.selector);
                    break;        
            
            case 'Size section in PDP':
                    run('And I should see ' + ref.pdp_size_section.selector);
                    break;        
            case 'Selected size in PDP':
                    run('And I should see ' + ref.pdp_selected_size.selector);
                    break;    
            case 'selected color in pdp':
                    run('And I should see ' + ref.pdp_selected_color_swatch.selector);
                    break;
                    
                    case 'recently viewed section':
                run('And I should see ' + ref.pdp_recently_viewed_section.selector);
                break;  

            case 'you may also like section':
            run('And I should see ' + ref.pdp_you_may_like_section.selector);
            break;  
                

            case 'size guide popup':
                run('And I should see ' + ref.pdp_size_guide_modal.selector);
                break;  


            case 'selected shipto radio button':
                run('And I should see ' + ref.pdp_checked_shipto_radio_button    .selector);
                break;  

            case 'pdp choose store tray':
                run('And I should see ' + ref.pdp_choose_store_tray    .selector);
                break;  
             
            case 'pdp bopies stores list':
                run('And I should see ' + ref.pdp_bopies_stores.selector);
                break;                   
                    
                    
                case 'added to waitlist message':
                    run('And I should see ' + ref.added_to_waitlist_message.selector);
                break;

            case 'cart signup flyout':
                    run('And I should see ' + ref.cart_page_sign_up_flyout.selector);
                    break;    

            case 'collapsed promo code section in cart page':
                    run('And I should see ' + ref.collapsed_promo_code_section_in_cart_page.selector);
                    break;    

            case 'expanded promo code section in cart page':
                    run('And I should see ' + ref.expanded_promo_code_section_in_cart_page.selector);
                    break;     
                    
            case 'empty error message for promo code field in cart page':
                    run('And I should see ' + ref.empty_promo_code_error_message_in_cart_page.selector);
                    break;    
            case 'invalid promo code error message in cart page':
                    run('And I should see ' + ref.invalid_promo_code_error_message_in_cart_page.selector);
                    break;   

            case 'discount row in cart page':   
                    run('And I should see ' + ref.discount_row_in_cart_page.selector);
                    break;       

            case 'order id in order details page':
                    run('And I should see ' + ref.order_details_order_id.selector);
                    break;         
            case 'gift card balance popup':
                    run('And I should see ' + ref.gift_card_balance_popup.selector);
                    break;         
                            
            // ************** CHECKOUT *************** 
            case 'checkout shipping section':
                    run('And I should see ' + ref.checkout_shipping_section.selector);
                    break;
            case 'order confirmation page order id':
                    run('And I should see ' + ref.order_confirmation_page_order_number.selector);
                    break;    

            case 'order confirmation page create account section':
                    run('And I should see ' + ref.order_confirmation_page_create_account_section.selector);
                    break;    

            case 'error message for empty credit card fields in checkout page':
                    run('And I should see ' + ref.checkout_card_name_textbox_error_message.selector);
                    run('And I should see ' + ref.checkout_empty_card_number_error_message.selector);
                    run('And I should see ' + ref.checkout_expiry_date_error_message.selector);
                    run('And I should see ' + ref.checkout_cvv_textbox_error_message.selector);

                    client.assert.containsText(ref.checkout_card_name_textbox_error_message.selector,'This field is required.');
                    client.assert.containsText(ref.checkout_empty_card_number_error_message.selector,'This field is required');
                    client.assert.containsText(ref.checkout_expiry_date_error_message.selector,'This field is required');
                    client.assert.containsText(ref.checkout_cvv_textbox_error_message.selector,'This field is required.');
                    break;  
                    
            case 'error message for invalid credit card details':
                    run('And I should see ' + ref.checkout_card_number_textbox_error_message.selector);
                    run('And I should see ' + ref.checkout_expiry_date_error_message.selector);
                    client.assert.containsText(ref.checkout_card_number_textbox_error_message.selector,'Please enter a valid credit card number.');
                    client.assert.containsText(ref.checkout_expiry_date_error_message.selector,'Please enter valid expiration date.');
                    break;          
            
            case 'collapsed giftcard section in checkout payment':
                    run('And I should see ' + ref.checkout_giftcard_label_collapsed.selector);
                    break;
            
            case 'expanded giftcard section in checkout payment':
                    run('And I should see ' + ref.checkout_giftcard_label_expanded.selector);
                    break;
                    
            case 'empty error message for gift card fields':
                    run('And I should see ' + ref.order_review_giftcard_number_error_message.selector);
                    run('And I should see ' + ref.order_review_giftcard_access_number_error_message.selector);
                    break;
                            
               case 'invalid gift card error message':
                    run('And I should see ' + ref.order_review_invalid_gift_card_error_message.selector);
                    break;
                 
                case 'expanded apply promo code':
                    run('And I should see ' + ref.expanded_promo_code_section_in_checkout.selector);
                    break;   

                case 'collapsed apply promo code':
                    run('And I should see ' + ref.collapsed_promo_code_section_in_checkout.selector);
                    break;   

                case 'empty promo code error message in checkout shipping page':
                    run('And I should see ' + ref.empty_promo_code_error_message_in_checkout_shipping_page.selector);
                    break;        

                case 'invalid promo code error message in checkout shipping page':
                    run('And I should see ' + ref.invalid_promo_code_error_message_in_checkout_shipping_page.selector);
                    break;            

                case 'Order Summary section in checkout page':
                        run('And I should see ' + ref.checkout_order_summary_section.selector);
                        run('And I should see ' + ref.checkout_order_summary_subtotal_row.selector);
                        run('And I should see ' + ref.checkout_order_summary_shipping_row.selector);
                        // run('And I should see ' + ref.checkout_order_summary_sales_tax_row.selector);
                        run('And I should see ' + ref.checkout_order_summary_order_total_row.selector);
                        run('And I should see ' + ref.checkout_order_summary_rewards_point_row.selector);
                        break;  

                case 'saved address in billing section in checkout page':
                        run('And I should see ' + ref.checkout_saved_billing_address.selector);
                        break; 
                 
                case 'cancel button in billing address section':
                        run('And I should see ' + ref.checkout_billing_address_cancel_button.selector);
                        break;  
                        
                case 'gift card section in checkout page':
                        run('And I should see ' + ref.checkout_giftcard_label.selector);
                        break;  
                 case 'checkout save credit card checkbox':
                        run('And I should see ' + ref.checkout_save_credit_card_checkbox.selector);
                        break;  
                        
                case 'checkout selected credit card radio button':
                    run('And I should see ' + ref.checkout_card_payment_radio_button_selected.selector);
                    break;  

                case 'checkout selected paypal radio button':
                    run('And I should see ' + ref.checkout_selected_paypal_radio_button.selector);
                    break;  

                case 'checkout place order button':
                    run('And I should see ' + ref.checkout_place_order_button.selector);
                    break;    
                        
                case 'International shipping address alert message':
                    run('And I should see ' + ref.checkout_shipping_international_address_error_message.selector);
                    break;   
                case 'Invalid shipping state field error':    
                    run('And I should see ' + ref.checkout_shipping_invalid_state.selector);
                    break;   
// ------------------------------------------------------------------------------------

          case 'INTL WELCOMEMAT' :
              run('And I should see ' + ref.intl_welcomemat_css.selector)
              run(`Then this ${ref.intl_welcomematSubheadline_css.selector} should say "${data.Intl_country_optionA}"`)
              break;
          case 'INTL WELCOMEMAT - Spain' :
              run('And I should see ' + ref.intl_welcomemat_css.selector)
              run(`Then this ${ref.intl_welcomematSubheadline_css.selector} should say "${data.Intl_country_optionB}"`)
              break;
            
            case 'Add new payment method form':
                run('And I should see ' + ref.payment_add_payment_form.selector)
                break;
            
            case 'Expired card error messsage':
                run('And I should see ' + ref.payment_page_cardexpiry_invalid.selector)    
                break;
            
            case 'Empty payment page':
                run('And I should see ' + ref.empty_payment_methods.selector)
                break;
            
            case 'Bopis section':
                run('And I should see ' + ref.pdp_pickup_in_store_radio_button.selector)
                break;
            
            case 'Createaccount error field':
                run('Then I scroll down');
                run('And I should see ' + ref.create_firstname_error.selector);
                run('And I should see ' + ref.create_lastname_error.selector);
                run('And I should see ' + ref.create_email_error.selector);
                run('Then I scroll down');
                run('And I should see ' + ref.create_password_error.selector);
                run('And I should see ' + ref.create_confirmpassword_error.selector);
                break;


      }
      return client
  });


  Then(/^Verify "(.*?)" is not displayed$/, (action) => {
    var element;
    switch(action) {

        case 'home page banner':   
            element = ref.home_page.selector
            // run(`Then I should not see ${ref.home_page.selector}`)
            break;
        case 'search suggestion keyword':
            element = ref.search_result_page_did_you_mean_link.selector
            break;
        case 'search suggestion text':
            element = ref.search_result_page_recommended_search_text.selector
            break;

        case 'signin link':
            element = ref.signin_link_css.selector
            break;   
        case 'search keyword recommendation section' :
            element = ref.search_keyword_recommendation_section.selector
            break;

        case 'back to top arrow':
            element = ref.back_to_top_active_button.selector
            break;  
            
        case 'selected refinement link':
            element = ref.search_result_page_selected_filter_link.selector
            break;

        case 'clear all link in selected refinement section':
            element = ref.search_result_page_clearall_link.selector
            break;   
            
        case 'selected color refinement':
            element = ref.search_result_page_color_swatch_selected.selector
            break;
            
        case 'selected price refinement':
            element = ref.search_result_page_price_swatch_selected.selector
            break; 

        case 'color swatchs in pdp':
            element = ref.pdp_color_swatch_links.selector
            break;    

        case 'search suggestion overlay':
            element = ref.search_suggestion_overlay.selector
            break;     

        case 'checkout paypal payment radio button':
            element = ref.checkout_paypal_radio_button.selector
            break;

        case 'checkout set as default card checkbox':
            element = ref.checkout_set_as_default_credit_card_checkbox.selector
            break;    
         
        case 'checkout set as default card checkbox section':
            element = ref.checkout_set_as_default_credit_card_section.selector
            break;    

        case 'checkout selected credit card radio button':
            element = ref.checkout_card_payment_radio_button_selected.selector
            break;  

        case 'checkout selected paypal radio button':
            element = ref.checkout_selected_paypal_radio_button.selector
            break; 

        case 'gift card balance popup':
            element = ref.gift_card_balance_popup.selector
            break;

        case 'checkout applied gift card section':
            element = ref.checkout_applied_gift_card.selector
            break;
            
            case 'size guide popup':
                element = ref.pdp_size_guide_modal.selector
                break;

        case 'pdp choose store tray':
            element = ref.pdp_choose_store_tray.selector
            break;       
            
        case 'pdp bopies stores list':
            element = ref.pdp_bopies_stores.selector;
            break;
            
            case 'wishlist deselect icon':
                element = ref.wishlist_page_deselect_icon.selector;
                break;    
    
            case 'express paypal button in cart page':
                element = ref.cart_paypal_button.selector
                break;

        }
        client.pause(1000);
        run ('Then I should not see '+element);
        return client     
    });


  

    Then(/^Verify the newly opened tab$/, (action) => {
        switchWindow(client) 
        return client
    });

     function switchWindow(client) 
	{
        
        client.window_handles(function (result) 
		{
            // 0 == current main window, 1 == new tab
            var handle = result.value[1];
            client.switchWindow(handle);
            
        });
        // do something
        client.closeWindow(); // Close tab
        // Switch to main window
        client.window_handles(function (result) 
		{
            // 0 == current main window, 1 == new tab
            var handle = result.value[0];
            client.switchWindow(handle);
        });
    }
 
    
    Then(/^I verify the products count in search result page$/, () => {
         
        
         var element = ref.search_result_page_products_link.selector
            client.getText(ref.search_result_total_product_count.selector, function(result){
                var pageCount = result.value;
                console.log('*************pageCount:-'+pageCount);
                var cnt = pageCount.split(' ')[0];
                console.log("**********cnt:-"+ cnt);
                const cntNumber = Number(cnt);
                verifyThecountOfElement(element, cntNumber);

            })   
        return client
    });

    function verifyThecountOfElement(element, cnt){
        client.expect.elements(element).count.to.equal(cnt);
        return client;
    }



    Then(/^I scroll to the bottom of the page$/, () => {
        
        client.pause(2000);
        client.execute('window.scrollTo(0,document.body.scrollHeight)');    
        client.pause(2000);
        return client
    });

    Then(/^I scroll to the top of the page$/, () => {
        
        client.execute('window.scrollTo(0,0)');  
        client.pause(2000);
        return client
    });
    
    Then(/^Scroll to the bottom of the page$/,()=>{
        for (let index = 0; index < 5; index++) {
            
            client.pause(2000);
            client.execute('window.scrollTo(0,document.body.scrollHeight)');
            client.pause(2000);
        }
        return client
    });

    // 
    Then(/^I scroll to the "(.*?)"$/,(action)=> {
        var element;
        switch(action){
            case 'price refinement in search result page':
                element = ref.search_result_page_refinement_price_heading.selector
                break;

            case 'promotion refinement in search result page':
                element = ref.search_result_page_promotion_filter_heading.selector
                break;  
                
            case 'color refinement section':
                element = ref.search_result_page_refinement_color_heading.selector
                break;    

            case 'Add To Card button in pdp':
                element = ref.pdp_add_to_cart_button.selector
                break;    
        }

        client.pause(2000);
        client.execute('document.getElementById(element).scrollIntoView()');
        // client.execute(`document.getElementById(${element}).scrollIntoView()`);
        return client
    });

    Then(/^I scroll down$/,()=>{
        client.execute('window.scrollTo(0,350)');
        return client
    })

    Then(/^I scroll up$/,()=>{
        client.execute('window.scrollTo(0,50)');
        return client
    })


    Then (/^Wait for "(.*?)" mili seconds$/, (action) =>{
        client.pause(action);
        return client
    });

  //Adding this function to check the page title contains. this can be used when page elements are not developed yet --**
  Then (/^Page URL contains "(.*?)"$/, (urlsubstring) =>{
        
    switch(urlsubstring) {
        case 'Shipping And Returns':
            client.assert.urlContains(data.shippingAndReturnsurl);
            break; 
        case 'Order History':
            client.assert.urlContains(data.orderHistoryur);
            break; 
        case 'Personal Shopping':
            client.assert.urlContains(data.personalShoppingurl);
            break; 
        case 'Kleinfelds':
            client.assert.urlContains(data.kleinfeldsurl);
            break; 
        case 'TopShop':
            client.assert.urlContains(data.topshopurl);
            break; 
        case 'TopMan':
            client.assert.urlContains(data.topmanurl);
            break;
        case 'HBC Credit':
            client.assert.urlContains(data.hbccrediturl);
            break; 
        case 'Home Protection Plans':
            client.assert.urlContains(data.homeprotectionplansurl);
            break;
        case 'Total Guard Product Protection':
            client.assert.urlContains(data.totalguardproductprotectionurl);
            break;
        case 'Services':
            client.assert.urlContains(data.bayservicesurl);
            break;
        case 'Investors':
            client.assert.urlContains(data.investorurl);
            break;
        case 'Careers':
            client.assert.urlContains(data.careersurl);
            break;
        case 'Become Affiliate':
            client.assert.urlContains(data.becomeAffiliateurl);
            break;
        case 'Email Offers':
            client.assert.urlContains(data.emailOffersurl);
            break;
        case 'App Download':
            client.assert.urlContains(data.appDownloadurl);
            break;
            case 'off5th Careers':
                client.assert.urlContains(data.careersurl);
                break;
            case 'off5th About SaksFirst': 
                client.assert.urlContains(data.aboutsaksfirsturl);
                break;
            case 'off5th International':
                client.assert.urlContains(data.internationalurl);
                break;
            case 'off5th Order Status And Tracking':
                client.assert.urlContains(data.OrderStatusAndTracking);
                break;
    
            case 'oof5th Returns And Exchanges':
                client.assert.urlContains(data.returnsexchangesurl);
                break;
    
            case  'off5th Website Terms of Use':
                client.assert.UrlContains(data.termsofuseurl);
                 break;
    
            case  'off5th More insider Access':
                client.assert.UrlContains(data.moreinsideraccessurl);
                 break; 
                 
                 // &&&&&&&&&&&&&&&&&&&& *****************88&&&&&&&&&&&&&&&&&&&&&&& //
            case  'facebook':
                client.assert.urlContains(data.facebookurl);
                break; 
            case 'Pinterest':
                client.assert.urlContains(data.Pinteresturl);
                break; 
            case 'Instagram':
                client.assert.urlContains(data.Instagramurl);
                 break; 
            case 'Twitter':
                  client.assert.urlContains(data.Twitterurl);
                  break; 
            case  'Youtube':
                  client.assert.urlContains(data.Youtubeurl);
                   break; 
                                     
//&&&&&&&&&&&&&&&&&&&&&***********************&&&&&&&&&&&&&&&&&&&&&& //  
             
    
                
        }
 
    
    return client
});

Then(/^Verify (\d+) number of elements in wishlist landing page$/,(num)=>{
    //client.pause(2000);

    client.elements('css selector', ref.Wishlist_Product_all_links.selector, function(result){
        var elementsList = result.value;
        var count = result.value.length;
        console.log("****************Elements count :- "+count);

            if(count!=num){
               client.assert.ok(false);
             }

    })    
    
//ref.Wishlist_Product_Size is hardcodedto 2  or pass        elementsise
   // client.expect.elements(ref.Wishlist_Product_all_links.selector).count.to.equal(2);
    return client;

});

Then(/^Close unclosed browser tabs$/,()=>{
       
    client.pause(5000)
    client.windowHandles(function(tabs){
        console.log(tabs.value)
        //console.log("**** NUmber of tabs:- "+tabs.value.length); 
        
    
        //while (tabs.length > 0){
            client.switchWindow(tabs.value[1]);
            client.pause(4000);
            //Close the new window
            client.closeWindow();
            client.pause(2000);
            //Switch to main window
          client.switchWindow(tabs.value[0]);
        
    })
        return client
    })

      

  }
}

