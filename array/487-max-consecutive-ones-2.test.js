const { findMaxConsecutiveOnes } = require('./487-max-consecutive-ones-2');

test('nums = [1,0,1,1,0] returns 4', () => {
  expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0])).toBe(4);
});

test('nums = [1,0,1,0,1] returns 3', () => {
  expect(findMaxConsecutiveOnes([1, 0, 1, 0, 1])).toBe(3);
});
