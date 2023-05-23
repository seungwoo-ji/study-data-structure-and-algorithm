/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  // lookup table
  const map = {};

  // populate the hashmap with the value : index pairs
  for (let i = 0; i < nums.length; ++i) {
    map[nums[i]] = i;
  }

  // find if the matching value (i.e. target - value) exists in the hashmap
  for (let i = 0; i < nums.length; ++i) {
    const matchingValue = target - nums[i];

    // check if the matchingValue's index is not the same as the current index
    if (Object.hasOwn(map, matchingValue) && map[matchingValue] !== i)
      return [i, map[matchingValue]];
  }

  return [];
};

const twoSumOnePass = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; ++i) {
    const matchingValue = target - nums[i];

    // note we do not have to check the current index anymore because we only iterate the array once
    if (Object.hasOwn(map, matchingValue)) {
      return [map[matchingValue], i]; // note we change the position of the first and the second index
    } else {
      map[nums[i]] = i;
    }
  }

  return [];
};

const twoSumMap = (nums, target) => {
  // create Map object
  const map = new Map();

  for (let i = 0; i < nums.length; ++i) {
    const matchingValue = target - nums[i];

    if (map.has(matchingValue)) {
      return [map.get(matchingValue), i];
    } else {
      map.set(nums[i], i);
    }
  }

  return [];
};

module.exports = { twoSum, twoSumOnePass, twoSumMap };
