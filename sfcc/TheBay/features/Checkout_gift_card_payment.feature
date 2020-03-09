Feature: HBC Checkout GIFT CARD payment scenarios


# TC-2490 # TC-2466 # TC-2619 # TC-3805 - Guest User + GC+CC payment method
# @Executed - Passed
Scenario Outline:Verify the functionality when shopper apply the gift card in payment section if (Order total is > Gift cart balance )  | Verify the behaviour of application when shopper click on Have a gift card section as Registered user | Verify the functionality of "Order placement" by combining the payment methods of gift card and credit card. | | Verify the order placement with combination of GC and credit card as a guest user. Order total is greater than gift card amount
Given I am on the website
And I add "product-1" to bag
And I click on "minicart link"
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-1" in the textbox
And I click on - "checkout shipping save and continue button"
And I click on - "add gift card label"
And Verify "expanded giftcard section in checkout payment" is displayed
And I click on - "add gift card label"
And Verify "collapsed giftcard section in checkout payment" is displayed
And I click on - "add gift card label"
And I enter my "<Gift Card Number>" in the textbox
And Wait for "4000" mili seconds
And I see "applied gift card" count is 1
# And Verify "save and continue button in checkout payment page" is disabled
And I enter my "<Visa Card Details>" in the textbox
And I click on - "checkout payment section save and continue button"
And I Verify the "<Visa Card Details>" in "payment section in order review" page
And I Verify the "<Visa Card Details>" in "order summary section in order revie" page
And Verify the applied "<Gift Card Number>" in "checkout order review" page
And Verify "checkout place order button" is displayed
#### NOT PLACING ORDER WITH GIFT CARD. VERIFYING STILL ORDER REVIEW PAGE, HENCE BELOW LINES ARE COMMENTED
# And I click on - "checkout place order button"
# And Wait for "4000" mili seconds
# And I notice order confirmation page thank you message should say "Thank you!"
# And Verify "order confirmation page order id" is displayed
Examples:
| Header 1 | Gift Card Number | Visa Card Details |
| Value 1  | Gift Card Number | Visa Card Details  |


# TC-2491 - Guest User - Order total is < Gift cart balance
# @Executed - Passed
Scenario:Verify the functionality when shopper apply the gift card in payment section if (Order total is < Gift cart balance )
Given I am on the website
And I navigate to PDP from "product with less price" search result page
And I scroll down
And I click on "add to cart button in pdp"
And I click on "minicart link"
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-1" in the textbox
And I click on - "checkout shipping save and continue button"
And I click on - "add gift card label"
And I enter my "Gift Card Number" in the textbox
And Wait for "4000" mili seconds
And I see "applied gift card" count is 1
And Verify "credit card name field in checkout payment page" is disabled
And Verify "credit card number field in checkout payment page" is disabled
And Verify "credit card expiry date field in checkout payment page" is disabled
And Verify "credit card cvv field in checkout payment page" is disabled
And Verify "save and continue button in checkout payment page" is disabled
And Verify "gift card number in checkout page" is disabled
And Verify "gift card access number in checkout page" is disabled
#### NOT PLACING ORDER WITH GIFT CARD. VERIFYING STILL ORDER REVIEW PAGE, HENCE BELOW LINES ARE COMMENTED
# And I click on - "checkout place order button"
# And Wait for "4000" mili seconds
# And I notice order confirmation page thank you message should say "Thank you!"
# And Verify "order confirmation page order id" is displayed



