var longestsubstring = function (s) {
  var max = 0;
  var left = 0;
  var right = 0;
  var set = new Set();
  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    } else {
      set.add(s[right]);
      right += 1;
      max = (right - left) > max ? right - left : max;
    }
  }
  return max;
}

module.exports = longestsubstring;