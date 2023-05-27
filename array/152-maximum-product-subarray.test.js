const { maxProduct, maxProductTwo } = require('./152-maximum-product-subarray');

test('nums = [2,3,-2,4] returns 6', () => {
  expect(maxProduct([2, 3, -2, 4])).toBe(6);
});

test('nums = [-2,0,-1] returns 0', () => {
  expect(maxProduct([-2, 0, -1])).toBe(0);
});

test('nums = [-4,-3,-2 returns 12', () => {
  expect(maxProduct([-4, -3, -2])).toBe(12);
});

test('nums = [2,3,-2,4] returns 6', () => {
  expect(maxProductTwo([2, 3, -2, 4])).toBe(6);
});

test('nums = [-2,0,-1] returns 0', () => {
  expect(maxProductTwo([-2, 0, -1])).toBe(0);
});

test('nums = [-4,-3,-2 returns 12', () => {
  expect(maxProductTwo([-4, -3, -2])).toBe(12);
});
