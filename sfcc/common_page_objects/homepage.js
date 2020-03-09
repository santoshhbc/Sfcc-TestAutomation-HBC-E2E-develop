module.exports = {
    elements : {
        /******************************** HBC Header*****************************************************************************************/ 
        
        homepage_popup_close_icon:{
            selector : 'span.consent-tracking-close',
        },

        homepage_popup_email_textbox:{
            selector:'input#email-signup',
        },

        homepage_popup_submit_button:{
            selector:'button.subscribe-email',
        },

        
        accept_cookies_button:{
            selector : 'div#consent-tracking button.btn-primary',
        },

        signin_link_css: {
            selector : 'div.header-account-drawer span',
        },

        signin_link : {
            selector : 'a.signin-link',
        },
      
        user_account_text:{
            selector : 'div.user-links span.user-message',
        },

        header_my_account_link: {
            // selector : 'div.user-links>a',
            selector:'div.user-links span.user-message',
        },

        myaccountlink_inside_overlay: {
            selector: 'a.my-account',
        },
        
        site_logo:{
            selector:'div.navbar-header.brand a.logo-home',
        },
        //  e2e changes updated - home button click
        home_click:{
            selector:'div.navbar-header.brand',
        },
        //  e2e changes updated - Start shopping
        start_shopping_button:{
            selector:'div.shop-btn > a',
        },
        //  e2e changes updated - Start shopping
        language_french_link:{
            selector:'#header-container > div.header-utilities.pull-right > div.country-selectorA > a > span',
        },

        home_page:{
            selector : 'div.home-page',
        },
        home_page_categories:{
            selector : 'div.home-categories',
        },

        root_categories:{
           // selector:'nav.navbar li.nav-item.dropdown span.nav-link',
           selector:'nav.navbar li.nav-item.dropdown a.nav-link span',
          // selector:'nav.navbar li.nav-item.dropdown span.nav-link',
        },

        // Added for global_header sceanrios --**
        homepage_root_categories:{
            selector:'nav.div.menu-group ul.nav.navbar-nav li.nav-item',
        },

        subcategory_links_under_expanded_root_category:{
            selector:'ul.show ul.cat-level2 a',
        },
        
        women_root_category_link:{
            //selector : 'li.nav-item a#womens',
            selector : "li[class*='nav-item'] > a[href*='women']",   // updated the locator --**
        },

        dress_subcategory_link:{
            selector : 'a#womens-clothing-dresses',
            // selector : 'ul[class='dropdown-menu show']  a#womens-clothing-dresses',
        },

        store_locator_icon:{
            selector : 'a.header-location',
        },

        header_wishlist_link:{
            selector : 'a.header-wishlist',
        },

        gift_registery_text:{
            selector : "div#header-container a[href*=gift-registry]>span.utility-link",  // --** updated with cssselector
            //  selector : "//div[@id='header-container']//span[contains(text(),'Gift Registry')]",
           // locateStrategy:'xpath'
        },
        // Added for global_header sceanrios --**
        the_flyer:{
            selector : "//div[@id='header-container']//span[contains(text(),'The Flyer')]",
            locateStrategy:'xpath'
        },


        header_country_selector:{
            // selector: "div.header-utilities a.country-selector span.utility-link",
            selector: "div.header-utilities a.country-selector",
        },

        header_create_account_link: {
            selector: "a.create-account",
        },

        header_orderstatus_link: {
            selector: "a.order-status"
        },

        header_myaccount_link: {
            selector: "a.my-account"
        },

        header_orderhistory_link: {
            selector: "a.order-history"
        },

        header_signout_link: {
            selector: "a.log-out"
        },
       

        search_suggestion_overlay:{
            selector:'div.suggestions',
        },

        search_suggestion_first_product_link:{
            selector:'span#product-0 a',
        },

        search_suggestion_first_product_name:{
            selector:'span#product-0 a span.search_name',
        },


        search_suggestion_first_product_image:{
            selector:'span#product-0 a img',
        },


        // ************************ MINI CART ************************ 
        // *********************************************************** 
        minicart_link:{
            selector:"div[class='minicart'] a.minicart-link",
        },

        header_minicart_quantity: {
            selector:"div[class='minicart'] span.minicart-quantity",
        },

        header_search_box:{
            selector:'div#header-container input.search-field',
        },

        header_searchBar_button:{
            selector:'div#header-container button.search-icon',
        },
        

        root_cat_one :{
            selector : 'li.dropdown span.nav-link',
            // selector: 'ul.navbar-nav li.nav-item.dropdown',
        },

        root_cat_two:{
            selector : 'ul.navbar-nav li.nav-item.dropdown:nth-of-type(2) span.nav-link',
        },

        minicart_product_name:{
            selector:'div#sg-navbar-collapse div.confirm-container div.pdt-name',
        },


          //***********************************************************  
         // ************************ FOOTER SECTION ************************ 
        // *********************************************************** 

        footer_email_offer_link:{
            selector: "div.footer-top-utility-section a[title='Email offers']",
        },

        footer_download_the_app_link:{
            selector: "div.footer-top-utility-section a[title='download the app']",
        },


        footer_store_locator_and_events:{
            selector: "div.footer-top-utility-section a[title='store locator and events']",
        },


        footer_hbc_rewards:{
            selector: "div.footer-top-utility-section a[title='HBC Rewards']",
        },


        footer_contact_us_link:{
            selector: "div.footer-container a[title*='Contact Us']",
        },
        

        footer_help_and_faq_link:{
            selector: "div.footer-container a[title*='FAQs']",
        },


        footer_Shipping_and_returns_link:{
            selector: "div.footer-container a[title*='Shipping and Returns']",
        },


        footer_order_status_link:{
            selector: "div.footer-container a[title*='Order Status']",
        },


        footer_order_history_link:{
            selector: "div.footer-container a[title*='Order History']",
        },


        footer_gift_cards_link:{
            selector: "div.footer-container a[title*='Gift cards']",
        },

        footer_personal_shopping_link:{
            selector: "div.footer-container a[title*='Personal Shopping']",
        },

        footer_sms_updates_link:{
            selector: "div.footer-container a[title*='SMS Updates']",
        },


        footer_title_Kleinfelds_bridal_link :{
            selector: "div.footer-container a[title*='Bridal']",
        },


        footer_topshop_link:{
            selector: "div.footer-container a[title*='TOPSHOP']",
        },

        footer_topman_link:{
            selector: "div.footer-container a[title*='TOPMAN']",
        },

        footer_hbc_credit_link:{
            selector: "div.footer-container a[title*='HBC Credit']",
        },

        footer_insurance_link:{
            selector: "div.footer-container a[title*='Insurance']",
        },

        footer_home_protecton_plans_link:{
            selector: "div.footer-container a[title*='Home Protecton Plans']",
        },

         // added this below  --**
         footer_product_protection_link:{
            selector: "div.footer-container a[title*='Total Guard Product Protection']",  // updated --**
           
        },

        footer_mortgages_link:{
            selector: "div.footer-container a[title*='Mortgages']",
        },

        footer_total_guard_product_protection_link:{
            selector: "div.footer-container a[title*='Total Guard Product Protection']",
        },

        footer_investor_relations_link:{
            selector: "div.footer-container a[title*='Investor Relations']",
        },

        footer_careers_link:{
            selector: "div.footer-container a[title*='Careers']",
        },

        footer_services_link:{
            selector: "div.footer-container a[title*='Services']",
        },

        footer_become_an_affiliate:{
            selector: "div.footer-container a[title*='Become an Affiliate']",
        },

         //added for footer link navigated page elements --**
         footer_navigation_contactus_askmequestion_text:{
            selector: "input[placeholder='Ask your question here']",
        },

        footer_navigation_contactus_input_email:{
            selector: 'input[name=SuppliedEmail]',
        },
        
        footer_navigation_hbcrewards_page_logo:{
            selector: "a[href*=hbcrewards] img[src*=hbcrewards_logo]",
        },

        footer_navigation_hbcrewards_topnav_link:{
            selector: "tbody tr.topnav img[alt='About HBC Rewards']",
        },

        footer_navigation_helpandfaq_askyourquestionshere:{
            selector: "input[placeholder='Ask your question here']",
        },
        footer_navigation_helpandfaq_popular_topics_text:{
            selector: 'p.home-page_popular-topics',
        },
        footer_navigation_gift_card_page_title_text:{
            selector: "//span[text() = 'Gift Card']",
            locateStrategy : 'xpath'
        },
        footer_navigation_sms_alerts_on_mobile:{
            selector: "(//table[@id='mobile-form']//td[contains(text(),'I would like to receive mobile alerts in')])[1]",
            locateStrategy : 'xpath'
        },
        footer_navigation_sms_alerts_join_now_button:{
            selector: "input[alt='Join Nowsda']",
        },
        footer_navigation_kleinfeld_page_header:{
          //  selector: "h2.category-name.search-results-header",
            selector: "//h2[@class='category-name search-results-header' and contains(text(), 'KLEINFELD')]",
            locateStrategy : 'xpath'
        },

        footer_navigation_topshop_page_header:{
            selector: "//h2[@class='category-name search-results-header' and contains(text(), 'Topshop')]",
            locateStrategy : 'xpath'
        },
        footer_navigation_topman_page_header:{
            selector: "//h2[@class='category-name search-results-header' and contains(text(), 'TopMan')]",
            locateStrategy : 'xpath'
        },
        footer_navigation_hbc_credit_page_logo:{
            selector: "img[alt='Capital One Hudson’s Bay']",
        },
        footer_navigation_hbc_financial_page_logo:{
            selector: 'div#logo img',
        },
        footer_navigation_hbc_investor_page_link:{
            selector: "nav.breadcrumb a[href*='investor']",
        },
        
        //-----&&&&&&&& footer links started&&&&&&&&----------//
     
             off5th_footer_gift_cards_link:{
                  selector:'a[title="Go to My Gift Cards"]',
             
             },
             footer_More_insider_Access_link:{
                 selector: 'a[title="Go to More! insider Access"]',
     
             },
             footer_Create_A_More_Account_link:{
                  selector: 'a[title="Go to Create A More! Account"]',
     
              },
             footer_Shipping_Policy_link:{
                 selector: 'a[title="Go to My Shipping Policy"]',
     
              },
             footer_Returns_Exchanges_link:{
                  selector: 'a[title="Go to Returns and Exchanges"]',
     
             },
            footer_Order_Status_Tracking_link:{
                 selector: 'a[title="Go to Order Status and Tracking"]',
     
             },
             footer_International_link:{
                 selector: 'a[title="Go to International"]',
     
             },
             footer_About_SaksFirst_link:{
                   selector: 'a[title="Go to About SaksFirst"]',
     
             },
             footer_Pay_Bills_Manage_link:{
                   selector: 'a[title="Go to Pay Bills and Manage"]',
     
            },
             footer_Apply_for_the_SaksFirst_Store_Card_link:{
                   selector: 'a[title="Go to Apply for the SaksFirst  Store Card"]',
     
              },
             footer_Location_Events_link:{
                    selector: 'a[title="Go to Location and Events"]',
     
            },
             footer_Privacy_Policy_link:{
                  selector: 'a[title="Go to Privacy Policy"]',
     
            },
             footer_Website_Terms_of_Use_link:{
                 selector: 'a[title="Go to Website Terms of Use"]',
        
            },
            off5th_footer_Careers_link:{
                selector: 'a[title="Go to Careers"]',
     
            },
          
     
            //&&&&&&&&&&&&footer links ends&&&&&&&&&&&&&&?//
     
            //---------------------------------verify page elements  locators------------------------//
     
            footer_navigation_create_account_link:{
             selector: "//a[text()='create account']",
         },
     
           footer_navigation_privacy_policy_link:{
               selector: "//h1[text()='Privacy Policy']",
           },
     
           footer_navigation_store_locator_page_title:{
               selector: "//h2[@class='bwt-index-main-title']",
           },
     
           footer_navigation_Apply_for_the_SaksFirst_Store_Card_page_title:{
               selector:"//strong[text()='SaksFirst Store Card']",
           },
           footer_navigation_Pay_Bills_And_Manage_page_title:{
               selector:"//p[text()='Sign in with the same login you’ve always used to view your account activity and statements, pay your bill, and more.']",
     
           },

           // ************************
        facebook:{
            selector:'a.facebook',
        },

        pinterest:{
            selector:'a.pinterest',
        },

        instagram:{
            selector:'a.instagram',
        },
        
        //&&&&&&&&&&&&&&&&*****************&&&&&&&&&&&-----------------------------------------------------------&&&&&&&&&&//
        check_order_status_link:{
            selector:'div.popover popover-bottom show a.order-status',
        },
        //&&&&&&&&&&&&&&&&&& The bay footer links&&&&&&&&&&&&&&&&&&&&//

        footer_facebook_icon_link:{
            //selector:"//a[@class='facebook']",
            selector:'a.facebook img[title="Facebook"]',

        },

        footer_pinterest_icon_link:{
            selector:'a.pinterest',
        },

        footer_instagram_icon_link:{
            selector:'a.instagram',
        },
        footer_twitter_icon_link:{
            selector:'a.twitter',

        },
        footer_youtube_icon_link:{
            selector:'a.youtube',
         
        },
        footer_privacy_policy_link:{
            selector:'a[text()="Privacy Policy"]',
            
        },
        footer_Terms_And_conditions_link:{
            selector:'//a[text()="Terms & Conditions"]',
            
        },

        footer_Site_Feedback_link:{
            selector:"a[text()='Site Feedback']",
        },
        

    }

}