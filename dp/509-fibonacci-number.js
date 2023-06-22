/**
 * @param {number} n
 * @return {number}
 */
// recursive brute force
// O(2^N)
// O(N)
const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

// dp - memoization (top-down)
// O(N)
// O(N)
const fibTwo = (n) => {
  const findFib = (n, memo) => {
    if (memo.has(n)) return memo.get(n);

    return fib(n - 1) + fib(n - 2);
  };

  const memo = new Map();
  memo.set(0, 0);
  memo.set(1, 1);

  return findFib(n, memo);
};

// dp - bottom-up
// O(N)
// O(1)
const fibThree = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; ++i) {
    [a, b] = [b, a + b];
  }

  return b;
};

module.exports = { fib, fibTwo, fibThree };
