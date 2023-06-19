/**
 * @param {number[]} nums
 * @return {number}
 */
// time: O(N)
// space: O(N)
const findMaxConsecutiveOnes = (nums) => {
  let sum = 0;
  let largest = 0;

  for (num of nums) {
    if (num) {
      sum++;
    } else {
      sum = 0;
    }

    largest = Math.max(sum, largest);
  }

  return largest;
};

// sliding window
// time: O(N)
// space: O(N)
const findMaxConsecutiveOnesTwo = (nums) => {
  let left = 0;
  let max = 0;

  for (let right = 0; right < nums.length; ++right) {
    if (nums[right] === 0) {
      left = right + 1;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};

module.exports = { findMaxConsecutiveOnes, findMaxConsecutiveOnesTwo };
