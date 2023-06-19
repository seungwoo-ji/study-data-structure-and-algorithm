/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let max = 0;
  let left = 0;
  let zeroIdx = -1;

  for (let right = 0; right < nums.length; ++right) {
    if (nums[right] === 0) {
      if (zeroIdx > 0) {
        left = zeroIdx + 1;
      }

      zeroIdx = right;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};

module.exports = { findMaxConsecutiveOnes };
