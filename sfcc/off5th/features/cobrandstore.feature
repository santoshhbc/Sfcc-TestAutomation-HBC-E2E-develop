Feature: Off5th placing order using CoBrand Store card

Scenario: Verify the order placement using CoBrand Store card as guest user
Given I am on the website
And I add "product-1" to bag
And I click on "minicart link"
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-1" in the textbox
And I click on - "checkout shipping save and continue button"
And I enter my "CoBrand Store Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "Guest User with CoBrand stores card"


Scenario: Verify the order placement using CoBrand Store card as registered user
Given I am on the website
And I login to the application with valid credentials
And Remove products from cart page
And Delete saved credit cards in my account page
And Save "Visa Card Details" in My Account payment page
And I add "product-1" to bag
And I click on "minicart link"
And I click on "checkout button in cart page"
And I click on - "add new shipping address link"
And I enter my "Shipping address-1" in the textbox
And I click on - "checkout save shipping address button"
And I click on - "checkout shipping save and continue button"
And I enter my "CoBrand Store Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "5000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "Registered User, CoBrand store card"

@Run
Scenario: Place order using APO address. 
Given I am on the website
And I add "product-1" to bag
And I click on "minicart link"
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "APO Address" in the textbox
And I click on - "checkout shipping save and continue button"
And I enter my "Payment details-1" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "APO Address"