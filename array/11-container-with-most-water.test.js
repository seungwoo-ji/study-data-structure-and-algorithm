const maxArea = require('./11-container-with-most-water');

test('height = [1,8,6,2,5,4,8,3,7] returns 49', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test('height = [1,1] returns 1', () => {
  expect(maxArea([1, 1])).toBe(1);
});
