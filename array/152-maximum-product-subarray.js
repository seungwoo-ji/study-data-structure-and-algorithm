/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let max = nums[0];
  let prevMax = max;
  let prevMin = max;

  for (let i = 1; i < nums.length; ++i) {
    let currMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
    let currMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);

    max = Math.max(max, currMax);

    prevMax = currMax;
    prevMin = currMin;
  }

  return max;
};

// We can also solve this question in two pointer method.
// Considering there is no zero in the array, the subarray of the maximum product
// has to include either the first element or the last element.
// If the array happens to include zero, we can divide the array into two sub-arrays before and after
// the zero (prefix & suffix) and start multiplying again from the number before and after the zero.
const maxProductTwo = (nums) => {
  let max = nums[0];
  let left = 0,
    right = 0;

  for (let i = 0; i < nums.length; ++i) {
    left = (left === 0 ? 1 : left) * nums[i];
    right = (right === 0 ? 1 : right) * nums[nums.length - 1 - i];
    max = Math.max(max, left, right);
  }

  return max === 0 ? 0 : max;
};

module.exports = { maxProduct, maxProductTwo };
