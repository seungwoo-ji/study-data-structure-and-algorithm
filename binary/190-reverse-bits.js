/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
  let result = 0;

  // n is a 32-bits integer
  for (let i = 0; i < 32; ++i) {
    result = result << 1;
    const lsb = n & 1;
    result = result | lsb;
    n = n >>> 1;
  }

  return result >>> 0; // making sure the result to be unsigned 32-bit integer
};

module.exports = { reverseBits };
