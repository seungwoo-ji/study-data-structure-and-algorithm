const {
  findMaxConsecutiveOnes,
  findMaxConsecutiveOnesTwo,
} = require('./485-max-consecutive-ones');

test('nums = [1,1,0,1,1,1] returns 3', () => {
  expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
});

test('nums = [1,0,1,1,0,1] returns 3', () => {
  expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
});

test('nums = [1,1,0,1,1,1] returns 3', () => {
  expect(findMaxConsecutiveOnesTwo([1, 1, 0, 1, 1, 1])).toBe(3);
});

test('nums = [1,0,1,1,0,1] returns 3', () => {
  expect(findMaxConsecutiveOnesTwo([1, 0, 1, 1, 0, 1])).toBe(2);
});
