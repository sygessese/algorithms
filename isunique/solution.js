function isunique(str) {
  if (str.length > 128) {
    return false;
  }
  var storage = new Array(128).fill(false);
  for (var i = 0; i < str.length; i++) {
    if (storage[str.charCodeAt(i)]) {
      return false;
    } else {
      storage[str.charCodeAt(i)] = true;
    }
  }
  return true;
}

module.exports = isunique;