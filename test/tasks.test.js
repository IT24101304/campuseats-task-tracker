const test = require("node:test");
const assert = require("node:assert/strict");

const { calculateTotal } = require("../src/tasks");

test("calculates a regular customer total", () => {
  assert.equal(calculateTotal(250, 2, "regular"), 500);
});

test("applies the VIP discount", () => {
  assert.equal(calculateTotal(250, 2, "vip"), 450);
});

test("rejects negative values", () => {
  assert.throws(() => calculateTotal(-1, 2, "regular"), RangeError);
  assert.throws(() => calculateTotal(1, -2, "regular"), RangeError);
});

test("rejects non-numeric values", () => {
  assert.throws(() => calculateTotal("250", 2, "regular"), TypeError);
});
