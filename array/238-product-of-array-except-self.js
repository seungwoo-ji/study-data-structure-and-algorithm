/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const left = [];
  const right = nums.slice(1, nums.length);
  const result = [];

  for (let i = 0; i < nums.length; ++i) {
    const leftProduct = left.reduce((prev, curr) => prev * curr, 1);
    const rightProduct = right.reduce((prev, curr) => prev * curr, 1);

    result.push(
      leftProduct * rightProduct === 0 ? 0 : leftProduct * rightProduct
    );
    left.push(nums[i]);
    right.shift();
  }

  return result;
};

const productExceptSelfTwo = (nums) => {
  let product = 1;
  const left = [];
  left[0] = 1;

  // nums    1             2             3             4
  // left                  1         1 * 2     1 * 2 * 3
  for (let i = 1; i < nums.length; ++i) {
    left[i] = product * nums[i - 1];
    product *= nums[i - 1];
  }

  product = 1;
  const right = [];
  right[nums.length - 1] = 1;

  // nums            1             2             3             4
  // right   2 * 3 * 4         4 * 3             4
  for (let i = nums.length - 2; i >= 0; --i) {
    right[i] = product * nums[i + 1];
    product *= nums[i + 1];
  }

  for (let i = 0; i < left.length; ++i) {
    left[i] = left[i] * right[i] === 0 ? 0 : left[i] * right[i];
  }

  return left;
};

// optimized version of the second solution
const productExceptSelfThree = (nums) => {
  const left = [];
  left[0] = 1;

  for (let i = 1; i < nums.length; ++i) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  const right = [];
  right[nums.length - 1] = 1;

  for (let i = nums.length - 2; i >= 0; --i) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < left.length; ++i) {
    left[i] = left[i] * right[i] === 0 ? 0 : left[i] * right[i];
  }

  return left;
};

// further optimized version of the second solution with space complexity of O(1)
const productExceptSelfFour = (nums) => {
  const left = [];
  left[0] = 1;

  for (let i = 1; i < nums.length; ++i) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  let right = 1;

  for (let i = nums.length - 1; i >= 0; --i) {
    left[i] = right * left[i] === 0 ? 0 : right * left[i];
    right *= nums[i];
  }

  return left;
};

module.exports = {
  productExceptSelf,
  productExceptSelfTwo,
  productExceptSelfThree,
  productExceptSelfFour,
};
