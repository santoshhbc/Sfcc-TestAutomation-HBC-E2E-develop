Feature: HBC End to end - Place Order Registered/Guest users using Visa Card


# # SFDEV-2634 - Registered User - Place order  [French registered user]
# # @Executed - Automated/Passed
Scenario: SFDEV-2634 Verify the order placement as French registered user with single item by visa card
Given I am on the website
# And I click on French link
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
And I add "Product1 New Data 2634" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-French" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "8000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "5000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2634-French Registered User with VISA card"


# # # SFDEV-2616 - Guest User - Place order  [multiple items having multiple quantities]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2616 Verify order paid using Visa for multiple items having multiple quantities placed by a guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2616" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 New Data 2616" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2616" in the textbox
And Wait for "9000" mili seconds
And Select "Express" shipping method
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2616-Guest User with VISA card"


# # # SFDEV-2619 - Guest User - Place order  [Single item having single quantity]
# # # @Executed - Test Data issue-Unable to select size  -  0600090150935
Scenario: SFDEV-2619 Verify order paid using Visa for Single item having single quantity placed by a guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2619" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2619" in the textbox
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2619-Guest User with VISA card"


# # # SFDEV-2618 - Guest User - Place order  [single item having multiple quantities]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2618 Verify order paid using Visa for a single item having multiple quantities placed by a guest user.
Given I am on the website
And Wait for "4000" mili seconds
And I add "Product SFDEV-2618" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "4000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2618" in the textbox
And Wait for "8000" mili seconds
And Select "Express" shipping method
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2618-Guest User with VISA card"


# # # SFDEV-2631 - Registered User - Place order[Multiple Items & Multiple Quantities]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2631 Verify for Bay website registered user order with Multiple Items & Multiple Quantities paid by VISA,with Rush/Express delivery.
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
And I add "Product1 SFDEV-2643" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "6000" mili seconds
And click on home logo
And Wait for "1000" mili seconds
And I add "Product1 SFDEV-3817" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2617" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "8000" mili seconds
And Select "Express" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2631-Registered User with Visa card"


# # # SFDEV-2617 - Guest User - Place order  [single line having multiple quantities]
# # # @Executed - Automated/Passed(89299682 item not avalaible now)
Scenario: SFDEV-2617 Verify order paid using Visa for single line having multiple quantities placed by a guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2617" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-1" in the textbox
And Wait for "9000" mili seconds
And Select "Next Business Day" shipping method
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2617-Guest User with VISA card"


# # # SFDEV-2620 - Guest User - Place order  [multi line item less than 15$]
# # # @Executed - Passed
Scenario: SFDEV-2620 Verify the order placement using VISA card as guest user with multi line item less than 15$.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product with less15$" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-2620" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product3 SFDEV-2620" to bag
And I click on "minicart link"
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2620" in the textbox
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2620 -Guest User with VISA card"



# # # SFDEV-2585 - Guest User - Place order  [single quantity]
# # # @Executed - Inprogress-(Item has been changed)
Scenario: SFDEV-2585 Verify order paid with Visa for a single item having a single quantity and sourced for a DC, placed by a guest user using Rush/Express shipping
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2585" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2585" in the textbox
And Wait for "8000" mili seconds
And Select "Express" shipping method
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2585 - Guest User with VISA card"


# # # SFDEV-2584 - Guest User - Place order  [multiple items having single quantity]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2584 Verify order paid with Visa for multiple items having single quantity, placed by a guest user using Rush/Express shipping.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2584" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-2584" to bag
And I click on "minicart link"
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2584" in the textbox
And Wait for "8000" mili seconds
And Select "Express" shipping method
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2584-Guest User with VISA card"

# # # SFDEV-3308 - Registered User - Place order[multiple items multiple quantities]
# # # @Executed - 
Scenario: SFDEV-3308 Verify a split shipment for Bay website order for a registered user, multiple items multiple quantities, standard shipment paid by Visa.
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
And I add "Product1 SFDEV-3308" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "2000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-3308" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-3308" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-3308-Registered User with Visa card"


# # # SFDEV-2582 - Guest User - Place order  [single item having single quantity]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2582 Verify order paid with Visa for a single item having single quantity, placed by a guest user using Standard shipping.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2582" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2582" in the textbox
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2582 -Guest User with VISA card"



# # # SFDEV-2644 - Guest User - Place order  [Multi items Single quantity]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2644 Verify order placed by a guest user for Multi items Single quantity paid by VISA using NextBusinessDay delivery.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2644" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "4000" mili seconds
And I add "Product2 New Data 2644" to bag
And I click on "minicart link"
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2644" in the textbox
And Wait for "8000" mili seconds
And Select "Next Business Day" shipping method
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2644-Guest User with Visa card"


# # # SFDEV-4571 - Registered User - Place order[Simple Offer Pr5Prod and Free Shipping]
# # # @Executed - 
Scenario: SFDEV-4571 Verify order placed by registered customer with Simple Offer Pr5Prod and Free Shipping.
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
And I add "Product1 SFDEV-4581" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "2000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-2661" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-1" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4571-Registered User with Visa card"


# # # SFDEV-2622 - Guest User - Place order[Single item having single quantity]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2622 Verify for Bay website, order paid using any card for Single item having single quantity placed by a guest user when item is shipped using standard by DC.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product SFDEV-2634" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2622" in the textbox
And Wait for "8000" mili seconds
And Select "Standard" shipping method
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2622-Guest User with Visa card"


# # # SFDEV-2561 - Registered User - Place order[Multiple Items & Multiple Quantities]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2561 Verify for Bay website order paid with Visa for multiple items having multiple quantities and % Off Promo placed by a registered user when items are shipped using Standard by DC.
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
And I add "Product SFDEV-2634" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "6000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-2561" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "6000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
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
And I enter my "Shipping address-SFDEV-2561" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "8000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2561-Registered User with Visa card"



# # # SFDEV-2633 - Registered User - Place order[Multiple Items & Multiple Quantities]
# # # @Executed - **March 4 - Rework on  - products,add to bag
Scenario: SFDEV-2633 Verify for Bay website store ship multi items multi quantity order placed by registered paid by Visa using Standard delivery & Cancel Reason "Inventory not available" short pick, short pack order
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
And I add "Product1 New Data 2633" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "6000" mili seconds
And click on home logo
And Wait for "1000" mili seconds
And I add "Product2 New Data 2633" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2642" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "8000" mili seconds
And Select "Standard" shipping method
And Wait for "6000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2633-Registered User with Visa card"


# # # SFDEV-2597 - Registered User - Place order[single line single quantity]
# # # @Executed - **March 4 - Rework on  - products,add to bag,shipping and billing address is not available in test data
Scenario: SFDEV-2597 Verify for Bay website order paid using Visa for a single line single quantity placed by guest user when item is shipped using standard from DC.
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
And I add "Product1 New Data 2597" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2642" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "8000" mili seconds
And Select "Standard" shipping method
And Wait for "6000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2597-Registered User with Visa card"