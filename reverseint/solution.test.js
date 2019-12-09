const reverse = require('./solution');

xtest('reverses positive numbers', () => {
  expect(reverse(123)).toBe(321);
})

xtest('reverses negative numbers', () => {
  expect(reverse(-123)).toBe(-321);
})

xtest(`accounts for leading 0's`, () => {
  expect(reverse(120)).toBe(21);
})