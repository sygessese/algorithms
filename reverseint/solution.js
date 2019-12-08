function reverse(x) {
  if (x === 0) { return 0 }
  var positive = x < 0 ? false : true;
  var result = "";
  var copy = positive ? x : x * -1;
  var ones;
  while (copy !== 0) {
    ones = copy % 10;
    result = result + ones;
    copy = (copy - ones) / 10;
  }
  result = parseInt(result, 10);
  return (result > 2147483647) ? 0 : (positive ? result : result * -1);
};

module.exports = reverse;