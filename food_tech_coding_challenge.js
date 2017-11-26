// using lodash for utility functions
const _ = require('lodash');


/**
 * Main function: getPortions
 * Inputs:
 *   ratio -> {}, item ids mapped to their ratios
 *   totalPortions -> Int, total number of portions
 * Output:
 *   {} -> the allocated portions per meal item
 */
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



/**
 * Helper functions
 */
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
