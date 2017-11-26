// judged on:
  // program correctness / specs
  // naming ??
  // documentation
  // testing
  // performance
  // design

// ratio problem:
  // users can specify a certain ratio of items they would like their meal to consist of
  // they can also specify the total number of portions the meal will consist of
  // program will then determine how many portions should be allocated
  // for each item
    // ex: a meal needs a ratio of 1-to-2 vegetarian to meat for 15 portions
    // result: 5 portions of vegetarian item, 10 portions of meat item

// function
  // input 1: {1: '1:2', 2: '2:1'} - ratios for meal
  // input 2: int - portions for meal
  // return value: {1: 5, 2: 10}
    // chooses the largest remainder for allocating non-int portion counts?
    // if no largest remainder, item with the smallest numeric id should be chosen
    // accepts any number of items and ratios

// tests: write them
// f({}, 1) -> {}
// f({1: 1}, 2) -> {1: 2}
// f({1: 1}, 0) -> {1: 0}
// f({1: 1, 2: 1, 3: 1}, 11) -> {1: 4, 2: 4, 3: 3}
// f({1: 2, 2: 1, 3: 1}, 11) -> {1: 6, 2: 3, 3: 2}

// (total / num items) * ratio

// using lodash for utility functions
const _ = require('lodash');



function getPortions(ratios, totalPortions) {
  if (!hasValidArguments(ratios, totalPortions)) {
    return {};
  }

  let remainingPortions = totalPortions;
  let totalRatio = getTotalRatio(ratios);

  let portionedMeal = _.reduce(ratios, (portionedItems, currentRatio, itemId) => {
    let portion = getItemPortion(currentRatio, totalPortions, remainingPortions, totalRatio);
    portionedItems[itemId] = portion;
    remainingPortions -= portion;
    return portionedItems;
  }, {});

  return portionedMeal;
}



function getTotalRatio(ratios) {
  return _.reduce(ratios, (totalRatio, ratio) => {
    totalRatio += ratio;
    return totalRatio;
  }, 0);
}



function getItemPortion(ratio, totalPortions, remainingPortions, totalRatio) {
  if (!remainingPortions || !ratio) {
    return 0;
  }

  let portion = _.round( (totalPortions / totalRatio) * ratio );

  if (portion > remainingPortions) {
    portion = remainingPortions;
  }

  return portion;
}



function hasValidArguments(ratios, totalPortions) {
  if ( !_.isPlainObject(ratios) || !_.isNumber(totalPortions) ) {
    return false;
  }
  let isValid = true;
  _.each(ratios, (ratio, mealItem) => {
    // convert mealItemNumber from string to number (properties are always strings)
    let mealItemNumber = _.toNumber(mealItem);
    if ( _.isNaN(mealItemNumber) || !_.isNumber(ratio) ) {
      isValid = false;
    }
  });
  return isValid;
}



module.exports = getPortions;
