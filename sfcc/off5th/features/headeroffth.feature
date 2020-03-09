Feature: HBC global header scenarios

Scenario: Verify the links in header
 Given I am on the website
 And I notice my account signin link should say "Welcome, Sign In"
 And Verify "ROOT CATEGORIES IN HEADER" is displayed
 And Verify "STORE LOCATOR ICON IN HEADER" is displayed
 And Verify "GIFT REGISTORY LINK IN HEADER" is displayed
 And Verify "The Flyer" is displayed
 And Verify "header country selector link" is displayed



Scenario:Verify the functionality of the site logo.
 Given I am on the website
 When I click on "women category link"
 And Verify "home page banner" is not displayed
 Then I click on "site logo"
 And verify "HOME" page elements are displayed
 
 

Scenario: HomePage: MiniCart functionality - No product in cart
 Given I am on the website
 And I notice header minicart quantity should say "0"
 When I click on "minicart link"
 And verify "EMPTY CART" page elements are displayed
 
  Scenario: HomePage: Wishlist Icon functionality - Registered user 
 Given I am on the website
 And I login to the application with valid credentials
 When I click on "header wishlist link"
 Then verify "REGISTERED USER WISHLIST PAGE" page elements are displayed
 
 
 Scenario: HomePage: Wishlist Icon functionality - Guest user
 Given I am on the website
 When I click on "header wishlist link"
Then verify "GUEST USER WISHLIST PAGE" page elements are displayed


 Scenario: Verify the display of the searched text (original text) on the search result page.
 Given I am on the website
 When I am on "Shirt" search result page
 And I notice search keyword in search result page should say "Shirt"
 
Scenario: Verify the behaviour of the search without providing any key.
 Given I am on the website
 When I click on "search icon in header search bar"
 And I notice no search heading should say "We can't find any results for"


#  Scenario: Verify the display of the language selector link.
#  Given I am on the website
#  And I notice header country selector should say "Français"
 
 
#  Scenario: Verify the functionality of language selector link
#  Given I am on the website
#  And I notice header country selector should say "Français"
#  When I click on "header country selector link"
#  And I notice header country selector should say "English"
#  Then I click on "header country selector link"
#  And I notice header country selector should say "Français"


 Scenario: Login page navigation
 Given I am on the website
 When I navigate to login page
 Then I notice login page title should say "Sign In" 
 And verify "Login" page elements are displayed
 
 Scenario: Verify the functionality on click of the Welcome, Firstname link as reg user.
 Given I am on the website
 When I login to the application with valid credentials
 And verify "MY ACCOUNT" page elements are displayed
 And I click on "site logo"
And verify "HOME" page elements are displayed
 #Then I click on "header myaccount link"
 Then I navigate to my account page
 And verify "MY ACCOUNT" page elements are displayed
 
 Scenario: Verify the functionality on click of the store locator icon.
 Given I am on the website
 When I click on "header store locator icon"
 And verify "STORE LOCATOR" page elements are displayed

 
 Scenario: Verify the click functionality of sign out link for registered user in desktop.
 Given I am on the website
 When I login to the application with valid credentials
 And I hover on "Welcome user in header"
 Then I click on "header signout link"
 Then verify "HOME" page elements are displayed

Scenario: Verify the functionality of featured items in search suggestions in desktop.| Verify the functionality of search suggestions in desktop/mobile devices.
Given I am on the website
When I type "Dr" into this "header text box" field
And Wait for "4000" mili seconds
Then Verify "search suggestion overlay" is not displayed
When I type "Dress" into this "header text box" field
And Wait for "4000" mili seconds
And Verify "search suggestion overlay" is displayed
Then I click on "product name in search suggestion overlay"
And verify "PDP" page elements are displayed
When I type "Dress" into this "header text box" field
And Wait for "4000" mili seconds
And Verify "search suggestion overlay" is displayed
Then I click on "product image in search suggestion overlay"
And verify "PDP" page elements are displayed