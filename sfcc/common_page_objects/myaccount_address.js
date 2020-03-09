
module.exports = {
    elements : {
        
        
        delete__link_in_my_account_address_book_page: {
            selector : 'a.remove-address',
        },
        // e2e changes updated
        my_account_address_link: {
            selector : 'a.address-book-link',
        },

        confirm_link_delete_address_popup:{
            selector:'button.delete-confirmation-btn',
        },

        empty_address_book:{
            selector:'div.no-address-message',
        },

        address_book_saved_address:{
            selector:'div.card-body',
        },
        address_book_saved_address_lines:{
            selector:'div.card-body  div.address-info',
        },
        
        

        address_book_default_address_heading:{
            selector:'div.default-address-heading',
        },

        address_book_add_address_link:{
            selector:'div.address-box a',
        },

        address_book_address_nick_name_field:{
            selector:'input#addressId',
        },

        address_book_country_selectbox:{
            selector:'select#country',
        },

        address_book_first_name_field:{
            selector:'input#firstName',
        },

        address_book_last_name_field:{
            selector:'input#lastName',
        },

        address_book_address_line_one:{
            selector:'input#address1',
        },

        address_book_address_line_two:{
            selector:'input#address2',
        },

        address_book_city_field:{
            selector:'input#city',
        },

        address_book_state_selectbox:{
            selector:'select#state',
        },

        address_book_postcode_field:{
            selector:'input#zipCode',
        },

        address_book_phone_number_field:{
            selector:'input#phone',
        },

        address_book_save_button:{
            selector:'button.btn-save',
        },

        address_book_cancel_button:{
            selector:'a.btn-secondary',
        },

        address_book_state_textbox:{
            selector:"input[id^='state']",
        },

        addressbook_header:{
            selector: 'div.welcome-account-header h1',
        },

        add_address_heading:{
            selector:'div.welcome-account-header h3',
        },

        address_makedefault_link:{
            selector: 'div.card-make-default-link',
        },

        address_edit_link:{
            selector: 'a.edit-address-link',
        }

    }

}