var combinationSum = function (candidates, target) {
  var results = [];
  var combinationSumInner = function (candidates, sum, arr = []) {
    candidates.forEach((num, i) => {
      var result = arr.concat([num])
      if (num + sum === target) {
        results.push(result)
      } else if (num + sum < target) {
        combinationSumInner(candidates.slice(i), sum + num, result)
      }
    })
  }
  combinationSumInner(candidates, 0);
  return results;
};

module.exports = combinationSum;
