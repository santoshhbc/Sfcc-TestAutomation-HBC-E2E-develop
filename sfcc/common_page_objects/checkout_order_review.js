module.exports = {
    elements : {
        
        
        checkout_place_order_button: {
            selector : 'button.place-order',
        },    
        
        checkout_edit_payment_link:{
            selector:'span#editPayment',
        },

        order_review_card_type:{
            selector:'div.payment-details',
        },

        order_review_credit_card_number:{
            // selector:'div.credit-card-number',
            selector:'div.order-card-number:last-child'
            
        },

        order_review_gift_card_number:{
            selector:'div.order-card-number:nth-of-type(1)',
        },

        order_review_card_number_in_order_summary_section:{
            selector:'div.payment-methods-cart div.start-lines:nth-of-type(3) span.sum-credit-card-number',
        },

        order_review_cart_type_in_order_summary_section:{
            selector:'div.payment-methods-cart div.start-lines:nth-of-type(3) span.sum-credit-card-type',
        },

        order_review_giftcard_number_in_order_summary_section:{
            selector:'div.payment-methods-cart div.start-lines:nth-of-type(1) span.sum-credit-card-number',
        },


        order_review_giftcard_number_error_message:{
            selector:'span.invalid+div#cardNumberInvalidMessage',
        },

        order_review_giftcard_access_number_error_message:{
            selector:'span.invalid+div#accessNumberInvalidMessage',
        },

        order_review_invalid_gift_card_error_message:{
            selector:'span.generic-error',
        },

        order_review_billing_address:{
            selector:'div.billing div.address-summary',
        },

        order_review_shipping_address:{
            selector:'div.shipping div.address-summary',
        },

        order_review_shipping_phone_number:{
            selector:'div.shipping-phone',
        },

        order_review_gift_message:{
            selector:'div.summary-section div.gift-message-summary',
        },


        order_review_edit_cart_link:{
            selector:'div.desktop-tab-display-only a.btn-link',
        },

        
        order_review_change_shipping_address_link:{
            selector:'span#editShipping',
        },

        order_review_shipping_cost:{
            selector:'div.shipping-item p.text-right span',
        },

        order_review_order_total_cost:{
            selector:'div.grand-total p.text-right span',
        },

        order_review_percenatge_cost:{
            selector: 'div.desktop-tab-display-only span.promo-msg',
        },


    }

}