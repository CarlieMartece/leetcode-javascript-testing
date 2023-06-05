const assert = require('assert');
const {
    deleteNode
} = require("../TIQ-easy-linked-list");

describe ("Linked List", () => {
    it("returns nothing", () => {
        const actual = deleteNode(3);
        assert.strictEqual(actual, undefined);
    })
});