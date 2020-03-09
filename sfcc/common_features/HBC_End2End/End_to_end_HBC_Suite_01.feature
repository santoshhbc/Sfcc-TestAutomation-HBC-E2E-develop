# Feature: HBC End to end - Place Order Registered/Guest users

# # #############################################################################################
# # ################################### REGISTERED/GUEST USER #########################################
# # #############################################################################################

# SFDEV-2634 - Registered User - Place order  [French registered user]
# @Executed - Test Data issue-Unable to select size-0600000002923
# Scenario: SFDEV-2634 Verify the order placement as French registered user with single item by visa card
# Given I am on the website
# # And I click on French link
# And Wait for "3000" mili seconds
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product SFDEV-2634" to bag
# And I click on "minicart link"
# And I click on "checkout button in cart page"
# And I click on - "add new shipping address link"
# And I enter my "Shipping address-French" in the textbox
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "5000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2634-French Registered User with VISA card"


# # # # SFDEV-2616 - Guest User - Place order  [multiple items having multiple quantities]
# # # # @Executed - Automated/Passed
# Scenario: SFDEV-2616 Verify order paid using Visa for multiple items having multiple quantities placed by a guest user.
# Given I am on the website
# And I add "Product1 SFDEV-2616" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "3000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-2616" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2616" in the textbox
# And Wait for "9000" mili seconds
# And Select "Express" shipping method
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# And I click on - "checkout place order button"
# And Wait for "4000" mili seconds
# And I notice order confirmation page thank you message should say "Thank you!"
# And Save Order ID - "SFDEV-2616-Guest User with VISA card"



# # # SFDEV-2619 - Guest User - Place order  [Single item having single quantity]
# # # @Executed - Test Data issue-Unable to select size  -  0600090150935
# Scenario: SFDEV-2619 Verify order paid using Visa for Single item having single quantity placed by a guest user.
# Given I am on the website
# And I add "Product SFDEV-2618" to bag
# And I click on "minicart link"
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2619" in the textbox
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# And I click on - "checkout place order button"
# And Wait for "4000" mili seconds
# And I notice order confirmation page thank you message should say "Thank you!"
# And Save Order ID - "Guest User with VISA card"



# # # # SFDEV-2618 - Guest User - Place order  [single item having multiple quantities]
# # # # @Executed - Automated/Passed
# Scenario: SFDEV-2618 Verify order paid using Visa for a single item having multiple quantities placed by a guest user.
# Given I am on the website
# And Wait for "4000" mili seconds
# And I add "Product SFDEV-2618" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2618" in the textbox
# And Wait for "5000" mili seconds
# And Select "Express" shipping method
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2618-Guest User with VISA card"


# # # # SFDEV-2617 - Guest User - Place order  [single line having multiple quantities]
# # # # @Executed - Automated/Passed(89299682 item not avalaible now)
# Scenario: SFDEV-2617 Verify order paid using Visa for single line having multiple quantities placed by a guest user.
# Given I am on the website
# And I add "Product SFDEV-2617" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-1" in the textbox
# And Wait for "9000" mili seconds
# And Select "Next Business Day" shipping method
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2617-Guest User with VISA card"


# # # # # SFDEV-2620 - Guest User - Place order  [multi line item less than 15$]
# # # # # @Executed - Passed
# Scenario: SFDEV-2620 Verify the order placement using VISA card as guest user with multi line item less than 15$.
# Given I am on the website
# And I add "Product with less15$" to bag
# And I click on "minicart link"
# And Wait for "3000" mili seconds
# And click on home logo
# And I add "Product2 SFDEV-2620" to bag
# And I click on "minicart link"
# And Wait for "3000" mili seconds
# And click on home logo
# And I add "Product3 SFDEV-2620" to bag
# And I click on "minicart link"
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2620" in the textbox
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2620 -Guest User with VISA card"



# # # # SFDEV-2594 - Guest User - Place order  [single line multiple quantities]
# # # # @Executed - Inprogress
# Scenario: SFDEV-2594 Verify BOPIS order paid using Visa for a single line multiple quantities placed by a guest user.
# Given I am on the website
# And I add "BOPIS Item1 SFDEV-2594" to bag
# And I click on "minicart link"
# And I am adding quantity
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2594" in the textbox
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# And I click on - "checkout place order button"
# And Wait for "4000" mili seconds
# And I notice order confirmation page thank you message should say "Thank you!"
# And Save Order ID - "SFDEV-2594-Guest User with VISA card"


