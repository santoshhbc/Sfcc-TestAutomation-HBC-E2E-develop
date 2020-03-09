# nightwatch-core

Installation and Configuration of Nightwatch Framework

## Running local test

1) to get started, in terminal, install the following 
```
npm i
```

2) for local browser testing, in nightwatch.conf.js file
* Example: npm run regression-test -- sfcc/common_features/Sprint6/PlaceOrder_guest.feature

3) Execution of tests
* option 1: to execute the entire test suite by banner, input the following in the terminal
```
npm run test
```
```

## Generate HTML report locally 
1) in terminal
```
node create-multiple-html-report.js [banner]
```
2) in a web browser, copy and paste the html URL in a browser