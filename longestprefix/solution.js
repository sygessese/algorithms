var longestprefix = function (strs) {
  var prefix = strs.length > 0 ? strs[0] : "";
  for (var i = 1; i < strs.length; i++) {
    if (prefix !== strs[i].substring(0, prefix.length)) {
      while (prefix !== strs[i].substring(0, prefix.length)) {
        prefix = prefix.substring(0, prefix.length - 1);
      }
    }
  }
  return prefix
};

module.exports = longestprefix