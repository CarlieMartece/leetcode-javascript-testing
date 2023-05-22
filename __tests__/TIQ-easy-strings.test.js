const {
    reverseString
} = require("../TIQ-easy-strings");

describe("Reverse String", () => {
    test("Function returns a string", () => {
        const actual = reverseString("A");
        expect(typeof actual).toBe("string");
    });
});