# # # # # SFDEV-2585 - Guest User - Place order  [single quantity]
# # # # # @Executed - Inprogress-(Item has been changed)
# Scenario: SFDEV-2585 Verify order paid with Visa for a single item having a single quantity and sourced for a DC, placed by a guest user using Rush/Express shipping
# Given I am on the website
# And I add "Product1 SFDEV-2585" to bag
# And I click on "minicart link"
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2585" in the textbox
# And Wait for "5000" mili seconds
# And Select "Express" shipping method
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2585 - Guest User with VISA card"


# # # # # SFDEV-2584 - Guest User - Place order  [multiple items having single quantity]
# # # # # @Executed - Automated/Passed
# Scenario: SFDEV-2584 Verify order paid with Visa for multiple items having single quantity, placed by a guest user using Rush/Express shipping.
# Given I am on the website
# And I add "Product1 SFDEV-2651" to bag
# And I click on "minicart link"
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-2584" to bag
# And I click on "minicart link"
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2584" in the textbox
# And Wait for "8000" mili seconds
# And Select "Express" shipping method
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2584-Guest User with VISA card"


# # # # # SFDEV-2582 - Guest User - Place order  [single item having single quantity]
# # # # # @Executed - Automated/Passed
# Scenario: SFDEV-2582 Verify order paid with Visa for a single item having single quantity, placed by a guest user using Standard shipping.
# Given I am on the website
# And I add "Product1 SFDEV-2582" to bag
# And I click on "minicart link"
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2582" in the textbox
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# And I click on - "checkout place order button"
# And Wait for "4000" mili seconds
# And I notice order confirmation page thank you message should say "Thank you!"
# And Save Order ID - "SFDEV-2582 -Guest User with VISA card"


# # # # SFDEV-2580 - Guest User - Place order  [multiple items having multiple quantities]
# # # # @Executed - inproress - (element intractable issue)
# Scenario: SFDEV-2580 Verify BOPIS order paid with VISA with multiple items having multiple quantities placed by a Guest User
# Given I am on the website
# And I navigate to PDP from "BOPIS Item1 SFDEV-2580" search result page
# And I add "BOPIS Item1 SFDEV-2580" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Select BOPIS SFDEV2580 store in PDP
# And Wait for "3000" mili seconds
# And click on home logo
# And I add "BOPIS Item2 SFDEV-2580" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
# And Wait for "3000" mili seconds
# # And I select size###
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "In-Store Pickup Person details" in the textbox
# And I click on - "checkout shipping instore pickup save and continue button"
# And Wait for "2000" mili seconds
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# And I click on - "checkout place order button"
# And Wait for "4000" mili seconds
# And I notice order confirmation page thank you message should say "Thank you!"
# And Save Order ID - "SFDEV-2580-Guest User with VISA card"


# # # SFDEV-2644 - Guest User - Place order  [Multi items Single quantity]
# # # @Executed - Automated/Passed
# Scenario: SFDEV-2644 Verify order placed by a guest user for Multi items Single quantity paid by VISA using NextBusinessDay delivery.
# Given I am on the website
# And I add "Product1 SFDEV-2643" to bag
# And I click on "minicart link"
# And click on home logo
# And Wait for "4000" mili seconds
# And I add "Product2 SFDEV-2616" to bag
# And I click on "minicart link"
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2644" in the textbox
# And Wait for "8000" mili seconds
# And Select "Next Business Day" shipping method
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2644-Guest User with Visa card"


# # # # # SFDEV-2635 - Guest User - Place order  [single item single quantity]
# # # # # @Executed - Automated/Passed
# Scenario: SFDEV-2635 Verify  guest order placed with MasterCard single item single quantity,Eco fee applied.
# Given I am on the website
# And I add "Product1 SFDEV-2635" to bag
# And I click on "minicart link"
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2617" in the textbox
# And Wait for "4000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Master Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2635-Guest User with Master card"


# # # # # # SFDEV-2642 - Guest User - Place order  [multiple lines single quantity]
# # # # # # @Executed - Automated/Passed
# Scenario: SFDEV-2642 Verify order paid using MasterCard for multiple lines single quantity placed by guest user using standard shipping.
# Given I am on the website
# And I add "Product1 SFDEV-2642" to bag
# And I click on "minicart link"
# And click on home logo
# And Wait for "2000" mili seconds
# And I add "Product2 SFDEV-2642" to bag
# And Wait for "2000" mili seconds
# And I click on "minicart link"
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2642" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Master Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2642-Guest User with Master card"


