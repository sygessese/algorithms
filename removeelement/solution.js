var removeelement = function (nums, val) {
  var current = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[current] = nums[i];
      current++;
    }
  }
  return current
};

module.exports = removeelement;