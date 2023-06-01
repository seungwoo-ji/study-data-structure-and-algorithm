const { getSum, getSumRecursive } = require('./371-sum-of-two-integers');

test('a = 1, b = 2 returns 3', () => {
  expect(getSum(1, 2)).toBe(3);
});

test('a = 2, b = 3 returns 5', () => {
  expect(getSum(2, 3)).toBe(5);
});

test('a = -1, b = 3 returns 2', () => {
  expect(getSum(-1, 3)).toBe(2);
});

test('a = 1, b = 2 returns 3', () => {
  expect(getSumRecursive(1, 2)).toBe(3);
});

test('a = 2, b = 3 returns 5', () => {
  expect(getSumRecursive(2, 3)).toBe(5);
});

test('a = -1, b = 3 returns 2', () => {
  expect(getSumRecursive(-1, 3)).toBe(2);
});