# # # # # # # # SFDEV-2638 - Guest User - Place order  [multiple items using single quantity]
# # # # # # # # @Executed - Automated/Passed
# Scenario: SFDEV-2638 Verify order placed by guest user for multiple items using single quantities shipped by DC using Next Business Day using Amex.
# Given I am on the website
# And I add "Product1 SFDEV-2616" to bag
# And I click on "minicart link"
# And Wait for "3000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-2616" to bag
# And I click on "minicart link"
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2638" in the textbox
# And Wait for "8000" mili seconds
# And Select "Next Business Day" shipping method
# And I click on - "checkout shipping save and continue button"
# And I enter my "Amex Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2638-Guest User with Amex card"


# # SFDEV-4588 - Registered User - Place order
# # @Executed - Automated/Passed
# Scenario: SFDEV-4588 Verify order with BOGO promo on multiples (item 1 qty 3 and item 2 qty 3, item 1 and item 2 have different prices)
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-2616" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4588" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "7000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-4588" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "HBC Card" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4588-Registered User with HBC Card"


# # # # # # # # SFDEV-4587 - Registered User - Place order  multiples (item 1 qty 3 and item 2 qty 3, item 1 and item 2 have different prices)
# # # # # # # # @Executed - Automated/Passed
# Scenario: SFDEV-4587 Verify for registered user order with BOGO (Buy 1 Get 1 Free 'LOGO' in AMS) promo on multiples (item 1 qty 3 and item 2 qty 3, item 1 and item 2 have different prices) and FS.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-2616" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4588" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-SFDEV-4588" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "HBC Card" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4587-Registered User with HBC Master card"


# # # # # # # # # SFDEV-4586 - Registered User - Place order  
# # # # # # # # # @Executed - Automated/Passed
# Scenario: SFDEV-4586 Verify partial return for order with % OFF Pr5Prod, QTY Pr10Prod, Spend $x Get $y Credit Offer Pr160Ord and Free Shipping, paid with HBC Mastercard".
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-2616" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product1 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-SFDEV-4588" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "HBC Card" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4586-Registered User with HBC Master card"


# # # # # # # # # SFDEV-4585 - Registered User - Place order  
# # # # # # # # # @Executed - Inprogress
# Scenario: SFDEV-4585 Verify partial qty return for registered user order with BOGO Pr20Prod, Spend $x Get $y Pr170Ord and Free Shipping.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-SFDEV-4585" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "HBC Card" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4585-Registered User with HBC Master card"


# # # SFDEV-4584 - Registered User - Place order 
# # # @Executed - Automated/Passed
# Scenario: SFDEV-4584 Verify for registered user order with ODS Pr4Prod, Spend $x Get $y Pr170Ord and Free Shipping.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-SFDEV-4588" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "HBC Card" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4584-Registered User with HBC Master card"

# # SFDEV-4583 - Registered User - Place order
# # @Executed - Automated/Passed
# Scenario: SFDEV-4583 Verify  for registered user order with QTY Offer N for $XX Pr10Prod and Free Shipping,paid with HBC Mastercard.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-SFDEV-4588" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "HBC Card" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4583-Registered User with HBC Master card"


# # SFDEV-4581 - Registered User - Place order
# # @Executed - Automated/Passed
# Scenario: SFDEV-4581 Verify shipment for order with Price Point Pr5Prod, One Day Sale Pr4Prod and Free Shipping
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4581" to bag
# And I click on "minicart link"
# # And I am adding quantity
# # And Wait for "1000" mili seconds
# # And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-1" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4581-Registered User with PLCC card"


# # # # # # # # # SFDEV-4580 - Registered User - Place order
# # # # # # # # # @Executed - Automated/Passed-(clarification needed for Buy More Save More Pr20Prod, One Time Use BDAY Email Promo Code Pr160Ord, %OFF promo Pr150Prod and Free Shipping" )
# Scenario: SFDEV-4580 Verify shipment for registered user order with Buy More Save More Pr20Prod, One Time Use BDAY Email Promo Code Pr160Ord, %OFF promo Pr150Prod and Free Shipping
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-1" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4580-Registered User with PLCC card"


# # # # # # # # # SFDEV-4579 - Registered User - Place order
# # # # # # # # # @Executed - Inprogress
# Scenario: SFDEV-4579 Verify shipment for registered user order with GWP Pr50Prod, SENIORS promo Pr150Prod and Free Shipping
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-1" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4579-Registered User with PLCC card"


# # # # # # # # # SFDEV-4578 - Registered User - Place order
# # # # # # # # # @Executed - Inprogress
# Scenario: SFDEV-4578 Verify shipment for registered user order with One Time Use coupon Pr150Prod, %OFF Pr5Prod and Free Shipping
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4585" to bag
# And I click on "minicart link"
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-1" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4578-Registered User with PLCC card"


