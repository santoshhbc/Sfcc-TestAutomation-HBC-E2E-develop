module.exports = {
    elements : {
        /******************************** HBC Login*****************************************************************************************/ 
        
   
        login_page_title:{
            selector : 'h1.signIn-text',
        },

        create_page_title: {
            selector : 'h1.create-account-text',
        },

        create_account_form: {
            selector : 'div.register-page',
        },

        signin_page_createAccount_link:{
            selector : 'div.content-asset a.create-account',
        },

        login_form:{
            selector : 'form.login',
        },

        login_page_track_order_form:{
            selector : 'form.trackorder',
        },

        hbc_email_textbox:{
            selector : 'input#login-form-email',
        },
        hbc_password_textbox:{
            selector : 'input#login-form-password',
        },
        // hbc_password_textbox:'input#login-form-password',

        hbc_login_link:{
            selector : 'form.login button',
        },

        hbc_create_account_first_name_textbox:{
            selector : 'input#registration-form-fname',
            // selector: '//input[@id="registration-form-fname"]',
            // locateStrategy:'xPath'
        },

        hbc_create_account_last_name_textbox:{
            selector : 'input#registration-form-lname',
        },


        hbc_create_account_phone_number_textbox:{
            selector : 'input#registration-form-phone',
        },

        hbc_create_account_email_id_textbox:{
            selector : 'input#registration-form-email',
        },
        
        hbc_create_account_confirm_email_textbox:{
            selector : 'input#registration-form-email-confirm',
        },

        hbc_create_account_password_textbox:{
            selector : 'input#registration-form-password',
        },
        
        hbc_create_account_confirm_password_textbox:{
            selector : 'input#registration-form-password-confirm',
        },
        
        hbc_create_account_submit:{
            selector : 'button.btn.btn-block.account-btn',
        },

        hbc_create_account_zipcode_textbox: {
            selector: 'input#registration-form-zipcode',
        },

        create_firstname_error: {
            selector : 'input#registration-form-fname+div.invalid-feedback',
        },

        create_lastname_error: {
            selector : 'input#registration-form-lname+div.invalid-feedback',
        },

        create_email_error: {
            selector : 'input#registration-form-email+div.invalid-feedback',
        },
        
        create_password_error: {
            selector : 'input#registration-form-password+span+div.invalid-feedback',
        },

        create_confirmpassword_error: {
            selector : 'input#registration-form-password-confirm+span+div.invalid-feedback',
        },

        myaccount_page_title:{
            selector : 'div.welcome-account-header span',
        },

        myaccount_image_banner:{
            selector : 'div.account-image',
        },

        myaccount_first_name:{
            selector:'div.card-body dd',
            index:0
        },
        myaccount_last_name:{
            // selector:'div.card-body dd',
            // index:1
            selector:'div.card-body dl:nth-of-type(2) dd',
            
        },
        myaccount_email_id:{
            // selector:'div.card-body dd',
            // index:2
            selector:'div.card-body dl:nth-of-type(3) dd',
        },
        myaccount_phone_number:{
            // selector:'div.card-body dd',
            // index:3
            selector:'div.card-body dl:nth-of-type(4) dd',
        },


        // **************** FORGOT PASSWORD *************
        forgot_password_page:{
            selector:'div.forgot-pwd-main',
        },

        forgot_password_page_title:{
            selector:'h1.forgot-pwd-header',
        },

        forgot_password_email_textbox:{
            selector:'input#reset-password-email',
        },

        forgot_password_submit_button:{
            selector:'button#submitEmailButton',
        },

        //&&&&&&&&&
        forgot_password_invalid_email_textbox:{
            selector:'input#reset-password-email',

            
        },
        forgot_password_error_message:{
            selector: '//div[@class="forgot-password-error invalid-email-alert"][contains(., "We are sorry, we were not able to idenfity you given the information provided.")]',
        },

        forgot_password_format_error_message:{
            selector:'div.request-password-body div#form-email-error.invalid-feedback',
        },


        Order_History_account_menu:{
            selector:'a.order-history-link',
        },

        order_History_acccount_menu_Page_Title:{
            selector:'//h2[contains(., "Order History")]',
        },

        Profile_account_menu:{
            selector:'a.profile-link',
        
        },

        profile_account_menu_page_title:{
            selector:'//h1[contains(., "Profile")]',
        },
//&&&&&&&&&&&&
forgot_password_submit_button:{
    selector:'button#submitEmailButton',
},


        // **************** FORGOT PASSWORD End *************

        myaccount_order_history_link:{
            selector:'div.account-dashboard-content div.item-content:nth-of-type(1) a',
        },

        // ************* MY ACCOUNT CONTENT
        my_account_all_links:{
            selector:'div.account-dashboard-content div.item-content a',
        },

        my_account_leftNav_all_links:{
            selector: 'div.account-dashboard div.menu-item a',
        },


        // **************** Gift Card Balance ****************
        myaccount_gift_card_balance_link_first:{
            selector:'div.hbc-giftcards a',
        },
        
        myaccount_gift_card_balance_link:{
            selector:'a.check-balance',
        },

        where_are_the_gift_codes_link:{
            selector:'a.wherearegc',
        },

        gift_card_balance_card_number_field:{
            selector:'input#gf-card-numb',
        },

        gift_card_balance_pin_field:{
            selector:'input#gf-card-pin',
        },

        gift_card_balance_check_balance_button:{
            selector:'button.check-bal-bttn',
        },

        gift_card_balance_card_number:{
            selector:'div.card-number',
        },

        gift_card_balance_amount:{
            selector:'div.card-number+div',
        },

        gift_card_balance_keep_shopping:{
            selector:'button.continue-bttn',
        },

        gift_card_balance_check_another_balance_button:{
            selector:'button.check-bal-bttn',
        },

        gift_card_balance_close_icon:{
            selector:'button.gc-close-btn',
        },

        gift_card_balance_popup:{
            selector:'div#giftcard-modal',
        },

        empty_gift_card_number_field_error_message:{
            selector:'div.error span.number-error-required',
        },

        empty_gift_card_pin_field_error_message:{
            selector:'div.error span.pin-error-required',
        },

        invalid_gift_card_details_error_message:{
            selector:'span.generic-error',
        },
        // ************************************************

        loginpage_create_account_link:{
            selector: 'div.content-asset a.create-account',
        },

        profile_username:{
            selector: 'div.profile-into.name',
        },

        reset_password_heading:{
            selector: 'div.reset-header',
        },
        
        reset_password_message:{
            selector: 'div.reset-message',
        },

        continue_shopping:{
            selector: 'a#continue-shopping',
        },

        profile_password_editLink:{
            selector: 'div.edit-password a.edit-link',
        },

        profile_editpwd_heading:{
            selector: 'div.welcome-account-header h1',
        },

        profile_editpwd_oldpwd_box:{
            selector: 'input#currentPassword',
        },

        profile_editpwd_newPWD_box:{
            selector: 'input#newPassword',
        },

        profile_editpwd_newPWD_confirm_box:{
            selector: 'input#newPasswordConfirm',
        },

        profile_editpwd_save_button:{
            selector: 'button.btn-save',
        },

        profile_editpwd_cancel_button:{
            selector: 'div.cncle-btn a.btn-block',
        },



    }

}