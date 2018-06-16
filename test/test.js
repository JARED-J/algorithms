const expect = require('chai').expect;
const addTwoNumbers = require('../algorithms/addTwoNumbers');
const noRepeat = require('../algorithms/noRepeat');
const {changePossibilities, cpHelper} = require('../algorithms/changePossibilities');

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

describe("Create a function named changePossibilities()", () => {
    describe("The function takes a target sum and an array of denominations", () => {
        it("Returns an integer.", () => {
            const output = changePossibilities(1, [1])
            expect(output).to.be.a('number');
        });
        it("Returns the amount of possible combinations that can be made to reach the target sum.", () => {
            const output = changePossibilities(9, [1,2,3]);
            expect(output).to.equal(12)
        });
    });
});