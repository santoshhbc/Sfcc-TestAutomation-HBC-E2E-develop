const { client } = require('nightwatch-api');
const { Given, When, Then, run } = require('../../utility/helper')

module.exports = {
    main:
      function(data, ref) {
        When(/^I apply this "(.*?)"$/, (element) => {
            run(`I click on - "Apply Promo Code panel"`)
            switch(element) {
                case '% OFF promo code' :
                    applyPromo('input[name=promoCode]', data.promoCode_percentageoff)
                    break
                case 'invalid promo code' :
                    applyPromo('input[name=promoCode]', data.promoCode_invalid)
                    break
                case 'CSR % promo code' : //SAKS ONLY
                    applyPromo('input[name=promoCode]', data.promoCode_csrpercentageoff)
                    break
                case 'CSR FREE RUSH SHIPPING PROMO' ://SAKS ONLY
                    applyPromo('input[name=promoCode]', data.promoCode_CSR_freeRush)
                    break    
                case 'FREE SAT DELIVERY promo code' : //O5A ONLY
                    applyPromo('input[name=promoCode]', data.promoCode_freeSatDelivery)
                    break
                case 'FREE STANDARD DELIVERY promo code' ://O5A ONLY
                    applyPromo('input[name=promoCode]', data.promoCode_freeStanddardShipping)
                    break
            }
            run(`I click on - "Apply promo"`)
            return client
        })
            function applyPromo(selector, value) {
                client
                .pause(500)
                .clearValue(selector)
                .setValue(selector, value)
            }


        Then(/^I should see "(.*)" being applied on the (.*) page$/, (promo, place) => {
            switch(promo) {
                case '% OFF promo code' :
                    client
                    .waitForElementVisible(ref.promo_applied_panelDisplay_css.selector)
                    run(`Then this ${ref.promo_applied_panelDisplay_css.selector} should say "${data.promoCode_percentageoff}"`)
                    break
                case 'CSR % promo code' : //SAKS ONLY
                case 'invalid promo error' :
                    run(`Then this ${ref.promo_invalid_error_msg_css.selector} should say "${data.promoCode_invalid_error_msg}"`)
                    break
                case 'a promo already applied error message' : //SAKS ONLY
                    run(`Then this ${ref.promo_invalid_error_msg_css.selector} should say "${data.promocode_errormessage}"`)
                    break
                case 'not qualify promo error message' : //SAKS ONLY
                    run(`Then this ${ref.promo_invalid_error_msg_css.selector} should say "${data.promoCode_notqualify_error_msg}"`)
                    break
                case 'Saks First Freeshiping Message' : //SAKS ONLY
                    run(`Then this ${ref.promo_checkout_saksfreeshippingcode_css.selector} should say "${data.promocode_freeshippingmessage}"`)
                    break
                case 'CSR FREE RUSH SHIPPING PROMO' : //SAKS ONLY
                    client
                    .waitForElementVisible(ref.promo_applied_panelDisplay_css.selector)
                     run(`Then this ${ref.promo_applied_panelDisplay_css.selector} should say "${data.promoCode_CSR_freeRush}"`)
                     break    
                case 'FREE SAT DELIVERY promo code' : //O5A ONLY
                    client
                    .waitForElementVisible(ref.promo_applied_panelDisplay_css.selector)
                     run(`Then this ${ref.promo_applied_panelDisplay_css.selector} should say "${data.promoCode_freeSatDelivery}"`)
                     break
                case 'FREE STANDARD DELIVERY promo code' : //O5A ONLY
                    client
                    .waitForElementVisible(ref.promo_applied_panelDisplay_css.selector)
                     run(`Then this ${ref.promo_applied_panelDisplay_css.selector} should say "${data.promoCode_freeStanddardShipping}"`)
                     break
            }
            run(`I click on - "Apply Promo Code panel"`)
            return client
        })

        Then(/^verify "(.*)" is applied to the eligible item on the "(.*)" page$/, (promo ,page) => {
            if(promo === '% OFF promo code') {
                var promoText = data.promoCode_percentageoff
            } else if(promo === '% OFF TIER promo code') {
                var promoText = data.promoCode_percentageoffTier_text
            }
            switch(page) {
                case 'bag' :
                    client.assert.containsText(ref.promo_applied_itemDisplay_bagPage_css.selector, promoText) 
                    break          
                case 'checkout' :
                   client.assert.containsText(ref.promo_applied_itemDisplay_checkoutPage_css.selector, promoText) 
                    break          
            }
            return client
        })

        Then(/^I should not see "(.*)" being applied on the (.*) page$/, (promo, place) => {
            switch(promo) {
                case '% OFF promo code' :
                case 'CSR FREE RUSH SHIPPING PROMO' : //SAKS ONLY
                    client.waitForElementNotPresent(ref.promo_applied_panelDisplay_css.selector)
                    break
            }
            run(`I click on - "Apply Promo Code panel"`)
            return client
        })

        When(/^I remove promo code$/, () => {
            run(`I click on - "Apply Promo Code panel"`)
            run(`I click on - "Remove promo"`)
            return client
        })
        
      

      }
    }