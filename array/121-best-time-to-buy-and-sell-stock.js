/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let max = 0;
  let low = prices[0];

  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] < low) {
      low = prices[i];
    } else {
      max = Math.max(prices[i] - low, max);
    }
  }

  return max;
};

module.exports = maxProfit;
