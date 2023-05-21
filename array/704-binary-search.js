/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

// binary search using recursion
const recursiveSearch = (nums, target) => {
  const search = (nums, target, start, end) => {
    const mid = Math.floor(start + (end - start) / 2);

    while (start <= end) {
      if (nums[mid] === target) return mid;
      if (nums[mid] > target) {
        return search(nums, target, start, mid - 1);
      } else {
        return search(nums, target, mid + 1, end);
      }
    }

    return -1;
  };

  return search(nums, target, 0, nums.length - 1);
};

module.exports = { search, recursiveSearch };
