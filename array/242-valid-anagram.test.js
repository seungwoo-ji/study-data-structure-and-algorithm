const { isAnagram, isAnagramTwo } = require('./242-valid-anagram');

test('s = "anagram", t = "nagaram" returns true', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true);
});

test('s = "rat", t = "car" returns false', () => {
  expect(isAnagram('rat', 'car')).toBe(false);
});

test('s = "aacc", t = "ccac" returns false', () => {
  expect(isAnagram('aacc', 'ccac')).toBe(false);
});

test('s = "anagram", t = "nagaram" returns true', () => {
  expect(isAnagramTwo('anagram', 'nagaram')).toBe(true);
});

test('s = "rat", t = "car" returns false', () => {
  expect(isAnagramTwo('rat', 'car')).toBe(false);
});

test('s = "aacc", t = "ccac" returns false', () => {
  expect(isAnagramTwo('aacc', 'ccac')).toBe(false);
});
