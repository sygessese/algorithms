const removeDuplicates = require('./solution');

xtest('Returns correct length, and modifies input array as expected', () => {
  var testone = [1, 1, 2];
  expect(removeDuplicates(testone)).toEqual(2);
  expect(testone.slice(0, 2)).toEqual([1, 2]);
  var testtwo = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(removeDuplicates(testtwo)).toEqual(5);
  expect(testtwo.slice(0, 5)).toEqual([0, 1, 2, 3, 4]);
})
