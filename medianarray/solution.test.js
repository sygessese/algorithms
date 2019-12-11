const medianarray = require('./solution');

test('Finds median when one array nests within another', () => {
  testonearrayone = [1, 3];
  testonearraytwo = [2];
  testone = medianarray(testonearrayone, testonearraytwo);
  expect(testone).toEqual(2.0);
})

test('Finds median when arrays do not overlap', () => {
  testtwoarrayone = [1, 2];
  testtwoarraytwo = [3, 4];
  testtwo = medianarray(testtwoarrayone, testtwoarraytwo);
  expect(testtwo).toEqual(2.5);
})