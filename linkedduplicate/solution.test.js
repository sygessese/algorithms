var linkedduplicate = require('./solution');

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

xtest('Removes duplicates using storage object', () => {
  var test = new List();
  test.addNode(2);
  test.addNode(7);
  test.addNode(3);
  test.addNode(7);
  test.addNode(9);
  test.addNode(2);
  linkedduplicate.storage(test);
  expect(test.tail.val).toEqual(9);
})

xtest('Removes duplicates in place', () => {
  var test2 = new List();
  test2.addNode(2);
  test2.addNode(7);
  test2.addNode(3);
  test2.addNode(7);
  test2.addNode(8);
  test2.addNode(2);
  linkedduplicate.constant(test2);
  expect(test2.tail.val).toEqual(8);
})

// 2, 7, 3, 7, 9, 2