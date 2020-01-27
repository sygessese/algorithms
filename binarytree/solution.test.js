const symmetricTree = require('./solution')

class Tree {
  constructor(val = null, duplicates = false) {
    this.root = val === null ? null : new treeNode(val);
    this.addNode = duplicates === false ? this.checkIfDuplicate : this.insert;
  }

  checkIfDuplicate(val) {
    if (this.root !== null && this.findNode(val)) return
    this.insert(val)
  }

  insert(val) {
    if (this.root === null) {
      this.root = new treeNode(val)
      return
    }
    var fakeQueue = [];
    fakeQueue.push(this.root);
    while (fakeQueue.length > 0) {
      var current = fakeQueue[0];
      if (current.val === null) {
        current.val = new treeNode(val);
      } else {
        if (current.left) {
          fakeQueue.push(current.left)
        } else {
          current.left = new treeNode(val)
          return
        }
        if (current.right) {
          fakeQueue.push(current.right)
        } else {
          current.right = new treeNode(val)
          return
        }
      }
      fakeQueue = fakeQueue.slice(1);
    }
  }

  findNode(val, node = this.root) {
    // search and return boolean of if found
    if (node.val === val) return true
    var left = node.left ? this.findNode(val, node.left) : false;
    var right = node.right ? this.findNode(val, node.right) : false;
    return (left || right);
  }

  deleteNode(val) {
    // first unless specified all
    // replace with right most node
  }

  valuesInOrder(node = this.root, result = []) {  // left, self, right
    if (node.left) result.concat(this.valuesInOrder(node.left, result))
    result.push(node.val)
    if (node.right) result.concat(this.valuesInOrder(node.right, result))
    return result
  }

  valuesPostOrder(node = this.root, result = []) {  // left, right, self
    if (node.left) result.concat(this.valuesPostOrder(node.left, result))
    if (node.right) result.concat(this.valuesPostOrder(node.right, result))
    result.push(node.val)
    return result
  }

  valuesPreOrder(node = this.root, result = []) {  // self, left, right
    result.push(node.val)
    if (node.left) result.concat(this.valuesPreOrder(node.left, result))
    if (node.right) result.concat(this.valuesPreOrder(node.right, result))
    return result
  }

  valuesByLevel() {
    var result = [];
    var queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      var queueLength = queue.length;
      var currentRow = [];
      for (var i = 0; i < queueLength; i++) {
        currentRow.push(queue[i].val);
        if (queue[i].left) queue.push(queue[i].left)
        if (queue[i].right) queue.push(queue[i].right)
      }
      queue = queue.slice(queueLength)
      result.push(currentRow)
    }
    return result;
  }
}

class treeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

var testTree = new Tree();
testTree.addNode(1);
testTree.addNode(1);
testTree.addNode(1);
testTree.addNode(2);
testTree.addNode(3);
testTree.addNode(4);

var testTree2 = new Tree(null, true);
testTree2.addNode(1);
testTree2.addNode(2);
testTree2.addNode(2);
testTree2.addNode(3);
testTree2.addNode(4);
testTree2.addNode(4);
testTree2.addNode(3);

test('Tree class has add functionality', () => {
  expect(testTree.root.val).toEqual(1);
  expect(testTree.root.left.val).toEqual(2);
  expect(testTree.root.right.val).toEqual(3);
  expect(testTree.root.left.left.val).toEqual(4);
})

test('Tree class supports duplicate value functionality', () => {
  expect(testTree2.root.val).toEqual(1);
  expect(testTree2.root.left.val).toEqual(2);
  expect(testTree2.root.right.val).toEqual(2);
  expect(testTree2.root.left.left.val).toEqual(3);
})

test('Tree class supports in order traversal', () => {
  expect(testTree.valuesInOrder()).toEqual([4, 2, 1, 3])
  expect(testTree2.valuesInOrder()).toEqual([3, 2, 4, 1, 4, 2, 3])
})

test('Tree class supports post order traversal', () => {
  expect(testTree.valuesPostOrder()).toEqual([4, 2, 3, 1])
  expect(testTree2.valuesPostOrder()).toEqual([3, 4, 2, 4, 3, 2, 1])
})

test('Tree class supports pre order traversal', () => {
  expect(testTree.valuesPreOrder()).toEqual([1, 2, 4, 3])
  expect(testTree2.valuesPreOrder()).toEqual([1, 2, 3, 4, 2, 4, 3])
})

test('Tree class returns boolean on existance of a value', () => {
  expect(testTree.findNode(4)).toEqual(true)
  expect(testTree.findNode(5)).toEqual(false)
  expect(testTree2.findNode(3)).toEqual(true)
  expect(testTree2.findNode(7)).toEqual(false)
})

test('Tree class returns level ordered nodes', () => {
  expect(testTree.valuesByLevel()).toEqual([[1], [2, 3], [4]]);
  expect(testTree2.valuesByLevel()).toEqual([[1], [2, 2], [3, 4, 4, 3]]);
})

test('Symmetric-Tree fuction accurately determines mirror equality', () => {
  expect(symmetricTree(testTree.root)).toEqual(false);
  expect(symmetricTree(testTree2.root)).toEqual(true);
})
