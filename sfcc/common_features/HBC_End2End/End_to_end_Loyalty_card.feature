Feature: HBC End to end - Place Order Registered/Guest users using Loyalty Card


# # # SFDEV-3227 - Guest User - Place order[multiple items multiple quantities]
# # # @Executed - 
Scenario: SFDEV-3227 Verify for Bay website guest order paid with Loyalty Card for multiple items multiple quantities,shipped using standard by DC.
Given I am on the website
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-4585" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "3000" mili seconds
And click on home logo
And Wait for "3000" mili seconds
And I add "Product2 SFDEV-3227" to bag
And I click on "minicart link"
And I am adding quantity
And Wait for "1000" mili seconds
And I am adding quantity
And Wait for "4000" mili seconds
And I click on "checkout button in cart page"
And Wait for "3000" mili seconds
And I click on "checkout as guest button in cart page"
And Wait for "3000" mili seconds
And I enter my "Shipping address-SFDEV-3227" in the textbox
And Wait for "3000" mili seconds
And I click on - "click promo code button"
And Wait for "1000" mili seconds
And I enter my "Order Level promo code" in the textbox
And Wait for "6000" mili seconds
And I click on - "checkout shipping save and continue button"
And I enter my "Loyalty Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And I click on - "checkout place order button"
And Wait for "4000" mili seconds
And I notice order confirmation page thank you message should say "Thank you!"
And Save Order ID - "SFDEV-3227-Guest User with Loyalty card"