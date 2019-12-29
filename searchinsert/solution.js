var searchInsert = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var mid;
  if (nums[left] > target)
    return 0;
  if (nums[right] < target)
    return right + 1;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target)
      return mid
    if (nums[mid - 1] < target && nums[mid + 1] > target)
      return mid
    if (nums[mid] < target)
      left = mid + 1;
    else
      right = mid - 1;
  }
  return low;
};

module.exports = searchInsert;