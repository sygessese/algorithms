const firstbadversion = require('./solution')

xtest('Returns first bad version', () => {
  var isBadVersion = function (v) {
    var versions = [false, false, false, true, true];
    return versions[v - 1]
  }
  var testone = firstbadversion(isBadVersion);
  expect(testone(5)).toEqual(4)

  isBadVersion = function (v) {
    var versions = [false, true];
    return versions[v - 1]
  }
  var testtwo = firstbadversion(isBadVersion);
  expect(testtwo(2)).toEqual(2)

  isBadVersion = function (v) {
    var versions = [true, true];
    return versions[v - 1]
  }
  var testthree = firstbadversion(isBadVersion);
  expect(testthree(2)).toEqual(1)
})