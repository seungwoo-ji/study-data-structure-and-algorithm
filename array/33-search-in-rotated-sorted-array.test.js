const { searchOne, searchTwo } = require('./33-search-in-rotated-sorted-array');

test('nums = [4,5,6,7,0,1,2], target = 0 returns 4', () => {
  expect(searchOne([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});
test('nums = [4,5,6,7,0,1,2], target = 3 returns -1', () => {
  expect(searchOne([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});
test('nums = [1], target = 0 returns -1', () => {
  expect(searchOne([1], 0)).toBe(-1);
});

test('nums = [4,5,6,7,0,1,2], target = 0 returns 4', () => {
  expect(searchTwo([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});
test('nums = [4,5,6,7,0,1,2], target = 3 returns -1', () => {
  expect(searchTwo([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});
test('nums = [1], target = 0 returns -1', () => {
  expect(searchTwo([1], 0)).toBe(-1);
});