# # # # # # # # # SFDEV-4577 - Registered User - Place order
# # # # # # # # # @Executed - Inprogress
# Scenario: SFDEV-4577 Verify shipment for registered user order with % OFF Pr5Prod, F&F Pr150Prod and Free Shipping
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product2 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-1" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4577-Registered User with PLCC card"


# # # # # # # # # SFDEV-4576 - Registered User - Place order
# # # # # # # # # @Executed - Inprogress
# Scenario: SFDEV-4576 Verify shipment for registered user order with ODS Pr4Prod, QTY Offer N for $XX Pr10Prod and Free Shipping
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "5000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-1" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4576-Registered User with PLCC card"


# # SFDEV-4575 - Registered User - Place order
# # @Executed - Inprogress
# Scenario: SFDEV-4575 Verify shipment for registered user order with GWP Pr50Prod, F&F Pr150Prod, GWP Pr190Ord and Free Shipping with HBC PLCC
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "5000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-1" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4575-Registered User with PLCC card"


# # # # SFDEV-4574 - Registered User - Place order[Buy More Save More Pr20Prod, Purchase With Purchase Pr50Prod]
# # # # @Executed - 
# Scenario: SFDEV-4574 Verify order shipment and Free Shipping, placed by registered customer, paid with Mastercard.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-1" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Master Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4574-Registered User with Master card"

# # # # # SFDEV-4572 - Registered User - Place order[BOGO Pr20Prod, GWP Pr50Prod and Free Shipping]
# # # # # @Executed - 
# Scenario: SFDEV-4572 Verify order shipment for registered user with BOGO Pr20Prod, GWP Pr50Prod and Free Shipping.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-1" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Master Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4572-Registered User with Master card"

# # # # # SFDEV-4571 - Registered User - Place order[Simple Offer Pr5Prod and Free Shipping]
# # # # # @Executed - 
# Scenario: SFDEV-4571 Verify order placed by registered customer with Simple Offer Pr5Prod and Free Shipping.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4581" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-2661" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-1" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4571-Registered User with Visa card"

# # # # SFDEV-3813 - Guest User - Place order[single item, multiple quantities ]
# # # # @Executed - InProgress-88513859-Product is not available
# Scenario: SFDEV-3813 Verify La Baie (accent characters) website order with EMC, with a single item, multiple quantities, using a PLCC card, shipped standard.
# Given I am on the website
# And I add "Product1 SFDEV-3813" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-3813" in the textbox
# And Wait for "2000" mili seconds
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-3813-Guest User with PLCC card"

# # # # SFDEV-3310 - Registered User - Place order[multiple items multiple quantities]
# # # # @Executed - 
# Scenario: SFDEV-3310 Verify for Bay website order for a registered user, multiple items multiple quantities, shipment paid by Amex.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product2 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product1 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-3310" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Amex Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-3310-Registered User with Amex card"

# # # # SFDEV-3308 - Registered User - Place order[multiple items multiple quantities]
# # # # @Executed - 
# Scenario: SFDEV-3308 Verify a split shipment for Bay website order for a registered user, multiple items multiple quantities, standard shipment paid by Visa.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-3308" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-3308" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-3308" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-3308-Registered User with Visa card"

# # # # SFDEV-3307 - Registered User - Place order[multiple items multiple quantities]
# # # # @Executed - Inprgress-89052388-Item is not available
# Scenario: SFDEV-3307 Verify a split shipment for Bay website order for a registered user, multiple items multiple quantities, standard shipment and paid by PLCC.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-3307" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-3307" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-3307-Registered User with PLCC card"

# # # # SFDEV-3227 - Guest User - Place order[multiple items multiple quantities]
# # # # @Executed - 
# Scenario: SFDEV-3227 Verify for Bay website guest order paid with Loyalty Card for multiple items multiple quantities,shipped using standard by DC.
# Given I am on the website
# And I add "Product2 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-3227" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-3227" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "click promo code button"
# And Wait for "1000" mili seconds
# And I enter my "Order Level promo code" in the textbox
# And Wait for "6000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Loyalty Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-3227-Guest User with Loyalty card"


# # # # SFDEV-2661 - Registered User - Place order[multiple items multiple quantities]
# # # # @Executed - 
# Scenario: SFDEV-2661 Verify for La baie website order paid using Visa for multiple items having multiple quantities placed by a registered user and BMSM promo for BOPIS items.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-2661" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-2661" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2661" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "click promo code button"
# And Wait for "1000" mili seconds
# And I enter my "Order Level promo code" in the textbox
# And Wait for "6000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2661-Registered User with Visa card"


