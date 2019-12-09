var letterCombinations = function (digits, results = [], str) {
  // input string
  // output array of strings
  // constraints none
  // edge cases none

  // decision tree, start with 23, branch for all '2' possibilities, branch again for all '3'
  // recursively removing string[0] at each call, return char + func(), when string = 0, return char
  var results = [];
  var letterCombinationsInner = function (digits, results, str = "") {
    if (digits.length === 0) {
      if (str.length > 0) {
        results.push(str);
      }
    } else {
      var options = chars[digits[0]]
      options.forEach((letter) => {
        letterCombinationsInner(digits.slice(1), results, str + letter);
      })
    }
  }
  letterCombinationsInner(digits, results);
  return results;

};

var chars = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}

module.exports = letterCombinations;

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].