const List = require('./solution');

xtest('Deletes node', () => {
  var testList = new List();
  testList.addNode(2);
  testList.addNode(3);
  testList.addNode(4);
  expect(testList.head.val).toEqual(2);
  testList.addHead(1);
  expect(testList.head.val).toEqual(1);
  testList.deleteNode(1);
  expect(testList.head.val).toEqual(2);
  expect(testList.head.next.val).toEqual(3);
  expect(testList.deleteNode(7)).toEqual(false);
  testList.deleteNode(4);
  expect(testList.tail.val).toEqual(3);
})