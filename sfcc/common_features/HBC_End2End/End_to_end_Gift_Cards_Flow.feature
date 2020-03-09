Feature: HBC End to end - Place Order Registered/Guest users using split cards


# # # # SFDEV-3817 - Guest User - Place order[multiple items multiple quantities]
# # # # @Executed - Automated/Passed-3rd item is not available in latest sheet
Scenario: SFDEV-3817 Verify order shipment to Quebec for a Bay website guest order placed with Amex+2GCs with 3 lines single quantity shipped using standard shipping.
Given I am on the website
And Wait for "2000" mili seconds
And I add "Product1 SFDEV-3817" to bag
And I click on "minicart link"
And Wait for "2000" mili seconds
And click on home logo
And Wait for "6000" mili seconds
And I add "Product2 SFDEV-3817" to bag
And I click on "minicart link"
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-3817" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Amex Card Details" in the textbox
And I click on - "add gift card button"
And I enter my "Gift Card Number-1" in the textbox
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-2" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-3817-Guest User with Master and Gift card"


# # # # # SFDEV-3751 - Guest User - Place order[multiple items multiple quantities]
# # # # # @Executed - 
Scenario: SFDEV-3751 Verify Bay guest website order placement for a PLCC+ 2 GC.
Given I am on the website
And Wait for "2000" mili seconds
And I add "Product1 New Data 3751" to bag
And I click on "minicart link"
And Wait for "2000" mili seconds
And click on home logo
And Wait for "6000" mili seconds
And I add "Product2 New Data 3751" to bag
And I click on "minicart link"
And Wait for "2000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2623" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And Wait for "2000" mili seconds
And I click on - "different billing address checkbox"
And Wait for "2000" mili seconds
And I enter my "Billing address-SFDEV-3751" in the textbox
And I click on - "add gift card button"
And I enter my "Gift Card Number-1-SFDEV-3751" in the textbox
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-2-SFDEV-3751" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-3751-Guest User with Master and Gift card"


# # # # SFDEV-2651 - Guest User - Place order[multiple items single quantity]
# # # # @Executed - 
Scenario: SFDEV-2651 Verify for Bay website guest order paid with Mastercard+GC for multiple items single quantity with standard shipping service and shipped by DC & Store.
Given I am on the website
And Wait for "2000" mili seconds
And I add "Product1 New Data 2651" to bag
And I click on "minicart link"
And Wait for "2000" mili seconds
And click on home logo
And Wait for "6000" mili seconds
And I add "Product2 New Data 2651" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2623" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Master Card Details" in the textbox
And Wait for "3000" mili seconds
And I click on - "add gift card button"
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-1-SFDEV-2651" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2651-Guest User with Master and Gift card"


# # # # SFDEV-2598 - Guest User - Place order  [single line single quantity]
# # # # @Executed - Automated/Passed
Scenario: SFDEV-2598 Verify for Bay website order paid using 2 Gift cards for a single line single quantity placed by guest user using Next Business Day.
Given I am on the website
And Wait for "4000" mili seconds
And I add "Product1 New Data 2698" to bag
And I click on "minicart link"
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "4000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2598" in the textbox
And Wait for "9000" mili seconds
And Select "Next Business Day" shipping method
And I click on - "checkout shipping save and continue button"
And Wait for "4000" mili seconds
And I click on - "add gift card button"
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-1-SFDEV-2598" in the textbox
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-2-SFDEV-2598" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2598-Guest User with Gift card"



