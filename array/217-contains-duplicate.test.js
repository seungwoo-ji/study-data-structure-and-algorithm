const {
  containsDuplicate,
  containsDulicateWithSet,
} = require('./217-contains-duplicate');

test('nums = [1,2,3,1] returns true', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test('nums = [1,2,3,4] returns false', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test('nums = [1,1,1,3,3,4,3,2,4,2] returns true', () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});

test('nums = [1,2,3,1] returns true', () => {
  expect(containsDulicateWithSet([1, 2, 3, 1])).toBe(true);
});

test('nums = [1,2,3,4] returns false', () => {
  expect(containsDulicateWithSet([1, 2, 3, 4])).toBe(false);
});

test('nums = [1,1,1,3,3,4,3,2,4,2] returns true', () => {
  expect(containsDulicateWithSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});
