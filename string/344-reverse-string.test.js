const reverseString = require('./344-reverse-string');

test('reverse ["h","e","l","l","o"] to be ["o","l","l","e","h"]', () => {
  expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
    'o',
    'l',
    'l',
    'e',
    'h',
  ]);
});

test('reverse ["H","a","n","n","a","h"] to be ["h","a","n","n","a","H"]', () => {
  expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toEqual([
    'h',
    'a',
    'n',
    'n',
    'a',
    'H',
  ]);
});
