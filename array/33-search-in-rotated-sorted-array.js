/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Solution #2
const searchTwo = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;

    // Check if the mid point lies within the first half or the second half of the array
    if (nums[mid] >= nums[start]) {
      // first half
      if (target >= nums[start] && target <= nums[mid]) {
        // see if the target lies between start and mid point in the first half of the array
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // second half
      if (target <= nums[end] && target >= nums[mid]) {
        // see if the target lies between mid point and end in the second half of the array
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

// Solution #1
const searchOne = (nums, target) => {
  // find the index of rotating point using the binary search
  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[end]) {
      // e.g. [3, 5, 6, 1, 2]
      start = start + 1;
    } else {
      // e.g. [3, 5, 0, 1, 2]
      end = mid;
    }
  }

  let rp = start;

  // check if the target is in the array before the rotating point or after
  if (target >= nums[rp] && target <= nums[nums.length - 1]) {
    start = rp;
    end = nums.length - 1;
  } else {
    start = 0;
    end = rp - 1;
  }

  // find the target using the binary search
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

module.exports = { searchOne, searchTwo };
