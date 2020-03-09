Feature: HBC new scenarios only for TheBay

Scenario: PDP - GWP
Given I am on the website
And I navigate to PDP from "GWP Product" search result page
And verify "GWP PDP" page elements are displayed
And I click on "GWP PDP shop link"
And verify "HOME" page elements are displayed

Scenario: PDP - Chanel
Given I am on ChanelPage
And verify "Chanel Page" page elements are displayed

Scenario: PDP - BOPIS (Bay)
Given I am on the website
And I navigate to PDP from "BOPIs product" search result page
Then Verify "Bopis section" is displayed
And Select variants in PDP
And I click on "pdp choose a store link"
And Select BOPIS store in PDP
And Wait for "4000" mili seconds
And I click on "Buy Online & Pick Up button"
And Wait for "4000" mili seconds
And I click on "minicart link"
