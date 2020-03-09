
module.exports = {
    elements : {
        
        
        delete_link_in_my_account_payment_page: {
            selector : 'a.remove-payment',
        },
        //e2e changes updated
        my_account_payment_link: {
            selector : 'a.payments-link',
        },

        confirm_link_delete_payment_popup:{
            selector:'button.delete-confirmation-btn',
        },

        empty_payment_methods:{
            selector:'div.no-address-message',
        },

        set_as_default_card_link:{
            selector:'span.card-make-default-link a',
        },

        payments_link_left_nav:{
            selector:'a.payments-link',
        },

        // ****************************************************************
        // ****************** MY ACCOUNT PAYMENTS *************************
        // ****************************************************************


        myaccount_payment_page_add_new_payment_link:{
            selector:'div.payment-box a',
        },

        myaccount_payment_page_name_field:{
            selector:'input#cardOwner',
        },

        myaccount_payment_card_number_field:{
            selector:'input#cardNumber',
        },

        myaccount_payment_page_expiry_date_field:{
            selector:'input#cardExpiration',
        },

        myaccount_payment_page_save_button:{
            selector:'button.btn-save',
        },

        myaccount_payment_page_cancel_button:{
            selector:'a.btn-secondary',
        },

        myaccount_payment_page_make_default_payment_checkbox:{
            selector:'input#makeDefaultPayment+label',
        },

         //************************Profile Payment Page**************************** */
         payment_page_header:{
            selector: 'div.welcome-account-header h1',
        },

        payment_add_payment_form:{
            selector: 'div.account-details div.add-payment-form',
        },

        payment_page_cardowner_error:{
            selector: 'input#cardOwner+div.invalid-feedback',
        },

        payment_page_cardnumber_error:{
            selector: 'input#cardNumber+div.invalid-feedback',
        },

        payment_page_cardexpiry_error:{
            selector: 'input#cardExpiration+div.invalid-feedback',
        },

        payment_page_cardexpiry_invalid:{
            selector: 'input#cardExpiration+span.invalid+div.invalid-feedback',
        },

        payment_card_type:{
            selector: 'span span.cart-type',
        },

        payment_card_last_digit:{
            selector: 'span.cart-type+span+span',
        },

        payment_make_default_link:{
            selector: 'div.card-body span.card-make-default-link',
        },

        payment_delete_cancel_button:{
            selector: 'div#deletePaymentModal button.btn-outline-primary.btn-block',
        },

        payment_delete_yes_button:{
            selector: 'div#deletePaymentModal button.delete-confirmation-btn.btn-block',
        },

    }

}