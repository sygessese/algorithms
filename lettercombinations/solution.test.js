var letter = require('./solution');

test('Finds all combinations', () => {
  var testOne = letter("23");
  expect(testOne).toHaveLength(9);
  expect(testOne).toContainEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
})