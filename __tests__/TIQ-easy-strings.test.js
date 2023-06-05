const assert = require('assert');
var expect = require('chai').expect;
const {
    reverseString,
    reverseInteger,
    firstUnique,
    validAnagram,
    validPalindrome,
    stringToInteger,
    needleHaystack,
    longestCommonPrefix
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

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
describe("Valid Palindrome", () => {
    it("returns a boolean", () => {
        const input = "x";
        const actual = validPalindrome(input);
        assert.strictEqual(typeof(actual), 'boolean');
    });
    it("returns true for a valid palindrome", () => {
        const input = "A man, a plan, a canal: Panama";
        const expected = true;
        const actual = validPalindrome(input);
        assert.strictEqual(actual, expected);
    });
    it("returns false for an invalid palindrome", () => {
        const input = "A man, a plant, a canal: Panama";
        const expected = false;
        const actual = validPalindrome(input);
        assert.strictEqual(actual, expected);
    });
    it("returns true for an empty string", () => {
        const input = " ";
        const expected = true;
        const actual = validPalindrome(input);
        assert.strictEqual(actual, expected);
    });
});

describe("String to Integer", () => {
    it("returns a number", () => {
        const input = "x";
        const actual = stringToInteger(input);
        assert.strictEqual(typeof(actual), 'number');
    });
    it("converts a string of numbers only", () => {
        const input = "42";
        const expected = 42;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("ignores leading whitespace", () => {
        const input = "   42"
        const expected = 42;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("returns negative number if minus sign is included", () => {
        const input = "   -42";
        const expected = -42;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("returns positive number if plus sign is included", () => {
        const input = "   +42";
        const expected = 42;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("ignores non-digit characters", () => {
        const input = "3141 with words";
        const expected = 3141;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("ignores the rest of the string after first non-digit character after digits", () => {
        const input = "3141 with words 592";
        const expected = 3141;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("clamps numbers above 32-bit signed integer range", () => {
        const upperRange = 2 ** 31 + 1
        const input = upperRange.toString();
        const expected = 2 ** 31 - 1;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("clamps numbers below 32-bit signed integer range", () => {
        const lowerRange = -1 - (2 ** 31);
        const input = lowerRange.toString();
        const expected = 0 - (2 ** 31);
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("ignores words that come before digits" , () => {
        const input = "words and 987";
        const expected = 0;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("accounts for minus symbols after first digit", () => {
        const input = "314-159"
        const expected = 314;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("accounts for plus symbols after first digit", () => {
        const input = "314+159"
        const expected = 314;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("accounts for decimal symbols", () => {
        const input = "314.159"
        const expected = 314.159;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("accounts for decimal symbols outside of digits", () => {
        const input = ".314159"
        const expected = 0;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("accounts for concurrent minus and plus signs", () => {
        let input = "+-12";
        let expected = 0;
        let actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
        input = "+1-2";
        expected = 1;
        actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("ignores whitespace after digits", () => {
        let input = "   +3 141";
        let expected = 3;
        let actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("accounts for plus symbols between whitespace", () => {
        const input = "  +  415"
        const expected = 0;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("accounts for multiple plus spaces", () => {
        const input = " ++1";
        const expected = 0;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
    it("accounts for e numbers", () => {
        const input = "   -115579378e25"
        const expected = -115579378;
        const actual = stringToInteger(input);
        assert.strictEqual(actual, expected);
    });
});

describe("Needle Haystack", () => {
    it("returns a number", () => {
        const haystack = "x";
        const needle = "y";
        const actual = needleHaystack(haystack, needle);
        assert.strictEqual(typeof(actual), 'number');
    });
    it("returns the index of the first occurence of needle in haystack", () => {
        const haystack = "sadbutsad";
        const needle = "sad";
        const expected = 0;
        const actual = needleHaystack(haystack, needle);
        assert.strictEqual(actual, expected);
    });
    it("returns minus one if needle is not present in haystack", () => {
        const haystack = "leetcode";
        const needle = "leeto";
        const expected = -1;
        const actual = needleHaystack(haystack, needle);
        assert.strictEqual(actual, expected);
    });
});

describe("Longest Common Prefix", () => {
    it("returns a string", () => {
        const input = [];
        const actual = longestCommonPrefix(input);
        assert.strictEqual(typeof(actual), 'string');
    });
    it("returns the longest common prefix in an array of strings", () => {
        const input = ["cir","car"];
        const expected = "c"
        const actual = longestCommonPrefix(input);
        assert.strictEqual(actual, expected);
    });
    it("returns an empty string if there's no common prefix", () => {
        const input = ["dog","racecar","car"];
        const expected = "";
        const actual = longestCommonPrefix(input);
        assert.strictEqual(actual, expected);
    });
});