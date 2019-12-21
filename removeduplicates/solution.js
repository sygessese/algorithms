var removeDuplicates = function (nums) {
  var total = 0;
  var lastVal = undefined;
  var currVal = undefined;
  for (var i = 0; i < nums.length; i++) {
    currVal = nums[i];
    if (lastVal === undefined || lastVal !== currVal) {
      nums[total] = currVal;
      total++;
      lastVal = currVal;
    }
  }
  return total;
};

module.exports = removeDuplicates;