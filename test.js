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
      expect(singleItemMeal1).to.deep.equal({1: 2});
      expect(singleItemMeal2).to.deep.equal({1: 0});
    });

    it('should handle a ratio of 0', () => {
      let zeroPortions1 = getPortions({1: 0, 2: 1}, 1);
      let zeroPortions2 = getPortions({1: 0}, 8);
      expect(zeroPortions1).to.deep.equal({1: 0, 2: 1});
      expect(zeroPortions2).to.deep.equal({1: 0});
    });

    it('should assign the correct portions', () => {
      let args1 = [{1: 1, 2: 1, 3: 1}, 12];
      expect(getPortions(...args1)).to.deep.equal({1: 4, 2: 4, 3: 4});

      let args2 = [{1: 1, 2: 1, 3: 1}, 11];
      expect(getPortions(...args2)).to.deep.equal({1: 4, 2: 4, 3: 3});

      let args3 = [{1: 2, 2: 1, 3: 1}, 12];
      expect(getPortions(...args3)).to.deep.equal({1: 6, 2: 3, 3: 3});

      let args4 = [{1: 2, 2: 1, 3: 1}, 11];
      expect(getPortions(...args4)).to.deep.equal({1: 6, 2: 3, 3: 2});
    });

    it('should handle any number of items and ratios', () => {
      expect(getPortions({1: 1, 2: 2}, 15)).to.deep.equal({1: 5, 2: 10});
      let largeIn = {1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1};
      let largeOut = {1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 10, 7: 10, 8: 10, 9: 10, 10: 10};
      expect(getPortions(largeIn, 100)).to.deep.equal(largeOut);
    });
  });
});
