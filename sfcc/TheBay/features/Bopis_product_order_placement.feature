Feature: HBC BOPIES product Scenarios

# TC-2608 | TC-2614- Guest User - Shipping Section should not display for bopies
# @Executed - Passed
Scenario: Verify the functionality of "Shipping" section when BOPIS products in checkout page for mobile/desktop. | Verify the functionality of "Shipping" section when BOPIS products in checkout page for mobile/desktop. | Verify the validation of "Store Pickup Person" when the BOPIS products is in place order page for mobile/desktop.
Given I am on the website
And I navigate to PDP from "BOPIs product" search result page
And Select variants in PDP
And I click on "pdp choose a store link"
And Select BOPIS store in PDP
And Wait for "4000" mili seconds
And I click on "Buy Online & Pick Up button"
And Wait for "4000" mili seconds
And I click on "minicart link"
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Verify the "pickup person details" in checkout shipping instore pickup person section




# TC-3799 | TC-2615 | TC-2609- Guest User - Bopis product (Selecting store in Cart) - MASTER card payment
# @Executed - Pass
Scenario: Verify the order placement using Master card as guest user with BOPIS line item. | Verify the functionality of "Place Order" CTA when the BOPIS products is in place order page for mobile/desktop. | Verify the functionality of "Payment" section when BOPIS products in checkout page for mobile/desktop.
Given I am on the website
And I add "BOPIs product" to bag
And Wait for "4000" mili seconds
And I click on "minicart link"
And Select BOPIS store in cart page
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Verify the "pickup person details" in checkout shipping instore pickup person section
And I enter my "Master Card Details" in the textbox
And I click on - "different billing address checkbox"
And I enter my "Billing address" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "Guest User with MASTER card + BOPIS product"



# TC-2607 | TC-2613 - Registered user - Bopis product Visa card (Selecting store in PDP) | Verify the Order Details page
# @Executed - Passed
Scenario Outline: Verify the functionality of "Save & Continue button" when BOPIS products in checkout page for mobile/desktop. | Verify the validation of "Store name" when the BOPIS products is in place order page for mobile/desktop.
Given I am on the website
And I login to the application with valid credentials
And Remove products from cart page
And I navigate to PDP from "BOPIs product" search result page
And Select variants in PDP
And I click on "pdp choose a store link"
And Select BOPIS store in PDP
And Wait for "4000" mili seconds
And I click on "Buy Online & Pick Up button"
And Wait for "4000" mili seconds
And I click on "minicart link"
And I click on "checkout button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Verify the "pickup person details" in checkout shipping instore pickup person section
And I enter my "<Visa Card Details>" in the textbox
And I click on - "different billing address checkbox"
And I click on - "add billing address link in checkout"
And I enter my "<BillingAddress>" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "Registered User with VISA card + BOPIS product"
And Navigate to My Account "ORDER HISTORY" Page
And I click on - "view link in order history page"
And Verify the "<BillingAddress>" address in "billing address in order details page"
And Verify the "<Visa Card Details>" in "my account order details" page
Examples:
| BillingAddress | Visa Card Details |
| Billing address | Visa Card Details |


# TC-2612 - Guest User - Bopis + Normal Product + Visa Card (Selecting store in PDP)
# @Executed - Pass
Scenario: Verify the validation of "Place Order"page when the order is placed with BOPIS products for mobile/desktop.
Given I am on the website
And I add "product-1" to bag
And I navigate to PDP from "BOPIs product" search result page
# And Select variants in PDP
And I click on "pdp choose a store link"
And Select BOPIS store in PDP
And Wait for "4000" mili seconds
And I click on "Buy Online & Pick Up button"
And Wait for "4000" mili seconds
And I click on "minicart link"
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Verify the "pickup person details" in checkout shipping instore pickup person section
And I enter my "Shipping address-1" in the textbox
And I click on - "checkout shipping save and continue button"
And Wait for "4000" mili seconds
And I enter my "Visa Card Details" in the textbox
And I click on - "different billing address checkbox"
And I enter my "Billing address" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "Guest User, Bopis+Normal product, VISA card payment method"

