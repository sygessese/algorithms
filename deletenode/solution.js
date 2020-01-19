class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(val) {
    var newNode = new Node(val);
    if (this.head) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    return this.head;
  }

  addHead(val) {
    var newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  deleteNode(val) {
    if (this.head.val === val) {
      this.head = this.head.next;
      return this.head;
    }
    var current = this.head;
    while (current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
        if (!(current.next)) {
          this.tail = current;
        }
        return this.head;
      }
      current = current.next;
    }
    return false;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = List;