/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// sliding window
// time: O(N)
// space: O(1)
const longestOnes = (nums, k) => {
  let left = 0;
  let right = 0;
  let zeroCount = 0;
  let max = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }

      left++;
    }

    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
};

module.exports = { longestOnes };
