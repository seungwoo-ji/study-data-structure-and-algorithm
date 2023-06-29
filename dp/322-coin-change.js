/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// recursive brute force using DFS
// time: O(M^N) where M is kinds of coins and N is amount
// space: O(N)
const coinChange = (coins, amount) => {
  // recursive function that finds the minimum number of coins to achieve the given amount
  const findMin = (coinIndex, amount) => {
    // base case
    if (coinIndex >= coins.length || amount <= 0) {
      return amount === 0 ? 0 : Infinity;
    }

    let result;

    if (coins[coinIndex] > amount) {
      const skipThisCoin = 0 + findMin(coinIndex + 1, amount);
      result = skipThisCoin;
    } else {
      const includeThisCoin = 1 + findMin(coinIndex, amount - coins[coinIndex]);
      const skipThisCoin = 0 + findMin(coinIndex + 1, amount);
      result = Math.min(includeThisCoin, skipThisCoin);
    }

    // returns 0 (found), infinity (not found), {number} (minimum amount coins to get the given amount)
    return result;
  };

  const result = findMin(0, amount);
  return result === Infinity ? -1 : result;
};

// recursive DFS version two
// time: O(M^N) where M is kinds of coins and N is amount
// space: O(N)
const coinChangeTwo = (coins, amount) => {
  const findMin = (amount) => {
    if (amount === 0) return 0;

    let count = Infinity;
    for (const coin of coins) {
      if (coin <= amount) {
        count = Math.min(count, findMin(amount - coin) + 1);
      }
    }

    return count;
  };

  const count = findMin(amount);
  return count === Infinity ? -1 : count;
};

// dp - memoization (top-down approach)
// time: O(M*N)
// space: O(M*N)
const coinChangeThree = (coins, amount) => {
  const memo = Array.from(new Array(12 + 1), () => new Array(10000 + 1));

  const findMin = (coinIndex, amount) => {
    if (coinIndex >= coins.length || amount <= 0) {
      return amount === 0 ? 0 : Infinity;
    }

    if (memo[coinIndex][amount] !== undefined) return memo[coinIndex][amount];

    let result;

    if (coins[coinIndex] > amount) {
      const skipThisCoin = 0 + findMin(coinIndex + 1, amount);
      result = skipThisCoin;
      memo[coinIndex][amount] = result;
    } else {
      const includeThisCoin = 1 + findMin(coinIndex, amount - coins[coinIndex]);
      const skipThisCoin = 0 + findMin(coinIndex + 1, amount);
      result = Math.min(includeThisCoin, skipThisCoin);
      memo[coinIndex][amount] = result;
    }

    return result;
  };

  const result = findMin(0, amount);

  return result === Infinity ? -1 : result;
};

// dp - memoization (top-down approach) version two
// time: O(M*N)
// space: O(M*N)
const coinChangeFour = (coins, amount) => {
  const memo = new Map();
  memo.set(0, 0);

  const findMin = (amount) => {
    if (memo.has(amount)) return memo.get(amount);

    let count = Infinity;

    for (const coin of coins) {
      if (coin <= amount) {
        count = Math.min(count, findMin(amount - coin) + 1);
      }
    }

    memo.set(amount, count);
    return count;
  };

  const count = findMin(amount);
  return count === Infinity ? -1 : count;
};

// BFS
// time: O(N*M)
// space: O(N)
const coinChangeFive = (coins, amount) => {
  const queue = [0];
  const set = new Set();
  let depth = 0; // number of coins

  while (queue.length > 0) {
    const total = queue.shift();
    if (total === amount) return depth;
    if (set.has(total)) continue;
    set.add(total);
    for (const coin of coins) {
      if (total + coin <= amount) {
        queue.push(total + coin);
        depth++;
      }
    }
  }

  return -1;
};

// dp - tabulation (bottom-up approach)
// time: O(M*N)
// space: O(N)
const coinChangeSix = (coins, amount) => {
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

module.exports = {
  coinChange,
  coinChangeTwo,
  coinChangeThree,
  coinChangeFour,
  coinChangeFive,
  coinChangeSix,
};
