const data = {
      /********KEYS *******************************************************************************/
      enterKey :'\uE007',
      tabKey :'\uE004',

    /****************** Core regression properies *******************/
    /******* COMMON [SHARED CROSS PAGES]*************************************/
    // qaUrl : 'https://qa.saksoff5th.com/Entry.jsp', 
    qaUrl : 'https://development-na03-hbc.demandware.net/s/SaksOff5th/home?lang=en_US', 
    paypalUrl : 'https://www.sandbox.paypal.com/us/home', 
    homepageTitle : "Discount Designer Women's Clothing, Handbags & More | Saksoff5th.com",

    timeout_min:2000,
    timeout_median:20000,
    timeout_max:50000,
  
    pauseTime_min:1000,
    pauseTime_median:5000,
    pauseTime_max:10000,

  /****************** Core regression properies *******************/
    
    /* Account module properties*/
    // defaultEmail : "test@hbc.com",
    defaultEmail : "test@off5th.com",
    defaultPassword : "Test@1234",
    acc_profile_name : 'Mohan',
    changepassword: "Test@4321",

    
    acc_page_title : 'Welcome',



    /* New User details*/
    create_account_first_name: 'Tony',
    create_account_last_name: 'Stark',
    create_account_phonenumber:'9876543210',
    create_account_password: 'Tony@1234',
    create_account_confirm_password: 'Tony@1234',
    email_id_for_popup:'test@test.com',
    createaccount_profileName: 'Tony Stark',

    invalid_email_id:'invalidemailid@test.com',
    invalid_password:'InvalidPassword',

    // Paypal Login credentials
    paypal_email_id:'schennaiah@pfsweb.com',
    paypal_password:'India@123',  
    /* PAYMENT */
    cardNumber:'4445222299990007',
    creditCard_name:'Steve',
    creditCard_exp_date:'1122',
    checkout_CVC3digits:'123',
    checkout_CVC4digits:'1234',


    visaCardNumber:'4445222299990007',
    visaCardLastFourDigit:'0007',

    discoverCardNumber:'6011020000045098',
    discoverCardLastFourDigit:'8320',
    amexCardNumber:'371443314550438',
    amexCardLastFourDigit:'0438',
    masterCardNumber:'5454545454545454',
    masterCardLastFourDigit:'5454',
    plccCardNumber:'8076548034',
    
     // GIFT CARD
     giftCardNumber:'6018990000184878',
     giftCardAccessNumber:'5709',
     giftCardLastFourDigits:'4878',
     giftCardAmount:'25.00',
 
     giftCardNumber_1:'6018990000185677',
     giftCardAccessNumber_1:'8618',

     invalidGiftCardNumber:'1234567890123456',
     invalidGiftCardAccessNumber:'1234',
 
     // Invalid card details
     invalidCardNumber:'2222222222222222',
     creditCard_name:'Steve',
     invalid_exp_date:'0119',
     invalid_cvv_number:'1111',

     // Gift Message 
    gift_recipient_name:'Tony Stark',
    gift_message:'Testing gift message field for HBC site',

    /*3rd party */
   

    /******* address ************/
    // Shipping address-1
    acc_address_nickname1:'NickName1',
    acc_address_country:'United States',
    acc_address_firstName1:'Tony',
    acc_address_lastName1:'Stark',
    acc_AddressStreetOption1:'546 Southside Lane',
    acc_AddressStreetTwoOption1:'Alnwick Castle',
    acc_CityOption1:'New York',
    acc_ZipOption1:'10003',
    acc_StateOrProvince1:'New York',
    acc_PhoneOption1:'5148044432',
//  completeAddress_format_1:'FirstName LastName AddressLine1 AddressLine2 City StateCode ZipCode', 
    completeAddress_format_1:'Tony Stark 546 Southside Lane Alnwick Castle New York NY 10003',
    completeAddress_format_2:'Tony Stark 546 Southside Lane Alnwick Castle New York NY 10003 5148044432',
    address_format_in_address_book_page_1: '546 Southside Lane - New York - 10003 Default Tony Stark 546 Southside Lane Alnwick Castle New York, NY 10003 5148044432 Edit Delete',
    edit_address_format:'NickName1Tony Stark 546 Southside Lane Alnwick Castle New York NY 10003 5148044432',

    // Shipping address-2
    shipping_address_firstName:'Steve',
    shipping_address_lastName:'Rogers',
    shipping_address_line1:'993 Drummond Street',
    shipping_address_line2:'5th Street',
    shipping_city:'Newark',
    shipping_state:'New Jersey',
    shipping_zip_code:'07102',
    shipping_phone_number:'9732061102',
    shipping_email_id:'steve@rogers.com',
    address_format_1:'Steve Rogers 993 Drummond Street 5th Street Newark NJ 07102',
    address_format_in_address_book_page_2: '993 Drummond Street - Newark - 07102 Default Steve Rogers 993  Drummond Street 5th Street Newark, NJ 07102 9732061102 Edit Delete',

    apo_address_firstName:'John',
    apo_address_lastName:'Doe',
    apo_address_line1:'UNIT 2050',
    apo_address_line2:'BOX 4190',
    apo_city:'APO',
    apo_state:'AFP',
    apo_zip_code:'96278',
    apo_phone_number:'4806444075',

    save_address_nick_name:'MyNickName',
    save_address_country:'United States',
    save_address_first_name:'John',
    save_address_last_name:'Wick',
    save_address_line_one:'1336 Cooks Mine Road',
    save_address_line_two:'2nd Street',
    save_address_city:'Twin Lakes',
    save_address_state:'New Mexico',
    save_address_zip_code:'86515',
    save_address_phone_number:'5057350351',
    complete_save_address:'John Wick 1336 Cooks Mine Road 2nd Street Twin Lakes NM 86515',
    full_address_format_2: 'MyNickNameJohn Wick 1336 Cooks Mine Road 2nd Street Twin Lakes NM 86515 5057350351',
  


    // Billing Address
    acc_billing_CountryOption1:'United State',
    acc_billing_address_firstName1:'Billing FN',
    acc_billing_address_lastName1:'Billing LN',
    acc_billing_AddressLineOne1:'4117 Merton Street',
    acc_billing_AddressLineTwo1:'5th main',
    acc_billing_CityOption1:'New York',
    acc_billing_ZipOption1:'10003',
    acc_billing_StateOption1:'New York',
    acc_billing_PhoneOption1:'4167004188',
    acc_billing_full_address:'Billing FN Billing LN 4117 Merton Street 5th main New York NY 10003',

    /******* International address ************/
    international_address_nickname:'international address',
    international_address_country:'United Kingdom',
    international_address_first_name:'Bruce',
    international_address_last_name:'Wayne',
    international_address_line_one:'63  Guild Street',
    international_address_line_two:'address line 2',
    international_address_city:'LONDON',
    international_address_state:'LONDON',
    international_address_zipcode:'E9 5JQ',
    international_address_phone_number:'07028853879',

    /******* TEST ACCOUNTS ***********************************************************************/



    /******* TEST ITEMS ************/
    /*product1*/
    search_keyword:'shirt',
    search_keyword_2:'Dress',
    product_with_color_variants:'87207198',
    product_set_searchkey :'In store set',
    // normal_product_id:'793775370033M',
    normal_product_id:'25688632M',
    single_color_variant_product_id:'25592581M',
    selected_variant_product_id:'701644031206M',
    promotions_available_product:'Bracelets',
// product-1
    product_ID_item1:'0400091317998', //product-1; product code-1
    product_name_item1:'Solid Illusion Neckline Dress',
// product-2    
    product_ID_item2:'0400089646794',
    product_name_item2:'Roll-Sleeve T-Shirt Dress',
    brandName: 'Public School',
    product_ID_withSPace:'040009 1317 998',
    product_id_withPromo:'0400093618725',
    product_promoMSG: 'Buy1get10%Off',

    brandName: 'Coach',
    brand_category_product_id:'0400011981141',
    product_ID_withSPace:'040001 1981 1 41',
    product_id_withPromo:'90957274',
    product_promoMSG: 'HBC offer',

    product_ID_with_less_price:'91317997',
    product_name_with_less_price:'Solid Illusion Neckline Dress',

    gift_card_product_id:'0600089219770',
    gift_card_product_name:'Farrell Solid Sport Shirt',

    waitlist_product_id:'11968316',
    waitlist_email_id:'test@test.com',
    waitlist_phone_number:'5057350351',

    // BOPIES PRODUCT DETAILS
    bopis_product_category:'0600089219770',
    bopis_postcode:'10001',
    bopis_radius:'300 km',

  
    // ***************** PROMO PRODUCTS
    // Promo product-1
    promo_product_ID_item1:'0400091317998',
    promo_product_name_item1:'Solid Illusion Neckline Dress',
    // Promo product-2
    promo_product_ID_item2:'0400089646794',
    promo_product_name_item2:'Roll-Sleeve T-Shirt Dress',
    // ***************** PROMO CODES
    orderLevelCode:'AutoOrder', //Promotion ID in BM:- Auto_OrderLevelPromo [10% off for MEN category products]
    productLevel:'AutoProd',  //Promotion ID in BM:- Auto_ProductLevelPromo [10% off for MEN category products]
    shippingLevel:'AutoShipping',// Promotion ID in BM:- Auto_ShippingLevelPromo [10% off for MEN category products]
    invalidPromoCode:'InvalidCode',

    designer_filter_search_keyword:'Bench',

    /***************Payment header************** */
    payment_header: 'Payments',

  
    //*********************% OFF promotion*********************** */
    percentageOff_productID: '0400010332532',
    percentageOff_product_name_item1:'Solid Illusion Neckline Dress',


    /******************BOGO Promotion******************** */

    bogo_promo_product: '88091324',
    bogo_promo_discount: '$34.50',

    // shippingReturnDetails_pagetitle : "Saks.com - Shipping, Returns & Taxes",
    /*************PRODUCT ARRAY ***************************************/
    
    /**********BAG**********************************/
   


    /**********CHECKOUT**********************************/
    

    

  /************************** SEARCH/SORT/PAGINATION ****************/

  

  /******* TEST ITEMS ***********************************************************************/
  



//     /**********************OLD GLOBAL DATA ITEMSSSSSSSSSSSSSS**********************/
     //*************** Page URL substrings ************** */
 aboutsaksfirsturl : 'about-saks-firs',
 internationalurl:'international',
 OrderStatusAndTracking:'CSRF-Fail',
 returnsexchangesurl:'returns-exchanges',
 termsofuseurl: 'terms',
 moreinsideraccessurl:'more%21-insider-access',
 careersurl:'careers',

facebookurl :'facebook',
Pinteresturl:'pinterest',
Instagramurl:'instagram',
Twitterurl:'twitter',
 
};

module.exports = Object.freeze({data})
