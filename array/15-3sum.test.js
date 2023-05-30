const threeSum = require('./15-3sum');

test('nums = [-1,0,1,2,-1,-4] returns [[-1,-1,2],[-1,0,1]]', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

test('nums = [0,1,1] returns []', () => {
  expect(threeSum([0, 1, 1])).toEqual([]);
});

test('nums = [0,0,0] returns [[0,0,0]]', () => {
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});
