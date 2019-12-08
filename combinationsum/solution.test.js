const combinationsum = require('./solution');

test("finds simple combinations", () => {
  var testOne = combinationsum([2, 3, 6, 7], 7);
  expect(testOne).toHaveLength(2);
  expect(testOne).toContainEqual([7]);
  expect(testOne).toContainEqual([2, 2, 3]);
})

test("finds combinations including duplicates", () => {
  var testTwo = combinationsum([2, 3, 5], 8);
  expect(testTwo).toHaveLength(3);
  expect(testTwo).toContainEqual([2, 2, 2, 2]);
  expect(testTwo).toContainEqual([2, 3, 3]);
  expect(testTwo).toContainEqual([3, 5]);
})
