const { search, recursiveSearch } = require('./704-binary-search');

test('nums = [-1,0,3,5,9,12], target = 9 returns 4', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test('nums = [-1,0,3,5,9,12], target = 2 returns -1', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});

test('nums = [-1,0,3,5,9,12], target = 9 returns 4', () => {
  expect(recursiveSearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test('nums = [-1,0,3,5,9,12], target = 2 returns -1', () => {
  expect(recursiveSearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});
