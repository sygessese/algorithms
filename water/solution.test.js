const water = require('./solution');

xtest('Finds greatest area', () => {
  expect(water([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  expect(water([1, 1])).toEqual(1);
  expect(water([9, 8, 6, 2, 5, 12, 8, 3, 7])).toEqual(56);
  expect(water([0, 0])).toEqual(0);
})