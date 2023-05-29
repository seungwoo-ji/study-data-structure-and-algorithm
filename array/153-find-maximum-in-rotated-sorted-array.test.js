const findMin = require('./153-find-maximum-in-rotated-sorted-array');

test('nums = [3,4,5,1,2] returns 1', () => {
  expect(findMin([3, 4, 5, 1, 2])).toBe(1);
});

test('nums = [4,5,6,7,0,1,2] returns 0', () => {
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
});

test('nums = [11,13,15,17] returns 11', () => {
  expect(findMin([11, 13, 15, 17])).toBe(11);
});
