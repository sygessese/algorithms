var letter = require('./solution');

xtest('Finds all combinations', () => {
  var testOne = letter("23");
  expect(testOne).toHaveLength(9);
  expect(testOne).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
})