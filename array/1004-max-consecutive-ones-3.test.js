const { longestOnes } = require('./1004-max-consecutive-ones-3');

test('nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2 returns 6', () => {
  expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
});

test('nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3 returns 10', () => {
  expect(
    longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
  ).toBe(10);
});
