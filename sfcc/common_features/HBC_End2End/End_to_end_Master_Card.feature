Feature: HBC End to end - Place Order Registered/Guest users using Master Card


# # # SFDEV-2635 - Guest User - Place order  [single item single quantity]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2635 Verify  guest order placed with MasterCard single item single quantity,Eco fee applied.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 SFDEV-2635" to bag
And I click on "minicart link"
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "4000" mili seconds
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-SFDEV-2617" in the textbox
And Wait for "4000" mili seconds
And I click on - "checkout shipping save and continue button"
And Wait for "4000" mili seconds
And I enter my "Master Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2635-Guest User with Master card"


# # # SFDEV-4574 - Registered User - Place order[Buy More Save More Pr20Prod, Purchase With Purchase Pr50Prod]
# # # @Executed - 
Scenario: SFDEV-4574 Verify order shipment and Free Shipping, placed by registered customer, paid with Mastercard.
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
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Master Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4574-Registered User with Master card"


# # # SFDEV-2642 - Guest User - Place order  [multiple lines single quantity]
# # # @Executed - Automated/Passed
Scenario: SFDEV-2642 Verify order paid using MasterCard for multiple lines single quantity placed by guest user using standard shipping.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product1 New Data 2642" to bag
And I click on "minicart link"
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 New Data 2642" to bag
And Wait for "2000" mili seconds
And I click on "minicart link"
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-2642" in the textbox
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Master Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "3000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-2642-Guest User with Master card"

# # # SFDEV-4572 - Registered User - Place order[BOGO Pr20Prod, GWP Pr50Prod and Free Shipping]
# # # @Executed - 
Scenario: SFDEV-4572 Verify order shipment for registered user with BOGO Pr20Prod, GWP Pr50Prod and Free Shipping.
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
And Wait for "6000" mili seconds
And Select "Standard" shipping method
And Wait for "10000" mili seconds
And Refresh current page
And Wait for "3000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Master Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-4572-Registered User with Master card"

