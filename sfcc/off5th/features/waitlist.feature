Feature: Off5th placing order using CoBrand Store card

Scenario: PDP - Waitlist
Given I am on the website
And I navigate to PDP from "waitlist product" search result page
And I enter my "email id and mobile number in waitlist" in the textbox
And I click on "add to waitlist button"
And Verify "added to waitlist message" is displayed
And I notice added to waitlist message should say "You have successfully been added to the Waitlist"


