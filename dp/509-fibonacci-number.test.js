const { fib, fibTwo, fibThree } = require('./509-fibonacci-number');

test('n = 2 returns 1', () => {
  expect(fib(2)).toBe(1);
});

test('n = 3 returns 2', () => {
  expect(fib(3)).toBe(2);
});

test('n = 4 returns 3', () => {
  expect(fib(4)).toBe(3);
});

test('n = 2 returns 1', () => {
  expect(fibTwo(2)).toBe(1);
});

test('n = 3 returns 2', () => {
  expect(fibTwo(3)).toBe(2);
});

test('n = 4 returns 3', () => {
  expect(fibTwo(4)).toBe(3);
});

test('n = 2 returns 1', () => {
  expect(fibThree(2)).toBe(1);
});

test('n = 3 returns 2', () => {
  expect(fibThree(3)).toBe(2);
});

test('n = 4 returns 3', () => {
  expect(fibThree(4)).toBe(3);
});
