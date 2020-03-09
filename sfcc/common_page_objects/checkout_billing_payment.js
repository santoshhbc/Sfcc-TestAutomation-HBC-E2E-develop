
module.exports = {
    elements : {
        
        checkout_different_billing_address_checkbox:{
            selector:'div.billing-address-check label.checkbox-label',
        },

        checkout_billing_first_name_textbox:{
            selector:'input#billingFirstName',
        },

        checkout_billing_last_name_textbox:{
            selector:'input#billingLastName',
        },

        checkout_billing_address_line_one_textbox:{
            selector:'input#billingAddressOne',
        },

        checkout_billing_address_line_two_textbox:{
            selector:'input#billingAddressTwo',
        },

        checkout_billing_country_selectbox:{
            selector:'select#billingCountry',
        },

        checkout_billing_state_selectbox:{
            selector:'select#billingState',
        },

     
        checkout_billing_canada_country_option:{
            selector:'select#billingCountry option#CA',
        },

        checkout_billing_city_textbox:{
            selector:'input#billingAddressCity',
        },

        checkout_billing_zipcode_textbox:{
            selector:'input#billingZipCode',
        },

        checkout_billing_tax_number_textbox:{
            selector:'input#billingCustomerTax',
        },

        checkout_billing_address_checkbox_status:{
            selector:'fieldset.billing-addr-saved',
        },
        
        checkout_saved_billing_address:{
            selector:'div.billing-addresses div.address-details-left',
        },
        
        checkout_add_new_billing_address_link:{
            selector:'div.billing-addresses span.add-address-section',
        },

        checkout_billing_address_cancel_button:{
            selector:'button.billing-save-cancel',
        },
        
        checkout_billing_address_selected_country:{
            selector:'select#billingCountry option[selected]',
        },

        checkout_card_name_text_box: {
            selector : 'input#cardOwner',
        },

        checkout_card_number_textbox:{
            selector:'input#cardNumber',
        },

        checkout_expiry_date_textbox:{
            selector:'input#cardExpiration',
        },

        checkout_cvv_textbox:{
            selector:'input#securityCode',
        },

        checkout_credit_card_collapsed_section:{
            selector:'fieldset.payment-form-fields div.checkout-hidden',
        },

        checkout_add_credit_card_link:{
            selector:'span.add-payment-section',
        },

        checkout_set_as_default_credit_card_checkbox:{
            selector:'div.save-credit-default label',
        },
        
        checkout_set_as_default_credit_card_section:{
            selector:'div.d-none div.save-credit-default',
        },       

        checkout_save_credit_card_checkbox:{
            selector:'div.save-credit-card label',
        },

        checkout_saved_card_cvv_textbox:{
            selector:'input#saved-payment-security-code',
        },

        
                checkout_card_name_textbox_error_message:{
                    selector:'input.cardOwner.is-invalid~div.invalid-feedback',
                },

                checkout_card_number_textbox_error_message:{
                    selector:'input.cardNumber.is-invalid~div#cardNumberInvalidMessage',
                },

                checkout_empty_card_number_error_message:{
                    selector:'input.cardNumber.is-invalid~div#cardNumberInvalidMessage',
                },

                checkout_expiry_date_error_message:{
                    selector:'input.cardExpiration.is-invalid~div#cardExpirationInvalidMessage',
                },

                checkout_cvv_textbox_error_message:{
                    selector:'input.securityCode.is-invalid~div#securityCodeInvalidMessage',
                },

                checkout_saved_cvv_textbox_error_message:{
                    selector:'input.cvvNumField.is-invalid~div#savedPaymentSecurityCodeInvalidMessage',
                },
                

                    checkout_billing_first_name_field_error_message:{
                        selector:'input#billingFirstName+span.invalid+div.invalid-feedback',
                    },
                    checkout_billing_last_name_field_error_message:{
                        selector:'input#billingLastName+span.invalid+div.invalid-feedback',
                    },

                    checkout_billing_address_line_one_field_error_message:{
                        selector:'input#billingAddressOne+span.invalid+div.invalid-feedback',
                    },

                    checkout_billing_city_field_error_message:{
                        selector:'input#billingAddressCity+span.invalid+div.invalid-feedback',
                    },

                    checkout_billing_zipcode_field_error_message:{
                        selector:'input#billingZipCode+span.invalid+div.invalid-feedback',
                    },



       checkout_save_credit_card_checkbox:{
           selector:'input#saveCreditCard+label',
       },

        checkout_credit_card_radio_button:{
            selector:'label.credit-card-tab',
        },

        checkout_card_payment_radio_button_selected:{
            selector:'a.credit-card-tab.active',
        },

        checkout_selected_paypal_radio_button:{
            selector:'a.paypal-tab.active',
        },

        checkout_paypal_radio_button:{
            selector:'input#payPalRadioButton+label',
        },

        checkout_credit_card_radio_button:{
            selector:'input#creditCardRadioButton~label.credit-card-tab',
        },
        

        checkout_continue_to_paypal_button:{
            // selector:"div.paypal-button-logo-color-white[role='button']",
            // selector:"div.powered-by-paypal",
            // selector:"div[class='powered-by-paypal']",
            // selector:'div.paypal-custom-btn button',
            selector:"div[class='paypal-button-label-container']",
        },

        checkout_payment_continue_to_payment_button_frame:{
            selector:"iframe[class='zoid-component-frame zoid-visible']",
        },


        checkout_billing_payment_save_and_continue_button:{
            selector:'button.submit-payment',
        },

        //e2e changes updated
        checkout_add_giftcard:{
            selector:'div.gift-card-click > span.card-icons',
        },

        checkout_giftcard_label:{
            selector:'label.gift-card-heading',
        },

        checkout_giftcard_label_collapsed:{
            selector:"div[class='gift-card-click'] label.gift-card-heading",
        },

        checkout_giftcard_label_expanded:{
            selector:'div.gift-card-click.active label.gift-card-heading',
        },

        checkout_gift_card_textbox:{
            selector:'input#gcCardNumber',
        },

        checkout_gift_card_access_number_textbox:{
            selector:'input#accessNumber',
        },

        checkout_gift_card_apply_button:{
            selector:'button.giftcard-apply-btn',
        },

        checkout_applied_gift_card:{
            selector:'div.applied-gift-card',
        },

        checkout_gift_card_remove_icon:{
            selector:'button.remove-gift-card',
        },
        
        // ************** SHIPPING SECTION
        checkout_payment_page_shipping_address:{
            selector:'div.summary-details.shipping',
        },
        

       





    }

}