# # # # SFDEV-4582 - Guest User - Place order  [multiple items having multiple quantities]
# # # # @Executed - inproress - fixing issue in store selector section
# Scenario: SFDEV-4582 Verify for Bay order for multiple quantities of BOPIS item for the guest user using Mastercard and GC.
# Given I am on the website
# And I add "BOPIS Item1 SFDEV-4582" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Select BOPIS SFDEV2580 store in PDP
# And Wait for "3000" mili seconds
# And click on home logo
# And I add "BOPIS Item2 SFDEV-4582" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Select BOPIS SFDEV2580 store in PDP
# And Wait for "3000" mili seconds
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "In-Store Pickup Person details" in the textbox
# And I click on - "checkout shipping instore pickup save and continue button"
# And Wait for "2000" mili seconds
# And I enter my "Master Card Details" in the textbox
# And I click on - "add gift card button"
# And I enter my "Gift Card Number-1" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-4582-Guest User with Master Card and Gift Card"

# # # # # SFDEV-3817 - Guest User - Place order[multiple items multiple quantities]
# # # # # @Executed - Automated/Passed
# Scenario: SFDEV-3817 Verify order shipment to Quebec for a Bay website guest order placed with Amex+2GCs with 3 lines single quantity shipped using standard shipping.
# Given I am on the website
# And I add "Product1 SFDEV-3817" to bag
# And I click on "minicart link"
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "6000" mili seconds
# # And I add "Product2 SFDEV-3817" to bag
# # And I click on "minicart link"
# # And Wait for "4000" mili seconds
# # And click on home logo
# And I add "Product3 SFDEV-3817" to bag
# And I click on "minicart link"
# And Wait for "2000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-3817" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Amex Card Details" in the textbox
# And I click on - "add gift card button"
# And I enter my "Gift Card Number-1" in the textbox
# And Wait for "3000" mili seconds
# And I enter my "Gift Card Number-2" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "checkout payment section save and continue button"
# # # And I click on - "checkout place order button"
# # # And Wait for "4000" mili seconds
# # # And I notice order confirmation page thank you message should say "Thank you!"
# # # And Save Order ID - "SFDEV-3817-Guest User with Master and Gift card"


# # # # SFDEV-3751 - Guest User - Place order[multiple items multiple quantities]
# # # # @Executed - 
# Scenario: SFDEV-3751 Verify Bay guest website order placement for a PLCC+ 2 GC.
# Given I am on the website
# And I add "Product1 SFDEV-2616" to bag
# And I click on "minicart link"
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "6000" mili seconds
# And I add "Product2 SFDEV-2616" to bag
# And I click on "minicart link"
# And Wait for "2000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2623" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "different billing address checkbox"
# And Wait for "2000" mili seconds
# And I enter my "Billing address-SFDEV-3751" in the textbox
# And I click on - "add gift card button"
# And I enter my "Gift Card Number-1-SFDEV-3751" in the textbox
# And Wait for "3000" mili seconds
# And I enter my "Gift Card Number-2-SFDEV-3751" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-3751-Guest User with Master and Gift card"


# # # SFDEV-2657 - registered user with Amex - Place order  [single item having single quantity]
# # # @Executed - Automated/Passed - check item add to bag
# Scenario: SFDEV-2657 Verify order placed by registered user with Amex, %off and Standard shipping method
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product SFDEV-2657" to bag
# And I click on "minicart link"
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "2000" mili seconds
# And I enter my "Shipping address-SFDEV-2657" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "10000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "click promo code button"
# And Wait for "1000" mili seconds
# And I enter my "Order Level promo code" in the textbox
# And Wait for "6000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Amex Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2657-Registered User with Amex Card"


# # SFDEV-2652 - Guest user with Amex - Place order  [multi line multi quantity]
# # @Executed - Automated/Passed - check item add to bag
# Scenario: SFDEV-2652 Verify Bay multi line multi quantity guest order with Odd2DecimalOrderTotal paid with AMEX with Standard shipping & %Off promo.
# Given I am on the website
# And Wait for "4000" mili seconds
# And I add "Product1 SFDEV-2642" to bag
# And I click on "minicart link"
# And I am adding quantity
# And click on home logo
# And Wait for "4000" mili seconds
# And I add "Product SFDEV-2652" to bag    
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2652" in the textbox
# And Wait for "5000" mili seconds
# And I click on - "click promo code button"
# And Wait for "1000" mili seconds
# And I enter my "Order Level promo code" in the textbox
# And Wait for "6000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Amex Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2618-Guest User with Amex card"


