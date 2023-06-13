/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// binary search
// time: O(N log N)
// space: O(1)
const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; ++i) {
    const complement = target - numbers[i];
    let start = i + 1;
    let end = numbers.length;

    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);

      if (numbers[mid] === complement) {
        return [i + 1, mid + 1];
      } else if (numbers[mid] < complement) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return [-1, -1];
};

// two pointer
// time: O(N)
// space: O(1)
const twoSumTwo = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
};

module.exports = { twoSum, twoSumTwo };
