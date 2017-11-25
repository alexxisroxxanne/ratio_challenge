/**
 * Unit Tests for food_tech_coding_challenge.js
 */

const expect = require('chai').expect,
      getPortions = require('./food_tech_coding_challenge.js');



describe('getPortions', () => {

  describe('function structure', () => {
    it('should be a function', () => {
      expect(getPortions).to.be.a('function');
    });

    it('should return an object', () => {
      expect(getPortions({1: 1}, 0)).to.be.an('object');
    });

    it('should gracefully handle erroneous inputs', () => {
      let erroneousArguments = ['a string', {}, ['an extra input']];
      let erroneousPortions1 = {1: 'not a portion'};
      let erroneousPortions2 = {'not a portion': 2};
      expect(getPortions(...erroneousArguments)).to.deep.equal({});
      expect(getPortions(erroneousPortions1, 1)).to.deep.equal({});
      expect(getPortions(erroneousPortions2, 1)).to.deep.equal({});
    });
  });


  describe('sample outputs', () => {
    it('should return a blank object when no ratios are input', () => {
      let mealWithNoRatios = getPortions({}, 1);
      expect(mealWithNoRatios).to.deep.equal({});
    });

    it('should assign all portions to the item when there is only one meal item', () => {
      let singleItemMeal1 = getPortions({1: 1}, 2);
      let singleItemMeal2 = getPortions({1: 1}, 0);
    });

    it('should handle a ratio of 0', () => {

    });
  });
});
