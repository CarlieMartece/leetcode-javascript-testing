const assert = require('assert');
var expect = require('chai').expect;
const {
    reverseString
} = require("../TIQ-easy-strings");

describe("Reverse String", () => {
    it("returns an array", () => {
        const actual = reverseString(["A"]);
        assert.equal(Array.isArray(actual), true);
    });
    it("reverses an even-lengthed string array", () => {
        let newString = ["A", "B"];
        let actual = reverseString(newString);
        let expected = ['B', 'A'];
        expect(actual).deep.to.equal(expected);
        newString = ["H","a","n","n","a","h","B","a","n","a","n","a"];
        actual = reverseString(newString);
        expected = ["a","n","a","n","a","B","h","a","n","n","a","H"];
        expect(actual).deep.to.equal(expected);
    });
    it("reverses an odd-lengthed string array", () => {
        let newString = ["A", "B", "C"];
        let actual = reverseString(newString);
        let expected = ['C','B', 'A'];
        expect(actual).deep.to.equal(expected);
        newString = ["H","a","n","n","a","h","B","a","n","a","n","a","!"];
        actual = reverseString(newString);
        expected = ["!","a","n","a","n","a","B","h","a","n","n","a","H"];
        expect(actual).deep.to.equal(expected);
    });
});