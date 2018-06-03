const expect = require('chai').expect;
const addTwoNumbers = require('../algorithms/addTwoNumbers');

describe('addTwoNumbers()', function() {
    it('should add two numbers', function() {
        // ARRANGE
        let sum1 = 6;

        // ACT
        let sum2 = addTwoNumbers(5, 1);

        // ASSERT
        expect(sum2).to.be.equal(sum1);
    });
});