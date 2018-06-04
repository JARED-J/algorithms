const expect = require('chai').expect;
const addTwoNumbers = require('../algorithms/addTwoNumbers');
const noRepeat = require('../algorithms/noRepeat');

describe('addTwoNumbers()', () => {
    it('should add two numbers', () => {
        // ARRANGE
        let sum1 = 6;
        // ACT
        let sum2 = addTwoNumbers(5, 1);
        // ASSERT
        expect(sum2).to.be.equal(sum1);
    });
    it("Output should be the typeOf number", () => {
        let output = addTwoNumbers(1,1);
        expect(output).to.be.a("number");
    });
});

describe("noRepeat()", () => {
    it("Output should be a string", () => {
        const arr = ["input"];
        const output = noRepeat(arr);
        expect(output).to.be.a("string");
    });
    it("Returns an empty string if the input is an empty array", () => {
        const output = noRepeat([]);
        expect(output).to.equal('');
    });
    it("Returns the string with the most occurances", () => {
        const arr = ["test", "hello", "world", "test", "mocha", "chai", "jasmine", "world", "test"];
        const output = noRepeat(arr);
        expect(output).to.equal("test");
    });
});