var squareroot = function (x) {
  var low = 0;
  var high = x;
  var mid;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2)
    if (mid * mid === x ||
      ((((mid - 1) * (mid - 1)) < x) && (((mid + 1) * (mid + 1)) > x)) &&
      ((mid * mid) < x))
      return mid
    if (mid * mid > x)
      high = mid - 1;
    else
      low = mid + 1;
  }
};

module.exports = squareroot;