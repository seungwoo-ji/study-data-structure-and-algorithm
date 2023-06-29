const {
  coinChange,
  coinChangeTwo,
  coinChangeThree,
  coinChangeFour,
  coinChangeFive,
  coinChangeSix,
} = require('./322-coin-change');

test('coins = [1,2,5] amount = 11 returns 3 (5 + 5 + 1)', () => {
  expect(coinChange([1, 2, 5], 11)).toBe(3);
});

test('coins = [2] amount = 3 returns -1 (not possible)', () => {
  expect(coinChange([2], 3)).toBe(-1);
});

test('coins = [1] amount = 0 returns 0', () => {
  expect(coinChange([1], 0)).toBe(0);
});

test('coins = [1,2,5] amount = 11 returns 3 (5 + 5 + 1)', () => {
  expect(coinChangeTwo([1, 2, 5], 11)).toBe(3);
});

test('coins = [2] amount = 3 returns -1 (not possible)', () => {
  expect(coinChangeTwo([2], 3)).toBe(-1);
});

test('coins = [1] amount = 0 returns 0', () => {
  expect(coinChangeTwo([1], 0)).toBe(0);
});

test('coins = [1,2,5] amount = 11 returns 3 (5 + 5 + 1)', () => {
  expect(coinChangeThree([1, 2, 5], 11)).toBe(3);
});

test('coins = [2] amount = 3 returns -1 (not possible)', () => {
  expect(coinChangeThree([2], 3)).toBe(-1);
});

test('coins = [1] amount = 0 returns 0', () => {
  expect(coinChangeThree([1], 0)).toBe(0);
});

test('coins = [2] amount = 3 returns -1 (not possible)', () => {
  expect(coinChangeFour([2], 3)).toBe(-1);
});

test('coins = [1] amount = 0 returns 0', () => {
  expect(coinChangeFour([1], 0)).toBe(0);
});

test('coins = [2] amount = 3 returns -1 (not possible)', () => {
  expect(coinChangeFive([2], 3)).toBe(-1);
});

test('coins = [1] amount = 0 returns 0', () => {
  expect(coinChangeFive([1], 0)).toBe(0);
});

test('coins = [2] amount = 3 returns -1 (not possible)', () => {
  expect(coinChangeSix([2], 3)).toBe(-1);
});

test('coins = [1] amount = 0 returns 0', () => {
  expect(coinChangeSix([1], 0)).toBe(0);
});
