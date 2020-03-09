Feature: HBC End to end - Place Order Registered/Guest users using Paypal


# # # SFDEV-2623 - Guest User - Place order  [multi line multi quantity]
# # # @Executed - Inprogress
Scenario: SFDEV-2623 Verify order paid using PayPal for multi line multi quantity placed by a guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2623" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "4000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 New Data 2623" to bag
And I click on "minicart link"
And I am adding quantity
And Login to paypal
And Wait for "20000" mili seconds
And I enter my "Shipping address-SFDEV-2623" in the textbox
And I click on - "checkout place order button"
And I notice order confirmation page thank you message should say "Thank you!"
And Verify "order confirmation page order id" is displayed
And Save Order ID - "SFDEV-2623-Guest User with Paypal"


# # # SFDEV-2625 - Guest User - Place order  [multi line multi quantity]
# # # @Executed - Inprogress
Scenario: SFDEV-2625 Verify order paid with Paypal for smulti line multi quantity placed by a guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2625" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "4000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 New Data 2625" to bag
And I click on "minicart link"
And I am adding quantity
And Login to paypal
And Wait for "20000" mili seconds
And I enter my "Shipping address-SFDEV-2625" in the textbox
And I click on - "checkout place order button"
And I notice order confirmation page thank you message should say "Thank you!"
And Verify "order confirmation page order id" is displayed
And Save Order ID - "SFDEV-2625-Guest User with Paypal"


# # # SFDEV-2643 - Guest User - Place order  [single item multi quantity]
# # # @Executed - Inprogress
Scenario: SFDEV-2643 Verify order placed by guest user for single item multi quantity, paid by PayPal using NextBusinessDay (Purolator) delivery.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2643" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "4000" mili seconds
And Login to paypal
And Wait for "20000" mili seconds
And I enter my "Shipping address-SFDEV-2620" in the textbox
And I click on - "checkout place order button"
And I notice order confirmation page thank you message should say "Thank you!"
And Verify "order confirmation page order id" is displayed
And Save Order ID - "SFDEV-2643-Guest User with Paypal card"

# # # SFDEV-2592 - Guest User - Place order  [single line single quantity]
# # # @Executed - **March 4 - Rework on -Products,Paypal
Scenario: SFDEV-2592 Verify for Bay Store order paid using PayPal for a single line single quantity placed by a guest user.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2592" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And Login to paypal
And Wait for "20000" mili seconds
And I enter my "Shipping address-SFDEV-2592" in the textbox
And I click on - "checkout place order button"
And I notice order confirmation page thank you message should say "Thank you!"
And Verify "order confirmation page order id" is displayed
And Save Order ID - "SFDEV-2592-Guest User with Paypal card"

# # # SFDEV-2589 - Guest User - Place order  [single line single quantity]
# # # @Executed - **March 4 - Rework on -Products,Paypal,add to bag
Scenario: SFDEV-2589 Verify for Bay BOPIS website guest order paid using PayPal for a single line single quantity item with clearance price.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2589" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And Login to paypal
And Wait for "20000" mili seconds
And I enter my "Shipping address-SFDEV-2594" in the textbox
And I click on - "checkout place order button"
And I notice order confirmation page thank you message should say "Thank you!"
And Verify "order confirmation page order id" is displayed
And Save Order ID - "SFDEV-2589-Guest User with Paypal card"


# # # SFDEV-3306 - Guest User - Place order  [multi line multi quantity]
# # # @Executed - **March 4 - Rework on -Products,Paypal,add to bag
Scenario: SFDEV-3306 Verify for Bay website order for a registered user, multiple items multiple quantities, standard shipment from Store and percentage Off Promo paid by PayPal
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
And I add "Product1 New Data 3306" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "4000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 New Data 3306" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "3000" mili seconds
And Login to paypal
And Wait for "20000" mili seconds
And I enter my "Shipping address-SFDEV-3310" in the textbox
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And I click on - "click promo code button"
And Wait for "1000" mili seconds
And I enter my "Order Level promo code S3306" in the textbox
And I click on - "checkout place order button"
And I notice order confirmation page thank you message should say "Thank you!"
And Verify "order confirmation page order id" is displayed
And Save Order ID - "SFDEV-3306-Registered User with Paypal"


# # # SFDEV-2646 - Guest User - Place order  [single line single quantity]
# # # @Executed - **March 4 - Rework on -Products,Paypal,add to bag
Scenario: SFDEV-2646 Verify for a Bay website order paid using PayPal for a single item with GWP placed by a guest user when an item is picked up in-store.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2646" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And Login to paypal
And Wait for "20000" mili seconds
And I enter my "Shipping address-SFDEV-2594" in the textbox
And Wait for "3000" mili seconds
And I click on - "click promo code button"
And Wait for "1000" mili seconds
And I enter my "Order Level promo code S2646" in the textbox
And I click on - "checkout place order button"
And I notice order confirmation page thank you message should say "Thank you!"
And Verify "order confirmation page order id" is displayed
And Save Order ID - "SFDEV-2646-Guest User with Paypal card"


# # # SFDEV-2630 - Guest User - Place order  [SingleItem, SingleQuantity]
# # # @Executed - **March 4 - Rework on -Products,Paypal,add to bag
Scenario: SFDEV-2630 Verify Bay website SingleItem, SingleQuantity order by registered user & ship by Vendor paid by Paypal & standard Delivery.
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
And I add "Product1 New Data 2630" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And Login to paypal
And Wait for "20000" mili seconds
And I enter my "Shipping address-SFDEV-3310" in the textbox
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And I click on - "click promo code button"
And Wait for "1000" mili seconds
And I enter my "Order Level promo code S3306" in the textbox
And I click on - "checkout place order button"
And I notice order confirmation page thank you message should say "Thank you!"
And Verify "order confirmation page order id" is displayed
And Save Order ID - "SFDEV-2630-Registered User with Paypal"

# # # SFDEV-2629 - Guest User - Place order  [SingleItem, SingleQuantity]
# # # @Executed - **March 4 - Rework on -Products,Paypal,add to bag
Scenario: SFDEV-2629 Verify for Bay BOPIS order with multiple items, single quantity order by registered user & ship by BOPIS paid by PayPal.
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
And I add "Product1 New Data 2629" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And click on home logo
And I add "Product2 New Data 2629" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And Select BOPIS "In Stock" SFDEV2580 store in "PDP"
And Wait for "3000" mili seconds
And Login to paypal
And Wait for "20000" mili seconds
And I enter my "Shipping address-SFDEV-3310" in the textbox
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And I click on - "checkout place order button"
And I notice order confirmation page thank you message should say "Thank you!"
And Verify "order confirmation page order id" is displayed
And Save Order ID - "SFDEV-2629-Registered User with Paypal"


# # # SFDEV-2563 - Guest User - Place order  [multi line multi quantity]
# # # @Executed - **March 4 - Rework on -Products,Paypal,add to bag
Scenario: SFDEV-2563 Verify for Bay website order paid with PayPal for multiple items having multiple quantities and percentage off Promo placed by a registered user when items are shipped using Standard by DC.
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
And I add "Product1 New Data 2563" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "4000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 New Data 2563" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "3000" mili seconds
And Login to paypal
And Wait for "20000" mili seconds
And I enter my "Shipping address-SFDEV-2642" in the textbox
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And I click on - "checkout place order button"
And I notice order confirmation page thank you message should say "Thank you!"
And Verify "order confirmation page order id" is displayed
And Save Order ID - "SFDEV-2563-Registered User with Paypal"



