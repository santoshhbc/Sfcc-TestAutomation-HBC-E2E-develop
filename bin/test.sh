npm run regression-test -- sfcc/common_features/sprint1/global_header.feature
npm run regression-test -- sfcc/common_features/Sprint2/sprint2.feature
npm run regression-test -- sfcc/common_features/Sprint3/PDP.feature

npm run regression-test -- sfcc/common_features/Sprint2/paypal.feature
# Checkout
npm run regression-test -- sfcc/common_features/Sprint5/Checkout_Shipping.feature --tags @Run
npm run regression-test -- sfcc/common_features/Sprint5/checkout_billing_and_payment.feature --tags @Run
npm run regression-test -- sfcc/common_features/Sprint5/checkout_order_review.feature --tags @Run
# Sprint Place Order and Express Checkout
npm run regression-test -- sfcc/common_features/Sprint6/PlaceOrder.feature --tags @Run
npm run regression-test -- sfcc/common_features/Sprint6/express_checkout.feature --tags @Run

# Bopis_product_order_placement
npm run regression-test -- sfcc/common_features/Sprint6/Bopis_product_order_placement.feature --tags @Run

# Paypal
npm run regression-test -- sfcc/common_features/Sprint5/Checkout_paypal.feature --tags @Run
# Gift Card
npm run regression-test -- sfcc/common_features/Sprint5/Checkout_gift_card_payment.feature --tags @Run

# Gift Card balance - My Account
npm run regression-test -- sfcc/common_features/Sprint5/gift_card_balance.feature --tags @Run
# Gift Card PDP 
npm run regression-test -- sfcc/common_features/Sprint5/gift_card_product.feature --tags @Run
#Sprint 4
npm run regression-test -- sfcc/common_features/Sprint4/addressbook.feature
npm run regression-test -- sfcc/common_features/Sprint4/createAccount.feature
npm run regression-test -- sfcc/common_features/Sprint4/myaccountPaymentpage.feature
npm run regression-test -- sfcc/common_features/Sprint4/profile.feature

npm run regression-test -- bm/common_features/sprint1/global_header.feature
npm run regression-test -- bm/common_features/Sprint2/sprint2.feature
npm run regression-test -- bm/common_features/Sprint2/paypal.feature


npm run regression-test -- sfcc/off5th/features/checkout/cobrandstore.feature
npm run regression-test -- sfcc/common_features/NewScenarios/suggested.feature

npm run regression-test -- sfcc/off5th/features/cobrandstore.feature
npm run regression-test -- sfcc/common_features/Sprint4/addressbook.feature
npm run regression-test -- sfcc/common_features/NewScenarios/promotion.feature
npm run regression-test -- sfcc/common_features/Sprint6/PlaceOrder_guest.feature

