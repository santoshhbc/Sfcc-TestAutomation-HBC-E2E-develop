Feature: HBC BOPIES product PDP Scenarios


# TC-1138 | TC-1139 | TC-1142 
Scenario: Verify the validation of eligibility for a product with Buy Online Pick Up in Store (BOPIS) in the standard PDP for mobile/desktop. | Verify the validation of default state for a product with Buy Online Pick Up in Store (BOPIS) in the standard PDP for mobile/desktop. | Verify the validation of CTA When the user opts to “Pick Up In Store with Buy Online Pick Up in Store (BOPIS) in the standard PDP for mobile/desktop. 
Given I am on the website
And I navigate to PDP from "BOPIs product" search result page
And verify "PDP" page elements are displayed
And I notice shipto radio button label should say "Ship to"
And I notice pickup in store radio button label should say "Pick Up In Store"
# And Verify "selected shipto radio button" is displayed
And I notice pdp add to cart CTA should say "ADD TO BAG"
And I click on "pdp choose a store link"
And Select BOPIS store in PDP
And Wait for "4000" mili seconds
And I notice pdp add to cart CTA should say "BUY ONLINE & PICK UP"
And Verify "pdp choose store tray" is not displayed



# TC-1140 | TC-1141
Scenario: Verify the validation of When no variant is selected for a product with Buy Online Pick Up in Store (BOPIS) in the standard PDP for mobile/desktop. | Verify the validation of When variant is selected for a product with Buy Online Pick Up in Store (BOPIS) in the standard PDP for mobile/desktop.
Given I am on the website
And I navigate to PDP from "BOPIs master product" search result page
And I notice select variants to see the store availability message should say "Please select a color and size to see store availability"
And Select variants in PDP
And I notice select variants to see the store availability message should say "There are no stores available at current location"


# TC-1147 | TC-1144 | TC-1148
@Run
Scenario: Verify the validation of an incorrect postal code or zip code is entered in the tray with Buy Online Pick Up in Store (BOPIS) in the standard PDP for mobile/desktop. | Verify the click functionality of "Change Store" link with Buy Online Pick Up in Store (BOPIS) in the standard PDP for mobile/desktop. | Verify the functionality of "Save pickup Location" in the tray with Buy Online Pick Up in Store (BOPIS) in the standard PDP for mobile/desktop.
Given I am on the website
And I navigate to PDP from "BOPIs product" search result page
And verify "PDP" page elements are displayed
And I click on "pdp choose a store link"
And Verify "pdp choose store tray" is displayed
And I type "00000" into this "pdp chose store postcode" field
And I click on "pdp check stor button"
And I notice no stores available should say "This item is not available at a store near you. Please update your kilometer range to check the availability in more stores."
And Verify "save pick up location button" is disabled
And Verify "pdp bopies stores list" is not displayed
And I click on "pdp chose store tray close icon"
And Verify "pdp choose store tray" is not displayed
And I click on "pdp choose a store link"
And Verify "pdp choose store tray" is displayed
And I type "valid postcode" into this "pdp chose store postcode" field
And I click on "pdp check stor button"
And Verify "pdp bopies stores list" is displayed
And I click on "pdp chose store tray close icon"
And I click on "pdp choose a store link"
And Select BOPIS store in PDP
And Wait for "4000" mili seconds
And I notice pdp add to cart CTA should say "BUY ONLINE & PICK UP"
And Verify "pdp choose store tray" is not displayed