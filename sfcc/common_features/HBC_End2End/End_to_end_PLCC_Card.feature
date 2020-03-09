Feature: HBC End to end - Place Order Registered/Guest users using PLCC Card


# # # SFDEV-4581 - Registered User - Place order
# # # @Executed - Automated/Passed
Scenario: SFDEV-4581 Verify shipment for order with Price Point Pr5Prod, One Day Sale Pr4Prod and Free Shipping
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
And Wait for "3000" mili seconds
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "2000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4581" to bag
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
And Wait for "8000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4581-Registered User with PLCC card"



# # # SFDEV-4580 - Registered User - Place order
# # # @Executed - Automated/Passed-(clarification needed for Buy More Save More Pr20Prod, One Time Use BDAY Email Promo Code Pr160Ord, %OFF promo Pr150Prod and Free Shipping" )
Scenario: SFDEV-4580 Verify shipment for registered user order with Buy More Save More Pr20Prod, One Time Use BDAY Email Promo Code Pr160Ord, %OFF promo Pr150Prod and Free Shipping
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
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4581" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-1" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4580-Registered User with PLCC card"


# # # SFDEV-4579 - Registered User - Place order
# # # @Executed - Inprogress
Scenario: SFDEV-4579 Verify shipment for registered user order with GWP Pr50Prod, SENIORS promo Pr150Prod and Free Shipping
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
And I add "Product1 SFDEV-4581" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4581" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-1" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4579-Registered User with PLCC card"


# # # SFDEV-4578 - Registered User - Place order
# # # @Executed - Inprogress
Scenario: SFDEV-4578 Verify shipment for registered user order with One Time Use coupon Pr150Prod, %OFF Pr5Prod and Free Shipping
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
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-1" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4578-Registered User with PLCC card"


# # # SFDEV-4577 - Registered User - Place order
# # # @Executed - Inprogress
Scenario: SFDEV-4577 Verify shipment for registered user order with % OFF Pr5Prod, F&F Pr150Prod and Free Shipping
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
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-1" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4577-Registered User with PLCC card"


# # # SFDEV-4576 - Registered User - Place order
# # # @Executed - Inprogress
Scenario: SFDEV-4576 Verify shipment for registered user order with ODS Pr4Prod, QTY Offer N for $XX Pr10Prod and Free Shipping
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
And Wait for "5000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4581" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-1" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4576-Registered User with PLCC card"


# # # SFDEV-3813 - Guest User - Place order[single item, multiple quantities ]
# # # @Executed - InProgress-88513859-Product is not available
Scenario: SFDEV-3813 Verify La Baie (accent characters) website order with EMC, with a single item, multiple quantities, using a PLCC card, shipped standard.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-3813" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "2000" mili seconds
And I click on "checkout button in cart page"
And Wait for "1000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-3813" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-3813-Guest User with PLCC card"



# # # SFDEV-4575 - Registered User - Place order
# # # @Executed - Inprogress
Scenario: SFDEV-4575 Verify shipment for registered user order with GWP Pr50Prod, F&F Pr150Prod, GWP Pr190Ord and Free Shipping with HBC PLCC
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
And Wait for "5000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4581" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "2000" mili seconds
And I enter my "Shipping address-1" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4575-Registered User with PLCC card"


# # # SFDEV-3307 - Registered User - Place order[multiple items multiple quantities]
# # # @Executed - Inprgress-89052388-Item is not available
Scenario: SFDEV-3307 Verify a split shipment for Bay website order for a registered user, multiple items multiple quantities, standard shipment and paid by PLCC.
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
And I add "Product1 SFDEV-3307" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "2000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-3307" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "10000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-3307-Registered User with PLCC card"

# # # SFDEV-2648 - Guest User - Place order[multiple items with multiple quantities]
# # # @Executed - 
Scenario: SFDEV-2648 Verify for Bay website guest order paid with a PLCC for multiple items with multiple quantities,with standard, BMSM promo.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "2000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-2585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2648" in the textbox
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And Wait for "3000" mili seconds
And I click on - "click promo code button"
And Wait for "1000" mili seconds
And I enter my "Order Level promo code" in the textbox
And Wait for "6000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2648-Guest User with PLCC card"


# # # SFDEV-2649 - Registered User - Place order[multiple lines and quantities]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2649 Verify for Bay Website registered Order Paid With PLCC Card with multiple lines and quantities and %OFF promo, NextBusDay by DC.
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
And I add "Product1 SFDEV-2585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "2000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2657" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "8000" mili seconds
And Select "Next Business Day" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "click promo code button"
And Wait for "1000" mili seconds
And I enter my "Order Level promo code" in the textbox
And Wait for "6000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2649-Registered User with PLCC card"


# # # SFDEV-2628 - Registered User - Place order[Multiple Items & Multiple Quantities]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2628 Verify for Bay website orders paid using PLCC for multiple items having multiple quantities placed by a registered user when items are shipped using next business day.
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
And Wait for "6000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-3307" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "8000" mili seconds
And Select "Next Business Day" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2628-Registered User with PLCC card"

# # # SFDEV-2626 - Guest User - Place order[multiple items with multiple quantities]
# # # @Executed - InProgress-In sheet mentioned PLCC but in Jira HBC Card(90300949-Item is not available)
Scenario: SFDEV-2626 Verify for Bay website MultipleItems, MultipleQuantities order by guest user & free DC shipping paid by PLCC Card & standard.
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
And I add "Product2 SFDEV-2637" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And I click on "checkout button in cart page"
And Wait for "2000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2626" in the textbox
And Wait for "8000" mili seconds
And Select "Standard" shipping method
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2626-Guest User with PLCC card"

# # # SFDEV-2562 - Registered User - Place order[Multiple Items & Multiple Quantities]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2562 Verify for Bay website order paid with PLCC for multiple items having multiple quantities and % Off Promo placed by a registered user when items are shipped using Standard by DC.
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
And I add "Product SFDEV-2562" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "6000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "9000" mili seconds
When I click on - "Add_new_shipping_address_in_checout_page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2583" in the textbox
And Wait for "2000" mili seconds
And I click on - "checkout save shipping address button"
And Wait for "8000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "PLCC Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2562-Registered User with PLCC card"


