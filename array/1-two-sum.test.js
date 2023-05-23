const { twoSum, twoSumOnePass, twoSumMap } = require('./1-two-sum');

test('nums = [2,7,11,15], target = 9 returns [0, 1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('nums = [3,2,4], target = 6 returns [1,2]', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('nums = [3,3], target = 6 returns [0, 1]', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test('nums = [2,7,11,15], target = 9 returns [0, 1]', () => {
  expect(twoSumOnePass([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('nums = [3,2,4], target = 6 returns [1,2]', () => {
  expect(twoSumOnePass([3, 2, 4], 6)).toEqual([1, 2]);
});

test('nums = [3,3], target = 6 returns [0, 1]', () => {
  expect(twoSumOnePass([3, 3], 6)).toEqual([0, 1]);
});

test('nums = [2,7,11,15], target = 9 returns [0, 1]', () => {
  expect(twoSumMap([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('nums = [3,2,4], target = 6 returns [1,2]', () => {
  expect(twoSumMap([3, 2, 4], 6)).toEqual([1, 2]);
});

test('nums = [3,3], target = 6 returns [0, 1]', () => {
  expect(twoSumMap([3, 3], 6)).toEqual([0, 1]);
});
