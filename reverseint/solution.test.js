const reverse = require('./solution');

test('reverses positive numbers', () => {
  expect(reverse(123)).toBe(321);
})

test('reverses negative numbers', () => {
  expect(reverse(-123)).toBe(-321);
})

test(`accounts for leading 0's`, () => {
  expect(reverse(120)).toBe(21);
})
