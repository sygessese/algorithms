function permutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var storage = new Array(128).fill(0);
  for (var i = 0; i < str1.length; i++) {
    storage[str1.charCodeAt(i)]++;
  }
  for (var j = 0; j < str2.length; j++) {
    storage[str2.charCodeAt(j)]--;
    if (storage[str2.charCodeAt(j)] < 0) {
      return false;
    }
  }
  return true;
}

module.exports = permutation;