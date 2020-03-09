const { client } = require('nightwatch-api')

// var references = require('../../common_page_objects/pageObjects')

var homepage = require('../../common_page_objects/homepage')
var login = require('../../common_page_objects/login')
var searchResultPage = require('../../common_page_objects/searchResultPage')
var cartPage = require('../../common_page_objects/cart')
var wishlistPage = require('../../common_page_objects/wishlist')
var commonElementsInAllPage = require('../../common_page_objects/others')
var PDP = require('../../common_page_objects/PDP')
var Profile = require('../../common_page_objects/profile')
var checkoutShipping = require('../../common_page_objects/checkout_shipping')
var checkoutBillingAndPayment = require('../../common_page_objects/checkout_billing_payment')
var checkoutOrderReview = require('../../common_page_objects/checkout_order_review')
var OrderConfirmation = require('../../common_page_objects/order_confirmation')
var OrderHistoryPage = require('../../common_page_objects/myaccount_order_history')
var MyAccountAddressBook = require('../../common_page_objects/myAccount_address')
var MyAccountPaymentsPage = require('../../common_page_objects/myAccount_payments')
var PayPal = require('../../common_page_objects/PayPal')


var pageObjects = require('../pageObjects/pageObjects')

var globals = require('../data/globals')
// var ref = {...references.elements}
var ref = {...homepage.elements,...login.elements,...Profile.elements,...searchResultPage.elements,...cartPage.elements,...wishlistPage.elements,...commonElementsInAllPage.elements,...PDP.elements,...checkoutShipping.elements,...checkoutBillingAndPayment.elements,...checkoutOrderReview.elements,...OrderConfirmation.elements,...OrderHistoryPage.elements,...MyAccountAddressBook.elements,...MyAccountPaymentsPage.elements,...pageObjects.elements,...PayPal.elements}
var data = {...globals.data}


require('../../common_definitions/common_sfcc.js').main(data,ref)
require('../../common_definitions/account.js').main(data,ref)
require('../../common_definitions/homepage.js').main(data,ref)
require('../../common_definitions/shopNav.js').main(data,ref)
require('../../common_definitions/cart.js').main(data,ref)
require('../../common_definitions/checkout.js').main(data,ref)
require('../../common_definitions/myAccount_addressBookPage.js').main(data,ref)
require('../../common_definitions/PayPal.js').main(data,ref)

require('../step-definitions/save_orderId.js').main(data,ref)
require('../step-definitions/load_application.js').main(data,ref)



// require('../step-definitions/saks_account.js').main(data,ref)