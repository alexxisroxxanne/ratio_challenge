# FoodTech Coding Challenge

## Environment
Please ensure that you're running `node v6.0.0` or greater before attempting to use this program.

## Setup
1. Run `git clone https://github.com/alexxisroxxanne/ratio_challenge.git` to clone this repository
2. From your terminal, navigate to the cloned repo
3. Run `npm install` to install the `node_modules` folder

## Tests
1. Run `npm test` to run the test suite from `test.js` in your terminal

## Running the Code
If you want to test your own inputs, you can either write more tests with mocha/chai in `test.js` or you can follow the steps below to log output to the console.
1. Anywhere below the module imports at the top of the file, call the function `getPortions` with your sample input, e.g. `getPortions({1: 1}, 1);`
2. Log the output using, e.g. `console.log(getPortions({1: 1}, 1));`
3. In your terminal, from the base directory of this repo, run `node food_tech_coding_challenge.js` -- you should see your output logged to the console.
