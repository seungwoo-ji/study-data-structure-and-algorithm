/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let max = nums[0];
  let currSum = max;

  for (let i = 1; i < nums.length; ++i) {
    currSum = Math.max(nums[i], nums[i] + currSum);
    max = Math.max(currSum, max);
  }

  return max;
};

module.exports = maxSubArray;
