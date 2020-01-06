

var firstbadversion = function (isBadVersion) {
  return function (n) {
    var left = 1;
    var right = n;
    var mid;

    while (left < right) {
      mid = left + Math.floor((right - left) / 2)
      if (isBadVersion(mid))
        right = mid
      else
        left = mid + 1
    }
    return left
  };
};

module.exports = firstbadversion