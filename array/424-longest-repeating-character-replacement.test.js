const {
  characterReplacement,
  characterReplacementTwo,
  characterReplacementThree,
} = require('./424-longest-repeating-character-replacement');

test('s = "ABAB", k = 2 returns 4', () => {
  expect(characterReplacement('ABAB', 2)).toBe(4);
});

test('s = "AAAA", k = 2 returns 2', () => {
  expect(characterReplacement('AAAA', 2)).toBe(4);
});

test('s = "AABABBA", k = 1 returns 4', () => {
  expect(characterReplacement('AABABBA', 1)).toBe(4);
});

test('s = "ABAB", k = 2 returns 4', () => {
  expect(characterReplacementTwo('ABAB', 2)).toBe(4);
});

test('s = "AAAA", k = 2 returns 2', () => {
  expect(characterReplacementTwo('AAAA', 2)).toBe(4);
});

test('s = "AABABBA", k = 1 returns 4', () => {
  expect(characterReplacementTwo('AABABBA', 1)).toBe(4);
});

test('s = "ABAB", k = 2 returns 4', () => {
  expect(characterReplacementThree('ABAB', 2)).toBe(4);
});

test('s = "AAAA", k = 2 returns 2', () => {
  expect(characterReplacementThree('AAAA', 2)).toBe(4);
});

test('s = "AABABBA", k = 1 returns 4', () => {
  expect(characterReplacementThree('AABABBA', 1)).toBe(4);
});
