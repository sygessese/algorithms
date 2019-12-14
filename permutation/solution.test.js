const permutation = require('./solution');

test('Correctly finds permutations', () => {
  expect(permutation('dog', 'god')).toEqual(true);
  expect(permutation('carrot', 'rroatc')).toEqual(true);
  expect(permutation('boArd1', 'oA1brd')).toEqual(true);
})

test('Accounts for case sensitivity', () => {
  expect(permutation('dog', 'God')).toEqual(false);
  expect(permutation('pear', 'Pear')).toEqual(false);
  expect(permutation('dog', 'God')).toEqual(false);
})

test('Accounts for white spaces and mismatched lengths', () => {
  expect(permutation('dog', ' god')).toEqual(false);
  expect(permutation('horse', 'rose')).toEqual(false);
  expect(permutation(' god', ' ')).toEqual(false);
})