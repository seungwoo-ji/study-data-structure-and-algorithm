/**
 * @param {number[]} cost
 * @return {number}
 */
// recursive brute force (DFS)
// time: O(2^N)
// space: O(N)
const minCostClimbingStairs = (cost) => {
  // find the minimum sum of costs to get to this index step
  const climb = (cost, index = cost.length) => {
    // base case where we start climbing from index 0 or index 1
    if (index <= 1) return 0;

    const climbOne = climb(cost, index - 1) + cost[index - 1];
    const climbTwo = climb(cost, index - 2) + cost[index - 2];

    return Math.min(climbOne, climbTwo);
  };

  return climb(cost);
};

// dp - memoization
// time: O(N)
// space: O(N)
const minCostClimbingStairsTwo = (cost) => {
  const climb = (cost, index = cost.length, memo = new Map()) => {
    if (index <= 1) return 0;

    if (memo.has(index)) return memo.get(index);

    const climbOne = climb(cost, index - 1) + cost[index - 1];
    const climbTwo = climb(cost, index - 2) + cost[index - 2];

    memo.set(index, Math.min(climbOne, climbTwo));
    return memo.get(index);
  };

  return climb(cost);
};

// dp - tabulation (bottom-up)
// time: O(N)
// space: O(N)
const minCostClimbingStairsThree = (cost) => {
  const dp = [];
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= cost.length; ++i) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[cost.length];
};

// dp - tabulation (bottom-up)
// time: O(N)
// space: O(1)
const minCostClimbingStairsFour = (cost) => {
  let one = 0;
  let two = 0;

  for (let i = 2; i <= cost.length; ++i) {
    [one, two] = [Math.min(one + cost[i - 1], two + cost[i - 2]), one];
  }

  return one;
};

module.exports = {
  minCostClimbingStairs,
  minCostClimbingStairsTwo,
  minCostClimbingStairsThree,
  minCostClimbingStairsFour,
};
