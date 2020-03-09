Feature: HBC End to end - Place Order Registered/Guest users using Amex Card


# SFDEV-3310 - Registered User - Place order[multiple items multiple quantities]
# @Executed - 
Scenario: SFDEV-3310 Verify for Bay website order for a registered user, multiple items multiple quantities, shipment paid by Amex.
Given I am on the website
And Wait for "3000" mili seconds
And I login to the application with valid credentials
And Wait for "3000" mili seconds
And Remove saved addresses from my account page
And Remove saved credit cards from my account page
And Wait for "3000" mili seconds
And Remove products from cart page
And Wait for "3000" mili seconds
And Click on Start Shopping button
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "2000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-3310" in the textbox
And I click on - "checkout save shipping address button"
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Amex Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-3310-Registered User with Amex card"


# # # SFDEV-2638 - Guest User - Place order  [multiple items using single quantity]
# # # @Executed - Automated/Passed-Product2 SFDEV-2616-sold out
Scenario: SFDEV-2638 Verify order placed by guest user for multiple items using single quantities shipped by DC using Next Business Day using Amex.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2638" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 New Data 2638" to bag
And I click on "minicart link"
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2638" in the textbox
And Wait for "8000" mili seconds
And Select "Next Business Day" shipping method
And I click on - "checkout shipping save and continue button"
And I enter my "Amex Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2638-Guest User with Amex card"


# # SFDEV-2657 - Registered user with Amex - Place order  [single item having single quantity]
# # @Executed - Automated/Passed - check item add to bag
Scenario: SFDEV-2657 Verify order placed by registered user with Amex, %off and Standard shipping method
Given I am on the website
And Wait for "5000" mili seconds
And I login to the application with valid credentials
And Wait for "3000" mili seconds
And Remove saved addresses from my account page
And Remove saved credit cards from my account page
And Wait for "3000" mili seconds
And Remove products from cart page
And Wait for "3000" mili seconds
And Click on Start Shopping button
And Wait for "2000" mili seconds
And I add "Product SFDEV-2657" to bag
And I click on "minicart link"
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-SFDEV-2657" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "click promo code button"
And Wait for "1000" mili seconds
And I enter my "Order Level promo code" in the textbox
And Wait for "6000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Amex Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2657-Registered User with Amex Card"


# # # # SFDEV-2652 - Guest user with Amex - Place order  [multi line multi quantity]
# # # # @Executed - Automated/Passed - check item add to bag-Product1 SFDEV-2642-cannot  shiiped to PO
Scenario: SFDEV-2652 Verify Bay multi line multi quantity guest order with Odd2DecimalOrderTotal paid with AMEX with Standard shipping & Off promo.
Given I am on the website
And Wait for "5000" mili seconds
And I add "Product1 SFDEV-2642" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "2000" mili seconds
And click on home logo
And Wait for "4000" mili seconds
And I add "Product SFDEV-2652" to bag    
And I click on "minicart link"
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2652" in the textbox
And Wait for "5000" mili seconds
And I click on - "click promo code button"
And Wait for "1000" mili seconds
And I enter my "Order Level promo code" in the textbox
And Wait for "6000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Amex Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2618-Guest User with Amex card"


# # # SFDEV-2559 - Registered User - Place order[Multiple Items & Multiple Quantities]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2559 Verify for Bay website order paid with Amex for multiple items having multiple quantities and Off Promo Code placed by a registered user when items are shipped using Standard by DC.
Given I am on the website
And Wait for "3000" mili seconds
And I login to the application with valid credentials
And Wait for "3000" mili seconds
And Remove saved addresses from my account page
And Remove saved credit cards from my account page
And Wait for "3000" mili seconds
And Remove products from cart page
And Wait for "3000" mili seconds
And Click on Start Shopping button
And Wait for "2000" mili seconds
And I add "Product1 SFDEV-2559" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "6000" mili seconds
And click on home logo
And Wait for "1000" mili seconds
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "6000" mili seconds
And click on home logo
And Wait for "1000" mili seconds
And I add "Product3 SFDEV-2561" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2559" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Amex Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2559-Registered User with Amex card"



# # # SFDEV-2583 - Guest User - Place order  [single item having multiple quantity]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2583 Verify for Bay website order paid with Amex for a single item having multiple quantity, placed by a guest user using Rush/Express shipping.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2583" to bag
And I click on "minicart link"
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2583" in the textbox
And Wait for "9000" mili seconds
And Select "Express" shipping method
And I click on - "checkout shipping save and continue button"
And I enter my "Amex Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2583-Guest User with Visa card"


# # SFDEV-2656 - Registered user with Amex - Place order  [Multiple item having single quantity]
# # @Executed - **March 4 - Rework on -Products
Scenario: SFDEV-2656 Verify for Bay website order is created with AMEX and as a registered user, Standard shipping on order.
Given I am on the website
And Wait for "5000" mili seconds
And I login to the application with valid credentials
And Wait for "3000" mili seconds
And Remove saved addresses from my account page
And Remove saved credit cards from my account page
And Wait for "3000" mili seconds
And Remove products from cart page
And Wait for "3000" mili seconds
And Click on Start Shopping button
And Wait for "2000" mili seconds
And I add "Product1 New Data 2656" to bag
And I click on "minicart link"
And Wait for "2000" mili seconds
And click on home logo
And I add "Product2 New Data 2656" to bag
And I click on "minicart link"
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-SFDEV-2657" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And Wait for "6000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Amex Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2656-Registered User with Amex Card"

