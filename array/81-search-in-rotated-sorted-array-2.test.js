const search = require('./81-search-in-rotated-sorted-array-2');

test('nums = [2,5,6,0,0,1,2], target = 0 returns true', () => {
  expect(search([2, 5, 6, 0, 0, 1, 2], 0)).toBe(true);
});

test('nums = [2,5,6,0,0,1,2], target = 3 returns false', () => {
  expect(search([2, 5, 6, 0, 0, 1, 2], 3)).toBe(false);
});

test('nums = [1], target = 1 returns true', () => {
  expect(search([1], 1)).toBe(true);
});

test('nums = [1,2,1], target = 1 returns true', () => {
  expect(search([1, 2, 1], 1)).toBe(true);
});

test('nums = [2,2,2,3,2,2,2], target = 3 returns true', () => {
  expect(search([2, 2, 2, 3, 2, 2, 2], 3)).toBe(true);
});

test('nums = [1,1,1,1,1,1,1,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1], target = 13 returns true', () => {
  expect(
    search(
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      13
    )
  ).toBe(true);
});
