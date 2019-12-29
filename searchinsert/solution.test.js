const searchinsert = require('./solution')

xtest('Returns index of target if found, or where it should be if not found', () => {
  expect(searchinsert([1, 3, 5, 6], 5)).toEqual(2);
  expect(searchinsert([1, 3, 5, 6], 2)).toEqual(1);
  expect(searchinsert([1, 3, 5, 6], 7)).toEqual(4);
  expect(searchinsert([1, 3, 5, 6], 0)).toEqual(0);
})