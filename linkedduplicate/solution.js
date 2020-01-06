
var storage = function (list) {
  var prev = null;
  var current = list.head;
  var tracker = {};

  while (current !== null) {
    if (tracker[current.val]) {
      prev.next = current.next;
    } else {
      tracker[current.val] = true;
      prev = current;
    }
    current = current.next;
  }

  list.tail = prev;
  return list;
}

var constant = function (list) {
  var prev = list.head;
  var val1 = list.head;
  var val2;
  while (val1 !== null) {
    val2 = val1.next;
    while (val2 !== null) {
      if (val2.val === val1.val) {
        prev.next = val2.next;
      } else {
        prev = val2;
      }
      val2 = val2.next;
    }
    val1 = val1.next;
  }
  list.tail = prev;
  return list;
}

module.exports.storage = storage;
module.exports.constant = constant;