# # # # SFDEV-2651 - Guest User - Place order[multiple items single quantity]
# # # # @Executed - 
# Scenario: SFDEV-2651 Verify for Bay website guest order paid with Mastercard+GC for multiple items single quantity with standard shipping service and shipped by DC & Store.
# Given I am on the website
# And I add "Product1 SFDEV-2651" to bag
# And I click on "minicart link"
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "6000" mili seconds
# And I add "Product2 SFDEV-2651" to bag
# And I click on "minicart link"
# And Wait for "3000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2623" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Master Card Details" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "add gift card button"
# And Wait for "3000" mili seconds
# And I enter my "Gift Card Number-1-SFDEV-2651" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2651-Guest User with Master and Gift card"

# # SFDEV-2649 - Registered User - Place order[multiple lines and quantities]
# # @Executed - Automated/Passed
# Scenario: SFDEV-2649 Verify for Bay Website registered Order Paid With PLCC Card with multiple lines and quantities and %OFF promo, NextBusDay by DC.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-2585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2657" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "6000" mili seconds
# And Select "Next Business Day" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "click promo code button"
# And Wait for "1000" mili seconds
# And I enter my "Order Level promo code" in the textbox
# And Wait for "6000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2649-Registered User with PLCC card"


# # SFDEV-2648 - Guest User - Place order[multiple items with multiple quantities]
# # @Executed - 
# Scenario: SFDEV-2648 Verify for Bay website guest order paid with a PLCC for multiple items with multiple quantities,with standard, BMSM promo.
# Given I am on the website
# And Wait for "3000" mili seconds
# And I add "Product1 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product1 SFDEV-2585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "2000" mili seconds
# And I click on "checkout as guest button in cart page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2648" in the textbox
# And Wait for "6000" mili seconds
# And Select "Standard" shipping method
# And Wait for "3000" mili seconds
# And I click on - "click promo code button"
# And Wait for "1000" mili seconds
# And I enter my "Order Level promo code" in the textbox
# And Wait for "6000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2648-Guest User with PLCC card"

# # SFDEV-2637 - Guest User - Place order[multiple items with multiple quantities]
# # @Executed - InProgress-two items are not available(90300949,88906943)
# Scenario: SFDEV-2637 Verify a Bay website order creation by guest user paid by HBC Mastercard and has Multiple items (1 item is physical Gift Card) with multiple quantities, shipped by DC with Standard delivery.
# Given I am on the website
# And Wait for "3000" mili seconds
# And I add "Product SFDEV-2634" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-2637" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product3 SFDEV-2637" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product4 SFDEV-2637" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "2000" mili seconds
# And I click on "checkout as guest button in cart page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2617" in the textbox
# And Wait for "6000" mili seconds
# And Select "Standard" shipping method
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "HBC Card" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2637-Guest User with HBC card"

# # SFDEV-2631 - Registered User - Place order[Multiple Items & Multiple Quantities]
# # @Executed - Automated/Passed
# Scenario: SFDEV-2631 Verify for Bay website registered user order with Multiple Items & Multiple Quantities paid by VISA,with Rush/Express delivery.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-2643" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "6000" mili seconds
# And click on home logo
# And Wait for "1000" mili seconds
# And I add "Product1 SFDEV-3817" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2617" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "6000" mili seconds
# And Select "Express" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2631-Registered User with Visa card"

# # SFDEV-2628 - Registered User - Place order[Multiple Items & Multiple Quantities]
# # @Executed - Automated/Passed
# Scenario: SFDEV-2628 Verify for Bay website orders paid using PLCC for multiple items having multiple quantities placed by a registered user when items are shipped using next business day.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "6000" mili seconds
# And click on home logo
# And Wait for "1000" mili seconds
# And I add "Product2 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-3307" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "6000" mili seconds
# And Select "Next Business Day" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2628-Registered User with PLCC card"

# # SFDEV-2626 - Guest User - Place order[multiple items with multiple quantities]
# # @Executed - InProgress-In sheet mentioned PLCC but in Jira HBC Card(90300949-Item is not available)
# Scenario: SFDEV-2626 Verify for Bay website MultipleItems, MultipleQuantities order by guest user & free DC shipping paid by PLCC Card & standard.
# Given I am on the website
# And Wait for "3000" mili seconds
# And I add "Product SFDEV-2634" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "6000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-2637" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "3000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "2000" mili seconds
# And I click on "checkout as guest button in cart page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2626" in the textbox
# And Wait for "6000" mili seconds
# And Select "Standard" shipping method
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2626-Guest User with PLCC card"

