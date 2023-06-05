const {
  missingNumber,
  missingNumberTwo,
  missingNumberThree,
  missingNumberFour,
} = require('./268-missing-number');

test('nums = [3,0,1] returns 2', () => {
  expect(missingNumber([3, 0, 1])).toBe(2);
});

test('nums = [0,1] returns 2', () => {
  expect(missingNumber([0, 1])).toBe(2);
});

test('nums = [9,6,4,2,3,5,7,0,1] returns 8', () => {
  expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
});

test('nums = [3,0,1] returns 2', () => {
  expect(missingNumberTwo([3, 0, 1])).toBe(2);
});

test('nums = [0,1] returns 2', () => {
  expect(missingNumberTwo([0, 1])).toBe(2);
});

test('nums = [9,6,4,2,3,5,7,0,1] returns 8', () => {
  expect(missingNumberTwo([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
});

test('nums = [3,0,1] returns 2', () => {
  expect(missingNumberThree([3, 0, 1])).toBe(2);
});

test('nums = [0,1] returns 2', () => {
  expect(missingNumberThree([0, 1])).toBe(2);
});

test('nums = [9,6,4,2,3,5,7,0,1] returns 8', () => {
  expect(missingNumberThree([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
});

test('nums = [3,0,1] returns 2', () => {
  expect(missingNumberFour([3, 0, 1])).toBe(2);
});

test('nums = [0,1] returns 2', () => {
  expect(missingNumberFour([0, 1])).toBe(2);
});

test('nums = [9,6,4,2,3,5,7,0,1] returns 8', () => {
  expect(missingNumberFour([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
});
