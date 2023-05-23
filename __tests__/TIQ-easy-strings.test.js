const assert = require('assert');
const {
    reverseString
} = require("../TIQ-easy-strings");

describe("Reverse String", () => {
    it("returns a string", () => {
        const actual = reverseString("A");
        assert.ok(typeof actual === "string");
    });
});