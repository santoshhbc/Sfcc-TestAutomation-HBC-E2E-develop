Feature: HBC End to end - Place Order for BOPIS Items for Registered/Guest users using Amex/Master/Visa/PLCC/GiftCard

# # # # # SFDEV-2591 - Guest User - Place order  [single line single quantity]
# # # # # @Executed - **March 4 - Rework on -Products
Scenario: SFDEV-2591 Verify for Bay BOPIS order paid using Virtual Gift Card for a single line single quantity placed by a guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2591" to bag
And I click on "minicart link"
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I enter my "Amex Card Details" in the textbox
And Wait for "2000" mili seconds
And I enter my "Billing address-SFDEV-2591" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2591-Guest User with Amex Card"


# # # # # SFDEV-2588 - Guest User - Place order  [single line single quantity]
# # # # # @Executed - **March 4 - Rework on -Products
Scenario: SFDEV-2591 Verify for Bay BOPIS order paid using Virtual Gift Card for a single line single quantity placed by a guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2588" to bag
And I click on "minicart link"
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I enter my "Amex Card Details" in the textbox
And Wait for "2000" mili seconds
And I enter my "Billing address-SFDEV-2591" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2591-Guest User with Amex Card"


# # # # # SFDEV-2590 - Guest User - Place order  [single line single quantity]
# # # # # @Executed - **March 4 - Rework on -Products- gift cards
Scenario: SFDEV-2590 Verify for Bay BOPIS order paid using Virtual Gift Card for a single line single quantity placed by a guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2590" to bag
And I click on "minicart link"
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-1-SFDEV-2590" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2590-Guest User with Virtual Gift card"


# # # SFDEV-4582 - Guest User - Place order  [multiple items having multiple quantities]
# # # @Executed - inprogress - fixing issue in store selector section
Scenario: SFDEV-4582 Verify for Bay order for multiple quantities of BOPIS item for the guest user using Mastercard and GC.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 4582" to bag
And I click on "minicart link"
And I am adding quantity
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And click on home logo
And I add "Product2 New Data 4582" to bag
And I click on "minicart link"
And I am adding quantity
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I enter my "Master Card Details" in the textbox
And I click on - "add gift card button"
And I enter my "Gift Card Number-1" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4582-Guest User with Master Card and Gift Card"


# # # # # SFDEV-2640 - Guest User - Place order  [multi line multi quantity]
# # # # # @Executed - **March 2 - Rework on - Product1 SFDEV-2661 - gift cards
Scenario: SFDEV-2640 Verify for Bay multi line multi quantity order placed by guest user for BOPIS and DC items, paid by VGC using Standard shipping.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2640" to bag
And I click on "minicart link"
And I am adding quantity
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And click on home logo
And I add "Product2 New Data 2640" to bag
And I click on "minicart link"
And I am adding quantity
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And I enter my "Gift Card Number-1" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2640-Guest User with Gift Card"


# # # # # SFDEV-2595 - Guest User - Place order  [multi line multi quantities]
# # # # # @Executed - **March 2 - Rework on - BOPIS Item2 SFDEV-4582 - gift cards
Scenario: SFDEV-2595 Verify for Bay website order paid using MasterCard + GC and Standard as Shipping method for multi line multi quantities placed by guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2595" to bag
And I click on "minicart link"
And I am adding quantity
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And click on home logo
And I add "Product2 New Data 2595" to bag
And I click on "minicart link"
And I am adding quantity
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I enter my "Master Card Details" in the textbox
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And I enter my "Gift Card Number-1-SFDEV-2595" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2595-Guest User with Master Card and Gift Card"


# # # # # SFDEV-2593 - Guest User - Place order  [single line single quantity]
# # # # # @Executed - **March 2 - Rework on  - gift cards
Scenario: SFDEV-2593 Verify for Bay website Store order paid using HBC MasterCard + 1 GC, standard as shipping method for a single line single quantity placed by a guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-2596" to bag
And I click on "minicart link"
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I enter my "HBC Card" in the textbox
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And I enter my "Gift Card Number-1-SFDEV-2593" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2593-Guest User with HBC Card and Gift Card"


