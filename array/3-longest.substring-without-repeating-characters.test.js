const {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringTwo,
  lengthOfLongestSubstringThree,
} = require('./3-longest.substring-without-repeating-characters');

test('s = "abcabcbb" returns 3', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
});

test('s = "bbbbb" returns 1', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
});

test('s = "pwwkew" returns 3', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});

test('s = "dvdf" returns 3', () => {
  expect(lengthOfLongestSubstring('dvdf')).toBe(3);
});

test('s = "abcabcbb" returns 3', () => {
  expect(lengthOfLongestSubstringTwo('abcabcbb')).toBe(3);
});

test('s = "bbbbb" returns 1', () => {
  expect(lengthOfLongestSubstringTwo('bbbbb')).toBe(1);
});

test('s = "pwwkew" returns 3', () => {
  expect(lengthOfLongestSubstringTwo('pwwkew')).toBe(3);
});

test('s = "dvdf" returns 3', () => {
  expect(lengthOfLongestSubstringTwo('dvdf')).toBe(3);
});

test('s = "abcabcbb" returns 3', () => {
  expect(lengthOfLongestSubstringThree('abcabcbb')).toBe(3);
});

test('s = "bbbbb" returns 1', () => {
  expect(lengthOfLongestSubstringThree('bbbbb')).toBe(1);
});

test('s = "pwwkew" returns 3', () => {
  expect(lengthOfLongestSubstringThree('pwwkew')).toBe(3);
});

test('s = "dvdf" returns 3', () => {
  expect(lengthOfLongestSubstringThree('dvdf')).toBe(3);
});
