const haystack = require('./solution');

xtest('Correctly finds first index of needle in haystack', () => {
  expect(haystack('helollo', 'll')).toEqual(4);
  expect(haystack('hellollo', 'll')).toEqual(2);
  expect(haystack('helollo', 'h')).toEqual(0);
})

xtest('Returns -1 when needle not found', () => {
  expect(haystack('aaaaa', 'aab')).toEqual(-1);
  expect(haystack('aaaaa', 'b')).toEqual(-1);
})

xtest('Returns 0 when needle is an empty string', () => {
  expect(haystack('hello', '')).toEqual(0);
})