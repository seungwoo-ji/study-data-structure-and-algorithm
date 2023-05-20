/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return true;

    // remove duplicating head and tail only when the nums[mid] has the same value
    // we cannot simply check whether values as start and end are the same because the mid value can be different e.g.) [1, 2, 1]
    if (nums[start] === nums[mid] && nums[end] === nums[mid]) {
      start++;
      end--;

      // check if the mid point lies on the first half or the second half of the array
      // first half
    } else if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && nums[mid] >= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
      // second half
    } else {
      if (target <= nums[end] && nums[mid] <= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return false;
};

module.exports = search;
