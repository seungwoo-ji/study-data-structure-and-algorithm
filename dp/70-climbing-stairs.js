/**
 * @param {number} n
 * @return {number}
 */
// recursive brute force
// time: O(2^N)
// space: O(N)
const climbStairs = (n) => {
  const climb = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;

    return climb(n - 1) + climb(n - 2);
  };

  return climb(n);
};

// dp - memoization
// time: O(N)
// space: O(N)
const climbStairsTwo = (n) => {
  const climb = (n, memo = { 1: 1, 2: 2 }) => {
    if (memo[n]) return memo[n];

    memo[n] = climb(n - 1) + climb(n - 2);
    return memo[n];
  };
  return climb(n);
};

// dp - bottom-up approach
// time: O(N)
// space: O(1)
const climbStairsThree = (n) => {
  // n = 5
  // 0  1  2  3  4  5
  //             1  1
  //           one two
  let one = 1;
  let two = 1;

  for (let i = 2; i <= n; ++i) {
    [one, two] = [one + two, one];
  }

  return one;
};

module.exports = { climbStairs, climbStairsTwo, climbStairsThree };
