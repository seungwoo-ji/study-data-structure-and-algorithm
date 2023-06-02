/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  // using bitwise operations #1
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1); // remove the least significant 1
    count++;
  }

  return count;
};

const hammingWeightTwo = (n) => {
  // using bitwise operation #2
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n >>>= 1;
  }

  return count;
};

module.exports = { hammingWeight, hammingWeightTwo };
