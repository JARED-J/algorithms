const expect = require('chai').expect;
const addTwoNumbers = require('../algorithms/addTwoNumbers');

describe('addTwoNumbers()', function() {
    it('should add two numbers', function() {

        // ARRANGE
        let x = 5;
        let y = 1;
        let sum1 = x + y;

        // ACT
        let sum2 = addTwoNumbers(x, y);

        // ASSERT
        expect(sum2).to.be.equal(sum1);
    });
});