# TC-3800 - Registered User - Bopis Product - Different Shipping and billing address
Scenario Outline: Verify the order placement using Master card as registered user with BOPIS and regular line item by selecting express shipping method and different billing address than shipping.
Given I am on the website
And I login to the application with valid credentials
And Remove products from cart page
And Delete saved address in my account page
And I add "product-1" to bag
And I navigate to PDP from "BOPIs product" search result page
And Select variants in PDP
And I click on "pdp choose a store link"
And Select BOPIS store in PDP
And Wait for "4000" mili seconds
And I click on "Buy Online & Pick Up button"
And Wait for "4000" mili seconds
And I click on "minicart link"
And I click on "checkout button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Verify the "pickup person details" in checkout shipping instore pickup person section
And I click on - "add new shipping address link"
And I enter my "<Shipping address>" in the textbox
And I click on - "checkout save shipping address button"
And Wait for "14000" mili seconds
And Select "Express" shipping method
And I click on - "checkout shipping save and continue button"
And Wait for "10000" mili seconds
And I enter my "<Master Card Details>" in the textbox
And I click on - "different billing address checkbox"
And I click on - "add billing address link in checkout"
And I enter my "<Billing Address>" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "4000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "Registered User with VISA card + BOPIS product"
And Navigate to My Account "ORDER HISTORY" Page
And I click on - "view link in order history page"
And Verify the "<Shipping address>" address in "shipping address in order details page"
And Verify the "<Billing Address>" address in "billing address in order details page"
And Verify the "<Master Card Details>" in "my account order details" page
Examples:
|Shipping address | Billing Address | Master Card Details |
|Shipping address-1 | Billing address | Master Card Details |


# TC-3801 - Guest User -  AMEX card - Normal Product and BOPIs product
Scenario: Verify the order placement using AMEX card as guest user with BOPIS, Drop ship and regular line items by international billing address.
Given I am on the website
And I add "product-1" to bag
And I navigate to PDP from "BOPIs product" search result page
And Select variants in PDP
And I click on "pdp choose a store link"
And Select BOPIS store in PDP
And Wait for "4000" mili seconds
And I click on "Buy Online & Pick Up button"
And Wait for "4000" mili seconds
And I click on "minicart link"
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Verify the "pickup person details" in checkout shipping instore pickup person section
And I enter my "Shipping address-1" in the textbox
And I click on - "checkout shipping save and continue button"
And Wait for "4000" mili seconds
And I enter my "Amex Card Details" in the textbox
And I click on - "different billing address checkbox"
And I enter my "International Billing Address" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "Guest User, Bopis+Normal product, VISA card payment method"


# TC-3802 - Register User - AMEX card
# @Done
Scenario: Verify the order placement using AMEX card as registered user with BOPIS, Drop ship and regular line items adding from cart wish list. 
Given I am on the website
And I login to the application with valid credentials
And Remove products from cart page
And Remove products from wishlist page
And Delete saved address in my account page
And I navigate to PDP from "normal product" search result page
And I click on "wishlist icon in pdp"
And I click on "header wishlist link"
And Select size variant in wishlist page
And I click on "add to cart button in wishlist page"
And Wait for "5000" mili seconds
And I navigate to PDP from "BOPIs product" search result page
And Select variants in PDP
And I click on "add to cart button in pdp"
And Wait for "4000" mili seconds
And I click on "minicart link"
And Select BOPIS store in cart page
And I click on "checkout button in cart page"
And I enter my "In-Store Pickup Person details" in the textbox
And I click on - "checkout shipping instore pickup save and continue button"
And Verify the "pickup person details" in checkout shipping instore pickup person section
And I click on - "add new shipping address link"
And I enter my "Shipping address-1" in the textbox
And I click on - "checkout save shipping address button"
And Wait for "4000" mili seconds
And I click on - "checkout shipping save and continue button"
And Wait for "4000" mili seconds
And I enter my "Amex Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "5000" mili seconds
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "Registered User, Bopis+Normal product, AMEX card payment method"

