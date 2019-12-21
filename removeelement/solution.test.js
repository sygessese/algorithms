const removeelement = require('./solution');

xtest('Returns correct length, and modifies input array as expected', () => {
  var testone = [3, 2, 2, 3];
  expect(removeelement(testone, 3)).toEqual(2);
  expect(testone.slice(0, 2)).toEqual([2, 2]);
  var testtwo = [0, 1, 2, 2, 3, 0, 4, 2];
  expect(removeelement(testtwo, 2)).toEqual(5);
  expect(testtwo.slice(0, 5)).toEqual([0, 1, 3, 0, 4]);
})