module.exports = {
    elements : {
        
        checkout_back_to_cart_link:{
            selector:'div.navbar-header a.btn-link',
        },

        checkout_shipping_section: {
            selector : 'div.shipping-section',
        },

        checkout_shipping_add_new_address_link:{
            selector: 'div#customer-addresses span.add-address-section',
        },

        checkout_shipping_address_edit_link:{
            selector:'div.shipping-address div.edit-customer-address a',
            // selector:'span#editShipping',
        },

        checkout_shipping_first_name_textbox:{
            selector:'input#shippingFirstNamedefault',
        },

        checkout_shipping_last_name_textbox:{
            selector:'input#shippingLastNamedefault',
        },

        checkout_shipping_address1_textbox:{
            selector:'input#shippingAddressOnedefault',
        },

        checkout_shipping_address2_textbox:{
            selector:'input#shippingAddressTwodefault',
        },

        checkout_shipping_city_textbox:{
            selector:'input#shippingAddressCitydefault',
        },

        checkout_shipping_state_selectbox:{
            selector:'select#shippingStatedefault',
        },

        // checkout_shipping_quebec_state:{
        //     selector:'select#shippingStatedefault option#QC',
        // },

        // checkout_shipping_british_columbia_state:{
        //     selector:'select#shippingStatedefault option#BC',
        // },


        checkout_shipping_postcode_textbox:{
            selector:'input#shippingZipCodedefault',
        },

        checkout_shipping_phone_number_textbox:{
            selector:'input#shippingPhoneNumberdefault',
        },

        checkout_shipping_email_textbox:{
            selector:"input[name='dwfrm_shipping_shippingAddress_email']",
        },

        checkout_save_shipping_address_button:{
            selector:'div.shipping-save-address button',
        },
        
        checkout_shipping_save_button:{
            // selector:'div.shipping-address button.btn-primary',
            selector:"button[value='submit-shipping']",
        },


        checkout_saved_shipping_address:{
            selector:'div.shipping-address div.address-details-left',
        },

        checkout_shipping_address_cancel_button:{
            selector:'div.shipping-next-cancel button.btn-save-cancel',
        },


        checkout_add_gift_message_link:{
            selector:"input[id^='isGift']+label",
        },

        checkout_gift_recipient_name_textbox:{
            selector:'input#giftRecipientName',
        },

        checkout_gift_message_textbox:{
            selector:'textarea#giftMessage',
        },


        checkout_shipping_international_address_error_message:{
            selector:"div[class='coutry-rest-msg hbc-alert-error']"
        },

        checkout_shipping_invalid_state:{
            selector:'select.shippingState.is-invalid',
        },

        checkout_sipping_set_as_default_address_checkbox:{
            selector:'input#set-as-default+label',
        },
             //e2e changes updated 
        checkout_shipping_add_new_address_link:{
            selector:'div.shipping-address div.customer-addresses-section span.add-address-section',
        },

        // ************************ PROMO SECTION ***********
        expanded_promo_code_section_in_checkout:{
            selector: "div[class='promotab-click open-state']",
        },
        // e2e reused - 1
        collapsed_promo_code_section_in_checkout:{
            selector:"button[class='promotab-click']",
        },
        
        apply_promo_code_link:{
            selector:'div.promotab-click span.promo-heading',
        },
        // e2e reused - 2
        promo_code_textbox_in_checkout:{
            selector:'input#couponCode',
        },
        // e2e reused - 3
        promo_code_apply_button_in_checkout:{
            selector:'button.promo-code-btn',
        },

        empty_promo_code_error_message_in_checkout_shipping_page:{
            selector:'input.is-invalid+div.coupon-error span#missingCouponCode',
        },

        invalid_promo_code_error_message_in_checkout_shipping_page:{
            selector:'input.is-invalid+div.coupon-error span#invalidCouponCode',
        },

        

// ******************* Order Summary Section *************
        checkout_order_summary_section:{
            selector:'span.order-mini-summary-heading',
        },

        checkout_order_summary_subtotal_row:{
            selector:'div.subtotal-item',
        },

        checkout_order_summary_shipping_row:{
            selector:'div.shipping-item',
        },

        checkout_order_summary_sales_tax_row:{
             // selector:'div.sales-tax-item',
             selector:'div.sales-tax-item.tax-normal',
        },

        checkout_order_summary_order_total_row:{
            selector:'div.grand-total',
        },

        checkout_order_summary_rewards_point_row:{
            selector:'div.hudson-reward-points',
        },

        checkout_shipping_phone_number_error_message:{
            selector:'input.shippingPhoneNumber.is-invalid',
        },

        // ########################### BOPIs Selectors
        checkout_shipping_instore_pickup_full_name_textbox:{
            selector:'input#fullName',
        },

        checkout_shipping_instore_pickup_phone_number_textbox:{
            selector:'input#phone',
        },

        checkout_shipping_instore_pickup_email_textbox:{
            selector:'div.instore-fields input#email',
        },

        checkout_shipping_instore_pickup_save_and_continue_button:{
            selector:'button.submit-pickup',
        },

        checkout_shipping_instore_pickup_name:{
            selector:'div.fullname',
        },

        checkout_shipping_instore_pickup_phone_number:{
            selector:'div.phone',
        },

        checkout_shipping_instore_pickup_email_id:{
            selector:'div.email',
        },

        checkout_shipping_methods_name_list:{
            selector:'div.shipping-method-list span span.display-name',
        },

        //&&&&&&&&&&&&*****

    Checkout_Empty_shipping:{
        selector:'div#customer-addresses div.address-result',
    },

    }

}