# # SFDEV-2622 - Guest User - Place order[Single item having single quantity]
# # @Executed - Automated/Passed
# Scenario: SFDEV-2622 Verify for Bay website, order paid using any card for Single item having single quantity placed by a guest user when item is shipped using standard by DC.
# Given I am on the website
# And Wait for "3000" mili seconds
# And I add "Product SFDEV-2634" to bag
# And I click on "minicart link"
# And Wait for "3000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "2000" mili seconds
# And I click on "checkout as guest button in cart page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2622" in the textbox
# And Wait for "6000" mili seconds
# And Select "Standard" shipping method
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2622-Guest User with Visa card"

# # SFDEV-2639 - Guest User - Place order[multiple items multi quantities]
# # @Executed - InProgress-(item is not available-90300949)
# Scenario: SFDEV-2639 Verify for Bay website order placed by guest user for multiple items multi quantities shipped by DC, paid by HBC Mastercard using Rush/Express delivery.
# Given I am on the website
# And Wait for "3000" mili seconds
# And I add "Product SFDEV-2634" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "6000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product4 SFDEV-2637" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "6000" mili seconds
# And click on home logo
# And Wait for "3000" mili seconds
# And I add "Product2 SFDEV-2637" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "6000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "2000" mili seconds
# And I click on "checkout as guest button in cart page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2617" in the textbox
# And Wait for "6000" mili seconds
# And Select "Express" shipping method
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "HBC Card" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2639-Guest User with HBC Card"

# # SFDEV-2562 - Registered User - Place order[Multiple Items & Multiple Quantities]
# # @Executed - Automated/Passed
# Scenario: SFDEV-2562 Verify for Bay website order paid with PLCC for multiple items having multiple quantities and % Off Promo placed by a registered user when items are shipped using Standard by DC.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product SFDEV-2562" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "6000" mili seconds
# And click on home logo
# And Wait for "1000" mili seconds
# And I add "Product2 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2583" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "6000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "PLCC Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2562-Registered User with PLCC card"

# # SFDEV-2561 - Registered User - Place order[Multiple Items & Multiple Quantities]
# # @Executed - Automated/Passed
# Scenario: SFDEV-2561 Verify for Bay website order paid with Visa for multiple items having multiple quantities and % Off Promo placed by a registered user when items are shipped using Standard by DC.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product SFDEV-2634" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "6000" mili seconds
# And click on home logo
# And Wait for "1000" mili seconds
# And I add "Product2 SFDEV-2561" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "6000" mili seconds
# And click on home logo
# And Wait for "1000" mili seconds
# And I add "Product3 SFDEV-2561" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2561" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "6000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Visa Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2561-Registered User with Visa card"

# # SFDEV-2559 - Registered User - Place order[Multiple Items & Multiple Quantities]
# # @Executed - Automated/Passed
# Scenario: SFDEV-2559 Verify for Bay website order paid with Amex for multiple items having multiple quantities and % Off Promo Code placed by a registered user when items are shipped using Standard by DC.
# Given I am on the website
# And I login to the application with valid credentials
# And Wait for "3000" mili seconds
# And Remove saved addresses from my account page
# And Remove saved credit cards from my account page
# And Wait for "3000" mili seconds
# And Remove products from cart page
# And Wait for "3000" mili seconds
# And Click on Start Shopping button
# And I add "Product1 SFDEV-2559" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "6000" mili seconds
# And click on home logo
# And Wait for "1000" mili seconds
# And I add "Product2 SFDEV-4585" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "6000" mili seconds
# And click on home logo
# And Wait for "1000" mili seconds
# And I add "Product3 SFDEV-2561" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And Wait for "9000" mili seconds
# When I click on - "Add_new_shipping_address_in_checout_page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2559" in the textbox
# And Wait for "2000" mili seconds
# And I click on - "checkout save shipping address button"
# And Wait for "6000" mili seconds
# And Select "Standard" shipping method
# And Wait for "10000" mili seconds
# And Refresh current page
# And Wait for "3000" mili seconds
# And I click on - "checkout shipping save and continue button"
# And I enter my "Amex Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2559-Registered User with Amex card"


# # # SFDEV-2598 - Guest User - Place order  [single line single quantity]
# # # @Executed - Automated/Passed
# Scenario: SFDEV-2598 Verify for Bay website order paid using 2 Gift cards for a single line single quantity placed by guest user using Next Business Day.
# Given I am on the website
# And Wait for "4000" mili seconds
# And I add "Product SFDEV-2644" to bag
# And I click on "minicart link"
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2598" in the textbox
# And Wait for "9000" mili seconds
# And Select "Next Business Day" shipping method
# And I click on - "checkout shipping save and continue button"
# And I click on - "add gift card button"
# And Wait for "3000" mili seconds
# And I enter my "Gift Card Number-1-SFDEV-2598" in the textbox
# And Wait for "3000" mili seconds
# And I enter my "Gift Card Number-2-SFDEV-2598" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2598-Guest User with Gift card"


