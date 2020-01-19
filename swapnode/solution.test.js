var swapnode = require('./solution');

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
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

xtest('Swaps values in pairs', () => {
  var test = new List();
  test.addNode(1);
  test.addNode(2);
  test.addNode(3);
  test.addNode(4);
  swapnode(test.head);
  expect(test.head.next.val).toEqual(1);
})

xtest('Returns correct head', () => {
  var test2 = new List();
  test2.addNode(1);
  test2.addNode(2);
  test2.addNode(3);
  test2.addNode(4);
  expect(swapnode(test2.head).val).toEqual(2);
})

