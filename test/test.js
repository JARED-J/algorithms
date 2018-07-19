const expect = require('chai').expect;
const addTwoNumbers = require('../algorithms/addTwoNumbers');
const noRepeat = require('../algorithms/noRepeat');
const {changePossibilities, cpHelper} = require('../algorithms/changePossibilities');
const { pathFinder } = require("../algorithms/pathFinder");

describe('addTwoNumbers()', () => {
    describe("function adds two inputs and returns the sum.", () => {
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
    })
});

describe("noRepeat()", () => {
    describe("Function takes an array of strings and returns the string with the most reoccurances.", () => {
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
    })
});

describe("changePossibilities()", () => {
    describe("The function takes a target sum and an array of denominations.", () => {
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

describe("pathFinder()", () => {
    describe("Finds path from top left to bottom right of a graph, made from two nested arrays.", () => {
        xit("Returns a boolean", () => {
            const maze = undefined;
            const output = pathFinder(maze);
            expect(output).to.be.a("boolean")
        });
        xit("Handles graphs with possible paths.", () => {
            let f = false;
            const maze = [
                [f, true, true, true],
                [f, f, true, true],
                [true, f, f, true],
                [true, true, f, f]
            ];
            const output = pathFinder(maze);
            expect(output).to.equal(true)
        });
        xit("Handles graphs with impossible path.", () => {
            let f = false;
            const maze = [
                [f, true, true, true],
                [f, true, true, true],
                [true, true, true, true],
                [f,f,f,true]
            ];
        });
        xit("Can handle paths with endless loops", () => {
            let f = false;
            const maze = [
                [f,f,true,true],
                [f,f,true,true],
                [true,true,true,true],
                [true,true,true,true]
            ];
        });
    });
});