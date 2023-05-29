/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    // to avoid a situation where nums[mid] === nums[end] like [3, 3, 1, 3]
    if (nums[start] === nums[mid] && nums[end] === nums[mid]) {
      start++;
      end--;
    } else {
      if (nums[mid] > nums[end]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    // alternatively, we can reduce the end by one when nums[mid] === nums[end]
    // if (nums[mid] > nums[end]) {
    //   start = mid + 1;
    // } else if (nums[mid] < nums[end]) {
    //   end = mid;
    // } else { // i.e. nums[mid] === nums[end]
    //   end--;
    // }
  }

  return nums[start];
};

module.exports = findMin;
