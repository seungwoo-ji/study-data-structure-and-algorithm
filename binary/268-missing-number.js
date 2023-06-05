/**
 * @param {number[]} nums
 * @return {number}
 */
// using binary search --> time: O(n log n), space: O(1)
const missingNumber = (nums) => {
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length;

  while (start < end) {
    // e.g. when n = 5 and 3 does not exist
    //    i: 0  1  2  3  4  5
    // nums: 0  1  2  4  5
    // note that mid < nums[mid] starting from i = 3 which is missing from the array
    const mid = Math.floor(start + (end - start) / 2);
    if (mid < nums[mid]) end = mid;
    else start = mid + 1;
  }

  return start;
};

// using lookup table --> time: O(n), space: O(n)
const missingNumberTwo = (nums) => {
  const map = new Map();

  for (const num of nums) {
    map.set(num, true);
  }

  for (let i = 0; i <= nums.length; ++i) {
    if (!map.has(i)) return i;
  }
};

// using sum equation (sum = n * (n + 1) / 2) --> time: O(n), space(1) with possible overflow
const missingNumberThree = (nums) => {
  const len = nums.length;
  const sum = (len * (len + 1)) / 2;
  const arrSum = nums.reduce((prev, curr) => prev + curr);

  return sum - arrSum;
};

// using XOR bitwise operator  --> time: O(n), space(1)
// we can use XOR bitwise operator to find the unique number
// this is possible because of the XOR's following characteristics:
// xor is commutative: A ^ B = B ^ A
// xor is associative: (A ^ B) ^ C = A ^ (B ^ C)
// xor with zero does nothing: A ^ 0 = A
// xor something twice removes it: A ^ A = 0
//  A ^ B ^ X ^ A ^ B  =  A^A ^ B^B ^ X  =  0 ^ 0 ^ X   =  X
//                      \ reorder                       \ removing zeroes
const missingNumberFour = (nums) => {
  let result = nums.length;

  for (let i = 0; i < nums.length; ++i) {
    result ^= nums[i];
    result ^= i;
  }

  return result;
};

module.exports = {
  missingNumber,
  missingNumberTwo,
  missingNumberThree,
  missingNumberFour,
};
