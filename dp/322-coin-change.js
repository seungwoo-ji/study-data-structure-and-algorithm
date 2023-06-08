/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// recursive brute force using DFS
// time: O(2^N)
// space: O(N)
const coinChange = (coins, amount) => {
  // recursive function that finds the minimum number of coins to achieve the given amount
  const findMin = (coins, coinIndex, amount) => {
    // base case
    if (coinIndex >= coins.length || amount <= 0) {
      return amount === 0 ? 0 : Infinity;
    }

    let result;

    if (coins[coinIndex] > amount) {
      const skipThisCoin = 0 + findMin(coins, coinIndex + 1, amount);
      result = skipThisCoin;
    } else {
      const includeThisCoin =
        1 + findMin(coins, coinIndex, amount - coins[coinIndex]);
      const skipThisCoin = 0 + findMin(coins, coinIndex + 1, amount);
      result = Math.min(includeThisCoin, skipThisCoin);
    }

    // returns 0 (found), infinity (not found), {number} (minimum amount coins to get the given amount)
    return result;
  };

  const result = findMin(coins, 0, amount);
  return result === Infinity ? -1 : result;
};

// dp - memoization (top-down approach)
// time: O(N)
// space: O(N)
const coinChangeTwo = (coins, amount) => {
  const findMin = (coins, coinIndex, amount, memo = {}) => {
    if (coinIndex >= coins.length || amount <= 0) {
      return amount === 0 ? 0 : Infinity;
    }

    if (memo[coins[coinIndex]]) return memo[coins[coinIndex]];

    let result;

    if (coins[coinIndex] > amount) {
      const skipThisCoin = 0 + findMin(coins, coinIndex + 1, amount);
      result = skipThisCoin;
      memo[coins[coinIndex]] = result;
    } else {
      const includeThisCoin =
        1 + findMin(coins, coinIndex, amount - coins[coinIndex]);
      const skipThisCoin = 0 + findMin(coins, coinIndex + 1, amount);
      result = Math.min(includeThisCoin, skipThisCoin);
      memo[coins[coinIndex]] = result;
    }

    return result;
  };

  const result = findMin(coins, 0, amount);
  return result === Infinity ? -1 : result;
};

// dp - tabulation (bottom-up approach)
// time: O(N)
// space: O(N)
const coinChangeThree = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let sum = 1; sum <= amount; ++sum) {
    for (let coinIndex = 0; coinIndex < coins.length; ++coinIndex) {
      // note that we only check if the difference between sum and current coin value is non-negative value
      if (sum - coins[coinIndex] >= 0) {
        dp[sum] = Math.min(dp[sum], 1 + dp[sum - coins[coinIndex]]);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

module.exports = { coinChange, coinChangeTwo, coinChangeThree };
