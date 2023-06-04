const {
  countBits,
  countBitsTwo,
  countBitsThree,
  countBitsFour,
} = require('./338-counting-bits');

test('n = 2 returns [0,1,1]', () => {
  expect(countBits(2)).toEqual([0, 1, 1]);
});

test('n = 5 returns [0,1,1,2,1,2]', () => {
  expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
});

test('n = 2 returns [0,1,1]', () => {
  expect(countBitsTwo(2)).toEqual([0, 1, 1]);
});

test('n = 5 returns [0,1,1,2,1,2]', () => {
  expect(countBitsTwo(5)).toEqual([0, 1, 1, 2, 1, 2]);
});

test('n = 2 returns [0,1,1]', () => {
  expect(countBitsThree(2)).toEqual([0, 1, 1]);
});

test('n = 5 returns [0,1,1,2,1,2]', () => {
  expect(countBitsThree(5)).toEqual([0, 1, 1, 2, 1, 2]);
});

test('n = 2 returns [0,1,1]', () => {
  expect(countBitsFour(2)).toEqual([0, 1, 1]);
});

test('n = 5 returns [0,1,1,2,1,2]', () => {
  expect(countBitsFour(5)).toEqual([0, 1, 1, 2, 1, 2]);
});
