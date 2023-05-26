const maxSubArray = require('./53-maximum-subarray');

test('nums = [-2,1,-3,4,-1,2,1,-5,4] returns 6', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test('nums = [1] returns 1', () => {
  expect(maxSubArray([1])).toBe(1);
});

test('nums = [5,4,-1,7,8] returns 23', () => {
  expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
});