# # # # # SFDEV-2566 - Guest User - Place order  [3 lines single quantity]
# # # # # @Executed - **March 2 - Rework on - Product1 SFDEV-2623 - gift cards
Scenario: SFDEV-2566 Verify guest order placed with PLCC+2GCs with 3 lines single quantity
Given I am on the website
And Wait for "4000" mili seconds
And I add "Product1 New Data 2566" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "6000" mili seconds
And I add "Product2 New Data 2566" to bag
And Wait for "4000" mili seconds
And I click on "minicart link"
And Wait for "3000" mili seconds
And click on home logo
And I add "Product3 New Data 2566" to bag
And I click on "minicart link"
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2566" in the textbox
And Wait for "9000" mili seconds
And Select "Standard" shipping method
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "add gift card button"
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-1-SFDEV-2566" in the textbox
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-2-SFDEV-2566" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2566-Guest User with PLCC and Gift card"


# # # # SFDEV-3756 - Guest User - Place order  [single line single quantity]
# # # # @Executed - **March 2 - Rework on - gift cards
Scenario: SFDEV-3756 Verify website guest Bay order placement for a Mastercard+GC where the entire order amount is covered by GC, item shipped from DC where billing address is UK.
Given I am on the website
And Wait for "2000" mili seconds
And I add "Product1 SFDEV-3756" to bag
And Wait for "2000" mili seconds
And I click on "minicart link"
And Wait for "2000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-3756" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Master Card Details" in the textbox
And Wait for "2000" mili seconds
And I click on - "different billing address checkbox"
And Wait for "2000" mili seconds
And I enter my "Billing address-SFDEV-3756" in the textbox
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And I enter my "Gift Card Number-1-SFDEV-3756" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-3756-Guest User with Mastercard+GC"


# # # # # SFDEV-2769 - Registered User - Place order  [multiple items having multiple quantities]
# # # # # @Executed - **March 2 - Rework on - gift cards
Scenario: SFDEV-2769 Verify for a Bay website order paid with 1 GiftCard for multiple items having multiple quantities and OneTimeUse promo placed by a registered user when items are shipped using Rush/Express by Store and DC.
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
And I add "Product1 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "6000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-2585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2657" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "6000" mili seconds
And Select "Express" shipping method
And Wait for "5000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And I enter my "Gift Card Number-1-SFDEV-2769" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2769-Guest User with Gift Card"


# # # # SFDEV-2654 - Guest User - Place order  [single line single quantity]
# # # # @Executed - **March 2 - Rework on - gift cards
Scenario: SFDEV-2654 Verify for Bay website order paid with VGC for single item single quantity placed by guest user when item is shipped using Standard shipping by DC.
Given I am on the website
And Wait for "2000" mili seconds
And I add "Product SFDEV-2618" to bag
And Wait for "2000" mili seconds
And I click on "minicart link"
And Wait for "2000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2657" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And I enter my "Gift Card Number-1-SFDEV-2654" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2654-Guest User with Gift Card"


# # # # SFDEV-2653 - Guest User - Place order  [single line single quantity]
# # # # @Executed - **March 2 - Rework on - gift cards
Scenario: SFDEV-2653 Verify for Bay website order paid with 2 GCs for a single item having single quantity placed by a guest user when items are shipped using Rush/Express by Store .
Given I am on the website
And Wait for "2000" mili seconds
And I add "Product SFDEV-2618" to bag
And Wait for "2000" mili seconds
And I click on "minicart link"
And Wait for "2000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2657" in the textbox
And Wait for "6000" mili seconds
And Select "Express" shipping method
And I click on - "checkout shipping save and continue button"
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And I enter my "Gift Card Number-1-SFDEV-2653" in the textbox
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-2-SFDEV-2653" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2653-Guest User with 2 Gift Card"


# # # # SFDEV-2650 - Guest User - Place order  [multiple items single quantity]
# # # # @Executed - **March 2 - Rework on - gift cards
Scenario: SFDEV-2650 Verify for Bay website guest order paid with Mastercard+GC for multiple items single quantity with standard shipping service and shipped by DC (Canpar) & Store (Canada Post).
Given I am on the website
And Wait for "2000" mili seconds
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And Wait for "6000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-2661" to bag
And I click on "minicart link"
And Wait for "2000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2617" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Master Card Details" in the textbox
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And I enter my "Gift Card Number-1-SFDEV-2650" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2650-Guest User with Mastercard+GC"


