var water = function (heights) {
  var left = 0;
  var right = heights.length - 1;
  var max = 0;
  while (left < right) {
    current = heights[left] > heights[right] ? heights[right] * (right - left) : heights[left] * (right - left);
    max = current > max ? current : max;
    heights[left] > heights[right] ? right = right - 1 : left = left + 1;
  }
  return max;
}

module.exports = water;