# # # # # SFDEV-2587 - Guest User - Place order  [single line single quantity]
# # # # # @Executed - **March 2 - Rework on -BOPIS Item2 SFDEV-4582- gift cards
Scenario: SFDEV-2587 Verify for Bay BOPIS order paid using 2 gift cards for a single line single quantity placed by a guest user when the item is picked up in-store.
Given I am on the website
And Wait for "3000" mili seconds
And I add "BOPIS Item2 SFDEV-4582" to bag
And I click on "minicart link"
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-1-SFDEV-2587" in the textbox
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-2-SFDEV-2587" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2587-Guest User with 2 Gift card"


# # # # # SFDEV-2586 - Guest User - Place order  [single line single quantity]
# # # # # @Executed - **March 2 - Rework on -BOPIS Item2 SFDEV-4582- gift cards
Scenario: SFDEV-2586 Verify for a Bay website BOPIS order paid with a VGC for a single item having a single quantity, placed by a guest user returns to Pick option.
Given I am on the website
And Wait for "3000" mili seconds
And I add "BOPIS Item2 SFDEV-4582" to bag
And I click on "minicart link"
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-1-SFDEV-2586" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2586-Guest User with Gift card"


# # # # # SFDEV-2578 - Guest User - Place order  [multiple items having multiple quantities]
# # # # # @Executed - **March 4 - Rework on -Products
Scenario: SFDEV-2578 Verify for a Bay website order paid with HBC Master card with multiple items having multiple quantities, BOPIS, placed by a Guest User and csr cancel.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2578" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "3000" mili seconds
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 New Data 2578" to bag
And I click on "minicart link"
And I am adding quantitys
And Wait for "3000" mili seconds
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I enter my "HBC Card" in the textbox
And Wait for "2000" mili seconds
And I enter my "Billing address-SFDEV-2591" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2578-Guest User with HBC Card"


# # # # # SFDEV-2632 - Guest User - Place order  [multiple items having single quantity]
# # # # # @Executed - **March 4 - Rework on -Products,BOPIS
# Scenario: SFDEV-2632 Verify for Bay website order with BOPIS item and STH item sourced from store paid by Mastercard for multiple items having single quantity for registered user.
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
And I add "Product1 New Data 2632" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "3000" mili seconds
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 New Data 2632" to bag
And I click on "minicart link"
And I am adding quantitys
And Wait for "3000" mili seconds
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I enter my "Master Card Details" in the textbox
And Wait for "2000" mili seconds
And I enter my "Billing address-SFDEV-2632" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2632-Guest User with HBC Card"



# # # SFDEV-2641 - Guest User - Place order  [multiple items multi quantities]
# # # @Executed - **March 4 - Rework on  - products,add to bag,BOPIS flow
Scenario: SFDEV-2641 Verify for Bay BOPIS +Store Ship order placed by guest user for multiple items multi quantities, paid by PLCC using Rush/Express.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-2641" to bag
And I click on "minicart link"
And I am adding quantity
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "2000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-2641" to bag
And I click on "minicart link"
And I am adding quantity
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2617" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And Wait for "2000" mili seconds
And I enter my "PLCC Card Details" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2641-Guest User with PLCC Card"


# # # SFDEV-2594 - Guest User - Place order  [single line multiple quantities]
# # # @Executed - Inprogress
Scenario: SFDEV-2594 Verify BOPIS order paid using Visa for a single line multiple quantities placed by a guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2694" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2594" in the textbox
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2594-Guest User with VISA card"


# # # SFDEV-2661 - Registered User - Place order[multiple items multiple quantities]
# # # @Executed - 
Scenario: SFDEV-2661 Verify for La baie website order paid using Visa for multiple items having multiple quantities placed by a registered user and BMSM promo for BOPIS items.
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
And I add "Product1 SFDEV-2661" to bag
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
And I enter my "Shipping address-SFDEV-2661" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "click promo code button"
And Wait for "1000" mili seconds
And I enter my "Order Level promo code" in the textbox
And Wait for "6000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2661-Registered User with Visa card"


# # # SFDEV-2580 - Guest User - Place order  [multiple items having multiple quantities]
# # # @Executed - inprogress - (element intractable issue)
Scenario: SFDEV-2580 Verify BOPIS order paid with VISA with multiple items having multiple quantities placed by a Guest User
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2580" to bag
And I click on "minicart link"
And I am adding quantity
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 New Data 2580" to bag
And I click on "minicart link"
And I am adding quantity
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Wait for "2000" mili seconds
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2580-Guest User with VISA card"