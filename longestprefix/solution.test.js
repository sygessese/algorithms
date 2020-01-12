const longestprefix = require('./solution')

xtest('Returns common prefix', () => {
  expect(longestprefix(["flower", "flow", "flight"])).toEqual("fl");
  expect(longestprefix(["dog", "racecar", "car"])).toEqual("");
});
