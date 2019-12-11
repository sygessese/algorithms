var combinationSum = function (candidates, target, sum = 0, arr = []) {
  var results = [];
  candidates.forEach((num, i) => {
    var result = arr.concat([num])
    if (num + sum === target) {
      results.push(result)
    } else if (num + sum < target) {
      results = results.concat(combinationSum(candidates.slice(i), target, sum + num, result));
    }
  })
  return results;
}

module.exports = combinationSum;