# # # # # SFDEV-2636 - Guest User - Place order  [multiple items single quantity]
# # # # # @Executed - **March 2 - Rework on - Product SFDEV-2634-gift cards
Scenario: SFDEV-2636 Verify for Bay website gift order for a guest user, multiple items with single quantity, shipped from DC paid by Gift Card + Credit Card and Billing and Shipping addresses different.
Given I am on the website
And Wait for "2000" mili seconds
And I add "Product2 SFDEV-2637" to bag
And I click on "minicart link"
And Wait for "6000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product SFDEV-2634" to bag
And I click on "minicart link"
And Wait for "2000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2617" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Visa Card Details" in the textbox
And Wait for "2000" mili seconds
And I click on - "different billing address checkbox"
And Wait for "2000" mili seconds
And I enter my "Billing address-SFDEV-2636" in the textbox
And Wait for "2000" mili seconds
And I click on - "add gift card button"
And I enter my "Gift Card Number-1-SFDEV-2636" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2636-Guest User with Visa+GC"


# # SFDEV-2624 - Guest User - Place order  [multiple items having multiple quantities]
# # @Executed - **March 4 - Rework on -Gift Card and Products and add to item functionality
Scenario: SFDEV-2624 Verify for website guest order with multiple items having multiple quantities, paid with EMC and shipped Express.
Given I am on the website
And Wait for "2000" mili seconds
And I add "Product1 New Data 2624" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "2000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-4588" in the textbox
And Wait for "6000" mili seconds
And Select "Express" shipping method
And Wait for "3000" mili seconds
And I click on - "click promo code button"
And Wait for "1000" mili seconds
And I enter my "Order Level promo code S2624" in the textbox
And Wait for "6000" mili seconds
And I click on - "checkout shipping save and continue button"
And I click on - "add gift card button"
And I enter my "Gift Card Number-1-SFDEV-2624" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2624-Guest User with GC"


# # # # # SFDEV-2560 - Guest User - Place order  [multiple items having single quantity]
# # # # # @Executed - **March 4 - Rework on -Gift Card and Products and add to item functionality
Scenario: SFDEV-2560 Verify for a Bay Website order paid by Gift Card for multiple items having single quantity and Off Promo placed by a registered user when items are shipped using Standard by DC.
Given I am on the website
And Wait for "4000" mili seconds
And I add "Product1 New Data 2560" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "6000" mili seconds
And I add "Product2 New Data 2560" to bag
And Wait for "4000" mili seconds
And I click on "minicart link"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-3813" in the textbox
And Wait for "9000" mili seconds
And Select "Standard" shipping method
And I click on - "checkout shipping save and continue button"
And Wait for "3000" mili seconds
And I click on - "add gift card button"
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-1-SFDEV-2560" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2560-Guest User with Gift card"


# # # # # SFDEV-4589 - Guest User - Place order  [multiple items having single quantity]
# # # # # @Executed - **March 4 - Rework on -Gift Card and Products and add to item functionality
Scenario: SFDEV-4589 Verify for a Bay Website order paid by Gift Card for multiple items having single quantity and Off Promo placed by a registered user when items are shipped using Standard by DC.
Given I am on the website
And Wait for "4000" mili seconds
And I add "Product1 New Data 4589" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "6000" mili seconds
And I add "Product2 New Data 4589" to bag
And Wait for "4000" mili seconds
And I click on "minicart link"
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-3813" in the textbox
And Wait for "9000" mili seconds
And Select "Standard" shipping method
And I click on - "checkout shipping save and continue button"
And Wait for "3000" mili seconds
And I click on - "add gift card button"
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-1-SFDEV-4589" in the textbox
And Wait for "3000" mili seconds
And I enter my "Gift Card Number-2-SFDEV-4589" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4589-Guest User with Gift card"








