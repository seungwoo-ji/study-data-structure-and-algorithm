const {
  climbStairs,
  climbStairsTwo,
  climbStairsThree,
} = require('./70-climbing-stairs');

test('n = 2 returns 2', () => {
  expect(climbStairs(2)).toBe(2);
});

test('n = 3 returns 3', () => {
  expect(climbStairs(3)).toBe(3);
});

test('n = 2 returns 2', () => {
  expect(climbStairsTwo(2)).toBe(2);
});

test('n = 3 returns 3', () => {
  expect(climbStairsTwo(3)).toBe(3);
});

test('n = 2 returns 2', () => {
  expect(climbStairsThree(2)).toBe(2);
});

test('n = 3 returns 3', () => {
  expect(climbStairsThree(3)).toBe(3);
});
