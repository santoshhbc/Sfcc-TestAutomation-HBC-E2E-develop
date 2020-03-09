module.exports = {
    elements : {
        
        cart_header:{
            selector:'div.cart-header',
        },

        cart_product_line_item:{
            selector:'div.product-line-item',
        },

        cart_product_count_heading:{
            selector:'span.number-of-items',
        },

        cart_increase_link:{
            selector: 'span.next-val',
        },

        cart_decrease_link:{
            selector: 'span.prev-val',
        },


        empty_cart_heading: {
            selector : 'div.shopping-bag-text span.number-of-items',
        },

        empty_cart_message: {
            selector : 'div.empty-msg span',
        },

        empty_cart_content:{
            selector:'div.cart-empty',
        },
        
        cart_keep_shopping_button: {
            selector : 'div.shop-btn a',
        },
        
        cart_product_name:{
            selector:'div.line-item-name',
        },

        cart_product_quantity:{
            selector:'input.quantity-val',
        },

        cart_remove_product_link:{
            selector:'div.hidden-md-down button.remove-product',
        },

        cart_paypal_button_iframe:{
            selector:'iframe.zoid-component-frame',
            //iframe[contains(@class,'zoid-component-frame')]
        },


        cart_paypal_button:{
            // selector: 'button.paypal-button',
            selector:"div.paypal-button-shape-rect div[role='button']",
        },

        cart_pickup_in_store_radio_button:{
            selector:'input.product-pis',
        },
     

        // *******************

        cart_wishlist_count:{
            selector:'span.wishlist-count',
        },

        cart_wishlist_product_name:{
            selector:'div.wishlist-secondary a.product-name',
        },

        cart_wishlist_product_remove_link:{
            selector:'button.remove-prod-from-wishlist',
        },
        
        cart_checkout_button:{
            // selector:'a.checkout-btn',
            // selector:'a.proxy-checkout-btn',
            selector:'div.checkout-continue a',
        },

        cart_page_sign_up_flyout:{
            selector:'div.sign-up-flyout',
        },

        cart_page_signup_flyout_style:{
            selector:'div#signInModal',
        },

        cart_signup_flyout_close_icon:{
            selector:'div.cancel-icon button',
        },

        intermediate_login_email_textbox:{
            selector: 'input#login-form-email',
        },

        intermediate_login_password_textbox:{
            selector: 'input#login-form-password',
        },

        intermediate_login_signin_button:{
            selector: 'button.sign-up-btn',
        },
        
        intermediate_login_error_message:{
            selector:'form.login div.alert-danger',
        },

        intermediate_login_forgot_password_link:{
            selector:'a.reset-password',
        },

        intermediate_login_guest_checkout_button:{
            selector:'a.checkout-as-guest',
        },


        // ************ PROMO CODE SECTION
        collapsed_promo_code_section_in_cart_page:{
            selector:"div[class='promo-click']",
        },

        expanded_promo_code_section_in_cart_page:{
            selector:"div[class='promo-click open-state'] ",
        },

        apply_promo_code_link_in_cart_page:{
            selector:'div.promo-click span.promo-heading',
        },

        promo_code_text_box_in_cart_page:{
            selector:'input#couponCode',
        },

        promo_code_apply_button_in_cart_page:{
            selector:'button.promo-code-btn',
        },

        empty_promo_code_error_message_in_cart_page:{
            selector:'input.is-invalid+div.coupon-error span#missingCouponCode',
        },

        invalid_promo_code_error_message_in_cart_page:{
            selector:'input.is-invalid+div.coupon-error span#invalidCouponCode',
        },

        applied_promo_code_in_cart_page:{
            selector:'div.coupon-code',
        },

        applied_text:{
            selector:'span.coupon-applied',
        },
        applied_promo_codes_section:{
            selector:'div.coupons-and-promos'
        },

     


        // ********** ORDER SUMMARY SECTION *******************
        cart_order_summary_section:{
            selector:'div.cart-summary-section',
        },


        discount_row_in_cart_page:{
            selector:'div.order-discount',
        },

        discount_amount_in_cart_page:{
            selector:'span.order-discount-total',
        },

        cart_total_amount:{
            selector:'span.grand-total',
        },

        discount_text_in_Cart_Page:{
            selector: 'div.order-discount span',
        },

        gwp_bonusproduct_section:{
            selector: 'div.bonus-product-button div.free-gifts-qualify',
        },

        gwp_bonusproduct_select_link:{
            selector: 'div.bonus-product-button div.select-text',
        },

        gwp_bonus_promo_list:{
            selector: 'div.select-bonus',
        },

        gwp_bonus_promo_link:{
            selector: 'div.gwp-title',
        },

        gwp_bonus_promo_product:{
            selector: 'div.product-quickview div.gwp-content:first-child input',
        },

        gwp_add_to_bag:{
            selector: 'div.bag-btn button.add-bonus-products',
        },

    
        // *******// e2e changes updated  for no size items/colour

        search_result_page_product_name_nosize : {
            // selector : 'div.product-tile div[data-pid="0600089106534"]',
            selector : '#\39 1278097 > div > div.image-container.prevent-slick > a.thumb-link > img',
        },

        pa_tile_add_to_bag:{
            selector:'#\39 1278097 > div > div.tile-body.text-center > div.hover-content > button',
        }, 


        // **************************

        per_promo_cost:{
            selector: 'div.prdt-cart-details span.promo-msg',
        },

        // DELETE below selectors
        free_gift_product:{
            selector:'div.free-gifts-qualify span.free-gift-text'
        },
        

        bonus_product:{
            selector:'div.select-bonus div.bonus-product-button:first-child span.gwp-title-text',
        },

        bonus_product_radio_button:{
            selector:'div.product-quickview div.gwp-content:first-child input',
        
        },

        estimated_rewards_point_text:{
            selector:'div.minicart.visible-hidden > div.popover.popover-bottom > div > div > div.minicart-footer > div.hudson-reward-points > span:nth-child(1)',
            },
    
            estimated_rewards_point_value:{
                selector:'div.minicart.visible-hidden > div.popover.popover-bottom > div > div > div.minicart-footer > div.hudson-reward-points > span:nth-child(2)',
                },
      

    }

}