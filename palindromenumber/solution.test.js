const palindrome = require('./solution');

xtest('Determines if palindrome using string conversion', () => {
  expect(palindrome.string(-121)).toEqual(false);
  expect(palindrome.string(121)).toEqual(true);
  expect(palindrome.string(0)).toEqual(true);
  expect(palindrome.string(498)).toEqual(false);
  expect(palindrome.string(11111)).toEqual(true);
  expect(palindrome.string(123454321)).toEqual(true);
  expect(palindrome.string(9)).toEqual(true);
})

xtest('Determines if palindrome without using string conversion', () => {
  expect(palindrome.number(-121)).toEqual(false);
  expect(palindrome.number(121)).toEqual(true);
  expect(palindrome.number(0)).toEqual(true);
  expect(palindrome.number(498)).toEqual(false);
  expect(palindrome.number(11111)).toEqual(true);
  expect(palindrome.number(123454321)).toEqual(true);
  expect(palindrome.number(9)).toEqual(true);
})