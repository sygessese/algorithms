const squareroot = require('./solution')

xtest('Expect closest integer to square root, rounded down', () => {
  expect(squareroot(0)).toEqual(0);
  expect(squareroot(1)).toEqual(1);
  expect(squareroot(4)).toEqual(2);
  expect(squareroot(8)).toEqual(2);
  expect(squareroot(9)).toEqual(3);
})