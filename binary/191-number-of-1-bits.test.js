const { hammingWeight, hammingWeightTwo } = require('./191-number-of-1-bits');

test('n = 00000000000000000000000000001011 returns 3', () => {
  expect(hammingWeight(parseInt('00000000000000000000000000001011', 2))).toBe(
    3
  );
});

test('n = 00000000000000000000000010000000 returns 1', () => {
  expect(hammingWeight(parseInt('00000000000000000000000010000000', 2))).toBe(
    1
  );
});

test('n = 11111111111111111111111111111101 returns 31', () => {
  expect(hammingWeight(parseInt('11111111111111111111111111111101', 2))).toBe(
    31
  );
});

test('n = 00000000000000000000000000001011 returns 3', () => {
  expect(
    hammingWeightTwo(parseInt('00000000000000000000000000001011', 2))
  ).toBe(3);
});

test('n = 00000000000000000000000010000000 returns 1', () => {
  expect(
    hammingWeightTwo(parseInt('00000000000000000000000010000000', 2))
  ).toBe(1);
});

test('n = 11111111111111111111111111111101 returns 31', () => {
  expect(
    hammingWeightTwo(parseInt('11111111111111111111111111111101', 2))
  ).toBe(31);
});
