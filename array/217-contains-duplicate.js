/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) {
      return true;
    } else {
      map.set(num, true);
    }
  }

  return false;
};

const containsDulicateWithSet = (nums) => {
  const set = new Set(nums);

  return nums.length > set.size;
};

module.exports = { containsDuplicate, containsDulicateWithSet };
