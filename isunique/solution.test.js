const isunique = require('./solution');

xtest('Finds repeat characters', () => {
  var testone = isunique('acbdefghijklmnopqrstuvwxyy');
  expect(testone).toEqual(false);
  var testtwo = isunique('acbdefegh');
  expect(testtwo).toEqual(false);
})

xtest('Determines truly unique strings', () => {
  var testthree = isunique('acbdefghijk');
  expect(testthree).toEqual(true);
  var testfour = isunique('aoih356');
  expect(testfour).toEqual(true);
})