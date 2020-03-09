const { client } = require('nightwatch-api');
const { Given, When, Then, run } = require('./helper')

module.exports = {
  main: function(data, ref) {


    When(/^I open "(.*)"$/, url => {
        console.log(url);
        client.url(url);
    })


    /*When(/^I click on "(.*?)" in the "(.*?)"$/, (element, placeholder) => {
      console.log(element);
      console.log(placeholder);
      run('Then I should see ' + element);
      run('Then I click on ' + element);
      return client
    })*/

    Then(/^I should be taken to "(.*?)" page$/, (pagetitle) => {
      console.log(pagetitle);
      return client.assert.title(pagetitle);
    })

    

    /**************************************************************************/
    /*
    Description: Use this step for any simple waitFor step
    Parameter(s): selector
    Acceptable Use:
        I should see thankyou_orderNumber_css
        
    */
    /**************************************************************************/

    Then(/^I should see (\S*?)$/, (element) => {
      console.log("element -- > " + element)
      return client
        .waitForElementVisible(element, data.timeout_max, true, function(result) {
          if (result.status === -1)
            console.log(result)
        })
    })

    /**************************************************************************/
    /*
    Description: Use this step for any step where you want to make sure an element
    is not visible
    Parameter(s): selector
    Acceptable Use:
        I should not see thankyou_orderNumber_css
        
    */
    /**************************************************************************/

    Then(/^I should not see (\S*?)$/, (element) => {
      console.log("element -- > " + element)
        return client
        .waitForElementNotPresent(element, data.timeout_median, 2000, true,function(result){
            if (result.status === 0)
            console.log(result)
        })
    })

    /**************************************************************************/
    /*
    Description: Use this step to setup your test with any specific data. Please
    use the correct name of the specific variable, otherwise this won't work.
    Parameter(s): Table of data
    Acceptable Use:
      this data:
      |checkout_firstName|Joey|
      |checkout_lastName|Votto|
      |defaultEmail|myTestAccount@test.com|
      |defaultPassword|myTestPassword123!|
        
    */
    /***************************************************************************/

    Given(/^this data:((.|\n)*)$/, (throwAwayArgument, requestedData) => {
      requestedData = requestedData.rawTable

      for (var i = 0; i < requestedData.length; i++) {
        data[requestedData[i][0]] = requestedData[i][1]
      }

      return
    })

    /**************************************************************************/
    /*
    Description: Use this test to assert text on a pre-defined element.
    Parameter(s): element and text
    Acceptable Use:
      this leftNavTitle_text should say "WOMEN'S APPAREL"
        
    */
    /**************************************************************************/

    Then(/^this (.*?) should say "(.*?)"$/, (element, text) => {
      /* Check to see that element is visible */
      client.pause(500)
      run('And I should see ' + element)
      return client
      .assert.containsText(element, text)
    })

    Then(/^this (.*?) should not say "(.*?)"$/, (element, text) => {
      /* Check to see that element is visible */
      run('And I should see ' + element)
      return client
      .expect.element(element).text.to.not.equal(text);
    })

  }
}