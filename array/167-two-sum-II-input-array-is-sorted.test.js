const { twoSum, twoSumTwo } = require('./167-two-sum-II-input-array-is-sorted');

test('numbers = [2,7,11,15], target = 9 returns [1,2]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
});

test('numbers = [2,3,4], target = 6 returns [1,3]', () => {
  expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
});

test('numbers = [-1,0], target = -1 returns [1,2]', () => {
  expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
});

test('numbers = [2,7,11,15], target = 9 returns [1,2]', () => {
  expect(twoSumTwo([2, 7, 11, 15], 9)).toEqual([1, 2]);
});

test('numbers = [2,3,4], target = 6 returns [1,3]', () => {
  expect(twoSumTwo([2, 3, 4], 6)).toEqual([1, 3]);
});

test('numbers = [-1,0], target = -1 returns [1,2]', () => {
  expect(twoSumTwo([-1, 0], -1)).toEqual([1, 2]);
});
