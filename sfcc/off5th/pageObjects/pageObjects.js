module.exports = {
    elements : {
     
        //*********** Checkout Shipping
        checkout_shipping_state1:{
            selector:'select#shippingStatedefault option#NY',
        },

        checkout_shipping_state2:{
            selector:'select#shippingStatedefault option#NJ',
        },
        //*********** CHECKOUT BILLING  */
        checkout_billing_state1:{
            selector:'select#billingState option#NY',
        },

        checkout_billing_country:{
            selector:'select#billingCountry option#US',
        },
        

        //*********** HOME PAGE  */
        off5Th_header_country_link:{
            selector:'a#bfx-cc-flag-link',
            
        },

         // ************ PDP */
         waitlist_email_address_field:{
            selector:'input.js-waitlist-email',
        },

        waitlist_phonenumber_field:{
            selector:'input.js-waitlist-mobile',
        },

        add_to_waitlist_button:{
            selector:'div.waitlist-button button',
        },

        added_to_waitlist_message:{
            selector:'div.success-msg span.message',
        },

        
        off5th_shipping_popup_continue_button: {
            selector : 'button#bfx-wm-continue-button',
        },   

        off5Th_shipping_popup_click_here_link:{
            selector : 'div#bfx-wm-switch-country a',
        },

        off5Th_shipping_popup_us_country_option:{
            selector:"select#bfx-cc-countries-select option[value='US']",
        },

        off5Th_shipping_popup_ok_button:{
            selector:'input#bfx-cc-btn',
        },

    }

}