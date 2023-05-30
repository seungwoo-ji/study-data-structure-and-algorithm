/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const result = [];

  // sort the nums in the ascending order
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; ++i) {
    // check if the current element is the first element or have the same value as the last element
    // to remove duplicates
    if (i === 0 || nums[i] !== nums[i - 1]) {
      const target = -nums[i];
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        if (target > nums[left] + nums[right]) {
          left++;
        } else if (target < nums[left] + nums[right]) {
          right--;
        } else {
          // target === nums[left] + nums[right]
          result.push([nums[i], nums[left], nums[right]]);

          // Then, we continue on searching for the sum between left and right
          // But, we need to remove possible duplications before proceeding
          const leftVal = nums[left];
          const rightVal = nums[right];
          while (left < right && nums[left] === leftVal) {
            left++;
          }
          while (left < right && nums[right] === rightVal) {
            right--;
          }
        }
      }
    }
  }

  return result;
};

module.exports = threeSum;
