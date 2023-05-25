const {
  productExceptSelf,
  productExceptSelfTwo,
  productExceptSelfThree,
  productExceptSelfFour,
} = require('./238-product-of-array-except-self');

test('nums = [1,2,3,4] returns [24,12,8,6]', () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test('nums = [-1,1,0,-3,3] returns [0,0,9,0,0]', () => {
  expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
});

test('nums = [1,2,3,4] returns [24,12,8,6]', () => {
  expect(productExceptSelfTwo([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test('nums = [-1,1,0,-3,3] returns [0,0,9,0,0]', () => {
  expect(productExceptSelfTwo([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
});

test('nums = [1,2,3,4] returns [24,12,8,6]', () => {
  expect(productExceptSelfThree([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test('nums = [-1,1,0,-3,3] returns [0,0,9,0,0]', () => {
  expect(productExceptSelfThree([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
});

test('nums = [1,2,3,4] returns [24,12,8,6]', () => {
  expect(productExceptSelfFour([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test('nums = [-1,1,0,-3,3] returns [0,0,9,0,0]', () => {
  expect(productExceptSelfFour([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
});
