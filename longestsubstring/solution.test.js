const longestsubstring = require('./solution');

xtest('Find length of longest substring with nonrepeating characters', () => {
  expect(longestsubstring('')).toEqual(0);
  expect(longestsubstring('a')).toEqual(1);
  expect(longestsubstring('vhvhs')).toEqual(3);
  expect(longestsubstring('pwwkahew')).toEqual(5);
  expect(longestsubstring('dvdf')).toEqual(3);
})