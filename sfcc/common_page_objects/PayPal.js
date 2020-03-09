module.exports = {
    elements : {
        
        
        paypal_firstlogin_button: {
            selector : 'div.baslLoginButtonContainer a',
        },

        paypal_email_textbox:{
           // selector:'input#email',
           selector: 'div#login_emaildiv input#email',
        },

        paypal_next_button:{
            selector:'button#btnNext',
        },

        paypal_password_textbox:{
            selector:'div#login_passworddiv input#password',
            // selector:'input#password',
        },

        paypal_login_button:{
            // selector:'div.actions button#btnLogin',
            selector: 'section#login button#btnLogin',
        },
        
        paypal_continue_button:{
            // selector:'div#button input#confirmButtonTop',
            // selector:'#payment-submit-btn',  div.CheckoutButton_showPolicies_2crZB > div
            selector:'div.CheckoutButton_showPolicies_2crZB > div',
            // selector:'div.buttons.reviewButton input#confirmButtonTop',
            // selector:'section#memberReview input#confirmButtonTop',
        },

        paypal_continue_button_loaded_state:{
            // selector:"div#preloaderSpinner[style*='none']",
            selector:"div.paypal-checkout-continue > a",
        },

        paypal_not_youz_link:{
            selector:'div.xo-not-you-wrapper a',
        },
    }

}