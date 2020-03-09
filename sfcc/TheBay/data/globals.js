const data = {
    /********KEYS *******************************************************************************/
    enterKey :'\uE007',
    tabKey :'\uE004',
    
     
    /******* COMMON [SHARED CROSS PAGES]***********************************************************************/
    //qaUrl : 'https://qa.saksdirect.com/Entry.jsp', 
    // qaUrl : 'https://www.qa.saks.com/Entry.jsp',  
    //qaUrl : 'https://staging-na02-hbc.demandware.net/s/TheBay/en/index',  
    qaUrl : 'https://storefront:hbc2020@stage.thebay.com/',
    qaChanelUrl: 'https://development-na02-hbc.demandware.net/s/TheBay/chanel-3/?lang=en_CA',
  
    
    timeout_min:2000,
    timeout_median:20000,
    timeout_max:50000,
  
    pauseTime_min:1000,
    pauseTime_median:5000,
    pauseTime_max:10000,

    /****************** Core regression properies *******************/
    
    /* Account module properties*/
    // defaultEmail : "test@thebay.com",
    defaultEmail : "newautotest124@example.com",
    // defaultEmail : "newaccount@hbc.com",
    defaultPassword : "Test@1234",
    acc_profile_name : 'test',
    changepassword: "Test@4321",

    
    acc_page_title : 'Welcome',

    //&&&&&&&&&&&&&&&&& new user details with unsaved shipping info &&&&&&&&&&&&&&&&&&//

first_name: 'mark',
last_name:'j',
new_email_id:'hbcautomation@test.com',
new_password:'Abcdef@1234',

//&&&&&***
new_email_id:'test123@test.com',
new_password:'Test@1234',


order_number:'2920000906',
Billing_postcode:'H3B 4W8',

//&&&&&&&***


//&&&&&&&&&&&&&&&&&&

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

    invalid_email_id_textbox:'wrongemailid@test.com',
    invalid_password_textbox:'Wrong@password12',

    invalid_format_email_id:'test@@test.com',
    invalid_password_constraint:'abcdef',

    // Paypal Login credentials
    paypal_email_id:'schennaiah@pfsweb.com',
    paypal_password:'India@123',

    /* PAYMENT */
    cardNumber:'4445222299990007',
    creditCard_name:'Steve',
    creditCard_exp_date:'1122',
    checkout_CVC3digits:'123',
    checkout_CVC4digits:'1234',


    visaCardNumber:'4520050003414420',
    visaCardLastFourDigit:'4420',


    discoverCardNumber:'6011020000045098',
    discoverCardLastFourDigit:'5098',
    //e2e changes updated
    amexCardNumber:'371448664518794',
    amexCardLastFourDigit:'8794',
    masterCardNumber:'5191230006928320',
    masterCardLastFourDigit:'8320',
    plccCardNumber:'6002910000573530',
    HBCCard:'5191230005918066',
    LoyaltyCardNumber:'508418179',
    
    // GIFT CARD
    //e2e changes updated
    giftCardNumber:'47310012894',
    giftCardAccessNumber:'4181',
    giftCardAmount:'25.00',
    giftCardNumber_2:'47310012894',
    giftCardAccessNumber_2:'4181',
    giftCardLastFourDigits:'3587',
    giftCardAmount:'25.00',
    // SFDEV_3751
    giftCardNumber_1_SFDEV_3751:'47310012944',
    giftCardAccessNumber_1_SFDEV_3751:'4262',
    giftCardAmount:'25.00',
    giftCardNumber_2_SFDEV_3751:'47310012951',
    giftCardAccessNumber_2_SFDEV_3751:'9633',
    giftCardAmount:'25.00',
    // SFDEV_2651
    giftCardNumber_1_SFDEV_2651:'47310012977',
    giftCardAccessNumber_1_SFDEV_2651:'0106',
    giftCardAmount:'25.00',
    // SFDEV_2769
    giftCardNumber_1_SFDEV_2769:'rework',
    giftCardAccessNumber_1_SFDEV_2769:'0106',
    giftCardAmount:'25.00',
    // SFDEV_2653-1
    giftCardNumber_1_SFDEV_2653:'rework',
    giftCardAccessNumber_1_SFDEV_2653:'0106',
    giftCardAmount:'25.00',
    // SFDEV_2653-2
    giftCardNumber_2_SFDEV_2653:'rework',
    giftCardAccessNumber_2_SFDEV_2653:'0106',
    giftCardAmount:'25.00',
    // SFDEV_2654
    giftCardNumber_1_SFDEV_2654:'rework',
    giftCardAccessNumber_1_SFDEV_2654:'0106',
    giftCardAmount:'25.00',
    // SFDEV_2598
    giftCardNumber_1_SFDEV_2598:'47310012985',
    giftCardAccessNumber_1_SFDEV_2598:'6846',
    giftCardAmount:'25.00',
    giftCardNumber_2_SFDEV_2598:'47310012993',
    giftCardAccessNumber_2_SFDEV_2598:'2144',
    giftCardAmount:'25.00',
    //e2e changes updated
    giftCardNumber_1:'47310012928',
    giftCardAccessNumber_1:'7121',
    giftCardAmount_1:'25.00',
    //e2e changes updated - SFDEV_2566
    giftCardNumber_1_SFDEV_2566:'rework',
    giftCardAccessNumber_1_SFDEV_2566:'6846',
    giftCardAmount:'25.00',
    giftCardNumber_2_SFDEV_2566:'rework',
    giftCardAccessNumber_2_SFDEV_2566:'2144',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_2640
    giftCardNumber_1_SFDEV_2640:'rework',
    giftCardAccessNumber_1_SFDEV_2640:'7687',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_2595
    giftCardNumber_1_SFDEV_2595:'rework',
    giftCardAccessNumber_1_SFDEV_2595:'7687',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_2593
    giftCardNumber_1_SFDEV_2593:'rework',
    giftCardAccessNumber_1_SFDEV_2593:'7687',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_2586
    giftCardNumber_1_SFDEV_2586:'rework',
    giftCardAccessNumber_1_SFDEV_2586:'7687',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_2587
    giftCardNumber_1_SFDEV_2587:'rework',
    giftCardAccessNumber_1_SFDEV_2587:'7687',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_2587
    giftCardNumber_2_SFDEV_2587:'rework',
    giftCardAccessNumber_2_SFDEV_2587:'7687',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_3756
    giftCardNumber_1_SFDEV_3756:'rework',
    giftCardAccessNumber_1_SFDEV_3756:'7687',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_2650
    giftCardNumber_1_SFDEV_2650:'rework',
    giftCardAccessNumber_1_SFDEV_2650:'7687',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_2636
    giftCardNumber_1_SFDEV_2636:'rework',
    giftCardAccessNumber_1_SFDEV_2636:'7687',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_2624
     giftCardNumber_1_SFDEV_2624:'rework',
     giftCardAccessNumber_1_SFDEV_2624:'7687',
     giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_2560
    giftCardNumber_1_SFDEV_2560:'rework',
    giftCardAccessNumber_1_SFDEV_2560:'6846',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_2590
    giftCardNumber_1_SFDEV_2590:'rework',
    giftCardAccessNumber_1_SFDEV_2590:'7687',
    giftCardAmount:'25.00',
    //e2e changes updated - SFDEV_4589
    giftCardNumber_1_SFDEV_4589:'rework',
    giftCardAccessNumber_1_SFDEV_4589:'7687',
    giftCardAmount:'25.00',
   //e2e changes updated - SFDEV_4589
   giftCardNumber_2_SFDEV_4589:'rework',
   giftCardAccessNumber_2_SFDEV_4589:'6846',
   giftCardAmount:'25.00',


    invalidGiftCardNumber:'12345678901',
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

     // e2e shipping address   
    // Shipping address-1
    acc_address_nickname1:'NickName1',
    acc_address_country:'Canada',
    acc_address_firstName1:'shelton',
    acc_address_lastName1:'john',
    acc_AddressStreetOption1:'99 ANGUS CAMPBELL RD',
    acc_AddressStreetTwoOption1:'Alnwick Castle',
    acc_CityOption1:'ABBOTSFORD',
    acc_ZipOption1:'V3G 1S3',
    acc_StateOrProvince1:'British Columbia',
    acc_PhoneOption1:'5148044432',

     // e2e shipping address   
    // Shipping address-French
    acc_address_nickname1_S2634:'SFDEV-2634',
    acc_address_country_S2634:'Canada',
    acc_address_firstName1_S2634:'Vladé',
    acc_address_lastName1_S2634:'Zarué',
    acc_AddressStreetOption1_S2634:'3855 Shore Streeté',
    acc_AddressStreetTwoOption1_S2634:'Alnwick Castle',
    acc_CityOption1_S2634:'Calgary',
    acc_ZipOption1_S2634:'R3C 0C4',
    acc_StateOrProvince1_S2634:'Manitoba',
    acc_PhoneOption1_S2634:'5148044432',

    // e2e shipping address   
    // Shipping address-French
    acc_address_nickname1_S2648:'SFDEV-2648',
    acc_address_country_S2648:'Canada',
    acc_address_firstName1_S2648:'Vladé',
    acc_address_lastName1_S2648:'Zarué',
    acc_AddressStreetOption1_S2648:'3855 Shore Streeté',
    acc_AddressStreetTwoOption1_S2648:'Alnwick Castle',
    acc_CityOption1_S2648:'Montréal',
    acc_ZipOption1_S2648:'H4X 1T8',
    acc_StateOrProvince1_S2648:'Quebec',
    acc_PhoneOption1_S2648:'5148044432',




     // e2e shipping address
    // Shipping address-SFDEV-2638
    acc_address_nickname1_S2638:'SFDEV-2638',
    acc_address_country_S2638:'Canada',
    acc_address_firstName1_S2638:'Tony',
    acc_address_lastName1_S2638:'Stark',
    acc_AddressStreetOption1_S2638:'159 E Hastings',
    acc_AddressStreetTwoOption1_S2638:'Alnwick Castle',
    acc_CityOption1_S2638:'Vancouver',
    acc_ZipOption1_S2638:'V5K 0A1',
    acc_StateOrProvince1_S2638:'British Columbia',
    acc_PhoneOption1_S2638:'5148044432',

      // e2e shipping address
    // Shipping address-SFDEV-2592
    acc_address_nickname1_S2592:'SFDEV-2592',
    acc_address_country_S2592:'Canada',
    acc_address_firstName1_S2592:'Tony',
    acc_address_lastName1_S2592:'Stark',
    acc_AddressStreetOption1_S2592:'1202 14TH ST E',
    acc_AddressStreetTwoOption1_S2592:'Alnwick Castle',
    acc_CityOption1_S2592:'SASKATOON',
    acc_ZipOption1_S2592:'S7H 0A4',
    acc_StateOrProvince1_S2592:'Saskatchewan',
    acc_PhoneOption1_S2592:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-3307
    acc_address_nickname1_S3307:'SFDEV-3307',
    acc_address_country_S3307:'Canada',
    acc_address_firstName1_S3307:'Tony',
    acc_address_lastName1_S3307:'Stark',
    acc_AddressStreetOption1_S3307:'1055 BRADNER RD',
    acc_AddressStreetTwoOption1_S3307:'Alnwick Castle',
    acc_CityOption1_S3307:'ABBOTSFORD',
    acc_ZipOption1_S3307:'V4X 1H8',
    acc_StateOrProvince1_S3307:'British Columbia',
    acc_PhoneOption1_S3307:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2661
    acc_address_nickname1_S2661:'SFDEV-2661',
    acc_address_country_S2661:'Canada',
    acc_address_firstName1_S2661:'Tony',
    acc_address_lastName1_S2661:'Stark',
    acc_AddressStreetOption1_S2661:'1228 Sherbrooke St. West',
    acc_AddressStreetTwoOption1_S2661:'Alnwick Castle',
    acc_CityOption1_S2661:'Montréal',
    acc_ZipOption1_S2661:'H3G 1H6',
    acc_StateOrProvince1_S2661:'Quebec',
    acc_PhoneOption1_S2661:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2583
    acc_address_nickname1_S2583:'SFDEV-2583',
    acc_address_country_S2583:'Canada',
    acc_address_firstName1_S2583:'Tony',
    acc_address_lastName1_S2583:'Stark',
    acc_AddressStreetOption1_S2583:'4903 RUNDLEWOOD DR NE',
    acc_AddressStreetTwoOption1_S2583:'Alnwick Castle',
    acc_CityOption1_S2583:'CALGARY',
    acc_ZipOption1_S2583:'T1Y 1B2',
    acc_StateOrProvince1_S2583:'Alberta',
    acc_PhoneOption1_S2583:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-3817
    acc_address_nickname1_S3817:'SFDEV-3817',
    acc_address_country_S3817:'Canada',
    acc_address_firstName1_S3817:'Tony',
    acc_address_lastName1_S3817:'Stark',
    acc_AddressStreetOption1_S3817:'Street',
    acc_AddressStreetTwoOption1_S3817:'Alnwick Castle',
    acc_CityOption1_S3817:'Montréal',
    acc_ZipOption1_S3817:'G0C 1E0',
    acc_StateOrProvince1_S3817:'Quebec',
    acc_PhoneOption1_S3817:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-3756
    acc_address_nickname1_S3756:'SFDEV-3756',
    acc_address_country_S3756:'Canada',
    acc_address_firstName1_S3756:'Tony',
    acc_address_lastName1_S3756:'Stark',
    acc_AddressStreetOption1_S3756:'222 ANGUS CAMPBELL RD',
    acc_AddressStreetTwoOption1_S3756:'Alnwick Castle',
    acc_CityOption1_S3756:'ABBOTSFORD',
    acc_ZipOption1_S3756:'V3G 1S3',
    acc_StateOrProvince1_S3756:'British Columbia',
    acc_PhoneOption1_S3756:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-3227
    acc_address_nickname1_S3227:'SFDEV-3227',
    acc_address_country_S3227:'Canada',
    acc_address_firstName1_S3227:'Tony',
    acc_address_lastName1_S3227:'Stark',
    acc_AddressStreetOption1_S3227:'1211 Kensington Rd NW Suite 201',
    acc_AddressStreetTwoOption1_S3227:'Alnwick Castle',
    acc_CityOption1_S3227:'Calgary',
    acc_ZipOption1_S3227:'T2N 3P6',
    acc_StateOrProvince1_S3227:'Alberta',
    acc_PhoneOption1_S3227:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-3308
    acc_address_nickname1_S3308:'SFDEV-3308',
    acc_address_country_S3308:'Canada',
    acc_address_firstName1_S3308:'Tony',
    acc_address_lastName1_S3308:'Stark',
    acc_AddressStreetOption1_S3308:'3033 Baldwin Rd',
    acc_AddressStreetTwoOption1_S3308:'Alnwick Castle',
    acc_CityOption1_S3308:'Abborsford',
    acc_ZipOption1_S3308:'V2S 7H9',
    acc_StateOrProvince1_S3308:'British Columbia',
    acc_PhoneOption1_S3308:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-3310
    acc_address_nickname1_S2638:'SFDEV-3310',
    acc_address_country_S3310:'Canada',
    acc_address_firstName1_S3310:'Tony',
    acc_address_lastName1_S3310:'Stark',
    acc_AddressStreetOption1_S3310:'4618 Kenmount Road St',
    acc_AddressStreetTwoOption1_S3310:'Alnwick Castle',
    acc_CityOption1_S3310:'John',
    acc_ZipOption1_S3310:'A1B 3P2',
    acc_StateOrProvince1_S3310:'Newfoundland and Labrador',
    acc_PhoneOption1_S3310:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-3813
    acc_address_nickname1_S3813:'SFDEV-3813',
    acc_address_country_S3813:'Canada',
    acc_address_firstName1_S3813:'Tony',
    acc_address_lastName1_S3813:'Stark',
    acc_AddressStreetOption1_S3813:'6-11250, boul Saint-Jean-Baptiste',
    acc_AddressStreetTwoOption1_S3813:'Alnwick Castle',
    acc_CityOption1_S3813:'Montréal',
    acc_ZipOption1_S3813:'H1B 4B4',
    acc_StateOrProvince1_S3813:'Quebec',
    acc_PhoneOption1_S3813:'5148044432',

     // e2e shipping address
    // Shipping address-SFDEV-2642
    acc_address_nickname1_S2642:'SFDEV-2642',
    acc_address_country_S2642:'Canada',
    acc_address_firstName1_S2642:'Tony',
    acc_address_lastName1_S2642:'Stark',
    acc_AddressStreetOption1_S2642:'698 LAWRENCE AVE W',
    acc_AddressStreetTwoOption1_S2642:'Alnwick Castle',
    acc_CityOption1_S2642:'NORTH YORK',
    acc_ZipOption1_S2642:'M6A 3A5',
    acc_StateOrProvince1_S2642:'Ontario',
    acc_PhoneOption1_S2642:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-4589
    acc_address_nickname1_S4589:'SFDEV-4589',
    acc_address_country_S4589:'Canada',
    acc_address_firstName1_S4589:'Tony',
    acc_address_lastName1_S4589:'Stark',
    acc_AddressStreetOption1_S4589:'698 LAWRENCE AVE W',
    acc_AddressStreetTwoOption1_S4589:'Alnwick Castle',
    acc_CityOption1_S4589:'NORTH YORK',
    acc_ZipOption1_S4589:'M6A 2T9',
    acc_StateOrProvince1_S4589:'Ontario',
    acc_PhoneOption1_S4589:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2559
    acc_address_nickname1_S2559:'SFDEV-2559',
    acc_address_country_S2559:'Canada',
    acc_address_firstName1_S2559:'Tony',
    acc_address_lastName1_S2559:'Stark',
    acc_AddressStreetOption1_S2559:'698 LAWRENCE AVE W',
    acc_AddressStreetTwoOption1_S2559:'Alnwick Castle',
    acc_CityOption1_S2559:'NORTH YORK',
    acc_ZipOption1_S2559:'M6A 2T9',
    acc_StateOrProvince1_S2559:'Ontario',
    acc_PhoneOption1_S2559:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2594
    acc_address_nickname1_S2594:'SFDEV-2594',
    acc_address_country_S2594:'Canada',
    acc_address_firstName1_S2594:'Tony',
    acc_address_lastName1_S2594:'Stark',
    acc_AddressStreetOption1_S2594:'3401 Dufferin St Highway no 401',
    acc_AddressStreetTwoOption1_S2594:'Alnwick Castle',
    acc_CityOption1_S2594:'NORTH YORK',
    acc_ZipOption1_S2594:'M6A 2T9',
    acc_StateOrProvince1_S2594:'Ontario',
    acc_PhoneOption1_S2594:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2625
    acc_address_nickname1_S2625:'SFDEV-2625',
    acc_address_country_S2625:'Canada',
    acc_address_firstName1_S2625:'new',
    acc_address_lastName1_S2625:'user',
    acc_AddressStreetOption1_S2625:'5120 SALTER ST',
    acc_AddressStreetTwoOption1_S2625:'Alnwick Castle',
    acc_CityOption1_S2625:'HALIFAX',
    acc_ZipOption1_S2625:'B3J 0A1',
    acc_StateOrProvince1_S2625:'Nova Scotia',
    acc_PhoneOption1_S2625:'5148044432',

    
    // e2e shipping address
    // Shipping address-SFDEV-2623
    acc_address_nickname1_S2623:'SFDEV-2623',
    acc_address_country_S2623:'Canada',
    acc_address_firstName1_S2623:'new',
    acc_address_lastName1_S2623:'grey',
    acc_AddressStreetOption1_S2623:'698 LAWRENCE AVE W',
    acc_AddressStreetTwoOption1_S2623:'Alnwick Castle',
    acc_CityOption1_S2623:'NORTH YORK',
    acc_ZipOption1_S2623:'M6A 3A5',
    acc_StateOrProvince1_S2623:'Ontario',
    acc_PhoneOption1_S2623:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2620
    acc_address_nickname1_S2620:'SFDEV-2620',
    acc_address_country_S2620:'Canada',
    acc_address_firstName1_S2620:'Tony',
    acc_address_lastName1_S2620:'sheloton',
    acc_AddressStreetOption1_S2620:'Street ',
    acc_AddressStreetTwoOption1_S2620:'Alnwick Castle',
    acc_CityOption1_S2620:'Vancouver',
    acc_ZipOption1_S2620:'V5K 1P3',
    acc_StateOrProvince1_S2620:'British Columbia',
    acc_PhoneOption1_S2620:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2561
    acc_address_nickname1_S2561:'SFDEV-2561',
    acc_address_country_S2561:'Canada',
    acc_address_firstName1_S2561:'Tony',
    acc_address_lastName1_S2561:'sheloton',
    acc_AddressStreetOption1_S2561:'Street ',
    acc_AddressStreetTwoOption1_S2561:'Alnwick Castle',
    acc_CityOption1_S2561:'Vancouver',
    acc_ZipOption1_S2561:'V6C 1Z6',
    acc_StateOrProvince1_S2561:'British Columbia',
    acc_PhoneOption1_S2561:'5148044432',


    // e2e shipping address
    // Shipping address-SFDEV-2619
    acc_address_nickname1_S2619:'SFDEV-2619',
    acc_address_country_S2619:'Canada',
    acc_address_firstName1_S2619:'Tony',
    acc_address_lastName1_S2619:'sheloton',
    acc_AddressStreetOption1_S2619:'street',
    acc_AddressStreetTwoOption1_S2619:'Alnwick Castle',
    acc_CityOption1_S2619:'Toronto',
    acc_ZipOption1_S2619:'M6A 3A5',
    acc_StateOrProvince1_S2619:'Ontario',
    acc_PhoneOption1_S2619:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2618
    acc_address_nickname1_S2618:'SFDEV-2618',
    acc_address_country_S2618:'Canada',
    acc_address_firstName1_S2618:'Tony',
    acc_address_lastName1_S2618:'sheloton',
    acc_AddressStreetOption1_S2618:'street',
    acc_AddressStreetTwoOption1_S2618:'Alnwick Castle',
    acc_CityOption1_S2618:'Halifax',
    acc_ZipOption1_S2618:'B0J 3H0',
    acc_StateOrProvince1_S2618:'Nova Scotia',
    acc_PhoneOption1_S2618:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2652
    acc_address_nickname1_S2652:'SFDEV-2652',
    acc_address_country_S2652:'Canada',
    acc_address_firstName1_S2652:'Tony',
    acc_address_lastName1_S2652:'sheloton',
    acc_AddressStreetOption1_S2652:'1233 CLEARBROOK RD',
    acc_AddressStreetTwoOption1_S2652:'Alnwick Castle',
    acc_CityOption1_S2652:'ABBOTSFORD',
    acc_ZipOption1_S2652:'V2T 5X2',
    acc_StateOrProvince1_S2652:'British Columbia',
    acc_PhoneOption1_S2652:'5148044432',    



    // e2e shipping address
    // Shipping address-SFDEV-2617
    acc_address_nickname1_S2617:'SFDEV-2617',
    acc_address_country_S2617:'Canada',
    acc_address_firstName1_S2617:'kid',
    acc_address_lastName1_S2617:'user',
    acc_AddressStreetOption1_S2617:'99 ANGUS CAMPBELL RD',
    acc_AddressStreetTwoOption1_S2617:'Alnwick Castle',
    acc_CityOption1_S2617:'ABBOTSFORD',
    acc_ZipOption1_S2617:'V3G 1S3',
    acc_StateOrProvince1_S2617:'British Columbia',
    acc_PhoneOption1_S2617:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2616
    acc_address_nickname1_S2616:'SFDEV-2616',
    acc_address_country_S2616:'Canada',
    acc_address_firstName1_S2616:'kid',
    acc_address_lastName1_S2616:'user',
    acc_AddressStreetOption1_S2616:'40 ANGUS CAMPBELL RD',
    acc_AddressStreetTwoOption1_S2616:'Alnwick Castle',
    acc_CityOption1_S2616:'ABBOTSFORD',
    acc_ZipOption1_S2616:'V3G 1S3',
    acc_StateOrProvince1_S2616:'British Columbia',
    acc_PhoneOption1_S2616:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-4588
    acc_address_nickname1_S4588:'SFDEV-4588',
    acc_address_country_S4588:'Canada',
    acc_address_firstName1_S4588:'kid',
    acc_address_lastName1_S4588:'user',
    acc_AddressStreetOption1_S4588:'600 1 ST SW',
    acc_AddressStreetTwoOption1_S4588:'Alnwick Castle',
    acc_CityOption1_S4588:'CALGARY',
    acc_ZipOption1_S4588:'T2P 1M6',
    acc_StateOrProvince1_S4588:'Alberta',
    acc_PhoneOption1_S4588:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-4585
    acc_address_nickname1_S4585:'SFDEV-4585',
    acc_address_country_S4585:'Canada',
    acc_address_firstName1_S4585:'kid',
    acc_address_lastName1_S4585:'user',
    acc_AddressStreetOption1_S4585:'3855 Shore Pkwy',
    acc_AddressStreetTwoOption1_S4585:'Alnwick Castle',
    acc_CityOption1_S4585:'Brooklyn',
    acc_ZipOption1_S4585:'M6A 3A5',
    acc_StateOrProvince1_S4585:'Ontario',
    acc_PhoneOption1_S4585:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2584
    acc_address_nickname1_S2584:'SFDEV-2584',
    acc_address_country_S2584:'Canada',
    acc_address_firstName1_S2584:'kid',
    acc_address_lastName1_S2584:'user',
    acc_AddressStreetOption1_S2584:'Street',
    acc_AddressStreetTwoOption1_S2584:'Alnwick Castle',
    acc_CityOption1_S2584:'Toronto',
    acc_ZipOption1_S2584:'M6A 3A5',
    acc_StateOrProvince1_S2584:'Ontario',
    acc_PhoneOption1_S2584:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2585
    acc_address_nickname1_S2585:'SFDEV-2585',
    acc_address_country_S2585:'Canada',
    acc_address_firstName1_S2585:'kid',
    acc_address_lastName1_S2585:'user',
    acc_AddressStreetOption1_S2585:'99 RUE ERIC',
    acc_AddressStreetTwoOption1_S2585:'Alnwick Castle',
    acc_CityOption1_S2585:'QUEBEC',
    acc_ZipOption1_S2585:'G2N 1W1',
    acc_StateOrProvince1_S2585:'Quebec',
    acc_PhoneOption1_S2585:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2582
    acc_address_nickname1_S2582:'SFDEV-2582',
    acc_address_country_S2582:'Canada',
    acc_address_firstName1_S2582:'kid',
    acc_address_lastName1_S2582:'user',
    acc_AddressStreetOption1_S2582:'3 ARCTIC CHIEF PL',
    acc_AddressStreetTwoOption1_S2582:'Alnwick Castle',
    acc_CityOption1_S2582:'WHITEHORSE',
    acc_ZipOption1_S2582:'Y1A 0C2',
    acc_StateOrProvince1_S2582:'Yukon',
    acc_PhoneOption1_S2582:'5148044432',


    // e2e shipping address
    // Shipping address-SFDEV-2644
    acc_address_nickname1_S2644:'SFDEV-2644',
    acc_address_country_S2644:'Canada',
    acc_address_firstName1_S2644:'month',
    acc_address_lastName1_S2644:'user',
    acc_AddressStreetOption1_S2644:'3855 Shore Pkwy',
    acc_AddressStreetTwoOption1_S2644:'Alnwick Castle',
    acc_CityOption1_S2644:'Brooklyn',
    acc_ZipOption1_S2644:'G5G 5G5',
    acc_StateOrProvince1_S2644:'Quebec',
    acc_PhoneOption1_S2644:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2598
    acc_address_nickname1_S2598:'SFDEV-2598',
    acc_address_country_S2598:'Canada',
    acc_address_firstName1_S2598:'kid',
    acc_address_lastName1_S2598:'user',
    acc_AddressStreetOption1_S2598:'Street',
    acc_AddressStreetTwoOption1_S2598:'Alnwick Castle',
    acc_CityOption1_S2598:'Halifax',
    acc_ZipOption1_S2598:'B0J 3H0',
    acc_StateOrProvince1_S2598:'Nova Scotia',
    acc_PhoneOption1_S2598:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2566
    acc_address_nickname1_S2566:'SFDEV-2598',
    acc_address_country_S2566:'Canada',
    acc_address_firstName1_S2566:'kid',
    acc_address_lastName1_S2566:'user',
    acc_AddressStreetOption1_S2566:'1222 MAIN ST',
    acc_AddressStreetTwoOption1_S2566:'Alnwick Castle',
    acc_CityOption1_S2566:'MONCTON',
    acc_ZipOption1_S2566:'E1C 1H6',
    acc_StateOrProvince1_S2566:'New Brunswick',
    acc_PhoneOption1_S2566:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2596
    acc_address_nickname1_S2596:'SFDEV-2596',
    acc_address_country_S2596:'Canada',
    acc_address_firstName1_S2596:'kid',
    acc_address_lastName1_S2596:'user',
    acc_AddressStreetOption1_S2596:'105 PANDORA AVE E',
    acc_AddressStreetTwoOption1_S2596:'Alnwick Castle',
    acc_CityOption1_S2596:'WINNIPEG',
    acc_ZipOption1_S2596:'R2C 0A1',
    acc_StateOrProvince1_S2596:'Manitoba',
    acc_PhoneOption1_S2596:'5148044432',
    
    // e2e shipping address
    // Shipping address-SFDEV-2657
    acc_address_nickname1_S2657:'SFDEV-2657',
    acc_address_country_S2657:'Canada',
    acc_address_firstName1_S2657:'blue',
    acc_address_lastName1_S2657:'user',
    acc_AddressStreetOption1_S2657:'2800 BARLOW TRAIL NE',
    acc_AddressStreetTwoOption1_S2657:'Alnwick Castle',
    acc_CityOption1_S2657:'CALGARY',
    acc_ZipOption1_S2657:'T1Y 1A2',
    acc_StateOrProvince1_S2657:'Alberta',
    acc_PhoneOption1_S2657:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2626
    acc_address_nickname1_S2626:'SFDEV-2626',
    acc_address_country_S2626:'Canada',
    acc_address_firstName1_S2626:'blue',
    acc_address_lastName1_S2626:'user',
    acc_AddressStreetOption1_S2626:'1333 RIVER ST',
    acc_AddressStreetTwoOption1_S2626:'Alnwick Castle',
    acc_CityOption1_S2626:'North York',
    acc_ZipOption1_S2626:'M6A 2T9',
    acc_StateOrProvince1_S2626:'Alberta',
    acc_PhoneOption1_S2626:'5148044432',

    // e2e shipping address
    // Shipping address-SFDEV-2622
    acc_address_nickname1_S2622:'SFDEV-2622',
    acc_address_country_S2622:'Canada',
    acc_address_firstName1_S2622:'blue',
    acc_address_lastName1_S2622:'user',
    acc_AddressStreetOption1_S2622:'1 TESTON BLVD',
    acc_AddressStreetTwoOption1_S2622:'Alnwick Castle',
    acc_CityOption1_S2622:'YORK',
    acc_ZipOption1_S2622:'M6N 4R9',
    acc_StateOrProvince1_S2622:'Ontario',
    acc_PhoneOption1_S2622:'5148044432',

//  completeAddress_format_1:'FirstName LastName AddressLine1 AddressLine2 City StateCode ZipCode', 
    completeAddress_format_1:'Tony Stark 49 Featherstone Street Alnwick Castle Montreal QC H3B 4W8',
    completeAddress_format_2:'Tony Stark 49 Featherstone Street Alnwick Castle Montreal QC H3B 4W8 5148044432',
    address_format_in_address_book_page_1: '49 Featherstone Street - Montreal - H3B 4W8 Default Tony Stark 49 Featherstone Street Alnwick Castle Montreal, QC H3B 4W8 5148044432 Edit Delete',
    edit_address_format:'NickName1Tony Stark 49 Featherstone Street Alnwick Castle Montreal QC H3B 4W8 5148044432',

    // Shipping address-2
    shipping_address_firstName:'Steve',
    shipping_address_lastName:'Rogers',
    shipping_address_line1:'1802  Nootka Street',
    shipping_address_line2:'5th Street',
    shipping_city:'Vancouver',
    shipping_state:'British Columbia',
    shipping_zip_code:'V5M 3M5',
    shipping_phone_number:'7782317653',
    shipping_email_id:'steve@rogers.com',
    address_format_1:'Steve Rogers 1802 Nootka Street 5th Street Vancouver BC V5M 3M5',
    address_formate_2:'Steve Rogers 1802 Nootka Street 5th Street Vancouver BC V5M 3M5 7782317653',
    address_format_in_address_book_page_2: '1802  Nootka Street - Vancouver - V5M 3M5 Default Steve Rogers 1802  Nootka Stree 5th Street Vancouver, BC V5M 3M5 7782317653 Edit Delete',

// address 
    save_address_nick_name:'MyNickName',
    save_address_country:'Canada',
    save_address_first_name:'John',
    save_address_last_name:'Wick',
    save_address_line_one:'2220  Mountain Rd',
    save_address_line_two:'2nd Street',
    save_address_city:'Moncton',
    save_address_state:'New Brunswick',
    save_address_zip_code:'E1C 1H6',
    save_address_phone_number:'5069619677',
    complete_save_address:'John Wick 2220 Mountain Rd 2nd Street Moncton NB E1C 1H6',
    full_address_format_1: 'John Wick 2220 Mountain Rd 2nd Street Moncton NB E1C 1H6 5069619677',
    full_address_format_2: 'MyNickNameJohn Wick 2220 Mountain Rd 2nd Street Moncton NB E1C 1H6 5069619677',
                           

// Billing Address
    acc_billing_CountryOption1:'Canada',
    acc_billing_address_firstName1:'Billing FN',
    acc_billing_address_lastName1:'Billing LN',
    acc_billing_AddressLineOne1:'4117  Merton Street',
    acc_billing_AddressLineTwo1:'5th main',
    acc_billing_CityOption1:'Toronto',
    acc_billing_ZipOption1:'M1L 3K7',
    acc_billing_StateOption1:'Ontario',
    acc_billing_PhoneOption1:'4167004188',
    acc_billing_full_address:'Billing FN Billing LN 4117 Merton Street 5th main Toronto ON M1L 3K7',

    //e2e Billing address-SFDEV-2636
    acc_billing_CountryOption_S2636:'United States',
    acc_billing_address_firstName_S2636:'Billing FN',
    acc_billing_address_lastName_S2636:'Billing LN',
    acc_billing_AddressLineOne_S2636:'255 Liberty St',
    acc_billing_AddressLineTwo_S2636:'5th main',
    acc_billing_CityOption_S2636:'New York',
    acc_billing_ZipOption_S2636:'10280',
    acc_billing_StateOption_S2636:'New York',

    //e2e Billing address-SFDEV-3751
    acc_billing_CountryOption_S3751:'United States',
    acc_billing_address_firstName_S3751:'Billing FN',
    acc_billing_address_lastName_S3751:'Billing LN',
    acc_billing_AddressLineOne_S3751:'215 Liberty St',
    acc_billing_AddressLineTwo_S3751:'5th main',
    acc_billing_CityOption_S3751:'New York',
    acc_billing_ZipOption_S3751:'10281',
    acc_billing_StateOption_S3751:'New York',

    //e2e Billing address-SFDEV-3756
    acc_billing_CountryOption_S3756:'United Kingdom',
    acc_billing_address_firstName_S3756:'Billing FN',
    acc_billing_address_lastName_S3756:'Billing LN',
    acc_billing_AddressLineOne_S3756:'12 Hagley Road Five Ways',
    acc_billing_AddressLineTwo_S3756:'5th main',
    acc_billing_CityOption_S3756:'Birmingham',
    acc_billing_ZipOption_S3756:'B16 8SJ',
    acc_billing_StateOption_S3756:'Birmingham',

    //e2e Billing address-SFDEV-2591
    acc_billing_CountryOption_S2591:'Canada',
    acc_billing_address_firstName_S2591:'Billing FN',
    acc_billing_address_lastName_S2591:'Billing LN',
    acc_billing_AddressLineOne_S2591:'159 E Hastings',
    acc_billing_AddressLineTwo_S2591:'5th main',
    acc_billing_CityOption_S2591:'Vancouver',
    acc_billing_ZipOption_S2591:'V5K 0A1',
    acc_billing_StateOption_S2591:'British Columbia',

    //e2e Billing address-SFDEV-2632
    acc_billing_CountryOption_S2632:'Canada',
    acc_billing_address_firstName_S2632:'Billing FN',
    acc_billing_address_lastName_S2632:'Billing LN',
    acc_billing_AddressLineOne_S2632:'99 ANGUS CAMPBELL RD',
    acc_billing_AddressLineTwo_S2632:'5th main',
    acc_billing_CityOption_S2632:'ABBOTSFORD',
    acc_billing_ZipOption_S2632:'V3G 1S3',
    acc_billing_StateOption_S2632:'British Columbia',


    /******* International address ************/
international_address_nickname:'InternationalAddress',
international_address_country:'United States',
international_address_first_name:'Bruce',
international_address_last_name:'Wayne',
international_address_line_one:'2263  Oak Street',
international_address_line_two:'address line 2',
international_address_city:'Old Forge',
international_address_state:'New York',
international_address_zipcode:'13420',
international_address_phone_number:'3153695049',




    /******* TEST ACCOUNTS ***********************************************************************/



    /******* TEST ITEMS ************/
    /*product1*/
    search_keyword:'shirt',
    search_keyword_2:'Dress',
    product_with_color_variants:'0600090924149',
    product_set_searchkey :'In store set',
    product_set_id:'Spring-look-2M', // added newly for the product set --**
    // normal_product_id:'793775370033M',
    normal_product_id:'25688632M',
    single_color_variant_product_id:'25592581M',
    selected_variant_product_id:'701644031206M',
    promotions_available_product:'Dress',

// product-1
    product_ID_item1:'0600000002923', //product-1; product code-1
    product_name_item1:'Opaque Control Top Tights',
// product-2
    product_ID_item2:'0600090896997',
    product_name_item2:'Flatbush Classic Polo',
    size_guide_configured_product:'89273387',

    brandName: 'Coach',
    brand_category_product_id:'0600090531778',
    product_ID_withSPace:'06000 8898 8748',
    product_id_withPromo:'90957274',
    product_promoMSG: 'HBC offer',


    product_ID_with_less_price:'89273387',
    product_name_with_less_price:'Woven Wool Sports Jacket',

    gift_card_product_id:'0600088906943',
    gift_card_product_name:'The Signature Gift Card',

    waitlist_product_id:'11968316',
    home_appliance_product_id:'0600090400545',

    // BOPIES PRODUCT DETAILS (BOPIs product)
    bopis_product_category:'0600090150935',
    bopis_master_product_id:'0600089273386',    //NO Veriants should be selected 
    bopis_product_name:'Orchidée Impériale The Rich Foam',
    bopis_postcode:'M6A 3A5',
    bopis_radius:'300 km',
    instore_pickup_person_name:'Bruce Wayne',
    instore_pickup_person_number:'5069619677',
    instore_pickup_person_email_id:'bruce@wayne.com',

    designer_filter_search_keyword:'Bench',

    // e2e changes updated
    // BOPIES PRODUCT DETAILS (BOPIs product)
    bopis_product_category:'0600090150935',
    bopis_master_product_id:'0600089273386',    //NO Veriants should be selected 
    bopis_product_name:'Orchidée Impériale The Rich Foam',
    // e2ebopis_postcode:'M6A 3A5',
    e2ebopis_radius:'300 km',
    instore_pickup_person_name:'Bruce Wayne',
    instore_pickup_person_number:'5069619677',
    instore_pickup_person_email_id:'bruce@wayne.com',

    designer_filter_search_keyword:'Bench',







    // ***************** PROMO Products
    // Promo product-1
    promo_product_ID_item1:'0600088988748',
    promo_product_name_item1:'Modern-Fit Birdseye Sports Jacket',
    // Promo product-2
    promo_product_ID_item2:'0600090896997',
    promo_product_name_item2:'Flatbush Classic Polo',
    gwp_product_ID: '0600090625985',
    // ***************** PROMO CODES
    // e2e Reused
    orderLevelCode:'VIPSF', //Promotion ID in BM:- Auto_OrderLevelPromo [10% off products]
    orderLevelCodeS2661:'SAVE25',
    orderLevelCodeS2624:'VIPSF',
    orderLevelCodeS3306:'VIPSF',
    orderLevelCodeS2646:'282837',
    productLevel:'AutoProd',  //Promotion ID in BM:- Auto_ProductLevelPromo [10% off for MEN category products]
    shippingLevel:'AutoShipping',// Promotion ID in BM:- Auto_ShippingLevelPromo [10% off for MEN category products]
    freeShipping:'FreeShipping', // Promotion ID in BM:- AutoFreeShipping [Free Shipping for MENs category products]
    invalidPromoCode:'InvalidCode',

    /***************Payment header************** */
    payment_header: 'Payment Methods',
  

    // shippingReturnDetails_pagetitle : "Saks.com - Shipping, Returns & Taxes",
    /*************PRODUCT ARRAY ***************************************/
    /*************Free shipping********** */
    free_shipping_promo_code: 'FreeShipping',
    free_shipping_details: 'FREE',
    free_shipping_total_cost:'$496.13',

    /*******************GWP promtion********************** */
    gwp_product: '90796464',
    gwp_product_name: '¿Future Solution LX 10th Anniversary Nishijin Collection',

    /*********************% promotions************************ */
    per_promo_cost: '$52.50',

    /***********************Doller promotion********************************* */
     dollerPromo: '10DollarOff',
     doller_promo_cost: '$10',

    /**********BAG**********************************/
   


    /**********CHECKOUT**********************************/
    

    

  /************************** SEARCH/SORT/PAGINATION ****************/

  

  /******* TEST ITEMS ***********************************************************************/
  



//     /**********************OLD GLOBAL DATA ITEMSSSSSSSSSSSSSS**********************/
    // *********************** URL substrings in case of footer link navigations **********************/
orderHistoryurl:'order-history',
shippingAndReturnsurl:'shipping-returns',
personalShoppingurl:'personal-shopping',
smsUpdateurl:'thebaymobile',
kleinfeldsurl:'kleinfeld',
topshopurl:'topshop',
topmanurl:'topman',
hbccrediturl:'hudsonsbaycredit',
homeprotectionplansurl:'home-protection-plans',
totalguardproductprotectionurl:'total-guard-protection-plan',
bayservicesurl:'bay-services',
investorurl:'investor',
careersurl:'careers',
becomeAffiliateurl:'become-affiliate',
emailOffersurl:'email-offers',
appDownloadurl:'app-download',

facebookurl :'facebook',
Pinteresturl:'pinterest',
Instagramurl:'instagram',
Twitterurl:'twitter',
Youtubeurl:'youtube',
    // e2e changes
  /******* TEST ITEMS -E2E************/  
  
e2e_product_set_id:'89645871',

// I navigate to data input below
BOPIS_Item1_SFDEV2580: '90150935',
BOPIS_Item2_SFDEV2580: '89493640',
BOPIS_Item1_SFDEV4582: '87633824',
BOPIS_Item2_SFDEV4582: '89645871',
BOPIS_Item1_SFDEV2594:'0600090150935',
BOPIS_Item2_SFDEV2595:'90918736',
Product1_SFDEV4582: '87633824',
Product2_SFDEV4582: '89645871',
Product1_SFDEV2560: '87633824',
Product1_SFDEV3817: '87633824',
Product2_SFDEV3817: '89645871',
Product1_SFDEV3751: '89988814',
Product2_SFDEV3751: '89913262',
Product1_SFDEV2625: '89645871',
Product2_SFDEV2625: '90042267',
Product1_SFDEV2623: '91383953',
Product2_SFDEV2623: '89645871',
Product1_SFDEV2619: '91383953',
Product1_SFDEV2617: '89299682',
Product1_SFDEV2616: '89988814',
Product2_SFDEV2616: '0600091450395',
Product1_SFDEV2580: '89645871',
Product2_SFDEV2580: '0600089645874',
Product1_SFDEV2566: '89988814',
Product2_SFDEV2566: '90042267',
Product3_SFDEV2566: '89156190',
Product1_SFDEV2644: '89749518',
Product2_SFDEV2644: '89749516',
Product1_SFDEV2643: '89749516',
Product1_SFDEV2642: '89156190',
Product2_SFDEV2642: '89156189',
Product1_SFDEV2640: '87633824',
Product2_SFDEV2640: '88208122',
Product1_SFDEV2638: '89988814',
Product2_SFDEV2638: '0600091450395',
Product1_SFDEV2598: '89298548',
Product1_SFDEV2596: '89988814',
Product2_SFDEV2596: '89298548',
Product1_SFDEV2595: '89645871',
Product2_SFDEV2595: '90918736',
Product1_SFDEV2594: '89298548',
Product1_SFDEV2585: '86890155',
Product1_SFDEV2584: '86890155',   
Product1_SFDEV2583: '84056956',
Product1_SFDEV2582: '91383953',
Product1_SFDEV2651: '89749518',
Product2_SFDEV2651: '89749516',
Product1_SFDEV2634: '89749518',


//added on March 4
Product1_SFDEV2624: '89570009',
Product1_SFDEV2590: '87633824',
Product1_SFDEV2591: '87633824',
Product1_SFDEV2588: '87633824',
Product1_SFDEV2656: '89988814',
Product2_SFDEV2656: '90396619',
Product1_SFDEV2578: '0600090150935',
Product2_SFDEV2578: '89913263',
Product1_SFDEV2632: '90150935',
Product2_SFDEV2632: '87633824',
Product1_SFDEV2592: '90042267',
Product1_SFDEV2589: '88644142',
Product1_SFDEV3306: '90042267',
Product1_SFDEV3306: '89298548',
Product1_SFDEV2589: '88644142',
Product1_SFDEV2646: '88644142',
Product1_SFDEV2630: '89156190',
Product1_SFDEV2629: '89298549',
Product2_SFDEV2629: '89298550',
Product1_SFDEV2563: '88644142',
Product2_SFDEV2563: '90590229',
Product1_SFDEV2641: '89913263',
Product2_SFDEV2641: '89089872',
Product1_SFDEV2633: '89913263',
Product2_SFDEV2633: '89089872',
Product1_SFDEV2597: '87564998',









SFDEV2644: '89298548',
Red_SFDEV2642:'89156190',
Green_SFDEV2642:'89156189',
BOGO_SFDEV4588:'88494533',
item_SFDEV2634:'0600090590229',
item1_SFDEV2616:'0600089988814',
item2_SFDEV2616:'0600090150935',
item2_SFDEV2561:'88168825',
item3_SFDEV2561:'90512104',
item2_SFDEV2584:'90105206',
item1_SFDEV2617:'89299682',
item1_SFDEV2618:'0600090150935',
item1_SFDEV2620:'0600089988814',
item2_SFDEV2620:'0600086837281',
item3_SFDEV2620:'0600091015142',
item1_SFDEV2585:'89570009',
item1_SFDEV2582:'87307989',
item1_SFDEV2623:'91383953',
item2_SFDEV2623:'89298548',
item1_SFDEV2625:'89645871',
item2_SFDEV2625:'90042267',
item1_SFDEV2635:'88039178',
item1_SFDEV2643:'89298548',
item1_SFDEV4586:'88208122',
item2_SFDEV4586:'87564998',
item1_SFDEV4585:'90396619',
item2_SFDEV4585:'89988814',
item1_SFDEV4581:'88208122',
item2_SFDEV4581:'87564998',
item1_SFDEV3813:'88513859',
item1_SFDEV3308:'89298548',
item2_SFDEV3308:'89988814',
item1_SFDEV3307:'89052388',
item2_SFDEV3227:'90704953',
item1_SFDEV2661:'87633824',
item1_SFDEV2585:'91184567',
item2_SFDEV2661:'89298548',
item1_SFDEV3817:'90042267',
item2_SFDEV3817:'90223708',
item3_SFDEV3817:'88644142',
item1_SFDEV2651:'89749518',
item2_SFDEV2651:'89749516',
item1_SFDEV2596:'90927793',
item1_SFDEV2657:'90923941',
item2_SFDEV2637:'90300949',
item3_SFDEV2637:'88906943',
item4_SFDEV2637:'2537538',
item1_SFDEV2562:'88347593',
item1_SFDEV2559:'89917526',
item1_SFDEV3756:'90303850',
item2_SFDEV3751:'89913262',
Green_SFDEV2652:'90218459',


// /******* END TO END TEST DATA***********************************************************************/


//     // End to End Paypal Login credentials
//     endtoend_paypal_email_id:'schennaiah@pfsweb.com',
//     endtoend_paypal_password:'India@123',

//     //End to End Biopis items
//     endtoend_bopis_product1:'',
//     endtoend_bopis_product



  };
  
  module.exports = Object.freeze({data})