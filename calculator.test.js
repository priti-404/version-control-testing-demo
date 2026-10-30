const { add, subtract, multiply, divide } = require("../src/calculator");

test("adds two numbers", () => {
  expect(add(5, 3)).toBe(8);
});

test("subtracts two numbers", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("multiplies two numbers", () => {
  expect(multiply(6, 4)).toBe(24);
});

test("divides two numbers", () => {
  expect(divide(20, 5)).toBe(4);
});

test("prevents division by zero", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
