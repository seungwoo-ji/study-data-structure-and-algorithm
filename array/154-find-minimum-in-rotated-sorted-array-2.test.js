const findMin = require('./154-find-minimum-in-rotated-sorted-array-2');

test('nums = [1,3,5] returns 1', () => {
  expect(findMin([1, 3, 5])).toBe(1);
});

test('nums = [2,2,2,0,1] returns 0', () => {
  expect(findMin([2, 2, 2, 0, 1])).toBe(0);
});
