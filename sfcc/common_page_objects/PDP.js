module.exports = {
    elements : {
    
        pdp_product_name: {
            // selector : 'h2.product-name',
            selector : 'h1.product-name.h2',
        }, 
        
        pdp_product_brand_name:{
            selector:'div.pdp-standard a.product-brand',
        },

        pdp_product_details_section:{
            selector:'div.pdp-standard',
        },
        
        pdp_details_tab:{
            // selector:'div.accordian-main-div div.collapsible-xl:nth-of-type(1) button',
            selector:'div.product-secondary-section div.collapsible-xl button',
            index:0
        },

        pdp_shopping_and_details_tab:{
            selector:'div.product-secondary-section div.collapsible-xl:last-child button',
            // selector :"//div[contains(@id,'collapsible-shipping-details')]/preceding-sibling::button",
            // locateStrategy: 'xpath'
        },

        pdp_details_tab_style_code:{
            selector: 'div.product-detail-id',
        },

        pdp_add_to_cart_button:{
            selector:'div.prices-add-to-cart-actions button.add-to-cart',
            // selector:'div.cart-and-ipay button.add-to-cart',
        },

        pdp_select_variant_error_message:{
            selector :'div.select-size-div',
        },

        pdp_color_swatch_links:{
            selector : "div.attributes div[data-attr='color'] button.color-attribute",
        },


        pdp_selected_color_name:{
            selector:"div.attributes div[data-attr='color'] span.attr-name",
        },

        

        pdp_selectable_color_swatch:{
            // selector:"div.attributes div[data-attr='color'] button.color-attribute:not(.selected)",
            selector:"ul.color-wrapper button:not(.unselectable):not(.selected)",
        },

        pdp_selected_color_swatch:{
            // selector:"div.attributes div[data-attr='color'] button.color-attribute.selected",
            selector:"button.color-attribute.selected",
        },

        pdp_size_section:{
            selector:"ul.size-attribute",
        },
        // e2e changes updated
        pdp_item_size_available:{
            selector:"fieldset > ul > li:nth-child(1) > a",
        },
        // e2e changes updated
        pdp_selected_size:{
            selector: "fieldset > ul > li:nth-child(1)",
        },

        pdp_size_links:{
            // selector:'ul.size-attribute li a',
            selector:'ul.size-attribute li:not([disabled]):not([selected]) a',
        },
        pdp_selected_size_is_unavailable:{
            selector:"ul.size-attribute li[selected='selected'][disabled='disabled']"
        },
        
        pdp_size_list:{
            selector: "ul.size-attribute li",
        },

        pdp_quantity_box:{
            selector:'input.quantity-val',
        },
       // e2e changes updated
        pdp_quantity_increase_button:{
            selector:'button.btn.btn-default.btn-number.plus-btn',
        },

        // e2e changes updated
        pdp_color_dropdown_button:{
            selector:'div.attributes > div:nth-child(2) > div > div > div > div',
        },

        // e2e changes updated
        pdp_color_dropdown_data_selection:{
            selector:'div:nth-child(2) > div > div > div > ul > li:nth-child(2)',
        },
        // e2e changes updated
        pdp_color_dropdown_S2582:{
            selector:'div:nth-child(2) > div > div > div > ul > li:nth-child(3)>div',
        },
        // e2e changes updated
        pdp_color_selection_red:{
            selector:'li[label*="red rock"]',
        },
        // e2e changes updated for 9 months
        pdp_size_9_Months_selection:{
            selector:'fieldset > ul > li:nth-child(3) > a',
        },

        // e2e changes updated for 6 months
        pdp_size_6_Months_selection:{
            selector:'fieldset > ul > li:nth-child(1) > a',
        },
        // e2e changes updated for 6 months
        pdp_size_18_24_Months_selection:{
            selector:'fieldset > ul > li:nth-child(1) > a',
        },
        // e2e changes updated for 3 months
        pdp_size_3_Months_selection:{
            selector:'fieldset > ul > li:nth-child(2) > a',
        },
         // e2e changes updated for 6 months
         pdp_size_large_selection:{
            selector:'fieldset > ul > li:nth-child(2) > a',
        },

        // e2e changes updated for Red
        pdp_color_red_selection:{
            selector:' li:nth-child(9) > button > span.color-value.swatch-circle.swatch-value.swatch-box.selectable',
        },

        // e2e changes updated for blue default
        pdp_color_blue_selection:{
            selector:' li:nth-child(1) > button > span.color-value.swatch-circle.swatch-value.swatch-box.selectable',
        },

        // e2e changes updated for Green
        pdp_color_green_selection:{
            selector:' li:nth-child(6) > button > span.color-value.swatch-circle.swatch-value.swatch-box.selectable',
        },
        // e2e changes updated for Black
        pdp_color_black_selection:{
            selector:' li:nth-child(1) > button > span.color-value.swatch-circle.swatch-value.swatch-box.selectable',
        },
        // e2e changes updated for Black
        pdp_color_black_selection_s2562:{
            selector:' li:nth-child(2) > button > span.color-value.swatch-circle.swatch-value.swatch-box.selectable',
        },

        pdp_selected_quantity_pdp:{
            selector:'select#quantity-1 option[selected]',
        },
        

        pdp_quantity_increase_link:{
            selector:'button.plus-btn',
        },

        pdp_quantity_decrease_button:{
            selector:' button.minus-btn',
        },

        pdp_recently_viewed_product_name_link:{
            selector:"div[data-adobelaunchrecommendationcontainer='Recently viewed'] div.pdp-link a",
        },

        pdp_you_may_also_like_product_name_link:{
            selector:"div[data-adobelaunchrecommendationcontainer='You May like'] div.pdp-link a",
        },

        pdp_recently_viewed_section:{
            selector :'div.recommendations.items-like',
        },

        pdp_recently_viewed_section_heading:{
            selector :'div.recommendations.items-like div.slider-heading span',
        },
        
        pdp_you_may_like_section:{
            selector :'div.recommendations.recom-pdts',
        },

        pdp_you_may_like_section_heading:{
            selector :'div.recommendations.recom-pdts div.slider-heading span',
        },

        pdp_size_guide_link:{
            selector:'div.size_guide a',
        },

        pdp_size_guide_modal:{
            selector:"div[class='size-modal modal fade show']"
        },

        pdp_size_guide_modal_popup_close_icon:{
            selector:'div#sizeModal button.close',
        },

        pdp_find_location_button:{
            selector:'a.schedule-an-appointment',
        },
        
        store_locator_heading:{
            selector:'h2.bwt-index-main-title',
        },

        pdp_shipto_radio_button_label:{
            selector:'input.product-shipto+label span',
        },

        pdp_pickup_in_store_radio_button_label:{
            selector:'input.product-pis+label span',
        },


        pdp_checked_shipto_radio_button:{
            selector:'input.product-shipto[checked]',
        },

        pdp_select_variant_to_see_the_store_availability:{
            selector:'div.store-info',
        },
        
        pdp_choose_store_tray:{
            selector:'div.modal.show',
        },

        pdp_no_stores_available_message:{
            selector:'div#inStoreInventoryModal p.store-locator-no-results',
        },

       pdp_chose_store_tray_close_icon:{
           selector:'div#inStoreInventoryModal button.close',
       },
          // e2e changes updated
       pdp_add_to_bag_size:{
          selector:'fieldset > ul > li:nth-child(1)',
       },
          // e2e changes updated
       pdp_add_to_bag_workaround:{
            selector:'div.prices-add-to-cart-actions > div > div > button',
         },
       pdp_add_to_bag_color:{
        selector:'ul > li:nth-child(1) > button',
     },

       pdp_add_to_bag:{
           selector:'div.prices-add-to-cart-actions > div > div > button',
       },

// ################ BOPIS section 
        // e2e changes updated
        // pdp_select_bopis_size:{
        //     selector:'fieldset > ul > li:nth-child(1)',
        // },

        // e2e changes updated
        // pdp_select_bopis_store_select:{
        //     selector:'fieldset > ul > li:nth-child(1)',
        // },
        pdp_shipping_option_section:{
            selector:'div.shipping-option',
        },

        pdp_choose_a_store_links:{
            selector:'a.change-store',
        },

        pdp_pickup_in_store_radio_button:{
            // selector:'div.shipping-option input.product-pis',
            selector:'input.product-pis',
        },

        pdp_city_postal_code_textbox:{
            selector:'div.in-store-inventory-dialog input#store-postal-code',
        },

        pdp_radius_selectbox:{
            selector:'div.in-store-inventory-dialog select#radius',
        },

        pdp_check_store_button:{
            selector:'div.in-store-inventory-dialog button.btn-storelocator-search',
        },

        pdp_bopies_stores:{
            selector:'div.in-store-inventory-dialog div.store-result input',
        },


        pdp_instock_store:{
            // selector:"address-details-sec",
            // address-details-sec
            // input#input-1554
            // selector:"//div[@class='available' and contains(text(),'In Stock')]/parent::div/parent::div/child::div[@class='store-name']",
            selector:"div.in-store-inventory-dialog div.store-result input[data-store-info*='In Stock']",
            // selector:"//div[@class='available' and contains(text(),'In Stock')]/../../../child::div[@class='store-details-right']",
        },

        pdp_select_store_button:{
            selector:'div.in-store-inventory-dialog button.select-store',
        },




// ################ BOPIS section 

        pdp_recommendation_section_title:{
            selector:'span.mRecommendation-title',
        },

        pdp_shop_the_look_recommendation_section_product_name:{
            selector:'div.shop-the-look div.pdp-link a.link',
        },

        pdp_product_wishlist_icon:{
            selector:'a.pdpselect-wishlist',
        },

        pdp_view_wishlist_link:{
            selector:'div.pdp-customer-content div.wishlist_container a.view-btn',
        },
        


        // *********************************
        // ******* PRODUCT SET *************

        product_set_page:{
            selector:'div.product-set-detail',
        },
        product_set_items:{
            selector:'div.set-items',
        },

        product_set_first_product_name_link:{
            selector:'div.set-items div.product-detail:nth-of-type(1) h3.product-name a',
        },

        product_set_first_product_view_full_details_link:{
            selector:'div.set-items div.product-detail:nth-of-type(1) a.view-full-info',
        },

        product_promo_message:{
            selector: 'div.pdp-standard div.promotions.promotion-txt'
        }


    }

}