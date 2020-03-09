Feature: HBC End to end - Place Order Registered/Guest users using HBC Master Card


# # # SFDEV-4588 - Registered User - Place order
# # # @Executed - Automated/Passed
Scenario: SFDEV-4588 Verify order with BOGO promo on multiples (item 1 qty 3 and item 2 qty 3, item 1 and item 2 have different prices)
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
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-2616" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4588" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "7000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-4588" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "HBC Card" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4588-Registered User with HBC Card"


# # # SFDEV-4587 - Registered User - Place order  multiples (item 1 qty 3 and item 2 qty 3, item 1 and item 2 have different prices)
# # # @Executed - Automated/Passed
Scenario: SFDEV-4587 Verify for registered user order with BOGO (Buy 1 Get 1 Free 'LOGO' in AMS) promo on multiples (item 1 qty 3 and item 2 qty 3, item 1 and item 2 have different prices) and FS.
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
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-2616" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4588" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-SFDEV-4588" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "HBC Card" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4587-Registered User with HBC Master card"


# # # # SFDEV-4586 - Registered User - Place order  
# # # # @Executed - Automated/Passed
Scenario: SFDEV-4586 Verify partial return for order with % OFF Pr5Prod, QTY Pr10Prod, Spend $x Get $y Credit Offer Pr160Ord and Free Shipping, paid with HBC Mastercard".
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
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-2616" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-SFDEV-4588" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "HBC Card" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4586-Registered User with HBC Master card"


# # # # SFDEV-4585 - Registered User - Place order  
# # # # @Executed - Inprogress
Scenario: SFDEV-4585 Verify partial qty return for registered user order with BOGO Pr20Prod, Spend $x Get $y Pr170Ord and Free Shipping.
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
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-SFDEV-4585" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "HBC Card" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4585-Registered User with HBC Master card"


# # # # SFDEV-4584 - Registered User - Place order 
# # # # @Executed - Automated/Passed
Scenario: SFDEV-4584 Verify for registered user order with ODS Pr4Prod, Free Shipping.
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
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-SFDEV-4588" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "HBC Card" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4584-Registered User with HBC Master card"


# # # # SFDEV-4583 - Registered User - Place order
# # # # @Executed - Automated/Passed
Scenario: SFDEV-4583 Verify  for registered user order with QTY Offer N for $XX Pr10Prod and Free Shipping,paid with HBC Mastercard.
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
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-SFDEV-4588" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "HBC Card" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4583-Registered User with HBC Master card"


# # # # SFDEV-2637 - Guest User - Place order[multiple items with multiple quantities]
# # # # @Executed - InProgress-two items are not available(90300949,88906943)
Scenario: SFDEV-2637 Verify a Bay website order creation by guest user paid by HBC Mastercard and has Multiple items (1 item is physical Gift Card) with multiple quantities, shipped by DC with Standard delivery.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product SFDEV-2634" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-2637" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product3 SFDEV-2637" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product4 SFDEV-2637" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2617" in the textbox
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "HBC Card" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2637-Guest User with HBC card"


# # # # SFDEV-2639 - Guest User - Place order[multiple items multi quantities]
# # # # @Executed - InProgress-(item is not available-90300949)
Scenario: SFDEV-2639 Verify for Bay website order placed by guest user for multiple items multi quantities shipped by DC, paid by HBC Mastercard using Rush/Express delivery.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product SFDEV-2634" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "6000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product4 SFDEV-2637" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "6000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-2637" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "6000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2617" in the textbox
And Wait for "6000" mili seconds
And Select "Express" shipping method
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "HBC Card" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2639-Guest User with HBC Card"


# # # # SFDEV-2596 - Guest User - Place order  [multiple line single quantity]
# # # # @Executed - Automated/Passed-(90043120 -item is not available now)
Scenario: SFDEV-2596 Verify for Bay website order paid using HBC Mastercard for multiple line single quantity placed by guest user when 1 item is shipped using rush/express from store and the other is from DC.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2596" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "6000" mili seconds
And I add "Product2 New Data 2596" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2596" in the textbox
And Wait for "8000" mili seconds
And Select "Express" shipping method
And I click on - "checkout shipping save and continue button"
And I enter my "HBC Card" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2596-Guest User with HBC Master Card"

