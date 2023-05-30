const assert = require('assert');
var expect = require('chai').expect;
const {
    reverseString,
    reverseInteger,
    firstUnique,
    validAnagram
} = require("../TIQ-easy-strings");

describe("Reverse String", () => {
    it("returns an array", () => {
        const actual = reverseString(["A"]);
        assert.strictEqual(Array.isArray(actual), true);
    });
    it("reverses an even-lengthed string array", () => {
        let newString = ["A", "B"];
        let actual = reverseString(newString);
        let expected = ['B', 'A'];
        assert.strictEqual(actual[0], expected[0]);
        newString = ["H","a","n","n","a","h","B","a","n","a","n","a"];
        actual = reverseString(newString);
        expected = ["a","n","a","n","a","B","h","a","n","n","a","H"];
        assert.deepEqual(actual, expected);
    });
    it("reverses an odd-lengthed string array", () => {
        let newString = ["A", "B", "C"];
        let actual = reverseString(newString);
        let expected = ['C','B', 'A'];
        assert.strictEqual(actual[0], expected[0]);
        newString = ["H","a","n","n","a","h","B","a","n","a","n","a","!"];
        actual = reverseString(newString);
        expected = ["!","a","n","a","n","a","B","h","a","n","n","a","H"];
        expect(actual).deep.to.equal(expected);
    });
});

describe("Reverse Integer", () => {
    it("returns a number", () => {
        const actual = reverseInteger(3);
        assert.strictEqual(typeof(actual), 'number');
    });
    it("reverses a positive number's digits", () => {
        const input = 314;
        const expected = 413;
        const actual = reverseInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("reverses a negative number's digits", () => {
        const input = -123;
        const expected = -321;
        const actual = reverseInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("returns 0 for numbers over 32-bit integer range", () => {
        const input = 2 ** 32;
        const expected = 0;
        const actual = reverseInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("returns 0 for numbers under 32-bit integer range", () => {
        const input = 0 - (2 ** 32);
        const expected = 0;
        const actual = reverseInteger(input);
        assert.strictEqual(actual, expected);
    });
});

describe("First Unique Character in a String", () => {
    it("returns a number", () => {
        const actual = firstUnique("x");
        assert.strictEqual(typeof(actual), 'number');
    });
    it("returns the index of a string's first repeating character", () => {
        const input = "loveleetcode";
        const expected = 2;
        const actual = firstUnique(input);
        assert.strictEqual(actual, expected);
    });
    it("returns -1 if no unique character exists", () => {
        const input = "aabb";
        const expected = -1;
        const actual = firstUnique(input);
        assert.strictEqual(actual, expected);
    });
});

describe("Valid Anagram", () => {
    it("returns a boolean", () => {
        const inputS = "x";
        const inputT = "y";
        const actual = validAnagram(inputS, inputT);
        assert.strictEqual(typeof(actual), 'boolean');
    });
    it("returns false if strings are not valid anagrams", () => {
        const inputS = "anatram";
        const inputT = "nagaram";
        const expected = false;
        const actual = validAnagram(inputS, inputT);
        assert.strictEqual(actual, expected);
    });
    it("returns true if strings are valid anagrams", () => {
        const inputS = "anagram";
        const inputT = "nagaram";
        const expected = true;
        const actual = validAnagram(inputS, inputT);
        assert.strictEqual(actual, expected);
    });
});