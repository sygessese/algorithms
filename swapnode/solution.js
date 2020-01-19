var swapnode = function (head) {
  var current = head;
  var first, second;
  while (current && current.next) {
    first = current.val;
    second = current.next.val;
    current.val = second;
    current.next.val = first;
    current = current.next.next;
  }
  return head;
}

module.exports = swapnode;