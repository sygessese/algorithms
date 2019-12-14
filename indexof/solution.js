function indexof(haystack, needle) {
  if (needle === "") {
    return 0;
  }
  for (var i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) {
        return i
      }
    }
  }
  return -1;
};

module.exports = indexof;