# TC-3852 - Guest User - GC + gift message
# @Executed - Passed
Scenario: Verify the order placement by providing gift messages with cc as guest user.
Given I am on the website
And I add "product-1" to bag
And I click on "add to cart button in pdp"
And I click on "minicart link"
And I click on "checkout button in cart page"
And I click on "checkout as guest button in cart page"
And I enter my "Shipping address-1" in the textbox
And Wait for "4000" mili seconds
And I enter my "Gift Message" in the textbox
And I click on - "checkout shipping save and continue button"
And I click on - "add gift card label"
And I enter my "Gift Card Number" in the textbox
And Wait for "4000" mili seconds
And I enter my "Gift Card Number-1" in the textbox
And Wait for "4000" mili seconds
And I see "applied gift card" count is 2
And Verify "gift card number in checkout page" is disabled
And Verify "gift card access number in checkout page" is disabled
And I enter my "Visa Card Details" in the textbox
And I click on - "checkout payment section save and continue button"
And Wait for "4000" mili seconds
And Verify "checkout place order button" is displayed
And Verify the applied "Gift Card Number" in "checkout order review" page
And Verify "checkout place order button" is displayed
########## NOT PLACING ORDER WITH GIFT CARD. NAVIGATING TILL ORDER REVIEW PAGE AND VERIFYING THE ORDER REVIEW PAGE. HENCE BELOW CODE IS COMMENTED
### And I click on - "checkout place order button"
### And Wait for "4000" mili seconds
### And I notice order confirmation page thank you message should say "Thank you!"
### And Verify "order confirmation page order id" is displayed
### And And Save Order ID - "Guest User, Gift message + Gift Card Payment"



# TC-2623 - Registered User + GC+CC payment method
# @Executed - Passed
Scenario Outline:Verify the functionality of "Order placement" by combining the payment methods of gift card/credit card also with some promotions.
Given I am on the website
And I login to the application with valid credentials
And Remove products from cart page
And I add "product-1" to bag
And I click on "minicart link"
And I click on "checkout button in cart page"
And I click on - "add new shipping address link"
And I enter my "Shipping address-1" in the textbox
And I click on - "checkout save shipping address button"
And I click on - "checkout shipping save and continue button"
And I click on - "add gift card label"
And I enter my "<Gift Card Number>" in the textbox
And Wait for "4000" mili seconds
And I see "applied gift card" count is 1
And I enter my "<Visa Card Details>" in the textbox
And I click on - "checkout payment section save and continue button"
And I Verify the "<Visa Card Details>" in "payment section in order review" page
And I Verify the "<Visa Card Details>" in "order summary section in order revie" page
And Verify the applied "<Gift Card Number>" in "checkout order review" page
And I click on - "apply promo code link"
And I type "Order Level promo" into this "checkout page promo code" field
And Wait for "4000" mili seconds
And I notice promo code section heading in checkout should say "1 Promo Code Applied"
And Verify "checkout place order button" is displayed
#### NOT PLACING ORDER WITH GIFT CARD. VERIFYING STILL ORDER REVIEW PAGE, HENCE BELOW LINES ARE COMMENTED
# And I click on - "checkout place order button"
# And Wait for "4000" mili seconds
# And I notice order confirmation page thank you message should say "Thank you!"
# And Verify "order confirmation page order id" is displayed
Examples:
| Header 1 | Gift Card Number | Visa Card Details |
| Value 1  | Gift Card Number | Visa Card Details  |


# TC-2624 - Guest User, Normal Product + BOPIs+ Gift Card+Credit card
@Run
Scenario Outline: Verify the functionality of "Order placement" by combining the payment methods of gift card/credit card also with combination of bopis and normal products.
Given I am on the website
And I add "product-1" to bag
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
And I enter my "Shipping address-1" in the textbox
And I click on - "checkout shipping save and continue button"
And Wait for "4000" mili seconds
And I enter my "Master Card Details" in the textbox
And I click on - "add gift card label"
And I enter my "<Gift Card Number>" in the textbox
And Wait for "4000" mili seconds
And I see "applied gift card" count is 1
And I click on - "different billing address checkbox"
And I enter my "Billing address" in the textbox
And I click on - "checkout payment section save and continue button"
And Verify "checkout place order button" is displayed
And Verify the applied "<Gift Card Number>" in "checkout order review" page
And I Verify the "<Visa Card Details>" in "payment section in order review" page

#### NOT PLACING ORDER WITH GIFT CARD. VERIFYING STILL ORDER REVIEW PAGE, HENCE BELOW LINES ARE COMMENTED
# And I click on - "checkout place order button"
# And Wait for "4000" mili seconds
# And I notice order confirmation page thank you message should say "Thank you!"
# And Save Order ID - "Guest User with MASTER card"
Examples:
| Header 1 | Gift Card Number | Visa Card Details |
| Value 1  | Gift Card Number | Visa Card Details  |