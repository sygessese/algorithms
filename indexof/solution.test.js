const indexof = require('./solution');

xtest('Finds index of needle', () => {
  expect(indexof('hippie', 'pie')).toEqual(3);
})

xtest('Returns -1 when not found', () => {
  expect(indexof('hippie', 'yo')).toEqual(-1);
})

xtest('Returns 0 when needle is an empty string', () => {
  expect(indexof('hippie', '')).toEqual(0);
})

