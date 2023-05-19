const search = require('./33-search-in-rotated-sorted-array');

test('nums = [4,5,6,7,0,1,2], target = 0 returns 4', () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});
test('nums = [4,5,6,7,0,1,2], target = 3 returns -1', () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});
test('nums = [1], target = 0 returns -1', () => {
  expect(search([1], 0)).toBe(-1);
});