# # # SFDEV-2596 - Guest User - Place order  [multiple line single quantity]
# # # @Executed - Automated/Passed-(90043120 -item is not available now)
# Scenario: SFDEV-2596 Verify for Bay website order paid using HBC Mastercard for multiple line single quantity placed by guest user when 1 item is shipped using rush/express from store and the other is from DC.
# Given I am on the website
# And I add "Product1 SFDEV-2596" to bag
# And I click on "minicart link"
# And Wait for "2000" mili seconds
# And click on home logo
# And Wait for "6000" mili seconds
# And I add "Product2 SFDEV-2620" to bag
# And I click on "minicart link"
# And Wait for "3000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And Wait for "3000" mili seconds
# And I enter my "Shipping address-SFDEV-2596" in the textbox
# And Wait for "8000" mili seconds
# And Select "Express" shipping method
# And I click on - "checkout shipping save and continue button"
# And I enter my "HBC Card" in the textbox
# And Wait for "3000" mili seconds
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2596-Guest User with HBC Master Card"


# # # SFDEV-2583 - Guest User - Place order  [single item having multiple quantity]
# # # @Executed - Automated/Passed
# Scenario: SFDEV-2583 Verify for Bay website order paid with Amex for a single item having multiple quantity, placed by a guest user using Rush/Express shipping.
# Given I am on the website
# And I add "Product2 SFDEV-2620" to bag
# And I click on "minicart link"
# And Wait for "1000" mili seconds
# And I am adding quantity
# And Wait for "4000" mili seconds
# And I click on "checkout button in cart page"
# And I click on "checkout as guest button in cart page"
# And I enter my "Shipping address-SFDEV-2583" in the textbox
# And Wait for "9000" mili seconds
# And Select "Express" shipping method
# And I click on - "checkout shipping save and continue button"
# And I enter my "Amex Card Details" in the textbox
# And I click on - "checkout payment section save and continue button"
# # And I click on - "checkout place order button"
# # And Wait for "4000" mili seconds
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Save Order ID - "SFDEV-2644-Guest User with Visa card"

# # # # # SFDEV-2623 - Guest User - Place order  [multi line multi quantity]
# # # # # @Executed - Inprogress
# Scenario: SFDEV-2623 Verify order paid using PayPal for multi line multi quantity placed by a guest user.
# Given I am on the website
# And I add "Product1 SFDEV-2623" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "4000" mili seconds
# And click on home logo
# And I add "Product2 SFDEV-2623" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Login to paypal
# And Wait for "20000" mili seconds
# And I enter my "Shipping address-SFDEV-2623" in the textbox
# # And I click on - "checkout place order button"
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Verify "order confirmation page order id" is displayed
# # And Save Order ID - "SFDEV-2623-Guest User with Paypal"

# # # # # SFDEV-2625 - Guest User - Place order  [multi line multi quantity]
# # # # # @Executed - Inprogress
# Scenario: SFDEV-2625 Verify order paid with Paypal for smulti line multi quantity placed by a guest user.
# Given I am on the website
# And I add "Product1 SFDEV-2625" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "4000" mili seconds
# And click on home logo
# And I add "Product2 SFDEV-2625" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Login to paypal
# And Wait for "20000" mili seconds
# And I enter my "Shipping address-SFDEV-2625" in the textbox
# # And I click on - "checkout place order button"
# # And I notice order confirmation page thank you message should say "Thank you!"
# # And Verify "order confirmation page order id" is displayed
# # And Save Order ID - "SFDEV-2625-Guest User with Paypal"

# # # # # SFDEV-2643 - Guest User - Place order  [single item multi quantity]
# # # # # @Executed - Inprogress
# Scenario: SFDEV-2643 Verify order placed by guest user for single item multi quantity, paid by PayPal using NextBusinessDay (Purolator) delivery.
# Given I am on the website
# And I add "Product1 SFDEV-2643" to bag
# And I click on "minicart link"
# And I am adding quantity
# And Wait for "4000" mili seconds
# And Login to paypal
# And Wait for "20000" mili seconds
# And I enter my "Shipping address-SFDEV-2620" in the textbox
# And I click on - "checkout place order button"
# And I notice order confirmation page thank you message should say "Thank you!"
# And Verify "order confirmation page order id" is displayed
# And Save Order ID - "SFDEV-2643-Guest User with Paypal card"

