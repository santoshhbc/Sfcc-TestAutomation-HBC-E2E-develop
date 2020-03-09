module.exports = {
    elements : {
        /******************************** HBC Login*****************************************************************************************/ 
        
   
        login_page_title:{
            selector : 'h1.signIn-text',
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

        create_account_link:{
            selector : 'a#register-tab',
            // selector:'//a[@id="register-tab"]',
            // locateStrategy: 'xpath'
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
        
        hbc_create_account_button:{
            selector : 'div#register button.btn-block',
        },

        //&&&&&&&&&&&&&&&&&&
        hbc_login_email_textbox:{
            selector:'input#login-form-email',

        },

        hbc_login_password_textbox:{
            selector:'input#login-form-password',
        },
        hbc_login_button:{
           selector:'form.login button',
            //selector:'button.btn btn-block btn-primary account-btn',
            //selector:'button[text()="Sign In"]',
        
        },

        hbc_login_error_message:{
            selector:'form.login div.alert-danger',
        },

        hbc_email_textfield_error_message:{
            selector:'form.login div#form-email-error',
        },

        hbc_passsword_textfield_error_message:{
            selector:'form.login div.alert.alert-danger',
        },


//&&&&&&&&&&&&&&&&&&&&&       
        

    }

}