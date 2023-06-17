/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
// sliding window
// time: O(N)
// space: O(1)
const numOfSubarrays = (arr, k, threshold) => {
  let left = 0;
  let count = 0;
  let sum = 0;
  let target = k * threshold; // to avoid using division

  for (let right = 0; right < arr.length; ++right) {
    sum += arr[right];

    if (right - left + 1 === k) {
      if (sum >= target) count++;

      sum -= arr[left];
      left++;
    }
  }

  return count;
};

module.exports = { numOfSubarrays };
