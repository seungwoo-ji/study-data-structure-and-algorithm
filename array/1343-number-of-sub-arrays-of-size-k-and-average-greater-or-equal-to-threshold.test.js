const {
  numOfSubarrays,
} = require('./1343-number-of-sub-arrays-of-size-k-and-average-greater-or-equal-to-threshold');

test('arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4 returns 3', () => {
  expect(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)).toBe(3);
});

test('arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5 returns 6', () => {
  expect(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)).toBe(6);
});
