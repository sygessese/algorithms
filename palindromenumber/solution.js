
var string = function (x) {
  if (x < 0) { return false }
  x = x + "";
  if (x.length < 2) { return true }
  var left = 0;
  var right = x.length - 1;
  while (right >= left) {
    if (x[left] !== x[right]) { return false }
    left += 1;
    right -= 1;
  }
  return true;
};

var number = function (x) {
  if (x < 0) { return false }
  var oldx = x;
  var newx = 0;
  while (x !== 0) {
    let result = x % 10;
    newx = (result) + (newx * 10);
    x = (x - result) / 10;
  }
  return (oldx === newx) ? true : false;
};

module.exports.string = string;
module.exports.number = number;